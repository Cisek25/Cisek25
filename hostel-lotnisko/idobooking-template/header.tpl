{strip}
    {* CORE components are essential - DO NOT CHANGE ! *}
    {include file="./components_standard/core-head/core-helpers.tpl"}
    {include file="./components/settings/settings.tpl"}
    {call name=inccomp file="core-libs" s=true}
    {call name=inccomp file="core-head" s=true}
    
    <nav class="skiplinkmenu" aria-label="{$TXT.ListaOdnosnikowPomijaniaSekcji}" tabindex="-1">
        <ul class="skiplinkmenu__list" role="list">
            <li class="skiplinkmenu__link">
                <a class="btn" id="skiplink-0" href="#pageContent">
                    <span>{$TXT.PrzejdzDoPoczatkuStrony}</span>
                </a>
            </li>
            {if $action == 'offers'}
                <li class="skiplinkmenu__link">
                    <a class="btn" id="skiplink-1" href="#menu_filter">
                        <span>{$TXT.PrzejdzDoFiltrow}</span>
                    </a>
                </li>
                <li class="skiplinkmenu__link">
                    <a class="btn" id="skiplink-2" href="#offers_list">
                        <span>{$TXT.PrzejdzDoListyOfert}</span>
                    </a>
                </li>
            {/if}
        </ul>
    </nav>
    
    {* header starts here *}
    <header class="default13">
    {call name=inccomp file="menu" s=false}
    </header>
    {/strip}
    