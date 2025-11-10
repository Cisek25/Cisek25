# PRZYKŁADOWE ZMIENNE SMARTY - idoBooking/idoCMS

## Proszę dodaj tu SWOJE rzeczywiste zmienne!

Ten plik zawiera **przykładowe** zmienne które zazwyczaj są dostępne w systemach booking.
**ZAMIEŃ JE** na swoje rzeczywiste zmienne ze swojego systemu!

---

## TYPOWE ZMIENNE - OBIEKTY/POKOJE

```smarty
{* Lista wszystkich obiektów/pokoi *}
{$objects}
{$accommodations}
{$rooms}

{* Iteracja po pokojach *}
{foreach from=$objects item=room}
    {$room.id}                    {* ID pokoju *}
    {$room.name}                  {* Nazwa pokoju *}
    {$room.name_lang}             {* Nazwa w aktualnym języku *}
    {$room.description}           {* Opis pokoju *}
    {$room.description_short}     {* Krótki opis *}
    {$room.price}                 {* Cena bazowa *}
    {$room.price_from}            {* Cena od... *}
    {$room.currency}              {* Waluta *}
    {$room.max_persons}           {* Max osób *}
    {$room.beds}                  {* Liczba łóżek *}
    {$room.size}                  {* Powierzchnia *}
    {$room.image}                 {* Główne zdjęcie *}
    {$room.images}                {* Galeria zdjęć *}
    {$room.amenities}             {* Udogodnienia *}
    {$room.available}             {* Czy dostępny *}
    {$room.url}                   {* Link do pokoju *}
    {$room.booking_url}           {* Link do rezerwacji *}
{/foreach}

{* Pojedynczy obiekt *}
{$object.id}
{$object.name}
{$object.description}
{$object.price}
```

---

## TYPOWE ZMIENNE - GALERIA ZDJĘĆ

```smarty
{* Galeria zdjęć obiektu *}
{foreach from=$room.images item=image}
    {$image.url}                  {* URL zdjęcia *}
    {$image.url_thumb}            {* Miniaturka *}
    {$image.url_large}            {* Duże zdjęcie *}
    {$image.alt}                  {* Alt text *}
    {$image.title}                {* Tytuł *}
{/foreach}

{* Główne zdjęcie *}
{$object.main_image}
{$object.image_url}
```

---

## TYPOWE ZMIENNE - UDOGODNIENIA

```smarty
{* Lista udogodnień *}
{$amenities}
{$facilities}

{foreach from=$object.amenities item=amenity}
    {$amenity.id}
    {$amenity.name}
    {$amenity.icon}
    {$amenity.category}
{/foreach}
```

---

## TYPOWE ZMIENNE - LOKALIZACJA

```smarty
{$location.address}               {* Adres *}
{$location.city}                  {* Miasto *}
{$location.zip}                   {* Kod pocztowy *}
{$location.country}               {* Kraj *}
{$location.latitude}              {* Szerokość geo *}
{$location.longitude}             {* Długość geo *}
{$location.map_url}               {* URL mapy *}
```

---

## TYPOWE ZMIENNE - KONTAKT

```smarty
{$contact.phone}                  {* Telefon *}
{$contact.email}                  {* Email *}
{$contact.website}                {* Strona www *}
{$contact.facebook}               {* Facebook *}
{$contact.instagram}              {* Instagram *}
```

---

## TYPOWE ZMIENNE - CENY & PROMOCJE

```smarty
{$pricing.base_price}
{$pricing.discount}
{$pricing.promo_price}
{$pricing.season}                 {* Sezon *}
{$pricing.min_stay}               {* Min. pobyt *}
```

---

## TYPOWE ZMIENNE - BOOKING ENGINE

```smarty
{$booking_engine_url}             {* URL silnika rezerwacji *}
{$check_availability_url}         {* Sprawdź dostępność *}
{$book_now_url}                   {* Rezerwuj teraz *}
```

---

## TYPOWE ZMIENNE - JĘZYK & WALUTA

```smarty
{$current_language}               {* Aktualny język *}
{$current_currency}               {* Aktualna waluta *}
{$available_languages}            {* Dostępne języki *}
```

---

## TYPOWE ZMIENNE - GLOBALNE

```smarty
{$site_name}                      {* Nazwa obiektu *}
{$site_url}                       {* URL strony *}
{$logo_url}                       {* Logo *}
{$theme_path}                     {* Ścieżka do theme *}
```

---

## JAK SPRAWDZIĆ SWOJE ZMIENNE?

W systemie idoCMS/idoBooking możesz sprawdzić dostępne zmienne przez:

1. **Debug mode** - dodaj do szablonu:
```smarty
{debug}
```

2. **Wyświetl wszystkie zmienne**:
```smarty
<pre>
{$smarty|@print_r}
</pre>
```

3. **Sprawdź konkretną zmienną**:
```smarty
{$objects|@print_r}
```

---

## CO TERAZ?

**PROSZĘ DODAJ PLIK** z Twoimi rzeczywistymi zmiennymi Smarty!

Nazwij go np: `SMARTY-VARIABLES.md` lub `smarty-vars.txt`

Gdy go dodasz, stworzę **pełny dynamiczny szablon hostelu** który będzie:
- Automatycznie pobierał pokoje z systemu
- Wyświetlał aktualne ceny
- Pokazywał dostępność
- Łączył się z booking engine
- Był w pełni responsywny
