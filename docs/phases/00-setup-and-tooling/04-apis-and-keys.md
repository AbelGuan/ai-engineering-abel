---
lesson_id: P00-L04
status: in-progress
updated: 2026-09-27
---

# Lesson 04 · API 与密钥（APIs & Keys）

**Phase 00 · Setup & Tooling｜状态：进行中｜整理日期：2026-09-27**

原课类型：Build；语言：Python、TypeScript；前置课程：Lesson 01。已讨论 SDK、密钥读取、Raw HTTP 与 Ship It；尚未提供安装 SDK、配置密钥、成功调用或练习结果，不据此记录实操完成。

## 学习目标 · Learning Objectives

- 使用环境变量和 `.env` 文件管理 API key。
- 使用 Anthropic Python SDK 与原始 HTTP 发起 LLM API 调用。
- 比较 SDK 与 Raw HTTP 的请求、响应格式，帮助排错。
- 识别并处理身份验证、请求频率限制等常见 API 错误。

[课前自测](04-apis-and-keys-practice.md#pre-lesson-check)保留原课两题。

## 为什么学 · The Problem

后续 LLM 应用、工具和 Agent 会不断调用模型服务。先理解请求如何携带身份与问题，以及响应如何返回，才能分清调用失败是密钥、请求格式、模型权限还是网络等方面的问题。

## 核心概念 · The Concept

**自己的程序 → 携带身份信息的 HTTP 请求 → 模型服务 → 响应数据 → 自己的程序。**

| 原课中的组成 | 含义 |
|---|---|
| Endpoint / URL | 请求发送到哪个接口地址 |
| API key | 用于身份验证与请求授权的凭证 |
| Request body | 发送的模型名称、消息和其他参数 |
| Response body | 服务返回的数据，原课示例解析 JSON |

### 原课动画：密钥如何进入请求

<div class="lesson-figure" data-figure="s0-secret-inject"></div>

<noscript>请启用 JavaScript 观看动画。静态理解：程序从运行环境读取密钥，构造请求时将它放入请求头，而不是写进公开源代码。</noscript>

直接复用原课动画与播放 / 暂停功能。作者 Rohit Ghumare，[原动画源码](https://github.com/rohitg00/ai-engineering-from-scratch/blob/8bc378c2e07777899322ae77cd0dde94cb12fab3/site/figures-setup.js)，[MIT 许可](../../assets/upstream/p00-l04/LICENSE.txt)。

动画补充：原动画用 `Authorization` 展示通用请求头示意，本课 Anthropic Raw HTTP 示例实际使用 `x-api-key`。动画中的 `.env` 注入也以运行工具或代码完成加载为前提。

## 操作流程 · Build It

以下是原课示例与本次解释，**没有实际执行记录**。保留原课代码中的模型名称用于追溯，不保证它在未来或当前账号上可调用；真正运行前须确认可用模型、依赖、权限与额度。示例适用于本地程序，不应把真实密钥放进公开课程网页。

### Step 1 · 保存密钥

原课提供两种方式：在终端设置环境变量，或将变量写入 `.env` 文件。下面只有占位内容，不是真实密钥：

```bash
export ANTHROPIC_API_KEY="YOUR_API_KEY"
```

从这个终端启动的程序可以继承该变量。原课也列出其他服务商的变量，但本例只需对应服务商的密钥，不需要为跟完示例同时注册所有服务。

`.env` 文件形式：

```text
ANTHROPIC_API_KEY=YOUR_API_KEY
```

将 `.env` 加入 `.gitignore`。**文件存在不等于变量已加载**：运行工具或程序还需要读取文件，将内容放入运行环境。SDK 自动读取环境变量，与自动读取 `.env` 文件，是两件事。`.gitignore` 也不会从已有提交历史中自动清除密钥。

### Step 2 · 第一次调用：Python SDK

```python
import os

import anthropic

client = anthropic.Anthropic()

MODEL = os.environ.get("LLM_MODEL", "claude-sonnet-5")

response = client.messages.create(
    model=MODEL,
    max_tokens=256,
    messages=[{"role": "user", "content": "What is a neural network in one sentence?"}]
)

print(response.content[0].text)
```

`anthropic` 是 Python 的 Anthropic SDK 包。`Anthropic()` 创建客户端；`client.messages.create(...)` 才实际请求模型。`os.environ.get(...)` 读取环境变量，在原例中用来选择模型；SDK 默认从 `ANTHROPIC_API_KEY` 读取密钥。

### Step 3 · 第一次调用：TypeScript SDK

```typescript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const MODEL = process.env.LLM_MODEL ?? "claude-sonnet-5";

const response = await client.messages.create({
  model: MODEL,
  max_tokens: 256,
  messages: [{ role: "user", content: "What is a neural network in one sentence?" }],
});

console.log(response.content[0].text);
```

#### 我的问题：代码没写 API key，为什么还能调用？

SDK 是 Software Development Kit，软件开发工具包。这里是服务商提供的现成代码，帮助程序组织请求、携带密钥、发送请求和处理响应。`@anthropic-ai/sdk` 是要安装到项目里的包；`import` 是使用已安装的包，不会替你安装它。

`new Anthropic()` 默认从环境变量 `ANTHROPIC_API_KEY` 读取密钥。在密钥读取这件事上，相当于明确写：

```typescript
const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});
```

`process.env` 是 Node.js 程序读取环境变量的入口。**提前设置密钥 → SDK 读取 → 调用 messages.create → 携带凭证发出请求。** 没在代码里看到密钥字符串，不代表不需要密钥。

仅复制这段代码还不够：还需要可运行该 TypeScript 示例的环境、SDK 包、程序能读到的有效密钥，以及可用模型和账号权限 / 额度。本次没有确认这些前提已完成。[Anthropic 官方 SDK 的默认密钥说明](https://github.com/anthropics/anthropic-sdk-typescript#getting-started)。

### Step 4 · Raw HTTP：不使用专用 SDK

```python
import os
import urllib.request
import json

url = "https://api.anthropic.com/v1/messages"
headers = {
    "Content-Type": "application/json",
    "x-api-key": os.environ["ANTHROPIC_API_KEY"],
    "anthropic-version": "2023-06-01",
}
body = json.dumps({
    "model": os.environ.get("LLM_MODEL", "claude-sonnet-5"),
    "max_tokens": 256,
    "messages": [{"role": "user", "content": "What is a neural network in one sentence?"}],
}).encode()

req = urllib.request.Request(url, data=body, headers=headers, method="POST")
with urllib.request.urlopen(req) as resp:
    result = json.loads(resp.read())
    print(result["content"][0]["text"])
```

#### 我的理解：这像把网站上的模型 API 配置写进程序

这个理解方向正确。这段代码直接写明程序如何向服务商请求，而很多应用中的“API 地址、API key、模型名称”设置页，是让用户给应用已有的请求代码提供配置。

| 代码 | 作用 |
|---|---|
| `url` | 指定接口地址 |
| `headers` | 指定请求头，携带身份、内容格式与 API 版本 |
| `x-api-key` | 此 Anthropic 示例中的密钥请求头；仍从环境变量取值 |
| `body` / `json.dumps` | 将模型、消息等参数编码为请求体 |
| `urllib.request.Request` | 组织 HTTP 请求 |
| `urlopen` | 发送请求并接收响应 |
| `json.loads` | 把返回 JSON 解析成程序可用的数据 |

前面的 SDK 也是在程序里调用 API。区别是 SDK 帮你处理许多请求细节，Raw HTTP 则由你明确写出这些细节。Raw HTTP 仍使用 Python 自带网络库，不需要从零实现网络通信。

更换服务商时，除了地址与密钥，还可能需要调整请求头、请求体和响应读取方式。不能假设所有 API 只换两个配置值就通用。

## 如何使用 · Use It

原课将 Anthropic 对应后续 Agent / 工具课程，将其他模型服务用于比较，将 Hugging Face 用于模型与数据集相关学习。按后续课程需要配置服务即可。

原文还列出注册赠送额度。这是原课版本中的说法，**本笔记不把它作为当前有效承诺**；注册、计费和可用模型以实际服务信息为准。SDK 与 Raw HTTP 只是接入方式，不决定调用是否免费。

## 本课交付成果 · Ship It

### 我的问题：Ship It 是什么意思？

在软件开发里，它通常指把成果交付出去。在这门课中，可理解为“学完后留下什么可使用的产物”。

| 栏目 | 作用 |
|---|---|
| Build It | 跟步骤做出来 |
| Use It | 理解如何使用 |
| Ship It | 整理成可保存、使用或交付的成果 |
| Exercises | 练习并检验理解 |

Ship It 不一定意味着发布到网上，产物也可以是脚本、配置、提示词或小项目。本课产物是 `outputs/prompt-api-troubleshooter.md`，用于帮助助手诊断 API 错误。

[打开原课提示词快照](../../assets/upstream/p00-l04/prompt-api-troubleshooter.txt)。原样收录并保留许可；这不代表本次调用了 API 或验证了提示词中的每条处理建议。

!!! note "使用提示词时的补充（非原文）"
    原提示词有输出密钥前缀的诊断命令。实际求助时不需要提供密钥内容，只说明变量是否设置，并分享去除凭证后的报错。服务端错误、超时与认证错误应结合实际响应定位；不要把提示词中的通用建议当成所有情况都成立的修复。

## Exercises · 原课练习与测验

[查看完整原题与作答记录](04-apis-and-keys-practice.md)：三项练习、两道课前题、三道课后题均已收录，未记录执行或作答。

## Key Terms · 关键术语

| 术语 | 含义 |
|---|---|
| API key | 调用凭证，用于识别调用方与授权请求 |
| Rate limit | 请求频率或用量速率限制；原课以 HTTP 429 说明超限 |
| Token | 模型处理文本等内容的单位，不严格等于一个词；计费规则依服务而定 |
| Streaming | 分批接收生成中的响应，不是等全部生成后一次拿到 |

## 个人学习记录

| 本次问题 | 整理出的认识 | 证据状态 |
|---|---|---|
| SDK 示例里没有密钥 | SDK 默认读取环境变量；仍需配置密钥 | 已讨论，未提供运行结果 |
| Raw HTTP 像在程序里配置模型 API | 直接组织 HTTP 请求；SDK 封装同类通信细节 | 已讨论，未执行比较实验 |
| Ship It 的含义 | 本课可使用的交付成果，不一定上线 | 已解释 |
| 学习完成情况 | 本课进行中 | 用户尚未明确确认结课 |

## 下一步与验证

继续原课学习；若开始实操，记录使用的语言、SDK 是否安装、环境变量是否成功读取、实际响应或去除密钥的报错。首次调用、Raw HTTP 对比与错误密钥练习均未获得执行反馈，不由本次整理代为运行。具体状态见[环境台账](../../environment.md)。

---

来源：[原课固定版本](https://github.com/rohitg00/ai-engineering-from-scratch/blob/8bc378c2e07777899322ae77cd0dde94cb12fab3/phases/00-setup-and-tooling/04-apis-and-keys/docs/en.md) · [原课完整快照](../../assets/upstream/p00-l04/lesson.txt)。作者 Rohit Ghumare，Copyright (c) 2026，[MIT 许可全文](../../assets/upstream/p00-l04/LICENSE.txt)。固定版本 `8bc378c2e07777899322ae77cd0dde94cb12fab3`；中文讲解及个人问答独立整理，原文中的型号、额度等时效性内容不作为当前保证。
