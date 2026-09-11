# Kamulu Pranay — Angular Portfolio

A professional, responsive single-page portfolio built with Angular, TypeScript, JavaScript, HTML5 and SCSS. Portfolio content is based on the supplied resume.

## Run locally

```bash
npm install
npm start
```

Then open the local URL printed by Angular CLI.

## Resume PDF

Place the PDF at:

`src/assets/resume/Kamulu-Pranay-Resume.pdf`

The Hero **Download Resume** button already points to this path. The supplied source resume was a DOCX, so this project also includes a generated PDF at the same assets path when packaged here.

## Update social links

Edit `src/app/data/portfolio.data.ts`:

```ts
social: {
  github: 'https://github.com/kamulupranay',
  linkedin: 'https://www.linkedin.com/in/pranay-kamulu-8176b2240'
}
```

## Add project URLs

Edit the `projects` array in `src/app/data/portfolio.data.ts` and add `url: 'https://...'` to a project. Projects without a real URL intentionally show a non-clickable configuration note instead of a fake link.

## Contact form

The form uses frontend validation and opens a `mailto:` draft. It does not claim to store messages because there is no backend.

## Build

```bash
npm run build
```

## Deployment

### Netlify
- Build command: `npm run build`
- Publish directory: `dist/pranay-portfolio/browser`
- For SPA routing, add a `_redirects` file under `public/` containing:

```text
/* /index.html 200
```

### Vercel
- Framework preset: Angular
- Build command: `npm run build`
- Output directory: `dist/pranay-portfolio/browser`

## Notes

- GitHub and LinkedIn URLs were taken from the hyperlinks embedded in the supplied resume.
- The only real project URL in the resume was the Income Tax e-Filing portal URL; other project cards deliberately do not invent URLs.
- The public portfolio intentionally summarizes the career break without exposing medical details.
