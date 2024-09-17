import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let hue = 0; // 用于颜色渐变

    // 设置canvas尺寸
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // 粒子类
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 2; // 增加粒子大小
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
      }

      draw() {
        ctx.fillStyle = `hsl(${hue}, 100%, 50%)`; // 使用当前的色相值
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update(mousePosition) {
        const dx = mousePosition.x - this.x;
        const dy = mousePosition.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = 100;
        const force = (maxDistance - distance) / maxDistance;
        const directionX = forceDirectionX * force * this.density;
        const directionY = forceDirectionY * force * this.density;

        if (distance < maxDistance) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }
    }

    // 初始化粒子
    const initParticles = () => {
      particlesArray = [];
      const numberOfParticles = (canvas.width * canvas.height) / 6000; // 增加粒子数量
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y));
      }
    };

    let particlesArray;
    initParticles();

    // 连接粒子
    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) { // 增加连接距离
            opacityValue = 1 - (distance / 150);
            ctx.strokeStyle = `hsla(${hue}, 100%, 50%, ${opacityValue})`; // 使用当前的色相值
            ctx.lineWidth = 2; // 增加线条宽度
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // 动画循环
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle) => {
        particle.draw();
        particle.update(mousePosition);
      });
      connect();
      hue = (hue + 0.5) % 360; // 更新色相值,实现颜色渐变
      animationFrameId = requestAnimationFrame(animate);
    };

    let mousePosition = { x: null, y: null };

    const handleMouseMove = (event) => {
      mousePosition.x = event.x;
      mousePosition.y = event.y;
    };

    window.addEventListener('mousemove', handleMouseMove);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-background" />;
};

export default ParticleBackground;