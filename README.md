# Kaashvi Turns One — Free Birthday Invitation Website

This folder is a complete **GitHub Pages–ready website** for Kaashvi's first birthday.

It uses only the four illustrated/storybook images you provided.

## Event details already included

- **Kaashvi**
- **6th November**
- **12:30 PM onwards**
- **Taj Usha Kiran Palace, Gwalior**
- Princess / fairytale theme
- Countdown to **6 November 2026, 12:30 PM IST**

---

## 1. Connect RSVP (Google Sheet via Apps Script)

GitHub Pages is static hosting — it cannot store RSVPs by itself.
This site posts to a free Google Apps Script web app that appends rows to your Google Sheet.

### One-time setup

1. Create a Google Sheet (e.g. **Kaashvi Birthday RSVPs**).
2. In the sheet: **Extensions → Apps Script**
3. Paste the contents of:

```text
rsvp-apps-script/Code.gs
```

4. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the Web app URL.
6. Open `config.js` and set:

```js
rsvpEndpoint: "PASTE_WEB_APP_URL_HERE",
```

7. Refresh the site and submit a test RSVP — a new row should appear in the Sheet.

That is the only config you need for RSVP.

---

# 2. Put the website on GitHub Pages for ₹0

## Create a GitHub account

If you don't already have one, create a free account at GitHub.

## Create a repository

Click:

**New repository**

Repository name suggestion:

```text
kaashvi-turns-one
```

Choose:

```text
Public
```

Then click:

**Create repository**

## Upload this website

Upload everything inside this folder:

```text
index.html
style.css
script.js
config.js
assets/
```

Make sure `index.html` is at the top level of the repository, not inside another folder.

Commit the files.

## Enable GitHub Pages

Inside the repository:

**Settings → Pages**

Under **Build and deployment** choose:

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

Click **Save**.

GitHub will publish the website.

Your URL will normally look like:

```text
https://YOUR-GITHUB-USERNAME.github.io/kaashvi-turns-one/
```

It can take a minute or two for the first deployment.

---

# 3. Share it on WhatsApp

Example:

> 👑 Our little princess Kaashvi is turning ONE! ✨  
> We would love for you to celebrate her special day with us.  
>
> 📅 6th November  
> 🕧 12:30 PM onwards  
> 📍 Taj Usha Kiran Palace, Gwalior  
>
> Invitation & RSVP:  
> YOUR-GITHUB-PAGES-LINK

---

# Files

```text
kaashvi_birthday_site/
├── index.html
├── style.css
├── script.js
├── config.js
└── assets/
    ├── kaashvi-garden.png
    ├── kaashvi-forest.png
    ├── kaashvi-princess.png
    └── kaashvi-sky.png
```

## Want to change text?

Most guest-facing text is in:

```text
index.html
```

## Want to change the RSVP destination?

Only edit:

```text
config.js
```

Paste your Apps Script Web App URL into `rsvpEndpoint`.

## Want to change the date used by the countdown?

In `config.js` change:

```js
eventDateTime: "2026-11-06T12:30:00+05:30"
```

---

Built as a plain HTML/CSS/JavaScript site, so there are:

- no hosting fees
- no server fees
- no database fees
- no paid framework
- no API charges

GitHub Pages hosts the invitation. RSVPs are stored in a free Google Sheet via Google Apps Script.
