{strip}
    <script>
        tabs = {};
        tabs.custom_1 = "{$TXT.KalendarzDostepnosci}";
        tabs.custom_2 = "{$TXT.WlasciwosciPokoju}";
        tabs.custom_3 = "{$TXT.ZasadyIOplaty}";
        tabs.custom_4 = "{$TXT.OpcjeDodatkowe}";
        tabs.custom_5 = "{$TXT.DlaRezerwujacych}" || 'Dla rezerwujących';
        tabs.custom_6 = "{$TXT.Cennik}";
    
        var PrzejdzDo = "{$TXT.PrzejdzDo}";
    </script>
    
    <div class="tabs {if $showSectionConfiguration['display_availability_calendar_on_offer_page'] != 1}--hideCalendar{/if}"></div>
    
{/strip}