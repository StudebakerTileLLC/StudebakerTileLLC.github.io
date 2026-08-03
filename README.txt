STUDEBAKER TILE & HOME RENOVATION WEBSITE

FILES
- index.html: website content
- styles.css: colors, spacing, and mobile design
- script.js: mobile menu and estimate email form
- assets/logo.png: business logo

UPLOAD TO GITHUB
1. Open your StudebakerTileLLC.github.io repository.
2. Select Add file > Upload files.
3. Drag index.html, styles.css, script.js, README.txt, and the assets folder into GitHub.
4. Commit the changes to the main branch.
5. Open Settings > Pages.
6. Set Source to Deploy from a branch, Branch to main, and Folder to /(root).
7. Save and wait a few minutes.

ADDING PHOTOS LATER
1. Put your photos inside the assets folder.
2. Give them simple names such as bathroom-1.jpg, shower-1.jpg, deck-1.jpg.
3. In index.html, replace a placeholder block such as:
   <div class="gallery-item placeholder-photo"><span>Custom Shower</span></div>
   with:
   <div class="gallery-item photo-item" style="background-image:url('assets/shower-1.jpg')"><span>Custom Shower</span></div>
4. Add this line near the gallery styles in styles.css if it is not already present:
   .photo-item { background-size: cover; background-position: center; color: white; display:flex; align-items:end; padding:22px; }

CONTACT FORM
The form opens the visitor's email program with a prepared message. It requires no subscription. Later, it can be connected to a dedicated form service if desired.

CURRENT PLACEHOLDERS
- Project photography
- Selected Google review text
- Any additional services you want listed
