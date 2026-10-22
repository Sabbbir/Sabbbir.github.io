# Sabbir Ahmed — research portfolio

## Install in your existing repository

Extract this archive. Copy its HTML files, content.js, script.js, and styles.css into:
/home/druglord/Documents/Code/Sabbbir.github.io/

Merge the included assets folder into your existing assets folder. Do not delete your existing assets. Keep dp.jpg, apple-touch-icon.png, favicon-16x16.png, and favicon-32x32.png.

The package supplies assets/Sabbir_Ahmed_Academic_CV.pdf (the PDF you uploaded) and assets/favicon.svg. The site uses your existing assets/dp.jpg for the portrait; initials appear when it is unavailable.

## CV link fix

All CV links expect exactly:
assets/Sabbir_Ahmed_Academic_CV.pdf

Your listed filename, Sabbir_Ahmed_Academic_CV, does not have the .pdf extension. Either copy the PDF supplied in this archive into assets/ or, if your existing extensionless file is the correct PDF, rename it locally:

```bash
cd /home/druglord/Documents/Code/Sabbbir.github.io
mv assets/Sabbir_Ahmed_Academic_CV assets/Sabbir_Ahmed_Academic_CV.pdf
```

Use one method. Do not run the rename over an existing newer PDF. Filenames are case-sensitive on GitHub Pages. Commit the PDF together with the updated pages using your normal deployment workflow. Open the CV link after deployment to check that the PDF is included in the published files.

## Structure

About: short personal introduction, PhD interest, profile photo, selected research, working papers, then a small link to applied projects.
Research: image mixing/generalization, language-model research, thesis work, and working papers clearly identified as works in progress.
Projects: four project stories with conceptual illustrations, contributions, and outcomes.
CV: direct PDF link. cv.html is retained for older links.
Contact: direct email and the existing Formspree form.

## Updating

Edit index.html for the introduction, PhD statement, and research highlights. Edit research.html for research narratives. Edit content.js for working papers, project stories (CONTENT.work), and CV data. Replace assets/Sabbir_Ahmed_Academic_CV.pdf to update the downloadable CV.

The source contains no application-cycle or geographic restrictions on your PhD search. None were provided.

## Verification

JavaScript syntax and local page links checked. The bundled CV is a valid two-page PDF. Browser inspection covers desktop layout and project navigation; mobile-device verification remains outstanding. The profile photo and existing PNG icons were not attached and are not included in this archive. Keep them when merging. No contact-form message was submitted, and external repository links were not verified. This package has not been deployed to your live site.
