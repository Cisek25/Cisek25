{include file="header.tpl"}
{strip}
<main id="pageContent" class="page">
    <div class="container">  
        <h1 class="label"> <div></div><span>{$fbCommentsTitle}</span> <div></div></h1>
        {if $socialMedia['active'] == true && $socialMedia['facebookCommentsPage'] == true}
            {call name=inccomp file="facebook-comments" s=false}
        {/if}
    </div>
</main>
{/strip}
{include file="footer.tpl"}