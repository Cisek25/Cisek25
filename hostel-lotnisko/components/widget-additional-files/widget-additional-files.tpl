{* ~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~= WIDGET  ~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~= *}
<script>
    var currency = "{$currentCurrency['symbol']}";
    var TXT = {
        CenaOd:"{$TXT.CenaOd}",
        CenaNaTelefon:"{$TXT.CenaNaTelefon}",
        CenaZaOsobe: "{$TXT.CenaZaOsobe}",
        CenaZaPobyt: "{$TXT.CenaZaPobyt}",
        Wyczysc: "{$TXT.Wyczysc}",
        Zastosuj: "{$TXT.Zastosuj}",
        os: "{$TXT.os}",
        pobyt: "{$TXT.pobyt}",
        WWybranymOkresieSaNiedostepneDaty: "{$TXT.WWybranymOkresieSaNiedostepneDaty}",
        WTymDniuMoznaTylkoRozpoczacRezerwacje: "{$TXT.WTymDniuNieMoznaZakonczycRezerwacji}",
        WTymDniuMoznaTylkoZakonczycRezerwacje: "{$TXT.WTymDniuNieMoznaRozpoczacRezerwacji}",
        Cofnij: "{$TXT.Cofnij}",
        IloscOsobDoZakwaterowania: "{$TXT.IloscOsobDoZakwaterowania}",
        DataPoczatkuRezerwacji: "{$TXT.DataPoczatkuRezerwacji}",
        DataKoncaRezerwacji: "{$TXT.DataKoncaRezerwacji}",
    };
    document.addEventListener("DOMContentLoaded",function bookingStart(event){
         iai_booking_search({
            "mode":"frontpage",
            "clientId":"{$clientId}",
            "showPersons":"1",
            {if isset($objectsAndOffersWithPriority)}"showPrice":"1",{/if}
            "showRooms":false,
            "showLocation":"1",
            "locationUrl":"/locations.js",
            "mainColor":"{$mainColor}",
            "label1":"{$TXT.Poczatek}",
            "label2":"{$TXT.Koniec}",
            "label3":"{call name=getOsoby}",
            "label4":"{call name=getObiekty}",
            "label5":"{$TXT.Lokalizacja}",
            "label7":"{$TXT.Cena}",
            "button":"{$TXT.SprawdzDostepnosc}",
            "months":["{$TXT.Styczen}","{$TXT.Luty}","{$TXT.Marzec}","{$TXT.Kwiecien}","{$TXT.Maj}","{$TXT.Czerwiec}","{$TXT.Lipiec}","{$TXT.Sierpien}","{$TXT.Wrzesien}","{$TXT.Pazdziernik}","{$TXT.Listopad}","{$TXT.Grudzien}"],
            "days":["{$TXT.SkrotDniaTygNd}","{$TXT.SkrotDniaTygPon}","{$TXT.SkrotDniaTygWt}","{$TXT.SkrotDniaTygSr}","{$TXT.SkrotDniaTygCzw}","{$TXT.SkrotDniaTygPt}","{$TXT.SkrotDniaTygSob}"],
            "trigger":"{$TXT.RezerwacjaOnline}",
            "lang":{$browserLang}
        });
    });
</script>
<script src="/widget/script/loadScriptsForFrontpage/lang/{$language['code2']}/action/{$action}{if isset($id)}/id/{$id}{/if}"></script>
<script src="{$path}/dist/widget-temp.js"></script>
{call name=inccomp file="widget-datapicker" s=false}