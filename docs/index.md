---
layout: home
title: 欢迎来到千夏蝉时雨的小屋
hero:
  name: 千夏蝉时雨
  text: 全栈web开发｜游戏开发
  tagline: Ashley/千夏｜二分之一技术宅｜隐蔽青年｜現状に満足しよう あまり高望みしないこと 自分に言い聞かせてます｜intp｜理性主义｜感情用事是失败者的生理缺陷｜ 第一性原理的思考方式｜个人英雄主义
  actions:
    - theme: brand
      text: 查看我的项目
      link: /projects
    - theme: alt
      text: 关于我
      link: /about/
---

<!-- 漂浮欢迎文字（可选） -->
<div class="floating-text">
  欢迎来到我的小窝 ✨
</div>

<!-- 所有样式集中在一个 <style> 标签内 -->
<style>
/* === 全局背景图 === */
body {
  background-image: url('/bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: #f0f2f5;
}

/* === 主内容区域：扩大宽度并优化布局 === */
.VPContent {
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(4px);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 900px;
  width: 80%;
  min-width: 600px;
}

/* === 顶部导航栏优化：白色毛玻璃 === */
.VPNavBar {
  background-color: rgba(255, 255, 255, 0.98) !important;
  backdrop-filter: blur(12px) !important;
  border-radius: 12px;
  padding: 0.75rem 1rem !important;
  margin: 1rem !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.VPNavBar .VPNavLogo,
.VPNavBar .VPNavItems,
.VPNavBar .VPNavThemeToggle,
.VPNavBar .VPNavSearch {
  color: #1f2937 !important;
}

.VPNavBar .VPNavItems a:hover,
.VPNavBar .VPNavThemeToggle:hover,
.VPNavBar .VPNavSearch:hover {
  color: #4f46e5 !important;
}

/* === 右侧“On this page”目录优化：强制放在白色块中 === */
.VPTableOfContents {
  background-color: rgba(255, 255, 255, 0.98) !important;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
  position: relative;
  z-index: 10;
}

.VPTableOfContents h3 {
  color: #1f2937;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.VPTableOfContents a {
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s;
}

.VPTableOfContents a:hover {
  color: #4f46e5;
}

/* === 漂浮文字动画（可选）=== */
.floating-text {
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  color: #4f46e5;
  opacity: 0;
  animation: floatInAndOut 6s ease-in-out forwards;
  z-index: 1000;
  text-align: center;
  font-weight: 600;
  text-shadow: 0 2px 8px rgba(79, 70, 229, 0.3);
  pointer-events: none;
}
@keyframes floatInAndOut {
  0% { opacity: 0; transform: translateX(-50%) translateY(30px); }
  20% { opacity: 1; transform: translateX(-50%) translateY(0); }
  80% { opacity: 1; transform: translateX(-50%) translateY(0); }
  100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
}
</style>