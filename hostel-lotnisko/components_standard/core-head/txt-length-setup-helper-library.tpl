{include file="./../../static-variables.tpl"}

{strip}

{* w przypadku modyfikacji SPRAWDZIĆ czy nie są potrzebne zmiany w klasie Model_Promotion *}

{function name=getRestrictionLengthText}
    {if $restrictionData}
        {if array_key_exists('stay_length_array', $restrictionData) AND $restrictionData.stay_length_array.stay_type == $FREE}
            {$TXT.DowolnaDlugoscRezerwacji}{". "}
        {else}
            {if array_key_exists('stay_length_array', $restrictionData)}
                {if $restrictionData.stay_length_array.stay_type == $SPECIFIED}
                    {$text = "{call name=getNightAmountTxt count=$restrictionData.stay_length_array.stay_specified}"}
                    {$TXT.WymaganaDlugoscPobytu}{" : "}{$text}{". "}
                {elseif $restrictionData.stay_length_array.stay_type == $TIME_RANGE}
                    {sprintf($TXT.WymaganaDlugoscPobytuOdXDoX, $restrictionData.stay_length_array.stay_max, $restrictionData.stay_length_array.stay_min)}{" "}{$TXT.dob}{". "}
                {elseif $restrictionData.stay_length_array.stay_type == $AT_LEAST}
                    {$text = " {call name=getNightAmountTxt count=$restrictionData.stay_length_array.stay_specified}"}
                    {sprintf($TXT.WymaganaDlugoscPobytuCoNajmniejX, $text)}{". "}
                {/if}
            {/if}
        {/if}
        {if array_key_exists('stay_time_array', $restrictionData)}
            {if $restrictionData.stay_time_array.stringency == $STRINGENCY_STRICT}
                {if $restrictionData.stay_time_array.reservation_week_days_setting == $SPECIFIED_WEEK_DAYS_RANGE}
                    {$to = "{$restrictionData.stay_time_array.date_to} {$restrictionData.stay_time_array.day_start} - {$restrictionData.stay_time_array.day_start}."}
                    {sprintf($TXT.WszystkieDniRezerwacjiMuszaZnajdowacSieWOkresieOdXDoXWDniach, $restrictionData.stay_time_array.date_start, $to)}
                {elseif $restrictionData.stay_time_array.reservation_week_days_setting == $START_FROM_SPECIFIED_WEEK_DAY}
                    {implode subject=$restrictionData.stay_time_array.week_days glue=', ' assign='str_week_days'}
                    {sprintf($TXT.WszystkieDniRezerwacjiMuszaZnajdowacSieWOkresieOdXDoX, $restrictionData.stay_time_array.date_start, $restrictionData.stay_time_array.date_to)}{". "}{$TXT.MozliweDniRozpoczeciaRezerwacji}{": "}{$str_week_days}{"."}
                {else}
                    {sprintf($TXT.WszystkieDniRezerwacjiMuszaZnajdowacSieWOkresieOdXDoX, $restrictionData.stay_time_array.date_start, $restrictionData.stay_time_array.date_to)}
                {/if}
            {else}
                {if $restrictionData.stay_time_array.reservation_week_days_setting == $START_FROM_SPECIFIED_WEEK_DAY}
                    {implode subject=$restrictionData.stay_time_array.week_days glue=', ' assign='str_week_days'}
                    {sprintf($TXT.PrzynajmniejCzescRezerwacjiMusiZnajdowacSieWOkresieOdXDoXWDniach, $restrictionData.stay_time_array.date_start, $restrictionData.stay_time_array.date_to)}
                {elseif $restrictionData.stay_time_array.reservation_week_days_setting == $START_FROM_SPECIFIED_WEEK_DAY}
                    {implode subject=$restrictionData.stay_time_array.week_days glue=', ' assign='str_week_days'}
                    {sprintf($TXT.PrzynajmniejCzescRezerwacjiMusiZnajdowacSieWOkresieOdXDoX, $restrictionData.stay_time_array.date_start, $restrictionData.stay_time_array.date_to)}{". "}{$TXT.MozliweDniRozpoczeciaRezerwacji}{": "}{$str_week_days}{"."}
                {else}
                    {sprintf($TXT.PrzynajmniejCzescRezerwacjiMusiZnajdowacSieWOkresieOdXDoX, $restrictionData.stay_time_array.date_start, $restrictionData.stay_time_array.date_to)}{". "}
                {/if}
            {/if}
        {/if}
    {/if}
{/function}

{* w przypadku modyfikacji SPRAWDZIĆ czy nie są potrzebne zmiany w klasie Model_LengthSetup *}

{function name=getLengthModeText}
    {if $params.length_mode == $LENGTH_MODE_FREE}
        {$TXT.DowolnaDlugoscRezerwacji}
    {elseif $params.length_mode == $LENGTH_MODE_EXACT}
        {if $params.period_kind == $PERIOD_DAY}
            {$text = "{call name=getNightAmountTxt count=$params.period_count}"}
            {sprintf($TXT.WymaganaDlugoscPobytuToX, $text)}
        {elseif $params.period_kind == $PERIOD_WEEK}
            {$text = "{call name=getWeekAmountTxt count=$params.period_count}"}
            {sprintf($TXT.WymaganaDlugoscPobytuToX, $text)}
        {elseif $params.period_kind == $PERIOD_MONTH}
            {$text = "$params.period_count {call name=getMonthAmountTxt count=$params.period_count}"}
            {sprintf($TXT.WymaganaDlugoscPobytuToX, $text)}
        {/if}
    {elseif $params.length_mode == $LENGTH_MODE_MINIMUM}
        {if $params.period_kind == $PERIOD_DAY}
            {$text = "{call name=getNightAmountTxt count=$params.period_count}"}
            {sprintf($TXT.WymaganaMinimalnaDlugoscPobytuToX, $text)}
        {elseif $params.period_kind == $PERIOD_WEEK}
            {$text = "{call name=getWeekAmountTxt count=$params.period_count}"}
            {sprintf($TXT.WymaganaMinimalnaDlugoscPobytuToX, $text)}
        {elseif $params.period_kind == $PERIOD_MONTH}
            {$text = "{call name=getMonthAmountTxt count=$params.period_count}"}
            {sprintf($TXT.WymaganaMinimalnaDlugoscPobytuToX, $text)}
        {/if}
    {elseif $params.length_mode == $LENGTH_MODE_MULTIPLE}
        {if $params.period_kind == $PERIOD_DAY}
            {if $params.period_count == 1}
                {if $data.page.changeLiterals}
                    {$text = "{$params.period_count} {$TXT.doby}"}
                {else}
                    {$text = "{$params.period_count} {$TXT.noc}"}
                {/if}
            {else}
                {if $data.page.lang == 'pol'}
                    {if $data.page.changeLiterals}
                        {$text = "{$params.period_count} {$TXT.dob}"}
                    {else}
                        {$text = "{$params.period_count} {$TXT.nocy}"}
                    {/if}
                {/if}
            {/if}
            {sprintf($TXT.WymaganaDlugoscPobytuToWielokrotnoscX, $text)}
        {elseif $params.period_kind == $PERIOD_WEEK}
            {$text = "{call name=getWeekAmountTxt count=$params.period_count}"}
            {sprintf($TXT.WymaganaDlugoscPobytuToWielokrotnoscX, $text)}
        {elseif $params.period_kind == $PERIOD_MONTH}
            {$text = "{call name=getMonthAmountTxt count=$params.period_count}"}
            {sprintf($TXT.WymaganaDlugoscPobytuToWielokrotnoscX, $text)}
        {/if}
    {/if}
{/function}

{function name=getMonthAmountTxt}
    {$count}
    {if $count == 1}
        {$TXT.miesiac}
    {elseif $count > 1 && $count < 5}
        {$TXT.miesiace}
    {else}
        {$TXT.miesiecy}
    {/if}
{/function}

{function name=getWeekAmountTxt}
    {$count}
    {if $count == 1}
        {$TXT.tydzien}
    {elseif $count > 1 && $count < 5}
        {$TXT.tygodnie}
    {else}
        {$TXT.tygodni}
    {/if}
{/function}

{function name=getDayAmountTxt}
    {$count}
    {if $count == 1}
        {$TXT.doby}
    {else}
        {$TXT.dob}
    {/if}
{/function}

{function name=getNightAmountTxt}
    {$count}
    {if $count <= 1}
        {if  $data.page.changeLiterals}
            {$TXT.doba}
        {else}
            {$TXT.noc}
        {/if}
    {else if $count < 5}
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

{function getStartFromModeText}
    {if $params.start_mode == $STARTING_MODE_FREE}
        {$TXT.DowolnyPoczatekRezerwacji}
    {elseif $params.start_mode == $STARTING_MODE_WEEK}
        {if is_array($params.day) }
            {sprintf($TXT.PoczatekRezerwacjiWymaganyWX, {implode subject=$params.day glue=', ' assign='day'})}
        {else}
            {sprintf($TXT.PoczatekRezerwacjiWymaganyWX, $params.day)}
        {/if}
    {elseif $params.start_mode == $STARTING_MODE_MONTH}
        {sprintf($TXT.PoczatekRezerwacjiWymaganyXDniaMiesiaca, $params.start_month_day)}
    {/if}
{/function}

{function getEndToModeText}
    {if $params.start_mode == $STARTING_MODE_FREE}
        {$TXT.DowolnyKoniecRezerwacji}
    {elseif $params.start_mode == $STARTING_MODE_WEEK}
        {if is_array($params.day) }
            {sprintf($TXT.KoniecRezerwacjiWymaganyWX, {implode subject=$params.day glue=', ' assign='day'})}
        {else}
            {sprintf($TXT.KoniecRezerwacjiWymaganyWX, $params.day)}
        {/if}
    {elseif $params.start_mode == $STARTING_MODE_MONTH}
        {sprintf($TXT.KoniecRezerwacjiWymaganyXDniaMiesiaca, $params.start_month_day)}
    {/if}
{/function}

{/strip}
