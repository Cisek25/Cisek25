# 🚀 INSTRUKCJA - Hostel ze Smarty (idoBooking)

## Co to daje?

**PRZED (statyczne HTML):**
- Ręcznie wpisujesz każdy pokój w HTML
- Zmiana ceny = edycja HTML
- Brak automatycznej synchronizacji

**PO (dynamiczne Smarty):**
- ✅ Dodajesz pokój w panelu = automatycznie pojawia się na stronie
- ✅ Zmieniasz cenę = automatycznie aktualizuje się
- ✅ Upload zdjęć w panelu = automatycznie wyświetlają się
- ✅ Wielojęzyczność z jednego miejsca
- ✅ Integracja z booking engine

---

## 📁 Pliki w tym folderze

```
hostel-smarty/
├── hostel-dynamic.tpl          # Główny szablon Smarty
├── INSTRUKCJA.md               # Ten plik
└── SMARTY-VARIABLES-EXAMPLE.md # Przykładowe zmienne
```

**Potrzebujesz też:**
- `hostel-styles.css` (z folderu hostel-lotnisko/css/)
- `booking-engine-hostel.css` (z folderu hostel-lotnisko/css/)

---

## 🔧 INSTALACJA

### Krok 1: Przygotuj pliki CSS

Skopiuj pliki CSS do swojego theme:

```
/themes/twoj-theme/css/hostel-styles.css
/themes/twoj-theme/css/booking-engine-hostel.css
```

### Krok 2: Upload szablonu Smarty

Skopiuj `hostel-dynamic.tpl` do:

```
/themes/twoj-theme/hostel-dynamic.tpl
```

### Krok 3: Dodaj pokoje w panelu idoBooking

1. Zaloguj się do panelu idoBooking
2. Przejdź do: **Przedmioty rezerwacji** → **Dodaj nowy**
3. Uzupełnij dane pokoju:
   - Nazwa (np. "Dormitorium 8-osobowe")
   - Opis krótki
   - Opis długi
   - Maksymalna liczba osób
   - Cena
4. Dodaj zdjęcia w zakładce **Galeria**
5. Dodaj udogodnienia w zakładce **Udogodnienia**
6. Ustaw **Widoczny na stronie** = TAK

### Krok 4: Aktywuj szablon

W panelu CMS ustaw szablon dla strony głównej:
```
Ustawienia → Wygląd → Szablon główny: hostel-dynamic.tpl
```

### Krok 5: Ustaw dane obiektu

W panelu CMS uzupełnij:
- **Nazwa obiektu**
- **Adres** (ulica, kod, miasto)
- **Telefon** i **Email**
- **Współrzędne GPS** (dla mapy)
- **Logo obiektu**

---

## 🎨 KONFIGURACJA KOLORÓW

### Gdzie zmienić kolory?

Edytuj plik `hostel-styles.css` w sekcji **ZMIENNE GLOBALNE**:

```css
:root {
  /* Zmień te kolory na swoje! */
  --orange-primary: #3B82F6;  /* Niebieski główny */
  --teal-primary: #8B5CF6;    /* Fioletowy */
  --yellow-accent: #F59E0B;   /* Żółty akcent */
}
```

**Przykładowe palety:**

**Czerwono-szara (hostel industrialny):**
```css
--orange-primary: #E63946;
--teal-primary: #457B9D;
--yellow-accent: #F1FAEE;
```

**Zielono-pomarańczowa (eco hostel):**
```css
--orange-primary: #FF6B35;
--teal-primary: #06A77D;
--yellow-accent: #FFC857;
```

---

## 📋 JAK TO DZIAŁA?

### 1. Pokoje są ładowane automatycznie

```smarty
{foreach from=$objects item=room}
    <div class="room-card">
        <h3>{$room.descriptions[$language.id]['name']}</h3>
        <p>Cena: {$room.priceMinInFormat}</p>
        <img src="{$room.objectPicture[0]['url']}">
    </div>
{/foreach}
```

**Co się stanie:**
- System pobierze WSZYSTKIE pokoje z panelu
- Wyświetli nazwę w aktualnym języku
- Pokaże aktualną cenę
- Wstawi pierwsze zdjęcie z galerii

### 2. Dane kontaktowe z panelu

```smarty
<p>Telefon: {$ownerData.object_phone}</p>
<p>Email: {$ownerData.object_email}</p>
<p>Adres: {$ownerData.object_street}</p>
```

**Zmiana w panelu = zmiana na stronie!**

### 3. Mapa z rzeczywistymi współrzędnymi

```smarty
<iframe src="https://maps.google.com/...{$ownerData.geolocation_lat}...{$ownerData.geolocation_lng}">
</iframe>
```

---

## ⚡ DOSTOSOWYWANIE

### Dodaj więcej sekcji

Możesz dodać nowe sekcje używając zmiennych Smarty:

**Opinie gości:**
```smarty
{if $comments}
<section class="reviews-section">
    <h2>Opinie gości</h2>
    <p>Średnia ocena: {$comments['avg']}/5</p>

    {foreach from=$comments['opinions'] item=opinion}
        <div class="review">
            <h4>{$opinion.name}</h4>
            <p>{$opinion.desc}</p>
            <span>Autor: {$opinion.author}</span>
        </div>
    {/foreach}
</section>
{/if}
```

**Aktualności:**
```smarty
{foreach from=$newsArray item=news}
    <article>
        <h3>{$news.title}</h3>
        <p>{$news.content}</p>
        <span>{$news.createDate}</span>
    </article>
{/foreach}
```

**Promocje:**
```smarty
{foreach from=$promotions item=promo}
    <div class="promo-card">
        <h3>{$promo.name}</h3>
        <p>{$promo.short_description}</p>
        <p>Cena od: {$promo.priceMinInFormat}</p>
    </div>
{/foreach}
```

---

## 🐛 DEBUGGING - Jak sprawdzić zmienne?

Jeśli coś nie działa, dodaj do szablonu:

```smarty
{* Pokaż WSZYSTKIE dostępne zmienne *}
<pre>
{$smarty|@print_r}
</pre>

{* Pokaż tylko pokoje *}
<pre>
{$objects|@print_r}
</pre>

{* Pokaż dane obiektu *}
<pre>
{$ownerData|@print_r}
</pre>
```

**Usuń to przed publikacją!**

---

## 📱 RESPONSYWNOŚĆ

Szablon jest w 100% responsywny:
- ✅ Mobile first design
- ✅ Breakpointy: 480px, 768px, 1024px
- ✅ Touch-friendly na urządzeniach mobilnych

---

## 🔗 INTEGRACJA Z BOOKING ENGINE

### Przycisk "Rezerwuj" prowadzi do:

```smarty
<a href="{$button_link}?object_id={$room.id}">Rezerwuj</a>
```

**Co się stanie:**
- Klient kliknie "Rezerwuj" przy konkretnym pokoju
- Przekierowanie do booking engine
- **Automatycznie wybrany pokój** (dzięki `?object_id={$room.id}`)
- Klient od razu widzi dostępność tego pokoju

---

## ✅ CHECKLIST PRZED PUBLIKACJĄ

- [ ] Dodane wszystkie pokoje w panelu
- [ ] Upload zdjęć pokoi (min. 3 na pokój)
- [ ] Uzupełnione opisy pokoi
- [ ] Ustawione ceny
- [ ] Dodane udogodnienia
- [ ] Uzupełnione dane obiektu (telefon, email, adres)
- [ ] Ustawione współrzędne GPS
- [ ] Upload logo obiektu
- [ ] Testowane rezerwacje
- [ ] Sprawdzona responsywność (mobile)
- [ ] Usunięte `{debug}` i `{print_r}` z szablonu

---

## 🆘 NAJCZĘSTSZE PROBLEMY

### Nie widzę pokoi na stronie

**Sprawdź:**
1. Czy pokoje mają zaznaczone "Widoczne na stronie" w panelu?
2. Czy pokoje są aktywne?
3. Dodaj debug: `{$objects|@count}` - ile pokoi system widzi?

### Nie wyświetlają się zdjęcia

**Sprawdź:**
1. Czy zdjęcia są dodane w panelu?
2. Debug: `{$room.objectPicture|@print_r}` - co zwraca?
3. Sprawdź uprawnienia do plików

### Nie działa mapa

**Sprawdź:**
1. Czy ustawione współrzędne GPS w panelu?
2. Czy masz klucz API Google Maps?

### Ceny się nie wyświetlają

**Sprawdź:**
1. Czy ustawione ceny w panelu?
2. Czy ustawiony sezon z cenami?
3. Debug: `{$room.priceMinInFormat|@print_r}`

---

## 🎓 DALSZE KROKI

### Co możesz dodać?

1. **Multi-język** - szablon już obsługuje `{$language.code2}`
2. **Sekcja opinii** - użyj `{$comments}`
3. **Galerię** - użyj `{$commonGallery}`
4. **Aktualności** - użyj `{$newsArray}`
5. **Zestawy/Pakiety** - użyj `{$specialOffers}`

---

## 📞 WSPARCIE

Jeśli masz problemy:
1. Sprawdź dokumentację idoBooking
2. Dodaj `{debug}` do szablonu
3. Sprawdź logi w panelu CMS
4. Skontaktuj się z supportem idoBooking

---

**Powodzenia! 🚀**
