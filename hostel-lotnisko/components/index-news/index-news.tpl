{strip}
{include file="../index-about/renderContent.tpl"}
 <div class="news-container">		
    <h2 class="big-label line-label pt-3">                      
        {$TXT.Aktualnosci}
    </h2>        
    <div class="news-wrapper row">
        {foreach from=$newsArray item=newsFromArray}
            {if ($newsFromArray['visible'] == 1)}
                <div class="news-item col-md-6 col-12">  
                    <div>                      
                        <h3>
                            <a href="{$newsFromArray['url']}">
                                {$newsFromArray['title']}
                            </a>
                        </h3>
                        <span class="news-date">{$newsFromArray['createDate']}</span>
                        <div class="news-content">
                            {if isset($newsFromArray['contentSections'])}
                                {foreach from=$newsFromArray['contentSections'] item=sect}
                                    {call name=renderContent
                                        sect=$sect
                                        class=''
                                    }
                                {/foreach}
                            {else}
                                {$newsFromArray['content']}
                            {/if}
                        </div>
                    </div>
                    <div> 
                        <a href="{$newsFromArray['url']}" aria-label="{$TXT.CzytajWiecejO} {$newsFromArray['title']}" class="more-news btn btn-alternative">
                            {$TXT.czytajWiecej}
                        </a>
                    </div>
                </div>
            {/if}
        {/foreach}
    </div>
</div>
{/strip}