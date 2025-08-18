# Netlify Deployment Instructions

## 🚀 Deploy to Netlify

### Option 1: Netlify Dashboard (Recommended)

1. **Sign up/Login to Netlify**

   - Go to [netlify.com](https://netlify.com)
   - Sign up with your GitHub account

2. **Connect Your Repository**

   - Click "New site from Git"
   - Choose "GitHub"
   - Select your `portfolio` repository

3. **Configure Build Settings**

   - **Build command**: `yarn build`
   - **Publish directory**: `public`
   - **Node version**: Will use the version from `.nvmrc` (16.20.2)

4. **Deploy**
   - Click "Deploy site"
   - Your site will be available at a URL like `https://amazing-name-123456.netlify.app`

### Option 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize Netlify in your project
netlify init

# Deploy
netlify deploy --prod
```

## 🔧 Configuration Files

- **`netlify.toml`**: Build settings and redirects
- **`.nvmrc`**: Node.js version (16.20.2)
- **`gatsby-config.js`**: Updated for Netlify deployment

## 🌍 Update Site URL

After deployment, update the `siteUrl` in `gatsby-config.js`:

```javascript
siteUrl: 'https://your-actual-netlify-url.netlify.app',
```

## ✨ Features Enabled

- ✅ Automatic deployments on git push
- ✅ Form handling (if you add forms)
- ✅ Function support
- ✅ CDN and performance optimization
- ✅ HTTPS by default
- ✅ Preview deployments for PRs

## 🎯 Custom Domain (Optional)

1. In Netlify dashboard, go to "Domain settings"
2. Add your custom domain
3. Update DNS settings as instructed
4. Update `siteUrl` in `gatsby-config.js`
