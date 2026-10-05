/*
  KAASHVI BIRTHDAY SITE — QUICK CONFIG

  GitHub Pages cannot store RSVPs by itself (static hosting only).
  Use a free Google Sheet + Apps Script endpoint instead:

  1) Open rsvp-apps-script/Code.gs and follow the setup comments.
  2) Paste the deployed Web App URL below.
*/

window.KAASHVI_SITE_CONFIG = {
  // Paste your Google Apps Script Web App URL here after deploying.
  // Example: "https://script.google.com/macros/s/AKfycb.../exec"
  // AKfycbykyQ9zjJ4-yUgra_EbTOpPMKlCpFKID2mutxA7QmY-o6XCCeFOrj02ViaXHpjdrUUn
  rsvpEndpoint: "https://script.google.com/macros/s/AKfycbykyQ9zjJ4-yUgra_EbTOpPMKlCpFKID2mutxA7QmY-o6XCCeFOrj02ViaXHpjdrUUn/exec",

  // Event date/time used for the countdown.
  // 1:30 PM India Standard Time on 6 Nov 2026.
  eventDateTime: "2026-11-06T13:30:00+05:30"
};
