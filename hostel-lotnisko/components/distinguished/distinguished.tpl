<script>
var TXT_CMSHOTSPOT = {
  NastepnaOferta: "{$TXT.NastepnaOferta}",
  PoprzedniaOferta: "{$TXT.PoprzedniaOferta}",
};
</script>
    
    {* ten kod generuje promotedOffers w formie hotspot *}
    {include file="../distinguished/renderOffer.tpl"}
    {function name=renderHotspot}
      {if isset($hotspotOffers) and $hotspotOffers|count != 0}
      <div class="container container-hotspot {$hotspotClass}">
        <div class="row cmshotspot">
          <div class="col-12">
            {if isset($namePromotedOffers) && $namePromotedOffers != ''}
              <h2 class="big-label line-label">{$namePromotedOffers}</h2>
            {else}
              <h2 class="big-label line-label">{$TXT.$hotspotName}</h2>
            {/if}
            <div class="offerslist" data-text-next="{$TXT.Nastepne}" data-text-prev="{$TXT.Nastepne}">
              {foreach from = $hotspotOffers item = offer}
                {call name=renderOffer
                offer=$offer
                offerDescription=$offer['shortDescription']
                offerImgSrc=$offer['pictures'][0]['url']
                offerCapacity=$offer['maxCapacity']
                offerPrice=$offer['offerPrices']['priceMinInFormat']
                }
              {/foreach}
            </div>
          </div>
        </div>
      </div>
      {/if}
    {/function}