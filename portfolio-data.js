/* W1nkxX full portfolio archive */
(() => {
  const moviePosters = Array.from({ length: 12 }, (_, index) => `media/portfolio/graphics/movie-posters/poster-${String(index + 1).padStart(2, "0")}.webp`);
  const cardSeries = Array.from({ length: 6 }, (_, index) => `media/portfolio/graphics/card-series/card-${String(index + 1).padStart(2, "0")}.webp`);
  const planningPages = Array.from({ length: 32 }, (_, index) => `media/portfolio/planning/pages/page-${String(index + 1).padStart(2, "0")}.webp`);

  window.W1NKXX_PORTFOLIO = {
    categories: [
      { id: "all", label: { zh: "全部", en: "All" } },
      { id: "graphics", label: { zh: "平面作品", en: "Graphics" } },
      { id: "planning", label: { zh: "策划案", en: "Planning" } },
      { id: "video", label: { zh: "视频作品", en: "Video" } }
    ],
    works: [
      {
        id: "movie-poster-series",
        category: "graphics",
        type: "gallery",
        featured: true,
        cover: moviePosters[0],
        gallery: moviePosters,
        title: { zh: "电影海报练习系列", en: "Movie Poster Study Series" },
        meta: { zh: "12 张 / 个人练习", en: "12 posters / Personal studies" },
        summary: { zh: "围绕悬疑、惊悚与东方叙事展开的电影海报系列，练习图像合成、标题设计和氛围塑造。", en: "A series of suspense, thriller, and East-Asian narrative poster studies focused on compositing, title design, and atmosphere." }
      },
      {
        id: "card-design-series",
        category: "graphics",
        type: "gallery",
        cover: cardSeries[0],
        gallery: cardSeries,
        title: { zh: "角色卡牌设计", en: "Role Card Design" },
        meta: { zh: "6 张 / 系列设计", en: "6 cards / Design series" },
        summary: { zh: "以统一网格、装饰边框和角色符号构成的桌游角色卡牌视觉系统。", en: "A tabletop role-card visual system built with a consistent grid, ornamental frame, and role-specific symbols." }
      },
      {
        id: "bengbu-glass-valley",
        category: "graphics",
        type: "image",
        featured: true,
        cover: "media/portfolio/graphics/bengbu-glass-valley.webp",
        asset: "media/portfolio/graphics/bengbu-glass-valley.webp",
        title: { zh: "中国·蚌埠 / 中国玻璃谷", en: "Bengbu · China Glass Valley" },
        meta: { zh: "城市宣传 / 超宽幅视觉", en: "City promotion / Panoramic visual" },
        summary: { zh: "将城市地标、玻璃产业意象与信息层级整合到超宽幅宣传画面中。", en: "A panoramic promotional visual integrating city landmarks, the glass industry, and information hierarchy." }
      },
      {
        id: "company-profile",
        category: "graphics",
        type: "image",
        cover: "media/portfolio/graphics/company-profile.webp",
        asset: "media/portfolio/graphics/company-profile.webp",
        title: { zh: "公司简介长图", en: "Company Profile Layout" },
        meta: { zh: "企业介绍 / 长图排版", en: "Corporate profile / Long-form layout" },
        summary: { zh: "以高对比配色和模块化结构组织公司信息的纵向长图。", en: "A vertical company profile organized through high-contrast colour and modular information blocks." }
      },
      {
        id: "romance-show-plan",
        category: "graphics",
        type: "image",
        cover: "media/portfolio/graphics/romance-show-plan.webp",
        asset: "media/portfolio/graphics/romance-show-plan.webp",
        title: { zh: "恋综策划案视觉", en: "Dating Show Proposal Visual" },
        meta: { zh: "活动策划 / 长图", en: "Campaign concept / Long-form visual" },
        summary: { zh: "围绕情感主题构建的高饱和宣传长图与策划信息展示。", en: "A high-saturation long-form visual presenting a romance-themed campaign concept." }
      },
      {
        id: "campus-recruitment",
        category: "graphics",
        type: "image",
        cover: "media/portfolio/graphics/campus-recruitment.webp",
        asset: "media/portfolio/graphics/campus-recruitment.webp",
        title: { zh: "校园招聘长图", en: "Campus Recruitment Visual" },
        meta: { zh: "招聘传播 / 信息设计", en: "Recruitment / Information design" },
        summary: { zh: "面向校园人群的信息型招聘长图，结合插画、职位信息与行动引导。", en: "An information-led recruitment visual combining illustration, role details, and a clear call to action." }
      },
      {
        id: "liuliumei-brand-plan",
        category: "planning",
        type: "pdf",
        featured: true,
        cover: planningPages[0],
        gallery: planningPages,
        asset: "media/portfolio/planning/liuliumei-brand-plan.pdf",
        title: { zh: "溜溜梅品牌营销策划案", en: "Liuliumei Brand Marketing Plan" },
        meta: { zh: "32 页 / 品牌策略与执行", en: "32 pages / Brand strategy & activation" },
        summary: { zh: "从市场调研、消费者与竞品分析，到传播主题、线上线下活动、脚本和预算的完整策划。", en: "A complete plan spanning research, audience and competitor analysis, campaign direction, online and offline activation, scripting, and budget." }
      },
      {
        id: "app-mg",
        category: "video",
        type: "video",
        cover: "media/portfolio/video-posters/app-mg.jpg",
        preview: "media/portfolio/video-previews/app-mg-preview.mp4",
        asset: "media/portfolio/videos/app-mg.mp4",
        title: { zh: "APP 展示 MG 动画", en: "App Showcase Motion Graphics" },
        meta: { zh: "个人练习 / MG 动画", en: "Personal study / Motion graphics" },
        summary: { zh: "以界面层级、空间推拉和节奏转场完成的 APP 功能展示练习。", en: "An app showcase study built around interface hierarchy, spatial motion, and rhythmic transitions." }
      },
      {
        id: "mg-handdrawn",
        category: "video",
        type: "video",
        cover: "media/portfolio/video-posters/mg-handdrawn.jpg",
        preview: "media/portfolio/video-previews/mg-handdrawn-preview.mp4",
        asset: "media/portfolio/videos/mg-handdrawn.mp4",
        title: { zh: "MG + 手绘融合动画", en: "Motion Graphics + Hand-drawn Animation" },
        meta: { zh: "个人练习 / 融合动画", en: "Personal study / Mixed animation" },
        summary: { zh: "将图形动画与手绘质感结合，探索风格切换与镜头衔接。", en: "A mixed-animation study combining graphic motion with a hand-drawn texture and transitions." }
      },
      {
        id: "editing-montage",
        category: "video",
        type: "video",
        cover: "media/portfolio/video-posters/editing-montage.jpg",
        preview: "media/portfolio/video-previews/editing-montage-preview.mp4",
        asset: "media/portfolio/videos/editing-montage.mp4",
        title: { zh: "个人混剪练习 01", en: "Editing Montage Study 01" },
        meta: { zh: "个人练习 / 节奏剪辑", en: "Personal study / Rhythmic editing" },
        summary: { zh: "围绕音乐节奏、动作匹配与情绪推进完成的混剪练习。", en: "A montage study focused on musical rhythm, action matching, and emotional progression." }
      },
      {
        id: "liars-bar-animation",
        category: "video",
        type: "video",
        cover: "media/portfolio/video-posters/liars-bar-animation.jpg",
        preview: "media/portfolio/video-previews/liars-bar-animation-preview.mp4",
        asset: "media/portfolio/videos/liars-bar-animation.mp4",
        title: { zh: "《骗子酒馆》动画版", en: "Liar's Bar Animated Edition" },
        meta: { zh: "个人练习 / 游戏内容", en: "Personal study / Game content" },
        summary: { zh: "以角色动画和情境表演重新组织游戏主题内容。", en: "A game-themed piece reworked through character animation and situational performance." }
      },
      {
        id: "naraka-motion",
        category: "video",
        type: "video",
        cover: "media/portfolio/video-posters/naraka-motion.jpg",
        asset: "media/portfolio/videos/naraka-motion.mp4",
        title: { zh: "《永劫无间》蓝梦时装动态效果", en: "NARAKA: BLADEPOINT Costume Motion Study" },
        meta: { zh: "动态效果 / 竖屏", en: "Motion effect / Vertical" },
        summary: { zh: "围绕角色时装展示制作的短时长竖屏动态效果。", en: "A short vertical motion piece designed around a character costume showcase." }
      },
      {
        id: "hanwei-product-mg",
        category: "video",
        type: "video",
        featured: true,
        cover: "media/portfolio/video-posters/hanwei-product-mg.jpg",
        preview: "media/portfolio/video-previews/hanwei-product-mg-preview.mp4",
        asset: "media/portfolio/videos/hanwei-product-mg.mp4",
        title: { zh: "汉为集团产品宣传 MG 动画", en: "Hanwei Group Product Motion Graphics" },
        meta: { zh: "产品宣传 / MG 动画", en: "Product promotion / Motion graphics" },
        summary: { zh: "用角色、图标和场景动画解释产品信息与使用情境。", en: "A product explainer using character, icon, and scene animation to communicate features and context." }
      },
      {
        id: "hot-blooded-jianghu",
        category: "video",
        type: "video",
        cover: "media/portfolio/video-posters/hot-blooded-jianghu.jpg",
        preview: "media/portfolio/video-previews/hot-blooded-jianghu-preview.mp4",
        asset: "media/portfolio/videos/hot-blooded-jianghu.mp4",
        title: { zh: "《热血江湖：归来》江湖小剧场", en: "Scions of Fate: Return — Mini Theatre" },
        meta: { zh: "游戏内容 / 剧情短片", en: "Game content / Narrative short" },
        summary: { zh: "围绕“谨防宵小”主题展开的游戏剧情类短片。", en: "A game narrative short built around the theme of recognizing deception in the martial world." }
      },
      {
        id: "conquerors-blade-01",
        category: "video",
        type: "video",
        cover: "media/portfolio/video-posters/conquerors-blade-01.jpg",
        asset: "media/portfolio/videos/conquerors-blade-01.mp4",
        title: { zh: "网易《战意》官号视频 01", en: "NetEase Conqueror's Blade Social Video 01" },
        meta: { zh: "官号内容 / 后期制作", en: "Official channel / Post-production" },
        summary: { zh: "游戏官号视频的剪辑、动态效果与包装制作。", en: "Editing, motion effects, and visual packaging for official game-channel content." }
      },
      {
        id: "conquerors-blade-02",
        category: "video",
        type: "video",
        featured: true,
        cover: "media/portfolio/video-posters/conquerors-blade-02.jpg",
        asset: "media/portfolio/videos/conquerors-blade-02.mp4",
        title: { zh: "网易《战意》官号视频 02", en: "NetEase Conqueror's Blade Social Video 02" },
        meta: { zh: "官号内容 / 后期制作", en: "Official channel / Post-production" },
        summary: { zh: "通过画面节奏、花字和特效强化游戏内容的观看氛围。", en: "A game-channel edit using pacing, kinetic titles, and effects to strengthen atmosphere." }
      },
      {
        id: "meituan-variety-teaser",
        category: "video",
        type: "video",
        cover: "media/portfolio/video-posters/meituan-variety-teaser.jpg",
        asset: "media/portfolio/videos/meituan-variety-teaser.mp4",
        title: { zh: "美团综艺先导片", en: "Meituan Variety Show Teaser" },
        meta: { zh: "品牌内容 / 含 AI 生成内容", en: "Brand content / Includes AI-generated material" },
        summary: { zh: "以悬念和节奏建立观看期待的综艺先导片，包含 AI 生成内容。", en: "A variety-show teaser designed around suspense and pacing, including AI-generated material." }
      },
      {
        id: "ubisoft-car-creator",
        category: "video",
        type: "video",
        cover: "media/portfolio/video-posters/ubisoft-car-creator.jpg",
        preview: "media/portfolio/video-previews/ubisoft-car-creator-preview.mp4",
        asset: "media/portfolio/videos/ubisoft-car-creator.mp4",
        title: { zh: "育碧 / 百大汽车 UP 的痛车灵感", en: "Ubisoft / Automotive Creator Feature" },
        meta: { zh: "品牌内容 / 人物与汽车", en: "Brand content / Creator & automotive" },
        summary: { zh: "围绕汽车创作者与痛车灵感展开的品牌视频内容。", en: "A branded video feature built around an automotive creator and the inspiration behind an art car." }
      }
    ]
  };
})();
