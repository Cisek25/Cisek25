<script>

    var offerPriceTXT = {
        TerminyWSezonie:"{$TXT.TerminyWSezonie}",
        CennikNaRok: "{$TXT.CennikNaRok}",
    };

</script>
{strip}
{if $showSectionConfiguration['price_list'] == 'show'}
    {if $object['seasons']}
    <div id="offer-prices" class="offer-prices tab pt-4 pl-4 pr-4 pr-md-0 pl-md-0">
        <h2 class="big-label offer-label" id="pricelist-label">{$TXT.Cennik}</h2>
        <div class="price-list row">
            <div class="col-12" id="season_room_{$object['id']}" data-name="#season_room_{$object['id']}">
                {if !$object['objectOwnPrices'] and isset($object['seasons'])}
                    {assign var="liczba_kolumn_sezonow" value="season-row_sub col-12 col-sm-6 col-lg-4"}
                    {assign var="liczba_sezonow" value="season-multi-row season-row row"}
                    {if count($object['seasons']) <= 4 }
                            {$liczba_sezonow = "season-single-row season-row row"}
                            {$liczba_kolumn_sezonow = "season-row_sub col-12 col-sm-6 col-lg-4"}
                    {/if}
                    <div class="{$liczba_sezonow}">
                        {foreach from=$object['seasons'] item=season}
                            <div class="{$liczba_kolumn_sezonow}" aria-label="{if $season['dateFrom']['day']}{$TXT.CennikDlaZakresuDat} {$TXT.od} {$season['dateFrom']['day']} {$season['dateFrom']['month']['name2']} {$TXT.do} {$season['dateTo']['day']} {$season['dateTo']['month']['name2']}{else}{$TXT.CennikDlaWszystkichTerminow}{/if}" tabindex="0">
                                <table>
                                    <tbody>
                                        <tr class="season-cell_heading" aria-hidden="true">
                                            <td>
                                                <span class="season-cell_dates">
                                                    {if $season['dateFrom']['day']}
                                                        <span class="season-cell_year" style="display:none;">
                                                             {$season['dateTo']['withYear']}
                                                        </span>
                                                        <span class="season-cell_date">{$season['dateFrom']['day']} {$season['dateFrom']['month']['name2']}</span>
                                                        <i class="icon-arrow_big_white_right" aria-hidden="true"></i>
                                                        <span class="season-cell_date">{$season['dateTo']['day']} {$season['dateTo']['month']['name2']}</span>
                                                    {else}
                                                        <span class="season-cell_date"> {$TXT.PrzezCalyCzas}</span>
                                                    {/if}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr class="season-cell_main">
                                            <td>
                                                {if isset($season['objectPrices']['priceMin']) and $season['objectPrices']['priceMin']}
                                                    <div class="object-price" aria-hidden="true">
                                                        <span>{$TXT.od} <strong class="price">{$season['objectPrices']['priceMinInFormat']}</strong> / {$TXT.dzien}</span>
                                                    </div>
                                                {/if}
                                                <div class="room_rez">
                                                    <a onkeydown="iai_location_key_down(event, () => generateWidgetIdoSellBooking(this))" onclick="generateWidgetIdoSellBooking(this)" aria-label="{if $season['dateFrom']['day']}{$TXT.ZarezerwujWTerminie} {$TXT.od} {$season['dateFrom']['day']} {$season['dateFrom']['month']['name2']} {$TXT.do} {$season['dateTo']['day']} {$season['dateTo']['month']['name2']}{else} {$TXT.WszystkieTerminy}{/if} {$TXT.WCenie} {$TXT.od} {$season['objectPrices']['priceMinInFormat']} / {$TXT.dzien}" tabindex="0" data-currency="{$currentCurrency['id']}" data-language="{$language['id']}" data-object="{$object['id']}" data-show-other-objects="{$showOtherObjects}" data-start-date="{$season['closestFutureDateFrom']}" data-end-date="{$season['closestFutureDateTo']}"
                                                    >
                                                        <span class="btn btn-reverse">{$TXT.ZarezerwujUppercase}</span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="season-cell_body">
                                            <td>
                                                {if isset($season['objectPrices']) and $season['objectPrices']}
                                                    {if isset($season['objectPrices']['priceGrossInFormat']) or isset($season['objectPrices']['priceGrossWeekendInFormat'])}
                                                        <ul>
                                                            {if isset($season['objectPrices']['priceGrossInFormat'])}
                                                                <li><span class="label">{$TXT.wSrodkuTygodnia}</span><span class="price">{if $object['pricePerPerson']}{$TXT.od} {/if}<strong>{$season['objectPrices']['priceGrossInFormat']} {$currentCurrency['symbol']}</strong> / {$TXT.dzien}</span></li>
                                                            {/if}
                                                            {if isset($season['objectPrices']['priceGrossWeekendInFormat'])}
                                                                <li><span class="label">{$TXT.weekend}</span><span class="price">{if $object['pricePerPerson']}{$TXT.od} {/if}<strong>{$season['objectPrices']['priceGrossWeekendInFormat']} {$currentCurrency['symbol']}</strong> / {$TXT.dzien}</span></li>
                                                            {/if}
                                                        </ul>
                                                    {/if}
                                                {else}
                                                    <ul>
                                                        <li>
                                                            <strong class="phone-price">{$TXT.CenaNaTelefon}</strong>
                                                        </li>
                                                    </ul>
                                                {/if}
                                            </td>
                                        </tr>
                                        {if isset($season['objectPrices']) and $season['objectPrices']}
                                            <tr class="season-cell_footer">
                                                <td>
                                                    {if isset($season['objectPrices']['priceGrossWeekInFormat']) or isset($season['objectPrices']['priceGrossMonthInFormat'])}
                                                        <ul>
                                                            {if isset($season['objectPrices']['priceGrossWeekInFormat'])}
                                                                <li><span class="label">{$TXT.zaTydzien}</span><span class="price">{if $object['pricePerPerson']}{$TXT.od} {/if}<strong>{$season['objectPrices']['priceGrossWeekInFormat']} {$currentCurrency['symbol']}</strong></span></li>
                                                            {/if}
                                                            {if isset($season['objectPrices']['priceGrossMonthInFormat'])}
                                                                <li><span class="label">{$TXT.zaMiesiac}</span><span class="price">{if $object['pricePerPerson']}{$TXT.od} {/if}<strong>{$season['objectPrices']['priceGrossMonthInFormat']} {$currentCurrency['symbol']}</strong></span></li>
                                                            {/if}
                                                        </ul>
                                                    {/if}
                                                </td>
                                            </tr>
                                        {/if}

                                    </tbody>
                                </table>
                            </div>
                        {/foreach}
                    </div>
                {/if}
                {if ($object['objectOwnPrices'])}
                    <div class="season-row row">
                        <div class="season-row_sub col-12 col-sm-6 col-lg-4">
                            <table aria-label="{$TXT.CennikDlaWszystkichTerminow}">
                                <tbody>
                                    <tr class="season-cell_heading" aria-hidden="true">
                                        <td>
                                            <span class="season-cell_dates">{$TXT.PrzezCalyCzas}</span>
                                        </td>
                                    </tr>
                                    <tr class="season-cell_main">
                                        <td>
                                            {if isset($object['objectPrices'])}
                                                <div class="object-price" aria-hidden="true">
                                                    <span>{$TXT.od} <strong class="price">{$object['objectPrices']['priceMinInFormat']}</strong> / {$TXT.dzien}</span>
                                                </div>
                                            {/if}
                                            <div class="room_rez">
                                                <a onclick="generateWidgetIdoSellBooking(this)" data-currency="{$currentCurrency['id']}" data-language="{$language['id']}" data-object="{$object['id']}" data-show-other-objects="{$showOtherObjects}" data-start-date="{$season['closestFutureDateFrom']}" data-end-date="{$season['closestFutureDateTo']}"
                                                >
                                                    <span class="btn btn-reverse">{$TXT.ZarezerwujUppercase}</span>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="season-cell_body">
                                        <td>
                                            {if isset($object['objectPrices'])}
                                                {if isset($season['objectPrices']['priceGrossInFormat']) or isset($object['objectPrices']['priceGrossInFormat']) or isset($season['objectPrices']['priceGrossWeekendInFormat']) or isset($object['objectPrices']['priceGrossWeekendInFormat'])}
                                                <ul>
                                                    {if isset($season['objectPrices']['priceGrossInFormat'])}
                                                        <li><span class="label">{$TXT.wSrodkuTygodnia}</span><span class="price">{if $object['pricePerPerson']}{$TXT.Od} {/if}<strong>{$season['objectPrices']['priceGrossInFormat']} {$currentCurrency['symbol']}</strong> / {$TXT.dzien}</span></li>
                                                    {else}
                                                        {if isset($object['objectPrices']['priceGrossInFormat'])}
                                                            <li><span class="label">{$TXT.wSrodkuTygodnia}</span><span class="price">{if $object['pricePerPerson']}{$TXT.Od} {/if}<strong>{$object['objectPrices']['priceGrossInFormat']} {$currentCurrency['symbol']}</strong> / {$TXT.dzien}</span></li>
                                                        {/if}
                                                    {/if}

                                                    {if isset($season['objectPrices']['priceGrossWeekendInFormat'])}
                                                        <li><span class="label">{$TXT.weekend}</span><span class="price">{if $object['pricePerPerson']}{$TXT.Od} {/if}<strong>{$season['objectPrices']['priceGrossWeekendInFormat']} {$currentCurrency['symbol']}</strong> / {$TXT.dzien}</span></li>
                                                    {else}
                                                        {if isset($object['objectPrices']['priceGrossWeekendInFormat'])}
                                                            <li><span class="label">{$TXT.weekend}</span><span class="price">{if $object['pricePerPerson']}{$TXT.Od} {/if}<strong>{$object['objectPrices']['priceGrossWeekendInFormat']} {$currentCurrency['symbol']}</strong> / {$TXT.dzien}</span></li>
                                                        {/if}
                                                    {/if}
                                                </ul>
                                                {/if}
                                            {else}
                                                <ul>
                                                    <li>
                                                        <strong class="phone-price">{$TXT.CenaNaTelefon}</strong>
                                                    </li>
                                                </ul>
                                            {/if}
                                        </td>
                                    </tr>
                                    <tr class="season-cell_footer">
                                        <td>
                                            {if isset($object['objectPrices'])}
                                                {if isset($season['objectPrices']['priceGrossWeekInFormat']) or isset($season['objectPrices']['priceGrossMonthInFormat'])}
                                                    <ul>
                                                        {if isset($season['objectPrices']['priceGrossWeekInFormat'])}
                                                            <li><span class="label">{$TXT.zaTydzien}</span><span class="price">{if $object['pricePerPerson']}{$TXT.Od} {/if}<strong>{$season['objectPrices']['priceGrossWeekInFormat']} {$currentCurrency['symbol']}</strong></span></li>
                                                        {/if}
                                                        {if isset($season['objectPrices']['priceGrossMonthInFormat'])}
                                                            <li><span class="label">{$TXT.zaMiesiac}</span><span class="price">{if $object['pricePerPerson']}{$TXT.Od} {/if}<strong>{$season['objectPrices']['priceGrossMonthInFormat']} {$currentCurrency['symbol']}</strong></span></li>
                                                        {/if}
                                                    </ul>
                                                {/if}
                                            {/if}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                {/if}
            </div>

        </div>
    </div>
  {/if}
{/if}
{/strip}