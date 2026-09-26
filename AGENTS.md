# 个人课程维护约定

本仓库维护 AI Engineering · Abel Track，使用中文、MkDocs Material 与 GitHub Pages。用户说“整理”即要求执行 docs/maintenance.md 的流程，不只是回复摘要。

## 每次开始

阅读 docs/maintenance.md、docs/changelog.md、docs/environment.md 及相关 Lesson。新增课程使用 docs/templates/lesson-template.md，保持 Phase / Lesson 稳定路径，并更新 mkdocs.yml。

## 事实与状态

- 只把用户明确反馈或对应学习操作的可核查结果写为已完成。
- 助手建议、示例输出、预期输出不构成执行证据；缺少反馈标为计划或待验证。
- 课程状态与本站维护环境分开。发现本机已有某工具、为了建站创建环境或 CI 使用 Python 3.12，都不能证明学习者完成了课程步骤。
- 首版 uv、课程 Python 3.12、课程 .venv、NumPy / Matplotlib 均保持计划；只有新的学习证据才能改变。
- Python 3.14.7 是历史用户反馈，不能描述为当前官方最新版。Beginner 最终 2/2 未获反馈。
- 来源中的截图无法读取时明确说明；不要杜撰截图、日志、仓库远程地址、学习日期或验证结果。
- 教材重写概念与真实经历，不公开完整私人聊天。用户要求对已学章节原样保存 Exercises 和 Post-Lesson Quiz；核实原课适用许可，保留作者、来源链接、版本和许可声明。已核对原仓库当前本地版本采用 MIT 许可。题目与个人作答、助手解析分开；缺失内容标为待核对，不杜撰。

## 表达与交付

保留具体学习节次、顺序和理由。用紧凑表格组织并列信息，不用删内容换取短页面。每课包含既定十三节模板。

更新 Lesson 后同步 Environment State、Roadmap / Phase 状态与 changelog。已完成部分不因后续计划而被覆盖。

运行 `python -m mkdocs build --strict`。确认导航和链接有效；修改主题布局时检查桌面及窄屏。PR 只检查，main 才部署。只有远程明确成功才报告线上已更新；没有连接远程时报告本地已更新并保留待发布状态。

不要把 API Key、.env、个人绝对目录或原始会话全文加入公开网站。不要为“整理”执行课程中尚未完成的安装。

## 原课练习与测验

每次“整理”同时检查已学章节的 Exercises 和 Post-Lesson Quiz。建立对应 `YY-lesson-practice.md` 并链接 Lesson 与导航。原样保留题干、代码、选项顺序、答案和解释；答案默认折叠。存原始来源快照、commit、收录日期及许可。原文有误或与 Mac 路线不符时只在独立补充说明纠正。记录用户首次作答、订正和错因，未作答保持未作答；区分内容已收录与知识已掌握。用户提供新截图或原文时据此补齐，不批量收录未学课程。

用户已确认 Test your understanding 与 Post-Lesson Quiz 内容相同。以后不单独建立 Test your understanding 栏目，也不添加该栏目的空白或待核对占位；相同题目只收录在 Post-Lesson Quiz。
