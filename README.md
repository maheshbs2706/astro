# 🕉️ Kalaya Tasmai Namah

A single-file Hindu astrology dashboard — no backend, no build step, no dependencies to install. Open `index.html` in any browser and it fetches live data automatically.

---

## ✨ Sections

### 1. 🔵 Daily Kaal Timings
Shows inauspicious time periods for the day, defaulting to today for **Bengaluru, Karnataka, India**.

- **Rahu Kaal** — inauspicious period ruled by Rahu
- **Gulika Kaal** — inauspicious period ruled by Gulika
- **Yamaghanta Kaal** — inauspicious period ruled by Yama
- Sunrise & Sunset times
- Date picker to check any day
- If a Kaal is currently active, it is **highlighted in gold** with a live badge

---

### 2. 📅 Day Panchang
Hindu almanac details for the selected date in Bengaluru.

- Tithi (lunar day)
- Nakshatra (lunar mansion)
- Festivals & Vrats
- Auspicious Period — Abhijit Muhurat, Amrit Kaal, Brahma Muhurat
- Inauspicious Period — Rahu, Yamaganda, Gulika, Dur Muhurat, Varjyam
- Date picker to view any day

---

### 3. ♋ Daily Horoscope
Daily horoscope reading for any of the 12 zodiac signs.

- Dropdown to select your sign
- Full reading displayed in editorial serif style with drop cap

---

### 4. 🌑 Amavasya
New moon (Amavasya) tithi timings and sky details for any month.

- Amavasya Tithi Start & End times
- Sunrise, Sunset, Moonrise, Moonset
- Month + Year dropdowns (defaults to current month)

---

### 5. 💕 Love Meter
Fun compatibility score between two people by name.

- Enter two names with gender selection
- Returns a percentage score and a personalised love quote
- Score displayed as an animated donut ring (colour shifts pink → gold → blue by score)

---

### 6. ♾️ Zodiac Compatibility
Astrological compatibility between two zodiac signs.

- Enter names, select gender and zodiac sign for each person
- Returns a compatibility percentage displayed as a heart icon
- Full compatibility description with pairing title and paragraphs

---

## 🚀 Deployment (GitHub Pages)

1. Rename `daily_horoscope.html` → `index.html`
2. Create a new **public** GitHub repository
3. Upload `index.html` and this `README.md`
4. Go to **Settings → Pages → Source → main branch → / (root)**
5. Your site goes live at:

```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

---

## 🗂️ File Structure

```
index.html      ← entire app (HTML + CSS + JS, single file)
README.md       ← this file
```

No npm, no bundler, no frameworks. Just one HTML file.

---

## 🎨 Design

| Section | Accent Color |
|---|---|
| Kaal Timings | Blue |
| Panchang | Green |
| Horoscope | Gold |
| Amavasya | Purple |
| Love Meter | Pink |
| Zodiac Compatibility | Purple |

Fonts: **Cormorant Garamond** (serif body) + **Josefin Sans** (labels & UI). Dark navy celestial theme throughout.

---

## ⚠️ Notes

- Data is sourced from [prokerala.com](https://www.prokerala.com). If their page structure changes, the display may need updating.
- Location is hardcoded to **Bengaluru, Karnataka, India** for Kaal and Panchang sections.
- The active Kaal highlight only works when viewing **today's date**.

---

## 🙏 Credits

Data sourced from [prokerala.com](https://www.prokerala.com). Built as a personal astrology dashboard.

> *"Kalaya Tasmai Namah"* — Salutations to Time, the eternal.
