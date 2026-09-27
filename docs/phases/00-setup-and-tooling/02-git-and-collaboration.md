---
lesson_id: P00-L02
status: completed
updated: 2026-09-27
---

# Lesson 02 · Git 与协作（Git & Collaboration）

**Phase 00 · Setup & Tooling｜学习状态：已学完（用户确认）｜整理日期：2026-09-27**

原课类型：Learn；前置课程：Lesson 01 · Dev Environment。沿用原课目标与教学顺序。你已确认本课学完、暂无疑问；后续实际操作中的问题继续补入本课。具体练习操作、测验答案和分数未逐项提供，分别保留未记录状态。

## 学习目标 · Learning Objectives

- 配置 Git 提交身份，理解并使用 `add → commit → push` 日常流程。
- 创建和合并分支，在独立分支上实验。
- 编写 `.gitignore`，排除模型检查点与大型二进制文件。
- 用 `git log` 查看提交历史，理解项目如何演进。

[课前自测 · Pre-Lesson Check](02-git-and-collaboration-practice.md#pre-lesson-check) 已保存原课两题，可自测并查看解释。

## 为什么学习版本控制 · The Problem

随着课程代码、实验和笔记增多，需要记录每次改动、比较版本、找回之前的状态，并与别人协作。Git 管理版本历史，GitHub 是托管仓库与协作的平台。修改文件、保存一次 Git 提交、上传到远程仓库，是不同的动作。

## 核心概念 · The Concept

### 工作区、暂存区、本地仓库、远程仓库

| 从哪里到哪里 | 命令 | 发生什么 |
|---|---|---|
| 工作区 → 暂存区 | `git add` | 选出要纳入下一次提交的改动 |
| 暂存区 → 本地仓库 | `git commit` | 在本地创建一个提交，记录暂存的内容 |
| 本地仓库 → 远程仓库 | `git push` | 将本地提交推送到有写入权限的远程分支 |
| 远程仓库 → 本地仓库 | `git fetch` | 获取远程更新，不直接合入当前工作分支 |
| 远程更新 → 当前分支 | `git pull` | 获取更新并整合到当前分支；具体整合方式受配置影响 |

这张表对应原课的流程图。日常记住三件事：及时提交、推送备份、分支实验。`commit` 是本地操作，不会自动更新 GitHub；`push` 也不会把尚未提交的编辑自动变成提交。

### 原课动画：提交历史如何分叉与合并

<div class="lesson-figure" data-figure="s0-commit-dag"></div>

<noscript>请启用 JavaScript 观看动画。静态理解：main 产生提交，实验分支从一个提交处分叉，两条历史分别前进，再通过合并连接。</noscript>

直接复用原课动画，保留播放与暂停。每个圆点代表提交；线连接提交与它的父提交。分支是指向提交的可移动指针，不是复制整个项目文件夹。动画展示的是生成合并提交的情形；实际合并也可能快进，不一定总产生一个新的合并提交。

来源：Rohit Ghumare，[原动画源码](https://github.com/rohitg00/ai-engineering-from-scratch/blob/8bc378c2e07777899322ae77cd0dde94cb12fab3/site/figures-setup.js)，[MIT 许可](../../assets/upstream/p00-l02/LICENSE.txt)。

## 操作流程 · Build It

以下保留原课示例用于复习，**不是本次新增的执行记录**。命令中的姓名、邮箱、用户名和文件名是示例，实际使用时替换；仓库操作应在目标项目中进行。

### Step 1 · 配置 Git 身份

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

它们设置提交中记录的作者身份。`--global` 影响此用户的默认配置；提交身份与登录 GitHub 的账号授权是两件事。本次没有修改你的配置。

### Step 2 · 日常流程

```bash
git status
git add file.py
git commit -m "Add perceptron implementation"
git push origin main
```

先查看状态，再选择改动、提交、推送。提交说明应让以后阅读历史的人知道这次改了什么。示例假设目标分支为 `main`、远程名为 `origin` 且有推送权限；实际项目以自己的配置为准。

### Step 3 · 用分支做实验

```bash
git checkout -b experiment/new-optimizer

# ... make changes, commit ...

git checkout main
git merge experiment/new-optimizer
```

先创建并切换到实验分支，在分支上修改与提交，确认后回到主分支合并。如果出现冲突，需要理解两侧修改后再处理；本次没有新增冲突案例，不编造解决过程。

### Step 4 · 使用原课程仓库

原课要求先在 GitHub Fork 出自己的副本，再 clone 自己的仓库，在 `my-progress` 分支上记录学习：

```bash
git clone https://github.com/YOUR-USERNAME/ai-engineering-from-scratch.git
cd ai-engineering-from-scratch

git checkout -b my-progress
# work through lessons, commit your code
git push origin my-progress
```

Fork 是平台上的仓库副本，clone 是把仓库取到本地。`origin` 是远程地址的名字；clone 自己的 Fork 时才会指向自己的副本。已经有本地原课程目录，不代表一定 Fork 过，也不需要为了这段示例再复制一遍。

**与个人课程网站的联系：** `ai-engineering-abel` 是自己的笔记仓库，和原课练习仓库分别维护。网站公开让其他人可以阅读；没有仓库写权限的人不能直接推送修改。他们可以通过 Fork 和 Pull Request 提议修改，再由有权限的人决定合并。若以后授予协作者写权限，权限规则会相应改变。

## 如何使用 · Use It

| 原课常用命令 | 用途 |
|---|---|
| `git clone` | 获取仓库到本地 |
| `git add` + `git commit` | 选择改动并保存提交 |
| `git push` | 将提交备份到 GitHub |
| `git checkout -b` | 创建并切换实验分支 |
| `git log --oneline` | 简明查看提交历史 |

原课在这里限定了入门范围，不要求同时学习 rebase、cherry-pick 或 submodules。

## 原课练习 · Exercises

[查看原样保存的练习与课后测验](02-git-and-collaboration-practice.md)。本课练习涉及 Fork / 分支 / 提交 / 推送、忽略模型文件、阅读历史。

补充理解：以下是与第二项练习对应的 `.gitignore` 参考内容，不是已写入你项目的记录：

```gitignore
*.pt
*.pth
*.safetensors
```

Git 可以跟踪二进制文件；这里排除它们是为了避免大型模型产物进入普通提交历史。`.gitignore` 针对尚未跟踪的文件，不能把已提交文件自动从历史中清除。原题原文与补充解释分别保存。

## 关键术语 · Key Terms

| 术语 | 本课应理解的含义 |
|---|---|
| Commit · 提交 | 项目在某个时间点的版本快照及相关信息 |
| Branch · 分支 | 指向某个提交、随工作推进而移动的指针 |
| Merge · 合并 | 把不同分支的修改历史整合起来 |
| Remote · 远程 | 对另一个仓库位置的命名引用，例如 GitHub 上的仓库地址 |

## 个人学习记录与进度

| 项目 | 当前记录 |
|---|---|
| 学习状态 | 已学完，依据 2026-09-27 用户明确反馈 |
| 当前疑问 | 暂无 |
| 练习操作过程 | 未逐项提供，不自动写成已 Fork、已建分支或已完成练习 |
| 课前 / 课后测验 | 原题已收录；答案、分数未记录 |
| 后续补充 | 实际操作 Git 时遇到问题，再记录现象、原因、处理与结果 |

此前搭建课程网站已发生仓库推送与 Pages 发布，但属于网站维护经历，不代替用户亲自完成原课练习的记录。[第一课](01-dev-environment.md)中与目录、仓库有关的经历保留在原处，相关知识在本课归档。

## 下一步

本课按用户反馈记为已学完。当前已进入[Lesson 04 · APIs & Keys](04-apis-and-keys.md)，Git 操作中出现的问题以后继续补在本课；Lesson 03 暂缓安排见 [Roadmap](../../roadmap.md)。

---

**来源与版本：** [用户指定原课页面](https://aiengineeringfromscratch.com/lesson?path=phases%2F00-setup-and-tooling%2F02-git-and-collaboration&learningPath=software-engineering-fundamentals)；[原课文档固定版本](https://github.com/rohitg00/ai-engineering-from-scratch/blob/8bc378c2e07777899322ae77cd0dde94cb12fab3/phases/00-setup-and-tooling/02-git-and-collaboration/docs/en.md)；[原文快照](../../assets/upstream/p00-l02/lesson.txt)。本次以本地固定版本整理，并核对在线章节定位。作者 Rohit Ghumare，Copyright (c) 2026，[MIT 许可全文](../../assets/upstream/p00-l02/LICENSE.txt)。
