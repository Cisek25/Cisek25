{strip}
    {assign var="isFilterExist" value="0"}
    {foreach from=$filters item=filter key=filterName}
        {if $filter|@count != '0' && $filter|@count > '1'}
            {$isFilterExist="1"}
        {/if}
    {/foreach}
        {if $isFilterExist == '1'}
        <div id="menu_filter" class="bg_alter mb-5">
            <h4>{$TXT.filtrujWyniki}</h4>    
                <!--<form id="menu_filter_form" method="post" action="/{*{$language['code2']}*}/search" enctype="multipart/form-data">-->
                <form id="menu_filter_form" method="post" action="/{$language['code2']}/search">
                    {foreach from=$filters item=filter key=filterName}
                        {if $filter|@count != '0' && $filter|@count > '1'}
                            {if $filterName == 'locations'}
                                <div class="filter_items" id="filter_locations" data-checked="
                                {foreach from=$filter item=filterItem}
                                    {if $filterItem["checked"] == 1}{$filterItem["id"]} ,{/if}
                                {/foreach}">
                            {else}
                                <div class="filter_items">
                            {/if}
                                <div class="filter_header" id="filter_header_{$filterName}">                                                
                                    <span>
                                        {assign var="filterNameTXT" value="Inne"}
                                            {if $filterName == 'areaRanges'}
                                                {$filterNameTXT = "{$TXT.Powierzchnia}"}
                                            {elseif $filterName == 'locations'}
                                                {$filterNameTXT = "{$TXT.Lokalizacja}"}
                                            {elseif $filterName == 'amenities'}
                                                {$filterNameTXT = "{$TXT.Udogodnienia}"}    
                                            {elseif $filterName =='objectTypes'} 
                                                {$filterNameTXT = "{$TXT.TypObiektu}"}   
                                            {else}
                                                {$filterNameTXT = "{$TXT.Inne}"}   
                                            {/if}
                                        <strong>{$filterNameTXT}</strong>
                                        <i class="fa fa-angle-down"></i>
                                    </span>
                                </div>
                                <div class="filter_content collapse show" id="filter_{$filterName}_content" role="group" aria-labelledby="filter_header_{$filterName}">
    
                                    {foreach from=$filter item=filterItem}
                                        {if $filterName != 'locations'}
                                        <div class="checkbox" tabindex="0" role="checkbox" aria-checked="false">
                                            <label {if $filterItem["disabled"]}class="disabled"{/if}>
                                                <input type="checkbox" name="{$filterName}[]"
                                                    {if $filterItem["checked"] == 1}checked="checked"{/if}
                                                    {if $filterItem["disabled"]}disabled="disabled"{/if}
                                                    {if $filterItem["from"]}data-from="{$filterItem["from"]}"{/if}
                                                    {if $filterItem["from"] === 0}data-from="{$filterItem["from"]}"{/if}
                                                    {if $filterItem["to"]}data-to="{$filterItem["to"]}"{/if}
                                                    {if $filterItem["to"] === 0}data-to="{$filterItem["to"]}"{/if}
                                                    {if $filterItem['id']}value="{$filterItem['id']}"{else}value="{$filterItem["from"]} - {$filterItem["to"]}"{/if}>
                                                <span>
                                                    <span>
                                                        {if $filterName == 'areaRanges'}
                                                            {if $filterItem["from"] == $filterItem["to"]}
                                                                {$TXT['Inne']}
                                                            {else}
                                                                {$filterItem["from"]} - {$filterItem["to"]}
                                                            {/if}
                                                        {elseif $filterName == 'locations'}
                                                            {$filterItem["street"]}, {$filterItem["city"]}
                                                        {else}
                                                            {if $TXT[$filterItem["name_txt"]]}
                                                                {$TXT[$filterItem["name_txt"]]}
                                                            {else}
                                                                {$filterItem["name_txt"]}
                                                            {/if}
                                                        {/if}
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                        {/if}
                                    {/foreach}
                                </div>
                            </div>
                        {/if}
                    {/foreach}
                    <div id="filter_buttons">
                        <button type="submit" class="btn" id="filters_submit" name="filter_remove" value="0">{$TXT.ZastosujFlitry}</button>
                    </div>
                </form>
        </div>
        <div id="show_filters" aria-controls="menu_filter" class="btn btn-reverse">{$TXT.FILTROWANIE}</div>
    {/if}
    {/strip}