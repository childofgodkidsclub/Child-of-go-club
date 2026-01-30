# Website — Child of God Kids Club

This repository contains a small static site scaffold for the Child of God Kids Club.

## Local preview
- Quick preview: run a simple static server from the repository root:
  - Python 3: `python3 -m http.server 8000` (open http://localhost:8000)

## Contact form
- The contact form uses Formspree by default. Replace the placeholder action in `contact.html` with your Formspree form ID:
  - `action="https://formspree.io/f/your-form-id"`

## Deploy to GitHub Pages
1. Push changes to the `main` branch.
2. In GitHub repo settings → Pages, set source to `main` branch and folder `/ (root)`.
3. Site will be available at `https://<your-org>.github.io/<repo>/`

## Notes
- Replace donation link on `donate.html` with your payment provider (PayPal, Donorbox, Stripe).
- To add news items, create a new file under `/news/` and link from `/news/index.html`.
