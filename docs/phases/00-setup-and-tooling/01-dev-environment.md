---
lesson_id: P00-L01
status: in-progress
updated: 2026-09-26
---

# Lesson 01 · 开发环境（Dev Environment）

**Phase 00 · Setup & Tooling｜当前学习位置：P00-L01｜状态：进行中**

本课沿用原课的学习目标和教学顺序，再补充 Mac 适配与个人操作记录。原课无前置课程要求；接触过补充知识不代表已完成其他章节。

!!! info "我的进度"
    已记录 Homebrew、开发 Python 安装与路径排错；用户最新反馈确认正在使用 Python 虚拟环境。该环境的版本、路径与创建工具尚未核实；uv、Python 3.12、项目依赖和最终 Beginner 预检不能标为已完成。

## 学习目标 · Learning Objectives

以下对应原课的四项目标，保留完整范围；个人暂缓项不会从课程目标中删除。

1. 从零建立 Python 3.11+、Node.js 20+ 和 Rust 工具链。
2. 配置虚拟环境与包管理器，为可复现的项目环境打基础。
3. 了解适用的 CUDA / MPS GPU 路线，验证 GPU 访问并运行测试张量运算。
4. 理解开发环境的四层结构：系统基础、包管理器、语言运行时、AI/ML 库。

版本门槛来自本页注明的原课版本，不表示当前最新版本。**理解原课范围、完成当前路线的必要操作、完成全部练习，是三件分别记录的事。**

## 为什么先搭环境 · The Problem

后续每一课都要运行代码。如果解释器、依赖或系统工具不匹配，学习会不断被导入错误、版本冲突和设备问题打断。本课先建立一张环境地图，再准备当前路线所需的工具，最后用实际运行结果验证。

## 核心概念：四层开发环境 · The Concept

从底层向上理解：

| 层次 | 负责什么 | 原课涉及的工具与例子 |
|---|---|---|
| 1 · System Foundation 系统基础 | 提供运行与开发的基本条件 | 操作系统、shell、Git、编辑器、适用的 GPU 驱动 |
| 2 · Package Managers 包管理工具 | 获取和管理工具或项目依赖 | uv、pnpm、cargo；原课图中还列出 juliaup |
| 3 · Language Runtimes 语言运行环境 | 让相应语言的程序能够执行 | Python、Node.js、Rust 工具链、Julia |
| 4 · AI/ML Libraries AI 与机器学习库 | 提供张量、模型、训练等功能 | PyTorch、JAX、transformers 等 |

例如，Python 项目运行在 macOS 上；uv 可以帮助选择 Python、创建环境和安装包；Python 解释器执行代码；代码再调用 NumPy 或 PyTorch。**语言、管理工具、运行环境和库承担不同职责。**

### 补充理解：语言和工具如何对应

| 语言 | 执行代码所需的环境 | 管理工具及职责 |
|---|---|---|
| Python | Python 解释器 | uv：Python 版本、虚拟环境和包管理 |
| TypeScript / JavaScript | 本课使用 Node.js；TypeScript 还涉及编译或执行工具 | fnm：Node.js 版本管理；pnpm：项目依赖管理 |
| Rust | rustc 编译器及工具链 | rustup：工具链管理；Cargo：依赖管理、构建与运行 |
| Julia | Julia 运行环境 | juliaup：Julia 版本管理；Pkg：项目包管理 |

这是对原课模型的补充说明：工具职责会跨层，四层图用于理解责任，不是所有安装都必须严格按四个独立步骤执行。原图将 juliaup 放在管理工具层，但它与 Julia 的 Pkg 职责不同；Rust 主要通过编译生成程序，也不等同于 Python 解释器。

虚拟环境把项目使用的 Python 与依赖组织在一起。`.venv` 是常见目录名；终端括号里可以显示项目名，不能仅凭是否出现“venv”判断是否激活。

## 搭建与验证 · Build It

保留原课 Step 1–7 的顺序。下表和步骤中的“暂缓 / 待验证”都是个人进度，不改变原课程内容。

### Step 1 · 系统基础

原课先准备操作系统、shell、Git 等基础工具，并分别给出 macOS、Linux 和 Windows/WSL 的操作。本人的设备是 Mac Studio，已记录 Apple Command Line Tools 与 Git；随后安装 Homebrew 和开发 Python。

Homebrew 用于安装 macOS 开发软件，与管理 Python 项目依赖的 uv 职责不同。已有工具无需为“跟完步骤”而重新安装。具体历史命令保留在下方个人学习记录中；curl / wget 没有单独验证。

### Step 2 · Python 与 uv

原课流程是：准备 uv → 安装 Python 3.12 → 创建并激活虚拟环境 → 安装 NumPy、Matplotlib、Jupyter → 打印版本并执行 NumPy 向量点积。

其目的包括选择合适的解释器、隔离项目依赖，以及确认库真的可以导入和计算。可复现还需要记录版本与依赖信息，不能只凭“在我的电脑上能运行”。

| 我的操作 / 证据 | 能得出的结论 | 仍待确认 |
|---|---|---|
| Homebrew Python 的历史版本与路径反馈 | 当时已安装并成功选用独立开发 Python | 不代表当前虚拟环境内的版本 |
| 终端前缀为 `(ai-engineering-from-scratch)` | 环境提示显示项目名称 | 不能单凭名称确认环境位置或工具 |
| 用户反馈虚拟环境判断返回 `True` | 当次 Python 进程正在虚拟环境中运行 | 版本、解释器路径、是否由 uv 创建、目录是否叫 `.venv` |

因此下一步先检查已有环境，再决定是否需要调整；不直接重复创建或覆盖环境。uv、Python 3.12、NumPy / Matplotlib / Jupyter 的安装情况仍无学习操作证据。

### Step 3 · Node.js 与 pnpm

原课通过 fnm 准备 Node.js，再安装 pnpm 并打印 Node 版本，为后面的 TypeScript、Agent、MCP 和 Web 项目准备环境。Node.js 执行程序，pnpm 管理项目依赖。

**个人状态：暂缓。** 到对应项目需要时再安装；本课仍保留它在工具链中的位置。原课还包含 unzip 缺失与 Apple Silicon / Rosetta 安装问题的处理，实际遇到时再对照原文诊断。

### Step 4 · Rust

原课使用 rustup 安装工具链，再检查 `rustc --version` 和 `cargo --version`，面向性能与系统相关课程。

**个人状态：当前跳过安装。** 曾出现 `rustc` 找不到的记录；它不是当前 Beginner 路线的阻塞项，不因此认定系统环境整体失败。

### Step 5 · Julia（原课可选）

Julia 用于数学相关课程。原课提供安装方式并运行版本检查；juliaup 管理 Julia 版本，项目中的包由 Pkg 管理。

**个人状态：当前跳过安装。** 保留知识位置，之后按课程需要决定是否实践。

### Step 6 · GPU（有适用设备时）

原课分别介绍 NVIDIA 的 CUDA 路线与 Apple Silicon 的 MPS 路线。本人的 Mac 使用 Apple GPU 路线，CUDA 不可用本身不是故障；以后学习 PyTorch 时应核对 MPS 支持和实际运算，而不是照搬 NVIDIA CUDA 安装选项。

**个人状态：PyTorch / MPS 暂缓，尚未验证。** 原课目标包含测试张量运算；设备可用性检查和真正运行运算应分开记录。刚才的虚拟环境 `True` 不代表 MPS 检查通过。

### Step 7 · 验证要开始的学习路线

原课按选择的路线检查必要依赖，默认跳过稍后才用到的工具。以下是**下一次待执行 / 待反馈的检查**，不是已经通过的结果。

在原课程仓库根目录（含 `README.md` 和 `phases/`）运行：

```bash
python3 phases/00-setup-and-tooling/01-dev-environment/code/verify.py --route beginner
```

其他路线可选 `ml-foundations`、`llm-engineering`、`agents`、`mcp`、`agent-skills`、`certification`；`--show-later` 用于额外查看后续工具。缺少后续可选工具不应被当成当前路线失败。

**个人状态：历史初检曾失败，最终复检输出待反馈。** 即使 Beginner 预检通过，也只说明满足该路线的起步检查，不代表本课所有工具、练习或概念都已掌握。

## 如何用于后续学习 · Use It

沿原课思路，先开始已验证的路线，再随课程安装后续工具。Python 主要用于计算与模型，TypeScript 用于工具和应用，Rust 用于性能敏感系统，Julia 可用于数学实践。

个人 [Roadmap](../../roadmap.md) 记录选课顺序与优先级；每一课的核心目标和知识顺序继续以对应原课为准。

## 本课产物 · Ship It

原课提供环境验证脚本与 `prompt-env-check` 诊断提示词。脚本用于取得实际结果；提示词帮助按系统、管理工具、运行环境、库定位故障。粘贴提示词不等于安装工具，也不构成环境已通过验证的证据。

本人的学习产物是本课笔记、[环境台账](../../environment.md)、排错证据和练习记录。网站的搭建与发布属于个人学习支持工作，不替代本课开发环境目标。

## 原课练习与测验 · Exercises / Post-Lesson Quiz

[打开本课原题、答案与个人作答记录](01-dev-environment-practice.md)。Exercises 和 Post-Lesson Quiz 已按原文保存；目前没有个人完成或作答证据。重复的 Test your understanding 不另设栏目。

## 个人学习记录：安装、问题与排错

以下整理历史上发生的过程。安装命令用于复盘，已有环境不必重复安装；部分具体步骤来自历史助手总结，证据边界见[来源说明](../../sources.md)。

### 记录 1 在原课程仓库运行 Beginner 预检

```bash
python3 phases/00-setup-and-tooling/01-dev-environment/code/verify.py --route beginner
```

历史助手对截图的转述为：Git 通过，Python 3.9.6 不满足 3.11+，共 1/2 项通过，其他 9 个稍后检查项跳过。本次无法读取原截图，不把这段当作重新采集的终端日志。

这一步的作用是确定当前路线的最小依赖。它没有要求我们马上装 Rust。

### 记录 2 安装 Homebrew，并让 shell 能找到它

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

### 记录 3 安装独立的开发 Python

```bash
brew install python
```

采用“保留 Apple 工具链 Python，另装开发 Python”的方式。`brew install python` 的结果随执行时间变化，不保证今天会安装历史记录中的版本。

### 记录 4 比较命令名称与绝对路径

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

### 记录 5 刷新 zsh 缓存并确认实际解释器

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

这确认了当时终端默认 Python 的结果已经正确；后来使用虚拟环境时，应另查环境内的解释器。历史诊断将问题归为 shell 命令缓存；未保存完整 shell 状态，所以不能声称已经排除所有其他原因。

### 操作中用到的命令

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

### 问题记录

| 现象 | 影响 | 本次处理状态 |
|---|---|---|
| 不理解“在仓库中运行” | 不清楚在哪执行检查 | 已澄清目录与 Terminal 的区别 |
| Beginner Python 检查失败 | 旧运行时不满足门槛 | 新解释器已确认；最终预检待反馈 |
| `command not found: brew` | 当前 shell 无法调用包管理器 | 后续安装与前缀反馈已记录 |
| 装好新 Python 仍显示 3.9.6 | 程序名指向旧解释器 | 当前 shell 的最终结果已确认 |
| `command not found: rustc` | Rust 示例无法运行 | 当前跳过，无须为本路线立即修复 |

### 原因分析

“代码在哪里”和“由谁运行代码”是两套问题。仓库目录决定相对路径能否找到文件；PATH 决定 shell 去哪些目录找程序，shell 的缓存、别名或函数也可能影响解析结果。

同一台电脑允许多个 Python 共存。绝对路径启动新版本、直接输入名称启动旧版本，提示应检查命令解析和 shell 状态，而不是立即再安装一遍。

### 处理结果

本次顺序是：确认新解释器存在 → 检查 PATH 候选 → 刷新缓存 → 再查版本与 `sys.executable`。最终用户反馈证明当前终端已切换。

若以后再次发生，先重复只读检查；有需要再用 `type -a python3` 检查别名、函数和路径，或新开终端验证持久配置。这些是后续诊断方法，不代表历史上已经全部执行。

对 Rust 的处理是先看路线依赖。当前不需要它，保留问题记录并跳过该示例即可。


### 操作中的补充知识：目录、终端与仓库

| 概念 | 在本次操作中的用途 | 后续归属 |
|---|---|---|
| 本地 / 远程仓库 | 区分电脑中的课程文件与 GitHub 上的版本 | Git & Collaboration |
| 仓库根目录 | 作为 `phases/...` 相对路径的起点 | 本课执行提示；Terminal & Shell 深入 |
| Terminal / zsh / 当前目录 | 输入命令、解释命令、确定文件位置；`pwd` 可查看位置 | Terminal & Shell |
| PATH / 命令缓存 | 解释为何同名 `python3` 会启动不同解释器 | 本课排错；终端相关课程深入 |
| 虚拟环境名称与解释器 | 分清提示符名称、环境路径和实际 Python | 本课起步；Python Environments 深入 |

Terminal 是应用，仓库根目录是位置，两者可以同时成立。原课程脚本在 `ai-engineering-from-scratch` 中，本笔记仓库 `ai-engineering-abel` 不含该脚本。如果已经进入脚本所在目录，可以运行文件名；若使用完整的 `phases/...` 相对路径，则先回原仓库根目录，不一定只退一级。切换目录与是否处于虚拟环境是两个独立问题。

这些问题保留为本次经历，并关联后续章节；不会因为聊到了某个主题就自动切换当前课或将另一课标为已学。

## 我的进度与验证证据

| 项目 | 当前状态 |
|---|---|
| Homebrew 与开发 Python | 已记录安装及历史版本、路径反馈 |
| 当时 Python 命令解析问题 | 已记录排错后的成功反馈；新终端持久配置待复核 |
| 虚拟环境使用 | 用户反馈判断为 `True`；具体版本、路径、创建工具待核对 |
| uv / Python 3.12 / 项目依赖 | 未获执行确认 |
| Node / Rust / Julia / PyTorch 与 GPU | 按上述步骤暂缓或跳过；不计为已完成 |
| Beginner 最终预检 | 待用户提供实际输出 |
| 四层模型与工具职责 | 已整理教材；理解程度待自测反馈 |
| 原课练习与课后测验 | 已收录，未记录作答 |

环境使用、路线就绪、概念掌握与整课完成分别记录；本课仍为进行中。Jupyter / Docker 暂缓，CUDA 不走本机安装路线，详细状态见[环境台账](../../environment.md)。

## 下一步

先保留现有环境，在当前学习终端核对解释器与版本，再运行 Step 7 的 Beginner 预检并保存输出。以下为**待执行检查**：

```bash
python3 --version
python3 -c "import sys; print(sys.executable); print(sys.prefix != sys.base_prefix)"
```

如要继续采用 uv / Python 3.12，先核实 uv 是否可用及项目已有的环境、依赖配置，再确定缺少哪一步。此前讨论过的安装 uv、`uv python install 3.12`、`uv venv --python 3.12`、激活 `.venv`、安装 NumPy / Matplotlib 均为建议，不能凭此补记完成，也不必在已有环境上重复执行。

随后对照原课目标与练习记录需要补学或暂缓的内容。只有你实际进入下一课，或有明确的原课定位依据时，才更新当前学习位置。

---

**教学来源：** [原课 Dev Environment（固定版本）](https://github.com/rohitg00/ai-engineering-from-scratch/blob/8bc378c2e07777899322ae77cd0dde94cb12fab3/phases/00-setup-and-tooling/01-dev-environment/docs/en.md)，作者 Rohit Ghumare，Copyright (c) 2026，[MIT 许可全文](../../assets/upstream/p00-l01/LICENSE.txt)。本页中文重组沿用原课骨架，Mac 适配、个人进度与操作记录独立标明。整理日期：2026-09-26；历史证据边界见[来源说明](../../sources.md)。
