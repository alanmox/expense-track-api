# Push to GitHub

## 1. Create a repository on GitHub

- Go to https://github.com/new
- Name: `expense-track-api`
- Do **not** initialize with README, .gitignore, or license (the repo already has them)

## 2. Push the project

```bash
# Set the remote
git remote add origin https://github.com/<YOUR_USERNAME>/expense-track-api.git

# Push
git push -u origin main
```

If your default branch is `master` instead of `main`:

```bash
git branch -M main
git push -u origin main
```

## 3. Verify

Visit `https://github.com/<YOUR_USERNAME>/expense-track-api` to confirm all files are uploaded.
