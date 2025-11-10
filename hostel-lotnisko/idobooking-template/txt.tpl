{strip}
  {include file="header.tpl"}
  {assign var="txt_counter" value=1}
  {assign var="txt_altName" value=$ownerData['short_name']}
  {include file="components/index-about/renderContent.tpl"}

  <main id="pageContent" class="page">

  {call name=inccomp file="distinguished" s=false}
  {if isset($promotedOffers) && isset($positionPromotedOffers) && $positionPromotedOffers == 0}
    {call name=renderHotspot hotspotOffers=$promotedOffers namePromotedOffers=$namePromotedOffers hotspotName='WyroznioneOferty'}
  {/if}

    <div class="container">
      <h1 class="big-label">
        {$title}
      </h1>

      <div class="row">
        <div class="col-12">
          <div class="txt-text">
            {if isset($contentSections)}
              {foreach from=$contentSections item=sect}
                {call name=renderContent
                  sect=$sect
                  class=''
                }
              {/foreach}
            {else}
              {$content}
            {/if}
          
          </div>

        </div>
      </div>
      {if isset($gallery)}
        <div class="gallery-lightbox row px-3 my-5">
          {foreach from=$gallery item=picture}
            {if $gallery|@count > 1}
              <div class="gallery-sub col-6 col-md-4 p-1">
                {if $picture['type'] == 'picture'}
                  <a data-imagelightbox="f" href="{$picture['url']}">
                    <img alt="{$txt_altName} - {($TXT['Zdjecie'])} {($txt_counter++)}" src="{$picture['url']}"/>
                  </a>
                {elseif $picture['type'] == 'video'} 
                  <a class="gallery-img" data-imagelightbox="f" href="{$picture['url']}">
                    <video controls poster="{$picture['thumbnail']}">
                      <source src="{$picture['url']}" type="video/mp4"/>
                    </video>
                  </a>
                {/if}
              </div>
            {else}                
              <div class="gallery-sub col-12">                
                {if $picture['type'] == 'picture'}                                        
                  <span class="gallery-sub">
                    <img alt="{$txt_altName} - {($TXT['Zdjecie'])} {($txt_counter++)}" data-src="{$picture['url']}"/>
                  </span>
                {elseif $picture['type'] == 'video'}                                        
                  <span class="gallery-sub">
                    <video controls poster="{$picture['thumbnail']}">
                      <source src="{$picture['url']}" type="video/mp4"/>
                    </video>
                  </span>
                {/if}
              </div>
            {/if}
          {/foreach}
        </div>
      {/if}
      {if $socialMedia['active'] == true && $socialMedia['descriptionPage'] == true && $socialMedia['hide_subpage_comments'] == false}
        {call name=inccomp file="facebook-comments" s=false}
      {/if}
    </div>

    {if isset($promotedOffers) && isset($positionPromotedOffers) && $positionPromotedOffers == 1}
      {call name=renderHotspot hotspotOffers=$promotedOffers namePromotedOffers=$namePromotedOffers hotspotName='WyroznioneOferty'}
    {/if}
  </main>

  {include file="footer.tpl"}
{/strip}