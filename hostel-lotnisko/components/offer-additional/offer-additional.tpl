{strip}
<div id="additional" class="additional p-4 p-md-0">
    <div class="">
        <div class="row">
            <div id="room_data" class="room_data tab">
                <h2 class="label offer-label">{$TXT.WlasciwosciPokoju}:</h2>
                <div>
                    <strong class="roomspace-txt">{$TXT.LiczbaMiejsc}: </strong><span>{if $pageType=="special-offer"}{$object['maxCapacity']}{else}{$object['capacity']}{/if}</span>
                </div>

                {if $object['bedrooms']}
                    <div>
                        <strong>{$TXT.IloscSypialni}: </strong><span>{$object['bedrooms']}</span>
                    </div>
                {/if}

                {if $object['bedsInfo'][0]}
                    <div>
                        <strong>{$TXT.IloscLozek}: </strong>
                        {if array_key_exists('bedsArray', $object)}
                            <span>
                            {foreach from=$object['bedsArray'] item=amount key=type name=bedsLoopBottom}
                                {if $smarty.foreach.bedsLoopBottom.iteration != 1}, {/if}{call name=getBedLabel bedType=$type amount=$amount}
                            {/foreach}
                            </span>
                        {else}
                            {foreach from=$object['bedsInfo'] item=item key=key name=bedsInfoBottom}
                                <span>
                                    {$item['text']}{if not $smarty.foreach.bedsInfoBottom.last}, {/if}
                                </span>
                            {/foreach}
                        {/if}
                    </div>
                {/if}
            </div>

            <div id="room_rules" class="room_rules tab">
                <h2 class="label offer-label">{$TXT.ZasadyIOplaty}:</h2>
                {if $object['receptionOpenInfoArray']}
                    <div>
                        <span>{$TXT.GodzinyOtwarcia}: </span>
                        <span>{call name=getReceptionInfo receptionInfoArray=$object.receptionOpenInfoArray printLabel=false}</span>
                    </div>
                {elseif $object['receptionOpenInfo']}
                    <div>
                        <span>{$TXT.GodzinyOtwarcia}: </span>
                        <span>{$object['receptionOpenInfo']}</span>
                    </div>
                {/if}

                {if $object['receptionInfo']}
                    <div>
                        <span>{$TXT.DodatkoweInformacje}: </span>
                        <span>{$object['receptionInfo']}</span>
                    </div>
                {/if}
            </div>
        </div>
    </div>

    <div id="extra-options" class="extra-options tab">

        {if $object['addonsCount']}
            <h2 class="label offer-label">{$TXT.OpcjeDodatkowe}:</h2>

            {if $object['freeAddonsCount']}
                <span>{$TXT.WliczoneWKosztRezerwacji}:</span>
                <ul class="addonsList">
                    {foreach from=$object['freeAddons'] item=addon}
                        <li>
                            <span>{$addon['name']}</span>
                            {if $addon['selectionMode'] == '1'}
                                <ul class="amenities-addons">
                                    {foreach from=$addon['amenitiesToPresentation'] item=presentation}
                                        <li class="room-item-amenities-list">
                                            {$presentation['name']}
                                            {if !empty($presentation['amenities'])}
                                                {if array_key_exists('amenities_txt', $presentation)}
                                                    {call name=getAmenities amenities=$presentation['amenities_txt'] assign='amenities'}
                                                {else}
                                                    {implode subject=$presentation['amenities'] glue=', ' assign='amenities'}
                                                {/if}
                                            - <i>{$amenities}</i>.
                                            {/if}
                                        </li>
                                    {/foreach}
                                </ul>
                            {else}
                                {if !empty($addon['amenitiesToPresentation'])}
                                    <br />
                                    {if array_key_exists('amenitiesToPresentationTxtKey', $addon)}
                                        {call name=getAmenities amenities=$addon['amenitiesToPresentationTxtKey'] assign='amenities' }
                                    {else}
                                        {implode subject=$addon['amenitiesToPresentation'] glue=', ' assign='amenities'}
                                    {/if}
                                    <i>{$amenities}</i>.
                                {/if}
                            {/if}
                        </li>
                    {/foreach}
                </ul>
            {/if}

            {if $object['mustPaidAfterArrivalCount']}
                <span>{$TXT.WliczoneWCeneRezerwacjiPlatneNaMiejscu}:</span>
                <ul class="addonsList">
                    {foreach from=$object['mustPaidAfterArrival'] item=addon}
                        <li>
                            <span>{$addon['name']}</span>&#32;
                            <strong>{if empty($addon['amenitiesToPresentation']) || $addon['selectionMode'] != '1'} {$addon['price']} {$currentCurrency['symbol']}{/if}&#32;
                                <span>
                                    {if $addon.txt_chargePerDescriptionForPersonType}
                                        {if $addon.txt_chargePerDescriptionForPersonType.params}
                                            ({lcfirst(sprintf({$TXT.{$addon.txt_chargePerDescriptionForPersonType.txt}}, $addon.txt_chargePerDescriptionForPersonType.params[0]))})
                                        {else}
                                            ({lcfirst($TXT.{$addon['chargePerDescription']})})
                                        {/if}
                                    {elseif !empty($addon['chargePerDescription'])}
                                        ({lcfirst($TXT.{$addon['chargePerDescription']})})
                                    {/if}
                                </span>
                            </strong>
                            {if $addon['selectionMode'] == '1'}
                                <ul class="amenities-addons">
                                    {foreach from=$addon['amenitiesToPresentation'] item=presentation}
                                        <li class="room-item-amenities-list">
                                            {$presentation['name']}
                                            {if !empty($presentation['amenities'])}
                                                {if array_key_exists('amenities_txt', $presentation)}
                                                    {call name=getAmenities amenities=$presentation['amenities_txt'] assign='amenities'}
                                                {else}
                                                    {implode subject=$presentation['amenities'] glue=', ' assign='amenities'}
                                                {/if}
                                                - <i>{$amenities}</i>.
                                            {/if}
                                            <strong>{$presentation['price_formatted']}</strong>
                                        </li>
                                    {/foreach}
                                </ul>
                            {else}
                                {if !empty($addon['amenitiesToPresentation'])}
                                    <br />
                                    {if array_key_exists('amenitiesToPresentationTxtKey', $addon)}
                                        {call name=getAmenities amenities=$addon['amenitiesToPresentationTxtKey'] assign='amenities' }
                                    {else}
                                        {implode subject=$addon['amenitiesToPresentation'] glue=', ' assign='amenities'}
                                    {/if}
                                    <i>{$amenities}</i>.
                                {/if}
                            {/if}
                        </li>
                    {/foreach}
                </ul>
            {/if}

            {if $object['afterArrivalCount']}
                <span>{$TXT.PlatneDodatkowoNaMiejscu}:</span>
                <ul class="addonsList">
                    {foreach from=$object['afterArrival'] item=addon}
                        <li>
                            <span>{$addon['name']}</span>&#32;
                            <strong>{if empty($addon['amenitiesToPresentation']) || $addon['selectionMode'] != '1'} {$addon['price']} {$currentCurrency['symbol']}{/if}&#32;
                                <span>
                                    {if $addon.txt_chargePerDescriptionForPersonType}
                                        {if $addon.txt_chargePerDescriptionForPersonType.params}
                                            ({lcfirst(sprintf({$TXT.{$addon.txt_chargePerDescriptionForPersonType.txt}}, $addon.txt_chargePerDescriptionForPersonType.params[0]))})
                                        {else}
                                            ({lcfirst($TXT.{$addon['chargePerDescription']})})
                                        {/if}
                                    {elseif !empty($addon['chargePerDescription'])}
                                        ({lcfirst($TXT.{$addon['chargePerDescription']})})
                                    {/if}
                                </span>
                            </strong>
                            {if $addon['selectionMode'] == '1'}
                                <ul class="amenities-addons">
                                    {foreach from=$addon['amenitiesToPresentation'] item=presentation}
                                        <li class="room-item-amenities-list">
                                            {$presentation['name']}
                                            {if !empty($presentation['amenities'])}
                                                {if array_key_exists('amenities_txt', $presentation)}
                                                    {call name=getAmenities amenities=$presentation['amenities_txt'] assign='amenities'}
                                                {else}
                                                    {implode subject=$presentation['amenities'] glue=', ' assign='amenities'}
                                                {/if}
                                            - <i>{$amenities}</i>.
                                            {/if}
                                            <strong>{$presentation['price_formatted']}</strong>
                                        </li>
                                    {/foreach}
                                </ul>
                            {else}
                                {if !empty($addon['amenitiesToPresentation'])}
                                    <br />
                                    {if array_key_exists('amenitiesToPresentationTxtKey', $addon)}
                                        {call name=getAmenities amenities=$addon['amenitiesToPresentationTxtKey'] assign='amenities' }
                                    {else}
                                        {implode subject=$addon['amenitiesToPresentation'] glue=', ' assign='amenities'}
                                    {/if}
                                    <i>{$amenities}</i>.
                                {/if}
                            {/if}
                        </li>
                    {/foreach}
                </ul>
            {/if}

            {if $object['widgetCount']}
                <span>{$TXT.PlatneDodatkowoPodczasRezerwacji}:</span>
                <ul class="addonsList">
                    {foreach from=$object['widget'] item=addon}
                        <li>
                            <span>{$addon['name']}</span>&#32;
                            <strong>{if empty($addon['amenitiesToPresentation']) || $addon['selectionMode'] != '1'} {$addon['price']} {$currentCurrency['symbol']}{/if}&#32;
                                <span>
                                    {if $addon.txt_chargePerDescriptionForPersonType}
                                        {if $addon.txt_chargePerDescriptionForPersonType.params}
                                             ({lcfirst(sprintf({$TXT.{$addon.txt_chargePerDescriptionForPersonType.txt}}, $addon.txt_chargePerDescriptionForPersonType.params[0]))})
                                        {else}
                                             ({lcfirst($TXT.{$addon['chargePerDescription']})})
                                        {/if}
                                    {elseif !empty($addon['chargePerDescription'])}
                                         ({lcfirst($TXT.{$addon['chargePerDescription']})})
                                    {/if}
                                </span>
                            </strong>
                            {if $addon['selectionMode'] == '1'}
                                <ul class="amenities-addons">
                                    {foreach from=$addon['amenitiesToPresentation'] item=presentation}
                                        <li class="room-item-amenities-list">
                                            {$presentation['name']}
                                            {if !empty($presentation['amenities'])}
                                                {if array_key_exists('amenities_txt', $presentation)}
                                                    {call name=getAmenities amenities=$presentation['amenities_txt'] assign='amenities'}
                                                {else}
                                                    {implode subject=$presentation['amenities'] glue=', ' assign='amenities'}
                                                {/if}
                                            - <i>{$amenities}</i>.
                                            {/if}
                                            <strong>{$presentation['price_formatted']}</strong>
                                        </li>
                                    {/foreach}
                                </ul>
                            {else}
                                {if !empty($addon['amenitiesToPresentation'])}
                                    <br />
                                    {if array_key_exists('amenitiesToPresentationTxtKey', $addon)}
                                        {call name=getAmenities amenities=$addon['amenitiesToPresentationTxtKey'] assign='amenities' }
                                    {else}
                                        {implode subject=$addon['amenitiesToPresentation'] glue=', ' assign='amenities'}
                                    {/if}
                                    <i>{$amenities}</i>.
                                {/if}
                            {/if}
                        </li>
                    {/foreach}
                </ul>
            {/if}
        {/if}
    </div>
</div>
{/strip}
