{* still main container *}
{strip}
  {if isset($socialMediaLinks)}
    {if isset($socialMediaLinks['facebook'])}
      {append var='footerLinks' value=['name' => 'facebook' , link => $socialMediaLinks['facebook']] index='0'}
    {/if}
    {if isset($socialMediaLinks['instagram'])}
      {append var='footerLinks' value=['name' => 'instagram' , link => $socialMediaLinks['instagram']] index='1'}
    {/if}
    {if isset($socialMediaLinks['tripAdvisor'])}
      {append var='footerLinks' value=['name' => 'tripAdvisor' , link => $socialMediaLinks['tripAdvisor']] index='2'}
    {/if}
  {/if}

  <div class="footer container">
  {if $socialMediaLinksExtended && $socialMediaLinksExtended|@count gt 3}
    <div class="footer container --moreicons">
  {else if $socialMediaLinksExtended}
    {assign var="type_count" value=0}
    {foreach $socialMediaLinksExtended as $values}
        {$type = $values['is_default']}
        {if $values['is_default'] == 0}
            {$type_count = $type_count + 1}
        {/if}
    {/foreach}
    {if $type_count > 0}
      <div class="footer container --moreicons">
    {else}
      <div class="footer container">
    {/if}
  {else}
    <div class="footer container">
  {/if}
    <div class="footer__wrapper">
      <div class="row">
        <ul class="footer__contact">
          <li class="footer-contact-adress">
            <span>
              {$ownerData['object_street']}
            </span>
            <span>
              , {$ownerData['object_zipcode']} {$ownerData['object_city']}
            </span>
          </li>
          <li class="footer-contact-phone">
            <a href="tel:{$ownerData['object_phone']}" aria-label="{$TXT.Telefon}: {$ownerData['object_phone']}">
              {$ownerData['object_phone']}
            </a>
          </li>
          <li class="footer-contact-mail">
            <a href="mailto:{$ownerData['object_email']}" aria-label="{$TXT.Email}: {$ownerData['object_email']}">
              {$ownerData['object_email']}
            </a>
          </li>
          <li class="footer-contact-terms">
            <a target="blank" href="{if isset($widgetUrl)}{$widgetUrl}{else}/widget2{/if}/index.php?module=terms&displayOnToplayer=true&language={$language['id']}" title="{$TXT.Regulamin}">
              {$TXT.Regulamin}
            </a>
            <a target="blank" href="{if isset($widgetUrl)}{$widgetUrl}{else}/widget2{/if}/index.php?module=cookies&displayOnToplayer=true&language={$language['id']}" title="{$TXT.PolitykaPrywatnosci}">
              {$TXT.PolitykaPrywatnosci}
            </a>
          </li>
        </ul>
        <div class="footer__social">
          <ul class="footer__social_media">
            {if $socialMediaLinksExtended}
              {foreach from=$socialMediaLinksExtended item=item}
                <li>
                  <a href="{$item['url']}" target="_blank" title="{$item['name']}">
                    {if $item['is_default'] == '1'}
                      <i class="icon icon-{$item['name']}"></i>
                    {else if $item['is_default'] == '0'}
                      {if $item['logo_path'] != ''}
                        <img src="{$item['logo_path']}" alt="{$item['name']}">
                      {else}
                        <span>{$item['name']}</span>
                      {/if}
                    {/if}
                  </a>
                </li>
              {/foreach}
            {else if $footerLinks}
              {foreach from=$footerLinks item=item}
                <li>
                  <a href="{$item['link']}" target="_blank" title="{$item['name']}">
                    <i class="icon icon-{$item['name']}"></i>
                  </a>
                </li>
              {/foreach}
            {/if}
          </ul>
          {if isset($button_src) and $whiteLabel == 0}
            <div class="powered_by">
              <a href="{$button_link}" target="_blank" class="powered_by_logo" title="{$button_text}">
                {if isset($logoPoweredBy)}
                  <img data-src="{$logoPoweredBy}" class="powered_by_logo" alt="{$button_text}" />
                  {else}
                  <img data-src="{if $mainColor == '#333333' || $mainColor == '#313d58' || $mainColor == '#2a2829'}{$path}/files/logo/powered_by_IdoBooking_white.svg{else}{$path}/files/logo/powered_by_IdoBooking_black.svg{/if}" class="powered_by_logo" alt="{$button_text}" />
                {/if}
              </a>
            </div>
          {/if}
        </div>
      </div>
    </div>
    <div class="footer-contact-add">
      {* ~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~= footer SNIPPETS ~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~= *}
      {if isset($ownCode) && isset($ownCode['body_bottom_code'])}
        {$ownCode['body_bottom_code']}
      {/if}
      {if isset($subPageOwnCode) && isset($subPageOwnCode['body_bottom_code'])}
        {$subPageOwnCode['body_bottom_code']}
      {/if}
    </div>
  </div>
  <div class="footer-contact-baner">
  <span><svg xmlns="http://www.w3.org/2000/svg" width="51.325" height="15.8" viewBox="0 0 51.325 15.8">
        <g transform="translate(17.942 0.263)">
          <path d="M19.33,16.8,16.722,32.106h4.172L23.5,16.8Z" transform="translate(-16.722 -16.799)"></path>
        </g>
        <g transform="translate(4.144 0.277)">
          <path d="M14.163,16.815,10.077,27.254l-.436-1.576a16.378,16.378,0,0,0-5.779-6.346L7.6,32.1l4.414-.008,6.57-15.278Z" transform="translate(-3.862 -16.812)"></path>
        </g>
        <g transform="translate(0 0.132)">
          <path d="M8.339,17.921a1.679,1.679,0,0,0-1.818-1.244H.054l-.054.3c5.033,1.221,8.364,4.163,9.746,7.7Z" transform="translate(0 -16.677)"></path>
        </g>
        <g transform="translate(24.725 0)">
          <path d="M31.5,19.752a7.7,7.7,0,0,1,3.122.586l.377.177.564-3.318a10.768,10.768,0,0,0-3.737-.643c-4.122,0-7.028,2.076-7.051,5.052-.027,2.2,2.07,3.426,3.654,4.159,1.626.751,2.171,1.229,2.163,1.9-.013,1.025-1.3,1.495-2.495,1.495a8.757,8.757,0,0,1-3.928-.8l-.538-.245-.587,3.426a13.212,13.212,0,0,0,4.648.815c4.385,0,7.235-2.052,7.265-5.231.018-1.739-1.094-3.067-3.505-4.156-1.459-.71-2.352-1.182-2.343-1.9C29.108,20.432,29.865,19.752,31.5,19.752Z" transform="translate(-23.043 -16.554)"></path>
        </g>
        <g transform="translate(36.346 0.28)">
          <path d="M45.477,16.815H42.254a2.076,2.076,0,0,0-2.186,1.27L33.874,32.114h4.381s.715-1.886.877-2.3l5.342.006c.124.534.509,2.293.509,2.293h3.87Zm-5.145,9.866c.343-.879,1.662-4.278,1.662-4.278-.023.042.34-.885.556-1.461l.281,1.32.967,4.42Z" transform="translate(-33.874 -16.815)"></path>
        </g>
      </svg></span><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="143" height="25" viewBox="0 0 143 25">
        <defs>
          <pattern id="a" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 515 91">
            <image width="515" height="91" xlink:href="data:image/png;base64,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"></image>
          </pattern>
        </defs>
        <rect width="143" height="25" fill="url(#a)"></rect>
      </svg></span>
    {if isset($polishTouristVoucher)}<span><img src="{$path}/files/gfx/logo_bon_h35.png" alt="Polski Bon Turystyczny"></span>{/if}
  </div>
{/strip}
