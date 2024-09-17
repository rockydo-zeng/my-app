import React from 'react';

function About() {
  return (
    <div className="about">
      <h2>关于我</h2>
      <section>
        <h3>个人简介</h3>
        <p>这里是您的个人简介。</p>
      </section>
      <section>
        <h3>教育背景</h3>
        <p>列出您的教育经历。</p>
      </section>
      <section>
        <h3>工作经历</h3>
        <p>列出您的工作经历。</p>
      </section>
      <section>
        <h3>技能列表</h3>
        <ul>
          <li>技能1</li>
          <li>技能2</li>
          <li>技能3</li>
        </ul>
      </section>
    </div>
  );
}

export default About;