{strip}
{include file="./txt-helper-library.tpl"}
{include file="./txt-beds-helper-library.tpl"}
{include file="./txt-length-setup-helper-library.tpl"}
{include file="./txt-presentation-settings-helper-library.tpl"}
<!DOCTYPE HTML>
    <html class="no-js" lang="{$language['code2']}">
        <head>
            <meta http-equiv="content-type" content="text/html; charset=UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="format-detection" content="telephone=no">
            <meta name="description" content="{$meta['description']|escape}">
            <meta name="viewport" content="initial-scale = 1.0, maximum-scale = 5.0, width=device-width, viewport-fit=cover"/>
            <meta name="theme-color" content="{$mainColor}">
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
            {if isset($ownerData['faviconPath'])}
              <link rel="Shortcut icon" href="{$ownerData['faviconPath']}" />
            {else}
              <link rel="Shortcut icon" href="{$path}/files/favicon.ico" />
            {/if}
            {if isset($canonicalLink)}
              <link rel="canonical" href="{$canonicalLink}"/>
            {/if}
            {if isset($facebookVerifiedDomainCode)}
                <meta name="facebook-domain-verification" content="{$facebookVerifiedDomainCode}" />
            {/if}
            {if isset($id) && isset($url) }
              {foreach from=$activeLangInWidget item=lang}
                <link rel="alternate" hreflang="{$lang}" href="{$frontpageUrl}{$url}"/>
              {/foreach}
            {/if}

            {* ~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~= fontello preload ~=~=~= *}
            <link rel="preload" crossorigin="anonymous" as="font" href="{$path}/dist/fonts/fontello.woff">

            {* modernizer.js - https://modernizr.com/docs/ - should be load as fast as possible *}
            <script defer src="{$path}/dist/modernizer.js"></script>

            {* ~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~= CSS and client LESS ~=~=~= *}
            {if
                    $mainColor == '#ebebeb'
                || $mainColor == '#333333'
                || $mainColor == '#313d58'
                || $mainColor == '#2a2829'
                || $mainColor == '#2f3438'
                || $mainColor == '#212121'
                || $mainColor == '#12374a'
                || $mainColor == '#313d57'
                || $mainColor == '#212a31'
                || $mainColor == '#494553'
                || $mainColor == '#e9e9e9'
                || $mainColor == '#016392'
                || $mainColor == '#3f51b5'
                || $mainColor == '#394263'
                }

                {*<link rel="stylesheet" href="{$path}/dist/less/{$action}/l{$mainColor|replace:'#':''}.less">*}
                {*<style id="less-styles" rel="stylesheet/less">
                    @import "{$path}/dist/less/{$mainColor|replace:'#':''}.less";
                    @import "{$path}/dist/less/app.bundle.less";
                    @import "{$path}/dist/less/{$action}.bundle.less";
                </style>*}

                <link rel="stylesheet" href="{$path}/dist/scheme/{$mainColor|replace:'#':''}.css{($APP_MODE=='dev') ? '' : '.gz'}">
            {else}
              <link rel="stylesheet" href="{$path}/dist/scheme/default.css{($APP_MODE=='dev') ? '' : '.gz'}">
            {/if}
            <link rel="stylesheet" href="{$path}/dist/app.css{($APP_MODE=='dev') ? '' : '.gz'}?v={$APP_VERSION}">
            <link rel="stylesheet" href="{$path}/dist/{$action}.css{($APP_MODE=='dev') ? '' : '.gz'}?v={$APP_VERSION}">
            {if $customStyle == 1}
              <link rel="stylesheet" href="{$customStylePath}">
            {/if}

            {* ~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~= GOOGLE analytics ~=~=~= *}
            {include file="./analytics.tpl"}

            {* ~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~= SNIPPETS and TRACKS ~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~= *}

            {* ~=~=~=~ SNIPPETS and TRACKS ~=~=~=~ *}
            {* TODO - removes snippets problem, footer should be before <body> tag. *}
            {assign var="snippetLength1" value=$ownCode['head_code']|count_characters}
            {assign var="snippetScriptLength1" value=$ownCode['head_code']|regex_replace:"/script/":""|count_characters}
            {assign var="snippetJQuerytLength1" value=$ownCode['head_code']|regex_replace:"/\\$\\(/":""|count_characters}
            {assign var="isScript1" value=$snippetLength1 - $snippetScriptLength1}
            {assign var="isJQuery1" value=$snippetLength1 - $snippetJQuerytLength1}

            {assign var="snippetLength2" value=$ownCode['body_top_code']|count_characters}
            {assign var="snippetScriptLength2" value=$ownCode['body_top_code']|regex_replace:"/script/":""|count_characters}
            {assign var="snippetJQuerytLength2" value=$ownCode['body_top_code']|regex_replace:"/\\$\\(/":""|count_characters}
            {assign var="isScript2" value=$snippetLength2 - $snippetScriptLength2}
            {assign var="isJQuery2" value=$snippetLength2 - $snippetJQuerytLength2}

            {assign var="snippetLength3" value=$ownCode['body_bottom_code']|count_characters}
            {assign var="snippetScriptLength3" value=$ownCode['body_bottom_code']|regex_replace:"/script/":""|count_characters}
            {assign var="snippetJQuerytLength3" value=$ownCode['body_bottom_code']|regex_replace:"/\\$\\(/":""|count_characters}
            {assign var="isScript3" value=$snippetLength3 - $snippetScriptLength3}
            {assign var="isJQuery3" value=$snippetLength3 - $snippetJQuerytLength3}

            {assign var="snippetLength4" value=$aboutPage['content']|count_characters}
            {assign var="snippetScriptLength4" value=$aboutPage['content']|regex_replace:"/script/":""|count_characters}
            {assign var="snippetJQuerytLength4" value=$aboutPage['content']|regex_replace:"/\\$\\(/":""|count_characters}
            {assign var="isScript4" value=$snippetLength4 - $snippetScriptLength4}
            {assign var="isJQuery4" value=$snippetLength4 - $snippetJQuerytLength4}

            {if ($isScript1>0 && $isJQuery1>0) || ($isScript2>0 && $isJQuery2>0) || ($isScript3>0 && $isJQuery3>0) || ($isScript4>0 && $isJQuery4>0) }
              <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            {/if}

            {* ~=~=~=~ snippets ~=~=~=~ *}
            {if isset($ownCode) && isset($ownCode['head_code'])}
                {$ownCode['head_code']}
            {/if}
            {if isset($subPageOwnCode) && isset($subPageOwnCode['head_code'])}
                {$subPageOwnCode['head_code']}
            {/if}

            {if isset($externalCookieConsentArray['cookie_consent_external_script'])}
                {$externalCookieConsentArray['cookie_consent_external_script']}
            {/if}

            {* ~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~= WIDGET SECTION ~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~= *}
            {* TODO - do we need this *}<script>
                if (top != self) {
                    window.location = '/widget';
                }
            </script>

            {* ~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~= GOOGLE TAG MANAGER ~=~=~=~=~=~=~=~=~=~=~=~=~=~= *}
            {include file="./google-tag-manager.tpl" part="1"}
            {include file="./ga4.tpl"}

            {* TODO LESS by JS - remove !!!!!!!!!!!!!!!!!!!!!!!!!!!
<link rel="stylesheet" href="{$path}/pages/{$action}/{$action}.less">
<link rel="stylesheet" href="https://client4000.idosell.com/template/widget/css/generate-widget.css.gz">
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.0.0/less.min.js" ></script>*}
            {if isset($robotsNoIndex) && $robotsNoIndex}
                <meta name="robots" content="noindex, nofollow">
            {/if}
        </head>
        <body class="page-{$action}">
            {* ~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~= GOOGLE TAG MANAGER ~=~=~=~=~=~=~=~=~=~=~=~=~=~= *}
            {include file="./google-tag-manager.tpl" part="2"}
            {* ~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~= SNIPPETS ~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~= *}
            {if isset($ownCode) && isset($ownCode['body_top_code'])}
                {$ownCode['body_top_code']}
            {/if}
            {if isset($subPageOwnCode) && isset($subPageOwnCode['body_top_code'])}
                {$subPageOwnCode['body_top_code']}
            {/if}
{/strip}
