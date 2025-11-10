{include file="header.tpl"}  
{strip}
{if isset($news)}
    {call name=inccomp file="news-item" s=false}
{elseif isset($newsArray)}
    {call name=inccomp file="news-list" s=false}
{/if}       
{include file="footer.tpl"}
{/strip}