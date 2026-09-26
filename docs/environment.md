# Environment State · 环境台账

**记录范围：截至原对话最后一次有效反馈。整理日期：2026-09-26。** 这是学习记录，不是本次对电脑做的完整扫描。更新状态必须附上新的学习证据。

## 已有与已完成

| 工具 / 配置 | 状态 | 版本 / 位置 | 作用与证据 |
|---|---|---|---|
| macOS / Mac Studio | 已有 | 系统版本未记录 | 学习设备；原对话上下文 |
| Terminal / zsh | 已有 | 版本未记录 | 输入命令、运行 shell |
| Apple Command Line Tools | 已有 | 版本未记录 | Apple 开发工具；历史解释及 Python 路径 |
| Git | 已有 | 版本未记录 | 版本控制；历史助手转述预检 PASS，原截图未读取 |
| 原课程本地仓库 | 已有 | `ai-engineering-from-scratch/` | 原对话记载已 clone；不是本教材仓库 |
| Homebrew | 已完成 | 前缀 `/opt/homebrew` | 安装软件；用户反馈前缀，历史总结确认安装 |
| Apple 工具链 Python | 保留 | 3.9.6；`/Library/Developer/CommandLineTools/usr/bin/python3` | 用户曾贴出版本与路径；未执行删除 |
| Homebrew Python | 已完成 | 历史反馈 3.14.7；`/opt/homebrew/bin/python3` | 用户明确反馈最终版本和解释器路径 |
| 历史 shell 的 Python 选择 | 当时已验证 | 曾指向 Homebrew Python | 排错后反馈证实当时结果；不能代表后来虚拟环境中的解释器 |
| Python 虚拟环境使用 | 已确认当次使用 | 版本、路径、创建工具待核对 | 用户反馈虚拟环境判断返回 `True`；提示符显示项目名 |
| `.zprofile` 持久配置 | 历史总结记载，待复核 | `brew shellenv` | 未见文件内容或新终端验证输出 |

版本号忠实保留历史反馈，**3.14.7 不代表已独立核实的发行版本或当前最新版**。历史命令和来源详见[首课](phases/00-setup-and-tooling/01-dev-environment.md)与[证据说明](sources.md)。

## 计划、暂缓与当前跳过

| 工具 / 验证 | 状态 | 目的 / 决策 |
|---|---|---|
| Beginner 预检再次运行 | 待验证 | 原对话只有预期 2/2，没有用户最终结果 |
| uv | 计划；未确认执行 | 管理 Python 版本、环境和包 |
| 课程 Python 3.12 | 计划；未确认执行 | 原对话建议的项目运行时 |
| 虚拟环境具体配置 | 待核对 | 已确认在虚拟环境中，但目录是否为 `.venv`、是否 Python 3.12、是否由 uv 创建尚不确定 |
| NumPy / Matplotlib | 计划；未确认执行 | 后续计算与可视化，按课需要安装 |
| Node.js / pnpm | 暂缓 | Web、MCP 和 TypeScript 阶段再准备 |
| Jupyter | 暂缓 | 当前路线非必需 |
| PyTorch / MPS | 暂缓 | 深度学习阶段再配置 Apple GPU 相关环境 |
| Docker | 暂缓 | 项目需要或第二遍工具课再学 |
| Rust | 当前跳过 | 历史 `rustc` 未找到；不是 Beginner 必需项 |
| Julia | 当前跳过 | 当前学习路线使用 Python |
| CUDA | 当前跳过 | 本机为 Apple Silicon，当前不走 NVIDIA CUDA 路线 |
| curl / wget | 未单独验证 | 不能因出现安装示例就认定已安装 |

## 更新格式

每次变化记录“工具、原状态、新状态、版本 / 路径、证据、所属 Lesson、整理日期”。只有发生变化时才改状态；不要把本网站构建用的 Python 或依赖写成课程练习成果。
