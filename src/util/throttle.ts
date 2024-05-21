export function throttle(func: Function, delay: number): Function {
  let timer: ReturnType<typeof setTimeout> | null = null;
  let lastExecTime = 0;

  return function (this: any, ...args: any[]) {
    // 显式指定 "this" 的类型为 "any"
    const now = Date.now();
    const elapsed = now - lastExecTime;

    if (!timer || elapsed >= delay) {
      func.apply(this, args);
      lastExecTime = now;
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = Date.now();
      }, delay - elapsed);
    }
  };
}

export function debounce(func: Function, delay: number): Function {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: any[]) {
    const context = this;
    clearTimeout(timer!);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
