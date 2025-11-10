
{strip}
    <div class="row additional">
        <div class="col-md-6">
            <div class="row">
                <div class="room_data col-md-6 col-sm-12">
                    <h2 class="label">{$TXT.WlasciwosciPokoju}:</h2>
                    <div>
                        <span class="roomspace-txt">{$TXT.LiczbaMiejsc}: </span><strong>{if $pageType=="special-offer"}{$object['maxCapacity']}{else}{$object['capacity']}{/if}</strong>
                    </div>

                    {if $object['bedrooms']}
                        <div>
                            <span>{$TXT.IloscSypialni}: </span><strong>{$object['bedrooms']}</strong>
                        </div>
                    {/if}

                    {if $object['bedsInfo'][0]}
                        <div>
                            <span>{$TXT.IloscLozek}: </span>
                            {if array_key_exists('bedsArray', $object)}
                                <strong>
                                {foreach from=$object['bedsArray'] item=amount key=type name=bedsLoopBottom}      
                                    {if $smarty.foreach.bedsLoopBottom.iteration != 1}, {/if}{call name=getBedLabel bedType=$type amount=$amount}
                                {/foreach}
                                </strong>
                            {else}
                                {foreach from=$object['bedsInfo'] item=item key=key name=bedsInfoBottom}
                                    <strong>                                                            
                                        {$item['text']}{if not $smarty.foreach.bedsInfoBottom.last}, {/if}
                                    </strong>
                                {/foreach}
                            {/if}                                           
                        </div>
                    {/if}    
                </div>

                <div class="room_rules">
                    <h2 class="label">{$TXT.ZasadyIOplaty}:</h2>
                    {if $object['receptionOpenInfoArray']}
                        <div>
                            <span>{$TXT.GodzinyOtwarcia}: </span>
                            <strong>{call name=getReceptionInfo receptionInfoArray=$object.receptionOpenInfoArray printLabel=false}</strong>
                        </div>
                    {elseif $object['receptionOpenInfo']}
                        <div>
                            <span>{$TXT.GodzinyOtwarcia}: </span>
                            <strong>{$object['receptionOpenInfo']}</strong>
                        </div>
                    {/if}

                    {if $object['receptionInfo']}
                        <div>
                            <span>{$TXT.DodatkoweInformacje}: </span>
                            <strong>{$object['receptionInfo']}</strong>
                        </div>
                    {/if}
                </div>
            </div>
            <div class="additional_info">
                <h2 class="label">{$TXT.DodatkoweInformacjeDlaRezerwujacych}:</h2>
                <ul class="addonsList">
                    <li>
                        <span>{$TXT.Telefon}: </span>
                        <div>
                            <a href="tel:{$object['phone']}"><strong>{$object['phone']}</strong></a>
                            {if ($object['phone2'])}
                                <a href="tel:{$object['phone2']}"><strong>{$object['phone2']}</strong></a>
                            {/if}
                        </div>
                    </li>

                    {if ($object['fax'])}
                        <li>
                            <span>{$TXT.Fax}: </span>
                            <div>
                                <a href="tel:{$object['fax']}"><strong>{$object['fax']}</strong></a>
                            </div>
                        </li>
                    {/if}

                    <li>
                        <span>{$TXT.Email}: </span>
                        <div>
                            <a href="mailto:{$object['email']}"><strong>{$object['email']}</strong></a>
                        </div>
                    </li>

                    {if $object['skype']}
                        <li>
                            <span>{$TXT.Skype}: </span>
                            <div>
                                <a href="skype:{$object['skype']}"><strong>{$object['skype']}</strong></a>
                            </div>
                        </li>
                    {/if}
                </ul>
            </div>
        </div>

        <div class="dodatki_price1 col-md-6 col-sm-12">
            {if $object['addonsCount']}
                <h2 class="label">{$TXT.OpcjeDodatkowe}:</h2>

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

                {if $object['afterArrivalCount']}
                    <span>{$TXT.PlatneDodatkowoNaMiejscu}:</span>
                    <ul class="addonsList">
                        {foreach from=$object['afterArrival'] item=addon}
                            <li>
                                <span>{$addon['name']}</span><strong> {if empty($addon['amenitiesToPresentation']) || $addon['selectionMode'] != '1'}{$addon['price']} {$currentCurrency['symbol']}{/if}<span>{if !empty($addon['chargePerDescription'])} ({lcfirst($TXT.{$addon['chargePerDescription']})}){/if}</span></strong>
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
                                                <strong>{$presentation['price']} {$currentCurrency['symbol']}</strong>
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
                                <span>{$addon['name']}</span><strong> {if empty($addon['amenitiesToPresentation']) || $addon['selectionMode'] != '1'} {$addon['price']} {$currentCurrency['symbol']}{/if}<span>{if !empty($addon['chargePerDescription'])} ({lcfirst($TXT.{$addon['chargePerDescription']})}){/if}</span></strong>
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
                                                <strong>{$presentation['price']} {$currentCurrency['symbol']}</strong>
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