/**
 * Kaashvi RSVP — Google Apps Script backend
 *
 * SETUP (one-time, free):
 * 1. Open https://sheets.google.com and create a spreadsheet
 *    named something like "Kaashvi Birthday RSVPs".
 * 2. In that sheet: Extensions → Apps Script
 * 3. Delete any default code and paste THIS entire file.
 * 4. Click Deploy → New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Click Deploy, authorize if asked, then copy the Web app URL.
 * 6. Paste that URL into config.js as rsvpEndpoint.
 *
 * Rows are appended to the first sheet automatically.
 */

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || "{}");
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Attending",
        "Party size",
        "Message"
      ]);
    }

    sheet.appendRow([
      new Date(),
      String(data.name || "").trim(),
      String(data.attending || "").trim(),
      String(data.partySize || "").trim(),
      String(data.message || "").trim()
    ]);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json_({
    ok: true,
    message: "Kaashvi RSVP endpoint is live. Use POST from the website."
  });
}

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
