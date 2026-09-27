# Lesson 06 · 原课练习与测验

**本课进行中｜题目完整收录｜练习 1 有基础检查通过的截图，其他练习与个人答题未记录。**

作者 Rohit Ghumare，Copyright (c) 2026，[MIT 许可全文](../../assets/upstream/p00-l06/LICENSE.txt)。来源：[原课文档](https://github.com/rohitg00/ai-engineering-from-scratch/blob/8bc378c2e07777899322ae77cd0dde94cb12fab3/phases/00-setup-and-tooling/06-python-environments/docs/en.md) · [测验数据](../../assets/upstream/p00-l06/quiz.json)。版本 `8bc378c2e07777899322ae77cd0dde94cb12fab3`，收录于 2026-09-27。题干、选项、答案与解释保留原文。

## Pre-Lesson Check

两道课前题，点击选项可查看解释并重试。网页作答刷新后重置，不自动写回学习记录。

<div data-pre-quiz>
<script type="application/json">[{"stage": "pre", "question": "What problem do virtual environments solve?", "options": ["They provide a graphical interface for managing Python scripts", "They isolate project dependencies so different projects can use different package versions", "They automatically update packages to the latest versions", "They make Python code run faster by optimizing the interpreter"], "correct": 1, "explanation": "Virtual environments give each project its own isolated set of packages. Without them, installing PyTorch 2.4 for one project would overwrite PyTorch 2.1 needed by another."}, {"stage": "pre", "question": "What is a lockfile in the context of Python dependency management?", "options": ["A file that locks the Python interpreter version", "A file that encrypts your project dependencies", "A file that prevents other users from editing your code", "A file that pins every package to an exact version for reproducible installs"], "correct": 3, "explanation": "A lockfile records the exact version of every package (including transitive dependencies) so anyone installing from it gets identical packages, ensuring reproducibility."}]</script>
</div>

原题也在下方保留静态阅读版本。

### 1. What problem do virtual environments solve?

A. They provide a graphical interface for managing Python scripts

B. They isolate project dependencies so different projects can use different package versions

C. They automatically update packages to the latest versions

D. They make Python code run faster by optimizing the interpreter

??? note "原课答案与解释（展开查看）"
    **B. They isolate project dependencies so different projects can use different package versions**

    Virtual environments give each project its own isolated set of packages. Without them, installing PyTorch 2.4 for one project would overwrite PyTorch 2.1 needed by another.

### 2. What is a lockfile in the context of Python dependency management?

A. A file that locks the Python interpreter version

B. A file that encrypts your project dependencies

C. A file that prevents other users from editing your code

D. A file that pins every package to an exact version for reproducible installs

??? note "原课答案与解释（展开查看）"
    **D. A file that pins every package to an exact version for reproducible installs**

    A lockfile records the exact version of every package (including transitive dependencies) so anyone installing from it gets identical packages, ensuring reproducibility.

## Exercises

[原文快照](../../assets/upstream/p00-l06/exercises.txt)

1. Run `env_setup.sh` and verify all checks pass
2. Create a second virtual environment, install a different version of numpy in it, and confirm the two environments are isolated
3. Write a `pyproject.toml` for a project that needs both PyTorch and the Anthropic SDK
4. Deliberately install a package globally (without activating a venv), notice where it goes, then uninstall it

## Post-Lesson Quiz

### 1. How can you verify that your pip and python commands are using the virtual environment and not the system Python?

A. Run &#x27;python --check-env&#x27; to verify

B. Run &#x27;pip --version&#x27; and check the version number

C. Run &#x27;which python&#x27; and confirm it shows .venv/bin/python, not /usr/bin/python

D. Check if the terminal background color has changed

??? note "原课答案与解释（展开查看）"
    **C. Run &#x27;which python&#x27; and confirm it shows .venv/bin/python, not /usr/bin/python**

    &#x27;which python&#x27; (or &#x27;where python&#x27; on Windows) shows the full path to the interpreter. If it points to .venv/bin/python, you are in the virtual environment.

### 2. Why is mixing pip and conda in the same environment problematic?

A. Pip packages are incompatible with conda&#x27;s Python interpreter

B. Pip installs can break conda&#x27;s dependency tracking, causing hard-to-debug conflicts

C. It doubles the disk space used by every package

D. Conda cannot install packages that pip has already installed

??? note "原课答案与解释（展开查看）"
    **B. Pip installs can break conda&#x27;s dependency tracking, causing hard-to-debug conflicts**

    Conda maintains its own dependency solver. Pip installs bypass it, so conda no longer knows the true state of the environment. This leads to dependency conflicts that are painful to resolve.

### 3. Your PyTorch code reports &#x27;CUDA not available&#x27; despite having an NVIDIA GPU. What is the most likely cause?

A. PyTorch was installed with a CUDA version incompatible with your GPU driver

B. Your GPU does not support CUDA

C. You forgot to import the torch.cuda module

D. Virtual environments cannot access GPU hardware

??? note "原课答案与解释（展开查看）"
    **A. PyTorch was installed with a CUDA version incompatible with your GPU driver**

    PyTorch ships CUDA bindings compiled for specific CUDA versions. If the PyTorch CUDA version exceeds your driver&#x27;s CUDA version, CUDA will not be available. Check with nvidia-smi and torch.version.cuda.

!!! note "个人路线补充（非原文）"
    第三题的 CUDA 情境针对 NVIDIA GPU；本机为 Apple Silicon，不以 CUDA 为当前验证目标。第四项练习涉及全局安装；本次没有实际执行，也不为完成题目而改变系统 Python。

## 我的作答与复盘

| 项目 | 现有证据 | 状态 |
|---|---|---|
| Exercise 1 · `env_setup.sh` | 用户提供脚本检查结束时的截图，基础依赖及 NumPy 运算通过 | 已有结果；脚本起始部分未见 |
| Exercises 2–4 | 未提供运行记录 | 待记录 |
| Pre-Lesson Check 1–2 | 未提供答案或分数 | 未记录 |
| Post-Lesson Quiz 1–3 | 未提供答案或分数 | 未记录 |

返回[第六课笔记](06-python-environments.md)。
