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

## 1. Connect the RSVP form

The website is already prepared to embed a free Google Form.

### Create the form

Go to Google Forms and make a blank form.

Suggested fields:

1. **Guest / Family Name** — Short answer — Required
2. **Will you be joining us?** — Multiple choice:
   - Yes, we'd love to!
   - Sorry, we can't make it
3. **Number of adults** — Short answer
4. **Number of children** — Short answer
5. **Phone number** — Short answer, optional
6. **A little message for Kaashvi** — Paragraph, optional

### Connect it to a Google Sheet

In Google Forms:

**Responses → Link to Sheets**

Every RSVP will then appear in a spreadsheet automatically.

### Put the form into this website

In Google Forms:

**Send → `<>` Embed**

You will see code similar to:

```html
<iframe src="https://docs.google.com/forms/d/e/ABC123/viewform?embedded=true">
```

Copy **only the URL inside `src="..."`**.

Open:

```text
config.js
```

Change:

```js
googleFormUrl: "",
```

to:

```js
googleFormUrl: "YOUR_GOOGLE_FORM_URL_HERE",
```

Save the file.

That is the only code you need to edit for RSVP.

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

## Want to change the RSVP link?

Only edit:

```text
config.js
```

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

GitHub Pages hosts the invitation, while Google Forms + Google Sheets handle RSVP responses for free.
