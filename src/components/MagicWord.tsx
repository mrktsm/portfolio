import { useState, useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  alpha: number;
  color: string;
}

class Firework {
  private ctx: CanvasRenderingContext2D;
  private canvasWidth: number;
  private canvasHeight: number;
  private x: number = 0;
  private y: number = 0;
  private color: string = "";
  private dx: number = 0;
  private dy: number = 0;
  private exploded: boolean = false;
  private particles: Particle[] = [];
  private age: number = 0;
  public isComplete: boolean = false;

  constructor(
    ctx: CanvasRenderingContext2D,
    canvasWidth: number,
    canvasHeight: number
  ) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.reset();
  }

  reset(): void {
    this.x = Math.random() * this.canvasWidth;
    this.y = this.canvasHeight;
    const hue = 90 + Math.random() * 60;
    const saturation = 50 + Math.random() * 50;
    const lightness = 40 + Math.random() * 20;
    this.color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    this.dx = (Math.random() - 0.5) * 3;
    this.dy = -(Math.random() * 10 + 10);
    this.exploded = false;
    this.particles = [];
    this.age = 0;
    this.isComplete = false;
  }

  launch(): void {
    this.x += this.dx;
    this.y += this.dy;

    this.ctx.beginPath();
    this.ctx.moveTo(this.x - this.dx, this.y - this.dy);
    this.ctx.lineTo(this.x, this.y);
    this.ctx.strokeStyle = this.color;
    this.ctx.stroke();

    if (this.y <= this.canvasHeight * Math.random() * 0.5) {
      this.explode();
    }
  }

  explode(): void {
    const particleCount = Math.floor(Math.random() * 50 + 50);
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 2;
      this.particles.push({
        x: this.x,
        y: this.y,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        size: Math.random() * 3 + 1,
        alpha: 1,
        color: this.color,
      });
    }
    this.exploded = true;
  }

  updateParticles(): void {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const particle = this.particles[i];
      particle.x += particle.dx;
      particle.y += particle.dy;
      particle.dy += 0.15;
      particle.dx *= 0.99;
      particle.alpha -= 0.01;

      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `${particle.color.replace(
        ")",
        `, ${particle.alpha})`
      )}`;
      this.ctx.fill();

      if (particle.alpha <= 0 || particle.y > this.canvasHeight) {
        this.particles.splice(i, 1);
      }
    }
  }

  update(allowNewFireworks: boolean): void {
    this.age++;
    if (!this.exploded) {
      this.launch();
    } else {
      this.updateParticles();
    }
    if (this.exploded && this.particles.length === 0) {
      if (allowNewFireworks) {
        this.reset();
      } else {
        this.isComplete = true;
      }
    }
  }
}

export const MagicWord: React.FC = () => {
  const [showFireworks, setShowFireworks] = useState<boolean>(false);
  const [allowNewFireworks, setAllowNewFireworks] = useState<boolean>(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fireworksRef = useRef<Firework[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutsRef = useRef<number[]>([]);
  const [animationCount, setAnimationCount] = useState(0);
  const text = "magic";

  useEffect(() => {
    if (showFireworks && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Initialize fireworks if not already created
      if (fireworksRef.current.length === 0) {
        fireworksRef.current = Array.from(
          { length: 8 },
          () => new Firework(ctx, canvas.width, canvas.height)
        );
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and filter out completed fireworks
        fireworksRef.current = fireworksRef.current.filter((firework) => {
          firework.update(allowNewFireworks);
          return !firework.isComplete;
        });

        // Continue animation if there are active fireworks
        if (fireworksRef.current.length > 0) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          setShowFireworks(false);
        }
      };

      animate();

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
  }, [showFireworks, allowNewFireworks]);

  const handleClick = (): void => {
    // Reset fireworks array and start new animation
    fireworksRef.current = [];
    setShowFireworks(true);
    setAllowNewFireworks(true);

    // After 3 seconds, stop creating new fireworks but let existing ones finish
    setTimeout(() => {
      setAllowNewFireworks(false);
    }, 3000);

    setAnimationCount(5);
  };

  useEffect(() => {
    if (animationCount < 5 || isAnimating) {
      const interval = setInterval(() => {
        startAnimation();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [animationCount, isAnimating]);

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  const startAnimation = () => {
    setIsAnimating(true);

    timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
    timeoutsRef.current = [];

    text.split("").forEach((_, index) => {
      const timeout = setTimeout(() => {
        setActiveIndex(index);

        if (index === text.length - 1) {
          const resetTimeout = setTimeout(() => {
            setActiveIndex(-1);
            setIsAnimating(false);
            setAnimationCount((prevCount) => prevCount + 1);
          }, 300);
          timeoutsRef.current.push(resetTimeout);
        }
      }, index * 200);

      timeoutsRef.current.push(timeout);
    });
  };

  return (
    <>
      {showFireworks && (
        <canvas
          ref={canvasRef}
          className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
        />
      )}
      <span
        onClick={handleClick}
        onMouseEnter={startAnimation}
        className="cursor-pointer text-green-900 font-semibold hover:text-green-600"
      >
        {text.split("").map((letter, index) => (
          <span
            key={index}
            className="inline-block transform transition-transform duration-300 ease-out"
            style={{
              transform:
                activeIndex === index ? "translateY(-10px)" : "translateY(0)",
              opacity: activeIndex === index ? "0.65" : "1",
            }}
          >
            {letter}
          </span>
        ))}
      </span>
    </>
  );
};
