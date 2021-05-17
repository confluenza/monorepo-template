# Confluenza Monorepo Template

This is a monorepo template that allows the user to quickly start with a new monorepo with [Confluenza-based](https://confluenza.online) landing page and documentation browser.

If you are new to confluenza visit [Confluenza Homepage](https://confluenza.online). To learn more about the content of this repository, see `CONTRIBUTING.md`.

The content of this Markdown document can be used at your
top-level url.

To use it as the content of your landing page change the frontmatter in `workspaces/homepage/index.md` from:

```bash
---
path: /
title: Confluenza Monorepo Template
---
```

to

```bash
---
path: /
title: Confluenza Monorepo Template
content: ../../../../README.md
---
```

I am from `README.md`.