// 全局配置文件：后续替换个人信息时，优先修改这里。
// 页面逻辑会通过 window.CONFIG 读取文本、链接、图片 URL 和日期。
window.CONFIG = {
  meta: {
    title: "Aurein (舊雨) - Portfolio",
    lang: "zh-CN"
  },

  splash: {
    brand: "Aurein",
    durationMs: 2500
  },

  ui: {
    status: "Sleeeeeeeping...",
    darkModeLabel: "切换明暗模式",
    tapHint: "-- Tap to Hack --",
    copiedText: "Copied!",
    copyEmailLabel: "复制邮箱",
    openQrLabel: "打开社交抽屉",
    closeLabel: "关闭",
    footerPrefix: "Digital Garden 已生长",
    footerSuffix: "天"
  },

  profile: {
    avatarUrl: "https://cdn.jsdelivr.net/gh/JiuYuuu/Blog-images/head.jpeg",
    avatarAlt: "Aurein",
    name: "舊雨",
    handle: "Aurein",
    quote: ["长夜伴浪破晓梦，", "梦晓浪破伴夜长"],

    // 名片正面的标签：新增、删除或改名都只需要修改这个数组。
    tags: [
      { icon: "📖", label: "学生" },
      { icon: "🎮", label: "游戏" },
      { icon: "💻", label: "计科" }
    ]
  },

  cardBack: {
    terminalTitle: "aurein@macbook-m4:~",
    commands: [
      {
        command: "cat application.yml",
        output: [
          "aurein:",
          "  identity: Student & Backend Developer",
          "  focus:",
          "    - Backend: [Java, Spring-Boot, MySQL]",
          "  environment:",
          "    local: MacBook-Air-M4",
          "    server: Debian-11.1.0",
          "  status: \"🟢 System Running\""
        ].map(line => line.replace(/ /g, '\u00A0')),
        accent: "cyan"
      },
      {
        command: "cat stack.json",
        output: ['["HTML5", "CSS3", "Alpine.js"]'],
        accent: "muted"
      },
    ]
  },

  contacts: {
    email: "jiuyuuu233@gmail.com"
  },

  // 社交链接排序：GitHub、网易云音乐、个人博客、Bilibili、email、社交抽屉。
  socialLinks: [
    {
      type: "link",
      name: "GitHub",
      url: "https://github.com/JiuYuuu",
      color: "#1f2937",
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>'
    },
    {
      type: "link",
      name: "网易云音乐",
      url: "https://music.163.com/#/user/home?id=130607864",
      color: "#D43C33",
      icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>NetEase Cloud Music</title><path d="M13.046 9.388a3.919 3.919 0 0 0-.66.19c-.809.312-1.447.991-1.666 1.775a2.269 2.269 0 0 0-.074.81c.048.546.333 1.05.764 1.35a1.483 1.483 0 0 0 2.01-.286c.406-.531.355-1.183.24-1.636-.098-.387-.22-.816-.345-1.249a64.76 64.76 0 0 1-.269-.954zm-.82 10.07c-3.984 0-7.224-3.24-7.224-7.223 0-.98.226-3.02 1.884-4.822A7.188 7.188 0 0 1 9.502 5.6a.792.792 0 1 1 .587 1.472 5.619 5.619 0 0 0-2.795 2.462 5.538 5.538 0 0 0-.707 2.7 5.645 5.645 0 0 0 5.638 5.638c1.844 0 3.627-.953 4.542-2.428 1.042-1.68.772-3.931-.627-5.238a3.299 3.299 0 0 0-1.437-.777c.172.589.334 1.18.494 1.772.284 1.12.1 2.181-.519 2.989-.39.51-.956.888-1.592 1.064a3.038 3.038 0 0 1-2.58-.44 3.45 3.45 0 0 1-1.44-2.514c-.04-.467.002-.93.128-1.376.35-1.256 1.356-2.339 2.622-2.826a5.5 5.5 0 0 1 .823-.246l-.134-.505c-.37-1.371.25-2.579 1.547-3.007.329-.109.68-.145 1.025-.105.792.09 1.476.592 1.709 1.023.258.507-.096 1.153-.706 1.153a.788.788 0 0 1-.54-.213c-.088-.08-.163-.174-.259-.247a.825.825 0 0 0-.632-.166.807.807 0 0 0-.634.551c-.056.191-.031.406.02.595.07.256.159.597.217.82 1.11.098 2.162.54 2.97 1.296 1.974 1.844 2.35 4.886.892 7.233-1.197 1.93-3.509 3.177-5.889 3.177zM0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0 0 5.373 0 12Z"/></svg>'    },
    {
      type: "link",
      name: "个人博客",
      url: "https://aurein.xin/",
      color: "#0f766e",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>'    },
    {
      type: "link",
      name: "Steam",
      url: "你的 Steam 个人主页链接", 
      color: "#1b2838", 
      icon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Steam</title><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/></svg>'
      },
    {
      type: "email",
      name: "email",
      color: "#334155",
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>'
    },
    {
      type: "qr",
      name: "社交抽屉",
      color: "#111827",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" /></svg>'
   }
  ],

  qr: {
    title: "Connect",
    subtitle: "Scan to add me",
    imageUrl: "https://cdn.jsdelivr.net/gh/JiuYuuu/Blog-images/id/qqr.jpg",
    imageAlt: "Aurein QR Code"
  },

  music: {
    title: "ばかじゃないのに",
    artist: "ずっと真夜中でいいのに。",
    coverUrl: "https://cdn.jsdelivr.net/gh/JiuYuuu/Blog-images/id/music.jpg",
    coverAlt: "Album Art",

    // 可填入 mp3/ogg 地址；留空时按钮只切换播放状态和封面旋转。
    audioUrl: "https://api.moeyao.cn/meting/?type=url&id=1858866241"
  },

  gallery: {
    title: "Moments",
    hint: "Swipe ->",
    autoScrollMs: 3000,
    images: [
      {
        url: "https://cdn.jsdelivr.net/gh/JiuYuuu/Blog-images/id/photo1.jpg",
        alt: "Code editor"
      },
      {
        url: "https://cdn.jsdelivr.net/gh/JiuYuuu/Blog-images/id/photo2.jpg",
        alt: "Gaming setup"
      },
      {
        url: "https://cdn.jsdelivr.net/gh/JiuYuuu/Blog-images/id/photo3.jpg",
        alt: "Writing desk"
      },
      {
        url: "https://cdn.jsdelivr.net/gh/JiuYuuu/Blog-images/id/photo4.jpg",
        alt: "Laptop workspace"
      }
    ]
  },

  garden: {
    // 动态计时器起始日期，格式保持 YYYY-MM-DD。
    startDate: "2026-4-22"
  }
};
