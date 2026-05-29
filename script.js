const metrics = [
  { value: "5k+", label: "GitHub Stars", note: "AgentGuide 开源项目" },
  { value: "百万级", label: "设备覆盖", note: "Lenovo 端侧 Agent 能力" },
  { value: "80%+", label: "上下文压缩", note: "四层分层记忆架构" },
  { value: "90%", label: "Memory 命中率", note: "从 70% 提升至 90%" },
  { value: "3", label: "近一年研究", note: "Agent Memory / RAG / Skill" },
  { value: "3000万+", label: "内容播放量", note: "链接 3000+ AI Builder / Founder" },
];

const capabilities = [
  {
    icon: "A",
    title: "Agent 架构与训练",
    text: "熟悉 Agent Runtime、多 Agent 协作、Human-in-the-loop、SFT 数据构造与轨迹级 RL 训练。",
  },
  {
    icon: "R",
    title: "RAG 与上下文工程",
    text: "从分块、Embedding、混合检索、Rerank 到 Agentic RAG 和跨会话状态一致性，能把检索链路做成可评测系统。",
  },
  {
    icon: "E",
    title: "端边云产品落地",
    text: "主导端侧 Agent Runtime、云端 Deep Research、Edge 设备形态，把架构能力落到真实出货和企业场景。",
  },
  {
    icon: "O",
    title: "开源与社区影响力",
    text: "发起 AgentGuide，建设学习路线、知识图谱和工程实践索引，同时以自媒体和 OPC 实验连接 AI Builder 生态。",
  },
];

const socialProof = [
  { name: "GitHub", value: "5k+ Stars", href: "https://github.com/adongwanai/AgentGuide" },
  { name: "小红书", value: "16k+ Fans", href: "https://www.xiaohongshu.com/user/profile/5f310fd50000000001009df5" },
  { name: "抖音", value: "10k+ Fans", href: "https://www.douyin.com/user/MS4wLjABAAAAFqjHp1IIOVdpXdbIzlROaoS1wLpWCfz442x6s2MLaJU" },
  { name: "研究工作", value: "近一年", href: "#papers" },
];

const workflowSteps = [
  { step: "01", title: "Problem", tool: "场景与指标定义", desc: "先明确用户、约束、失败模式和可量化指标。", mark: "P" },
  { step: "02", title: "Architecture", tool: "Memory / RAG / Runtime", desc: "拆出记忆、检索、工具、模型和端边云边界。", mark: "A" },
  { step: "03", title: "Implementation", tool: "Agent Runtime", desc: "实现多 Agent 协作、MCP 工具接口和轨迹记录。", mark: "I" },
  { step: "04", title: "Evaluation", tool: "Replay + Metrics", desc: "用回放、离线集和线上埋点定位幻觉、循环、超时。", mark: "E" },
  { step: "05", title: "Iteration", tool: "Skill 修订闭环", desc: "把成功/失败样本沉淀为 SOP、Skill 和可执行脚本。", mark: "R" },
];

const projects = [
  {
    icon: "AG",
    title: "AgentGuide",
    metric: "5k+ Stars",
    desc: "AI Agent 开发指南，覆盖 LangGraph、Agentic RAG、高级 RAG 和工程实践索引。",
    proof: "证明开源组织能力、技术影响力和 Agent 知识图谱构建能力。",
    tags: ["AI Agent", "LangGraph", "RAG"],
    href: "https://github.com/adongwanai/AgentGuide",
  },
  {
    icon: "CL",
    title: "KTClaw",
    metric: "EvoMap 第一",
    desc: "自进化数字员工系统，四层记忆、RAG-to-Skill、企业 IM 多入口和 Edge 双形态。",
    proof: "证明 Agent 架构能从演示走到产品化场景。",
    tags: ["Agent Memory", "RAG-to-Skill", "SaaS"],
    href: "https://clawcorp.top/",
  },
  {
    icon: "TX",
    title: "天禧 AIPro",
    metric: "百万级设备",
    desc: "桌面 Agent 与端边云调度体系，覆盖本地轻量交互和云端 Deep Research。",
    proof: "证明你能把 Agent 能力接入真实 AIPC 产品链路。",
    tags: ["AIPC", "MCP", "Deep Research"],
    href: "#timeline",
  },
  {
    icon: "RS",
    title: "Omni-Aware RAG",
    metric: "近一年研究",
    desc: "面向多格式证据的 MRAG 控制框架，降低证据顺序和位置偏置。",
    proof: "证明研究问题来自真实 RAG/Agent 证据使用痛点。",
    tags: ["MRAG", "Evidence", "Uncertainty"],
    href: "#papers",
  },
  {
    icon: "MP",
    title: "MORPHEUS",
    metric: "近一年研究",
    desc: "长期 Agent 记忆的 wake-sleep 机制，解决 stale retrieval 和过期记忆污染。",
    proof: "证明你对 Agent Memory 有研究和产品两侧的理解。",
    tags: ["Agent Memory", "Forgetting", "Retrieval"],
    href: "#papers",
  },
  {
    icon: "OP",
    title: "OPC / 内容影响力",
    metric: "3000万+播放",
    desc: "围绕 AI Agent、Vibe Coding 和技术内容连接开发者、Founder 与产品实践场景。",
    proof: "证明你能把技术能力转化为外部影响力和行业连接。",
    tags: ["Content", "Community", "AI Builder"],
    href: "#gallery",
  },
];

const typeConfig = {
  全部: { color: "#2457d6" },
  工作: { color: "#2457d6" },
  项目: { color: "#0f8f6b" },
  开源: { color: "#b56a10" },
  论文: { color: "#7357c8" },
  荣誉: { color: "#c54646" },
  影响力: { color: "#167c91" },
};

const gallerySections = [
  {
    title: "开源作品",
    note: "公开网页截图，优先展示可点击、可验证的项目入口。",
    items: [
      {
        src: "./assets/gallery/thumbs/web/opensource-agentguide.jpg",
        full: "./assets/gallery/web/opensource-agentguide.png",
        href: "https://github.com/adongwanai/AgentGuide",
        title: "AgentGuide",
        note: "5k+ Stars 的 Agent 学习与工程实践指南",
      },
      {
        src: "./assets/gallery/thumbs/web/opensource-llm-resume-template.jpg",
        full: "./assets/gallery/web/opensource-llm-resume-template.png",
        href: "https://github.com/adongwanai/LLM-Resume-Template",
        title: "LLM Resume Template",
        note: "开源简历模板项目",
      },
      {
        src: "./assets/gallery/thumbs/web/opensource-adong-skills.jpg",
        full: "./assets/gallery/web/opensource-adong-skills.png",
        href: "https://github.com/adongwanai/adong-skills",
        title: "adong-skills",
        note: "AI 工作流与技能沉淀",
      },
      {
        src: "./assets/gallery/thumbs/web/tutorial-vibe-coding.jpg",
        full: "./assets/gallery/web/tutorial-vibe-coding.png",
        href: "https://adongwanai.github.io/vibecoding/",
        title: "Vibe Coding",
        note: "公开教程与实践入口",
      },
      {
        src: "./assets/gallery/thumbs/adong-03.jpg",
        full: "./assets/gallery/adong-03.png",
        title: "开源数据截图",
        note: "项目数据与公开页面素材",
      },
    ],
  },
  {
    title: "项目回顾",
    note: "产品页、项目页与架构相关材料放在同一组，方便顺着项目追问。",
    items: [
      {
        src: "./assets/gallery/thumbs/web/project-clawcorp-site.jpg",
        full: "./assets/gallery/web/project-clawcorp-site.png",
        href: "https://landing-page-pddx.vercel.app/",
        title: "ClawCorp",
        note: "公开产品落地页截图",
      },
      {
        src: "./assets/gallery/thumbs/web/project-clawcorp-github.jpg",
        full: "./assets/gallery/web/project-clawcorp-github.png",
        href: "https://github.com/redbook-hackathon/clawcorp",
        title: "ClawCorp GitHub",
        note: "开源仓库与项目说明",
      },
      {
        src: "./assets/gallery/thumbs/web/project-clawcorp-landing-pddx.jpg",
        full: "./assets/gallery/web/project-clawcorp-landing-pddx.png",
        href: "https://landing-page-pddx.vercel.app/",
        title: "ClawCorp Landing",
        note: "公开产品落地页截图",
      },
      {
        src: "./assets/gallery/thumbs/web/project-clawcorp-slides.jpg",
        full: "./assets/gallery/web/project-clawcorp-slides.png",
        href: "https://ilnf.space/evocorp/slides.html",
        title: "ClawCorp Slides",
        note: "项目演示稿截图",
      },
      {
        src: "./assets/gallery/thumbs/adong-02.jpg",
        full: "./assets/gallery/adong-02.png",
        title: "项目架构素材",
        note: "Agent / Claw 相关展示图",
      },
      {
        src: "./assets/paper-figures/immune-skillnet-lifecycle.png",
        full: "./assets/paper-figures/immune-skillnet-lifecycle.png",
        title: "Skill Governance",
        note: "RAG-to-Skill 与技能库治理闭环",
      },
    ],
  },
  {
    title: "影响力",
    note: "平台主页、内容账号和公开连接入口集中展示。",
    items: [
      {
        src: "./assets/gallery/thumbs/adong-12.jpg",
        full: "./assets/gallery/adong-12.jpg",
        href: "https://www.xiaohongshu.com/user/profile/5f310fd50000000001009df5",
        title: "小红书：阿东玩 AI",
        note: "AI Builder 社区入口",
      },
      {
        src: "./assets/gallery/thumbs/adong-11.jpg",
        full: "./assets/gallery/adong-11.jpg",
        href: "https://www.douyin.com/user/MS4wLjABAAAAFqjHp1IIOVdpXdbIzlROaoS1wLpWCfz442x6s2MLaJU",
        title: "抖音：阿东玩 AI",
        note: "技术内容阵地",
      },
      {
        src: "./assets/gallery/thumbs/adong-13.jpg",
        full: "./assets/gallery/adong-13.jpg",
        title: "公众号二维码",
        note: "深度内容与长期连接",
      },
    ],
  },
  {
    title: "现场活动",
    note: "黑客松、分享、评委和线下 Builder 连接放在这一组。",
    items: [
      { src: "./assets/gallery/thumbs/adong-01.jpg", full: "./assets/gallery/adong-01.jpg", title: "活动现场", note: "公开活动回顾" },
      { src: "./assets/gallery/thumbs/adong-04.jpg", full: "./assets/gallery/adong-04.jpg", title: "大会现场", note: "分享与行业交流" },
      { src: "./assets/gallery/thumbs/adong-05.jpg", full: "./assets/gallery/adong-05.jpg", title: "线下分享", note: "Builder 线下连接" },
      { src: "./assets/gallery/thumbs/adong-06.jpg", full: "./assets/gallery/adong-06.jpg", title: "黑客松现场", note: "选手/评委/团队协作" },
      { src: "./assets/gallery/thumbs/adong-07.jpg", full: "./assets/gallery/adong-07.jpg", title: "奖项与认可", note: "竞赛与项目结果" },
      { src: "./assets/gallery/thumbs/adong-09.jpg", full: "./assets/gallery/adong-09.jpg", title: "巅峰赛海报", note: "小红书黑客松项目回顾" },
      { src: "./assets/gallery/thumbs/adong-10.jpg", full: "./assets/gallery/adong-10.jpg", title: "HACKATHON 现场", note: "公开活动素材" },
      { src: "./assets/gallery/thumbs/adong-08.jpg", full: "./assets/gallery/adong-08.jpg", title: "年度贡献者", note: "开放原子相关荣誉" },
    ],
  },
];

const nodes = [
  {
    id: "lenovo-ktclaw",
    type: "项目",
    date: "2026.01 - 至今",
    title: "KTClaw · 自进化数字员工系统",
    org: "Lenovo · SaaS + Edge 双形态",
    oneLiner: "面向售前咨询、企业知识问答和自动化办公，构建四层分层记忆与 RAG-to-Skill 自进化闭环。",
    metrics: [
      ["80%+", "上下文压缩"],
      ["90%", "记忆命中率"],
      ["40%+", "Skill 复用率"],
    ],
    keywords: ["四层记忆", "RAG-to-Skill", "多平台接入", "自进化 Agent"],
    images: [
      {
        src: "./assets/gallery/thumbs/web/project-clawcorp-site.jpg",
        full: "./assets/gallery/web/project-clawcorp-site.png",
        type: "项目截图",
        caption: "ClawCorp 公开产品落地页截图。",
      },
      {
        src: "./assets/gallery/thumbs/web/project-clawcorp-landing-pddx.jpg",
        full: "./assets/gallery/web/project-clawcorp-landing-pddx.png",
        type: "项目落地页",
        caption: "ClawCorp 公开产品落地页截图。",
      },
      {
        src: "./assets/gallery/thumbs/web/project-clawcorp-slides.jpg",
        full: "./assets/gallery/web/project-clawcorp-slides.png",
        type: "项目演示稿",
        caption: "ClawCorp / EvoCorp 项目演示稿截图。",
      },
      {
        src: "./assets/paper-figures/immune-skillnet-lifecycle.png",
        type: "相关研究图",
        caption: "RAG-to-Skill 与 Skill Library Governance 思路相互呼应。",
      },
    ],
    detail: {
      background: "企业 Agent 的难点不只是问答，而是长任务中检索、工具执行和文档生成相互污染，跨会话记忆不断膨胀，AI 分身冷启动成本很高。",
      task: "负责架构设计与全栈研发，让系统能在飞书、微信、钉钉等 5+ 平台稳定接入，并支持端侧 Edge 形态。",
      action: [
        "调研 Mem0、MemGPT、MemOS、A-Mem 等方案后，落地索引、事实、流程、归档四层记忆体系。",
        "采用索引常驻、全文按需加载，并用元数据、语义、流程关系三路召回 Memory / Skill。",
        "将知识库检索、问答和工具调用轨迹抽象为 SOP / Skill / 可执行脚本三级程序性记忆。",
      ],
      result: "典型长会话上下文压缩 80%+，Memory 命中率从 70% 提升至 90%，高频任务平均执行步数下降 30%+，开源版本获得 EvoMap 黑客松第一。",
      talk: "可以展开：为什么要分四层记忆；索引常驻和全文按需的边界；成功/失败样本如何反哺 Skill 修订。",
    },
    links: [
      ["ClawCorp", "https://clawcorp.top/"],
      ["GitHub", "https://github.com/redbook-hackathon/clawcorp"],
    ],
  },
  {
    id: "tinyclaw",
    type: "项目",
    date: "2026.01 - 至今",
    title: "TinyClaw · Edge 形态 Agent Runtime",
    org: "Lenovo · 端侧项目",
    oneLiner: "把同一套自进化 Agent 内核下沉到类 Mac mini 形态 Edge 设备，支持本地执行、云端协同与多分身接入。",
    metrics: [
      ["7000-10000", "单季出货"],
      ["3 层", "程序性记忆"],
      ["2", "相关专利"],
    ],
    keywords: ["Edge Agent", "端侧 Runtime", "云端协同", "产品化"],
    images: [
      {
        src: "./assets/gallery/thumbs/web/project-clawcorp-github.jpg",
        full: "./assets/gallery/web/project-clawcorp-github.png",
        type: "项目截图",
        caption: "ClawCorp GitHub 仓库与项目说明。",
      },
    ],
    detail: {
      background: "端侧 Agent 面临算力、隐私、延迟和稳定性约束，不能依赖无限长上下文，也不能每次都从零规划。",
      task: "将 Claw 的 Agent 内核移植到 Edge 设备，保持本地执行能力，同时复用云端协同和多分身机制。",
      action: [
        "设计端侧 Agent Runtime，统一本地执行、云端协同和多分身接入能力。",
        "复用 SOP / Skill / 可执行脚本三级程序性记忆，让端侧高频任务可以持续演进。",
        "把可学习范围限制在可验证任务内，优先保证低延迟、可回放和可恢复。",
      ],
      result: "Tiny 产品已上架京东，单季出货 7000-10000 台；相关方向产出专利和工程成果，成为端侧自进化 Agent 的产品化样板。",
      talk: "可以展开：端侧为什么需要程序性记忆；哪些任务适合本地闭环，哪些必须云端协同。",
    },
  },
  {
    id: "tianxi-aipro",
    type: "工作",
    date: "2025.01 - 至今",
    title: "天禧 AIPro · 桌面 Agent",
    org: "Lenovo · Agent 架构",
    oneLiner: "主导端边云调度体系，覆盖轻量本地交互与云侧 Deep Research 双类需求。",
    metrics: [
      ["<500ms", "本地检索 P95"],
      ["60%", "Token 成本下降"],
      ["87%", "准确率保持"],
    ],
    keywords: ["MCP", "端边云", "Deep Research", "实时评估"],
    detail: {
      background: "AIPC 同时存在 PC 控制、知识问答等轻量本地交互，以及 Deep Research 这类重度云端推理需求。",
      task: "搭建端边云分层架构，使本地工具、检索、云端研究和线上评估形成统一链路。",
      action: [
        "端侧通过 MCP 协议统一异构工具接口，采用 BM25、向量语义、多模态三路召回，并用 RRF + Rerank 融合排序。",
        "云侧设计带回溯的增量验证 Deep Research 框架，连续两跳信息增益低于阈值时早停。",
        "基于轨迹回放设计实时评估系统，自动识别幻觉、循环、超时等 6 类失败模式。",
      ],
      result: "本地检索 P95 延迟低于 500ms；早停覆盖 73% 查询场景，云端推理 token 成本下降 60%，线上问题定位从数小时降至分钟级。",
      talk: "可以展开：端边云调度如何决定任务归属；Deep Research 的早停阈值如何设计；评估系统怎样做线上归因。",
    },
  },
  {
    id: "baidu-zhitu",
    type: "工作",
    date: "2023.06 - 2024.12",
    title: "极越车载智能助手 & 闭环建图平台",
    org: "北京百度智图科技有限公司",
    oneLiner: "在车载手册问答和闭环建图平台中沉淀混合检索、父子分块与大规模工程经验。",
    metrics: [
      ["62%→85%", "召回率"],
      ["0.68→0.89", "检索 MRR"],
      ["3000km", "日更新里程"],
    ],
    keywords: ["父子分块", "Hybrid Search", "HyDE", "闭环建图"],
    detail: {
      background: "车载手册是半结构化内容，用户 Query 真实、口语化且长尾；地图平台还需要多源数据和持续迭代能力。",
      task: "提升车载问答召回质量，并参与跑过即更新的智能建图系统。",
      action: [
        "设计父子分块索引，小粒度 chunk 精确匹配，父节点保留完整上下文。",
        "构建 Dense + Sparse 混合检索，用 Query 语义补全、反向 HyDE、加权融合和重排序提升相关性。",
        "优化 map-diff 触发策略，配合强感知与多源数据召回推进闭环建图。",
      ],
      result: "1000 条真实 Query 测试中召回率从 62% 提升至 85%，未找到答案反馈从 38% 降至 15%；建图系统覆盖 20000+ 辆车和 15 个城市。",
      talk: "可以展开：父子分块解决什么问题；Dense/Sparse 的融合权重怎么调；RAG 工程能力如何迁移到 Agentic RAG。",
    },
  },
  {
    id: "agentguide",
    type: "开源",
    date: "2024 - 至今",
    status: "5k+ Stars",
    title: "AgentGuide · Agent 学习与知识图谱",
    org: "GitHub 开源项目",
    oneLiner: "用 OpenClaw 自动化整理 30k+ Agent 学习与实践资料，抽取高频知识点并组织成原理层、工程层、项目层知识图谱。",
    metrics: [
      ["5k+", "GitHub Stars"],
      ["30k+", "经验样本"],
      ["Top 20", "Multi-Agent Topic"],
    ],
    keywords: ["Open Source", "Knowledge Graph", "Agent Practice"],
    images: [
      {
        src: "./assets/gallery/thumbs/web/opensource-agentguide.jpg",
        full: "./assets/gallery/web/opensource-agentguide.png",
        type: "开源截图",
        caption: "AgentGuide GitHub 公开仓库截图。",
      },
    ],
    detail: {
      background: "Agent 方向论文、工具和实践资料增长很快，新入门者很难区分核心原理、工程实践和项目案例。",
      task: "把分散资料整理成可检索、可持续维护的知识图谱，并让开源项目对学习和工程实践都真正有用。",
      action: [
        "基于 OpenClaw 搭建爬取、清洗、合并流水线，整理 30k+ 学习与实践样本。",
        "用 LLM 抽取高频知识点，将内容组织成原理层、工程层、项目层知识图谱。",
        "持续维护 Agent 论文、工具、项目和实践案例索引，让读者能快速建立全局视角。",
      ],
      result: "AgentGuide 获得 5k+ GitHub Stars，进入 Multi-Agent topic Top 20，成为公开记录开源影响力和工程自动化能力的项目。",
      talk: "可以展开：开源项目如何沉淀学习路径、实践案例和业务判断；如何把知识图谱转成可执行路线。",
    },
    links: [["AgentGuide", "https://github.com/adongwanai/AgentGuide"]],
  },
  {
    id: "omni-aware-rag-emnlp-2026",
    type: "论文",
    date: "最近一年",
    status: "近一年研究工作",
    title: "Omni-Aware RAG · Multi-Format Evidence Control",
    org: "Agentic RAG / ACL-EMNLP 方向",
    oneLiner: "训练无关地控制文本、图像、表格和视频证据的使用，把 MRAG 从按模态打补丁改成按 latent evidence 状态调度。",
    abstract: "Omni-Aware RAG 针对多模态 RAG 在证据顺序、位置偏置和模态专用启发式上的脆弱性，提出训练无关的 post-retrieval 控制框架。",
    contribution: [
      "主导 MRAG 控制问题抽象，将多模态适配从表层模态规则转成 latent evidence-token 控制。",
      "设计 Evidence Attention Bias 与 order-sensitivity diagnostic，验证同一证据随机排列下的稳定性收益。",
    ],
    metrics: [
      ["64.20→67.88", "OK-VQA"],
      ["3.53→1.07", "Order σ"],
      ["0.098", "Position Bias"],
    ],
    keywords: ["MRAG", "Evidence Attention Bias", "Uncertainty", "Training-Free"],
    images: [
      {
        src: "./assets/paper-figures/omni-aware-rag-pipeline.png",
        type: "框架图",
        caption: "Omni-Aware RAG：从模态专用规则转向统一 latent evidence-token 控制。",
      },
    ],
    detail: {
      background: "MRAG 系统需要同时处理文本、图像、表格和视频帧，常见方法用模态专用启发式处理不确定性，导致新增格式时要重新设计控制器。",
      task: "设计一个不依赖重新训练、可跨文本/图像/表格/视频格式复用的证据控制方法。",
      action: [
        "把证据统一到 latent evidence-token span，在 prefill pass 中估计 grounding entropy 与 predictive entropy。",
        "根据注意力质量和不确定性进行 modality routing 与 top-k 证据控制。",
        "提出 Evidence Attention Bias，直接干预 attention logit，减少重排和重复 chunk 带来的位置偏置。",
      ],
      result: "在 Qwen3-VL-8B 上 OK-VQA 从 64.20 提升到 67.88，证据顺序扰动标准差从 3.53 降到 1.07。",
      talk: "可以展开：同一批证据随机换顺序为什么会影响答案；post-retrieval 控制和检索优化的边界。",
    },
  },
  {
    id: "morpheus-emnlp-2026",
    type: "论文",
    date: "最近一年",
    status: "近一年研究工作",
    title: "MORPHEUS · Retrieval-State Forgetting",
    org: "Agent Memory / ACL-EMNLP 方向",
    oneLiner: "为长期 LLM Agent 设计 wake-sleep 记忆机制：旧记忆不直接删除，而是按当前有效性 KEEP / COMPRESS / REPEL。",
    abstract: "MORPHEUS 研究长期 Agent 记忆中的当前是否仍有效问题，把选择性遗忘从删除问题重构为查询条件下的路由问题。",
    contribution: [
      "主导 retrieval-state forgetting 问题定义。",
      "设计 wake-sleep、局部 repair、全局 contrastive consolidation 和三路 memory gate。",
    ],
    metrics: [
      ["3.17%", "Stale Retrieval"],
      ["88.64%", "Update Accuracy"],
      ["3.52%", "Over-forgetting"],
    ],
    keywords: ["Agent Memory", "Forgetting", "Contrastive Sleep", "Retrieval Routing"],
    images: [
      {
        src: "./assets/paper-figures/morpheus-wake-sleep.png",
        type: "架构图",
        caption: "MORPHEUS：wake 编码经验，sleep 修复冲突并分离 current-valid 与 stale memories。",
      },
    ],
    detail: {
      background: "长期 Agent 会积累用户偏好、事实和任务状态；旧记忆对历史查询可能正确，但对当前状态查询会造成 stale retrieval。",
      task: "让系统区分值得保存和当前该不该被召回，并避免过度遗忘造成历史信息丢失。",
      action: [
        "将记忆有效性拆成 retrieval utility 与 present-state validity，避免用访问频率替代当前有效性。",
        "设计 wake-light sleep-deep sleep 流程，在线获取、离线修复、全局对比巩固。",
        "用 KEEP / COMPRESS / REPEL gate 将记忆分流到 active retrieval、压缩不确定区和可审计 archive。",
      ],
      result: "在 ConflictStream 上 stale retrieval 降到 3.17%，update accuracy 达 88.64%，over-forgetting 控制在 3.52%。",
      talk: "可以展开：为什么旧记忆不该简单删除；企业 Agent 的记忆治理如何从论文方法回流产品。",
    },
  },
  {
    id: "immune-skillnet-emnlp-2026",
    type: "论文",
    date: "最近一年",
    status: "近一年研究工作",
    title: "Immune-SkillNet · Agent Skill Library Governance",
    org: "Agent Skill Governance / ACL-EMNLP 方向",
    oneLiner: "从生成 Skill 推进到维护 Skill：用 matched deletion utility 判断技能该保留、修复、隔离还是删除。",
    abstract: "Immune-SkillNet 关注自进化 Agent 的技能库维护问题，避免错误、过时或有害技能在后续任务中反复触发。",
    contribution: [
      "参与将技能库维护从 admission scoring 拓展到 post-admission deletion evidence。",
      "梳理 Skill-PRM、MDU-A 和 bounded repair 的治理闭环。",
    ],
    metrics: [
      ["-86%", "负迁移任务"],
      ["-73%", "长期漂移"],
      ["1.18x", "归因成本"],
    ],
    keywords: ["Agent Skills", "Skill-PRM", "Deletion Utility", "Bounded Repair"],
    images: [
      {
        src: "./assets/paper-figures/immune-skillnet-lifecycle.png",
        type: "框架图",
        caption: "Immune-SkillNet：从生成、准入、运行时诊断到修复/隔离的技能库治理闭环。",
      },
    ],
    detail: {
      background: "Agent 技能库会不断自我扩张，但 append-only 的 Skill 记忆可能积累负迁移、错误逻辑和有害行为。",
      task: "设计轻量治理机制，判断技能是否应保留、修复、隔离或删除，而不是只在准入时打分。",
      action: [
        "提出四维 Skill-PRM admission gate，评估 grounding、executability、generalizability 和 policy safety。",
        "用 matched leave-one-out rollout 估计删除候选技能后的边际效用，避免只看表面贡献。",
        "设计 bounded repair-or-quarantine 策略，在 K 轮内修复局部错误，否则隔离阻止未来检索。",
      ],
      result: "方法减少 86% 负迁移任务，长期漂移放缓 73%，同时将选择性归因成本控制在 1.18x 左右。",
      talk: "可以展开：技能进入库之后为什么仍然需要治理；RAG-to-Skill 产品闭环如何避免越用越脏。",
    },
  },
  {
    id: "honors",
    type: "荣誉",
    date: "2025 - 2026",
    title: "Lenovo 认可、开源贡献与黑客松成绩",
    org: "Lenovo / 开放原子 / 黑客松",
    oneLiner: "获得 Outstanding 绩效、AI 先锋奖、年度专业贡献项目奖，以及开放原子年度贡献相关荣誉。",
    metrics: [
      ["3", "AI 方向专利"],
      ["5", "软件著作权"],
      ["多次", "黑客松选手兼评委"],
    ],
    keywords: ["Lenovo AI 先锋奖", "开放原子", "EvoMap 第一", "MCP 云服务赛"],
    images: [
      { src: "./assets/gallery/thumbs/adong-04.jpg", full: "./assets/gallery/adong-04.jpg", type: "现场", caption: "黑客松/活动现场素材。" },
      { src: "./assets/gallery/thumbs/adong-05.jpg", full: "./assets/gallery/adong-05.jpg", type: "现场", caption: "Builder 交流与活动回顾。" },
      { src: "./assets/gallery/thumbs/adong-07.jpg", full: "./assets/gallery/adong-07.jpg", type: "现场", caption: "演讲/分享现场素材。" },
    ],
    detail: {
      background: "荣誉本身不是主线，但可以证明工程交付、开源影响、竞赛表达和组织认可同时存在。",
      task: "在公司项目、开源社区和行业竞赛中持续产出可见成果。",
      action: [
        "参与并主导多个 Agent POC 和产品化项目。",
        "持续开源 AgentGuide、AI 学习路线、Vibe Coding 教程等内容。",
        "参与小红书、抖音、百度、SecondMe 等黑客松，并承担选手、评委或分享嘉宾角色。",
      ],
      result: "获得 Lenovo Outstanding 绩效、Lenovo 中国 AI 先锋奖、年度专业贡献项目奖、开放原子开发者大会杰出贡献奖暨分享嘉宾等认可。",
      talk: "可以展开：如何在项目交付之外建立行业能见度，以及这种能见度如何带来业务和人才连接。",
    },
  },
  {
    id: "influence",
    type: "影响力",
    date: "持续进行",
    title: "阿东玩 AI · OPC Builder 实验",
    org: "自媒体 / AI 出海 / Marketing",
    oneLiner: "以自己为实验对象，用 AI 跑通自媒体、出海、课程、社区和产品的 One Person Company 链路。",
    metrics: [
      ["3000万+", "全网播放量"],
      ["3000+", "AI Builder / Founder"],
      ["万粉", "科技博主"],
    ],
    keywords: ["OPC", "AI 出海", "Marketing", "Builder"],
    images: [
      { src: "./assets/gallery/thumbs/adong-12.jpg", full: "./assets/gallery/adong-12.jpg", type: "小红书", caption: "小红书 AI Builder 社区入口。" },
      { src: "./assets/gallery/thumbs/adong-11.jpg", full: "./assets/gallery/adong-11.jpg", type: "抖音", caption: "抖音技术内容阵地。" },
      { src: "./assets/gallery/thumbs/adong-13.jpg", full: "./assets/gallery/adong-13.jpg", type: "公众号", caption: "微信公众号深度内容入口。" },
    ],
    detail: {
      background: "AI 技术落地不只发生在公司内部，也发生在个人影响力、内容分发、社区和产品验证链路中。",
      task: "把自媒体、开源、社区和产品实践变成可复用的 AI Builder 方法论。",
      action: [
        "持续发布大模型、Agent、Vibe Coding、开源和产品实践相关内容。",
        "连接 AI Builder、Founder 与产品实践场景，形成项目、合作和用户反馈网络。",
        "把个人主页、开源项目、课程介绍、社区和 offer 墙串成完整增长路径。",
      ],
      result: "全网播放量 3000万+，已链接 3000+ AI Builder / Founder，并与阿里、字节、腾讯、百度、Kimi 等生态产生合作连接。",
      talk: "可以展开：技术人如何做分发；开源、内容和产品如何互相增强。",
    },
    links: [
      ["个人主页", "https://adongwanai.github.io/"],
      ["Vibe Coding", "https://adongwanai.github.io/vibecoding/"],
    ],
  },
];

const metricContainer = document.querySelector("#hero-metrics");
const capabilityContainer = document.querySelector("#capability-grid");
const socialProofContainer = document.querySelector("#social-proof");
const workflowContainer = document.querySelector("#workflow-grid");
const projectContainer = document.querySelector("#project-grid");
const paperContainer = document.querySelector("#paper-grid");
const galleryContainer = document.querySelector("#gallery-grid");
const filtersContainer = document.querySelector("#filters");
const timelineContainer = document.querySelector("#timeline-list");
const timelineProgressBar = document.querySelector("#timeline-progress-bar");
const modal = document.querySelector("#detail-modal");
const modalBackdrop = document.querySelector("#modal-backdrop");
const modalContent = document.querySelector("#modal-content");
const modalClose = document.querySelector("#modal-close");

let activeType = "全部";
let timelineObserver;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderMetrics() {
  metricContainer.innerHTML = metrics
    .map(
      (item) => `
        <article class="metric-card">
          <p class="metric-value">${escapeHtml(item.value)}</p>
          <p class="metric-label">${escapeHtml(item.label)}</p>
          <p class="metric-note">${escapeHtml(item.note)}</p>
        </article>
      `,
    )
    .join("");
}

function renderCapabilities() {
  capabilityContainer.innerHTML = capabilities
    .map(
      (item) => `
        <article class="capability-card">
          <span class="capability-icon" aria-hidden="true">${escapeHtml(item.icon)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `,
    )
    .join("");
}

function renderSocialProof() {
  socialProofContainer.innerHTML = socialProof
    .map(
      (item) => `
        <a href="${escapeHtml(item.href)}" target="_blank" rel="noreferrer">
          <strong>${escapeHtml(item.value)}</strong>
          <span>${escapeHtml(item.name)}</span>
        </a>
      `,
    )
    .join("");
}

function renderWorkflow() {
  workflowContainer.innerHTML = workflowSteps
    .map(
      (item) => `
        <article class="workflow-card">
          <span class="workflow-mark">${escapeHtml(item.mark)}</span>
          <p>STEP ${escapeHtml(item.step)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <strong>${escapeHtml(item.tool)}</strong>
          <span>${escapeHtml(item.desc)}</span>
        </article>
      `,
    )
    .join("");
}

function renderProjects() {
  projectContainer.innerHTML = projects
    .map(
      (item) => `
        <a class="project-card" href="${escapeHtml(item.href)}" target="_blank" rel="noreferrer">
          <div class="project-topline">
            <span class="project-icon">${escapeHtml(item.icon)}</span>
            <span class="project-metric">${escapeHtml(item.metric)}</span>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.desc)}</p>
          <blockquote>${escapeHtml(item.proof)}</blockquote>
          <div class="tag-row">
            ${item.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
          </div>
        </a>
      `,
    )
    .join("");
}

function renderPapers() {
  const paperNodes = nodes.filter((node) => node.type === "论文");
  paperContainer.innerHTML = paperNodes
    .map((node) => {
      const image = node.images?.[0];
      const color = typeConfig[node.type].color;
      const metricsHtml = node.metrics
        .slice(0, 3)
        .map(([value, label]) => `<span class="mini-metric"><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>`)
        .join("");
      return `
        <button class="paper-card" type="button" style="--node-color: ${color}" data-id="${escapeHtml(node.id)}">
          <figure>
            <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.caption || node.title)}" decoding="async" />
          </figure>
          <div class="paper-card-body">
            <span class="tag type-tag">${escapeHtml(node.status || node.org)}</span>
            <h3>${escapeHtml(node.title)}</h3>
            <p>${escapeHtml(node.oneLiner)}</p>
            <div class="metric-row">${metricsHtml}</div>
          </div>
        </button>
      `;
    })
    .join("");

  paperContainer.querySelectorAll(".paper-card").forEach((card) => {
    card.addEventListener("click", () => openModal(card.dataset.id));
  });
}

function renderGallery() {
  galleryContainer.innerHTML = gallerySections
    .map((section, sectionIndex) => {
      const sectionId = `gallery-section-${sectionIndex}`;
      return `
        <section class="gallery-group" aria-label="${escapeHtml(section.title)}">
          <div class="gallery-group-heading">
            <h3>${escapeHtml(section.title)}</h3>
            <p>${escapeHtml(section.note)}</p>
          </div>
          <div class="gallery-group-grid">
            ${section.items
              .map(
                (item, itemIndex) => {
                  const action = item.href ? "查看详情" : "查看原图";
                  return `
                  <button
                    class="gallery-card"
                    type="button"
                    data-section="${escapeHtml(sectionId)}"
                    data-index="${itemIndex}"
                    onclick="openGalleryModal('${escapeHtml(sectionId)}', ${itemIndex})"
                    aria-label="${escapeHtml(`${item.title} ${action}`)}"
                  >
                    <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.title)}" decoding="async" />
                    <em>${escapeHtml(action)}</em>
                    <span>
                      <strong>${escapeHtml(item.title)}</strong>
                      ${escapeHtml(item.note)}
                    </span>
                  </button>
                `;
                },
              )
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");

}

function renderFilters() {
  const types = ["全部", ...Object.keys(typeConfig).filter((type) => type !== "全部")];
  filtersContainer.innerHTML = types
    .map(
      (type) => `
        <button
          class="filter-button ${activeType === type ? "active" : ""}"
          type="button"
          role="tab"
          aria-selected="${activeType === type}"
          data-type="${escapeHtml(type)}"
        >
          ${escapeHtml(type)}
        </button>
      `,
    )
    .join("");

  filtersContainer.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeType = button.dataset.type;
      renderFilters();
      renderTimeline();
      updateTimelineProgress();
    });
  });
}

function updateTimelineProgress() {
  if (!timelineProgressBar || !timelineContainer) return;
  const shell = timelineContainer.closest(".timeline-shell") || timelineContainer;
  const rect = shell.getBoundingClientRect();
  const viewportAnchor = window.innerHeight * 0.7;
  const start = viewportAnchor - rect.top;
  const total = rect.height;
  const progress = Math.min(1, Math.max(0.04, start / Math.max(total, 1)));
  timelineProgressBar.style.transform = `translateX(-50%) scaleY(${progress})`;

  timelineContainer.querySelectorAll(".timeline-card").forEach((card) => {
    const cardRect = card.getBoundingClientRect();
    const cardCenter = cardRect.top + cardRect.height / 2;
    card.classList.toggle("is-active", Math.abs(cardCenter - window.innerHeight * 0.52) < cardRect.height * 0.62);
  });
}

function setupTimelineMotion() {
  if (!timelineContainer) return;

  timelineObserver?.disconnect();
  timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    {
      threshold: 0.35,
      rootMargin: "0px 0px -12% 0px",
    },
  );

  timelineContainer.querySelectorAll(".timeline-card").forEach((card, index) => {
    card.style.transitionDelay = `${Math.min(index * 46, 320)}ms`;
    timelineObserver.observe(card);
  });

  timelineContainer.querySelector(".timeline-card")?.classList.add("in-view");

  updateTimelineProgress();
}

function renderTimeline() {
  const filtered = activeType === "全部" ? nodes : nodes.filter((node) => node.type === activeType);
  timelineContainer.innerHTML = filtered
    .map((node) => {
      const color = typeConfig[node.type].color;
      const image = node.images?.[0];
      const metricsHtml = node.metrics
        .map(([value, label]) => `<span class="mini-metric"><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>`)
        .join("");
      const tagsHtml = node.keywords
        .slice(0, 4)
        .map((keyword) => `<span class="tag">${escapeHtml(keyword)}</span>`)
        .join("");

      return `
        <button class="timeline-card" type="button" style="--node-color: ${color}" data-id="${escapeHtml(node.id)}">
          <div class="timeline-inner ${image ? "has-thumb" : ""}">
            <div class="timeline-date">${escapeHtml(node.date)}</div>
            <div>
              <div class="timeline-title-row">
                <span class="tag type-tag">${escapeHtml(node.status || node.type)}</span>
                <h3>${escapeHtml(node.title)}</h3>
              </div>
              <p>${escapeHtml(node.org)}</p>
              <p>${escapeHtml(node.oneLiner)}</p>
              <div class="metric-row">${metricsHtml}</div>
              <div class="tag-row" style="margin-top: 12px">${tagsHtml}</div>
            </div>
            ${
              image
                ? `<figure class="timeline-thumb"><img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.caption || node.title)}" decoding="async" /></figure>`
                : ""
            }
          </div>
        </button>
      `;
    })
    .join("");

  timelineContainer.querySelectorAll(".timeline-card").forEach((card) => {
    card.addEventListener("click", () => openModal(card.dataset.id));
  });

  setupTimelineMotion();
}

function renderList(items) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderNodeImages(node) {
  if (!node.images?.length) return "";
  return `
    <div class="modal-images">
      ${node.images
        .map(
          (image) => `
            <figure>
              <a href="${escapeHtml(image.full || image.src)}" target="_blank" rel="noreferrer">
                <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.caption || node.title)}" decoding="async" />
              </a>
              <figcaption>
                <span>${escapeHtml(image.type || "图片")}</span>
                ${escapeHtml(image.caption || node.title)}
              </figcaption>
            </figure>
          `,
        )
        .join("")}
    </div>
  `;
}

function openGalleryModal(sectionId, itemIndex) {
  const sectionIndex = Number(String(sectionId || "").replace("gallery-section-", ""));
  const section = gallerySections[sectionIndex];
  const item = section?.items?.[itemIndex];
  if (!item) return;

  const linkHtml = item.href
    ? `<a href="${escapeHtml(item.href)}" target="_blank" rel="noreferrer">打开公开链接</a>`
    : "";
  const imageHtml = item.full
    ? `<a href="${escapeHtml(item.full)}" target="_blank" rel="noreferrer">打开原图</a>`
    : "";
  const actionHtml = [linkHtml, imageHtml].filter(Boolean).join("");

  modalContent.innerHTML = `
    <article class="modal-body gallery-modal">
      <div class="modal-meta">
        <span class="tag type-tag">${escapeHtml(section.title)}</span>
        <span class="tag">${escapeHtml(item.href ? "公开链接" : "图片素材")}</span>
      </div>
      <h2 id="modal-title">${escapeHtml(item.title)}</h2>
      <p class="modal-lede">${escapeHtml(item.note)}</p>
      <figure class="gallery-modal-figure">
        <img src="${escapeHtml(item.full || item.src)}" alt="${escapeHtml(item.title)}" decoding="async" />
      </figure>
      ${actionHtml ? `<div class="link-row gallery-modal-actions">${actionHtml}</div>` : ""}
    </article>
  `;

  modal.classList.add("gallery-detail-modal");
  modal.hidden = false;
  modalBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

window.openGalleryModal = openGalleryModal;

function openModal(id) {
  const node = nodes.find((item) => item.id === id);
  if (!node) return;

  const color = typeConfig[node.type].color;
  const metricsHtml = node.metrics
    .map(([value, label]) => `<span class="mini-metric"><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>`)
    .join("");
  const keywordsHtml = node.keywords.map((keyword) => `<span class="tag">${escapeHtml(keyword)}</span>`).join("");
  const linksHtml = node.links
    ? node.links.map(([label, url]) => `<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`).join("")
    : "";

  modalContent.innerHTML = `
    <article class="modal-body" style="--node-color: ${color}">
      <div class="modal-meta">
        <span class="tag type-tag">${escapeHtml(node.status || node.type)}</span>
        <span class="tag">${escapeHtml(node.date)}</span>
        <span class="tag">${escapeHtml(node.org)}</span>
      </div>
      <h2 id="modal-title">${escapeHtml(node.title)}</h2>
      <p class="modal-lede">${escapeHtml(node.abstract || node.oneLiner)}</p>

      ${renderNodeImages(node)}

      <div class="metric-row">${metricsHtml}</div>
      <div class="tag-row" style="margin-top: 12px">${keywordsHtml}</div>

      ${
        node.contribution?.length
          ? `<section class="modal-section"><h3>研究贡献</h3>${renderList(node.contribution)}</section>`
          : ""
      }

      <div class="detail-grid">
        <section class="detail-box">
          <h3>背景</h3>
          <p>${escapeHtml(node.detail.background)}</p>
        </section>
        <section class="detail-box">
          <h3>任务</h3>
          <p>${escapeHtml(node.detail.task)}</p>
        </section>
        <section class="detail-box">
          <h3>行动</h3>
          ${renderList(node.detail.action)}
        </section>
        <section class="detail-box">
          <h3>结果</h3>
          <p>${escapeHtml(node.detail.result)}</p>
        </section>
      </div>

      <section class="modal-section">
        <h3>展开来看</h3>
        <p class="modal-lede">${escapeHtml(node.detail.talk)}</p>
      </section>

      ${
        linksHtml
          ? `<section class="modal-section"><h3>相关链接</h3><div class="link-row">${linksHtml}</div></section>`
          : ""
      }
    </article>
  `;

  modal.classList.remove("gallery-detail-modal");
  modal.hidden = false;
  modalBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  modal.classList.remove("gallery-detail-modal");
  modal.hidden = true;
  modalBackdrop.hidden = true;
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeModal();
  }
});

renderMetrics();
renderSocialProof();
renderWorkflow();
renderProjects();
renderCapabilities();
renderPapers();
renderGallery();
renderFilters();
renderTimeline();
window.addEventListener("scroll", updateTimelineProgress, { passive: true });
window.addEventListener("resize", updateTimelineProgress);
