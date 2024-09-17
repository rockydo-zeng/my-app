import React, { useState, useEffect } from 'react';

function Home() {
  const [gifFiles, setGifFiles] = useState([]);
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    if (showGif) {
      const interval = setInterval(() => {
        setCurrentGifIndex((prevIndex) => (prevIndex + 1) % gifFiles.length);
      }, 30000);
      return () => clearInterval(interval);
    }
  }, [showGif, gifFiles]);

  const handleShowGif = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/gifs');
      const files = await response.json();
      if (files.length === 0) {
        alert('路径下没有图片');
      } else {
        setGifFiles(files);
        setShowGif(true);
      }
    } catch (error) {
      console.error('Error fetching GIF files:', error);
      alert('获取GIF文件时出错');
    }
  };

  return (
    <div className="home">
      <div className="hero">
        <h2 className="tech-title">
          <span className="tech-word">欢迎来到</span>
          <span className="tech-word">rock的网站</span>
        </h2>
        <p className="subtitle">探索、创新、分享</p>
        <button className="cta-button" onClick={() => alert('开始探索!')}>开始探索</button>
      </div>
      
      <div className="content-section">
        <h3>最新项目</h3>
        <div className="project-grid">
          <div className="project-card">项目1</div>
          <div className="project-card">项目2</div>
          <div className="project-card">项目3</div>
        </div>
      </div>
      
      <div className="gif-display">
        <h3>动图展示</h3>
        <button className="show-gif-button" onClick={handleShowGif}>显示动图</button>
        {showGif && gifFiles.length > 0 && (
          <div className="gif-container">
            <img 
              src={`http://localhost:3001/gifs/${gifFiles[currentGifIndex]}`} 
              alt={`GIF ${currentGifIndex + 1}`} 
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;