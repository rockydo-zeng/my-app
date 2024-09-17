import React from 'react';

function Blog() {
  return (
    <div className="blog">
      <h2>博客文章</h2>
      <ul>
        <li>
          <h3>文章标题1</h3>
          <p>文章1的摘要...</p>
          <a href="#">阅读全文</a>
        </li>
        <li>
          <h3>文章标题2</h3>
          <p>文章2的摘要...</p>
          <a href="#">阅读全文</a>
        </li>
      </ul>
    </div>
  );
}

export default Blog;