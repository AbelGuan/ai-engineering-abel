# 上游来源与适配说明

Copyright (c) 2026 Rohit Ghumare. See LICENSE.txt (MIT).

Source: https://github.com/rohitg00/ai-engineering-from-scratch
Commit: 8bc378c2e07777899322ae77cd0dde94cb12fab3

lesson-figures.js 与 figures-setup.js 从 site/ 原样复制；通过独立 course-interactive.js 调用原 mountLessonFigures，仅挂载 s0-env-stack。原模块包含其他图形注册，但本站未展示未学课程的动画。course-interactive.css 仅适配本站主题。quiz.json 为完整原始数据，课前互动使用 stage: pre 两题，交互界面为本站适配，题目内容未改。
