(() => {
  const cfg = window.KAASHVI_SITE_CONFIG || {};
  const eventDate = new Date(cfg.eventDateTime || "2026-11-06T12:30:00+05:30");

  const el = (id) => document.getElementById(id);

  function updateCountdown() {
    const now = new Date();
    let ms = eventDate - now;

    if (Number.isNaN(eventDate.getTime())) return;

    if (ms <= 0) {
      el("days").textContent = "0";
      el("hours").textContent = "0";
      el("minutes").textContent = "0";
      el("seconds").textContent = "0";
      return;
    }

    const days = Math.floor(ms / 86400000);
    ms %= 86400000;
    const hours = Math.floor(ms / 3600000);
    ms %= 3600000;
    const minutes = Math.floor(ms / 60000);
    ms %= 60000;
    const seconds = Math.floor(ms / 1000);

    el("days").textContent = days;
    el("hours").textContent = hours;
    el("minutes").textContent = minutes;
    el("seconds").textContent = seconds;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  const openBtn = el("openRsvp");
  const dialog = el("rsvpDialog");
  const closeBtn = el("closeRsvp");
  const dialogFrame = el("dialogFrame");
  const formWrap = el("formWrap");
  const pageFrame = el("rsvpFrame");
  const setupNote = el("setupNote");

  const rawUrl = (cfg.googleFormUrl || "").trim();

  function normalizedFormUrl(url) {
    if (!url) return "";
    if (url.includes("embedded=true")) return url;
    if (url.includes("/viewform")) {
      const separator = url.includes("?") ? "&" : "?";
      return url + separator + "embedded=true";
    }
    return url;
  }

  const formUrl = normalizedFormUrl(rawUrl);

  function loadFormFrame(frame) {
    if (frame && formUrl && !frame.src) {
      frame.src = formUrl;
    }
  }

  function openInlineForm() {
    formWrap.hidden = false;
    loadFormFrame(pageFrame);
    formWrap.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  openBtn?.addEventListener("click", () => {
    if (!formUrl) {
      setupNote.hidden = false;
      setupNote.textContent =
        "RSVP is almost ready — connect the Google Form in config.js before sharing the website.";
      return;
    }

    setupNote.hidden = true;

    if (dialog && typeof dialog.showModal === "function") {
      loadFormFrame(dialogFrame);
      dialog.showModal();
    } else {
      openInlineForm();
    }
  });

  closeBtn?.addEventListener("click", () => dialog?.close());

  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
})();
