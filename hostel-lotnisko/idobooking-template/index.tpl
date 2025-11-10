{strip}
  {include file="header.tpl"}
  <main id="pageContent" class="fullpage-wrapper page">
    {*<div class="section" id="slick-loader">
      {call name=inccomp file="index-fullpage" s=true}
    </div>*}
    {call name=inccomp file="distinguished" s=false}
    <div class="section parallax">
      {call name=inccomp file="index-banner" s=false}
      {call name=inccomp file="widget-search" s=false}
    </div>
    
    {if isset($promotedOffers) && $positionPromotedOffers == 0}
      {call name=renderHotspot hotspotOffers=$promotedOffers namePromotedOffers=$namePromotedOffers hotspotName='WyroznioneOferty'}
    {/if}
    {* main CMS *}
    {call name=inccomp file="index-about" s=false}
  
    {if isset($newsArray)}
      <div class="container">
        {call name=inccomp file="index-news" s=false}
      </div>
    {/if}

    {if isset($promotedOffers) && $positionPromotedOffers == 1}
        {call name=renderHotspot hotspotOffers=$promotedOffers namePromotedOffers=$namePromotedOffers hotspotName='WyroznioneOferty'}
    {/if}
  </main>
  {include file="footer.tpl"}
{/strip}