# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Run from this theme directory (`themes/lzaplata-autostyl/`):

```bash
npm install          # Install dependencies (first time setup)
npx mix              # Compile assets once
npx mix watch        # Watch and recompile on changes
```

After installing the theme for the first time, seed blueprints and data:
```bash
php artisan theme:seed lzaplata-autostyl
```

## Architecture

### Asset Pipeline

`webpack.mix.js` compiles:
- **SASS** → `assets/src/sass/theme.sass` → `assets/css/theme.css`
- **JS** → `assets/src/js/theme.js` → `assets/js/theme.js`
- Third-party CSS/JS (Bootstrap, Swiper, LightGallery) are copied from `node_modules/` to `assets/css/` and `assets/js/` separately

The compiled output files are committed; do not manually edit anything under `assets/css/` or `assets/js/` (except `src/`).

### SASS Structure

The entry point is `assets/src/sass/theme.sass`. The design token and Bootstrap override pattern:

1. `_colors.sass` — raw color palette variables (`$red-500`, `$gray-400`, etc.)
2. `_custom.scss` — Bootstrap variable overrides using the color palette; also imports all Bootstrap SCSS modules selectively. **All visual theming starts here.**
3. `theme.sass` — imports `_custom.scss` (via `@import "custom"`) and then all component-specific partials (`_header.sass`, `_footer.sass`, etc.)

When adding new styles: create a new partial `_component-name.sass` and `@import` it in `theme.sass`. Override Bootstrap variables in `_custom.scss` before they cascade.

### Phosphor Icons (opt-in)

Phosphor icons are disabled by default. To enable:
1. Uncomment the `.css()` line for `@phosphor-icons/web` in `webpack.mix.js`
2. Uncomment the `<link>` for `icons.css` in `layouts/default.htm`
3. Recompile with `npx mix`

Material Symbols (Google) are the default icon font, used via the `.material-symbol` component class.

### Template Structure

- `layouts/default.htm` — single layout; loads all CSS/JS bundles, wraps `{% page %}` with header/footer partials
- `partials/header.htm`, `partials/footer.htm`, `partials/offcanvas.htm` — global chrome
- `partials/` subdirectories (`_block/`, `_post/`, etc.) — reusable sub-partials included by pages or other partials
- `pages/` — one `.htm` file per page type; each declares its October components in the `[ini]` section before `==`

### Theme Configuration

Contact details, logos, social links, and site-wide settings are managed via `theme.yaml` form fields (editable in the October CMS admin under Themes → Customize). Access them in Twig as `this.theme.<field_name>`.

### Plugin Dependencies

This theme requires these October CMS plugins (declared in `theme.yaml`):
- `lzaplata.pages` — slug-based routing, breadcrumbs, multi-site URL translation
- `lzaplata.gallery`, `lzaplata.files`, `lzaplata.pricelists`, `lzaplata.openinghours`, `lzaplata.timelines`, `lzaplata.flashmessages` — content plugins
- `rainlab.pages`, `rainlab.blog`, `rainlab.translate` — standard RainLab plugins
- `initbiz.seostorm` — SEO component (`{% component "seo" %}` in the layout)
- `janvince.smallgdpr`, `janvince.smallcontactform`, `janvince.smallextensions` — GDPR, contact form, utilities