{include file="../index-about/renderContent.tpl"}
<main id="pageContent" class="news-list page">
  <div class="container">
    <h1 class="big-label">
      {$TXT.Aktualnosci}
    </h1>
    <div class="news-wrapper row">
      {foreach from=$newsArray item=newsFromArray}
        {if ($newsFromArray['visible'] == 1)}
          <div class="news-item col-md-6 col-12">
            <div>
              <h2>
                <a href="{$newsFromArray['url']}">
                  {$newsFromArray['title']}
                </a>
              </h2>
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
              <a href="{$newsFromArray['url']}" aria-label="{$TXT.czytajWiecejO} {$newsFromArray['title']}" class="more-news btn">
                {$TXT.czytajWiecej}
              </a>
            </div>
          </div>
        {/if}
      {/foreach}
    </div>
  </div>
</main>