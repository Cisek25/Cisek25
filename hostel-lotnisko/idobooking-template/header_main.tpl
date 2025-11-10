{include file="txt-helper-library.tpl"}
{include file="txt-beds-helper-library.tpl"}
{include file="txt-length-setup-helper-library.tpl"}
{include file="txt-presentation-settings-helper-library.tpl"}
{strip}
<!DOCTYPE HTML>
<!--[if lt IE 7]>      
    <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="{$language['code2']}">
<![endif]-->
<!--[if IE 7]>         
    <html class="no-js lt-ie9 lt-ie8" lang="{$language['code2']}">
<![endif]-->
<!--[if IE 8]>         
    <html class="no-js lt-ie9" lang="{$language['code2']}">
<![endif]-->
<!--[if gt IE 8]><!--> 
    <html class="no-js" lang="{$language['code2']}">
<!--<![endif]-->
        <head>
            {if $useGoogleAnalytics == true}
                {include file="analytics.tpl"}
            {/if}
            <meta http-equiv="content-type" content="text/html; charset=UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="format-detection" content="telephone=no">
            <meta name="description" content="{$meta['description']|escape}">
            <meta name="viewport" content="initial-scale = 1.0, maximum-scale = 5.0, width=device-width, viewport-fit=cover"/>        
            {if $includeFacebookAdmins == true}
                {foreach from=$socialMedia['moderatorComments'] item=moderatorCommentId}
                    {if strlen($moderatorCommentId) > 0}
                        <meta property="fb:admins" content="{$moderatorCommentId}"/>
                    {/if}
                {/foreach}
                {if isset($socialMedia['facebookAppId']) && strlen($socialMedia['facebookAppId']) > 0}
                    <meta property="fb:app_id" content="{$socialMedia['facebookAppId']}" />
                {/if}
            {/if}
            <meta property="og:title" content="{$meta['title']}" />
            <meta property="og:description" content="{$meta['description']}" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="{$frontpageUrl}{$url}" />
            <meta property="og:locale" content="{$language['locale']}" />
            {foreach from=$commonGallery item=picture}
                {if $picture['type'] == 'picture'}
                    <meta property="og:image" content="http://{$http_host}{$picture['url']}" />
                    <meta property="og:image:secure_url" content="https://{$http_host}{$picture['url']}" />
                {elseif $picture['type'] == 'video'}
                    <meta property="og:video" content="http://{$http_host}{$picture['url']}" />
                    <meta property="og:video:secure_url" content="https://{$http_host}{$picture['url']}" />
                {/if}
            {/foreach}
            <title>{$meta['title']|escape}</title>
            <link rel="Shortcut icon" href="{$path}/favicon.ico" />
            {if isset($canonicalLink)}
                <link rel="canonical" href="{$canonicalLink}"/>
            {/if}            
            {if isset($id) && isset($url) }
                {foreach from=$activeLangInWidget item=lang}
                    <link rel="alternate" hreflang="{$lang['shortName']}" href="{$frontpageUrl}{$url}"/>
                {/foreach}
            {/if}
            {if isset($ownCode) && isset($ownCode['head_code'])}
                {$ownCode['head_code']}
            {/if}
            {if isset($subPageOwnCode) && isset($subPageOwnCode['head_code'])}
                {$subPageOwnCode['head_code']}
            {/if}
            {* <script src="{$path}/scripts/jquery/jquery-1.10.1.min.js.gz"></script> *}
            <script src="{$path}/scripts/jquery/jquery-3.3.1.min.js.gz"></script> 
            <script src="{$path}/scripts/jquery/jquery.cookie.min.js.gz"></script>
            <script async src="{$path}/scripts/modernizr.js.gz"></script>
            <script>
                if (top != self) {
                    window.location = '/widget';
                }
            </script>
            <script async src="/widget/script/loadScriptsForFrontpage/lang/{$language['code2']}/action/{$action}{if isset($id)}/id/{$id}{/if}"></script>
            {if isset($config['publishing']) && isset($config['publishing']['TripAdvisor']) && $config['publishing']['TripAdvisor'] == true}
                <script async src="//www.tripadvisor.com/js3/conversion/pixel.js"></script>
            {/if}      
            <script async defer src="https://apis.google.com/js/platform.js"></script>
            
            <script>
                WebFontConfig = {
                  google: { families: [ 'Noto+Sans:400,600,700:latin,latin-ext','Open+Sans:400,600,700:latin,latin-ext' ] }
                };
                (function() {
                  var wf = document.createElement('script');
                  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
                    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
                  wf.type = 'text/javascript';
                  wf.async = 'true';
                  var s = document.getElementsByTagName('script')[0];
                  s.parentNode.insertBefore(wf, s);
                })(); </script>
            <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>    
            <link rel="stylesheet" href="{$path}/styles/main.css.gz?v=201710106">                        
                    {if $mainColor == '#394263'}
                        <link rel="stylesheet/less" href="{$path}/styles/scheme/1.less?v=201710102">
                    {elseif $mainColor == '#ebebeb'}
                        <link rel="stylesheet/less" href="{$path}/styles/scheme/11.less?v=201710102">
                    {elseif $mainColor == '#333333'}
                        <link rel="stylesheet/less" href="{$path}/styles/scheme/12_ciemna_zielona.less?v=201710102">
                    {elseif $mainColor == '#313d58'}
                        <link rel="stylesheet/less" href="{$path}/styles/scheme/13_ciemna_niebieska.less?v=201710102">
                    {elseif $mainColor == '#2a2829'}
                        <link rel="stylesheet/less" href="{$path}/styles/scheme/14_ciemny_bez.less?v=201710102">
                    {elseif $mainColor == '#2f3438'}
                        <link rel="stylesheet/less" href="{$path}/styles/scheme/2.less?v=201710102">
                    {elseif $mainColor == '#212121'}
                        <link rel="stylesheet/less" href="{$path}/styles/scheme/3.less?v=201710102">
                    {elseif $mainColor == '#12374a'}
                        <link rel="stylesheet/less" href="{$path}/styles/scheme/4.less?v=201710102">
                    {elseif $mainColor == '#313d57'}
                        <link rel="stylesheet/less" href="{$path}/styles/scheme/5.less?v=201710102">
                    {elseif $mainColor == '#212a31'}
                        <link rel="stylesheet/less" href="{$path}/styles/scheme/6.less?v=201710102">
                    {elseif $mainColor == '#494553'}
                        <link rel="stylesheet/less" href="{$path}/styles/scheme/7.less?v=201710102">
                    {elseif $mainColor == '#e9e9e9'}
                        <link rel="stylesheet/less" href="{$path}/styles/scheme/8.less?v=201710102">
                    {elseif $mainColor == '#016392'}
                        <link rel="stylesheet/less" href="{$path}/styles/scheme/9.less?v=201710102">
                    {elseif $mainColor == '#3f51b5'}
                        <link rel="stylesheet/less" href="{$path}/styles/scheme/10.less?v=201710102">
                    {else}
                        <link rel="stylesheet/less" href="{$path}/styles/scheme/0.less?v=201710102">
                    {/if}
            {include file="google-tag-manager.tpl" part="1"}
            <script defer src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js"></script>
            <link rel="stylesheet" href="{$path}/styles/responsive.css.gz?v=201710104">
        </head>
        <body data-color="{$mainColor}">
            {include file="google-tag-manager.tpl" part="2"}
            {if isset($ownCode) && isset($ownCode['body_top_code'])}
                {$ownCode['body_top_code']}
            {/if}
            {if isset($subPageOwnCode) && isset($subPageOwnCode['body_top_code'])}
                {$subPageOwnCode['body_top_code']}
            {/if}
            <!--[if lt IE 7]>
                <p class="chromeframe">{$TXT.BrowserWarning}</p>
            <![endif]--> 
                <div id="fb-root"></div>
                <header>
                    <div id="viewType" style="display: none;"></div>
                    <div class="bounce"><i class="fa fa-angle-down"></i></div>
                    {/strip}
                    {include file='menu.tpl'}
                    {strip}
                </header>
                <div class="all-container fullPage">
                <div class="parallax_slide slide photo-load" style="background-image:url('{$commonGallery[0]['full_size']}')">
                    <div id="loader"></div>
                </div>
                <div class="section">
                    <div id="parallax_topslider" class="main-slider">                        
                        {foreach from=$commonGallery key=k item=v}
                            {if $v && $v['type'] == 'video'}                                
                                <div class="item video">
                                    <video autobuffer="" loop="" preload="true" muted> 
                                        <source src="{$v['url']}">
                                    </video>
                                </div>       
                            {/if}  
                            {if $v && $v['type'] == 'picture'}                    
                                <div class="item image">
                                    <div style="background-image:url('{$v['full_size']}')"></div>
                                </div>  
                            {/if}                   
                        {/foreach}
                    </div>
                </div>
                {/strip}