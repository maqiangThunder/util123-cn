/* ==========================================================================
   util123 工具箱 · 工具页公共脚本（/assets/tool.js）
   提供：主题切换（与首页共用 localStorage 键）、复制、轻提示、下载、
         HTML 转义、字节格式化等通用能力。所有工具页共用。
   ========================================================================== */
(function () {
  'use strict';
  var UY = window.UY = {};

  UY.$ = function (id) { return document.getElementById(id); };
  UY.qs = function (s, r) { return (r || document).querySelector(s); };
  UY.qsa = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---- HTML 转义（拼接 innerHTML 前必须过一遍） ---- */
  UY.esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  };

  /* ---- 轻提示 ---- */
  var toastEl = null, toastTimer = 0;
  UY.toast = function (msg) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    void toastEl.offsetWidth;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 1800);
  };

  /* ---- 复制（含安全上下文外的兜底） ---- */
  UY.copy = function (text) {
    text = String(text == null ? '' : text);
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(function () { return true; });
    }
    return new Promise(function (resolve) {
      try {
        var t = document.createElement('textarea');
        t.value = text;
        t.setAttribute('readonly', '');
        t.style.position = 'fixed';
        t.style.top = '-1000px';
        t.style.opacity = '0';
        document.body.appendChild(t);
        t.select();
        t.setSelectionRange(0, text.length);
        var ok = document.execCommand('copy');
        document.body.removeChild(t);
        resolve(ok);
      } catch (e) { resolve(false); }
    });
  };
  UY.copyWith = function (text, okMsg) {
    return UY.copy(text).then(function (ok) {
      UY.toast(ok ? (okMsg || '已复制') : '复制失败，请手动选择');
      return ok;
    });
  };

  /* ---- 下载 ---- */
  UY.download = function (filename, url) {
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  /* ---- 主题：与首页 / 其它工具页共用同一个 localStorage 键，切页不闪 ---- */
  UY.applyTheme = function (dark) {
    document.body.classList.toggle('dark', !!dark);
    var btn = UY.$('btnTheme');
    if (btn) btn.textContent = dark ? '☀️' : '🌙';
    var m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute('content', dark ? '#0d1117' : '#f6f8fa');
    try { localStorage.setItem('util123_theme', dark ? '1' : '0'); } catch (e) {}
  };
  UY.initTheme = function () {
    var btn = UY.$('btnTheme');
    if (btn && !btn.dataset.bound) {
      btn.dataset.bound = '1';
      btn.onclick = function () { UY.applyTheme(!document.body.classList.contains('dark')); };
    }
    var dark = false;
    try { dark = localStorage.getItem('util123_theme') === '1'; } catch (e) {}
    UY.applyTheme(dark);
  };

  /* ---- 小工具函数 ---- */
  UY.pad2 = function (n) { return (n < 10 ? '0' : '') + n; };
  /* 本地时间格式化：YYYY-MM-DD HH:mm:ss */
  UY.fmtLocal = function (d) {
    return d.getFullYear() + '-' + UY.pad2(d.getMonth() + 1) + '-' + UY.pad2(d.getDate()) + ' ' +
      UY.pad2(d.getHours()) + ':' + UY.pad2(d.getMinutes()) + ':' + UY.pad2(d.getSeconds());
  };
  /* UTC 时间格式化：YYYY-MM-DD HH:mm:ss UTC */
  UY.fmtUtc = function (d) {
    return d.getUTCFullYear() + '-' + UY.pad2(d.getUTCMonth() + 1) + '-' + UY.pad2(d.getUTCDate()) + ' ' +
      UY.pad2(d.getUTCHours()) + ':' + UY.pad2(d.getUTCMinutes()) + ':' + UY.pad2(d.getUTCSeconds()) + ' UTC';
  };
  UY.weekday = function (d) { return '星期' + '日一二三四五六'.charAt(d.getDay()); };
  UY.fmtBytes = function (n) {
    if (n < 1024) return n + ' B';
    if (n < 1048576) return (n / 1024).toFixed(1) + ' KB';
    if (n < 1073741824) return (n / 1048576).toFixed(2) + ' MB';
    return (n / 1073741824).toFixed(2) + ' GB';
  };
  /* 相对时间：刚刚 / 3 分钟前 / 2 天前 … */
  UY.relTime = function (diffMs) {
    var abs = Math.abs(diffMs), future = diffMs > 0, s = abs / 1000;
    var out;
    if (s < 10) out = '刚刚';
    else if (s < 60) out = Math.floor(s) + ' 秒';
    else if (s < 3600) out = Math.floor(s / 60) + ' 分钟';
    else if (s < 86400) out = Math.floor(s / 3600) + ' 小时';
    else if (s < 86400 * 30) out = Math.floor(s / 86400) + ' 天';
    else if (s < 86400 * 365) out = Math.floor(s / 86400 / 30) + ' 个月';
    else out = Math.floor(s / 86400 / 365) + ' 年';
    if (out === '刚刚') return '刚刚';
    return future ? out + '后' : out + '前';
  };
  /* 生成安全随机字节 */
  UY.randomBytes = function (len) {
    var b = new Uint8Array(len);
    if (window.crypto && crypto.getRandomValues) crypto.getRandomValues(b);
    else for (var i = 0; i < len; i++) b[i] = Math.floor(Math.random() * 256);
    return b;
  };
  /* 16 进制小写串 */
  UY.toHex = function (buf) {
    var b = new Uint8Array(buf), s = '';
    for (var i = 0; i < b.length; i++) s += ('0' + b[i].toString(16)).slice(-2);
    return s;
  };

  /* ---- 全站浮动反馈按钮(右下角): 工具页由 tool.js 统一注入, 首页为静态节点 ---- */
  UY.initFeedbackFab = function () {
    if (location.pathname.indexOf('/feedback') !== -1) return;   // 反馈页自身不再放
    var a = document.createElement('a');
    a.href = 'https://util123.cn/feedback/';
    a.target = '_blank';
    a.rel = 'noopener';
    a.className = 'fab-feedback';
    a.title = '反馈问题 / 建议新工具';
    a.setAttribute('aria-label', '反馈');
    a.textContent = '💬';
    document.body.appendChild(a);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function(){ UY.initTheme(); UY.initFeedbackFab(); });
  } else {
    UY.initTheme();
    UY.initFeedbackFab();
  }
})();
