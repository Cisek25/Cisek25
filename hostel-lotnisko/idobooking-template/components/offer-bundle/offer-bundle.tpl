{strip}
    <div id="objects" class="main-objects p-4 p-md-0">
        <h2 class="label offer-label">{$object['objectName']}</h2>
        {* room *}
        {$flag = false}
        <div class="offers_wrapper">
            {foreach from=$offerObjects item=offerObject}
                <div class="offers-container">
                        <div class="object-icon col-md-5 col-xs-12">
                            <img data-src="{$offerObject['objectPicture'][0]['url']}" alt="{$offerObject['name']}" title="{$offerObject['name']}">
                        </div>
                        <div class="accommodation-rest col-md-7 col-xs-12">
                            <h2>{$offerObject['name']}</h2>
                            <div class="roomspace">
                                <span class="accommodation-roomspace"><i class="icon-user"></i> {$TXT.miejsc}: {$offerObject['capacity']}</span>
                                {if $offerObject['roll_away_beds'] > 0}
                                    <span class="accommodation-roomspace-add">{$TXT.mozliwychDostawek}: {$offerObject['roll_away_beds']}</span>
                                {/if}
                            </div>
                            <p class="accommodation-short-description mt-1">{$offerObject['descriptions'][$language['id']]['short_description']}</p>
                        </div>
                </div>
                {assign var="flag" value=!$flag}
            {/foreach}
        </div>
    </div>
    {/strip}