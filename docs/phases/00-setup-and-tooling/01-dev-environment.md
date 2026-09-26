---
lesson_id: P00-L01
status: in-progress
updated: 2026-09-26
---

# Lesson 01 · 建立你的 Mac AI 开发环境

**Phase 00 · Setup & Tooling｜状态：进行中｜基础安装已整理，项目环境待继续。**

!!! info "先看结论"
    已有 Git 和 Apple 开发工具，已安装 Homebrew 与开发用 Python，并解决当前终端仍调用旧 Python 的问题。`uv`、课程 Python 3.12、课程 `.venv` 尚无执行确认；最终预检也待反馈。

## 1. 学习目标

- 分清远程仓库、本地仓库、仓库根目录与 Terminal。
- 理解系统工具、包管理器、运行时、项目依赖之间的关系。
- 能解释为什么“装好了 Python”不等于“运行的就是它”。
- 用版本、解释器路径和项目预检验证结果，而不是只看安装成功提示。

## 2. 为什么学

后面的 AI Coding、LLM 和 Agent 项目都需要运行代码。环境出错时，先判断程序是否存在、版本是否匹配、shell 找到的是谁，再决定是否安装或修复。

我们的原则是 **Just-in-time Environment：学到哪里，安装到哪里**。当前先解决 Git 与 Python，不为了跑完网页上的所有示例而装齐 Rust、Julia 或 GPU 工具。

## 3. 前置知识

| 概念 | 含义 | 本课例子 |
|---|---|---|
| Remote Repository | 托管在 GitHub 等服务上的仓库 | 原课程远程仓库 |
| Local Repository | 保存在自己电脑上的仓库副本 | `ai-engineering-from-scratch/` |
| Repository Root | 仓库最外层目录 | 相对路径 `phases/...` 的起点 |
| Terminal | 输入命令的应用 | 可以在其中进入任意目录 |
| zsh | 解释和运行命令的 shell | 查找命令、维护命令缓存 |
| 当前目录 | 命令执行时所在的位置 | 可用 `pwd` 查看 |

Terminal 与仓库根目录不是二选一：你可以在 Terminal 里，正好位于仓库根目录。原课程的 `verify.py` 在原仓库中；本教材仓库 `ai-engineering-abel` 不包含那个脚本。

## 4. 当前环境

| 项目 | 本课记录 |
|---|---|
| 学习设备 | Mac Studio / macOS / zsh |
| 已有工具 | Apple Command Line Tools、Git |
| 原 Python | 3.9.6，来自 Apple 工具链；保留 |
| 新 Python | 用户历史反馈 3.14.7，`/opt/homebrew/bin/python3` |
| 未完成部分 | 最终预检；uv、课程 Python 3.12、课程 `.venv` |

本表是学习时的快照。后续变化以 [Environment State](../../environment.md) 为准。历史版本号不作为当前版本推荐。

## 5. 实际操作

以下整理历史上发生的过程。安装命令用于复盘，已有环境不必重复安装；部分具体步骤来自历史助手总结，证据边界见[来源说明](../../sources.md)。

### 5.1 在原课程仓库运行 Beginner 预检

```bash
python3 phases/00-setup-and-tooling/01-dev-environment/code/verify.py --route beginner
```

历史助手对截图的转述为：Git 通过，Python 3.9.6 不满足 3.11+，共 1/2 项通过，其他 9 个稍后检查项跳过。本次无法读取原截图，不把这段当作重新采集的终端日志。

这一步的作用是确定当前路线的最小依赖。它没有要求我们马上装 Rust。

### 5.2 安装 Homebrew，并让 shell 能找到它

用户先反馈 `command not found: brew`，随后按指导安装。严格地说，这个提示表示当前 shell 找不到命令，单凭它不能排除“已经安装但 PATH 未配置”的可能。

历史指导使用的安装命令：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Apple Silicon 下的 shell 配置：

```bash
# 历史配置步骤；已有这一行时不要重复追加。
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
brew --version
brew --prefix
```

用户随后反馈的 Homebrew 前缀是 `/opt/homebrew`。`.zprofile` 的确切内容和新终端持久性没有单独输出，仍待复核。

### 5.3 安装独立的开发 Python

```bash
brew install python
```

采用“保留 Apple 工具链 Python，另装开发 Python”的方式。`brew install python` 的结果随执行时间变化，不保证今天会安装历史记录中的版本。

### 5.4 比较命令名称与绝对路径

```bash
which -a python3
/opt/homebrew/bin/python3 --version
python3 --version
python3 -c "import sys; print(sys.executable)"
```

用户曾反馈：

```text
Python 3.14.7
Python 3.9.6
/Library/Developer/CommandLineTools/usr/bin/python3
```

新 Python 已经存在，但当前 `python3` 仍启动旧解释器。`which -a python3` 的历史列表还出现了重复的 Homebrew 路径：重复匹配不表示又安装了一份 Python，也不能单靠列表证明实际运行的是哪一个。

### 5.5 刷新 zsh 缓存并确认实际解释器

当时建议先执行：

```bash
rehash
python3 --version
python3 -c "import sys; print(sys.executable)"
```

随后用户明确反馈：

```text
Python 3.14.7
/opt/homebrew/bin/python3
```

这确认了当前终端默认 Python 的结果已经正确。历史诊断将问题归为 shell 命令缓存；未保存完整 shell 状态，所以不能声称已经排除所有其他原因。

## 6. 命令解析

| 命令 / 片段 | 作用 | 目录要求 |
|---|---|---|
| `pwd` | 显示当前目录 | 任意；补充说明，不是已执行记录 |
| `brew install python` | 让 Homebrew 安装开发 Python | 不依赖课程目录 |
| `brew --prefix` | 显示 Homebrew 安装前缀 | 任意 |
| `brew shellenv` | 输出 shell 所需的环境设置 | 任意 |
| `eval "$(...)"` | 在当前 shell 应用命令输出的设置 | 任意 |
| `>> ~/.zprofile` | 追加到 zsh 登录配置 | 会修改配置；避免重复追加 |
| `which -a python3` | 列出找到的同名命令路径 | 任意 |
| `sys.executable` | 显示当前 Python 进程所用解释器 | 任意 |
| `rehash` | 刷新 zsh 的命令位置缓存 | 当前 shell |
| `verify.py --route beginner` | 按初学路线检查依赖 | 上述相对命令需在原课程根目录运行 |

更一般地说，命令依赖当前目录时就需要注意位置；相对文件路径是明显信号，Git、项目环境工具也可能隐式依赖当前目录。

## 7. 遇到的问题

| 现象 | 影响 | 本次处理状态 |
|---|---|---|
| 不理解“在仓库中运行” | 不清楚在哪执行检查 | 已澄清目录与 Terminal 的区别 |
| Beginner Python 检查失败 | 旧运行时不满足门槛 | 新解释器已确认；最终预检待反馈 |
| `command not found: brew` | 当前 shell 无法调用包管理器 | 后续安装与前缀反馈已记录 |
| 装好新 Python 仍显示 3.9.6 | 程序名指向旧解释器 | 当前 shell 的最终结果已确认 |
| `command not found: rustc` | Rust 示例无法运行 | 当前跳过，无须为本路线立即修复 |

## 8. 原因

“代码在哪里”和“由谁运行代码”是两套问题。仓库目录决定相对路径能否找到文件；PATH 决定 shell 去哪些目录找程序，shell 的缓存、别名或函数也可能影响解析结果。

同一台电脑允许多个 Python 共存。绝对路径启动新版本、直接输入名称启动旧版本，提示应检查命令解析和 shell 状态，而不是立即再安装一遍。

## 9. 解决方法

本次顺序是：确认新解释器存在 → 检查 PATH 候选 → 刷新缓存 → 再查版本与 `sys.executable`。最终用户反馈证明当前终端已切换。

若以后再次发生，先重复只读检查；有需要再用 `type -a python3` 检查别名、函数和路径，或新开终端验证持久配置。这些是后续诊断方法，不代表历史上已经全部执行。

对 Rust 的处理是先看路线依赖。当前不需要它，保留问题记录并跳过该示例即可。

## 10. 核心概念

| 层次 | 本课对应物 | 应建立的认识 |
|---|---|---|
| System | macOS、Apple 开发工具 | 保留系统管理的工具 |
| Packages / 工具管理 | Homebrew | 安装开发软件 |
| Runtimes | Python | 负责实际运行代码；版本和路径都重要 |
| 项目环境 / Libraries | 计划中的 uv、`.venv`、项目包 | 为项目选择运行时并隔离依赖；尚未实操 |
| 代码管理 | Git、本地 / 远程仓库 | 记录代码和教材的变化 |

Homebrew 和 uv 各有职责；uv 不是 Python 内部的一层，虚拟环境也不是另一个操作系统。它们最终一起回答：**这份代码，用哪个解释器和哪组依赖来运行？**

原课程题目单独保存在[原课练习与测验](01-dev-environment-practice.md)，收录原题不代表已经完成。

## 11. 验证标准

| 标准 | 证据 / 状态 |
|---|---|
| Homebrew 可定位 | 用户反馈 `/opt/homebrew` |
| 默认 Python 与开发解释器一致 | 用户反馈版本与 `/opt/homebrew/bin/python3`；已确认 |
| Git 通过初始检查 | 历史助手转述；原截图本次未读取 |
| 新开终端仍选择正确 Python | 待验证 |
| Beginner 再次检查得到 2/2 | **待验证；原对话只有预期，没有最终反馈** |
| 能解释 Terminal / 目录 / PATH / 缓存 | 本课自测；不替用户标记掌握 |
| uv、Python 3.12、课程 `.venv` 可用 | 计划，尚无执行确认 |

自测：为什么新 Python 装好后仍可能调用旧版本？为什么原课程脚本不能在本教材仓库直接运行？为什么没装 Rust 也能继续当前路线？

## 12. 暂缓内容

| 内容 | 决策 | 原因 |
|---|---|---|
| Node.js / pnpm | 稍后 | 到 Web / MCP / TypeScript 项目再准备 |
| Jupyter / Docker | 暂缓 | 非当前安装阻塞项 |
| PyTorch / MPS | 深度学习阶段 | 到时再学习框架与 Apple GPU |
| Rust / Julia | 当前跳过 | 不属于当前主线必需项 |
| CUDA | 本机路线跳过 | 当前是 Apple Silicon 环境 |

## 13. 下一步

**以下全部为计划，不是已完成操作。**

1. 在原课程根目录重新运行 Beginner 预检，保存实际输出。
2. 检查新终端中的 Python 版本和解释器路径。
3. 按后续课程需要安装 uv，准备 Python 3.12 和项目 `.venv`。
4. 验证解释器确实位于课程项目环境，再安装必要依赖。

??? note "原对话讨论的项目环境命令（计划；尚未确认执行）"
    安装与版本准备：

    ```bash
    curl -LsSf https://astral.sh/uv/install.sh | sh
    uv --version
    uv python install 3.12
    ```

    进入**原课程仓库根目录**，再创建和激活环境：

    ```bash
    uv venv --python 3.12
    source .venv/bin/activate
    python --version
    python -c "import sys; print(sys.executable)"
    ```

    到课程确实需要这两个包时再执行，并记录结果：

    ```bash
    uv pip install numpy matplotlib
    python -c "import numpy, matplotlib; print(numpy.__version__, matplotlib.__version__)"
    ```

    预期解释器位于该项目 `.venv/bin/`；以实际输出为准。执行前如项目已有环境或依赖配置，先检查，不覆盖现有工作。

完成一段后说“整理”，按[维护约定](../../maintenance.md)把新证据合并进本课。下一课规划是 Git & Collaboration，Python 环境会在 Lesson 06 继续展开。
