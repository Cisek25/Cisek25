{strip}

    {if $externalCookieConsentArray['mode'] == 0 || !isset($externalCookieConsentArray['mode'])}
        {if $cookieConsentArray['is_active_type'] == true}
        <div id="ck_dsclr_v2" tabindex="-1" class="no_print  ck_dsclr_v2 --blocked" aria-labelledby="ck_label" role="dialog" aria-modal="false" style="display: none;">
            <div id="ck_dsclr_sub_v2" class="ck_dsclr__sub_v2">
                <h3 id="ck_label">{$cookieConsentArray['title']}</h3>
                {$cookieConsentArray['content']}
                <div class="ck_dsclr__btns_v2 ck_dsclr_v2_boxshadow">
                    <div id="ckdsclmrshtrtn_v2"><span tabindex="0" aria-label="{$cookieConsentArray['button_cancel']}" onclick="window.close()" class="ck_dsclr__btn_v2">{$cookieConsentArray['button_cancel']}</span></div>
                    <div id="ckdsclmrshtdwn_v2"><span tabindex="0" aria-label="{$cookieConsentArray['button_active']}" class="ck_dsclr__btn_v2">{$cookieConsentArray['button_active']}</span></div>
                </div>
            </div>
        </div>

        {else}
        <div id="ck_dsclr_v2" tabindex="-1" class="no_print ck_dsclr_v2 --passive" role="dialog" aria-modal="false" style="display: none;">
            <div class="ck_dsclr_x_v2" id="ckdsclrx_v2">
                <i class="icon-plus"></i>
            </div>
            <div id="ck_dsclr_sub_v2" class="ck_dsclr__sub_v2">
                {$cookieConsentArray['content']}
                <div id="ckdsclmrshtdwn_v2" class=""><span aria-label="{$TXT.Zamknij}" tabindex="0" class="ck_dsclr__btn_v2">{$TXT.Zamknij}</span></div>
            </div>
        </div>
        {/if}
    {/if}
{/strip}
