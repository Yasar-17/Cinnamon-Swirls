# Cinnamon Swirls – Static Website

Frontend-only website for **Cinnamon Swirls**, a dessert shop based in Ambur specialising in cakes and desserts.  
Built with **HTML5**, **Tailwind CSS (CDN)**, and **vanilla JavaScript**.

---

## 1. Project Structure

- `index.html` – Main single-page site with all sections:
  - Hero
  - About
  - Menu / Product showcase
  - Gallery
  - Testimonials
  - How to order
  - Contact & footer
- `script.js` – Minimal JS for:
  - Mobile navigation toggle
  - Closing nav on link click
  - Simple gallery lightbox
- `images/` – Place all optimised images here (WebP + JPG/PNG fallbacks).

---

## 2. How to Run Locally

No build tools are required; it’s a static site.

1. Place this folder (e.g. `Cinnamon Swirlss`) anywhere on your machine.
2. Open `index.html` directly in a browser:
   - On Windows, double–click `index.html`, or  
   - Right–click `index.html` → **Open with** → choose your browser.
3. Alternatively, run a simple local server (optional but recommended for best behaviour):
   - Using Python:
     - `cd` into the project folder.
     - Run:  
       ```bash
       python -m http.server 8000
       ```  
     - Open `http://localhost:8000` in your browser.

---

## 3. Customising Content

### Text & Sections

Open `index.html` and adjust:

- **Hero**: Heading, subheading, CTA text under the hero section.
- **About**: Intro paragraphs and trust stats.
- **Menu**: Product names, descriptions, and categories.
- **Gallery**: Replace placeholder image filenames and alt text.
- **Testimonials**: Update quotes to match real Instagram reviews.
- **How to Order**: Adjust the 3-step process if your flow changes.
- **Contact**: Phone, WhatsApp, Instagram handle, and any hours.

All main sections are marked with clear comments and `id` attributes: `home`, `about`, `menu`, `gallery`, `testimonials`, `how-to-order`, `contact`.

### WhatsApp & Phone Links

By default, the site uses:

- WhatsApp: `https://wa.me/916381091583?text=Hi%21%20I%27d%20like%20to%20order%20from%20Cinnamon%20Swirls`
- Phone: `tel:+916381091583`

If your number changes, search for `63810 91583` or `916381091583` in `index.html` and update both the `href` values and visible text.

---

## 4. Images & Performance

### Where to Put Images

- Save your images inside the `images/` folder:
  - Hero: `hero-cake.webp`, `hero-cake.jpg`
  - Menu cards: `cake-custom`, `cake-birthday`, `brownies`, `scones`, `packaging`, `custom-orders`
  - Gallery: `gallery-1` to `gallery-6`

You can rename these if you prefer; just ensure the `src` / `srcset` paths in `index.html` match.

### Optimisation Tips

- Export images as **WebP** where possible, with **JPG/PNG** fallbacks.
- Keep hero and gallery images under ~200–300 KB each when possible.
- All main `<img>` tags already use:
  - `loading="lazy"` for non-critical images.
  - `<picture>` elements for WebP + fallback.

This keeps the site lightweight and helps it load in under 3 seconds on normal connections.

---

## 5. Tailwind & Styling

Tailwind is loaded via CDN in `index.html`:

- Custom colours and fonts are configured in the inline `tailwind.config` block.
- Fonts used:
  - **Headings**: Playfair Display
  - **Body**: Poppins

To tweak styling:

- Adjust classes directly in the HTML (e.g. `bg-creamSoft`, `text-textBrown`, `shadow-soft`).
- You can update or extend colours and fonts in the `tailwind.config` JavaScript snippet in the `<head>` of `index.html`.

If you later want a build pipeline (e.g. custom Tailwind build), you can migrate to a tool like Vite or a pure Tailwind CLI workflow, but it’s not required for this static version.

---

## 6. Accessibility & SEO

The template already includes:

- Semantic HTML5 landmarks (`header`, `main`, `section`, `footer`).
- Descriptive `alt` text on images (update them to match your real photos).
- Focusable buttons and links with visible focus outlines.
- `aria-label` attributes where helpful (e.g. navigation, lightbox).
- `meta` description and basic Open Graph tags for social sharing.

To improve SEO:

- Update the `<title>` and `<meta name="description">` with your final copy.
- Update `og:image` to point to a real hero or brand image.
- Add your real live URL in the `og:url` tag once deployed.

---

## 7. Deployment

As this is a static site, you can easily deploy it to:

- **GitHub Pages**
  - Create a repo and push this folder.
  - Enable GitHub Pages for the `main` branch.
- **Netlify** / **Vercel**
  - Drag-and-drop the folder in their UI, or connect your Git repo.
- Any static web host or S3 bucket with public website hosting enabled.

No special build command is required; the entry point is `index.html`.

---

## 8. Notes

- Primary goal: make it **very easy** for visitors to:
  - See your beautiful products.
  - Trust your brand (social proof, clean layout).
  - **Order instantly via WhatsApp**.
- Keep copy short, warm, and inviting. You can sprinkle emojis like 🧁 ✨ 💝 in headings or CTAs, but use them sparingly.

