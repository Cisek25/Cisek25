{strip}
{* w przypadku modyfikacji SPRAWDZIĆ czy nie są potrzebne zmiany w klasie Model_Object_PresentationSettings *}
{function getPresentationPartText}
    {if $presentationPart.value == 'show_beds_info'}
        {call name=getBedsLabel beds=$presentationPart.beds}
    {elseif isset($presentationPart.params)}
        {if $presentationPart.value == 'show_length_mode_info'}
            {call name=getLengthModeText params=$presentationPart.params}
        {elseif $presentationPart.value == 'show_start_from_mode_info'}
            {call name=getStartFromModeText params=$presentationPart.params}
        {elseif $presentationPart.value == 'show_advance_info' OR $presentationPart.value == 'advance'}
            {if $presentationPart.params.count == 1}
                {if $presentationPart.params.show_advance}
                    {$TXT.Przedplata} {$presentationPart.params.advance}%
                {else}
                    {$TXT.InformacjaOWymaganejKwociePrzedplaty}
                {/if}
            {elseif $presentationPart.params.count == 0}
            {else}
                {if $presentationPart.params.show_advance}
                    {$TXT.Przedplata} {$TXT.od} {$presentationPart.params.advance}%
                {else}
                    {$TXT.InformacjaOWymaganejKwociePrzedplaty}
                {/if}
            {/if}
        {/if}
    {else}
        {$presentationPart.text}
    {/if}
{/function}
{/strip}