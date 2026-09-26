# 来源与证据

这套教材根据个人学习对话重写，不复制原课程全文。首次整理于 2026-09-26，不推定所有操作都在这一天完成。

## 学习记录来源

原对话：《确认523节课程》。维护定位 ID：`6ab65241-f158-83ea-95f3-313f193625d6`。该 ID 只用于后续查找，本站不附完整私人对话。

| 事实 | 可读取依据 | 处理方式 |
|---|---|---|
| 最初找不到 brew | 用户文字反馈 `command not found: brew` | 记录现象；不将它等同于完整安装扫描 |
| Homebrew 前缀与候选 Python 路径 | 用户贴出 `/opt/homebrew` 和 `which` 结果 | 记录为历史反馈 |
| 新旧 Python 并存 | 用户贴出 3.14.7、3.9.6 与旧路径 | 如实保留，不把版本称作官方最新版 |
| 排错后默认解释器 | 用户反馈“得到了Python 3.14.7 /opt/homebrew/bin/python3” | 当前 shell 的结果已确认 |
| Homebrew 安装、PATH 配置、rehash 的过程 | 助手步骤、历史总结与后续用户输出 | 整理过程，但不伪造完整逐命令日志 |
| Git PASS、初始预检 1/2、Rust 未找到 | 历史助手对用户截图的解释 | 明确为转述；本次未读取截图原图 |
| 最终预检 2/2 | 助手给出的预期输出 | 保持待验证 |
| uv / Python 3.12 / 项目依赖 | 助手建议，没有对应执行反馈 | 不计为已完成 |
| Python 虚拟环境 | 后续用户反馈判断返回 `True`，提示符为项目名 | 确认当次使用虚拟环境；版本、路径、创建方式待核对 |

## 原课程定位

- [原课程目录](https://aiengineeringfromscratch.com/index.html?lang=zh#contents)
- [原课程开发环境页](https://aiengineeringfromscratch.com/lesson?path=phases%2F00-setup-and-tooling%2F01-dev-environment&learningPath=software-engineering-fundamentals)

上述链接用于追溯历史参考，不表示本次逐项审核了原站的最新课程或课数。个人路线的节次保留历史规划，开始新课时再确认。

## 网站技术依据

- [Material for MkDocs：创建站点](https://squidfunk.github.io/mkdocs-material/creating-your-site/)
- [Material for MkDocs：发布站点](https://squidfunk.github.io/mkdocs-material/publishing-your-site/)
- [GitHub Pages：自定义工作流](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

后续更正事实时保留原记录的来源和更正依据，避免把“后来验证的新状态”误写成“当时已经做过”。

## 第一课教学骨架重整

2026-09-26 对照原仓库固定版本 `8bc378c2e07777899322ae77cd0dde94cb12fab3` 的 `phases/00-setup-and-tooling/01-dev-environment/docs/en.md`，保留 Learning Objectives、The Problem、The Concept、Build It 七步、Use It、Ship It 与 Exercises 的教学顺序。中文说明及个人经历另行组织；来源作者 Rohit Ghumare，版权与 [MIT 许可](assets/upstream/p00-l01/LICENSE.txt) 保留。当前进度没有因此变为结课。
