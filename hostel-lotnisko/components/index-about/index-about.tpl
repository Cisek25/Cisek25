{strip}
{include file="../index-about/renderContent.tpl"}
  <div class="about-main-description container">
    {if isset($aboutPage['contentSections'])}
      {foreach from=$aboutPage['contentSections'] item=sect}
        {call name=renderContentMain
          sect=$sect
        }
      {/foreach}
    {else}
      {$aboutPage['content']}
    {/if}
  </div>
{/strip}