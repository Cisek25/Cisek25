# 🏨 Generator Kodu idobooking - ULTRA Edition

Profesjonalne narzędzie do generowania kodu HTML/CSS dla systemu rezerwacji idobooking.

## ✨ Funkcje ULTRA Edition

### 📊 Statystyki
- **17 gotowych szablonów** (zamiast 6)
- **72+ udogodnień** (zamiast 36)
- **12 palet kolorów** (zamiast 6)
- **6 dodatkowych parametrów**
- **Pełna responsywność**
- **Zero błędów JavaScript**

### 🎯 Szablony

**Górskie (3):**
- Luksusowy apartament górski
- Alpine Chalet Premium
- Mountain Ski Resort

**Nadmorskie (3):**
- Seaside Luxury Resort
- Ocean View Villa
- Lighthouse Boutique Stay

**Miejskie (3):**
- Urban Hub Hostel
- The Grand Boutique Hotel
- Industrial Loft Downtown

**Wiejskie (3):**
- Forest Hideaway Cottage
- Sunshine Farm Agroturystyka
- Vineyard Estate Wine & Stay

**Wellness (2):**
- Serenity Wellness Retreat
- Mountain Yoga Sanctuary

**Premium (2):**
- Royal Castle Experience
- Heritage Mansion Estate

### 🛠️ Udogodnienia (72+)

**Podstawowe (19):**
WiFi, Parking, Kuchnia, TV, Klimatyzacja, Ogrzewanie, Śniadanie, Restauracja, Ekspres, Pralka, Suszarka, Zmywarka, Mikrofalówka, Lodówka, Kuchenka, Sztućce, Pralnia, Żelazko, Suszarka do włosów

**Premium (18):**
SPA, Basen, Sauna, Jacuzzi, Siłownia, Sala fitness, Kort tenisowy, Pole golfowe, Bilard, Sala gier, Kino domowe, Fortepian, Biblioteka, Piwniczka z winem, Galeria sztuki, Centrum biznesowe, Drukar/skaner, Sala konferencyjna

**Outdoor (18):**
Balkon, Taras, Ogród, Grill, Kominek zewnętrzny, Dostęp do plaży, Widok na góry, Widok na morze, Widok na jezioro, Kajaki, Deski SUP, Rowery, Sprzęt narciarski, Przechowalnia, Stajnia, Safari, Wędkarstwo, Ognisko

**Inne (23):**
Zwierzęta, Dla niepalących, Dźwiękoszczelne, Dostępność, Winda, Sejf, Ochrona 24h, Recepcja 24h, Przechowalnia bagażu, Transfer, Taxi, Transport, Oddzielne wejście, Biurko, Szafa, Lustro, Pościel premium, Szlafroki, Kosmetyki, Przewodniki, Mapy, Bilety, Concierge

## 🚀 Jak uruchomić?

### Metoda 1: Pobierz folder (NAJŁATWIEJSZA)

1. Pobierz cały folder `generator-idobooking`
2. Otwórz plik `index.html` w przeglądarce
3. Gotowe! Generator działa lokalnie bez internetu

### Metoda 2: Z GitHub

```bash
# Sklonuj repozytorium
git clone https://github.com/Cisek25/Cisek25.git

# Przejdź do folderu
cd Cisek25/generator-idobooking

# Otwórz w przeglądarce
open index.html  # MacOS
start index.html # Windows
xdg-open index.html # Linux
```

### Metoda 3: Podwójne kliknięcie

Po pobraniu folderu po prostu kliknij dwukrotnie na `index.html` - otworzy się w domyślnej przeglądarce!

## 📖 Instrukcja użycia

### Krok 1: Wybierz szablon (opcjonalnie)
- W górnej sekcji wybierz gotowy szablon z listy
- Wszystkie pola wypełnią się automatycznie
- Możesz edytować dowolne wartości

### Krok 2: Wypełnij dane
- **Podstawowe**: nazwa, typ, opisy
- **Parametry**: powierzchnia, cena, liczba gości, pokoi, łóżek, łazienek
- **Kolory**: wybierz paletę lub ustaw własne
- **Zdjęcia**: dodaj linki do zdjęć (możesz dodać wiele)
- **Udogodnienia**: zaznacz co oferujesz (72+ opcji w 4 kategoriach)

### Krok 3: Generuj kod
- Kliknij "🚀 Generuj kod HTML/CSS"
- Otrzymasz 5 bloków gotowego kodu:
  1. **Kod do `<head>`** - meta tagi, fonty
  2. **Hero Section** - sekcja powitalna z gradientem
  3. **Sekcja CMS** - główna treść z opisem, udogodnieniami, galerią
  4. **JavaScript** - smooth scroll, lazy loading
  5. **CSS** - kompletne style

### Krok 4: Skopiuj i wklej
- Każdy blok ma przycisk "Kopiuj"
- Wklej kod w odpowiednie miejsca w systemie idobooking
- Gotowe!

## 🎨 Kolory

12 predefiniowanych palet:
- Ocean (Blue-Teal)
- Purple (Purple-Pink)
- Sunset (Orange-Red)
- Forest (Green)
- Dark (Navy)
- Red (Crimson)
- Teal (Turquoise)
- Orange
- Violet
- Navy Blue
- Gold
- Mint

## 💡 Wskazówki

### Najlepsze praktyki:
- Używaj opisów SEO-friendly (max 160 znaków dla krótkiego opisu)
- Dodawaj zdjęcia w wysokiej rozdzielczości
- Wybieraj kolory pasujące do charakteru obiektu
- Zaznaczaj tylko udogodnienia, które rzeczywiście oferujesz

### Optymalizacja:
- Kompresuj zdjęcia przed uploadem (WebP, ~80% quality)
- Używaj lazy loading dla szybszego ładowania
- Testuj responsywność na różnych urządzeniach

## 📦 Struktura plików

```
generator-idobooking/
├── index.html      # Główny plik HTML
├── styles.css      # Style aplikacji
├── app.js          # Logika generatora
└── README.md       # Ten plik
```

## 🔧 Wymagania

- Nowoczesna przeglądarka (Chrome, Firefox, Safari, Edge)
- JavaScript włączony
- **Brak wymagań serwerowych** - działa lokalnie!

## ⚡ Performance

- Plik HTML: ~12 KB
- Plik CSS: ~7 KB
- Plik JS: ~15 KB
- **Całość: ~34 KB** (bardzo szybkie ładowanie!)

## 🆘 Rozwiązywanie problemów

**Problem**: Kod się nie generuje
- Sprawdź czy wypełniłeś pole "Nazwa obiektu" (wymagane)

**Problem**: Przycisk "Kopiuj" nie działa
- Twoja przeglądarka może blokować Clipboard API
- Skopiuj kod ręcznie (Ctrl+C / Cmd+C)

**Problem**: Szablon się nie ładuje
- Odśwież stronę (F5)
- Sprawdź konsolę przeglądarki (F12)

## 📝 Changelog

### v2.0 ULTRA (2024)
- ✅ 17 szablonów (3x więcej)
- ✅ 72+ udogodnień (2x więcej)
- ✅ 12 palet kolorów (2x więcej)
- ✅ Nowy design i UX
- ✅ Kategoryzacja udogodnień (4 zakładki)
- ✅ Dodano: łazienki jako parametr
- ✅ Poprawiono: escape HTML, error handling
- ✅ Zoptymalizowano: rozmiar plików

### v1.0 (2024)
- Pierwsza wersja
- 6 szablonów
- 36 udogodnień
- 6 palet

## 👨‍💻 Autor

Stworzony dla systemu idobooking

## 📄 Licencja

Do użytku z systemem idobooking

---

**Potrzebujesz pomocy?** Otwórz issue na GitHubie lub skontaktuj się z supportem idobooking.

**Miłego generowania! 🚀**
