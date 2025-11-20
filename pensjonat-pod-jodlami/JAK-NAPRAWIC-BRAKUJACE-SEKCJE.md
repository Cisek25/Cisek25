# 🔧 JAK NAPRAWIĆ BRAKUJĄCE SEKCJE

## 🚨 Problem

Widzisz tylko sekcję "NASZE POKOJE" (wyróżnione oferty), ale **nie widać** pozostałych sekcji:
- ❌ Sekcja "O NAS" (Witaj Pod Jodłami)
- ❌ Sekcja "ODKRYJ MAZURY" (4 flip cards)
- ❌ Sekcja "PAKIETY WYPOCZYNKOWE" (3 flip cards)
- ❌ Sekcja "NASZA GALERIA" (6 zdjęć)

## ✅ Rozwiązanie

Sekcje nie są widoczne, ponieważ **HTML nie został dodany** do systemu IdoBooking.

System IdoBooking automatycznie generuje tylko sekcję "Wyróżnione Oferty" (którą JavaScript zamienia na "Nasze Pokoje"), ale **reszta sekcji musi być dodana ręcznie**.

---

## 📋 INSTRUKCJA KROK PO KROKU

### Krok 1: Znajdź plik z sekcjami

Otwórz plik: **`SEKCJE-DO-WKLEJENIA.html`**

Ten plik zawiera kompletny HTML wszystkich sekcji:
- ✅ Sekcja "O NAS"
- ✅ Sekcja "ODKRYJ MAZURY"
- ✅ Sekcja "PAKIETY WYPOCZYNKOWE"
- ✅ Sekcja "NASZA GALERIA"
- ✅ Style CSS dla flip cards i galerii

---

### Krok 2: Skopiuj cały kod

1. Otwórz plik `SEKCJE-DO-WKLEJENIA.html`
2. Zaznacz **CAŁY** kod (Ctrl+A lub Cmd+A)
3. Skopiuj (Ctrl+C lub Cmd+C)

---

### Krok 3: Zaloguj się do panelu IdoBooking

1. Otwórz panel administracyjny IdoBooking
2. Zaloguj się swoimi danymi

---

### Krok 4: Znajdź edytor treści strony głównej

W panelu IdoBooking znajdź jedno z tych miejsc:

**Opcja A: Ustawienia strony głównej**
- Przejdź do `Ustawienia` → `Strona główna` → `Treść strony`

**Opcja B: Edytor WYSIWYG**
- Przejdź do `Strona główna` → `Edytuj treść`

**Opcja C: Custom HTML**
- Przejdź do `Ustawienia zaawansowane` → `Custom HTML` → `Treść główna`

**Opcja D: Sekcje strony**
- Przejdź do `Strona główna` → `Sekcje` → `Dodaj sekcję HTML`

---

### Krok 5: Przełącz na tryb kodu HTML

W edytorze znajdź przycisk do przełączenia na **tryb kodu HTML**:
- Może być oznaczony jako: `<>`, `HTML`, `Źródło`, `Source`, `Kod HTML`
- Zazwyczaj znajduje się w górnym pasku narzędzi edytora

**WAŻNE:** Jeśli widzisz edytor WYSIWYG (jak Word), **musisz** przełączyć się na tryb kodu HTML!

---

### Krok 6: Wklej kod

1. W trybie kodu HTML kliknij w miejsce, gdzie chcesz dodać sekcje
   - **Najlepiej:** Wklej na samym początku (sekcja "O NAS" powinna być pierwsza)
   - System automatycznie doda sekcję "NASZE POKOJE" między "O NAS" a "ODKRYJ MAZURY"

2. Wklej skopiowany kod (Ctrl+V lub Cmd+V)

3. Sprawdź, czy kod został wklejony poprawnie

---

### Krok 7: Zapisz zmiany

1. Kliknij przycisk **"Zapisz"** lub **"Opublikuj"**
2. Odczekaj chwilę na przetworzenie zmian

---

### Krok 8: Odśwież stronę

1. Otwórz stronę główną w przeglądarce
2. **Wyczyść cache przeglądarki:**
   - Windows/Linux: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`
3. Lub otwórz w trybie incognito (Ctrl+Shift+N / Cmd+Shift+N)

---

## ✅ Efekt końcowy

Po poprawnym wklejeniu powinny być widoczne **wszystkie sekcje** w następującej kolejności:

1. **Witaj Pod Jodłami** (O NAS) - białe tło
2. **Nasze Pokoje** (wyróżnione oferty) - karty 3D Alpine Serenity
3. **Odkryj Mazury** (4 flip cards) - białe tło
4. **Pakiety Wypoczynkowe** (3 flip cards) - kremowe tło z gradientem
5. **Nasza Galeria** (6 zdjęć) - białe tło

---

## 🎨 Jak to wygląda

### Sekcja "O NAS"
- Nagłówek: "Witaj Pod Jodłami"
- Tekst po lewej, zdjęcie po prawej
- Przycisk "Poznaj Nasze Pokoje"

### Sekcja "ODKRYJ MAZURY"
- 4 karty: Żeglarstwo, Leśne Szlaki, Wodne Przygody, Lokalne Atrakcje
- **Kliknij na kartę** → odwraca się i pokazuje szczegóły

### Sekcja "PAKIETY WYPOCZYNKOWE"
- 3 karty: Weekend Dla Dwojga, Rodzinna Przygoda, Mazurski Relaks
- **Kliknij na kartę** → odwraca się i pokazuje zdjęcie

### Sekcja "NASZA GALERIA"
- 6 zdjęć w siatce 3x2
- **Najedź myszką** → zoom + overlay z nazwą

---

## ⚠️ Rozwiązywanie problemów

### Problem 1: Nie widzę sekcji po wklejeniu
**Rozwiązanie:**
- Wyczyść cache przeglądarki (Ctrl+Shift+R)
- Otwórz w trybie incognito
- Sprawdź, czy kod został wklejony w trybie HTML (nie w WYSIWYG)
- Sprawdź konsolę przeglądarki (F12) czy nie ma błędów

### Problem 2: Sekcje wyglądają źle (brak stylów)
**Rozwiązanie:**
- Upewnij się, że masz wklejony plik `pensjonat.css` w panelu Custom CSS
- Sprawdź, czy plik `pensjonat-head.html` jest w sekcji HEAD
- Sekcje mają inline styles, więc powinny działać nawet bez CSS

### Problem 3: Flip cards nie odwracają się
**Rozwiązanie:**
- Upewnij się, że plik `pensjonat.js` jest wklejony przed `</body>`
- Sprawdź konsolę (F12) czy nie ma błędów JavaScript
- Flip cards mają inline onclick, więc powinny działać

### Problem 4: Galeria nie pokazuje efektu hover
**Rozwiązanie:**
- Upewnij się, że style CSS z sekcji `<style>` są wklejone
- Możesz skopiować style z końca pliku `SEKCJE-DO-WKLEJENIA.html` do `pensjonat.css`

### Problem 5: Nie mogę znaleźć edytora w IdoBooking
**Rozwiązanie:**
- Skontaktuj się z supportem IdoBooking
- Zapytaj o "Gdzie mogę dodać custom HTML na stronie głównej?"
- Może być pod różnymi nazwami: "Treść strony", "Custom HTML", "Sekcje", "Edytor WYSIWYG"

---

## 📞 Potrzebujesz pomocy?

Jeśli nadal masz problemy:

1. **Sprawdź konsolę przeglądarki:**
   - Naciśnij F12
   - Przejdź do zakładki "Console"
   - Skopiuj błędy (jeśli są) i wyślij do developera

2. **Zrób screenshot:**
   - Pokaż, jak wygląda strona
   - Pokaż panel IdoBooking, gdzie próbujesz wkleić kod

3. **Sprawdź, co masz wklejone:**
   - HEAD: `pensjonat-head.html`
   - CSS: `pensjonat.css`
   - JavaScript: `pensjonat.js` (przed `</body>`)
   - HTML: `SEKCJE-DO-WKLEJENIA.html` (w treści strony)

---

## 📝 Podsumowanie

**Krótko:**
1. Otwórz `SEKCJE-DO-WKLEJENIA.html`
2. Skopiuj cały kod
3. Zaloguj się do IdoBooking
4. Znajdź edytor treści strony głównej
5. Przełącz na tryb HTML
6. Wklej kod
7. Zapisz
8. Odśwież stronę (Ctrl+Shift+R)

**Gotowe!** Wszystkie sekcje powinny być widoczne.

---

## 🎯 Dodatkowe informacje

- Sekcje mają **inline styles**, więc będą działać nawet bez `pensjonat.css`
- Flip cards mają **inline onclick**, więc będą działać nawet bez `pensjonat.js`
- Ale **zalecamy** mieć wszystkie pliki wklejone dla pełnej funkcjonalności
- Kolejność sekcji: O NAS → **[System wstawi NASZE POKOJE]** → ODKRYJ MAZURY → PAKIETY → GALERIA

---

✅ **To wszystko!** Po wykonaniu tych kroków sekcje będą widoczne na stronie.
