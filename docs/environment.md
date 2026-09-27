# Environment State · 环境台账

**记录范围：截至原对话最后一次有效反馈。整理日期：2026-09-27。** 这是学习记录，不是本次对电脑做的完整扫描。更新状态必须附上新的学习证据。

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
| 课程根目录 `.venv` | 已验证 | Python 3.12.14；位于原课程仓库根目录 | 第六课截图显示 Venv 与 Python，基础检查通过；创建工具待核对 |
| 课程基础包 | 已验证截图时可导入 | NumPy 2.5.3、Matplotlib 3.11.2、scikit-learn 1.9.1、pandas 3.0.6、Jupyter（`jupyter_core`）5.9.1 | 截图列版本并显示 NumPy 矩阵运算、All checks passed |
| `.zprofile` 持久配置 | 历史总结记载，待复核 | `brew shellenv` | 未见文件内容或新终端验证输出 |

版本号忠实保留历史反馈，**3.14.7 不代表已独立核实的发行版本或当前最新版**。历史命令和来源详见[首课](phases/00-setup-and-tooling/01-dev-environment.md)与[证据说明](sources.md)。

## 计划、暂缓与当前跳过

| 工具 / 验证 | 状态 | 目的 / 决策 |
|---|---|---|
| Beginner 预检再次运行 | 待验证 | 原对话只有预期 2/2，没有用户最终结果 |
| uv | 安装状态待核对 | 脚本可在没有 uv 时回退；截图未展示前半段 |
| 虚拟环境创建工具 | 待核对 | 截图确认 `.venv` 与 Python 3.12.14，未展示脚本前半段；可能由 uv 或 venv 创建 |
| Node.js / pnpm | 暂缓 | Web、MCP 和 TypeScript 阶段再准备 |
| PyTorch / MPS | 按需稍后 | 第六课截图显示 PyTorch 未安装；不影响基础检查通过 |
| Docker | 暂缓 | 项目需要或第二遍工具课再学 |
| Rust | 当前跳过 | 历史 `rustc` 未找到；不是 Beginner 必需项 |
| Julia | 当前跳过 | 当前学习路线使用 Python |
| CUDA | 当前跳过 | 本机为 Apple Silicon，当前不走 NVIDIA CUDA 路线 |
| curl / wget | 未单独验证 | 不能因出现安装示例就认定已安装 |

## 更新格式

每次变化记录“工具、原状态、新状态、版本 / 路径、证据、所属 Lesson、整理日期”。只有发生变化时才改状态；不要把本网站构建用的 Python 或依赖写成课程练习成果。

## 2026-09-27 · 第二课学习更新

用户确认 P00-L02 Git 与协作已学完，暂无疑问。本次没有新增安装、Git 身份配置或练习命令输出，工具版本和安装状态不变；第一课的待验证项继续保留。

## 2026-09-27 · 第四课 API 学习更新

当前已进入 P00-L04。本次仅有概念讨论：Anthropic Python / TypeScript SDK 安装、API key 配置、`.env` 加载与首次调用均未获得执行反馈。没有新增已安装工具或账号配置记录，也没有保存任何真实密钥；既有环境状态保持不变。

## 2026-09-27 · 第六课环境检查

用户提供 `env_setup.sh` 结束部分截图：根目录 `.venv`、Python 3.12.14、五个基础包版本、NumPy 矩阵乘法和 `[PASS] All checks passed` 已确认。PyTorch 显示按需稍后安装。截图未含脚本开头，不能推定 uv 版本或最初创建方式；本课程第六课其他练习、lock 文件操作和测验未获执行反馈。
