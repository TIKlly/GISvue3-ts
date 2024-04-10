export default function createCanvasAnimation() {
  const appHome = document.getElementById('appHome') as HTMLElement;
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  let canvasWidth = canvas.width = appHome.offsetWidth;
  let canvasHeight = canvas.height = appHome.offsetHeight;

  let mouseX: number;
  let mouseY: number;
  let pop = false;
  let attract = false;

  const mouseOver = (x: number, y: number, radius: number) => {
    const diffX = mouseX - x;
    const diffY = mouseY - y;

    return diffX < radius && diffX > -radius && diffY < radius && diffY > -radius;
  };

  const randomNum = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const changeSettings = (setting: number, min: number, max: number, prob: number) => {
    const chance = randomNum(0, prob);

    if (setting < min || chance === 1) {
      return 1;
    } else if (setting > max || chance === 2) {
      return -1;
    } else {
      return 0;
    }
  };

  interface Bubble {
    id: number;
    x: number;
    y: number;
    radius: number;
    color: { color1: string; color2: string };
    speed: number;
    speedBackup: number;
    directionX: number;
    directionY: number;
    flicker: number;
    destroy(): void;
    draw(): void;
  }

  const bubbles: Bubble[] = [];
  let count = 0;
  const maxCount = 10;
  const maxSize = 100;
  const minSize = 5;
  const minSpeed = 5;
  const maxSpeed = 10;
  const bgcolor = 'hsl(235,60%,13%)';
  const colors = [
    { color1: '#fa4c2b', color2: '#6aff6e' },
    { color1: '#ffff82', color2: '#ffce72' },
    { color1: '#fa4c2b', color2: '#0bfcff' }
  ];

  class BubbleClass implements Bubble {
    id: number;
    x: number;
    y: number;
    radius: number;
    color: { color1: string; color2: string };
    speed: number;
    speedBackup: number;
    directionX: number;
    directionY: number;
    flicker: number;

    constructor(x: number = randomNum(0, canvasWidth), y: number = randomNum(0, canvasHeight), size: number = randomNum(minSize, maxSize)) {
      this.id = count + 1;
      this.x = x;
      this.y = y;
      this.radius = size;
      this.color = colors[randomNum(0, colors.length - 1)];
      this.speed = randomNum(minSpeed, maxSpeed) / 10;
      this.speedBackup = this.speed;
      this.directionX = randomNum(-1, 1) || 1;
      this.directionY = randomNum(-1, 1) || 1;
      this.flicker = 0;

      count++;
      bubbles[count] = this;
    }

    destroy() {
      const popCount = this.radius / 10 > 0 ? this.radius / 10 : 2;

      for (let i = 0; i < popCount; i++) {
        new BubbleClass(this.x, this.y, randomNum(this.radius / 4, this.radius / 2));
      }

      this.radius = randomNum(this.radius / 4, this.radius / 2);
      this.color = colors[randomNum(0, colors.length - 1)];
    }

    draw() {
      this.directionX = changeSettings(this.x, 0, canvasWidth, 500) || this.directionX;
      this.directionY = changeSettings(this.y, 0, canvasHeight, 500) || this.directionY;
      this.speed = this.speedBackup;

      if (attract === true && mouseOver(this.x, this.y, 200)) {
        const moveTowardMouse = randomNum(0, 15);
        if (moveTowardMouse === 5) {
          this.directionX = mouseX - this.x > 0 ? 1 : -1;
        } else if (moveTowardMouse === 1) {
          this.directionY = mouseY - this.y > 0 ? 1 : -1;
        }
        this.speed = 1.25;
      }

      this.x += this.speed * this.directionX;
      this.y += this.speed * this.directionY;

      this.radius += changeSettings(this.radius, minSize, maxSize, 15);

      ctx.save();
      ctx.globalCompositeOperation = 'color-dodge';
      ctx.beginPath();

      const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
      gradient.addColorStop(0, this.color.color1);
      gradient.addColorStop(0.5, this.color.color2);
      gradient.addColorStop(1, 'rgba(250,76,43,0)');

      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.closePath();
      ctx.restore();

      if (pop === true && mouseOver(this.x, this.y, this.radius)) {
        bubbles[this.id].destroy();
        pop = false;
      }
    }
  }

  // Create initial bubbles
  for (let i = 0; i < maxCount; i++) {
    new BubbleClass();
  }

  const animate = () => {
    ctx.fillStyle = bgcolor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    for (let i = 1; i <= count; i++) {
      bubbles[i].draw();
    }

    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);

  canvas.addEventListener('click', (e) => {
    new BubbleClass(e.layerX, e.layerY);
  });

  canvas.addEventListener('contextmenu', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
    pop = true;
    e.preventDefault();
  });

  let startAttracting: NodeJS.Timeout;

  canvas.addEventListener('mousedown', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;

    clearTimeout(startAttracting);
    startAttracting = setTimeout(() => {
      return attract = true;
    }, 500);
  });

  canvas.addEventListener('mousemove', (e) => {
    if (attract) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    }
  });

  canvas.addEventListener('mouseup', () => {
    clearTimeout(startAttracting);
    attract = false;
  });

  let resizing: NodeJS.Timeout;

  window.addEventListener('resize', () => {
    clearTimeout(resizing);
    resizing = setTimeout(() => {
      canvasWidth = canvas.width = appHome.offsetWidth;
      canvasHeight = canvas.height = appHome.offsetHeight;
    }, 500);
  });
}
