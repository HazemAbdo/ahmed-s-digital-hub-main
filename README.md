```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deploying to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Initial Setup

1. **Update the base path** in `vite.config.ts`:
   - If your repository name is `ahmed-s-digital-hub-main`, the base path is already set correctly
   - If your repository has a different name, update the `base` property in `vite.config.ts`:
     ```ts
     base: process.env.GITHUB_PAGES === "true" ? "/your-repo-name/" : "/",
     ```

2. **Enable GitHub Pages in your repository**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
   - Save the settings

3. **Push your code**:
   ```sh
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

4. **Wait for deployment**:
   - The GitHub Actions workflow will automatically build and deploy your site
   - You can monitor the progress in the **Actions** tab of your repository
   - Once complete, your site will be available at:
     `https://your-username.github.io/ahmed-s-digital-hub-main/`

### Manual Deployment (Alternative)

If you prefer to deploy manually:

1. Build the project:
   ```sh
   npm run build
   ```

2. Push the `dist` folder to the `gh-pages` branch:
   ```sh
   npm install -g gh-pages
   gh-pages -d dist
   ```

### Troubleshooting

- **404 errors**: Make sure the base path in `vite.config.ts` matches your repository name
- **Assets not loading**: Verify that all asset paths use relative paths or the configured base path
- **Routing issues**: The router is configured with `basename` to work with GitHub Pages subdirectories
