import { useEffect, useRef, useState } from "react";

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

export default function Counter({
  from = 0,
  to = 60,
  duration = 1500, // 0→60 animation time
  hold = 800, // pause at 60 (ms)
  blinkDuration = 1200, // blink at 60 (ms)
  pauseAfterBlink = 2000, // extra pause after blinking (ms)
  prefix = "-",
  suffix = "%",
  className = "",
  style = {},
}) {
  const [value, setValue] = useState(from);
  const [blinking, setBlinking] = useState(false);

  const rafId = useRef(0);
  const tHold = useRef(0);
  const tBlink = useRef(0);
  const tPost = useRef(0);

  useEffect(() => {
    let start = 0;

    const run = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const n = Math.round(from + (to - from) * easeOutCubic(p));
      setValue(n);

      if (p < 1) {
        rafId.current = requestAnimationFrame(run);
      } else {
        // reached 'to'
        setValue(to);
        // hold at 60
        tHold.current = window.setTimeout(() => {
          // blink at 60
          setBlinking(true);
          tBlink.current = window.setTimeout(() => {
            setBlinking(false);
            // pause (steady) after blink
            tPost.current = window.setTimeout(() => {
              start = 0;
              setValue(from);
              rafId.current = requestAnimationFrame(run);
            }, pauseAfterBlink);
          }, blinkDuration);
        }, hold);
      }
    };

    rafId.current = requestAnimationFrame(run);
    return () => {
      cancelAnimationFrame(rafId.current);
      clearTimeout(tHold.current);
      clearTimeout(tBlink.current);
      clearTimeout(tPost.current);
    };
  }, [from, to, duration, hold, blinkDuration, pauseAfterBlink]);

  return (
    <span
      className={`${className} ${blinking ? "blink" : ""}`}
      style={{ fontVariantNumeric: "tabular-nums", ...style }}
    >
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
