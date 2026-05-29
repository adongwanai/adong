# 阿东 · 个人网站

一个静态个人网站，用于展示 Agent 架构、Agent Memory、Agentic RAG、端边云产品落地、开源与影响力。

当前版本加入了参考站点中的时间轴与研究图谱表达方式，并本地化保存了公开图片素材：

- 研究图谱：展示最近一年 ACL / EMNLP 方向工作，包括 Omni-Aware RAG、MORPHEUS、Immune-SkillNet
- 图片画廊：按开源作品、项目回顾、影响力、现场活动分组展示
- 隐私边界：手机号和非公开联系方式不放入站点

## 本地预览

直接打开 `index.html` 即可。也可以启动静态服务：

```bash
python3 -m http.server 4173
```

然后访问 `http://localhost:4173`。

## 文件结构

- `index.html`：页面结构
- `styles.css`：视觉样式和移动端适配
- `script.js`：页面数据、筛选和详情弹层交互
- `assets/paper-figures/`：研究架构图与示意图
- `assets/gallery/`：公开图片原图
- `assets/gallery/thumbs/`：页面使用的轻量缩略图
- `assets/gallery/web/`：公开网页截图
- `assets/gallery/thumbs/web/`：公开网页截图缩略图
