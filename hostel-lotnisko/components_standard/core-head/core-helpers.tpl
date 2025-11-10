{strip}
{function name=inccomp file="" s=true}

    {assign var="root_path" value="."}
    {if $smarty.current_dir|regex_replace:"/components/":"" !== $smarty.current_dir}
        {assign var="root_path" value="../.."}
    {/if}

    {if $s == true}
        {include file="$root_path/components_standard/$file/$file.tpl"}
    {else}
        {include file="$root_path/components/$file/$file.tpl"}
    {/if}
{/function}
{/strip}
