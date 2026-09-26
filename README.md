# ai-engineering-abel

Abel 的个人 AI Engineering 课程仓库。Markdown 是课程源文件，MkDocs Material 把它们生成可以按 Phase / Lesson 浏览的静态网站。

首版已整理 Phase 00 · Lesson 01 的基础安装和排错经历。**课程仍在进行中**：uv、课程 Python 3.12、课程 `.venv` 尚无执行确认，最后一次 Beginner 预检也待反馈。

## 从这里开始

- [课程首页](docs/index.md)
- [学习路线](docs/roadmap.md)
- [首课：建立 Mac 开发环境](docs/phases/00-setup-and-tooling/01-dev-environment.md)
- [环境台账](docs/environment.md)
- [以后说“整理”时的维护规则](docs/maintenance.md)
- [GitHub Pages 部署说明](docs/deployment.md)

## 本地预览

以下操作只为构建文档站，不代表完成课程里的 Python 项目环境练习。使用可用的 Python 3.12 或更新版本，在本仓库根目录执行：

```bash
python3 -m venv .venv-docs
source .venv-docs/bin/activate
python -m pip install -r requirements.txt
python -m mkdocs serve
```

打开 http://127.0.0.1:8000/ 。检查并生成静态文件：

```bash
python -m mkdocs build --strict
```

产物在 `site/`，不提交到 Git。GitHub Actions 使用独立的 Python 3.12 构建环境；与学习者电脑的安装状态无关。依赖升级需重新构建检查，不能只改版本号。

## 仓库结构

```text
ai-engineering-abel/
├── AGENTS.md                     # 给后续助手的维护约定
├── README.md
├── requirements.txt              # 文档工具固定版本
├── mkdocs.yml                    # 网站导航与主题
├── .github/workflows/pages.yml   # PR 检查 / main 发布
└── docs/
    ├── index.md
    ├── roadmap.md
    ├── environment.md
    ├── phases/
    │   ├── 00-setup-and-tooling/
    │   │   ├── index.md
    │   │   └── 01-dev-environment.md
    │   ├── 11-llm-engineering/index.md
    │   ├── 13-tools-and-protocols/index.md
    │   └── 14-agent-engineering/index.md
    ├── templates/lesson-template.md
    ├── maintenance.md
    ├── deployment.md
    ├── changelog.md
    ├── sources.md
    └── assets/
```

## 发布与维护

远程仓库：[AbelGuan/ai-engineering-abel](https://github.com/AbelGuan/ai-engineering-abel)。课程网站：[AI Engineering · Abel Track](https://abelguan.github.io/ai-engineering-abel/)。已启用 Pages 的 GitHub Actions 来源，并完成首次发布。推送到 `main` 会自动更新网站；PR 只做构建检查。

以后在这个仓库的任务中说“整理”，助手应更新对应课程、环境台账、路线状态和更新记录，执行严格构建，再报告本地更新和线上发布各自的结果。跨任务继续时，把本仓库作为项目打开；不能假设聊天记忆自动跨任务保留。
