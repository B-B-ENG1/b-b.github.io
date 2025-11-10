# ENG1 Website

A simple website that act as the team's public portal, accessedable at [eng-1.bensonc.how](https://eng-1.bensonc.how)

## Getting the website running in stage 2
```bash
git clone https://github.com/B-B-ENG1/website.git
cd website
rm CNAME
```
Create a new repository named `<your-github-username>.github.io` on GitHub.

```bash
git remote add origin <your new repo url>
git add .
git commit -m "Remove team8 custom domain"
git push -u origin main
```

## Updating the files (local Git method)

If you already have a clone:

```bash
git pull
# Replace the PDF/ JAR files in the repository with your updated versions
git commit -m "Update files"
git push origin main
```

If you're cloning for the first time:

```bash
git clone https://github.com/B-B-ENG1/website.git
cd website
# Replace the PDF/ JAR files in the repository with your updated versions
git commit -m "Update files"
git push origin main
```

Set the remote URL:

```bash
git remote add origin https://github.com/B-B-ENG1/website.git 
```

## Updating the files (GitHub website method)

- Go to the relevent folder
- Click “Add file” → “Upload files”
- Drag and drop the new PDF/ JAR files (use the same filenames to replace existing ones)
- Commit directly to the main branch
