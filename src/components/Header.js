import React from 'react';

function Header() {
  return (
    <header>
      <h1>您的名字</h1>
      <nav>
        <ul>
          <li><a href="#home">首页</a></li>
          <li><a href="#about">关于我</a></li>
          <li><a href="#portfolio">作品集</a></li>
          <li><a href="#contact">联系方式</a></li>
          <li><a href="#blog">博客</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;