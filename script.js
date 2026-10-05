(() => {
  const cfg = window.KAASHVI_SITE_CONFIG || {};
  const eventDate = new Date(cfg.eventDateTime || "2026-11-06T13:30:00+05:30");

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
  const panel = el("rsvpPanel");
  const form = el("rsvpForm");
  const thanks = el("rsvpThanks");
  const statusEl = el("formStatus");
  const submitBtn = el("submitRsvp");

  const endpoint = (cfg.rsvpEndpoint || "").trim();

  openBtn?.addEventListener("click", () => {
    if (!panel) return;
    panel.hidden = false;
    openBtn.setAttribute("aria-expanded", "true");
    panel.scrollIntoView({ behavior: "smooth", block: "start" });
    el("guestName")?.focus();
  });

  function setStatus(message, isError) {
    if (!statusEl) return;
    statusEl.hidden = !message;
    statusEl.textContent = message || "";
    statusEl.classList.toggle("is-error", Boolean(isError));
  }

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!endpoint) {
      setStatus(
        "RSVP is almost ready — add your Google Apps Script URL in config.js.",
        true
      );
      return;
    }

    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const payload = {
      name: data.get("name")?.toString().trim() || "",
      attending: data.get("attending")?.toString() || "",
      partySize: data.get("partySize")?.toString() || "",
      message: data.get("message")?.toString().trim() || ""
    };

    submitBtn.disabled = true;
    setStatus("Sending your RSVP…");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        // text/plain avoids a CORS preflight; Apps Script still parses JSON.
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.ok === false) {
        throw new Error(result.error || "Request failed");
      }

      form.hidden = true;
      if (thanks) thanks.hidden = false;
      setStatus("");
    } catch {
      setStatus(
        "Something went wrong. Please check your connection and try again.",
        true
      );
      submitBtn.disabled = false;
    }
  });
})();
