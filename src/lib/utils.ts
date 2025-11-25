export function cn(...inputs: any[]): string {
  const classes: string[] = [];
  const walk = (val: any): void => {
    if (!val) return;
    const t = typeof val;
    if (t === "string" || t === "number") {
      classes.push(String(val));
    } else if (Array.isArray(val)) {
      for (const v of val) walk(v);
    } else if (t === "object") {
      for (const [key, v] of Object.entries(val)) {
        if (v) classes.push(key);
      }
    }
  };
  for (const input of inputs) walk(input);
  return classes.join(" ");
}