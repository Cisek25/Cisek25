{function name=renderOffer}
  <div class="offer col-12 col-sm-6 col-md-4">
    <a class="object-icon" href="{$offer['url']}">
  
      <img data-src="{$offerImgSrc}" alt="{$offer['name']}" title="{$offer['name']}">
      <div class="offer__hover">
        <p class="offer__description">
          {$offerDescription}
        </p>
      </div>
    </a>
  
    <h3><a href="{$offer['url']}">{$offer['name']}</a></h3>
  
    <div class="offer__box">
  
      <div class="offer__info">
        {if isset($offer['area_formatted']) and $offer['area'] != '0'}
          <span class="accommodation-meters"><i class="icon-resize-full"></i>{$offer['area_formatted']}</span>
        {/if}
  
        {if isset($offerCapacity)}
          <span class="accommodation-roomspace"><i class="icon-user"></i>{$TXT.MaksOsob} {$offerCapacity}</span>
        {/if}
  
        {if $offer['roll_away_beds'] > 0}
          <span class="accommodation-roomspace-add">{$TXT.mozliwychDostawek}: {$offer['roll_away_beds']}</span>
        {/if}
      </div>
  
      <div class="offer__price">
        {if $showSectionConfiguration['price_list'] == 'show' and isset($offerPrice) and $offerPrice != '0,00'}
          <small>{$TXT['Od']}</small>
          <span class="price">{$offerPrice}
            {if $offerType=="promotion"}
              {* Cena promotion jest zwracana w SMARTY z walutą, w offers bez *}
            {else}
              {$currentCurrency['symbol']}
            {/if}
          </span>
          <small>{$TXT['_noc']}</small>
        {else}
          <a data-promotion="{$offer.id}" data-currency="{$offer.currencyId}" data-language="{$offer.languageId}" href="{$offer.url}" data-show-details="{isset($offer.type)}" class="offers-details">
            {if $offerType}
              <span class="btn">{$TXT.ZarezerwujUppercase}</span>
            {else}
            <span class="btn">{$TXT.SZCZEGOLY}</span>
            {/if}</a>
        {/if}
      </div>
  
    </div>
  </div>
{/function}