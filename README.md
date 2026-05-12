# Personal Academic Homepage

This is a personal academic homepage based on [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io).

## Edit Your Information

Most content lives in three files:

- `_config.yml`: site title, author profile, avatar, email, GitHub, Scholar, ORCID, LinkedIn, and SEO settings.
- `_pages/about.md`: homepage sections such as about, news, publications, projects, honors, education, and experience.
- `_data/navigation.yml`: top navigation links.

See `CUSTOMIZE.md` for a Chinese step-by-step guide.

## Local Preview

Install Ruby and Bundler, then run:

```bash
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000`.

## Deploy

Create a GitHub repository named:

```text
hongyi-zhang.github.io
```

The `repository` field in `_config.yml` is already set to `hongyi-zhang/hongyi-zhang.github.io`. Push this project to that repository, and GitHub Pages will publish it at:

```text
https://hongyi-zhang.github.io
```

## Credit

This site keeps the structure and MIT-licensed assets from AcadHomepage. Keep the original `LICENSE` file when publishing your version.
