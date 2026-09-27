---
lesson_id: P00-L06
status: in-progress
updated: 2026-09-27
---

# Lesson 06 · Python 环境（Python Environments）

**Phase 00 · Setup & Tooling｜状态：进行中｜整理日期：2026-09-27**

已按原课骨架整理。你提供的环境检查截图证明课程根目录的 `.venv`、Python 3.12.14、五个基础包与矩阵计算可用；其他实验和测验未逐项反馈。原课标注的前置课程是 P00-L01。

## 学习目标 · Learning Objectives

1. 使用 `uv`、Python 自带的 `venv` 或 Conda 创建隔离环境。
2. 理解 `pyproject.toml`、可选依赖组与 lock 文件如何帮助重建环境。
3. 识别全局安装、混用包管理工具、CUDA 版本不匹配等常见问题。
4. 针对不同阶段可能冲突的依赖，设计分阶段的项目环境。

[课前自测](06-python-environments-practice.md#pre-lesson-check)保留原课两题。

## 为什么需要独立环境 · The Problem

两个项目可能需要不同版本的同一个包。若都安装进同一套 Python 环境，升级一个项目的依赖就可能破坏另一个项目。虚拟环境让每个项目拥有自己的解释器入口和依赖安装位置。

## 核心概念 · The Concept

<div class="lesson-figure" data-figure="s0-env-isolation"></div>

<noscript>请启用 JavaScript 查看原课动画。静态理解：不同项目各有自己的 `.venv`，可分别使用不同版本的依赖。</noscript>

复用原课程依赖隔离动画与暂停控制。[原动画源码](https://github.com/rohitg00/ai-engineering-from-scratch/blob/8bc378c2e07777899322ae77cd0dde94cb12fab3/site/figures-setup.js) · [MIT 许可](../../assets/upstream/p00-l06/LICENSE.txt)。原图的 NVIDIA CUDA 版本只用于说明“依赖可能冲突”；你的 Mac 不走 CUDA 安装路线。

### 我的目录树：位置与安装目标

```text
ai-engineering-from-scratch/    ← 课程仓库根目录；截图中的当前目录
├── phases/                    ← 各课代码与脚本
└── .venv/                     ← 本课程已验证的虚拟环境
    ├── bin/
    │   ├── python             ← 当前环境使用的 Python
    │   └── activate           ← 当前终端的激活脚本
    └── lib/
        └── python3.12/
            └── site-packages/ ← 基础包所在的位置
```

在根目录执行课程脚本，是为了让相对路径能找到 `phases/...`；包实际安装进被选中的虚拟环境。**当前目录**和**包的安装目标**是两件事。你不必进入 `.venv` 文件夹安装包；激活环境也不会改变当前目录。原脚本会自己定位并切换到仓库根目录，再创建或复用这里的 `.venv`。上图是结构示意，具体包文件位置可随平台和环境实现略有变化。

## 三种建环境的方法 · Build It

### Option 1 · uv venv（原课推荐）

原课示例依次是安装 uv、用 uv 准备 Python 3.12、进入项目、创建 `.venv`、激活它：

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
uv python install 3.12
cd your-project
uv venv
source .venv/bin/activate
```

你逐行理解得基本正确。`curl` 获取安装脚本，`| sh` 执行脚本；`uv python install 3.12` 准备解释器；`cd your-project` 中的名称是占位符；`uv venv` 在项目当前目录创建 `.venv`；`source` 让当前终端优先使用 `.venv/bin/python`。**准备了 Python 3.12，不保证未指定版本的 `uv venv` 一定选择它**；若要明确指定，可以在新建环境时写 `uv venv --python 3.12`。你现有环境已经可用，本页不要求重建。

原课接着用 `uv pip install torch numpy` 示范往环境安装包，或用 `uv init` / `uv add` 建立一个由 uv 管理的项目。两种工作方式在后文 lock 文件处区分。

### Option 2 · Python 自带 venv

`python3 -m venv .venv` 也能创建同类隔离环境，随后激活并用 pip 安装依赖。它与 uv 是不同的管理入口。本次截图显示环境已经存在，但没有完整创建日志，**不能据此判定当初一定由 uv 创建**。

### Option 3 · Conda（原课按需）

原课为需要特定 CUDA 工具链、集群环境或非 Python 依赖的情况介绍 Conda。你当前的 Mac 课程环境已经通过基础检查，不需要因为原课列出 Conda 就再安装一套。混用 Conda 与 pip 时需要特别留意各自的依赖记录；原课建议先装 Conda 包，必要时再处理只能由 pip 提供的包。

### 本课程的分阶段环境策略

原课建议初期共用仓库根目录的轻量 `.venv`，当深度学习、Transformer、API 等阶段出现较大或互相冲突的依赖时，再考虑单独环境。你当前的根目录 `.venv` 正符合其基础环境位置；后续是否分拆，以实际课程项目需要为准。

## pyproject.toml 基础

原课用 `[project]` 记录项目元信息、Python 要求与直接依赖，用 `[project.optional-dependencies]` 记录可选的 `torch` 和 `llm` 依赖组。它表达“项目需要什么”；安装工具据此选择和安装包。本次未提供你亲自编写、修改该文件的记录。

## Lockfiles：锁定版本与重建环境

原课并列展示了 uv 项目与 pip 风格的两套操作：

| 命令 | 做什么 |
|---|---|
| `uv add numpy` | 在 **uv 项目**里加入 NumPy，更新 `pyproject.toml`、`uv.lock`，并同步本地环境 |
| `uv pip compile pyproject.toml -o requirements.lock` | 依据声明解析依赖，生成列出具体版本的 `requirements.lock` |
| `uv pip install -r requirements.lock` | 在选中的虚拟环境里**实际安装**锁定清单中的包 |

它们说明同一个原则，不要求同时维护两份 lock 文件。`pyproject.toml` 更像需求说明；lock 文件进一步写明求解后的版本，常包括传递依赖。**Git 只传送文件；别人 clone 后不会因 lock 文件存在就自动安装，也不能没有 Python 运行环境直接执行项目。** 对方仍需安装工具并执行环境准备命令，例如 uv 项目的 `uv sync`；uv 可在相应条件下帮助取得所需 Python。锁定版本也不保证跨系统、硬件与外部服务完全相同的运行结果。

### Transitive dependency · 传递依赖

```text
你的项目
└── 直接依赖：A 包        ← 你主动声明
    └── 传递依赖：B 包    ← A 需要 B
        └── 传递依赖：C 包 ← B 又需要 C
```

你没有直接写出 B 和 C，但安装 A 时也需要它们。这是 lock 文件可能远长于 `pyproject.toml` 直接依赖列表的原因。本次解释的是概念；没有记录你实际生成或提交 lock 文件。

## 常见问题 · Common Mistakes

| 原课问题 | 本课应如何判断 | 当前个人状态 |
|---|---|---|
| 全局安装 | 先看实际解释器路径与目标环境，不只看终端前缀 | 截图已确认 `.venv` 位置 |
| 混用 Conda 与 pip | 核对同一环境中由谁管理依赖 | 没有 Conda 使用记录 |
| 忘记激活 | `source .venv/bin/activate` 改变当前终端优先使用的 Python | 截图有环境提示与成功检查 |
| 把 `.venv` 提交到 Git | 环境保留在本机，提交声明与锁定文件 | 是否已忽略未核对 |
| CUDA 版本不匹配 | 原课针对 NVIDIA；检查驱动与 PyTorch 构建版本 | 本机 Apple Silicon 路线不适用 CUDA |

## 在本课程中使用 · Use It

原课脚本：

```bash
bash phases/00-setup-and-tooling/06-python-environments/code/env_setup.sh
```

脚本会定位仓库根目录，创建或复用 `.venv`，安装 `numpy matplotlib jupyter scikit-learn pandas`，验证导入及 NumPy 矩阵乘法，最后**可选地**检查 PyTorch。你提供的截图显示基础检查已通过；PyTorch 提示不影响 `All checks passed`。

### 截图中已确认的结果

| 项目 | 截图显示 |
|---|---|
| 仓库与环境位置 | 根目录 `ai-engineering-from-scratch/`；其下 `.venv/` |
| Python | 虚拟环境内 3.12.14 |
| NumPy / Matplotlib | 2.5.3 / 3.11.2 |
| scikit-learn / pandas / Jupyter | 1.9.1 / 3.0.6 / 5.9.1（脚本通过 `jupyter_core` 验证 Jupyter） |
| 计算检查 | `(3, 3) @ (3, 3) = (3, 3)`；`[PASS] NumPy operations working` |
| 总结 | `[PASS] All checks passed` |
| PyTorch | `[WARN] PyTorch not installed (install later when needed)` |

这是**截图时**的环境状态，之后如重新安装或升级，以新输出为准。截图没有展示脚本前半段，uv 的版本、脚本是否从 uv 分支安装、`.venv` 最初由哪个工具创建，仍待核对。

### NumPy 与 PyTorch

NumPy 的 `ndarray` 用于通用数组和矩阵运算；PyTorch 的 `Tensor` 有类似的数值运算，还提供构建、训练神经网络所需的自动求导，并能在支持的设备后端计算。调用云端模型 API 通常不要求本地安装 PyTorch；本地训练或运行某些模型时可能需要。**这两者可以配合，不是“PyTorch 版 NumPy”取代“普通 NumPy”的关系。** 目前脚本只把 PyTorch 作为可选项，原课给出将来按需安装的命令；本次未执行。

## 原课练习与关键术语

[原样保存四项 Exercises、两道 Pre-Lesson Check 和三道 Post-Lesson Quiz](06-python-environments-practice.md)。练习 1 的脚本检查有截图反馈；其余练习及测验未获作答或执行证据。

| 术语 | 本课理解 |
|---|---|
| Virtual environment | 隔离项目解释器与包的本地目录 |
| Lockfile | 记录已解析依赖及具体版本的文件 |
| pyproject.toml | Python 项目的配置与依赖声明文件 |
| Transitive dependency | 直接依赖所需要的依赖 |
| CUDA mismatch | 原课的 NVIDIA GPU 环境问题；本机不按 CUDA 路线安装 |

## 下一步与状态

本课已有基础环境实操与概念问答，仍标为**进行中**：第二个隔离环境实验、`pyproject.toml`、lock 文件练习与测验未记录；用户也未明确表示结课。没有为“整理”重复执行脚本或安装 PyTorch。当前学习位置为 P00-L06；P00-L04 的 API 实操状态单独保留。新证据见[环境台账](../../environment.md)。

---

来源：[原课固定版本](https://github.com/rohitg00/ai-engineering-from-scratch/blob/8bc378c2e07777899322ae77cd0dde94cb12fab3/phases/00-setup-and-tooling/06-python-environments/docs/en.md) · [原文快照](../../assets/upstream/p00-l06/lesson.txt) · [脚本快照](../../assets/upstream/p00-l06/env_setup.sh)。作者 Rohit Ghumare，Copyright (c) 2026，[MIT 许可全文](../../assets/upstream/p00-l06/LICENSE.txt)。
