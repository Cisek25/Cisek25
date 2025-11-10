<div id="viewType" style="display: none;"></div>
<script>    
    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var isChrome = !!window.chrome && !isOpera;
    var isWinOS = navigator.appVersion.indexOf("Win") != -1;
    var widgetUrl = '{$widgetUrl}';
</script>

{* ~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~= tripadvisor ~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~= *}
{if isset($config['publishing']) && isset($config['publishing']['TripAdvisor']) && $config['publishing']['TripAdvisor'] == true}
<script src="//www.tripadvisor.com/js3/conversion/pixel.js"></script>
{/if}
{if isset($tripAdvisor) && $tripAdvisor['conversionTracking'] == true}
<script>
    TAPixel.impressionWithReferer("{$tripAdvisor['partnerId']}");
</script>
{/if}

{* ~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~= RUN SCRIPTS 

FOOTER:
 sync 
 sync 
 inline
  = 71,72,73
 sync 
 sync 
 loaded
  = 75,75,74
sync
defer
inline
 = async, not work
defer 
defer 
loaded
 = REFLOWs

*}
<script src="{$path}/dist/vendor_app.js{($APP_MODE=='dev') ? '' : '.gz'}?v={$APP_VERSION}"></script>
<script src="{$path}/dist/app.js{($APP_MODE=='dev') ? '' : '.gz'}?v={$APP_VERSION}"></script>
<script src="{$path}/dist/{$action}.js{($APP_MODE=='dev') ? '' : '.gz'}?v={$APP_VERSION}"></script>
<script>{* ~=~=~=~=~=~=~=~=~=~=~= RUN APP ~=~=~=~=~=~=~=~=~=~=~=~=~=~= *}
  app_book.runApp();
</script>


{call name=inccomp file="widget-additional-files" s=false}

</body>
</html>
{/strip}