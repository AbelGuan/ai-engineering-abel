# Lesson 04 · 原课练习与测验

**内容已收录；个人操作、作答与成绩未记录。**

作者 Rohit Ghumare，Copyright (c) 2026，[MIT 许可](../../assets/upstream/p00-l04/LICENSE.txt)。原仓库版本 `8bc378c2e07777899322ae77cd0dde94cb12fab3`，收录日期 2026-09-27。题干、选项、答案和解释保留原文。

来源：[原课文档](https://github.com/rohitg00/ai-engineering-from-scratch/blob/8bc378c2e07777899322ae77cd0dde94cb12fab3/phases/00-setup-and-tooling/04-apis-and-keys/docs/en.md) · [测验数据快照](../../assets/upstream/p00-l04/quiz.json)。

## Pre-Lesson Check

两道课前题，点击后显示解释，可重试。刷新后重置，不自动写回仓库。

<div data-pre-quiz>
<script type="application/json">[{"stage": "pre", "question": "What is an API key used for when calling an LLM service?", "options": ["Encrypting the data sent to the server", "Authenticating your identity and authorizing requests", "Compressing requests to reduce bandwidth", "Selecting which programming language the server uses"], "correct": 1, "explanation": "An API key is a unique string that identifies your account, authorizes your requests, and allows the provider to track usage and billing."}, {"stage": "pre", "question": "Why should API keys never be hardcoded directly in source code?", "options": ["Python cannot read string literals longer than 50 characters", "API providers block keys that appear in source files", "Hardcoded keys make the code run slower", "They can be accidentally committed to git and exposed publicly"], "correct": 3, "explanation": "Hardcoded keys in source code risk being committed to version control and pushed to public repositories, where they can be scraped and abused by others."}]</script>
</div>

下方保留可离线阅读的原题与折叠答案。

### 1. What is an API key used for when calling an LLM service?

A. Encrypting the data sent to the server

B. Authenticating your identity and authorizing requests

C. Compressing requests to reduce bandwidth

D. Selecting which programming language the server uses

??? note "原课答案与解释（展开查看）"
    **B. Authenticating your identity and authorizing requests**

    An API key is a unique string that identifies your account, authorizes your requests, and allows the provider to track usage and billing.

### 2. Why should API keys never be hardcoded directly in source code?

A. Python cannot read string literals longer than 50 characters

B. API providers block keys that appear in source files

C. Hardcoded keys make the code run slower

D. They can be accidentally committed to git and exposed publicly

??? note "原课答案与解释（展开查看）"
    **D. They can be accidentally committed to git and exposed publicly**

    Hardcoded keys in source code risk being committed to version control and pushed to public repositories, where they can be scraped and abused by others.

## Exercises

[原文快照](../../assets/upstream/p00-l04/exercises.txt)

1. Get an Anthropic API key and make your first API call
2. Try the raw HTTP version and compare the response format to the SDK version
3. Intentionally use a wrong API key and read the error message

## Post-Lesson Quiz

### 1. What is the recommended way to store API keys for local development?

A. In a .env file that is listed in .gitignore

B. In the README.md for easy access

C. In a Python variable at the top of your script

D. In the requirements.txt alongside package versions

??? note "原课答案与解释（展开查看）"
    **A. In a .env file that is listed in .gitignore**

    A .env file stores keys as environment variables and should be added to .gitignore so it is never committed to version control. SDKs read keys from environment variables automatically.

### 2. In the raw HTTP API call to Anthropic, which header carries the API key?

A. Authorization: Bearer sk-ant-...

B. Content-Type: application/json

C. anthropic-version: 2023-06-01

D. x-api-key: sk-ant-...

??? note "原课答案与解释（展开查看）"
    **D. x-api-key: sk-ant-...**

    Anthropic&#x27;s API uses the &#x27;x-api-key&#x27; header for authentication, not the more common &#x27;Authorization: Bearer&#x27; pattern. This is specific to their API design.

### 3. What happens when you exceed an API&#x27;s rate limit?

A. Your request is queued and processed later automatically

B. The server returns an error (typically HTTP 429) and you must wait before retrying

C. Your API key is permanently revoked

D. The API silently drops your request with no response

??? note "原课答案与解释（展开查看）"
    **B. The server returns an error (typically HTTP 429) and you must wait before retrying**

    Rate limiting returns HTTP 429 (Too Many Requests). You need to wait and retry, typically with exponential backoff. Rate limits prevent abuse and ensure fair usage.

!!! note "补充说明（非原文）"
    第一题中的 `.env` 需要运行工具或代码加载，不能认为文件存在就已成为进程环境变量；SDK 读取环境变量与加载文件是不同步骤。`.gitignore` 也不会清除已提交的历史。原题原答案保持不变。

## 我的作答与复盘

| 项目 | 操作 / 作答 | 结果 |
|---|---|---|
| Pre-Lesson Check 1–2 | 未记录 | 未记录 |
| Exercises 1–3 | 未记录 | 未验证 |
| Post-Lesson Quiz 1–3 | 未记录 | 未记录 |

保留首次作答、订正与错因，不用原答案代替自己的回答。返回[第四课笔记](04-apis-and-keys.md)。
