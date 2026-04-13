import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  opacity: number;
  life: number;
  maxLife: number;
}

const STAR_COLORS = [
  "255,255,255",
  "200,220,255",
  "255,220,200",
  "180,200,255",
  "220,255,255",
];

const CURSOR_RADIUS = 120; // px — stars within this distance brighten

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const starCount = Math.floor((width * height) / 1100);
    const stars: Star[] = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.2,
      opacity: Math.random() * 0.7 + 0.1,
      twinkleSpeed: Math.random() * 0.018 + 0.004,
      twinklePhase: Math.random() * Math.PI * 2,
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
    }));

    const shootingStars: ShootingStar[] = [];
    let tick = 0;

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouse);

    function spawnShootingStar() {
      const angle = (Math.random() * Math.PI) / 6 + Math.PI / 8;
      const speed = Math.random() * 8 + 6;
      shootingStars.push({
        x: Math.random() * width * 0.7,
        y: Math.random() * height * 0.5,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: Math.random() * 100 + 60,
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 40 + 30,
      });
    }

    function drawNebula() {
      ctx!.fillStyle = "#050510";
      ctx!.fillRect(0, 0, width, height);

      const nebulas = [
        { x: width * 0.15, y: height * 0.3,  r: width * 0.35, color: "80,20,140" },
        { x: width * 0.7,  y: height * 0.6,  r: width * 0.3,  color: "20,60,130" },
        { x: width * 0.5,  y: height * 0.15, r: width * 0.25, color: "10,80,100" },
        { x: width * 0.85, y: height * 0.15, r: width * 0.2,  color: "100,20,80" },
      ];

      nebulas.forEach(({ x, y, r, color }) => {
        const grad = ctx!.createRadialGradient(x, y, 0, x, y, r);
        grad.addColorStop(0,   `rgba(${color},0.12)`);
        grad.addColorStop(0.5, `rgba(${color},0.05)`);
        grad.addColorStop(1,   `rgba(${color},0)`);
        ctx!.fillStyle = grad;
        ctx!.fillRect(0, 0, width, height);
      });

      const bandGrad = ctx!.createLinearGradient(0, height * 0.2, width, height * 0.8);
      bandGrad.addColorStop(0,   "rgba(60,40,120,0)");
      bandGrad.addColorStop(0.3, "rgba(60,40,120,0.06)");
      bandGrad.addColorStop(0.5, "rgba(80,60,140,0.1)");
      bandGrad.addColorStop(0.7, "rgba(60,40,120,0.06)");
      bandGrad.addColorStop(1,   "rgba(60,40,120,0)");
      ctx!.fillStyle = bandGrad;
      ctx!.fillRect(0, 0, width, height);
    }

    function drawStars(t: number) {
      const { x: mx, y: my } = mouseRef.current;

      stars.forEach((star) => {
        const pulse = Math.sin(t * star.twinkleSpeed + star.twinklePhase);
        let alpha = Math.max(0.05, Math.min(1, star.opacity + pulse * 0.3));
        let r = star.radius;

        // Distance from cursor
        const dx = star.x - mx;
        const dy = star.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CURSOR_RADIUS) {
          // Smooth falloff: 1 at cursor → 0 at edge
          const proximity = 1 - dist / CURSOR_RADIUS;

          // Draw 4-point sparkle cross
          const armLen = star.radius * (3 + proximity * 5);
          const sparkAlpha = proximity * 0.7;
          ctx!.save();
          ctx!.translate(star.x, star.y);
          ctx!.rotate(Math.PI / 4); // 45° so arms point diagonally too
          for (let arm = 0; arm < 4; arm++) {
            ctx!.rotate(Math.PI / 2);
            const sparkGrad = ctx!.createLinearGradient(0, 0, 0, armLen);
            sparkGrad.addColorStop(0, `rgba(255,255,255,${sparkAlpha})`);
            sparkGrad.addColorStop(1, `rgba(255,255,255,0)`);
            ctx!.strokeStyle = sparkGrad;
            ctx!.lineWidth = 0.6;
            ctx!.beginPath();
            ctx!.moveTo(0, 0);
            ctx!.lineTo(0, armLen);
            ctx!.stroke();
          }
          ctx!.restore();
        }

        ctx!.beginPath();
        ctx!.arc(star.x, star.y, r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${star.color},${alpha})`;
        ctx!.fill();

        // Ambient glow for larger stars
        if (star.radius > 1.0) {
          const glow = ctx!.createRadialGradient(star.x, star.y, 0, star.x, star.y, r * 4);
          glow.addColorStop(0, `rgba(${star.color},${alpha * 0.4})`);
          glow.addColorStop(1, `rgba(${star.color},0)`);
          ctx!.fillStyle = glow;
          ctx!.beginPath();
          ctx!.arc(star.x, star.y, r * 4, 0, Math.PI * 2);
          ctx!.fill();
        }
      });
    }

    function drawShootingStars() {
      shootingStars.forEach((ss, i) => {
        const progress = ss.life / ss.maxLife;
        const alpha = ss.opacity * (1 - progress);
        const speed = Math.sqrt(ss.vx ** 2 + ss.vy ** 2);
        const tailX = ss.x - (ss.vx / speed) * ss.length;
        const tailY = ss.y - (ss.vy / speed) * ss.length;

        const grad = ctx!.createLinearGradient(tailX, tailY, ss.x, ss.y);
        grad.addColorStop(0, `rgba(255,255,255,0)`);
        grad.addColorStop(1, `rgba(255,255,255,${alpha})`);

        ctx!.beginPath();
        ctx!.moveTo(tailX, tailY);
        ctx!.lineTo(ss.x, ss.y);
        ctx!.strokeStyle = grad;
        ctx!.lineWidth = 1.5;
        ctx!.stroke();

        ss.x += ss.vx;
        ss.y += ss.vy;
        ss.life++;

        if (ss.life >= ss.maxLife) shootingStars.splice(i, 1);
      });
    }

    function animate() {
      tick++;
      drawNebula();
      drawStars(tick);
      drawShootingStars();

      if (tick % 180 === 0 && Math.random() > 0.4) spawnShootingStar();

      animFrameRef.current = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
