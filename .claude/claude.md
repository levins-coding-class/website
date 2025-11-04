# Claude Development Guide for coding-class

## Project Overview

This is a **Docusaurus** website for a children's coding course. The site is configured in **docs-only mode** (no landing page, docs are at the root `/`).

## Quick Start

```bash
# ALWAYS run this first after cloning or when dependencies change!
npm install

# Development server
npm start

# Build for production
npm run build

# Test production build locally
npm run serve
```

## Key Information

### Tech Stack
- **Docusaurus 3.8.1** (static site generator)
- **React 19.0**
- **TypeScript 5.6**
- **Node.js 22+** (required)

### Project Structure
```
coding-class/
├── docs/                      # Documentation content (Markdown)
│   ├── intro.md              # Homepage (slug: /)
│   ├── kurs-inhalte.md       # Course content
│   └── info-fuer-eltern.md   # Parent information
├── src/                       # React components (minimal usage)
├── static/                    # Static assets
├── docusaurus.config.ts       # Main configuration
├── sidebars.ts               # Sidebar configuration
└── package.json              # Dependencies and scripts
```

### Configuration Notes

**Docs-Only Mode:**
- `routeBasePath: '/'` in docusaurus.config.ts
- No landing page (src/pages/index.tsx removed)
- Blog disabled: `blog: false`
- Homepage is `/` (intro.md with `slug: /`)

**Language:**
- Default locale: `de` (German)
- All content is in German
- Parent documentation uses informal "Du" form

**Important URLs:**
- `/` → Homepage (intro.md)
- `/kurs-inhalte` → Course content
- `/info-fuer-eltern` → Parent information

## Common Tasks

### Adding New Documentation

1. Create markdown file in `docs/`
2. Add frontmatter with `sidebar_position`:
```yaml
---
sidebar_position: 4
---
```
3. Links use absolute paths: `/page-name` (not `/docs/page-name`)

### Fixing Broken Links

- Internal links should be: `/page-name` (no `/docs/` prefix)
- Always run `npm run build` to check for broken links
- Docusaurus will fail the build on broken links

### Modifying Navigation

- Edit `docusaurus.config.ts` → `themeConfig.navbar`
- Edit `docusaurus.config.ts` → `themeConfig.footer`
- Sidebar is auto-generated from `docs/` folder structure

## Build & Deployment

### Testing Locally
```bash
npm install       # Install dependencies
npm run build     # Build production files
npm run serve     # Test on http://localhost:3000
```

### Docker Deployment
```bash
docker compose up --build
# Access at http://localhost:8080
```

### GitHub Pages Deployment
```bash
npm run build
npm run deploy    # Requires GIT_USER env variable
```

## Common Issues

### Build Script Error
**Problem:** `cp node_modules/pocketbase/...` fails
**Solution:** This was removed. Build script should just be `docusaurus build`

### Broken Links
**Problem:** Links to `/docs/...` fail in docs-only mode
**Solution:** Use `/page-name` instead of `/docs/page-name`

### Missing node_modules
**Problem:** `docusaurus: not found`
**Solution:** Run `npm install` first!

### Duplicate Routes Warning
**Problem:** "Attempting to create page at /, but page already exists"
**Solution:** Remove `src/pages/index.tsx` - we use docs-only mode

## Content Guidelines

### Target Audience
- **Children** (Schüler:innen) - informal language
- **Parents** (Eltern) - informal "Du" form

### Formatting Rules

**Admonitions for Hints and Notes:**
- **ALWAYS** use Docusaurus admonitions for hints, notes, warnings, etc.
- **NEVER** use bold text like "**Hinweis:**" or "**Wichtig:**"
- Available admonition types: `:::note`, `:::tip`, `:::info`, `:::warning`, `:::danger`

Example:
```markdown
:::note Hinweis
Dieser Kurs richtet sich vorrangig an Kinder, deren Eltern den Kursleiter persönlich kennen.
:::

:::warning Wichtig
Speichere deinen Benutzernamen und dein Passwort gut ab!
:::
```

### Key Messages
- **Free course** (kostenlos)
- **Real developer tools** (no Scratch/visual programming)
- **Linux strongly recommended** (Windows/WSL only as fallback)
- **Physical keyboard + mouse required** (tablets NOT supported)

### Hardware Requirements
- ✅ Linux (strongly recommended)
- ✅ macOS (works well)
- ⚠️ Windows + WSL (only as fallback)
- ❌ Tablets/iPads (NOT supported)
- ✅ Physical keyboard + mouse required

## Development Workflow

1. **Always start with:** `npm install`
2. Make changes to markdown files in `docs/`
3. Test with `npm start`
4. Build to check for errors: `npm run build`
5. Commit and push changes
6. Deploy via Docker or GitHub Pages

## Repository Information

- **GitHub:** https://github.com/levino/coding-class
- **Branch naming:** `claude/...` branches for development
- **Main branch:** (to be determined)

## Notes for Claude

- **ALWAYS** run `npm install` before any build operations
- Check for broken links by running `npm run build`
- Docs-only mode means NO separate landing page
- All internal links are `/page-name`, not `/docs/page-name`
- The homepage is `docs/intro.md` with `slug: /`
- Blog is disabled, don't create blog content
