{include file="header.tpl"}

{strip}
  <main id="pageContent" class="contact-page page">
  
    <div class="contact">
      <div class="container">
        <div class="row align-items-start">
          <div class="col-12 col-md-6 mr-md-auto">

            {if $sectionContactVisibility['visibility_hotel'] == '1'}
              <h1 class="contact__label">{$TXT.DaneKontaktowe}</h1>
              <div class="contact__block --links">
                <ul>
                  <li><strong>{$TXT.Telefon}</strong>
                    <a class="contact__tel" href="tel:{$hotel_description_section['object_phone']}"><span>{$hotel_description_section['object_phone']}</span></a>
                    {if $hotel_description_section['object_phone_2'] != ''}
                      {if $hotel_description_section['object_phone_2'] != '.'}
                        <span>, </span>
                        <a class="contact__tel" href="tel:{$hotel_description_section['object_phone_2']}"><span>{$hotel_description_section['object_phone_2']}</span></a>
                      {/if}
                    {/if}
                  </li>
                  <li><strong>{$TXT.Email}</strong><a class="contact__email" href="mailto:{$hotel_description_section['object_email']}"><span>{$hotel_description_section['object_email']}</span></a></li>
                  {if $hotel_description_section['object_skype'] != ''}
                    <li><strong>{$TXT.Skype}</strong><a class="object_skype" href="skype:{$hotel_description_section['object_skype']}"><span>{$hotel_description_section['object_skype']}</span></a></li>
                  {/if}
                  {if $hotel_description_section['object_fax'] != ''}
                    <li><strong>{$TXT.Fax}</strong><a class="object_fax" href="fax:{$hotel_description_section['object_fax']}"><span>{$hotel_description_section['object_fax']}</span></a></li>
                  {/if}
                </ul>
              </div>
              <div class="contact__block">
                <span class="d-block">
                  {if ($contactConfig['receptionInfoArray']['receptionOpenMode'] == '24h' || $contactConfig['receptionInfoArray']['receptionOpenMode'] == 'limited')}
                    {$contactConfig['receptionName']}:&nbsp
                  {/if}
                  {if array_key_exists('receptionInfoArray', $contactConfig)}
                    {call name=getReceptionInfo receptionInfoArray=$contactConfig['receptionInfoArray'] printLabel=false}
                  {else}
                    {$contactConfig['receptionDesc']}
                  {/if}
                </span>
                <span class="d-block">
                  {$contactConfig['receptionInfo']}
                </span>
              </div>
            {/if}

            {if $sectionContactVisibility['visibility_company_description'] == '1' && isset($company_description_section)}
              <div class="contact__sect">

                {if $sectionContactVisibility['visibility_hotel'] == '1'}
                  <h2 class="contact__label --inner">{$TXT.DaneWlasciciela}</h2>
                {else}
                  <h2 class="contact__label">{$TXT.DaneWlasciciela}</h2>
                {/if}

                <ul class="contact__list --owner">
                  <li>
                    <span>{$TXT.NazwaFirmy}:</span>
                    <span>{$company_description_section['name']}</span>
                  </li>
                  <li>
                    <span>{$TXT.UlicaFirmy}:</span>
                    <span>{$company_description_section['street']}</span>
                  </li>
                  <li>
                    <span>{$TXT.AdresFirmy}:</span>
                    <span>{$company_description_section['zipcode']}, {$company_description_section['city']}, {$TXT.{$ownerData['countryKey']}}</span>
                  </li>
                  {if $company_description_section['nip'] != ''}
                    <li>
                      <span>{$TXT.nip}:</span>
                      <span>{$company_description_section['nip']}</span>
                    </li>
                  {/if}
                </ul>
              </div>
            {/if}

            {if $sectionContactVisibility['visibility_hotel'] == '1' || $sectionContactVisibility['visibility_company_description'] == '1'}
              <h2 class="contact__label --inner">{$TXT.NaszeLokalizacje}</h2>
            {else}
              <h2 class="contact__label">{$TXT.NaszeLokalizacje}</h2>
            {/if}

            <div class="contact__locations">
              {foreach from = $locations item = location}
                <div class="contact__item">
                  <i class="icon icon-pointer"></i>
                  <div>
                    <strong class="d-block">{$location['name']}</strong>
                    <span class="d-block">{$location['street']}</span>
                    <span class="d-block">{$location['zipcode']} {$location['city']}</span>
                    <span class="d-block">{$TXT.{$location['countryKey']}}</span>
                    <div class="contact__links">
                      <a href="" class="contact__btn d-flex" aria-label="{$TXT.ZobaczOferte} {$location['street']}, {$location['zipcode']} {$location['city']}" onclick="generateWidgetIdoSellBooking(this);return false;" data-currency="{$currentCurrency['id']}" data-language="{$language['id']}" data-location="{$location.id}">{$TXT.ZobaczOferte}</a>
                      <a target="blank" href="https://www.google.com/maps/dir//{$location['lat']},{$location['lng']}" aria-label="{$TXT.SprawdzNaMapie} {$location['street']}, {$location['zipcode']} {$location['city']}" class="contact__btn d-flex map_link">{$TXT.SprawdzNaMapie}</a>
                    </div>
                  </div>
                </div>
              {/foreach}
            </div>
          </div>
          <div class="col-12 col-md-5 contact__payments">
            <h2 class="contact__label d-none d-md-block">{$TXT.Platnosci}</h2>
            <div class="contact__block d-none d-md-block">
              <p>{$TXT.DziekiPlatnosciOnline}</p>
              <img alt="Visa, MasterCard" src="{$path}/files/gfx/payments_v2.png">
              <p>{$TXT.RezerwujacNaNaszej}</p>
              <p>{$TXT.InformujemyONumerze}</p>
            </div>
            <a class="contact__btn d-none d-md-flex" onclick="generateWidgetIdoSellBooking(this)" data-currency="{$currentCurrency['id']}" data-language="{$language['id']}">{$TXT.RezerwujOnline}</a>

            {if $sectionContactVisibility['visibility_company_description'] == '1' && $bankAccountData['active'] == '1'}
              {assign var=currentCurrencyName value='payform_'}
              {assign var=currentCurrencyPay value=$company_description_section['bankAccountData']['active_settings']}
              {if $currentCurrencyPay|@count > 0}
                <div class="contact__sect --payInfo">
                  <h2 class="contact__label --inner">{$TXT.DaneDoPrzelewow}</h2>
                  <ul class="contact__list --bank">
                    {if $currentCurrencyPay['account'] != ''}
                      <li>
                        <span>{$TXT.DaneKontaBankowegoDlaWplatWX}:</span>
                        <span>{$currentCurrencyPay['account']}</span>
                      </li>
                    {/if}
                    {if $currentCurrencyPay['swift'] != ''}
                      <li>
                        <span>{$TXT.SWIFT}:</span>
                        <span>{$currentCurrencyPay['swift']}</span>
                      </li>
                    {/if}
                    {if $currentCurrencyPay['bank'] != ''}
                      <li>
                        <span>{$TXT.Bank}:</span>
                        <span>{$currentCurrencyPay['bank']}</span>
                      </li>
                    {/if}
                    {if $currentCurrencyPay['name'] != ''}
                      <li>
                        <span>{$TXT.NazwaOdbiorcy}:</span>
                        <span>{$currentCurrencyPay['name']}</span>
                      </li>
                    {/if}
                    {if $currentCurrencyPay['address'] != ''}
                      <li>
                        <span>{$TXT.AdresOdbiorcy}:</span>
                        <span>{$currentCurrencyPay['address']}</span>
                      </li>
                    {/if}
                  </ul>
                </div>
              {/if}
            {/if}
            
          </div>
        </div>
      </div>

      {if $socialMedia['active'] == true && $socialMedia['contactPage'] == true}
        <div class="container">
          <div class="row mt-5 mb-5">
            <div class="col-md-12">
              {call name=inccomp file="facebook-comments" s=false}
            </div>
          </div>
        </div>
      {/if}
  
      {if ($sectionContactVisibility['visibility_google_maps'] == '1' && $googleMapsActive == '1')}
        <script src="https://maps.googleapis.com/maps/api/js?key={$apiMapsKey}&amp;v=3.exp"></script>
        <div id="modal-map-canvas" class="d-none d-md-block google-maps-container-wide contact-mainmap contact__map"></div>
      {/if}
      {* skrypt leafletjs *}
      {if $googleMapsActive != '1' || $sectionContactVisibility['visibility_google_maps'] != '1'}
    
        <link rel="stylesheet" href="{$path}/files/leaflet/leaflet.css" />
        <script src="{$path}/files/leaflet/leaflet.js"></script>
        <div id="map_container"></div>
        <script>
          var locationData = {$locationsJson};
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
            let button_text = value[`name`] + `<br/>` + value[`street`] + `<br/>` + value[`zipcode`] + ` ` + value[`city`] + `, ` + value[`country`] + `<br/>` + href;

            L.marker([value[`lat`], value[`lng`]], {
              alt: value[`street`] + ', ' + value[`zipcode`] + ' ' + value[`city`]
            }).addTo(mymap)
              .bindPopup(button_text)
              .openPopup();

            locationLng.push([value[`lat`], value[`lng`]]);
          });
    
          mymap.fitBounds([locationLng]);
        </script>
      {/if}
  
  
      {* map *}
      {if ($sectionContactVisibility['visibility_google_maps'] == '1' && $googleMapsActive == '1')}
        {* okienka z adresem i linkiem do oferty z danej lokalizacji *}
        {foreach from = $locations item = location}
          <div id="googleMapsLocation_{$location.id}" style="display: none">
            <div class="content">
              <div class="siteNotice"></div>
              <div class="bodyContent">
                <p><b>{$location.name}</b></p>
                <p class="noMargin">{$location.street}</p>
                <p class="noMargin">{$location.zipcode} {$location.city}, {$TXT.{$location.countryKey}}</p>
                <p><a href="##" onclick="generateWidgetIdoSellBooking(this)" data-currency="{$currentCurrency['id']}" data-language="{$language['id']}" data-location="{$location.id}">{$TXT.ZobaczOferte}</a></p>
              </div>
            </div>
          </div>
        {/foreach}
    
        <script>
          var mapModal;
    
          function initializeModal() {
            if (typeof google != "undefined") {
              var locationData = {$locationsJson};
              var myLatlng = new google.maps.LatLng(locationData[0].lat, locationData[0].lng);
              var mapOptions = {
                zoom: 14,
                center: myLatlng
              };
              var markers = {};
              mapModal = new google.maps.Map(document.getElementById('modal-map-canvas'), mapOptions);
    
              $('.map_link').each(function(i) {
                $(this).on('click', function(e) {
                  if (window.screen.width > 768) {
                    e.preventDefault();
                    $.each(locationData, function(index, value) {
                      var markerIcon = {
                        url: '{$path}/files/gfx/marker_icon.png'
                      };
                      var icon = {
                        path: "M85.007,0A14.478,14.478,0,0,0,70.573,14.489c0,9.915,12.917,24.471,13.467,25.086a1.3,1.3,0,0,0,1.934,0C86.524,38.96,99.44,24.4,99.44,14.489A14.478,14.478,0,0,0,85.007,0Zm0,21.779a7.29,7.29,0,1,1,7.262-7.29A7.284,7.284,0,0,1,85.007,21.779Z",
                        fillOpacity: 1,
                        strokeWeight: 0,
                        scale: 1
                      };
                      var latLng = new google.maps.LatLng(value['lat'], value['lng']);
                      if (markers[index] === undefined) {
                        markers[index] = new google.maps.Marker({
                          position: latLng,
                          title: value['name'],
                          icon: markerIcon,
                          zoom: 14,
                        });
                        var contentString = $('#googleMapsLocation_' + value['id']).children().html();
                        var infowindow = new google.maps.InfoWindow({
                          content: contentString,
                          maxWidth: 300
                        });
                        markers[index].addListener('click', function() {
                          infowindow.open(mapModal, markers[index]);
                        });
                      }
    
                      if (i == index) {
                        markers[index].setMap(mapModal);
                        mapModal.setCenter(latLng);
    
                      } else {
                        markers[index].setMap(null)
                      }
                    });
                  }
                });
              });
    
              $('.map_link').first().click();
    
    
            } else {
              setTimeout("initializeModal()", 500);
            }
          }
          var map_interval = setInterval(function() {
            initializeModal();
            if (mapModal.getZoom() != 0) {
              clearInterval(map_interval);
            }
          }, 500);
        </script>
      {/if}

    </div>
  </main>
  
  
{/strip}
{include file="footer.tpl"}