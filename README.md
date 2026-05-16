# Hongyi Zhang Academic Homepage

Source code for the personal academic homepage of **Hongyi (Jack) Zhang**, M.S. student in Data Analytics and Statistics at Washington University in St. Louis and Research Assistant at the WashU Medical AI Lab.

**Live site:** [https://Lancelot-Zhang.github.io](https://Lancelot-Zhang.github.io)

This is a Jekyll site deployed with GitHub Pages. It is based on the [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) template, with customized homepage content, sidebar profile links, navigation, publication formatting, and a visitor map widget.

## Current Homepage Sections

- **About**: short academic bio, research interests, open-source interests, and contact emails.
- **Education**: degree programs at WashU and SUSTech.
- **Research**: research assistant roles at WashU, USC, CICS, Duke, and SUSTech.
- **Honors**: awards and distinctions with abbreviated issuing organizations.
- **Publication**: thesis, papers, DOI links, and Google Scholar profile link.
- **Industry**: AI agent development and data analysis experience.
- **Teaching**: TA, lead TA, and grader roles.
- **Projects**: MIT project-based learning and NC State data science program.
- **Leadership**: volunteer, community, and student organization roles.
- **Hobbies**: personal interests.
- **Visitor Map**: MapMyVisitors widget at the bottom of the homepage.

The News section is intentionally kept in `_pages/about.md` as a Liquid comment, so the content remains in source control but is not displayed on the live homepage.

## Tech Stack

- [Jekyll](https://jekyllrb.com/) for static site generation
- [Kramdown](https://kramdown.gettalong.org/) and [Rouge](https://github.com/rouge-ruby/rouge) for Markdown and syntax highlighting
- Sass / SCSS for styling
- GitHub Pages for hosting
- GitHub Actions for optional Google Scholar citation updates

## Project Structure

```text
.
|-- _config.yml              # Site settings, author profile, social links, SEO
|-- _pages/about.md          # Main homepage content
|-- _data/navigation.yml     # Top navigation bar
|-- _includes/               # HTML partials, including the author sidebar
|-- _layouts/                # Page templates
|-- _sass/                   # SCSS modules
|-- assets/                  # Compiled CSS, JavaScript, and fonts
|-- images/                  # Avatar, thumbnails, and figures
|-- files/                   # CV, slides, and downloadable assets
|-- google_scholar_crawler/  # Citation update workflow support
|-- CUSTOMIZE.md             # Customization guide
`-- README.md
```

## Editing Guide

Most homepage updates are made in these files:

| File | Purpose |
|------|---------|
| `_pages/about.md` | Main page content, including About, Education, Research, Honors, Publication, Industry, Teaching, Projects, Leadership, Hobbies, and the visitor map. |
| `_data/navigation.yml` | Navigation labels and section anchors. |
| `_includes/author-profile.html` | Left sidebar profile and social links. |
| `_config.yml` | Site metadata, author profile data, avatar, and account links. |

When adding a new visible section, add the section heading in `_pages/about.md` and, if it should appear in the menu, add the matching anchor in `_data/navigation.yml`.

## Visitor Map

The homepage uses a MapMyVisitors widget near the bottom of `_pages/about.md`. The widget is wrapped in a small `.visitor-map` container so it displays at a reduced size and leaves extra spacing below it.

## Deployment

1. Commit changes to the `main` branch.
2. Push to `Lancelot-Zhang/Lancelot-Zhang.github.io`.
3. GitHub Pages builds and publishes the site automatically.

## Acknowledgements

This site is built on the [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) template by [RayeRen](https://github.com/RayeRen), which is based on the [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) Jekyll theme.

## License

Code: MIT, see `LICENSE`.

Personal content, publications, images, CV, and other materials: Copyright Hongyi Zhang. All rights reserved.
