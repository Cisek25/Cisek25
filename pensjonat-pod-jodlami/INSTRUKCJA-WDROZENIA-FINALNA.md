# 🚀 INSTRUKCJA WDROŻENIA - Pensjonat Pod Jodłami

## 📋 STRUKTURA IDOBOOKING

Twój system IdoBooking ma następujące miejsca do edycji:
- **HEAD** - sekcja `<head>` strony
- **BODY** - początek `<body>`
- **KONIEC SEKCJI BODY** - przed zamknięciem `</body>` ← tutaj wklejamy `<script>`
- **CMS strony** - treść poszczególnych stron/podstron
- **GLOBALNY ARKUSZ CSS** - style dla całej strony

---

## ⚡ WDROŻENIE KROK PO KROKU

### KROK 1: HEAD (Google Fonts)
**Gdzie**: Panel IdoBooking → Ustawienia → **HEAD**

**Co wkleić**: Otwórz plik `pensjonat-head.html` i wklej CAŁY kod

```html
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@300;400;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

---

### KROK 2: GLOBALNY ARKUSZ CSS
**Gdzie**: Panel IdoBooking → Ustawienia → **GLOBALNY ARKUSZ CSS**

**Co wkleić**: Otwórz plik `pensjonat.css` i wklej CAŁY kod (2166 linii)

⚠️ **WAŻNE**: NIE DODAWAJ tagów `<style>` - wklej tylko czysty CSS!

---

### KROK 3: HTML SEKCJI (CMS STRONY GŁÓWNEJ)
**Gdzie**: Panel IdoBooking → Strona główna → **CMS / Edytor treści**

**Co wkleić**: Otwórz plik `SEKCJE-DO-WKLEJENIA.html`

**UWAGA**: Plik zawiera tag `<style>` na końcu - możesz go **USUNĄĆ**, jeśli już wkleiłeś CSS w KROKU 2.

📝 **Struktura HTML**:
1. Sekcja "O NAS" (Witaj Pod Jodłami)
2. [Tu system automatycznie wstawi "NASZE POKOJE"]
3. Sekcja "ODKRYJ MAZURY" (4 karty flip)
4. Sekcja "PAKIETY WYPOCZYNKOWE" (3 karty flip)
5. Sekcja "GALERIA" (6 zdjęć)

---

### KROK 4: JAVASCRIPT (KONIEC SEKCJI BODY)
**Gdzie**: Panel IdoBooking → Ustawienia → **KONIEC SEKCJI BODY**

**Co wkleić**: Otwórz plik `WDROZENIE-KOMPLETNE.html` i skopiuj **TYLKO TAG `<script>`**

Powinno to wyglądać tak:
```html
<script>
// PENSJONAT POD JODŁAMI - GLOBALNY SKRYPT
...cały kod JavaScript...
</script>
```

⚠️ **WAŻNE**:
- Wklej w sekcji **"KONIEC SEKCJI BODY"** (NIE w CMS strony!)
- To musi być tag `<script>` (nie sam JavaScript)

---

## ✅ CHECKLIST WDROŻENIA

- [ ] **KROK 1**: Google Fonts w HEAD
- [ ] **KROK 2**: `pensjonat.css` w GLOBALNY ARKUSZ CSS
- [ ] **KROK 3**: HTML sekcji w CMS strony głównej
- [ ] **KROK 4**: JavaScript w KONIEC SEKCJI BODY
- [ ] **TEST**: Odśwież stronę (Ctrl+F5) i sprawdź czy sekcje są widoczne
- [ ] **TEST**: Kliknij kartę "Odkryj Mazury" - powinna się obrócić
- [ ] **TEST**: Kliknij kartę "Pakiety" - powinna się obrócić
- [ ] **TEST**: Najed na zdjęcie w galerii - powinien pojawić się overlay

---

## 🛠️ ROZWIĄZYWANIE PROBLEMÓW

### Problem 1: Sekcje nie są widoczne
**Możliwe przyczyny**:
- Kod wklejony w złe miejsce (sprawdź czy w CMS strony, nie w opisie slidera)
- Konflikt z FullPage.js (sprawdź czy slider nie ma `overflow: hidden`)

**Rozwiązanie**:
1. Otwórz stronę w przeglądarce
2. Naciśnij F12 → zakładka "Elements"
3. Szukaj `<section class="section section-white"`
4. Sprawdź czy sekcja NIE jest wewnątrz diva slidera
5. Jeśli jest - przenieś kod POZA slider (np. dodaj na początku kodu `</div></div></div>`)

### Problem 2: Karty flip nie działają
**Przyczyna**: Brak JavaScript

**Rozwiązanie**:
- Sprawdź czy w "KONIEC SEKCJI BODY" masz tag `<script>` z KROKU 4
- Otwórz konsolę przeglądarki (F12) i sprawdź błędy

### Problem 3: Czcionki się nie wczytują
**Przyczyna**: Brak Google Fonts w HEAD

**Rozwiązanie**:
- Sprawdź czy w HEAD masz kod z KROKU 1
- Odśwież stronę (Ctrl+F5)

### Problem 4: Style nie działają
**Przyczyna**: CSS nie został wklejony lub jest w złym miejscu

**Rozwiązanie**:
- Sprawdź czy w GLOBALNY ARKUSZ CSS masz kod z KROKU 2
- Upewnij się, że NIE wkleiłeś tagów `<style>` - tylko czysty CSS

---

## 📁 PLIKI W REPOZYTORIUM

| Plik | Gdzie wkleić | Opis |
|------|--------------|------|
| `pensjonat-head.html` | HEAD | Google Fonts + Font Awesome |
| `pensjonat.css` | GLOBALNY ARKUSZ CSS | Style (2166 linii) |
| `SEKCJE-DO-WKLEJENIA.html` | CMS strony głównej | HTML sekcji |
| `WDROZENIE-KOMPLETNE.html` | KONIEC SEKCJI BODY | JavaScript (tylko tag `<script>`) |
| `INSTRUKCJA-WDROZENIA-FINALNA.md` | - | Ta instrukcja |

---

## 🎨 PERSONALIZACJA

### Zmiana kolorów
Otwórz `pensjonat.css` i zmień:
```css
/* Główny kolor zielony */
--color-primary: #3A8B6A;

/* Kolor akcentu */
--color-accent: #0D3B2E;

/* Tło kremowe */
--color-cream: #F5F1E8;
```

### Zmiana zdjęć
W `SEKCJE-DO-WKLEJENIA.html` zamień linki Unsplash na własne zdjęcia.

### Dodanie/usunięcie sekcji
Edytuj `SEKCJE-DO-WKLEJENIA.html` i dodaj/usuń bloki `<section>`.

---

## 📞 POMOC

Jeśli masz problemy z wdrożeniem:
1. Sprawdź konsolę przeglądarki (F12)
2. Sprawdź czy wszystkie 4 KROKI zostały wykonane
3. Dodaj issue na GitHubie

**Powodzenia!** 🚀
