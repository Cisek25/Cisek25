  {if !isset($newGallery)}
    {assign var=newGallery value=[]}
  {/if}

  {foreach from=$commonGallery key=k item=v}
    {$newGallery[$k] = $v}
    {if $v && $v['type'] == 'picture'}
      {if !$v['image_desktop']}
        {$newGallery[$k]['image_desktop'] = $v['full_size']}
      {/if} 
      {if !$v['image_tablet']}
        {$newGallery[$k]['image_tablet'] = $v['full_size']}
      {/if} 
      {if !$v['image_mobile']}
        {$newGallery[$k]['image_mobile'] = $v['full_size']}
      {/if} 
      {if !$v['image_mobile_2x']}
        {$newGallery[$k]['image_mobile_2x'] = $v['full_size']}
      {/if} 
    {/if} 
  {/foreach}
<script>
  videoDurationSet = function($this) {
    $this.controls = false;
    $this.parentNode.setAttribute('data-time' , parseFloat($this.duration)*1000);
  }
</script>
<div class="parallax-slider" id="parallax_topslider" style="background-image:url('{$commonGallery[0]['miniature']}')">
{foreach from=$newGallery key=k item=v}
  {if $v && $v['type'] == 'video'}                                
    <div class="parallax-image video" data-time="4000">
      <video autobuffer="" loop="" preload muted playsinline controls="false" onloadedmetadata="videoDurationSet(this)">
        <source src="{$v['url']}">
      </video>
    </div>       
  {/if}
  {if $v && $v['type'] == 'picture'}                    
    <div class="parallax-image" data-time="4000">
        <picture>
          <source media="(min-width: 1200px)" srcset="{$v['image_desktop']}"></source>
          <source media="(min-width: 758px)" srcset="{$v['image_tablet']}"></source>
          <source media="(min-width: 480px)" srcset="{$v['image_mobile']}, {$v['image_mobile_2x']} 2x"></source>
          <source media="(max-width: 480px)" srcset="{$v['image_mobile']}, {$v['image_mobile_2x']} 2x"></source>
          <img data-src="{$v['image_desktop']}" alt="">
        </picture>
    </div>
  {/if}             
{/foreach}
</div>
<div class="index-info">
  {if isset($headerSubName)}                    
    <h1>{$headerName}</h1>
    <h2>{$headerSubName}</h2>
  {else}
    <h1>{$meta['title']}</h1>
    <h2>{$meta['description']}</h2>
  {/if}
  <div>
    <button class="navbar-reservation btn" onclick="generateWidgetIdoSellBooking(this)" data-currency="{$currentCurrency['id']}" data-language="{$language['id']}" type="button">
      {$TXT.SprawdzDostepnosc}
    </button>        
  </div>
</div>