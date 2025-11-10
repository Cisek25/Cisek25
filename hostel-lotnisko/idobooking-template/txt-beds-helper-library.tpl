{include file="./static-variables.tpl"}

{strip}
{* w przypadku modyfikacj SPRAWDZIĆ czy nie są potrzebne zmiany w klasie Model_Object_Capacity_Beds *}

{function name=getBedsLabel}
    {$count = 0}
    {foreach $beds as $bed}
        {$bedType = $bed@key}
        {$amount = $bed}
        {if $amount > 0}
            {call name=getBedLabel}

            {$count = $count+1}
            {if $count != $beds|@count}, {/if}
        {/if}
    {/foreach}
{/function}

{function name=getBedLabel}
    {$bedTypeUcfirst = $bedType|capitalize}
    {if $bedType == $SOFA_BED || $bedType == $SINGLE_SOFA || $bedType == $BUNK_BED || $bedType == $FUTON || $bedType == $MURPHY_BED}
        {$functionName = "getTXT"|cat:$bedTypeUcfirst}
        {$amount} {call name=$functionName number=$amount}
    {elseif $bedType == $DOUBLE_TWIN}
        {$functionName = "getTXTExtra"|cat:$bedTypeUcfirst}
        {call name=$functionName number=$amount}
    {elseif $bedType == $TWIN}
        {$amount = {$amount * 2}}
        {$functionName = "getTXT"|cat:$bedTypeUcfirst}
        {$amount} {call name=$functionName number=$amount}
    {else}
        {$functionName = "getTXT"|cat:$bedTypeUcfirst}
        {$amount} {call name=$functionName number=$amount}

    {/if}
{/function}

{function name=getTXTLozko}
    {if $number == 1}
        {$TXT.lozko}
    {elseif ($number % 10) == 2 || ($number % 10) == 3 || ($number % 10) == 4} {* ciekawa logika do sprawdzenia dla 12 egz pokaze 12 lozka ? *}
        {$TXT.lozka}
    {else}
        {$TXT.lozek}
    {/if}
{/function}

{function name=getTXTSingle}
     {if $number == 1}
        {$TXT.lozkoPojedynczeSingle}
    {elseif ($number % 10) == 2 || ($number % 10) == 3 || ($number % 10) == 4}
        {$TXT.lozkaPojedynczeSingle}
    {else}
        {$TXT.lozekPojedynczychSingle}
    {/if}
{/function}

{function name=getTXTDouble}
    {if $number == 1}
        {$TXT.lozkoPodwojneDouble}
    {elseif ($number % 10) == 2 || ($number % 10) == 3 || ($number % 10) == 4}
        {$TXT.lozkaPodwojneDouble}
    {else}
        {$TXT.lozekPodwojnychDouble}
    {/if}
{/function}

{function name=getTXTDoubleTwin}
    {$TXT.podwojneDoublePojedynczeTwinDoDecyzjiGoscia}
{/function}

{function name=getTXTExtraDoubleTwin}
    {if $number == 1}
        {sprintf($TXT.XLozkoPodwojneDoubleLubXLozkaPojedynczeTwinDoDecyzjiGoscia, $number , {$number * 2})}
    {elseif $number == 2}
        {sprintf($TXT.XLozkaPodwojneDoubleLubXLozkaPojedynczeTwinDoDecyzjiGoscia, $number, {$number * 2})}
    {elseif $number < 5}
        {sprintf($TXT.XLozkaPodwojneDoubleLubXLozekPojedynczychTwinDoDecyzjiGoscia, $number, {$number * 2})}
    {else}
        {sprintf($TXT.XLozekPodwojnychDoubleLubXLozekPojedynczychTwinDoDecyzjiGoscia, $number, {$number * 2})}
    {/if}
{/function}

{function name=getTXTTwin}
     {if $number == 1}
        {$TXT.lozkoPojedynczeTwin}
    {elseif ($number % 10) == 2 || ($number % 10) == 3 || ($number % 10) == 4}
        {$TXT.lozkaPojedynczeTwin}
    {else}
        {$TXT.lozekPojedynczychTwin}
    {/if}
{/function}

{function name=getTXTQueen}
    {if $number == 1}
        {$TXT.lozkoDuzePodwojneQueen}
    {elseif ($number % 10) == 2 || ($number % 10) == 3 || ($number % 10) == 4}
        {$TXT.lozkaDuzePodwojneQueen}
    {else}
        {$TXT.lozekDuzePodwojneQueen}
    {/if}
{/function}

{function name=getTXTKing}
    {if $number == 1}
    {$TXT.lozkoBardzoDuzePodwojneKing}
    {elseif ($number % 10) == 2 || ($number % 10) == 3 || ($number % 10) == 4}
        {$TXT.lozkaBardzoDuzePodwojneKing}
    {else}
        {$TXT.lozekBardzoDuzychPodwojnychKing}
    {/if}

{/function}

{function name=getTXTFuton}
    {if $number < 2}
        {$TXT.materacFuton}
    {elseif $number < 5}
        {$TXT.materaceFuton}
    {else}
        {$TXT.materacyFuton}
    {/if}
{/function}

{function name=getTXTMurphyBed}
    {if $number < 2}
        {$TXT.lozkoSkladanePionowoMurphyBed}
    {elseif $number < 5}
        {$TXT.lozkaSkladanePionowoMurphyBed}
    {else}
        {$TXT.lozekSkladanychPionowoMurphyBed}
    {/if}
{/function}

{function name=getTXTSofaBed}
    {if $number < 2}
        {$TXT.sofaRozkladanaSofaBed}
    {elseif $number < 5}
        {$TXT.sofyRozkladaneSofaBed}
    {else}
        {$TXT.sofRozkladanychSofaBed}
    {/if}
{/function}

{function name=getTXTSingleSofa}
    {if $number < 2}
        {$TXT.sofaJednoosobowaSofaBed}
    {elseif $number < 5}
        {$TXT.sofyJednoosoboweSofaBed}
    {else}
        {$TXT.sofJednoosobowychSofaBed}
    {/if}
{/function}

{function name=getTXTBunkBed}
    {if $number < 2}
        {$TXT.lozkoPietroweBunkBed}
    {elseif $number < 5}
        {$TXT.lozkaPietroweBunkBed}
    {else}
        {$TXT.lozekPietrowychBunkBed}
    {/if}
{/function}

{function name=getTXTRollAwayBeds}
    {if $number == 1}
        {$TXT.mozliwaDostawka}
    {elseif $number < 5}
        {$TXT.mozliweDostawki}
    {else}
        {$TXT.mozliwychDostawek}
    {/if}
{/function}

{append var='BEDS_INCONS' value='&#xe836;' index=$SINGLE scope='global'}
{append var='BEDS_INCONS' value='&#xe83a;' index=$FUTON scope='global'}
{append var='BEDS_INCONS' value='&#xe836;' index=$MURPHY_BED scope='global'}
{append var='BEDS_INCONS' value='&#xe839;' index=$QUEEN scope='global'}
{append var='BEDS_INCONS' value='&#xe837;' index=$DOUBLE scope='global'}
{append var='BEDS_INCONS' value='&#xe839;' index=$KING scope='global'}
{append var='BEDS_INCONS' value='&#xe83b;' index=$SOFA_BED scope='global'}
{append var='BEDS_INCONS' value='&#xe836;' index=$SINGLE_SOFA scope='global'}
{append var='BEDS_INCONS' value='&#xe839;' index=$TWIN scope='global'}
{append var='BEDS_INCONS' value='&#xe836;' index=$ROLL_AWAY_BED scope='global'}
{append var='BEDS_INCONS' value='&#xe87f;' index=$BUNK_BED scope='global'}
{append var='BEDS_INCONS' value='&#xe839;' index=$DOUBLE_TWIN scope='global'}

{/strip}
