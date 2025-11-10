<script>
    var TXT_MENU = {
        PokazWiecejMenu:"{$TXT.PokazWiecejMenu}",
        PowrotNaPoczatekStrony:"{$TXT.PowrotNaPoczatekStrony}",
    };
</script>

{*@var Index_Controller_View $this*}
{strip}
<div class="bgd-color-light menu-wrapper clean">
    <div class="container">
        <nav class="navbar">

            {if $showLogo == true}
                {if $language['code2'] == $language['default_frontpage_language']}
                    {$mainPageLink = '/'}
                {else}
                    {$mainPageLink = '/'|cat:$language['code2']}
                {/if}
                <a class="navbar-brand" title="{$ownerData['short_name']}" href="{$mainPageLink}"><img src="{$ownerData['wideLogoPath']}" alt="{$headerName}"/></a>
            {/if}

            <button class="navbar-reservation btn" onclick="generateWidgetIdoSellBooking(this)" data-currency="{$currentCurrency['id']}" data-language="{$language['id']}" type="button">
                {$TXT.RezerwacjaOnline}
            </button>

            <button class="navbar-toggler" type="button">
                <i class="icon icon-menu"></i>
                <span>Menu</span>
            </button>

            <div id="navbar">
                <ul class="navbar-nav navbar-nav-notloaded">
                    {foreach from=$menu key=name item=menuPos}
                        {if $menuPos['pointerName'] == 'reservations'}
                            {assign var="nav_item_classes" value="nav-item"}
                        {if $menuPos['active']}
                                {$liczba_sezonow = "nav-item active"}
                        {/if}
                            <li class="{$nav_item_classes}">
                                <a class="nav-link" {$menuPos['href']} data-currency="{$currentCurrency['id']}" data-language="{$language['id']}">{$name}</a>
                            </li>
                        {else}
                            {assign var="nav_item_classes" value="nav-item"}
                            {if $menuPos['active']}
                                {$liczba_sezonow = "nav-item active"}
                            {/if}
                            <li class="{$nav_item_classes}">
                                <a class="nav-link" {$menuPos['href']} {if isset($menuPos['subMenu'])}tabindex="0"{/if}>{$name}

                                </a>
                                {if isset($menuPos['subMenu'])}
                                    <button class="nav-toggler" type="button" aria-label="{$name}" aria-expanded="false" aria-controls="{$name}_menu"><span class="visuallyhidden">{$TXT.PokazPodmenu} {$name}</span></button>
                                    <ul id="{$name}_menu" class="sub-navi">
                                        {foreach from=$menuPos['subMenu'] key=nameSub item=menuPosSub}
                                            <li>
                                                <a class="nav-link" {$menuPosSub['href']}>{$nameSub}</a>
                                            </li>
                                        {/foreach}
                                    </ul>
                                {/if}
                            </li>
                        {/if}
                    {/foreach}
                </ul>

                {if count($menuLangArray) > 1 or count($currenciesActiveInReservation) > 1 }
                    <div class="page-top__language">
                    <button type="button" class="language__toggler" aria-labelledby="language_label" aria-expanded="false" aria-controls="language_menu"><span id="language_label"><span class="visuallyhidden">{$TXT.JezykStrony}</span>{$language['code2']}<span class="visuallyhidden">, {$TXT.JezykIWaluta}</span><span><i class="icon icon-arrow_smaller_down"></i></button>
                    <div id="language_menu" class="language">
                        {if count($menuLangArray) > 1}
                        <div class="flags">
                            {$firstActiveLangId = $activeLangSmartyArray['id']}
                            {foreach from=$menuLangArray key=langId item=lang}
                            {if isset($id)}
                                {if isset($object)}
                                {$names = $object['descriptions']}
                                {else if isset($offer)}
                                {$names = $offer['descriptions']}
                                {else if isset($subPage)}
                                {$names = $subPage}
                                {else if isset($news)}
                                {$names = $news['title']}
                                {/if}
                            {/if}
                            <a href="{$lang['url']}" {if $langId !=$firstActiveLangId} title="{$lang['name']}" rel="alternate" {/if} hreflang="{$lang['shortName']}" data-langId="{$langId}"><img class="flag" alt="{$lang['shortName']}" data-src="/images/flags/{$lang['shortName']}.png" /></a>
                            {/foreach}
                        </div>
                        {/if}
                        {if count($currenciesActiveInReservation) > 1}
                        <div class="currency">
                            <form>
                            <select id="frontpage_currency" name="currency">
                                {foreach from=$currenciesActiveInReservation item=currency}
                                <option {if $currency['id']==$currentCurrency['id']} selected="selected" {/if} value="{$currency['id']}">{$currency['code']} ({$currency['symbol']})</option>
                                {/foreach}
                            </select>
                            </form>
                        </div>
                        {/if}
                    </div>
                    </div>
                {/if}
            </div>
        </nav>
    </div>
</div>
{/strip}
