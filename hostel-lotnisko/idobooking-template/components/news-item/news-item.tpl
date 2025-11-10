{include file="../index-about/renderContent.tpl"}

<main id="pageContent" class="news-item page">
{call name=inccomp file="distinguished" s=false}
{if isset($promotedOffers) && isset($positionPromotedOffers) && $positionPromotedOffers == 0}
  {call name=renderHotspot hotspotOffers=$promotedOffers namePromotedOffers=$namePromotedOffers hotspotName='WyroznioneOferty'}
{/if}
  <div class="container txt"> 
    <article>
      <h1 class="big-label">                        
          {$news['title']}                 
      </h1>
      <span class="date-news">{$news['createDate']}</span>
      <div class="news-wrapper">

      {if isset($news['contentSections'])}
        {foreach from=$news['contentSections'] item=sect}
          {call name=renderContent
            sect=$sect
            class=''
          }
        {/foreach}
      {else}
        {$news['content']}
      {/if}
      
      </div>
    </article>
    {if $socialMedia['active'] == true && $socialMedia['newsPage'] == true}
      {call name=inccomp file="facebook-comments" s=false}
    {/if}        
  </div>
  {if isset($promotedOffers) && isset($positionPromotedOffers) && $positionPromotedOffers == 1}
    {call name=renderHotspot hotspotOffers=$promotedOffers namePromotedOffers=$namePromotedOffers hotspotName='WyroznioneOferty'}
  {/if}
</main>