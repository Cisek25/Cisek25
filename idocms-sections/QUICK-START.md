# 🚀 QUICK START - 10 Minut do Gotowej Strony

> Minimalistyczna instrukcja dla zabieganych

---

## ⚡ 3 KROKI DO SUKCESU

### KROK 1: CSS (2 min)

```
1. Otwórz: css/complete-luxury-mountain.css
2. Skopiuj CAŁY kod (Ctrl+A → Ctrl+C)
3. Panel idoBooking → Wygląd → Arkusz stylów CSS
4. Wklej NA POCZĄTKU arkusza
5. ZAPISZ
```

### KROK 2: HTML (8 min - 2 min każda sekcja)

Dla każdej z 4 sekcji:

```
1. Panel idoBooking → Treść → Sekcje CMS → + Nowa
2. Poziom: Body
3. Otwórz odpowiedni plik HTML
4. Skopiuj CAŁY kod
5. Wklej
6. ZAPISZ
```

**Pliki:**
- `html/1-apartamenty-section.html` → Nazwa: "Apartamenty"
- `html/2-gorskie-udogodnienia-section.html` → Nazwa: "Udogodnienia"
- `html/3-timeline-atrakcje-section.html` → Nazwa: "Atrakcje"
- `html/4-lokalizacja-mapa-section.html` → Nazwa: "Lokalizacja"

### KROK 3: Test (30 sec)

```
1. Odśwież stronę (Ctrl+F5)
2. Sprawdź czy wszystko się wyświetla
3. GOTOWE! 🎉
```

---

## 🎨 CO ZMIENIĆ (Opcjonalne)

### Apartamenty:
- **Nazwy**: Szukaj `class="apartment-name"` → Zmień tekst
- **Zdjęcia**: Szukaj `<img src="..."` → Zmień URL
- **Ceny**: Szukaj `class="price-amount"` → Zmień kwotę

### Wszystko inne:
- **Kolory**: W CSS → zmień `--mountain-gold` itp. (początek pliku)
- **Czcionki**: W CSS → zmień `@import url(...)` (początek pliku)

---

## 🐛 Nie Działa?

### Sekcje nie full width?
→ Dodaj do HEAD:
```html
<style>
.apartments-premium-section,
.mountain-amenities-section,
.timeline-section,
.location-split-section {
  width: 100vw !important;
  margin-left: -50vw !important;
  margin-right: -50vw !important;
  left: 50% !important;
  right: 50% !important;
  position: relative !important;
}
</style>
```

### Czcionki nie ładują się?
→ Dodaj do HEAD:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
```

### Nic nie widać?
1. Wyczyść cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+F5)
3. Sprawdź czy CSS jest NA POCZĄTKU arkusza

---

## 📚 Pełna Dokumentacja

**Szczegóły:** `docs/INSTRUKCJA-INSTALACJI.md` (200+ linii)

Zawiera:
- Personalizacja krok po kroku
- Zmiana kolorów i czcionek
- Dodawanie apartamentów
- Troubleshooting
- FAQ

---

## ✅ Checklist

- [ ] CSS wklejony i zapisany
- [ ] 4 sekcje HTML wklejone i zapisane
- [ ] Strona odświeżona (Ctrl+F5)
- [ ] Wszystko wyświetla się poprawnie
- [ ] Przetestowane na mobile

---

## 🎉 Gotowe!

Twoja strona działa!

Teraz możesz:
- Zmienić zdjęcia apartamentów
- Dostosować ceny
- Zmienić opisy
- Dodać więcej apartamentów

**Powodzenia!** 🏔️

---

*Potrzebujesz pomocy? Zobacz: `docs/INSTRUKCJA-INSTALACJI.md`*
