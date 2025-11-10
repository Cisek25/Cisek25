{strip}
  
  {if !isset($comments)}
    {assign var=comments value=['avg'=>'4,5', 'all'=> '14' , 'opinions' => [['value' => '3.5' , 'desc' => 'Zatrzymałem się tutaj tylko na odpoczynek na jedną noc. Na pewno doskonała lokalizacja - tuż przy MTP i 10 minut spacerem na dworzec kolejowy. Cicho i spokojnie. Łazienka ok, z wszystkim co potrzeba.', 'name' => 'Świetna lokalizacja', 'author' => 'Joanna, TripAdvisor'] , ['value' => '3.5' , 'desc' => 'Wykorzystaliśmy ten hotel jako bazę do spotkania z rodziną i wzięcia udziału w półmaratonie paryskim. Personel nie mógł być bardziej pomocny od momentu naszego przyjazdu. Odprawa tutaj to system samodzielnego zameldowania / wymeldowania, który był bardzo łatwy w użyciu, ale w razie potrzeby pomoc była pod ręką. Pokoje były nowoczesne i bez skazy, a użycie tabletu kontrolowało telewizor, rolety i wiele różnych nastrojów oświetlenia. Bar / salon / sala śniadaniowa była dobrze obsadzona i bardzo wygodna. Smaczne samoobsługowe śniadanie na ciepło i na zimno serwowane było do 11, mieliśmy jeden wieczorny posiłek podczas naszego pobytu, który był pyszny i dobry stosunek jakości do ceny. Wieczorem drinki serwowane są również w wygodnym barze na 16. piętrze, z którego w nocy można podziwiać widoki na Paryż. ', 'name' => 'Świetna lokalizacja', 'author' => 'Joanna, TripAdvisor'] , ['value' => '3.5' , 'desc' => 'Zatrzymałem się tutaj tylko na odpoczynek na jedną noc. Na pewno doskonała lokalizacja - tuż przy MTP i 10 minut spacerem na dworzec kolejowy. Cicho i spokojnie. Łazienka ok, z wszystkim co potrzeba.', 'name' => 'Świetna lokalizacja', 'author' => 'Joanna, TripAdvisor'] , ['value' => '3.5' , 'desc' => 'Wykorzystaliśmy ten hotel jako bazę do spotkania z rodziną i wzięcia udziału w półmaratonie paryskim. Personel nie mógł być bardziej pomocny od momentu naszego przyjazdu. Odprawa tutaj to system samodzielnego zameldowania / wymeldowania, który był bardzo łatwy w użyciu, ale w razie potrzeby pomoc była pod ręką. Pokoje były nowoczesne i bez skazy, a użycie tabletu kontrolowało telewizor, rolety i wiele różnych nastrojów oświetlenia. Bar / salon / sala śniadaniowa była dobrze obsadzona i bardzo wygodna. Smaczne samoobsługowe śniadanie na ciepło i na zimno serwowane było do 11, mieliśmy jeden wieczorny posiłek podczas naszego pobytu, który był pyszny i dobry stosunek jakości do ceny. Wieczorem drinki serwowane są również w wygodnym barze na 16. piętrze, z którego w nocy można podziwiać widoki na Paryż. Wykorzystaliśmy ten hotel jako bazę do spotkania z rodziną i wzięcia udziału w półmaratonie paryskim. Personel nie mógł być bardziej pomocny od momentu naszego przyjazdu. Wykorzystaliśmy ten hotel jako bazę do spotkania z rodziną i wzięcia udziału w półmaratonie paryskim. Personel nie mógł być bardziej pomocny od momentu naszego przyjazdu. ', 'name' => 'Nic lepszego nie znajdziesz', 'author' => 'Joanna, TripAdvisor'], ['value' => '3.5' , 'desc' => 'Zatrzymałem się tutaj tylko na odpoczynek na jedną noc. Na pewno doskonała lokalizacja - tuż przy MTP i 10 minut spacerem na dworzec kolejowy. Cicho i spokojnie. Łazienka ok, z wszystkim co potrzeba.', 'name' => 'Świetna lokalizacja', 'author' => 'Joanna, TripAdvisor'] , ['value' => '3.5' , 'desc' => 'Zatrzymałem się tutaj tylko na odpoczynek na jedną noc. Na pewno doskonała lokalizacja - tuż przy MTP i 10 minut spacerem na dworzec kolejowy. Cicho i spokojnie. Łazienka ok, z wszystkim co potrzeba.', 'name' => 'Świetna lokalizacja', 'author' => 'Joanna, TripAdvisor'] ,['value' => '3.5' , 'desc' => 'Zatrzymałem się tutaj tylko na odpoczynek na jedną noc. Na pewno doskonała lokalizacja - tuż przy MTP i 10 minut spacerem na dworzec kolejowy. Cicho i spokojnie. Łazienka ok, z wszystkim co potrzeba.', 'name' => 'Świetna lokalizacja', 'author' => 'Joanna, TripAdvisor'] ,['value' => '3.5' , 'desc' => 'Zatrzymałem się tutaj tylko na odpoczynek na jedną noc. Na pewno doskonała lokalizacja - tuż przy MTP i 10 minut spacerem na dworzec kolejowy. Cicho i spokojnie. Łazienka ok, z wszystkim co potrzeba.', 'name' => 'Świetna lokalizacja', 'author' => 'Joanna, TripAdvisor'], ['value' => '3.5' , 'desc' => 'Zatrzymałem się tutaj tylko na odpoczynek na jedną noc. Na pewno doskonała lokalizacja - tuż przy MTP i 10 minut spacerem na dworzec kolejowy. Cicho i spokojnie. Łazienka ok, z wszystkim co potrzeba.', 'name' => 'Świetna lokalizacja', 'author' => 'Joanna, TripAdvisor'], ['value' => '3.5' , 'desc' => 'Zatrzymałem się tutaj tylko na odpoczynek na jedną noc. Na pewno doskonała lokalizacja - tuż przy MTP i 10 minut spacerem na dworzec kolejowy. Cicho i spokojnie. Łazienka ok, z wszystkim co potrzeba.', 'name' => 'Świetna lokalizacja', 'author' => 'Joanna, TripAdvisor'], ['value' => '3.5' , 'desc' => 'Zatrzymałem się tutaj tylko na odpoczynek na jedną noc. Na pewno doskonała lokalizacja - tuż przy MTP i 10 minut spacerem na dworzec kolejowy. Cicho i spokojnie. Łazienka ok, z wszystkim co potrzeba.', 'name' => 'Świetna lokalizacja', 'author' => 'Joanna, TripAdvisor'] ] ]}
  {/if}
  
  <main id="pageContent" class="opinions-list page">
    <div class="container">
      <div class="opinions">
        <div class="opinion --first">
          <div class="opinion__inner">
            <h1 class="opinion__name">{$TXT.OpinieNaszychKlientow}</h1>
            <div class="opinion__avg">
              <strong>{$comments['avg']}</strong>
              <span>5</span>
            </div>
            <div class="opinion__stars">

              {if $comments['avg'] > 0.4 && $comments['avg'] < 1}
                <i class="icon icon-star active half"></i>
              {elseif $comments['avg'] > 0.9}
                <i class="icon icon-star active"></i>
              {else}
                <i class="icon icon-star"></i>
              {/if}

              {if $comments['avg'] > 1.4 && $comments['avg'] < 2}
                <i class="icon icon-star active half"></i>
              {elseif $comments['avg'] > 1.9}
                <i class="icon icon-star active"></i>
              {else}
                <i class="icon icon-star"></i>
              {/if}

              {if $comments['avg'] > 2.4 && $comments['avg'] < 3}
                <i class="icon icon-star active half"></i>
              {elseif $comments['avg'] > 2.9}
                <i class="icon icon-star active"></i>
              {else}
                <i class="icon icon-star"></i>
              {/if}

              {if $comments['avg'] > 3.4 && $comments['avg'] < 4}
                <i class="icon icon-star active half"></i>
              {elseif $comments['avg'] > 3.9}
              <i class="icon icon-star active"></i>
              {else}
                <i class="icon icon-star"></i>
              {/if}

              {if $comments['avg'] > 4.4 && $comments['avg'] < 5}
                <i class="icon icon-star active half"></i>
              {elseif $comments['avg'] > 4.9}
                <i class="icon icon-star active"></i>
              {else}
                <i class="icon icon-star"></i>
              {/if}

            </div>
            <span class="opinion__quantity">
              <span id="opinions_all">{$comments['all']} </span>
              <span {if $language['id']==1}id="opinions_val" {/if}>{$TXT.opinii}</span> {$TXT.naszychKlientow}</span>
          </div>
        </div>
        {foreach from=$comments['opinions'] item=opinion}
          <div class="opinion">
            <div class="opinion__inner">
              <div class="opinion__stars">
              {if $opinion['value'] > 0.4 && $opinion['value'] < 1}
                <i class="icon icon-star active half"></i>
              {elseif $opinion['value'] > 0.9}
                <i class="icon icon-star active"></i>
              {else}
                <i class="icon icon-star"></i>
              {/if}

              {if $opinion['value'] > 1.4 && $opinion['value'] < 2}
                <i class="icon icon-star active half"></i>
              {elseif $opinion['value'] > 1.9}
                <i class="icon icon-star active"></i>
              {else}
                <i class="icon icon-star"></i>
              {/if}

              {if $opinion['value'] > 2.4 && $opinion['value'] < 3}
                <i class="icon icon-star active half"></i>
              {elseif $opinion['value'] > 2.9}
                <i class="icon icon-star active"></i>
              {else}
                <i class="icon icon-star"></i>
              {/if}

              {if $opinion['value'] > 3.4 && $opinion['value'] < 4}
                <i class="icon icon-star active half"></i>
              {elseif $opinion['value'] > 3.9}
              <i class="icon icon-star active"></i>
              {else}
                <i class="icon icon-star"></i>
              {/if}

              {if $opinion['value'] > 4.4 && $opinion['value'] < 5}
                <i class="icon icon-star active half"></i>
              {elseif $opinion['value'] > 4.9}
                <i class="icon icon-star active"></i>
              {else}
                <i class="icon icon-star"></i>
              {/if}
              </div>
              {if isset($opinion['name'])} 
                <h2 class="opinion__name">{$opinion['name']}</h2>
              {/if}
              <p class="opinion__desc">{$opinion['desc']}</p>
              <a href="##" class="opinion__more" title="" data_old="{$TXT.zwin}">{$TXT.czytajWiecej}</a>
              <span class="opinion__author">{$opinion['author']}</span>
            </div>
          </div>
        {/foreach}
      </div>
    </div>
  </main>
{/strip}