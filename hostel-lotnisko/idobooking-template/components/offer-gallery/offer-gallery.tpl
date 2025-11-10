{strip}
  {assign var="offer_gallery_counter" value=1}
  {assign var="offer_gallery_altName" value=$ownerData['short_name']}
    <div class="offer-gallery">
        <div class="slider slider-single">
            {foreach from=$object['pictures'] item=picture}
                {if $picture['type'] == 'picture'}
                    <a data-imagelightbox="f" href="{$picture['url']}"><img alt="{$offer_gallery_altName} - {($offer_gallery_counter++)}" src="{$picture['url']}"/></a>
                {/if}
            {/foreach}
        </div>
        <div class="slider multiple-items">
            {foreach from=$object['pictures'] item=picture name=paginacja}
                {if $picture['type'] == 'picture'}
                    <a href="##" data-slick-index="{$smarty.foreach.paginacja.iteration}"><img alt="{$offer_gallery_altName} - {($offer_gallery_counter++)}" src="{$picture['miniature']}" /></a>
                {/if}                               
            {/foreach}
        </div>
    </div>
    {foreach from=$object['pictures'] item=picture}                        
        {if $picture['type'] == 'video'}
            <div class="video_wrapper">
                <video controls poster="{$picture['thumbnail']}">
                    <source src="{$picture['url']}" type="video/mp4"/>
                </video>
            </div>
        {/if}
    {/foreach}
{/strip}