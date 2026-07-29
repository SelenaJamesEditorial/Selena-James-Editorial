# Selena James Editorial — Premium GitHub Pages Site

This package contains a complete multi-page static website designed to run on GitHub Pages without hosting fees.

## Included pages

- Home
- Services overview
- Developmental Edit
- Editorial Assessment
- Manuscript Strategy Session
- Portfolio
- About
- Contact and manuscript inquiry form
- Custom 404 page

## Design and functionality

- Responsive editorial-style layout
- Original typography-led portfolio artwork
- Mobile navigation
- Accessible labels and keyboard navigation
- Reduced-motion support
- Scroll-reveal effects
- Search-engine page titles and descriptions
- `robots.txt` and `sitemap.xml`
- Formspree-ready inquiry form
- GitHub Pages custom-domain files

## Before publishing

### 1. Connect the inquiry form

GitHub Pages serves static files and does not process form submissions. The contact page is prepared for Formspree.

1. Create a Formspree account and a new form.
2. Copy the endpoint, which will resemble:
   `https://formspree.io/f/abcdwxyz`
3. Open `contact.html`.
4. Replace:
   `https://formspree.io/f/REPLACE_WITH_FORM_ID`
   with your endpoint.
5. Test the form before announcing the site.

The form asks writers for contact information, genre, word count, stage, project description, service interest, editorial concerns, ideal timing, sample pages, and a synopsis or outline.

### 2. Replace domain placeholders

Replace `www.example.com` in:

- `CNAME.example`
- `robots.txt`
- `sitemap.xml`

Rename `CNAME.example` to `CNAME`.

### 3. Publish to GitHub Pages

1. Create a public GitHub repository.
2. Upload all files and folders from this package to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
5. Save.

### 4. Connect the Squarespace-managed domain

In GitHub Pages settings, enter the custom domain before changing DNS.

For the root domain, GitHub currently documents these A records:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

For `www`, create a CNAME record pointing to:

`YOUR-GITHUB-USERNAME.github.io`

Do not include the repository name in the CNAME target.

GitHub recommends verifying the domain and configuring both the apex and `www` versions. After DNS resolves, enable **Enforce HTTPS** in GitHub Pages settings.

### 5. Personalization still available

The site is launchable without photography. For a later visual upgrade, add:

- One professional headshot on the About page
- Actual book-cover images only where rights and image quality are confirmed
- Testimonials once approved for public use
- Starting prices or typical timelines if you decide they help qualify inquiries

## Local preview

From this folder, run:

```bash
python -m http.server 8000
```

Then open:

`http://localhost:8000`

