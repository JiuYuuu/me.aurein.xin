// 纯 JavaScript 逻辑：开屏移除、日期计算、音乐状态、邮箱复制和照片墙自动滚动。
(function () {
  "use strict";

  const DAY_MS = 24 * 60 * 60 * 1000;

  function copyWithFallback(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  window.portfolioApp = function portfolioApp() {
    return {
      config: window.CONFIG,
      darkMode: false,
      showSplash: true,
      showQR: false,
      emailCopied: false,
      musicPlaying: false,
      cardFlipped: false,
      gardenDays: 0,
      galleryTimer: null,
      galleryPaused: false,

      init() {
        if (!this.config) {
          throw new Error("window.CONFIG is required before app.js runs.");
        }

        document.documentElement.lang = this.config.meta.lang || "zh-CN";
        document.title = this.config.meta.title || "Portfolio";
        this.darkMode = window.matchMedia?.("(prefers-color-scheme: dark)").matches || false;
        this.calculateGardenDays();

        // x-if 会在 showSplash 变为 false 后把开屏节点从 DOM 中移除。
        window.setTimeout(() => {
          this.showSplash = false;
        }, this.config.splash.durationMs || 2500);
      },

      toggleDarkMode() {
        this.darkMode = !this.darkMode;
      },

      calculateGardenDays() {
        const [year, month, day] = this.config.garden.startDate.split("-").map(Number);
        const start = new Date(year, month - 1, day);
        const now = new Date();
        const startDate = new Date(start.getFullYear(), start.getMonth(), start.getDate());
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        this.gardenDays = Math.max(0, Math.floor((today - startDate) / DAY_MS));
      },

      async copyEmail() {
        const email = this.config.contacts.email;

        try {
          if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(email);
          } else {
            copyWithFallback(email);
          }
          this.emailCopied = true;
          window.setTimeout(() => {
            this.emailCopied = false;
          }, 2000);
        } catch (error) {
          copyWithFallback(email);
          this.emailCopied = true;
          window.setTimeout(() => {
            this.emailCopied = false;
          }, 2000);
        }
      },

      runSocialAction(item) {
        if (item.type === "email") {
          this.copyEmail();
          return;
        }

        if (item.type === "qr") {
          this.showQR = true;
        }
      },

      toggleMusic() {
        const audio = this.$refs.audio;

        if (!audio || !this.config.music.audioUrl) {
          this.musicPlaying = !this.musicPlaying;
          return;
        }

        if (this.musicPlaying) {
          audio.pause();
          this.musicPlaying = false;
          return;
        }

        audio.play()
          .then(() => {
            this.musicPlaying = true;
          })
          .catch(() => {
            // 浏览器阻止播放时，仍保留 UI 反馈，方便无音频地址时使用。
            this.musicPlaying = !this.musicPlaying;
          });
      },

      handleAudioEnded() {
        this.musicPlaying = false;
      },

      registerGallery(element) {
        if (!element) {
          return;
        }

        window.clearInterval(this.galleryTimer);
        this.galleryTimer = window.setInterval(() => {
          if (!this.galleryPaused) {
            this.scrollGallery(element);
          }
        }, this.config.gallery.autoScrollMs || 3000);
      },

      scrollGallery(element) {
        const nearEnd = element.scrollLeft + element.clientWidth >= element.scrollWidth - 12;
        const step = Math.min(240, Math.max(180, element.clientWidth * 0.72));

        if (nearEnd) {
          element.scrollTo({ left: 0, behavior: "smooth" });
          return;
        }

        element.scrollBy({ left: step, behavior: "smooth" });
      },

      pauseGallery() {
        this.galleryPaused = true;
      },

      resumeGallery() {
        window.setTimeout(() => {
          this.galleryPaused = false;
        }, 1200);
      }
    };
  };
})();
