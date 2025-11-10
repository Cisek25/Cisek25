{strip}
<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/{if isset($language['locale'])}{$language['locale']}{else}en_US{/if}/sdk.js#xfbml=1&version=v3.3"></script>
<div class="fb-comments" 
    href="{$frontpageUrl}" 
    data-width="100%" 
    data-numposts="10" 
    data-colorscheme="light">
</div>
{/strip}