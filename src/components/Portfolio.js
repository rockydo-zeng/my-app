import React from 'react';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>作品集</h2>
      <ul>
        <li>
          <h3>项目1</h3>
          <p>项目1的描述</p>
          <a href="#">查看详情</a>
        </li>
        <li>
          <h3>项目2</h3>
          <p>项目2的描述</p>
          <a href="#">查看详情</a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;