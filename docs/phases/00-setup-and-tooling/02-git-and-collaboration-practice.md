# Lesson 02 · 原课练习与测验

**学习状态：已学完（用户确认）｜题目收录：完整｜个人作答与分数：未记录。**

作者 Rohit Ghumare，Copyright (c) 2026，[MIT 许可全文](../../assets/upstream/p00-l02/LICENSE.txt)。原仓库版本 `8bc378c2e07777899322ae77cd0dde94cb12fab3`，收录日期 2026-09-27。题干、选项顺序、答案和解释保留英文原文。

来源：[原课文档](https://github.com/rohitg00/ai-engineering-from-scratch/blob/8bc378c2e07777899322ae77cd0dde94cb12fab3/phases/00-setup-and-tooling/02-git-and-collaboration/docs/en.md) · [quiz.json](https://github.com/rohitg00/ai-engineering-from-scratch/blob/8bc378c2e07777899322ae77cd0dde94cb12fab3/phases/00-setup-and-tooling/02-git-and-collaboration/quiz.json) · [完整测验快照](../../assets/upstream/p00-l02/quiz.json)。

## Pre-Lesson Check

两道课前题；点击选项显示答案解释，可以重试。网页答题刷新后重置，不自动写回学习记录。

<div data-pre-quiz>
<script type="application/json">[{"stage": "pre", "question": "What does 'version control' primarily help you do?", "options": ["Automatically fix bugs in your code", "Speed up code execution", "Track changes to files over time and collaborate with others", "Compress files to save disk space"], "correct": 2, "explanation": "Version control systems like git track every change made to files, allowing you to revert to previous states and collaborate with others on the same codebase."}, {"stage": "pre", "question": "What is a 'repository' in the context of software development?", "options": ["A package manager for installing libraries", "A collection of files and their complete change history managed by version control", "A database for storing user data", "A cloud storage service like Google Drive"], "correct": 1, "explanation": "A repository (repo) is a directory tracked by git that contains all project files along with the full history of changes made to those files."}]</script>
</div>

<noscript>互动需要 JavaScript；下方保留静态原题与答案。</noscript>

### 1. What does 'version control' primarily help you do?

A. Automatically fix bugs in your code

B. Speed up code execution

C. Track changes to files over time and collaborate with others

D. Compress files to save disk space

??? note "原课答案与解释（展开查看）"
    **C. Track changes to files over time and collaborate with others**

    Version control systems like git track every change made to files, allowing you to revert to previous states and collaborate with others on the same codebase.

### 2. What is a 'repository' in the context of software development?

A. A package manager for installing libraries

B. A collection of files and their complete change history managed by version control

C. A database for storing user data

D. A cloud storage service like Google Drive

??? note "原课答案与解释（展开查看）"
    **B. A collection of files and their complete change history managed by version control**

    A repository (repo) is a directory tracked by git that contains all project files along with the full history of changes made to those files.

## Exercises

[原文快照](../../assets/upstream/p00-l02/exercises.txt)

1. Fork this repo, clone your fork, create a branch called `my-progress`, make a file, commit it, push it
2. Create a `.gitignore` that excludes model checkpoint files (`.pt`, `.pth`, `.safetensors`)
3. Look at the commit history of this repo with `git log --oneline` and read how lessons were added

## Post-Lesson Quiz

原课三道课后题，答案默认折叠。

### 1. What is the correct sequence for saving and backing up your work in git?

A. git push, git add, git commit

B. git clone, git add, git push

C. git add, git commit, git push

D. git commit, git add, git push

??? note "原课答案与解释（展开查看）"
    **C. git add, git commit, git push**

    First you stage changes with &#x27;git add&#x27;, then save a snapshot with &#x27;git commit&#x27;, then upload to the remote with &#x27;git push&#x27;. This is the daily workflow.

### 2. What does 'git checkout -b experiment/new-optimizer' do?

A. Creates a new branch named experiment/new-optimizer and switches to it

B. Deletes the branch experiment/new-optimizer

C. Downloads a branch from GitHub called experiment/new-optimizer

D. Reverts all files to match the experiment/new-optimizer branch

??? note "原课答案与解释（展开查看）"
    **A. Creates a new branch named experiment/new-optimizer and switches to it**

    The &#x27;-b&#x27; flag creates a new branch with the given name and immediately switches to it, allowing you to experiment without affecting the main branch.

### 3. Why should you add '.pt', '.pth', and '.safetensors' to your .gitignore?

A. They are model checkpoint files that are too large for git and can be re-generated

B. Git cannot track binary files of any kind

C. They are Python test files that should not be committed

D. They contain sensitive API keys

??? note "原课答案与解释（展开查看）"
    **A. They are model checkpoint files that are too large for git and can be re-generated**

    Model checkpoint files (.pt, .pth, .safetensors) are often gigabytes in size. Git is not designed for large binary files, so these should be excluded and re-generated or stored separately.

!!! note "补充说明（非原文）"
    第三题强调避免大型模型文件进入普通 Git 历史。Git 能跟踪二进制文件；模型产物是否可重新生成取决于实际项目，也可使用单独的产物存储方案。原题与原答案保持不变。

## 我的作答与复盘

| 项目 | 状态 | 记录 |
|---|---|---|
| 本课学习 | 已学完 | 用户确认暂无疑问 |
| Pre-Lesson Check 1–2 | 未记录作答 | 未提供答案或分数 |
| Exercises 1–3 | 未逐项记录 | 不根据结课声明推定具体命令已执行 |
| Post-Lesson Quiz 1–3 | 未记录作答 | 未提供答案或分数 |

后续有问题时补充实际操作和复盘，不用原答案覆盖首次作答。返回[第二课笔记](02-git-and-collaboration.md)。
