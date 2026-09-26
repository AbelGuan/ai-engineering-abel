# GitHub Pages 部署

本仓库使用 **MkDocs Material → 静态网站 → GitHub Pages**。当前提供完整配置；尚未创建远程仓库，也没有公网课程地址。

## 第一次发布

1. 在 GitHub 创建名为 `ai-engineering-abel` 的空仓库，选择适合自己的可见性，不预生成 README，以免与本地初始文件冲突。Pages 的可用性取决于账户计划和仓库可见性，见 [GitHub 官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。
2. 在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。本项目不使用 `gh-pages` 分支发布方式。
3. 将这个本地仓库连接到远程并推送 `main`。下面的 `YOUR_GITHUB_OWNER` 必须替换为真实账号或组织，不是已经配置的地址。

```bash
# 在 ai-engineering-abel 根目录执行。
# 交付目录已初始化为本地 Git 仓库；若从不含 .git 的压缩包开始，先执行：
git init -b main
git add .
git commit -m "Create personal AI engineering course"
git remote add origin https://github.com/YOUR_GITHUB_OWNER/ai-engineering-abel.git
git push -u origin main
```

已有提交时跳过 `git commit`；已有 `origin` 时先用 `git remote -v` 核对，不盲目重复添加。Git 身份与 GitHub 登录使用你自己的设置，不填写示例身份。

4. 打开 **Actions → Build and deploy course**。等待 `build` 和 `deploy` 成功；若 Pages 在第一次失败后才启用，重新运行工作流。
5. 从 **Settings → Pages** 或部署环境获取实际地址。普通项目地址通常是 `https://YOUR_GITHUB_OWNER.github.io/ai-engineering-abel/`，最终以 GitHub 返回值为准。

## 自动发布如何工作

| 事件 | 行为 |
|---|---|
| 推送到 `main` | 安装固定文档依赖，严格构建，上传站点产物，部署 Pages |
| 针对 `main` 的 Pull Request | 只构建检查，不发布 |
| 在 `main` 手动运行工作流 | 构建并部署 |
| 其他分支手动运行 | 仅构建，不部署 |

工作流通过 GitHub Pages 元数据自动获得项目网址，写入 `SITE_URL`，所以适配 `/ai-engineering-abel/` 子路径；不需要在配置里猜测账号名。文档内部使用相对链接。

构建任务仅需要读取仓库和 Pages 元数据；部署任务单独获得 `pages: write` 与 `id-token: write`。无需保存个人访问令牌。采用 GitHub 官方 [Pages 自定义工作流](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) 的配置、上传与部署动作。

## 本地检查与预览

以下是网站维护操作，与课程 `.venv` 状态无关。在本仓库根目录使用支持的 Python（建议 3.12 或更新）执行：

```bash
python3 -m venv .venv-docs
source .venv-docs/bin/activate
python -m pip install -r requirements.txt
python -m mkdocs build --strict
python -m mkdocs serve
```

打开 `http://127.0.0.1:8000/`。不要直接双击构建后的 HTML 来判断网站是否正常；使用本地服务器。停止预览按 `Ctrl+C`。

## 排错与回退

| 现象 | 先检查 |
|---|---|
| 构建失败 | Actions 的首个错误；缺失页面、锚点、依赖是否匹配 |
| Pages 配置失败 | 是否已在 Settings → Pages 启用 GitHub Actions |
| 部署被阻止 | `github-pages` 环境规则是否允许 `main`，仓库 Actions 是否启用 |
| 页面 404 | 是否有成功部署；使用 GitHub 返回的实际项目网址 |
| 样式或链接丢失 | `SITE_URL` 是否带正确子路径；文档链接是否写成根路径 |

发布出错时，保留本地课程；修正后重新推送。需要撤销某次课程改动时，用 Git 创建回退提交，再由 `main` 发布，不删历史。

参考：[Material 官方发布文档](https://squidfunk.github.io/mkdocs-material/publishing-your-site/)。本仓库采用 GitHub 原生 Pages artifact 方式，而不是该文档里的分支发布示例。
