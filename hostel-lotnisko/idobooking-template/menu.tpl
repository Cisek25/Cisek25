{*@var Index_Controller_View $this*}
{strip}
<div class="menu-container_h none-mobile">
    <div class="menu-container_sub_h">
        <div class="logo_h none-mobile">
            <div class="logo_sub_h">
                {if $showLogo == true}
                <a href="/{$language['code2']}">
                    <img class="main-logo" src="{$ownerData['wideLogoPath']}" alt="{$headerName}" />
                </a>
                {/if}
            </div>
        </div>
        <div id="widget-header">
            {$TXT.RezerwacjaOnline}
        </div>
    </div>
    <nav id="menuNav_h">
        <ul>
            {foreach from=$menu key=name item=menuPos}
                {if $menuPos['pointerName'] == 'reservations'}
                    <li {if $menuPos['active']}class="active"{/if}><a style="cursor:pointer" {$menuPos['href']} data-currency="{$currentCurrency['id']}" data-language="{$language['id']}"><span>
                        {$name}
                    </span></a></li>
                {else}
                <li {if $menuPos['active']}class="active"{/if}><a {$menuPos['href']}><span>
                    {$name}
                </span></a></li>
                {/if}
            {/foreach}
        </ul>
        <div class="language-wrapper_h">
            <div class="language-container_v desktop">
                {if count($menuLangArray) > 1 or count($currenciesActiveInReservation) > 1}
                    <div class="flags">
                        {if count($menuLangArray) != 1}
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
                                <a href="{$lang['url']}" {if $langId != $firstActiveLangId} rel="alternate"{/if} hreflang="{$lang['shortName']}" data-langId="{$langId}" onclick="$.cookie('langChange', '{$lang['shortName']}', { path: '/' });"><span><img class="flag" alt="" src="/images/flags/{$lang['shortName']}.png" /></span></a>
                            {/foreach}
                        {/if}
                    </div>
                {/if}
            </div>
        </div>
    </nav>
</div>
<!-- MOBILE MENU START -->
<div class="menu-container mobile">
    <div class="menu-container_sub">
        <div class="mobile-top mobile-top-shadow clearfix">
            <a id="menuToggle" href="#"><span></span></a>
            <a class="menuClose" href="#" style="display:none"><span></span></a>
        </div>
        <nav id="menuNav">
            <ul>
                {foreach from=$menu key=name item=menuPos}
                    {if $menuPos['pointerName'] == 'reservations'}
                        <li {if $current == 'true'}class="active"{/if}><a style="cursor:pointer" {$menuPos['href']} data-currency="{$currentCurrency['id']}" data-language="{$language['id']}"><span>
                            {$name}
                        </span></a></li>
                    {else}
                        <li {if $current == 'true'}class="active"{/if}><a {$menuPos['href']}><span>
                            {$name}
                        </span></a></li>
                    {/if}
                {/foreach}
                {if count($menuLangArray) > 1 or count($currenciesActiveInReservation) > 1}
                    <li class="language-mobile">
                        <div class="language-container hidden-desktop">
                            <nav id="menuNav2">
                                <div class="mobile-flags">
                                    {if count($menuLangArray) != 1}
                                        {$firstActiveLangId = $language['id']}
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
                                            <a href="{$lang['url']}" {if $langId != $firstActiveLangId} rel="alternate"{/if} hreflang="{$lang['shortName']}" data-langId="{$langId}"
                                            ><span>
                                            <img class="flag" alt="" src="/images/flags/{$lang['shortName']}.png" /> {$lang['name']}
                                            </span></a>
                                        {/foreach}
                                    {/if}
                                </div>
                                <div class="mobile-curr">
                                    {if count($currenciesActiveInReservation) != 1}
                                        <form>
                                            <select id="frontpage_currency" name="currency">
                                                {foreach from=$currenciesActiveInReservation item=currency}
                                                    <option {if $currency['id'] == $currentCurrency['id']} selected="selected" {/if} value="{$currency['id']}">{$currency['code']} ({$currency['symbol']})</option>
                                                {/foreach}
                                            </select>
                                        </form>
                                    {/if}
                                </div>
                            </nav>
                        </div>
                    </li>
                {/if}
            </ul>
        </nav>
        <div class="logo">
            <div class="logo_sub">
                {if $showLogo == true}
                    <a href="/{$language['code2']}">
                        <img class="main-logo" src="{$ownerData['wideLogoPath']}" alt="{$headerName}" />
                    </a>
                {/if}
            </div>
        </div>
    </div>
</div>
{/strip}
<!-- MOBILE MENU END -->