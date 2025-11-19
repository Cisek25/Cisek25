# 🏔️ Pensjonat Pod Jodłami - Alpine Serenity Theme

Kompletny system stylizacji sekcji wyróżnionych ofert dla pensjonatu.

## 📁 Struktura projektu:

```
pensjonat-pod-jodlami/
│
├── 📄 pensjonat-head.html                 # Fonty i FontAwesome (wklej w <head>)
├── 🎨 pensjonat-wyroznie-css.css          # CSS dla wyróżnionych ofert (Alpine Serenity)
├── ⚙️ pensjonat-wyroznie-script.js        # JavaScript wzbogacający oferty
│
├── 📋 INSTRUKCJA-WDROZENIE.md             # Krok po kroku: jak wdrożyć
├── 📋 INSTRUKCJA-OFERTY.md                # Jak działa system wyróżnionych ofert
├── 📄 PRZYKLAD-IMPLEMENTACJI.html         # Przykład gotowej implementacji
└── 📖 README.md                           # Ten plik
```

## 🚀 Szybki start:

### 1. Dodaj fonty (HEAD)
Skopiuj zawartość `pensjonat-head.html` do sekcji `<head>` w systemie.

### 2. Dodaj CSS
Skopiuj zawartość `pensjonat-wyroznie-css.css` do panelu **Custom CSS** w systemie.

### 3. Dodaj JavaScript
Skopiuj zawartość `pensjonat-wyroznie-script.js` i wklej przed `</body>` w systemie.

### 4. Wyróżnij pokoje
W panelu admina zaznacz pokoje jako **wyróżnione**. System automatycznie wygeneruje sekcję.

## ✨ Funkcje:

✅ **Tło Alpine Serenity** - Gradient miętowy + kremowy z subtelnym pattern
✅ **Duże karty** - 350px wysokość obrazka, minimalna wysokość 600px
✅ **Automatyczne badge'e** - Popular, Family, Premium, Wyróżniony, Nowość, Romantic
✅ **Feature-tags** - Automatycznie dodawane na podstawie nazwy pokoju
✅ **Przycisk "Rezerwuj Teraz"** - Gradient zielony z animacją shine
✅ **Hover effects** - Zoom obrazka (scale 1.1) + podniesienie karty (-10px)
✅ **Responsive** - Działa na mobile
✅ **Zmiana tytułu** - Automatycznie zmienia "Wyróżnione Oferty" na "Nasze Pokoje"
✅ **Kompatybilne ze slick slider** - Działa z systemowym sliderem

## 🎨 Paleta kolorów Alpine Serenity:

```css
--forest-deep: #0D3B2E;    /* Ciemny zielony - główny tekst */
--pine: #3A8B6A;            /* Zielony sosna - akcenty */
--mint-pale: #A8E6C5;       /* Jasny miętowy - tła */
--cream: #F5F1E8;           /* Kremowy - tła */
--terracotta: #C1666B;      /* Terakota - badge'e */
```

## 🔧 Customizacja:

### Zmiana badge'y:
Edytuj `pensjonat-wyroznie-script.js` linię 51:
```javascript
const badges = ['Popular', 'Family', 'Premium', 'Wyróżniony', 'Nowość', 'Romantic'];
```

### Dodanie nowych feature-tags:
Edytuj `pensjonat-wyroznie-script.js` linie 9-45:
```javascript
const roomFeatures = {
    'moja-nazwa': [
        { icon: 'fa-star', text: 'Mój Feature' },
        ...
    ]
}
```

### Zmiana kolorów:
Edytuj `pensjonat-wyroznie-css.css` linie 8-22 (zmienne CSS).

## 📚 Dokumentacja:

- **INSTRUKCJA-WDROZENIE.md** - Szczegółowa instrukcja wdrożenia
- **INSTRUKCJA-OFERTY.md** - Jak działa system wyróżnionych ofert
- **PRZYKLAD-IMPLEMENTACJI.html** - Gotowy przykład do testowania

## ⚡ Wymagania:

- System z możliwością dodania Custom CSS
- System z możliwością dodania Custom JavaScript
- FontAwesome 6+ (ładowane automatycznie)
- Fonty Google: Cinzel + Inter (ładowane automatycznie)

## 🐛 Rozwiązywanie problemów:

**Problem**: Badge'e się nie pojawiają
➡️ Sprawdź konsolę (F12), upewnij się że FontAwesome jest załadowany

**Problem**: Tło nie widać
➡️ Upewnij się że CSS jest załadowany **po** domyślnych stylach systemu

**Problem**: JavaScript nie działa
➡️ Sprawdź czy skrypt jest przed `</body>`, odśwież stronę

**Problem**: Karty jeden pod drugim
➡️ To normalne dla mniej niż 3 ofert - slick slider wymaga minimum 3

## 📦 Wersja:

**v1.0** - Listopad 2024
- Pierwszy release
- Pełna integracja Alpine Serenity
- Automatyczne wzbogacanie ofert
- Responsive design

---

**Motyw**: Alpine Serenity
**Dla**: Pensjonat Pod Jodłami
