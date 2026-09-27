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

## 课前自测与动画

2026-09-26 用户提供课前自测与四层动画截图。前者显示两题正确、总分 2/2，首次作答过程未知。随后核对同一原仓库版本的 quiz.json、site/lesson-figures.js 与 site/figures-setup.js，补入课前两题并直接复用动画模块。完整源码副本与 MIT 许可保存在本站 assets/upstream/p00-l01/，适配代码独立维护。

## 第二课 Git 与协作

2026-09-27 用户提供原课链接，并明确反馈“这课我学完了，没有什么疑问”，据此记录学习完成；未推定具体练习过程或测验成绩。教学内容、Exercises、两道课前题与三道课后题来自本地固定版本 `8bc378c2e07777899322ae77cd0dde94cb12fab3` 的第二课；动画复用同版本 `s0-commit-dag`。保留[原文快照](assets/upstream/p00-l02/lesson.txt)、[测验数据](assets/upstream/p00-l02/quiz.json)与[MIT 许可](assets/upstream/p00-l02/LICENSE.txt)。

## 第四课 API 与密钥

2026-09-27 用户指定 P00-L04，依次讨论 SDK 自动读取密钥、Raw HTTP 请求结构和 Ship It 含义，随后要求整理。没有结课、调用或测验完成反馈。原课内容来自版本 `8bc378c2e07777899322ae77cd0dde94cb12fab3`；保存[原文](assets/upstream/p00-l04/lesson.txt)、[测验](assets/upstream/p00-l04/quiz.json)、[提示词](assets/upstream/p00-l04/prompt-api-troubleshooter.txt)与[MIT 许可](assets/upstream/p00-l04/LICENSE.txt)。动画复用同版本 s0-secret-inject。SDK 默认密钥行为已在讨论中核对 [Anthropic 官方说明](https://github.com/anthropics/anthropic-sdk-typescript#getting-started)。

## 第六课 Python 环境

2026-09-27 用户指定 P00-L06，提供环境脚本结束部分截图；截图显示根目录 `.venv`、Python 3.12.14、五个基础包、NumPy 运算与全部基础检查通过，PyTorch 未安装且为可选提示。随后讨论目录树、uv 创建与激活、NumPy 与 PyTorch、lock 文件和传递依赖。截图未展示 uv 检查，创建工具待核对。原课来源版本 `8bc378c2e07777899322ae77cd0dde94cb12fab3`，保存[原文](assets/upstream/p00-l06/lesson.txt)、[脚本](assets/upstream/p00-l06/env_setup.sh)、[测验](assets/upstream/p00-l06/quiz.json)及[MIT 许可](assets/upstream/p00-l06/LICENSE.txt)。未公开原截图中的个人绝对目录。
