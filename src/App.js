import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
// 导入图片
import image1 from './image/image1.jpg';
import image2 from './image/image2.jpg';
import image3 from './image/image3.jpg';

// 导入组件
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Blog from './components/Blog';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [backgroundImage, setBackgroundImage] = useState('');

  const images = [
    `url(${image1})`,
    `url(${image2})`,
    `url(${image3})`,
  ];

  useEffect(() => {
    let currentIndex = 0;

    const changeBackground = () => {
      setBackgroundImage(images[currentIndex]);
      currentIndex = (currentIndex + 1) % images.length;
    };

    changeBackground();
    const intervalId = setInterval(changeBackground, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Router>
      <div className="App">
        <div id="dynamic-background" style={{ backgroundImage }}></div>
        <ParticleBackground />
        <header>
          <h1>rock的网站</h1>
          <nav>
            <ul>
              <li><Link to="/">首页</Link></li>
              <li><Link to="/about">关于我</Link></li>
              <li><Link to="/portfolio">作品集</Link></li>
              <li><Link to="/contact">联系方式</Link></li>
              <li><Link to="/blog">博客</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
