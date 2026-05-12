# 个人主页定制指南

这是基于 AcadHomepage 模板改出的个人网站版本。你主要需要改下面几个地方。

## 1. 基本信息

编辑 `_config.yml`：

- `title`: 网站标题，通常写你的姓名。
- `description`: 左侧个人信息栏的一句话简介。
- `repository`: 当前已设为 `Lancelot-Zhang/Lancelot-Zhang.github.io`。
- `author.name`: 你的姓名。
- `author.avatar`: 头像路径。默认使用 `images/android-chrome-512x512.png`，你可以替换成自己的头像。
- `author.bio`: 你的身份，例如 `Ph.D. Student, Department of ...`。
- `author.location`: 所在城市。
- `author.employer`: 学校、实验室或公司。
- `author.email`: 邮箱。
- `author.github`, `author.linkedin`, `author.orcid`, `author.googlescholar`: 按需填写。

## 2. 首页内容

编辑 `_pages/about.md`：

- `About`: 自我介绍和研究方向。
- `News`: 最近动态。
- `Publications`: 论文列表。
- `Projects`: 项目。
- `Honors and Awards`: 奖项。
- `Education`: 教育经历。
- `Experience`: 实习、工作或科研经历。
- `Invited Talks` 和 `Service`: 没有内容时可以删掉。

## 3. 顶部导航

编辑 `_data/navigation.yml`。如果你删除了首页里的某个 section，也可以删除这里对应的导航项。

## 4. Google Scholar 引用统计

现在默认关闭：

```yml
google_scholar_stats_enabled : false
```

如果你想启用自动引用统计：

1. 在 `_config.yml` 里填好 `repository` 和 `author.googlescholar`。
2. 把 `google_scholar_stats_enabled` 改成 `true`。
3. 在 GitHub 仓库的 `Settings -> Secrets and variables -> Actions` 中添加 `GOOGLE_SCHOLAR_ID`。
4. 启用 GitHub Actions。

## 5. 发布

1. 在 GitHub 新建或改名仓库为 `Lancelot-Zhang.github.io`。
2. 把本项目推送到该仓库。
3. 等 GitHub Pages 构建完成后，访问 `https://Lancelot-Zhang.github.io`。
