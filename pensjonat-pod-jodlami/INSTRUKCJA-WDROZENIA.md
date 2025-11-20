# 🏔️ INSTRUKCJA WDROŻENIA PENSJONATU POD JODŁAMI

## 📦 Co masz gotowe:

✅ `pensjonat-sections.html` - Wszystkie sekcje HTML
✅ `WDROZENIE-KOMPLETNE.html` - JavaScript do kart 3D
✅ `pensjonat.css` - Style CSS
✅ `pensjonat-head.html` - Tagi HEAD (fonty, ikony)

---

## 🚀 WDROŻENIE KROK PO KROKU

### ✅ KROK 1: Dodaj HEAD (czcionki i ikony)

1. Zaloguj się do **panelu IdoBooking**
2. Przejdź do **Ustawienia → Strona główna → Sekcja HEAD**
3. Otwórz plik `pensjonat-head.html`
4. **Skopiuj CAŁY kod** z tego pliku
5. **Wklej** do sekcji HEAD w IdoBooking
6. **Zapisz**

---

### ✅ KROK 2: Dodaj CSS (style)

1. W panelu IdoBooking przejdź do **Ustawienia → Custom CSS** (lub Własne Style)
2. Otwórz plik `pensjonat.css`
3. **Skopiuj CAŁY kod CSS** (2166 linii)
4. **Wklej** do pola Custom CSS
5. **Zapisz**

---

### ✅ KROK 3: Dodaj JavaScript (karty 3D)

1. W panelu IdoBooking znajdź sekcję **Custom JavaScript** lub **Skrypty strony**
   - Może być w: **Ustawienia → Zaawansowane → JavaScript**
   - Lub: **Strona główna → Skrypty przed </body>**
2. Otwórz plik `WDROZENIE-KOMPLETNE.html`
3. **Skopiuj TYLKO kod wewnątrz znaczników `<script>...</script>`** (linie 14-281)
4. **Wklej** do pola Custom JavaScript
5. **Zapisz**

---

### ✅ KROK 4: Dodaj sekcje HTML (NAJWAŻNIEJSZE!)

To jest **kluczowy krok** - dodanie wszystkich sekcji na stronę.

#### OPCJA A: Jeśli masz edytor WYSIWYG (wizualny)

1. W panelu IdoBooking przejdź do **Treść strony głównej**
2. Znajdź przycisk **"Źródło"** lub **"<>"** (przełączenie na tryb HTML)
3. Otwórz plik `pensjonat-sections.html`
4. **Skopiuj CAŁY kod** z tego pliku (linie 3-340, BEZ tagów `<body>`)
5. **Wklej** w odpowiednim miejscu:
   - **NA SAMEJ GÓRZE** (przed wyróżnionymi ofertami) - sekcja "Witaj Pod Jodłami"
   - **PO wyróżnionych ofertach** - pozostałe sekcje
6. **Zapisz** i **Opublikuj**

#### OPCJA B: Jeśli masz pole "Custom HTML"

1. Znajdź sekcję **"Custom HTML"** lub **"Dodatkowa treść"**
2. Otwórz plik `pensjonat-sections.html`
3. **Skopiuj CAŁY kod**
4. **Wklej** do pola Custom HTML
5. **Zapisz**

---

### ✅ KROK 5: Sprawdź wyróżnione oferty (pokoje)

1. W panelu IdoBooking przejdź do **Wyróżnione oferty**
2. Upewnij się, że masz **co najmniej 3 pokoje** oznaczone jako wyróżnione
3. JavaScript automatycznie zamieni je na **karty 3D Alpine Serenity**

---

## 🔍 WERYFIKACJA - Co powinno być widoczne?

Po wdrożeniu otwórz stronę i sprawdź, czy widzisz:

1. ✅ **Sekcja "Witaj Pod Jodłami"** - tekst i zdjęcie obok siebie
2. ✅ **Nasze Pokoje** - karty 3D z pokojami (klikalne, obracające się)
3. ✅ **Odkryj Mazury** - 4 duże karty z atrakcjami (klikalne)
4. ✅ **Pakiety Wypoczynkowe** - 3 karty z pakietami (klikalne)
5. ✅ **Nasza Galeria** - 6 zdjęć w siatce

---

## ❌ ROZWIĄZYWANIE PROBLEMÓW

### Problem: "Sekcje nie są widoczne"
**Rozwiązanie:**
- Sprawdź, czy wkleiłeś HTML w **trybie kodu** (nie wizualnym)
- Upewnij się, że skopiowałeś **cały kod** z pliku
- Sprawdź, czy IdoBooking nie "wyczyścił" kodu (niektóre systemy usuwają inline styles)

### Problem: "Karty pokoi nie są 3D"
**Rozwiązanie:**
- Sprawdź, czy JavaScript jest załadowany (Konsola przeglądarki → F12)
- Upewnij się, że masz **wyróżnione oferty** w panelu
- Poczekaj 3-5 sekund - JavaScript ładuje się z opóźnieniem (600ms)

### Problem: "Czcionki nie działają"
**Rozwiązanie:**
- Sprawdź, czy dodałeś kod z `pensjonat-head.html` do sekcji HEAD
- Oczyść cache przeglądarki (Ctrl+Shift+Delete)

### Problem: "Karty flip nie obracają się"
**Rozwiązanie:**
- Sprawdź, czy dodałeś CSS z `pensjonat.css`
- Sprawdź, czy CSS nie jest nadpisywany przez system IdoBooking

---

## 📧 JEŚLI NADAL NIE DZIAŁA

Prześlij mi:
1. **Link do strony** lub **zrzut ekranu** pokazujący aktualny stan
2. **Zrzut ekranu z panelu IdoBooking** pokazujący, gdzie wkleiłeś kod
3. **Zrzut ekranu z Konsoli przeglądarki** (F12 → Zakładka "Console")

Dokładnie zdiagnozuję problem i pomogę!

---

## 📂 PLIKI DO WDROŻENIA

| Plik | Gdzie wkleić | Co zawiera |
|------|--------------|------------|
| `pensjonat-head.html` | HEAD strony | Czcionki Cinzel i Inter, FontAwesome |
| `pensjonat.css` | Custom CSS | Wszystkie style Alpine Serenity |
| `WDROZENIE-KOMPLETNE.html` (tylko `<script>`) | Custom JavaScript | Karty 3D i animacje |
| `pensjonat-sections.html` | Treść strony / Custom HTML | Wszystkie sekcje (O nas, Mazury, Pakiety, Galeria) |

---

**Powodzenia! 🚀**

Jeśli coś jest niejasne, napisz - pomogę!
