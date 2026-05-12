# Hongyi Zhang — Academic Homepage

Source code for the personal academic homepage of **Hongyi (Jack) Zhang (张鸿毅)**, M.S. student in Data Analytics and Statistics at Washington University in St. Louis and Research Assistant at the WashU Medicine Medical AI Lab.

**Live site:** [https://Lancelot-Zhang.github.io](https://Lancelot-Zhang.github.io)

The site is a Jekyll project deployed via GitHub Pages, based on the [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) template, with custom content, layout adjustments, and bilingual personal information.

---

## About the Site

The homepage presents:

- **About** — research interests in AI, machine learning, mathematical modeling, and biomedical informatics.
- **News** — recent academic milestones and awards.
- **Education** — degree programs at WashU and SUSTech.
- **Publications** — journal articles, preprints, and the M.S. thesis.
- **Research Experience** — affiliations with WashU Medicine, USC, Duke, and CICS.
- **Teaching** — TA and grader positions at WashU and SUSTech.
- **Industry Experience** — AI agent development at Spect AI (Nonlinear) and earlier internships.
- **Honors & Awards**, **Exchange**, **Activities**, **Hobbies**.

Contact: [hongyi.zhang@wustl.edu](mailto:hongyi.zhang@wustl.edu) · [hongyi.zhang.cn@gmail.com](mailto:hongyi.zhang.cn@gmail.com)
Profiles: [Google Scholar](https://scholar.google.com/citations?user=3Z88MpwAAAAJ) · [ORCID](https://orcid.org/0009-0002-4307-6331) · [LinkedIn](https://www.linkedin.com/in/hongyi-zhang-cn/) · [MIR](https://www.mir.wustl.edu/employees/hongyi-zhang/)

---

## Tech Stack

- [Jekyll](https://jekyllrb.com/) — static site generator
- [Kramdown](https://kramdown.gettalong.org/) + [Rouge](https://github.com/rouge-ruby/rouge) — Markdown and syntax highlighting
- [Sass / SCSS](https://sass-lang.com/) — styling
- GitHub Pages — hosting and CI
- GitHub Actions — automatic Google Scholar citation updates

---

## Project Structure

```
.
├── _config.yml              # Site settings, author profile, social links
├── _pages/about.md          # All homepage section content (About, News, Pubs, …)
├── _data/navigation.yml     # Top navigation bar
├── _includes/               # HTML partials (sidebar, masthead, head, scripts)
├── _layouts/                # Page templates
├── _sass/                   # SCSS modules
├── assets/                  # Compiled CSS / JS / fonts
├── images/                  # Avatar, paper thumbnails, figures
├── files/                   # CV, slides, and other downloadable assets
├── google_scholar_crawler/  # GitHub Action that refreshes citation counts
├── CUSTOMIZE.md             # 中文定制指南 (Chinese customization guide)
└── README.md
```

---

## Editing Content

Almost everything you would want to update lives in three files:

| File | What it controls |
|------|------------------|
| `_config.yml` | Site title, author name (English + Chinese), avatar, email, GitHub / Scholar / ORCID / LinkedIn handles, SEO. |
| `_pages/about.md` | All homepage sections — About, News, Education, Publications, Research, Teaching, Industry, Honors, Exchange, Activities, Hobbies. |
| `_data/navigation.yml` | The top navigation bar. Remove or reorder entries to match the sections in `about.md`. |

A Chinese step-by-step guide is in [`CUSTOMIZE.md`](./CUSTOMIZE.md).

---

## Local Development

Requires Ruby ≥ 2.7 and Bundler.

```bash
# Install dependencies
bundle install

# Run a local server with live reload
bundle exec jekyll serve --livereload
# or
./run_server.sh
```

The site will be available at [http://127.0.0.1:4000](http://127.0.0.1:4000).

---

## Deployment

1. Push to the GitHub repository `Lancelot-Zhang/Lancelot-Zhang.github.io` (already configured under `repository:` in `_config.yml`).
2. GitHub Pages builds the site automatically from the `main` branch.
3. The published site is available at [https://Lancelot-Zhang.github.io](https://Lancelot-Zhang.github.io).

### Google Scholar Citation Updates

The `google_scholar_crawler/` workflow refreshes citation counts on a schedule. To enable it:

1. Set `google_scholar_stats_enabled: true` in `_config.yml`.
2. Add `GOOGLE_SCHOLAR_ID` as a repository secret (Settings → Secrets and variables → Actions).
3. Make sure GitHub Actions is enabled for the repository.

---

## Acknowledgements

This site is built on the excellent [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) template by [RayeRen](https://github.com/RayeRen), which is itself based on the [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) Jekyll theme. Both are MIT-licensed; the original `LICENSE` is preserved in this repository.

---

## License

Code: MIT (see `LICENSE`).
Content (text, publications, images, CV, and other personal materials): © Hongyi Zhang. All rights reserved.
