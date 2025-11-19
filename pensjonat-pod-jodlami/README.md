# 🏔️ Pensjonat Pod Jodłami - Alpine Serenity Theme

Kompletny system stylizacji dla pensjonatu z motywem Alpine Serenity.

## 📁 Struktura projektu:

```
pensjonat-pod-jodlami/
│
├── 📄 pensjonat-head.html          # HEAD - fonty, Bootstrap, FontAwesome (GLOBALNY)
├── 🎨 pensjonat.css                # CSS - wszystkie sekcje (GLOBALNY - 1723 linii)
├── ⚙️ pensjonat.js                 # JavaScript globalny
├── 📄 pensjonat-sections.html      # Wszystkie sekcje HTML (GLOBALNE)
│
├── wyroznie/                       # MODUŁ - tylko wyróżnione oferty
│   ├── wyroznie-head.html          # HEAD dla modułu
│   ├── css/
│   │   └── wyroznie.css            # Styles tylko wyróżnionych
│   ├── js/
│   │   └── wyroznie.js             # Script tylko wyróżnionych
│   ├── html/
│   │   └── przyklad-implementacji.html
│   └── README.md                   # Dokumentacja modułu
│
├── 📋 INSTRUKCJA-WDROZENIE.md      # Krok po kroku: jak wdrożyć
├── 📋 INSTRUKCJA-OFERTY.md         # Jak działa system wyróżnionych ofert
└── 📖 README.md                    # Ten plik
```

## 🎯 Dwa sposoby użycia:

### 1️⃣ PEŁNY PROJEKT (wszystkie sekcje):

Wdróż **cały pensjonat** ze wszystkimi sekcjami:

1. **HEAD:** Skopiuj `pensjonat-head.html` do `<head>`
2. **CSS:** Skopiuj `pensjonat.css` (1723 linii) do Custom CSS
3. **JS:** Skopiuj `pensjonat.js` do skryptów
4. **HTML:** Użyj `pensjonat-sections.html` jako szablon

**Co zawiera:**
- ✅ Sekcja "O Nas"
- ✅ Wyróżnione Oferty (automatycznie z systemu)
- ✅ Doświadczenia Mazurskie (flip cards)
- ✅ Pakiety i Promocje (flip cards)
- ✅ Charakter Rodzinny (4 kafelki)
- ✅ Alpine Serenity design dla wszystkich sekcji
- ✅ Pełny responsive

---

### 2️⃣ TYLKO MODUŁ WYRÓŻNIONYCH OFERT:

Jeśli chcesz **tylko** sekcję wyróżnionych ofert:

1. Przejdź do folderu `/wyroznie/`
2. Postępuj według instrukcji w `/wyroznie/README.md`

**Co zawiera moduł:**
- ✅ Tylko CSS dla wyróżnionych ofert
- ✅ Tylko JavaScript dla wyróżnionych ofert
- ✅ Tylko HEAD dla modułu
- ✅ Niezależny od reszty projektu

---

## 🎨 Paleta kolorów Alpine Serenity:

```css
--forest-deep: #0D3B2E;    /* Ciemny zielony - główny tekst */
--pine: #3A8B6A;            /* Zielony sosna - akcenty */
--mint-pale: #A8E6C5;       /* Jasny miętowy - tła */
--cream: #F5F1E8;           /* Kremowy - tła */
--terracotta: #C1666B;      /* Terakota - badge'e */
```

## ✨ Funkcje PEŁNEGO PROJEKTU:

✅ **Kompletny design Alpine Serenity** - wszystkie sekcje w jednym stylu
✅ **Sekcja O Nas** - prezentacja pensjonatu z obrazkiem
✅ **Wyróżnione Oferty** - duże karty, badge'e, feature-tags, przyciski
✅ **Flip Cards** - interaktywne karty doświadczeń mazurskich
✅ **Pakiety** - flip cards z promocjami (Weekend, Rodzinny, Romantyczny)
✅ **Charakter Rodzinny** - 4 kafelki z animacjami
✅ **Gradient backgrounds** - każda sekcja ma subtelne tło
✅ **Smooth animations** - hover effects, transitions
✅ **Responsive design** - działa na mobile

## 🔧 Customizacja:

### Zmiana kolorów (GLOBALNIE):
Edytuj `pensjonat.css` linie 13-35 (zmienne CSS w `:root`).

### Zmiana kolorów (TYLKO WYRÓŻNIONE):
Edytuj `wyroznie/css/wyroznie.css` linie 7-26.

### Zmiana treści sekcji:
Edytuj `pensjonat-sections.html` - znajdziesz tam wszystkie sekcje HTML.

### Dodanie nowych pakietów:
W `pensjonat-sections.html` dodaj nowy `.package-card` z flipem.

## 📚 Dokumentacja:

- **INSTRUKCJA-WDROZENIE.md** - Szczegółowa instrukcja wdrożenia PEŁNEGO projektu
- **INSTRUKCJA-OFERTY.md** - Jak działa system wyróżnionych ofert
- **wyroznie/README.md** - Dokumentacja modułu wyróżnionych ofert

## ⚡ Wymagania:

### PEŁNY PROJEKT:
- System z możliwością dodania Custom CSS
- System z możliwością dodania Custom JavaScript
- Bootstrap 5.3+ (ładowane automatycznie)
- FontAwesome 6+ (ładowane automatycznie)
- Fonty Google: Cinzel + Inter (ładowane automatycznie)

### MODUŁ WYRÓŻNIONYCH:
- System z możliwością dodania Custom CSS
- System z możliwością dodania Custom JavaScript
- FontAwesome 6+ (ładowane automatycznie)
- Fonty Google: Cinzel + Inter (ładowane automatycznie)

## 🐛 Rozwiązywanie problemów:

**Problem**: Badge'e się nie pojawiają w wyróżnionych
➡️ Sprawdź konsolę (F12), upewnij się że FontAwesome jest załadowany

**Problem**: Flip cards nie działają
➡️ Upewnij się że Bootstrap JS jest załadowany

**Problem**: Tło nie widać
➡️ Upewnij się że CSS jest załadowany **po** domyślnych stylach systemu

**Problem**: JavaScript nie działa
➡️ Sprawdź czy skrypt jest przed `</body>`, odśwież stronę

## 📦 Wersja:

**v2.0** - Listopad 2024
- Pełna reorganizacja projektu
- Oddzielenie modułu wyróżnionych od pełnego projektu
- 1723 linii CSS dla wszystkich sekcji
- Flip cards dla doświadczeń i pakietów
- Kafelki "Charakter Rodzinny"
- Pełny responsive design

---

**Motyw**: Alpine Serenity
**Dla**: Pensjonat Pod Jodłami
**Autor**: Claude Code
