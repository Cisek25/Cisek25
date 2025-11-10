{strip}
    <div id="amenities" class="amenities">
        {if $object['amenitiesCount']}
            <h2 class="label offer-label">{$TXT.Udogodnienia}</h2>
            <div class="row">
                {if ($object['amenitiesInObjectCount']) or ($object['amenitiesInLocationCount'])}  
                    <div class="col-md-12">                                
                            <ul class="amenities_list">
                                {foreach from=$object['amenitiesInObject'] item=amenity}
                                    {if array_key_exists('icon', $amenity) and $amenity['icon'] != ''}
                                        <li class="col-md-3 col-sm-3 col-xs-6"><span aria-hidden="true" ><img class="svg" src="{$amenity['icon']}" alt="{$TXT.{$amenity['name_txt']}}"/></span><span>{$TXT.{$amenity['name_txt']}}</span></li>
                                    {else}
                                        <li class="col-md-3 col-sm-3 col-xs-6"><span aria-hidden="true"><img class="svg" src="/images/amenities/default.svg" alt="{$amenity['name']}"/></span><span>{$amenity['name']}</span></li>
                                    {/if}
                                {/foreach}
                                {foreach from=$object['amenitiesInLocation'] item=amenity}
                                    {if array_key_exists('icon', $amenity) and $amenity['icon'] != ''}
                                        <li class="col-md-3 col-sm-3 col-xs-6"><span aria-hidden="true"><img class="svg" src="{$amenity['icon']}" alt="{$TXT.{$amenity['name_txt']}}"/></span><span>{$TXT.{$amenity['name_txt']}}</span></li>
                                    {else}
                                        <li class="col-md-3 col-sm-3 col-xs-6"><span aria-hidden="true"><img class="svg" src="/images/amenities/default.svg" alt="{$amenity['name']}"/></span><span>{$amenity['name']}</span></li>
                                    {/if}
                                {/foreach}
                            </ul>
                        </div>
                {/if}                 
            </div>
        {/if}
    </div>
{/strip}