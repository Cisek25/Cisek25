{include file="header.tpl"}
{strip}
<main id="pageContent" class="page">
    <div class="container">
        <div class="row">
        <div class="aside col-12 col-md-3 col-lg-3">
            {call name=inccomp file="widget-search" s=false}
            {if array_key_exists('InformacjaOSposobachPlatnosci', $TXT)}
                {call name=inccomp file="side-payments" s=false}
            {/if}
        </div>

        <div class="col-12 col-md-9 col-lg-9">
        <div class="offers_content">
            {* promotions *}
            <h1 class="big-label">
                <span>{$TXT.Promocje}</span>
            </h1>
            <div class="offers_wrapper">
                        {if empty($promotions)}
                            <div class="no-promotion-available col-md-12">{$TXT.ObecnieNieMaZadnychAktywnychPromocji}</div>
                        {else}

                            {foreach from=$promotions item=promotion}
                                <div class="offers-container">
                                    <div class="object-icon col-md-5 col-xs-12">
                                            <img data-src="{$promotion.icon}" alt="{$promotion.name}" title="{$promotion.name}">
                                    </div>
                                    <div class="accommodation-rest col-md-7 col-xs-12">
                                        <div class="row">
                                            <div class="col-md-8 col-xs-12">
                                                <h2>{$promotion.name}</h2>
                                                <div class="roomspace sublink">
                                                    <span class="accommodation-roomspace"><i class="icon-user"></i><span class="roomspace-txt"> {$TXT.miejsc}: </span>{$promotion.persons}</span>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-xs-12">
                                                    {if isset({$promotion.priceMin}) and {$promotion.priceMin} != '0'}
                                                        <div class="object-price">
                                                            <small>{$TXT.CenaJuzOd}</small>
                                                            <span class="price">{$promotion.priceMinInFormat}</span>
                                                        </div>
                                                    {else}
                                                        <a onclick="generateWidgetIdoSellBooking(this)" data-promotion="{$promotion.id}" data-currency="{$currencyId}" data-language="{$languageId}" data-show-details="1" class="offers-object-detail">{$TXT.SZCZEGOLY}</a>
                                                    {/if}
                                            </div>
                                        </div>
                                        <p class="accommodation-short-description">{$promotion.short_description}</p>
                                        <div class="accommodation-buttons">
                                            <a onclick="generateWidgetIdoSellBooking(this)" data-ga4_type="select_promotion" {if isset($useGoogleAnalytics4) and $useGoogleAnalytics4 == 1} data-ga4="true"{/if} data-price="{$promotion.priceMinInFormat}" data-name="{$promotion.name}" data-promotion="{$promotion.id}" data-currency="{$currencyId}" data-language="{$languageId}" >
                                                <span class="btn">{$TXT.ZarezerwujUppercase}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            {/foreach}

                            {if !isset($newsArray)}
                            {/if}
                        {/if}

            </div>
        </div>
        </div>
        </div>

    </div>
</main>
{/strip}
{include file="footer.tpl"}