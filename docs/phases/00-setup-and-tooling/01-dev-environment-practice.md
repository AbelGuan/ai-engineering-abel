# Lesson 01 · 原课练习与测验

**收录状态：已收录 Pre-Lesson Check、Exercises 和 Post-Lesson Quiz；课前截图显示 2/2，首次作答过程未记录。** 收录题目不等于完成练习或通过测验。

来源：[AI Engineering from Scratch](https://github.com/rohitg00/ai-engineering-from-scratch)，作者 Rohit Ghumare。归档于 2026-09-26，原仓库版本 `8bc378c2e07777899322ae77cd0dde94cb12fab3`。以下保存该本地版本的英文原文，不将翻译或个人解释混入原题。

Copyright (c) 2026 Rohit Ghumare。转载遵循 [MIT 许可全文](../../assets/upstream/p00-l01/LICENSE.txt)。

## Pre-Lesson Check

原课 `quiz.json` 中 `stage: pre` 的全部两题，题干、选项顺序、答案与解释均保留原文。点击选项后显示反馈，可重新作答。网页作答仅在当前页面中演示，刷新后重置，不会自动写回仓库。

<div data-pre-quiz>
<script type="application/json">[{"stage": "pre", "question": "Why do AI projects need a separate virtual environment?", "options": ["Python requires virtual environments to import packages", "They isolate dependencies so different projects don't conflict", "Virtual environments make code run faster", "Virtual environments provide GPU access"], "correct": 1, "explanation": "Virtual environments isolate package versions per project. Without them, upgrading PyTorch for one project can break another that depends on an older version."}, {"stage": "pre", "question": "What does CUDA provide for AI workloads?", "options": ["Parallel computing on NVIDIA GPUs for matrix operations", "A Python package manager for ML libraries", "A web framework for deploying models", "A container runtime for model serving"], "correct": 0, "explanation": "CUDA is NVIDIA's parallel computing platform that lets you run matrix operations on thousands of GPU cores simultaneously. PyTorch and TensorFlow use it under the hood."}]</script>
</div>

<noscript>互动自测需要 JavaScript。下方也保留可展开阅读的原题。</noscript>

??? note "课前题原文与答案（静态备份）"

    **1. Why do AI projects need a separate virtual environment?**

    A. Python requires virtual environments to import packages

    B. They isolate dependencies so different projects don't conflict

    C. Virtual environments make code run faster

    D. Virtual environments provide GPU access

    **原答案：B**

    Virtual environments isolate package versions per project. Without them, upgrading PyTorch for one project can break another that depends on an older version.

    **2. What does CUDA provide for AI workloads?**

    A. Parallel computing on NVIDIA GPUs for matrix operations

    B. A Python package manager for ML libraries

    C. A web framework for deploying models

    D. A container runtime for model serving

    **原答案：A**

    CUDA is NVIDIA's parallel computing platform that lets you run matrix operations on thousands of GPU cores simultaneously. PyTorch and TensorFlow use it under the hood.

截图记录：本次提供的原站课前自测截图显示两道题均选中正确答案、总分 2/2。截图不能证明是否为首次作答，因此不推定首次全部答对，也不据此认定整课已掌握。

## Exercises

来源：[原课文档](https://github.com/rohitg00/ai-engineering-from-scratch/blob/8bc378c2e07777899322ae77cd0dde94cb12fab3/phases/00-setup-and-tooling/01-dev-environment/docs/en.md) · [原文快照](../../assets/upstream/p00-l01/exercises.txt)

1. Run the verification script and fix any failures
2. Create a Python virtual environment for this course and install PyTorch
3. Write a "hello world" in all four languages and run each one

!!! note "本路线补充说明（非原文）"
    上述练习保留原样。PyTorch 与四种语言的练习仍按我们的学习路线暂缓，不因为收录原题就要求现在安装。

## Post-Lesson Quiz

来源：[原课 quiz.json](https://github.com/rohitg00/ai-engineering-from-scratch/blob/8bc378c2e07777899322ae77cd0dde94cb12fab3/phases/00-setup-and-tooling/01-dev-environment/quiz.json) · [完整数据快照](../../assets/upstream/p00-l01/quiz.json)。以下按原文件顺序收录 `stage: post` 的全部 3 题；选项顺序未更改。

### 1. In the four-layer environment stack, which layer must be installed first?

A. Language Runtimes (Python, Node.js)

B. System Foundation (OS, shell, GPU drivers)

C. Package Managers (pip, npm, cargo)

D. AI/ML Libraries (PyTorch, JAX)

??? note "原课答案与解释（展开查看）"
    **B. System Foundation (OS, shell, GPU drivers)**

    You install bottom-up: system foundation first (OS, drivers), then package managers, then language runtimes, then AI libraries. Each layer depends on the one below.

### 2. What is the purpose of uv in a Python AI project?

A. A GPU monitoring tool

B. A neural network visualization library

C. An ultra-fast Python package installer and resolver

D. A CUDA compiler for custom kernels

??? note "原课答案与解释（展开查看）"
    **C. An ultra-fast Python package installer and resolver**

    uv is a fast Python package installer written in Rust. It replaces pip with much faster dependency resolution and installation, often 10-100x faster.

### 3. How do you verify that PyTorch can access your GPU?

A. `python -c 'import gpu'`

B. `import torch; print(torch.cuda.is_available())`

C. `import torch; print(torch.__version__)`

D. `nvidia-smi --query`

??? note "原课答案与解释（展开查看）"
    **B. `import torch; print(torch.cuda.is_available())`**

    torch.cuda.is_available() returns True if PyTorch can access CUDA GPUs. On Apple Silicon, use torch.backends.mps.is_available() for Metal Performance Shaders.

!!! note "本路线补充说明（非原文）"
    第三题的 CUDA 检查适用于 NVIDIA CUDA；Apple Silicon 应区分 MPS。第一题的层次顺序是原课程的教学模型，实际工具可能跨层或有不同安装顺序。第二题中的速度倍数是原课说法，本次未验证。原答案忠实保存，不代表我们验证了其中所有概括。

## 我的作答与复盘

| 项目 | 我的作答 / 操作 | 结果 | 复盘 |
|---|---|---|---|
| Pre-Lesson Check 1–2 | 用户提供原站答题截图 | 显示 2/2 correct | 首次作答及重试过程未记录 |
| Exercises 1–3 | 未记录 | 未验证 | 待学习时填写 |
| Post-Lesson Quiz 1–3 | 未记录 | 未作答 | 待用户回答后记录 |

保存首次作答、后续订正与原因；原课答案和助手解析分别标注，不用正确答案覆盖用户最初的理解。

返回[首课笔记](01-dev-environment.md)。
