{strip}
  {if isset($objectsAndOffersWithPriority)}
    {assign var=offersObjects value=$objectsAndOffersWithPriority}
  {else}
    {assign var=offersObjects value=$objects}
  {/if}
  {if isset($googleMapsActive) && $googleMapsActive == true}
    <div class="offer-right side-map mb-5">
      <div id="wide_view_maps">&times;</div>
      <div id="modal-map-canvas" class="google-maps-container-wide contact-mainmap"></div>
    
      {foreach from=$offersObjects item=object key=object_key}
        <div id="googleMapsLocation_{$object_key}" style="display:none;">
          <div>
            <strong>{$object["localization"]["street"]}</strong><br /><br />
            <span>{$object["localization"]["zipcode"]}, {$object["localization"]["city"]}</span>
          </div>
        </div>
      {/foreach}
    
      <script>
        var labels = '123456789';
        var labelIndex = 0;
        var mapModal;
    
        function initializeModal() {
          if (typeof google != "undefined") {
            var bounds = new google.maps.LatLngBounds();
            mapModal = new google.maps.Map(document.getElementById('modal-map-canvas'));
    
            var locationData = [];
    
            {foreach from=$offersObjects item=object key=object_key}
              locationData.push({
                "lng": "{$object['localization']['geolocation_lng']}",
                "lat": "{$object['localization']['geolocation_lat']}",
                "id": "{$object['localization']['id']}",
                "city": "{$object['localization']['city']}",
                "street": "{$object['localization']['street']}",
                "zipcode": "{$object['localization']['zipcode']}",
                "country": "{$object['localization']['country']}"
              });
            {/foreach}
    
            $.each(locationData, function(index, value) {
    
              var markerIcon = {
                url: '../data/frontpage/template/pl/files/gfx/marker_icon.png',
                /*TODO - where is the icon ?*/
                origin: new google.maps.Point(-11, -11),
                anchor: new google.maps.Point(32, 65),
                labelOrigin: new google.maps.Point(40, 33)
              };
    
              var latLng = new google.maps.LatLng(value['lat'], value['lng']);
              var marker = new google.maps.Marker({
                position: latLng,
                title: value[`street`] + ', ' + value[`zipcode`] + ' ' + value[`city`],
                icon: markerIcon,
                label: {
                  text: labels[labelIndex++ % labels.length]
                }
              });
              marker.setMap(mapModal);
              bounds.extend(latLng);
    
              var contentString = $('#googleMapsLocation_' + parseInt(value['id'])).children().html();
              var infowindow = new google.maps.InfoWindow({
                content: contentString,
                maxWidth: 300
              });
              marker.addListener('click', function() {
                infowindow.open(mapModal, marker);
              });
            });
            google.maps.event.addListener(mapModal, 'zoom_changed', function() {
              zoomChangeBoundsListener =
                google.maps.event.addListener(mapModal, 'bounds_changed', function(event) {
                  if (this.getZoom() > 15 && this.initialZoom == true) {
                    this.setZoom(15);
                    this.initialZoom = false;
                  }
                  google.maps.event.removeListener(zoomChangeBoundsListener);
                });
            });
            mapModal.initialZoom = true;
            mapModal.fitBounds(bounds);
          } else {
            setTimeout("initializeModal()", 500);
          }
        }
        initializeModal();
      </script>
    
      <script src="https://maps.googleapis.com/maps/api/js?key={$apiMapsKey}&amp;v=3.exp"></script>
    
      {* map *}
    
      {* okienka z adresem i linkiem do oferty z danej lokalizacji *}
      {foreach from = $locations item = location}
        <div id="googleMapsLocation_{$location.id}" style="display: none">
          <div class="content">
            <div class="siteNotice"></div>
            <div class="bodyContent">
              <p><b>{$location.name}</b></p>
              <p class="noMargin">{$location.street}</p>
              <p class="noMargin">{$location.zipcode} {$location.city}, {$location.country}</p>
              <p><a onclick="generateWidgetIdoSellBooking(this)" data-currency="{$currentCurrency['id']}" data-language="{$language['id']}" data-location="{$location.id}">{$TXT.ZobaczOferte}</a></p>
            </div>
          </div>
        </div>
      {/foreach}
    
      <div class="clearfix"></div>
      <div class="directions">
        <button class="btn" id="showGoogleMaps">{$TXT.PokazNaMapie}</button>
      </div>
    </div>
  {else}
    <link rel="stylesheet" href="{$path}/files/leaflet/leaflet.css" />
    <script src="{$path}/files/leaflet/leaflet.js"></script>
    <div class="offer-right side-map mb-5 test2">
      <div id="wide_view_maps">&times;</div>
      <div id="map_container"></div>
      <script>
        var locationData = [];
    
        {foreach from=$offersObjects item=object key=object_key}
          locationData.push({
            "lng": "{$object['localization']['geolocation_lng']}",
            "lat": "{$object['localization']['geolocation_lat']}",
            "id": "{$object_key}",
            "city": "{$object['localization']['city']}",
            "street": "{$object['localization']['street']}",
            "zipcode": "{$object['localization']['zipcode']}",
            "country": "{$object['localization']['country']}"
          });
        {/foreach}
        var locationLng = [];
        let cid = {$currentCurrency["id"]};
        let lid = {$language["id"]};
        {literal}
          var mymap = L.map('map_container').setView([53.4279, 14.5368], 13);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(mymap);
        {/literal}
    
    
    
        locationData.forEach(function(value) {
          let href = `<a onclick="generateWidgetIdoSellBooking(this)" data-currency="`+cid+`" data-language="`+lid+`" data-location="`+value["id"]+`">{$TXT.ZobaczOferte}</a>`;
          L.marker([value['lat'], value['lng']], {
            alt: value[`street`] + ', ' + value[`zipcode`] + ' ' + value[`city`]
          }).addTo(mymap)
            .bindPopup(value['street'] + '<br/>' + value['zipcode'] + ' ' + value['city'] + ', ' + value['country'] + '<br/>' + href)
            .openPopup();
          locationLng.push([value['lat'], value['lng']]);
        });
        mymap.fitBounds([locationLng]);
      </script>
    
      <div class="clearfix"></div>
    </div>
  {/if}
{/strip}