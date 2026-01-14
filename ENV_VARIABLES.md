# Environment Variables Configuration

This file explains how to configure environment variables for the TextUtils application.

## Developer Information

The About page displays developer information that can be customized using environment variables.

### Setup Instructions

1. Copy the `.env.example` file to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and update the values:
   ```
   REACT_APP_GITHUB_USERNAME=your-github-username
   REACT_APP_GITHUB_REPO_URL=https://github.com/your-username/your-repo
   ```

3. Restart the development server for changes to take effect:
   ```bash
   npm start
   ```

### Available Environment Variables

| Variable | Description | Default Value |
|----------|-------------|---------------|
| `REACT_APP_GITHUB_USERNAME` | Your GitHub username | `krn1904` |
| `REACT_APP_GITHUB_REPO_URL` | Full URL to the project repository | `https://github.com/krn1904/TextUtils` |

### Notes

- Environment variables in React must be prefixed with `REACT_APP_` to be accessible in the client-side code
- The `.env.local` file is ignored by git (listed in `.gitignore`) to keep your personal information private
- Changes to environment variables require a server restart to take effect
- If no `.env.local` file is present, the application will use the default values from the code

## Production Deployment

For production deployments (e.g., GitHub Pages, Netlify, Vercel), you need to set these environment variables in your deployment platform's configuration:

- **GitHub Pages**: Set them in your repository secrets or use the default values
- **Netlify**: Set them in Site Settings → Build & Deploy → Environment
- **Vercel**: Set them in Project Settings → Environment Variables
