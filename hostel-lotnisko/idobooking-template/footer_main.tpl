{* still main container *}
{strip}
<footer>
    <div class="footer_sub main">
        <div class="footer-contact">
            <div class="footer-contact-extended">
                <ul class="row">
                    <li class="footer-contact-phone col-md-6 col-xs-12">
                        <div class="footer_section">
                            <a href="tel:{$ownerData['object_phone']}">
                                {$ownerData['object_phone']}
                            </a>
                        </div>
                    </li>
                    <li class="footer-contact-mail col-md-6 col-xs-12">
                        <div class="footer_section">
                            <a href="mailto:{$ownerData['object_email']}">
                                <span class="label">{$ownerData['object_email']}</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-contact">
            <div class="footer-contact-extended">
                <ul class="row">
                    <li class="footer-contact-share col-md-6 col-xs-12" data-align=".footer_section#css">
                      <div id="share-buttons" class="share footer_section"></div>
                    </li>
                    {if isset($button_src)}
                     <li class="footer-contact-mail col-md-6 col-xs-12">
                        <div class="powered_by">
                            <a href="{$button_link}" target="_blank" class="powered_by_logo" title="{$button_text}">
                                {if isset($logoPoweredBy)}
                                    <img src="{$logoPoweredBy}" class="powered_by_logo" alt="{$button_text}" />
                                {else}
                                    <img src="{if $mainColor == '#333333' || $mainColor == '#313d58' || $mainColor == '#2a2829'}{$path}/images/powered_by_IdoBooking_white.png{else}{$path}/images/powered_by_IdoBooking_black.png{/if}" class="powered_by_logo" alt="{$button_text}" />
                                {/if}
                            </a>
                        </div>
                    </li>
                    {/if}
                </ul>
            </div>
        </div>
        <div class="footer_sub2">
            {* footer *}
            {if isset($ownCode) && isset($ownCode['body_bottom_code'])}
                {$ownCode['body_bottom_code']}
            {/if}
            {if isset($subPageOwnCode) && isset($subPageOwnCode['body_bottom_code'])}
                {$subPageOwnCode['body_bottom_code']}
            {/if}
        </div>
        {* end main-container *}
    </div>
</footer>
<script>
    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var isChrome = !!window.chrome && !isOpera;
    var isWinOS = navigator.appVersion.indexOf("Win") != -1;
</script>
{if isset($tripAdvisor) && $tripAdvisor['conversionTracking'] == true}
    <script>
        TAPixel.impressionWithReferer("{$tripAdvisor['partnerId']}");
    </script>
{/if}
<script src="/template/widget/js/widget_booking.js.gz?v=20190405"></script>
<script>
    document.addEventListener("DOMContentLoaded",function(event){
        iai_booking_search({
            "mode":"frontpage",
            "clientId":"{$clientId}",
            "showPersons":"1",
            "showRooms":false,
            "mainColor":"{$mainColor}",
            "label1":"{$TXT.Poczatek}",
            "label2":"{$TXT.Koniec}",
            "label3":"{call name=getOsoby}",
            "label4":"{call name=getObiekty}",
            "button":"{$TXT.SprawdzDostepnosc}",
            "months":["{$TXT.Styczen}","{$TXT.Luty}","{$TXT.Marzec}","{$TXT.Kwiecien}","{$TXT.Maj}","{$TXT.Czerwiec}","{$TXT.Lipiec}","{$TXT.Sierpien}","{$TXT.Wrzesien}","{$TXT.Pazdziernik}","{$TXT.Listopad}","{$TXT.Grudzien}"],
            "days":["{$TXT.SkrotDniaTygNd}","{$TXT.SkrotDniaTygPon}","{$TXT.SkrotDniaTygWt}","{$TXT.SkrotDniaTygSr}","{$TXT.SkrotDniaTygCzw}","{$TXT.SkrotDniaTygPt}","{$TXT.SkrotDniaTygSob}"],
            "trigger":"{$TXT.RezerwacjaOnline}",
            "lang":{$browserLang}
        });
    });
</script>
<script src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<script src="{$path}/scripts/parallax.js.gz?v=201809251"></script>
<script src="{$path}/scripts/app-booking.js.gz?v=201809251"></script>
<script src="{$path}/scripts/main.js.gz?v=20190219"></script>
<script>
    $(window).on("load", function(){
        bookingApp.runApp();
    })
</script>
<div class="iai-search"></div>
<div id="cookieMsg" class="gutter-proceed gutter-proceed-fixed" style="display: none;">
    <div class="cookie-msg">
        {$TXT.StronaKorzystaZPlikowCookieWCeluRealizacjiUslugZgodnieZ} <a onclick="showCookiePolicy(this)" class="cookieMsgLink" href="#" data-client="{$clientId}">{$TXT.PolitykaDotyczacaCookie}</a>. {$TXT.MozeszOkreslicWarunkiPrzechowywaniaLubDostepuDoCookieWTwojejPrzegladarce}
    </div>
    <div class="cookieMsgButton"><a onclick="hideCookieMessage()">{$TXT.Zamknij}</a></div>
</div>
</body>
</html>
{/strip}
