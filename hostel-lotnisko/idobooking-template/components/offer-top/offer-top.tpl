{strip}
  <div class="offer-top p-4 p-md-0">
      <h1 class="big-label">
          {$object['name']}
      </h1>

      <div class="clearfix"></div>

      <div class="roomspace sublink ">
          <span class="accommodation-roomspace{if $pageType=="special-offer"} {else}{/if}"><i class="icon-user"></i><span class="roomspace-txt">{$TXT.LiczbaMiejsc}: </span>
          {if $pageType=="special-offer"}{$object['maxCapacity']}{else}{$object['capacity']}{/if}</span>
          
          {if $object['area'] > 0}
              <span>
                  <span><i class="icon-size"></i>{$TXT.Powierzchnia}: </span>
                  <span>{$object['area_formatted']}</span>
              </span>
          {/if}

          {if $object['bedrooms']}
          <span class="accommodation-area">
              <span><i class="icon-door"></i></span><span>{$object['bedrooms']} {call name=getTXTsypialnie number=$object['bedrooms']}</span>
          </span>
          {/if}

          {if $object['bedsInfo'][0]}

              {if array_key_exists('bedsArray', $object)}
                {foreach from=$object['bedsArray'] item=amount key=type name=bedsLoopTop}
                  <span class="accomodation-beds">
                    {if $type == 'queen' or $type == 'double' or $type == 'king' or $type == 'double' or $type == 'doubleTwin' }
                      <i class="icon-bed-double"></i>
                    {elseif $type == 'bunkBed' }
                      <i class="icon-bed-bunk"></i>
                    {elseif $type == 'sofaBed' or $type == 'singleSofa'}
                      <i class="icon-bed-sofa"></i>
                    {else}
                      <i class="icon-bed"></i>
                    {/if}
                    <span class="accomodation-beds-txt">
                      {call name=getBedLabel bedType=$type amount=$amount}
                    </span>
                  </span>
                {/foreach}
              {else}
                {foreach from=$object['bedsInfo'] item=item key=key name=bedsInfoTop}
                  <span class="roomspace__info accomodation-beds">
                    {if $type == 'queen' or $type == 'double' or $type == 'king' or $type == 'double' or $type == 'doubleTwin' }
                      <i class="icon-bed-double"></i>
                    {elseif $type == 'bunkBed' }
                      <i class="icon-bed-bunk"></i>
                    {elseif $type == 'sofaBed' or $type == 'singleSofa'}
                      <i class="icon-bed-sofa"></i>
                    {else}
                      <i class="icon-bed"></i>
                    {/if}
                    <span class="accomodation-beds-txt">
                      {$item['text']}{if not $smarty.foreach.bedsInfoTop.last}, {/if}
                    </span>
                  </span>
                {/foreach}
              {/if}
          {/if}


          
          {if $object['rollAwayBeds']}
              <span class="accommodation-roomspace_add"><span class="roomspace-txt">{$TXT.mozliwychDostawek}: </span>{$object['rollAwayBeds']}</span>
          {/if}
      </div>
  </div>
{/strip}