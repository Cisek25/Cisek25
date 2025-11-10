# 🏨 Urban Wings Hostel - Dynamiczny Szablon Smarty

## 📦 Co zawiera ten folder?

Ten folder zawiera **kompletny, dynamiczny szablon hostelu** zintegrowany z **idoBooking/idoCMS** przez **Smarty**.

```
hostel-smarty/
├── hostel-dynamic.tpl              # Główny szablon Smarty
├── hostel-styles.css               # Style CSS dla hostelu
├── booking-engine-hostel.css       # Style dla booking engine
├── INSTRUKCJA.md                   # Szczegółowa instrukcja instalacji
├── README.md                       # Ten plik
└── SMARTY-VARIABLES-EXAMPLE.md     # Przykładowe zmienne Smarty
```

---

## ⚡ Quickstart (5 minut)

1. **Upload plików** do swojego theme:
   ```
   /themes/twoj-theme/hostel-dynamic.tpl
   /themes/twoj-theme/css/hostel-styles.css
   /themes/twoj-theme/css/booking-engine-hostel.css
   ```

2. **Dodaj pokoje** w panelu idoBooking:
   - Przedmioty rezerwacji → Dodaj nowy
   - Uzupełnij nazwę, opis, cenę
   - Upload zdjęć
   - Zaznacz "Widoczne na stronie"

3. **Aktywuj szablon** w CMS:
   - Ustawienia → Wygląd → Szablon: `hostel-dynamic.tpl`

4. **Gotowe!** Strona automatycznie wyświetli pokoje z systemu! 🎉

---

## 🔥 Kluczowe Funkcje

### Automatyzacja 100%

| Feature | Statyczne HTML | Smarty (ten szablon) |
|---------|---------------|---------------------|
| Dodaj pokój | ❌ Edycja HTML | ✅ Klik w panelu |
| Zmień cenę | ❌ Edycja kodu | ✅ Zmień w panelu |
| Upload zdjęć | ❌ FTP/kod | ✅ Upload w panelu |
| Wielojęzyczność | ❌ Osobne pliki | ✅ Automatycznie |
| Dostępność | ❌ Ręcznie | ✅ Z booking engine |

### Dynamiczne Sekcje

✅ **Pokoje** - pobierane z `$objects`
✅ **Ceny** - aktualne z `$object.priceMinInFormat`
✅ **Zdjęcia** - z `$object.objectPicture`
✅ **Udogodnienia** - z `$object.amenitiesInObject`
✅ **Kontakt** - z `$ownerData`
✅ **Mapa** - współrzędne z `$ownerData.geolocation_*`
✅ **Języki** - automatycznie z `$language`

---

## 📋 Zmienne Smarty które używamy

### Z systemu idoBooking:

```smarty
$objects                          # Lista pokoi
$ownerData                        # Dane obiektu (nazwa, adres, telefon)
$currentCurrency                  # Aktualna waluta
$language                         # Aktualny język
$commonGallery                    # Wspólna galeria
$promotions                       # Promocje
$comments                         # Opinie gości
```

### Dla każdego pokoju (`$room`):

```smarty
{$room.id}                        # ID pokoju
{$room.name}                      # Nazwa
{$room.descriptions}              # Opisy w językach
{$room.capacity}                  # Ilość osób
{$room.priceMinInFormat}          # Cena od...
{$room.objectPicture}             # Galeria zdjęć
{$room.amenitiesInObject}         # Udogodnienia
```

---

## 🎨 Dostosowywanie

### Zmiana kolorów

Edytuj `hostel-styles.css`:

```css
:root {
  --orange-primary: #3B82F6;  /* Zmień na swój kolor */
  --teal-primary: #8B5CF6;    /* Zmień na swój kolor */
  --yellow-accent: #F59E0B;   /* Zmień na swój kolor */
}
```

### Dodanie nowych sekcji

Możesz dodać do `hostel-dynamic.tpl`:

**Opinie:**
```smarty
{foreach from=$comments['opinions'] item=opinion}
    <div class="review">
        <p>{$opinion.desc}</p>
        <span>- {$opinion.author}</span>
    </div>
{/foreach}
```

**Promocje:**
```smarty
{foreach from=$promotions item=promo}
    <div class="promo">
        <h3>{$promo.name}</h3>
        <p>Od: {$promo.priceMinInFormat}</p>
    </div>
{/foreach}
```

---

## 🔗 Integracja z Booking Engine

Przycisk "Rezerwuj" automatycznie przekierowuje do booking engine z wybranym pokojem:

```smarty
<a href="{$button_link}?object_id={$room.id}">Rezerwuj</a>
```

**Korzyści:**
- Klient nie musi szukać pokoju ponownie
- Automatyczne zaznaczenie pokoju
- Natychmiastowa widoczność dostępności
- Szybsza konwersja!

---

## 📱 Responsywność

Szablon działa na **wszystkich urządzeniach**:

- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Large screens (1440px+)

**Breakpointy w CSS:**
```css
@media (max-width: 480px)  { /* Małe telefony */ }
@media (max-width: 768px)  { /* Telefony */ }
@media (max-width: 1024px) { /* Tablety */ }
```

---

## 🐛 Debugging

### Jak sprawdzić co zwraca system?

Dodaj do szablonu:

```smarty
{* Pokaż wszystkie pokoje *}
<pre>{$objects|@print_r}</pre>

{* Pokaż dane obiektu *}
<pre>{$ownerData|@print_r}</pre>

{* Ile pokoi system widzi? *}
Liczba pokoi: {$objects|@count}
```

**PAMIĘTAJ:** Usuń debug przed publikacją!

---

## 📂 Stare pliki (backup)

Oryginalne statyczne pliki zachowane w:
```
/hostel-lotnisko/
├── html/complete-hostel.html  # Statyczna wersja HTML
├── css/hostel-styles.css      # Ten sam CSS
└── css/booking-engine-hostel.css
```

Możesz wrócić do wersji statycznej w każdej chwili!

---

## 🆚 Porównanie: Statyczne vs Smarty

### Statyczne HTML (hostel-lotnisko/)

**Zalety:**
- ✅ Działa bez systemu CMS
- ✅ Można otworzyć w przeglądarce lokalnie

**Wady:**
- ❌ Każda zmiana = edycja kodu
- ❌ Brak automatyzacji
- ❌ Trudne wielojęzyczność
- ❌ Ręczne aktualizacje cen

### Smarty (hostel-smarty/)

**Zalety:**
- ✅ Automatyczne pobieranie danych
- ✅ Zmiana w panelu = zmiana na stronie
- ✅ Wielojęzyczność z automatu
- ✅ Integracja z booking engine
- ✅ Aktualne ceny zawsze
- ✅ Łatwiejsze zarządzanie

**Wady:**
- ❌ Wymaga systemu idoCMS/idoBooking
- ❌ Nie można testować lokalnie (potrzebny serwer)

---

## ✅ Checklist przed wdrożeniem

- [ ] Upload wszystkich plików do theme
- [ ] Dodane pokoje w panelu (min. 3-5)
- [ ] Zdjęcia pokoi (min. 3 na pokój)
- [ ] Uzupełnione opisy pokoi
- [ ] Ustawione ceny dla wszystkich pokoi
- [ ] Dane obiektu (telefon, email, adres)
- [ ] Współrzędne GPS dla mapy
- [ ] Logo obiektu
- [ ] Aktywowany szablon w CMS
- [ ] Testowane rezerwacje
- [ ] Sprawdzona responsywność
- [ ] Usunięte debugi

---

## 🎓 Dokumentacja

- **INSTRUKCJA.md** - szczegółowa instrukcja krok po kroku
- **SMARTY-VARIABLES-EXAMPLE.md** - wszystkie dostępne zmienne
- **idoBooking docs** - [https://idobooking.com/dokumentacja](https://idobooking.com/dokumentacja)

---

## 🚀 Co dalej?

### Możliwe rozszerzenia:

1. **Sekcja opinii** - używając `$comments`
2. **Aktualności** - używając `$newsArray`
3. **Promocje** - używając `$promotions`
4. **Zestawy** - używając `$specialOffers`
5. **Blog** - custom content sections
6. **FAQ** - z panelu CMS
7. **Galeria** - używając `$commonGallery`

### Więcej języków?

Szablon już obsługuje wielojęzyczność! Dodaj tłumaczenia w panelu:
- Przedmioty rezerwacji → Edytuj → Opisy w językach
- System automatycznie wyświetli właściwy język

---

## 📞 Potrzebujesz pomocy?

1. Sprawdź `INSTRUKCJA.md` - szczegółowy przewodnik
2. Użyj `{debug}` w szablonie
3. Sprawdź logi w panelu CMS
4. Dokumentacja idoBooking
5. Support idoBooking

---

**Stworzono:** 2025-11-10
**Wersja:** 1.0
**System:** idoBooking/idoCMS + Smarty
**Kompatybilność:** idoBooking 3.0+

**Powodzenia z Twoim hostelem! 🎉**
