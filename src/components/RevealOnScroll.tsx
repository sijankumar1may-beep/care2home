import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealAnimation = "fade-up" | "scale" | "fade";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  animation?: RevealAnimation;
  delayMs?: number;
  as?: ElementType;
  once?: boolean;
};

const animationClassMap: Record<RevealAnimation, string> = {
  "fade-up": "animate-fade-in-up",
  scale: "animate-scale-in",
  fade: "animate-fade-in",
};

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function RevealOnScroll({
  children,
  className = "",
  animation = "fade-up",
  delayMs = 0,
  as: Tag = "div",
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisible(true);
        if (once) observer.disconnect();
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const style: CSSProperties | undefined =
    visible && delayMs > 0 ? { animationDelay: `${delayMs}ms` } : undefined;

  const motionClass = visible
    ? animationClassMap[animation]
    : "opacity-0";

  return (
    <Tag
      ref={ref}
      className={`${motionClass} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
