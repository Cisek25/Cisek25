{* Note! File concerns beds and accommodation, rather than special offers. Convention:
* accommodation and rooms: offer
* special offer: special-offer
*}
{include file='header.tpl'}
{strip}
    <main id="pageContent" class="page main-container txt offer_site">
        <div class="offer-parallax">
            <img alt="{$object['pictures'][0]['name']}" src="{$object['pictures'][0]['url']}"/>
        </div>
        <div class="container wrapper p-0 pm-5">
            <div class="row col-md-12 p-0 pb-md-5 offer-wrapper">
                <div class="col-lg-9 col-md-12 p-0 p-md-5">
                    {call name=inccomp file="offer-top" s=false}
                    {call name=inccomp file="offer-gallery" s=false}
                </div>
                <div class="col-lg-3 col-md-12 offer-right-wrapper py-4 px-0 px-md-4">
                    {call name=inccomp file="offer-form" s=false}  
                    {if array_key_exists('KorzysciZRezerwacjiOnline', $TXT)}
                        {call name=inccomp file="offer-advantages" s=false}  
                    {/if}
                    {if array_key_exists('InformacjaOSposobachPlatnosci', $TXT)} 
                        {call name=inccomp file="side-payments" s=false}              
                    {/if}                    
                    
                    {if isset($googleMapsActive) && $googleMapsActive == true}
                        <div class="offer-right">
                            <div id="map" style="height:300px;"></div>
                            <script>
                                var directionsDisplay;
                                var directionsService;
                                var map;
                                var thisObject;
                                function initialize() {
                                    directionsDisplay = new google.maps.DirectionsRenderer();
                                    directionsService = new google.maps.DirectionsService();
                                    thisObject = new google.maps.LatLng({$object['latitude']}, {$object['longitude']});
                                    var mapOptions = {
                                        zoom:7,
                                        center: thisObject
                                    };
                                    var markerIcon = {
                                        url: '{$path}/files/gfx/marker_icon.png'
                                    };
                                    map = new google.maps.Map(document.getElementById('map'), mapOptions);
                                    var marker = new google.maps.Marker({
                                        position: thisObject,
                                        title: `{$object['localization']['street']}, {$object['localization']['zipcode']} {$object['localization']['city']}`,
                                        map: map,
                                        icon: markerIcon
                                    });
                                    directionsDisplay.setMap(map);
                                }
                            </script>
                            <script src="//maps.googleapis.com/maps/api/js?callback=initialize&key={$apiMapsKey}"></script>
                            <div class="clearfix"></div>
                            <div class="directions">
                                <a class="btn btn-reverse" target="_blank" id="generateDirections" href="https://www.google.com/maps/search/?api=1&query={$object['latitude']},{$object['longitude']}">{$TXT.PokazNaMapie}</a>
                            </div>                        
                        </div>
                    {else}
                        <div class="offer-right">
                            <link rel="stylesheet" href="{$path}/files/leaflet/leaflet.css" />
                            <script src="{$path}/files/leaflet/leaflet.js"></script>
                            <div id="map_container"></div>
                            <script> 
                                var locationLng = [];
                                let cid = {$currentCurrency["id"]};
                                let lid = {$language["id"]};
                                var mymap = L.map('map_container').setView([{$object['latitude']}, {$object['longitude']}], 13);
                                {literal}
                                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    }).addTo(mymap);
                                {/literal}                                    
                                L.marker([{$object['latitude']}, {$object['longitude']}],{
                                    alt: `{$object['localization']['street']}, {$object['localization']['zipcode']} {$object['localization']['city']}`
                                }).addTo(mymap)
                                .bindPopup('{$object['name']}')
                                .openPopup();
                            </script>        
                            <div class="clearfix"></div>
                            <div class="directions">
                                <a class="btn btn-reverse" target="_blank" id="generateDirections" href="https://www.google.com/maps/search/?api=1&query={$object['latitude']},{$object['longitude']}">{$TXT.PokazNaMapie}</a>
                            </div>                        
                        </div>
                    {/if}
                    {call name=inccomp file="offer-reservation" s=false}     
                </div>
            </div>
            <div class="offer-desc-wrapper">
                {call name=inccomp file="offer-amenities" s=false}
                {call name=inccomp file="offer-tabs" s=false}
                {call name=inccomp file="offer-calendar" s=false}
                {call name=inccomp file="offer-additional" s=false}
                <div id="room_desc">
                    {call name=inccomp file="offer-additional-info" s=false}
                    <div class="room_desc p-4 p-md-0" data-readMore="{$TXT.CzytajWiecej}" data-showLess="{$TXT.PokazMniej}">{$object['longDescription']}</div>
                </div>
                {if $pageType=="special-offer"}
                    {call name=inccomp file="offer-bundle" s=false}
                {/if}
                {call name=inccomp file="offer-prices" s=false}
                <div>
                    {if $socialMedia['active'] == true && $socialMedia['accommodationDescriptionPage'] == true}
                        {call name=inccomp file="facebook-comments" s=false} 
                    {/if}
                </div>
            </div>
        </div>
        {call name=inccomp file="distinguished" s=false}
        {call name=renderHotspot hotspotOffers=$similarOffers namePromotedOffers='' hotspotName='ProponowaneOferty'}
    </main>
{/strip}
{include file="footer.tpl"}