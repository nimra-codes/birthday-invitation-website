# Nimra's Birthday Invitation Website

## Files
- `index.html` — page content
- `style.css` — responsive pink/cream styling
- `script.js` — countdown, mobile navigation, RSVP email draft

## Run it
Open `index.html` in a browser, or upload all three files to your hosting service. The two birthday photos are included locally in the `assets` folder; Google Fonts require an internet connection.

## Customize before publishing
1. In `index.html`, change the date badge, event date/time, venue, address, and map/social links to the correct information.
2. In `script.js`, update `EVENT_DATE` to the event's date/time with the correct UTC offset.
3. In `script.js`, replace `hello@example.com` with the host's real RSVP email.
4. Replace `assets/birthday-hero.jpg` or `assets/birthday-girl.jpg` with your own photos if desired.

## RSVP note
The form validates the entries and opens the visitor's default email app with an RSVP draft. It does not save RSVPs to a database. For automatic collection, connect a backend or form service.
