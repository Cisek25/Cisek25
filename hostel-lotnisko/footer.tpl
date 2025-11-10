{strip}
<footer>
    {call name=inccomp file="footer-contact" s=false}
    {if isset($polishTouristVoucher)}
      {call name=inccomp file="polski-kupon-turystyczny" s=false}
    {/if}
</footer>

{if isset($cookieConsentArray)}
  {call name=inccomp file="cookies" s=false}
{elseif $externalCookieConsentArray['mode'] == 0 || !isset($externalCookieConsentArray['mode'])}
  <div id="cookieMsg" class="gutter-proceed gutter-proceed-fixed" style="display: none;">
  <div class="cookie-msg">
    {$TXT.StronaKorzystaZPlikowCookieWCeluRealizacjiUslugZgodnieZ} <a class="cookieMsgLink" href="#" data-client="{$clientId}">{$TXT.PolitykaDotyczacaCookie}</a>. {$TXT.MozeszOkreslicWarunkiPrzechowywaniaLubDostepuDoCookieWTwojejPrzegladarce}
  </div>
  <div><a class="cookieMsgButton" href="#">{$TXT.Zamknij}</a></div>
</div>
{/if}

{* CORE components are essential - DO NOT CHANGE ! *}
{call name=inccomp file="core-body-end" s=true}

{/strip}


