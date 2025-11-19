# 📋 INSTRUKCJA WDROŻENIA - Pensjonat Pod Jodłami

## 🎯 Pliki do użycia:

### 1️⃣ **pensjonat-head.html**
Wklej w sekcji `<head>` strony:
```html
<!-- PENSJONAT POD JODŁAMI - HEAD -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

### 2️⃣ **pensjonat-wyroznie-css.css**
Skopiuj zawartość tego pliku do **panelu CSS** w systemie lub dodaj jako `<style>` w head:
```html
<style>
[WKLEJ CAŁY KOD Z pensjonat-wyroznie-css.css]
</style>
```

### 3️⃣ **pensjonat-wyroznie-script.js**
Wklej **przed zamknięciem `</body>`**:
```html
<script>
[WKLEJ CAŁY KOD Z pensjonat-wyroznie-script.js]
</script>
```

---

## ✅ Co robi każdy plik:

### 📄 pensjonat-head.html
- Ładuje fonty: **Cinzel** (nagłówki) i **Inter** (tekst)
- Ładuje **FontAwesome** (ikony)

### 🎨 pensjonat-wyroznie-css.css
- **Tło dla sekcji** wyróżnionych (gradient miętowy + kremowy)
- **Style dla kart** ofert (duże, zaokrąglone, z cieniem)
- **Badge'e** (Popular, Family, Premium itp.)
- **Feature-tags** (ikony + tekst: WiFi, Parking, Widok na las itp.)
- **Przyciski "Rezerwuj Teraz"** (gradient zielony z animacją)
- **Responsive** (działa na mobile)

### ⚙️ pensjonat-wyroznie-script.js
- **Automatycznie dodaje**:
  - Badge'e (Popular, Family, Premium...)
  - Feature-tags bazując na nazwie pokoju
  - Przycisk "Rezerwuj Teraz"
- **Zmienia tytuł** sekcji na "Nasze Pokoje"
- **Działa z slick slider** (czeka na załadowanie)
- **Obsługuje dynamiczne ładowanie** (MutationObserver)

---

## 🚀 Jak wdrożyć:

### Krok 1: HEAD
1. Otwórz panel administracyjny
2. Znajdź sekcję **HEAD** (lub Custom HTML)
3. Wklej kod z `pensjonat-head.html`

### Krok 2: CSS
1. Otwórz panel **Custom CSS**
2. Skopiuj **CAŁY** kod z `pensjonat-wyroznie-css.css`
3. Wklej na końcu istniejącego CSS

### Krok 3: SCRIPT
1. Znajdź miejsce gdzie dodajesz skrypty (np. **Custom Scripts** lub **Before </body>**)
2. Skopiuj **CAŁY** kod z `pensjonat-wyroznie-script.js`
3. Wklej w `<script>` tagach

### Krok 4: Wyróżnij pokoje
1. W panelu admina zaznacz pokoje jako **wyróżnione**
2. System automatycznie wygeneruje sekcję "Wyróżnione Oferty"
3. JavaScript automatycznie zmieni tytuł na **"Nasze Pokoje"**
4. Oferty otrzymają badge'e, feature-tags i przyciski

---

## 🎨 Efekt końcowy:

✅ **Tło sekcji**: Gradient miętowy + kremowy (Alpine Serenity)
✅ **Duże karty**: 350px wysokość obrazka, min 600px całkowita wysokość
✅ **Badge'e**: Popular, Family, Premium (prawy górny róg)
✅ **Feature-tags**: 4 tagi dla każdego pokoju (z ikonami FontAwesome)
✅ **Przycisk**: "Rezerwuj Teraz" (gradient zielony z animacją)
✅ **Tytuł**: "Nasze Pokoje" (zamiast "Wyróżnione Oferty")
✅ **Hover effects**: Zoom obrazka, podniesienie karty
✅ **Responsive**: Działa na mobile

---

## 🔧 Customizacja:

### Zmiana badge'y:
W `pensjonat-wyroznie-script.js` linia 51:
```javascript
const badges = ['Popular', 'Family', 'Premium', 'Wyróżniony', 'Nowość', 'Romantic'];
```

### Zmiana feature-tags:
W `pensjonat-wyroznie-script.js` linie 9-45:
```javascript
const roomFeatures = {
    'leśny': [
        { icon: 'fa-tree', text: 'Widok na las' },
        ...
    ]
}
```

### Zmiana kolorów:
W `pensjonat-wyroznie-css.css` linie 8-22:
```css
:root {
  --forest-deep: #0D3B2E;
  --pine: #3A8B6A;
  ...
}
```

---

## ⚠️ Troubleshooting:

**Problem**: Badge'e się nie pojawiają
**Rozwiązanie**: Sprawdź czy FontAwesome jest załadowany, odśwież stronę

**Problem**: Tło nie widać
**Rozwiązanie**: Sprawdź czy CSS jest załadowany **po** domyślnych stylach systemu

**Problem**: JavaScript nie działa
**Rozwiązanie**: Sprawdź konsolę przeglądarki (F12), upewnij się że skrypt jest przed `</body>`

**Problem**: Oferty jeden pod drugim zamiast w sliderze
**Rozwiązanie**: To normalne gdy jest mało ofert - slick slider działa dla 3+

---

## 📁 Pliki do usunięcia (stare/niepotrzebne):

- `pensjonat.css` (stary, za duży - używamy `pensjonat-wyroznie-css.css`)
- `pensjonat-sections.html` (nie potrzebne - system generuje automatycznie)
- `head.html` (stary - używamy `pensjonat-head.html`)
- `script.js` (pusty)
- `css` (przykład z baltic apartments)
- `html` (przykład z baltic apartments)

---

✅ **GOTOWE!** Sekcja wyróżnionych ofert będzie wyglądać jak na baltic-apartments.com!
