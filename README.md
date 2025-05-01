[![Netlify Status](https://api.netlify.com/api/v1/badges/03ed07de-d790-455b-ba55-342fda398d50/deploy-status?branch=site/aizu-www-olycms.sad.olympus.co.jp)](https://app.netlify.com/sites/oly-apac-template/deploys)

# Netlify Static Site Template
This repository can be used for migrating static sites hosted on Apache webservers to netlify.

## Notes
- Place all static site content within the `src` directory.
- The `.github/workflows` directory contains a workflow for triggering Netlify builds via a GitHub bot for changes made by non-Netlify account holders. This is optional for repositories that inherit this template.
- For sites using Git LFS, set the `GIT_LFS_ENABLED` environment variable in the Netlify UI. See [Netlify's documentation](https://docs.netlify.com/configure-builds/environment-variables/#netlify-configuration-variables) for details.
- Branch Deploy URL Pattern: `https://site-<SITE_NAME_DOT_REPLACED_WITH_MINUS>--oly-apac-template.netlify.app/`