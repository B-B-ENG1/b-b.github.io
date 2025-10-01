# ENG1 Website

A simple website that act as the team's public portal, accessedable at [ben.bensonchow.cf](https://ben.bensonchow.cf)

## Updating the PDFs (local Git)

If you already have a clone:

```bash
git pull
# Replace the PDF files in the repository with your updated versions
git commit -m "Update files"
git push origin main
```

If you're cloning for the first time:

```bash
git clone https://github.com/B-B-ENG1/website.git
cd website
# Replace the PDF files in the repository with your updated versions
git commit -m "Update files"
git push origin main
```

Set the remote URL:

```bash
git remote add origin https://github.com/B-B-ENG1/website.git 
```

## Updating the files (GitHub website)

- Go to the relevent folder
- Click “Add file” → “Upload files”
- Drag and drop the new PDF files (use the same filenames to replace existing ones)
- Commit directly to the main branch
