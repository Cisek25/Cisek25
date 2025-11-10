{strip}
    <div class="offer-right offer-right-top">
        {if $showSectionConfiguration['price_list'] == 'show'}
            <div class="offer-price mb-4">
                {if isset($object['priceMin']) and $object['priceMin'] > 0}
                    <small>{$TXT.Od}</small>
                    <span>{$object['priceMinInFormat']} {$currentCurrency['symbol']}</span>
                {else}
                    <span class="offer-minprice">{$TXT.CenaNaTelefon}</span>
                {/if}
            </div>
        {/if}
        <div class="room_rez">
            <a class="accommodation-reservation" tabindex="0" aria-label="{$TXT.ZarezerwujUppercase} {$object['name']}" onkeydown="iai_location_key_down(event, () => generateWidgetIdoSellBooking(this))" onclick="generateWidgetIdoSellBooking(this)" data-ga4_type="select_item" {if isset($useGoogleAnalytics4) and $useGoogleAnalytics4 == 1} data-ga4="true"{/if} data-price="{$object['priceMinInFormat']}" data-name="{$object['name']}" data-currency="{$currentCurrency['id']}" data-language="{$language['id']}" data-object="{$object['id']}" data-show-other-objects="{$showOtherObjects}">
                <span class="btn button accommodation-leftbutton">{$TXT.ZarezerwujUppercase}</span>
            </a>
            <div id="iai_book_form" class="d-none">
                <input name="dateFrom" type="hidden" />
                <input name="dateTo" type="hidden" />
            </div>
            <a class="offerCalendar mt-3" href="##" data-currency="{$currentCurrency['id']}" data-language="{$language['id']}" data-object="{$object['id']}" data-show-other-objects="{$showOtherObjects}">
                {$TXT.SprawdzDostepnosc}
            </a>
            {if $showSectionConfiguration['price_list'] == 'show'}
                {if $object['seasons']}
                    <a class="to-offer-prices mt-3" href="#to-offer-prices">{$TXT.ZobaczCennik}</a>
                {/if}
            {/if}
        </div>
    </div>
{/strip}
