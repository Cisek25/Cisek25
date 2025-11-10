{include file="./../../static-variables.tpl"}

{strip}
{* w przypadku modyfikacji SPRAWDZIĆ czy nie są potrzebne zmiany w klasie Emporium_Txt_ObjectType *}

{function name=getObiektLowerCase}
    {if $data.page.mainObjectType == $ROOM}
        {$TXT.pokoj}
    {else if $data.page.mainObjectType == $APARTAMENT}
        {$TXT.apartament}
    {else if $data.page.mainObjectType == $HOUSE}
        {$TXT.dom}
    {else if $data.page.mainObjectType == $FLAT}
        {$TXT.mieszkanie}
    {else if $data.page.mainObjectType == $CAMPING_FIELD}
        {$TXT.poleKempingowe}
    {else if $data.page.mainObjectType == $TENT_FIELD}
        {$TXT.poleNamiotowe}
    {else if $data.page.mainObjectType == $HOLLIDAY_YEARLY_HOUSE}
        {$TXT.domekLetniskowegoCaloroczny}
    {else if $data.page.mainObjectType == $VEHICLE}
        {$TXT.pojazd}
    {else if $data.page.mainObjectType == $NON_DAY_RESERVATION_TYPES}
        {$TXT.nocleg}
    {else if $data.page.mainObjectType == $ATTRACTION}
        {$TXT.atrakcja}
    {else if $data.page.mainObjectType == $TRIP}
        {$TXT.wycieczka}
    {else if $data.page.mainObjectType == $STUFF}
        {$TXT.rzecz}
    {else if $data.page.mainObjectType == $HOLLIDAY_HOUSE}
        {$TXT.domekLetniskowy}
    {else if $data.page.mainObjectType == $VILLA}
        {$TXT.willa}
    {else}
        {$TXT.przedmiotRezerwacji}
    {/if}
{/function}

{function name=getObiektyLowerCase}
    {if $data.page.mainObjectType == $ROOM}
        {$TXT.pokoje}
    {else if $data.page.mainObjectType == $APARTAMENT}
        {$TXT.apartamenty}
    {else if $data.page.mainObjectType == $HOUSE}
        {$TXT.domy}
    {else if $data.page.mainObjectType == $FLAT}
        {$TXT.mieszkania}
    {else if $data.page.mainObjectType == $CAMPING_FIELD}
        {$TXT.polaKempingowe}
    {else if $data.page.mainObjectType == $TENT_FIELD}
        {$TXT.polaNamiotowe}
    {else if $data.page.mainObjectType == $BED}
        {$TXT.lozka}
    {else if $data.page.mainObjectType == $HOLLIDAY_YEARLY_HOUSE}
        {$TXT.domkiLetniskoweCaloroczne}
    {else if $data.page.mainObjectType == $VEHICLE}
        {$TXT.pojazdy}
    {else if $data.page.mainObjectType == $NON_DAY_RESERVATION_TYPES}
        {$TXT.noclegi}
    {else if $data.page.mainObjectType == $ATTRACTION}
        {$TXT.atrakcje}
    {else if $data.page.mainObjectType == $TRIP}
        {$TXT.wycieczki}
    {else if $data.page.mainObjectType == $STUFF}
        {$TXT.rzeczy}
    {else if $data.page.mainObjectType == $HOLLIDAY_HOUSE}
        {$TXT.domkiLetniskowe}
    {else if $data.page.mainObjectType == $VILLA}
        {$TXT.wille}
    {else}
        {$TXT.przedmiotyRezerwacji}
    {/if}
{/function}

{function name=getObiekty}
    {if $data.page.mainObjectType == $ROOM}
        {$TXT.Pokoje}
    {else if $data.page.mainObjectType == $APARTAMENT}
        {$TXT.Apartamenty}
    {else if $data.page.mainObjectType == $HOUSE}
        {$TXT.Domy}
    {else if $data.page.mainObjectType == $FLAT}
        {$TXT.Mieszkania}
    {else if $data.page.mainObjectType == $CAMPING_FIELD}
        {$TXT.PolaKempingowe}
    {else if $data.page.mainObjectType == $TENT_FIELD}
        {$TXT.PolaNamiotowe}
    {else if $data.page.mainObjectType == $BED}
        {$TXT.Lozka}
    {else if $data.page.mainObjectType == $HOLLIDAY_YEARLY_HOUSE}
        {$TXT.DomkiLetniskoweCaloroczne}
    {else if $data.page.mainObjectType == $VEHICLE}
        {$TXT.Pojazdy}
    {else if $data.page.mainObjectType == $NON_DAY_RESERVATION_TYPES}
        {$TXT.Noclegi}
    {else if $data.page.mainObjectType == $ATTRACTION}
        {$TXT.Atrakcje}
    {else if $data.page.mainObjectType == $TRIP}
        {$TXT.Wycieczki}
    {else if $data.page.mainObjectType == $STUFF}
        {$TXT.Rzeczy}
    {else if $data.page.mainObjectType == $HOLLIDAY_HOUSE}
        {$TXT.DomkiLetniskowe}
    {else if $data.page.mainObjectType == $VILLA}
        {$TXT.Wille}
    {else}
        {$TXT.PrzedmiotyRezerwacji}
    {/if}
{/function}

{function name=getObiektowLowerCase}
    {if $data.page.mainObjectType == $ROOM}
        {$TXT.pokoi}
    {else if $data.page.mainObjectType == $APARTAMENT}
        {$TXT.apartamentow}
    {else if $data.page.mainObjectType == $HOUSE}
        {$TXT.domow}
    {else if $data.page.mainObjectType == $FLAT}
        {$TXT.mieszkan}
    {else if $data.page.mainObjectType == $CAMPING_FIELD}
        {$TXT.polKempingowych}
    {else if $data.page.mainObjectType == $TENT_FIELD}
        {$TXT.polNamiotowych}
    {else if $data.page.mainObjectType == $BED}
        {$TXT.lozek}
    {else if $data.page.mainObjectType == $HOLLIDAY_YEARLY_HOUSE}
        {$TXT.domkowLetniskowychCalorocznych}
    {else if $data.page.mainObjectType == $VEHICLE}
        {$TXT.pojazdow}
    {else if $data.page.mainObjectType == $NON_DAY_RESERVATION_TYPES}
        {$TXT.noclegow}
    {else if $data.page.mainObjectType == $ATTRACTION}
        {$TXT.atrakcji}
    {else if $data.page.mainObjectType == $TRIP}
        {$TXT.wycieczek}
    {else if $data.page.mainObjectType == $STUFF}
        {$TXT.rzeczy}
    {else if $data.page.mainObjectType == $HOLLIDAY_HOUSE}
        {$TXT.domkowLetniskowych}
    {else if $data.page.mainObjectType == $VILLA}
        {$TXT.williLM}
    {else}
        {$TXT.przedmiotowRezerwacji}
    {/if}
{/function}

{function name=printNightLiteral}
    {if $number <= 1}
        {if $data.page.changeLiterals}
            {$TXT.doba}
        {else}
            {$TXT.noc}
        {/if}
    {else if $number < 5}
        {if $data.page.changeLiterals}
            {$TXT.doby}
        {else}
            {$TXT.noce}
        {/if}
    {else}
        {if $data.page.changeLiterals}
            {$TXT.dob}
        {else}
            {$TXT.nocy}
        {/if}
    {/if}
{/function}

{function getOsoby}
    {if $data.page.defaultReservationObjectsType == $VEHICLE}{else}{$TXT.Osoby}{/if}
{/function}

{function name=getReceptionInfo}
    {$accomodationObject = {$receptionInfoArray.atractionType || !$receptionInfoArray.accommodationActivity}}
    {if $printLabel}
        {if $accomodationObject}
            {$TXT.GodzinyOdbioru}{": "}
        {else}
            {$TXT.GodzinyOdbioruKluczy}{": "}
        {/if}
    {/if}
    {if $receptionInfoArray.receptionOpenMode == $RECEPTION_24H}
        {$TXT.CalaDobe}
    {elseif $receptionInfoArray.receptionOpenMode == $RECEPTION_24H_AFTER_PHONE}
        {if $accomodationObject}
            {$TXT.IstniejeMozliwoscOdbioruPrzezCalaDobePoWczesniejszymKontakcieTelefonicznym}
        {else}
            {$TXT.IstniejeMozliwoscOdbioruKluczyPrzezCalaDobePoWczesniejszymKontakcieTelefonicznym}
        {/if}
    {elseif $receptionInfoArray.receptionOpenMode == $RECEPTION_LIMITED}
        {$receptionInfoArray.receptionOpenHour} - {$receptionInfoArray.receptionCloseHour}
    {elseif $receptionInfoArray.receptionOpenMode == $RECEPTION_LIMITED_AFTER_PHONE}
        {if $accomodationObject}
            {sprintf($TXT.IstniejeMozliwoscOdbioruWGodzinachOdXDoXPoWczesniejszymKontakcieTelefonicznym, $receptionInfoArray.receptionOpenHour, $receptionInfoArray.receptionCloseHour)}
        {else}
            {sprintf($TXT.IstniejeMozliwoscOdbioruKluczyWGodzinachOdXDoXPoWczesniejszymKontakcieTelefonicznym, $receptionInfoArray.receptionOpenHour, $receptionInfoArray.receptionCloseHour)}
        {/if}
    {/if}
{/function}

{function name=getAmenities}
    {$count = 0}
    {foreach $amenities as $amenity}
        {$TXT.{$amenity}}
        {$count = $count+1}
        {if $count != $amenities|@count}{', '}{/if}
    {/foreach}
{/function}


{function name=getTXTosoby}
    {if $number == 1}
        {$TXT.osoba}
    {elseif ($number % 10) == 2 || ($number % 10) == 3 || ($number % 10) == 4}
        {$TXT.osoby}
    {else}
        {$TXT.osob}
    {/if}
{/function}

{function name=getTXTsypialnie}
    {if $number == 1}
        {$TXT.sypialnia}
    {elseif ($number % 10) == 2 || ($number % 10) == 3 || ($number % 10) == 4}
        {$TXT.sypialnie}
    {else}
        {$TXT.sypialni}
    {/if}
{/function}


{/strip}
