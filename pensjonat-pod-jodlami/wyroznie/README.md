# 🏔️ Moduł Wyróżnionych Ofert - Alpine Serenity

Samodzielny moduł tylko dla sekcji wyróżnionych ofert.

## 📁 Struktura:

```
wyroznie/
├── wyroznie-head.html              # Fonty i FontAwesome (tylko dla tego modułu)
├── html/
│   └── przyklad-implementacji.html # Przykład implementacji
├── css/
│   └── wyroznie.css                # Style tylko dla wyróżnionych ofert
└── js/
    └── wyroznie.js                 # JavaScript wzbogacający oferty
```

## 🚀 Szybki start:

### 1. Dodaj HEAD
Skopiuj zawartość `wyroznie-head.html` do sekcji `<head>` w systemie.

### 2. Dodaj CSS
Skopiuj zawartość `css/wyroznie.css` do panelu **Custom CSS** w systemie.

### 3. Dodaj JavaScript
Skopiuj zawartość `js/wyroznie.js` i wklej przed `</body>` w systemie.

### 4. Wyróżnij pokoje
W panelu admina zaznacz pokoje jako **wyróżnione**. System automatycznie wygeneruje sekcję.

## ✨ Co robi ten moduł:

✅ Dodaje Alpine Serenity tło (gradient miętowy + kremowy)
✅ Tworzy duże karty (350px obrazek, 600px min wysokość)
✅ Automatycznie dodaje badge'e (Popular, Family, Premium...)
✅ Automatycznie dodaje feature-tags z ikonami
✅ Dodaje przycisk "Rezerwuj Teraz" z animacją
✅ Zmienia tytuł na "Nasze Pokoje"
✅ Działa ze slick sliderem
✅ Pełny responsive

## 🎨 Paleta kolorów:

- **forest-deep:** #0D3B2E (główny tekst)
- **pine:** #3A8B6A (akcenty)
- **mint-pale:** #A8E6C5 (tła)
- **cream:** #F5F1E8 (tła)
- **terracotta:** #C1666B (badge'e)

## 🔧 Customizacja:

### Zmiana badge'y:
W `js/wyroznie.js` linia 43:
```javascript
const badges = ['Popular', 'Family', 'Premium', 'Wyróżniony', 'Nowość', 'Romantic'];
```

### Dodanie feature-tags:
W `js/wyroznie.js` linie 10-41:
```javascript
const roomFeatures = {
    'leśny': [
        { icon: 'fa-tree', text: 'Widok na las' },
        ...
    ]
}
```

### Zmiana kolorów:
W `css/wyroznie.css` linie 7-26:
```css
:root {
  --forest-deep: #0D3B2E;
  --pine: #3A8B6A;
  ...
}
```

---

**Ten moduł jest niezależny** - możesz go używać sam lub razem z pełnym projektem pensjonatu.
