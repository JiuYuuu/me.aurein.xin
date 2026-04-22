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
    status: "Currently Coding",
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
      { icon: "📖", label: "读书" },
      { icon: "🎮", label: "游戏" },
      { icon: "💻", label: "程序员" }
    ]
  },

  cardBack: {
    terminalTitle: "aurein@macbook-m4:~",
    commands: [
      {
        command: "whoami",
        output: ["Dev | Student | Coder"],
        accent: "muted"
      },
      {
        command: "cat stack.json",
        output: ['["HTML5", "CSS3", "Alpine.js"]'],
        accent: "muted"
      },
      {
        command: "ls ./passions",
        output: ["> UI_Micro_Interactions", "> Glassmorphism", "> Cyber_Security"],
        accent: "cyan"
      }
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
      url: "https://github.com/",
      color: "#1f2937",
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>'
    },
    {
      type: "link",
      name: "网易云音乐",
      url: "https://music.163.com/#/user/home?id=130607864",
      color: "#c20c0c",
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M15.8 8.3c-1.3-.6-2.9-.7-4.3-.2-2.4.9-3.8 3.4-3.1 5.7.5 1.7 2.1 2.6 3.7 2.1 1.2-.4 1.9-1.6 1.6-2.7-.3-.8-1.1-1.2-1.9-.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path d="M14.2 11.3V6.8l3-.8v4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>'
    },
    {
      type: "link",
      name: "个人博客",
      url: "https://aurein.xin/",
      color: "#0f766e",
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H7a3 3 0 0 0-3 3V5.5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M7 18V3M10 8h6M10 12h5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>'
    },
    {
      type: "link",
      name: "Bilibili",
      url: "https://space.bilibili.com/39397721",
      color: "#fb7299",
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M7 4l3 3M17 4l-3 3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><circle cx="9" cy="13" r="1.4" fill="currentColor"/><circle cx="15" cy="13" r="1.4" fill="currentColor"/><path d="M10 17h4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>'
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
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="2"/><rect x="14" y="3" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="2"/><rect x="14" y="14" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="2"/><rect x="3" y="14" width="7" height="7" rx="1" fill="none" stroke="currentColor" stroke-width="2"/></svg>'
    }
  ],

  qr: {
    title: "Connect",
    subtitle: "Scan to add",
    imageUrl: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=Aurein_Connection",
    imageAlt: "Aurein QR Code"
  },

  music: {
    title: "Cyber Drift",
    artist: "Aurein's Playlist",
    coverUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&auto=format&fit=crop",
    coverAlt: "Album Art",

    // 可填入 mp3/ogg 地址；留空时按钮只切换播放状态和封面旋转。
    audioUrl: ""
  },

  gallery: {
    title: "Moments",
    hint: "Swipe ->",
    autoScrollMs: 3000,
    images: [
      {
        url: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
        alt: "Code editor"
      },
      {
        url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
        alt: "Gaming setup"
      },
      {
        url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
        alt: "Writing desk"
      },
      {
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
        alt: "Laptop workspace"
      }
    ]
  },

  garden: {
    // 动态计时器起始日期，格式保持 YYYY-MM-DD。
    startDate: "2026-4-22"
  }
};
