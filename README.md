# ENG1 Website

A simple website that displays five PDFs.

## Updating the PDFs (local Git)

If you already have a clone:

```bash
git pull
# Replace the PDF files in the repository with your updated versions
git commit -m "Update PDFs"
git push origin main
```

If you're cloning for the first time:

```bash
git clone https://github.com/B-B-ENG1/website.git
cd website
# Replace the PDF files in the repository with your updated versions
git commit -m "Update PDFs"
git push origin main
```

Set the remote URL:

```bash
git remote add origin https://github.com/B-B-ENG1/website.git 
```

## Updating the PDFs (GitHub website)

- Go to https://github.com/B-B-ENG1/website/tree/main/pdfs
- Click “Add file” → “Upload files”
- Drag and drop the new PDF files (use the same filenames to replace existing ones)
- Commit directly to the main branch
