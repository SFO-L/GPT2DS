// ==UserScript==
// @name         ChatGPT → DeepSeek 外观（仅改外观）
// @namespace    https://chatgpt.com/
// @version      1.1.0
// @description  把 chatgpt.com 页面替换为 DeepSeek 风格外观与地址栏显示；ChatGPT 的功能与交互保持不变。
// @author       WorkBuddy
// @match        https://chatgpt.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(() => {
  'use strict';

  const TITLE = 'DeepSeek - 探索未至之境';
  const WHALE_PATH = 'M26.5174 3.39471C26.235 3.2567 26.1137 3.52006 25.9487 3.65346C25.8923 3.69659 25.8446 3.75294 25.7969 3.80469C25.3846 4.24516 24.9027 4.53439 24.2737 4.49989C23.3536 4.44814 22.5682 4.73737 21.8735 5.44119C21.7258 4.57349 21.2353 4.0554 20.4889 3.72304C20.0985 3.55054 19.7034 3.37746 19.4297 3.00197C19.2388 2.73459 19.1865 2.43673 19.091 2.14289C19.0301 1.96579 18.9697 1.78466 18.7656 1.75418C18.5442 1.71968 18.4574 1.90541 18.3705 2.06067C18.0232 2.69549 17.8887 3.39471 17.9019 4.10313C17.9324 5.6965 18.6051 6.96556 19.9421 7.86834C20.0939 7.97184 20.133 8.07535 20.0852 8.22658C19.9938 8.53766 19.8857 8.83955 19.7903 9.15063C19.7293 9.34901 19.6385 9.39271 19.4257 9.30588C18.692 8.9994 18.0583 8.54571 17.4982 7.99772C16.5477 7.07827 15.6881 6.06336 14.6162 5.26869C14.3644 5.08296 14.1125 4.91045 13.8521 4.746C12.7584 3.68394 13.9952 2.81164 14.2816 2.70814C14.5812 2.60003 14.3857 2.22857 13.4179 2.23317C12.4502 2.2372 11.5646 2.56151 10.4359 2.99335C10.2708 3.05832 10.0972 3.10547 9.91951 3.14457C8.8954 2.95022 7.83162 2.90709 6.72069 3.03245C4.62877 3.26533 2.95777 4.25436 1.72954 5.94261C0.254043 7.97184 -0.0932679 10.2777 0.33167 12.6824C0.778458 15.2171 2.07225 17.3153 4.06008 18.9558C6.12152 20.6567 8.49577 21.4905 11.2047 21.3306C12.8498 21.2358 14.6812 21.0155 16.7473 19.2669C17.2682 19.5262 17.8151 19.6297 18.7219 19.7074C19.4205 19.7724 20.0933 19.6729 20.6143 19.5648C21.4302 19.3923 21.3739 18.6367 21.0789 18.4981C18.6874 17.3843 19.2124 17.8374 18.7351 17.4706C19.9501 16.033 21.8063 13.4776 22.379 9.99821C22.4353 9.61409 22.5072 9.073 22.4986 8.76192C22.494 8.57216 22.5377 8.49856 22.7545 8.47671C23.3536 8.40771 23.935 8.24383 24.4692 7.94999C26.0188 7.10357 26.6439 5.71318 26.7911 4.04678C26.8129 3.79204 26.7865 3.52869 26.5174 3.39471ZM13.0143 18.3946C10.6964 16.5724 9.5722 15.9726 9.10816 15.9985C8.67402 16.0244 8.75222 16.5212 8.84768 16.8449C8.94773 17.1646 9.07768 17.3849 9.25996 17.6655C9.38589 17.8512 9.47272 18.1272 9.13404 18.3348C8.38766 18.7965 7.08985 18.1796 7.0289 18.1491C5.51833 17.2595 4.25559 16.0853 3.36546 14.4793C2.50581 12.9337 2.0067 11.2753 1.92447 9.50542C1.90262 9.07818 2.02855 8.92695 2.45406 8.84932C3.01413 8.74582 3.59144 8.72397 4.15093 8.80619C6.51656 9.15178 8.53027 10.2092 10.2185 11.8848C11.1822 12.8388 11.9114 13.979 12.6623 15.0929C13.461 16.2757 14.3201 17.4027 15.4144 18.3268C15.8008 18.6505 16.109 18.8966 16.404 19.0783C15.5144 19.1778 14.0297 19.1991 13.0143 18.3958V18.3946ZM14.1252 11.2489C14.1252 11.0591 14.277 10.9079 14.4679 10.9079C14.511 10.9079 14.5501 10.9165 14.5852 10.9292C14.6329 10.9464 14.6766 10.9723 14.7111 11.0114C14.7721 11.0718 14.8066 11.158 14.8066 11.2489C14.8066 11.4386 14.6548 11.5899 14.4639 11.5899C14.273 11.5899 14.1252 11.4386 14.1252 11.2489ZM17.5759 13.0188C17.3545 13.1096 17.1331 13.1873 16.9203 13.1959C16.5903 13.2131 16.2303 13.0791 16.0348 12.9153C15.7312 12.6605 15.5139 12.5179 15.423 12.0734C15.3839 11.8837 15.4057 11.5899 15.4402 11.4214C15.5185 11.0585 15.4316 10.8257 15.1757 10.614C14.9676 10.4415 14.7025 10.3938 14.4115 10.3938C14.3029 10.3938 14.2034 10.3461 14.1292 10.3076C14.0079 10.2472 13.9078 10.096 14.0033 9.91023C14.0338 9.84985 14.1815 9.70322 14.216 9.67734C14.6111 9.45251 15.0665 9.52612 15.488 9.6946C15.8784 9.85445 16.174 10.1477 16.5989 10.5623C17.033 11.0631 17.1112 11.2011 17.3585 11.5772C17.554 11.871 17.7317 12.1729 17.8536 12.5185C17.9272 12.7341 17.8317 12.9107 17.5759 13.0188Z';
  const WHALE_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 23" width="28" height="23"><path fill="#3964fe" d="' + WHALE_PATH + '"/></svg>';
  const WHALE_URL = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(WHALE_SVG);

  /*
   * 地址栏 DS 化：
   * 浏览器安全策略不允许把 history URL 改成真实的其他域名（会跨域报错）。
   * 因此保留真实 pathname/search，避免破坏 GPT 路由，
   * 只在 hash 中附加对应的 DeepSeek URL，让地址栏显示 DS 地址。
   */
  let dsUrlApplying = false;

  function dsTargetHash() {
    try {
      const u = new URL(window.location.href);
      if (u.hostname !== 'chatgpt.com') return null;
      const match = u.pathname.match(/^\/c\/([^/?#]+)/);
      if (match) {
        return '#https://chat.deepseek.com/a/chat/s/' + match[1] + u.search;
      }
      return '#https://chat.deepseek.com/';
    } catch (err) {
      return null;
    }
  }

  function applyDsUrl() {
    if (dsUrlApplying) return;
    const targetHash = dsTargetHash();
    if (!targetHash || window.location.hash === targetHash) return;
    dsUrlApplying = true;
    try {
      const u = new URL(window.location.href);
      u.hash = targetHash;
      window.history.replaceState(window.history.state, '', u.href);
    } catch (err) {
      // 浏览器策略不允许时保留原 URL，不影响页面功能
    } finally {
      dsUrlApplying = false;
    }
  }

  function patchHistory() {
    const originalPush = window.history.pushState;
    const originalReplace = window.history.replaceState;

    window.history.pushState = function (...args) {
      const result = originalPush.apply(this, args);
      applyDsUrl();
      return result;
    };

    window.history.replaceState = function (...args) {
      const result = originalReplace.apply(this, args);
      if (!dsUrlApplying) applyDsUrl();
      return result;
    };

    window.addEventListener('popstate', applyDsUrl);
    window.addEventListener('hashchange', applyDsUrl);
    applyDsUrl();
  }

  patchHistory();

  const CSS = `
html.ds-skin {
  --ds-brand: #3964fe;
  --ds-brand-soft: #5686fe;
  --ds-chip-bg: #edf3fe;
  --ds-chip-border: #d3e2ff;
  --ds-bg: #ffffff;
  --ds-sidebar: #f9fafb;
  --ds-border: #e1e5ee;
  --ds-text: #0f1115;
  --ds-text-2: #61666b;
  --ds-text-3: #81858c;
  --ds-user: #edf3fe;
  --ds-shadow: 0 8px 24px rgba(15, 17, 21, .05);
  color-scheme: light;

  --app-color-background-surface: var(--ds-bg) !important;
  --app-color-background-surface-under: var(--ds-bg) !important;
  --app-color-background-panel: var(--ds-sidebar) !important;
  --app-color-background-application-menu: var(--ds-bg) !important;
  --app-color-background-control: var(--ds-bg) !important;
  --color-background-control-opaque: var(--ds-bg) !important;
  --app-color-background-elevated-primary: var(--ds-bg) !important;
  --app-color-background-elevated-primary-opaque: var(--ds-bg) !important;
  --app-color-background-elevated-secondary: var(--ds-sidebar) !important;
  --app-color-background-elevated-secondary-opaque: var(--ds-sidebar) !important;
  --app-color-background-composer-action-bar: var(--ds-sidebar) !important;
  --app-color-border: var(--ds-border) !important;
  --app-color-border-light: var(--ds-border) !important;
  --app-color-border-heavy: var(--ds-border) !important;
  --app-color-text-foreground: var(--ds-text) !important;
  --app-color-text-foreground-secondary: var(--ds-text-2) !important;
  --app-color-text-foreground-tertiary: var(--ds-text-3) !important;
  --app-color-text-accent: var(--ds-brand) !important;
  --app-color-icon-primary: var(--ds-text) !important;
  --app-color-icon-secondary: var(--ds-text-2) !important;
  --app-color-icon-tertiary: var(--ds-text-3) !important;
  --color-background-user-message: var(--ds-user) !important;
  --color-text-user-message: var(--ds-text) !important;
  --color-background-composer-primary: var(--ds-brand-soft) !important;
  --color-text-composer-primary: #ffffff !important;
  --codex-base-accent: var(--ds-brand-soft) !important;
  --codex-base-ink: var(--ds-text) !important;
  --codex-base-surface: var(--ds-bg) !important;
}

html.ds-skin.ds-dark {
  --ds-brand: #5686fe;
  --ds-brand-soft: #5686fe;
  --ds-chip-bg: #1f2a44;
  --ds-chip-border: #33477a;
  --ds-bg: #151517;
  --ds-sidebar: #151517;
  --ds-border: #353638;
  --ds-text: #f9fafb;
  --ds-text-2: #cfd3d6;
  --ds-text-3: #adb2b8;
  --ds-user: #1f2a44;
  --ds-shadow: 0 8px 24px rgba(0, 0, 0, .32);
  color-scheme: dark;
}

html.ds-skin,
html.ds-skin body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", "Helvetica Neue", Arial, sans-serif !important;
}

html.ds-skin body {
  background: var(--ds-bg) !important;
  color: var(--ds-text) !important;
}

html.ds-skin .ds-hide { display: none !important; }

/* ---------- 侧边栏 ---------- */
html.ds-skin {
  --app-shell-animated-left-panel-width: 260px !important;
}

html.ds-skin aside[class*="app-shell-left-panel"] {
  flex: 0 0 260px !important;
  width: 260px !important;
  background: var(--ds-sidebar) !important;
  border-right: 1px solid var(--ds-border) !important;
}

html.ds-skin [class*="app-shell-sidebar"] {
  background: var(--ds-sidebar) !important;
}

html.ds-skin [class*="app-shell-sidebar"] [class*="nav-list"] button {
  border-radius: 8px !important;
  font-size: 13px !important;
  color: var(--ds-text) !important;
}

html.ds-skin [class*="app-shell-sidebar"] button[aria-label="新聊天"] {
  width: calc(100% - 32px) !important;
  height: 40px !important;
  margin: 8px 16px !important;
  background: var(--ds-bg) !important;
  border: 1px solid var(--ds-border) !important;
  border-radius: 10px !important;
  box-shadow: 0 1px 2px rgba(15, 17, 21, .04) !important;
  color: var(--ds-text) !important;
  font-weight: 500 !important;
}

html.ds-skin [class*="app-shell-sidebar"] button[aria-label="新聊天"] svg {
  color: var(--ds-text-2) !important;
}

/* ---------- 顶部品牌 ---------- */
.ds-brand {
  display: inline-flex !important;
  align-items: center !important;
  gap: 8px !important;
  color: var(--ds-brand) !important;
  font-size: 20px !important;
  font-weight: 700 !important;
  letter-spacing: -.4px !important;
  line-height: 1 !important;
}

.ds-brand img { width: 26px; height: 21px; display: block; }

/* ---------- 首页问候语 ---------- */
html.ds-skin [class*="Greeting-"] h1,
html.ds-skin [class*="Greeting-"] [class*="heading-xl"] {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 10px !important;
  font-size: 26px !important;
  font-weight: 600 !important;
  color: var(--ds-text) !important;
  line-height: 1.35 !important;
}

.ds-greeting-icon {
  display: inline-flex !important;
  width: 28px;
  height: 23px;
  vertical-align: middle;
}

.ds-greeting-icon img { width: 100%; height: 100%; display: block; }

/* ---------- 输入框 ---------- */
html.ds-skin [class*="ComposerLayoutRoot-"] {
  background: var(--ds-bg) !important;
  border: 1px solid var(--ds-border) !important;
  border-radius: 18px !important;
  box-shadow: var(--ds-shadow) !important;
  padding: 14px 16px 12px !important;
  min-height: 92px !important;
}

html.ds-skin [class*="ComposerLayoutBody-"] {
  display: flex !important;
  flex-direction: column !important;
  gap: 10px !important;
}

html.ds-skin [class*="ComposerLayoutFooter-"] {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  min-height: 32px !important;
}

html.ds-skin [class*="ComposerLayoutFooter-"] > [class*="FooterInput-"] { order: 0 !important; }
html.ds-skin [class*="ComposerLayoutFooter-"] > [class*="justify-self-start"] { order: 1 !important; }
html.ds-skin [class*="ComposerLayoutFooter-"] > [class*="justify-self-end"] { order: 2 !important; }
html.ds-skin [class*="ComposerLayoutFooter-"] > .z-20 {
  order: 3 !important;
  margin-left: auto !important;
}

html.ds-skin [class*="ComposerLayoutFooter-"] > div:has(button[class*="bg-composer-primary"]) {
  order: 9 !important;
  margin-left: auto !important;
}

html.ds-skin [class*="ComposerLayoutInput-"] [contenteditable="true"] {
  color: var(--ds-text) !important;
  font-size: 15px !important;
  line-height: 22px !important;
}

html.ds-skin [data-placeholder]::before { color: var(--ds-text-3) !important; }

.ds-chips {
  display: inline-flex !important;
  align-items: center !important;
  gap: 8px !important;
  pointer-events: none !important;
}

.ds-chip,
html.ds-skin button.ds-think {
  height: 28px !important;
  padding: 0 10px !important;
  background: var(--ds-chip-bg) !important;
  border: 1px solid var(--ds-chip-border) !important;
  border-radius: 8px !important;
  color: var(--ds-brand) !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  line-height: 26px !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 5px !important;
  white-space: nowrap !important;
}

html.ds-skin button.ds-think svg { display: none !important; }

.ds-chip-dot {
  width: 12px;
  height: 12px;
  flex: 0 0 12px;
  border-radius: 3px;
  border: 1.5px solid currentColor;
  opacity: .85;
}

html.ds-skin [class*="ComposerLayoutFooter-"] button[aria-label="添加文件等内容"] {
  width: 32px !important;
  height: 32px !important;
  border-radius: 8px !important;
  color: var(--ds-text-2) !important;
}

html.ds-skin [class*="ComposerLayoutFooter-"] button[aria-label="添加文件等内容"] svg { display: none !important; }
html.ds-skin [class*="ComposerLayoutFooter-"] button[aria-label="添加文件等内容"]::after {
  content: "📎";
  font-size: 16px;
  line-height: 1;
}

html.ds-skin [class*="ComposerLayoutFooter-"] button[class*="bg-composer-primary"] {
  width: 32px !important;
  height: 32px !important;
  border-radius: 50% !important;
  background: var(--ds-brand-soft) !important;
}

html.ds-skin [class*="ComposerLayoutFooter-"] button[class*="bg-composer-primary"] svg { display: none !important; }
html.ds-skin [class*="ComposerLayoutFooter-"] button[class*="bg-composer-primary"]::after {
  content: "↑";
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  line-height: 1;
}

/* GPT 首页快捷建议与推广卡片在 DeepSeek 中不存在 */
html.ds-skin [class*="BelowComposer-"] { display: none !important; }

/* ---------- 对话内容 ---------- */
html.ds-skin [data-message-author-role="user"] {
  background: var(--ds-user) !important;
  border-radius: 16px !important;
  color: var(--ds-text) !important;
}

html.ds-skin [data-message-author-role="assistant"] { color: var(--ds-text) !important; }
html.ds-skin [data-message-author-role] a { color: var(--ds-brand) !important; }
`;

  function addStyle() {
    if (document.getElementById('ds-skin-style')) return;
    const style = document.createElement('style');
    style.id = 'ds-skin-style';
    style.textContent = CSS;
    (document.head || document.documentElement).appendChild(style);
  }

  function syncRootClass() {
    const root = document.documentElement;
    if (!root) return;
    root.classList.add('ds-skin');
    const dark = root.getAttribute('data-theme') === 'dark' ||
      (root.classList.contains('ds-force-dark'));
    root.classList.toggle('ds-dark', dark);
  }

  function currentGreeting() {
    const h = new Date().getHours();
    if (h < 6) return '凌晨好，有什么我能帮你的吗？';
    if (h < 11) return '早上好，有什么我能帮你的吗？';
    if (h < 13) return '中午好，有什么我能帮你的吗？';
    if (h < 18) return '下午好，有什么我能帮你的吗？';
    return '晚上好，有什么我能帮你的吗？';
  }

  function rewriteBrand() {
    const nodes = document.querySelectorAll('span, div');
    nodes.forEach((el) => {
      const cls = String(el.className || '');
      if (!cls.includes('text-heading-sm')) return;
      if (!el.textContent.includes('ChatGPT')) return;
      if (el.dataset.dsBrand) return;
      el.dataset.dsBrand = '1';
      el.innerHTML =
        '<span class="ds-brand"><img src="' + WHALE_URL + '" alt="DeepSeek"><span>deepseek</span></span>';
    });
  }

  function rewriteGreeting() {
    const greeting = currentGreeting();
    const nodes = document.querySelectorAll('h1, [class*="heading-xl"]');
    nodes.forEach((el) => {
      if (!el.textContent.includes('我们从哪里开始？')) return;
      if (el.dataset.dsGreeting === greeting) return;
      el.dataset.dsGreeting = greeting;
      el.innerHTML =
        '<span class="ds-greeting-icon"><img src="' + WHALE_URL + '" alt=""></span>' +
        '<span>' + greeting + '</span>';
    });
  }

  function rewriteComposerText() {
    document.querySelectorAll('[role="textbox"][aria-label="询问 ChatGPT"]').forEach((el) => {
      if (el.getAttribute('aria-label') !== '给 DeepSeek 发送消息') {
        el.setAttribute('aria-label', '给 DeepSeek 发送消息');
      }
    });

    document.querySelectorAll('[data-placeholder="询问 ChatGPT"]').forEach((el) => {
      if (el.getAttribute('data-placeholder') !== '给 DeepSeek 发送消息') {
        el.setAttribute('data-placeholder', '给 DeepSeek 发送消息');
      }
    });
  }

  function decorateComposer() {
    document.querySelectorAll('[class*="ComposerLayoutFooter-"]').forEach((footer) => {
      const buttons = Array.from(footer.querySelectorAll('button'));
      const thinkBtn = buttons.find((btn) => {
        return btn.dataset.dsThink || btn.textContent.replace(/\s/g, '') === '思考';
      });

      if (!footer.querySelector('.ds-chips')) {
        const chips = document.createElement('span');
        chips.className = 'ds-chips';
        chips.innerHTML =
          '<span class="ds-chip"><span class="ds-chip-dot"></span>智能搜索</span>';
        if (thinkBtn && thinkBtn.parentElement) {
          thinkBtn.parentElement.insertBefore(chips, thinkBtn.nextSibling);
        } else {
          const plus = footer.querySelector('button[aria-label="添加文件等内容"]');
          if (plus && plus.parentElement) plus.parentElement.insertBefore(chips, plus.nextSibling);
          else footer.appendChild(chips);
        }
      }

      buttons.forEach((btn) => {
        if (btn.dataset.dsThink) return;
        if (btn.textContent.replace(/\s/g, '') !== '思考') return;
        btn.dataset.dsThink = '1';
        btn.classList.add('ds-think');
        btn.innerHTML = '<span class="ds-chip-dot"></span>深度思考';
      });
    });
  }

  function hidePromos() {
    document.querySelectorAll('button, [role="button"]').forEach((el) => {
      if (el.textContent.includes('获取优惠') || el.textContent.includes('免费优惠')) {
        el.classList.add('ds-hide');
      }
    });

    document.querySelectorAll('*').forEach((el) => {
      if (el.children.length !== 0) return;
      if (el.closest('script, style, template')) return;

      if (el.textContent.includes('免费优惠')) {
        const box = el.closest('button, [role="button"]');
        (box || el).classList.add('ds-hide');
      }

      if (el.textContent.includes('在 Chrome 浏览器中使用 ChatGPT')) {
        const banner = el.closest('[data-home-beacon-banner], [class*="ComposerBannerPortal-"]') || el.parentElement;
        if (banner && banner !== document.body) banner.classList.add('ds-hide');
      }
    });
  }

  function rewriteAssistantLabels() {
    document.querySelectorAll('[data-message-author-role="assistant"] *').forEach((el) => {
      if (el.children.length !== 0) return;
      if (el.textContent.trim() !== 'ChatGPT') return;
      if (el.dataset.dsAssistantLabel) return;
      el.dataset.dsAssistantLabel = '1';
      el.textContent = 'DeepSeek';
    });
  }

  function rewriteAll() {
    syncRootClass();
    try {
      rewriteBrand();
      rewriteGreeting();
      rewriteComposerText();
      decorateComposer();
      hidePromos();
      rewriteAssistantLabels();
    } catch (err) {
      // 外观脚本不应影响页面自身逻辑，忽略单次改写异常。
      console.debug('[ds-skin] rewrite skipped:', err);
    }
  }

  function setTitle() {
    if (document.title !== TITLE) document.title = TITLE;
    if (!document.querySelector('link[data-ds-favicon]')) {
      document.querySelectorAll('link[rel~="icon"]').forEach((link) => link.remove());
      const link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/svg+xml';
      link.href = WHALE_URL;
      link.dataset.dsFavicon = '1';
      document.head && document.head.appendChild(link);
    }
  }

  let scheduled = false;
  function scheduleRewrite() {
    if (scheduled) return;
    scheduled = true;
    const run = () => {
      scheduled = false;
      rewriteAll();
    };
    if (window.requestAnimationFrame) requestAnimationFrame(run);
    else setTimeout(run, 0);
  }

  function start() {
    addStyle();
    rewriteAll();
    setTitle();

    const observer = new MutationObserver(() => {
      scheduleRewrite();
      setTitle();
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'data-theme', 'aria-label', 'data-placeholder']
    });

    setInterval(() => {
      syncRootClass();
      setTitle();
      applyDsUrl();
    }, 800);

    window.__dsSkin = { reapply: rewriteAll };
  }

  syncRootClass();
  addStyle();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
