{strip}
<div class="offers_wrapper" {if $filtersInfo}data-url="{$frontpageUrl}" data-page="{$filtersInfo['page']}" data-limit="{$filtersInfo['limit']}" data-numberOfPages="{$filtersInfo['numberOfPages']}"{/if}>
    {* room *}
    {foreach from = $specialOffers item = specialOffer}
        
            <div class="offers-container"> 
                <a class="object-icon col-md-5 col-xs-12" href="{$specialOffer['url']}">
                    <img data-src="{$specialOffer['pictures']['url']}" alt="{$specialOffer['name']}" title="{$specialOffer['name']}">
                </a>
                <div class="accommodation-rest col-md-7 col-xs-12">
                    <div class="row">
                        <div class="col-md-8 col-xs-12">
                            <h2><a href="{$specialOffer['url']}">{$specialOffer['name']}</a></h2> 
                            <div class="roomspace">
                                <span class="accommodation-roomspace"><i class="icon-user"></i> {$TXT.miejsc}: {$specialOffer['maxCapacity']}</span>
                            </div>
                        </div>
                        <div class="col-md-4 col-xs-12">
                            {if isset($specialOffer['offerPrices']['priceMinInFormat']) and $specialOffer['offerPrices']['priceMin'] != '0'}
                                <div class="object-price">
                                    <small>{$TXT.CenaJuzOd}</small>
                                    <span class="price">{$specialOffer['offerPrices']['priceMinInFormat']} {$currentCurrency['symbol']}</span>
                                </div>
                            {else}
                                <a class="offers-object-detail" id="{$specialOffer['id']}" aria-label="{$TXT.SprawdxSzczegoly} {$specialOffer['name']}" href="{$specialOffer['url']}">
                                    {$TXT.SZCZEGOLY}
                                </a>
                            {/if}
                        </div>    
                    </div>   
                    <p class="accommodation-short-description mt-3">{$specialOffer['shortDescription']}</p>
                    <div class="accommodation-buttons">
                        <a data-offer="{$specialOffer['id']}" data-currency="{$currentCurrency['id']}" data-language="{$language['id']}" data-show-other-objects="{$showOtherObjects}" aria-label="{$TXT.SprawdxSzczegoly} {$specialOffer['name']}" href="{$specialOffer['url']}">
                            <span class="btn">{$TXT.SZCZEGOLY}</span>
                        </a>
                    </div>
                </div>
            </div>
        
        {assign var="flag" value=!$flag}
    {/foreach}

    {if isset($objectsAndOffersWithPriority)}
        {assign var=offersObjects value=$objectsAndOffersWithPriority}
    {else}
        {assign var=offersObjects value=$objects}
    {/if}

    {foreach from=$offersObjects item=object}                     
            <div class="offers-container">
                <a class="object-icon col-md-5 col-xs-12" href="{$object['url']}" title="{$object['name']}">
                    <img data-src="{$object['objectPicture'][0]['url']}" alt="{$object['name']}" title="{$object['name']}">
                </a>
                <div class="accommodation-rest col-md-7 col-xs-12">
                    <div class="row">
                        <div class="col-md-8 col-xs-12">
                        <h2><a href="{$object['url']}">{$object['name']}</a></h2> 
                            <div class="roomspace sublink">
                                <span class="accommodation-roomspace"><i class="icon-user"></i> {$TXT.miejsc}: {$object['capacity']}</span>
                                {if $object['roll_away_beds'] > 0}
                                    <span class="accommodation-roomspace-add">{$TXT.mozliwychDostawek}: {$object['roll_away_beds']}</span>
                                {/if}
                            </div>
                        </div>
                        <div class="col-md-4 col-xs-12">
                            {if $showSectionConfiguration['price_list'] == 'show' and isset($object['objectPrices']['priceMinInFormat']) and $object['objectPrices']['priceMin'] != '0'}
                                <div class="object-price">
                                    <small>{$TXT.CenaJuzOd}</small>
                                    <span class="price">{$object['objectPrices']['priceMinInFormat']} {$currentCurrency['symbol']}</span>
                                </div>
                            {else}                                            
                                <a class="offers-object-detail" id="{$object['id']}" aria-label="{$TXT.SprawdxSzczegoly} {$object['name']}" href="{$object['url']}">
                                    {$TXT.SZCZEGOLY}
                                </a>
                            {/if}
                        </div>
                    </div>                                                                                  

                    <p class="accommodation-short-description mt-3">{$object['descriptions'][$language['id']]['short_description']}</p>
                    <div class="accommodation-buttons">
                        <a data-object="{$object['id']}" data-currency="{$currentCurrency['id']}" data-language="{$language['id']}" data-show-other-objects="{$showOtherObjects}" aria-label="{$TXT.SprawdxSzczegoly} {$object['name']}" href="{$object['url']}">
                            <span class="btn">{$TXT.SZCZEGOLY}</span>
                        </a>
                    </div>
                </div>
            </div>                            
        {assign var="flag" value=!$flag}
    {/foreach}
    {if !isset($newsArray)}
    {/if}
</div>
<div class="widgetLoader"></div>

{/strip}