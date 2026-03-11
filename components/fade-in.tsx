"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  once?: boolean
}

// Fires when ≥15% of the element is inside the viewport AND it's at least
// 80px from the bottom edge — so the user already sees the element before
// the animation begins.
const OBSERVER_OPTIONS: IntersectionObserverInit = {
  rootMargin: "0px 0px -80px 0px",
  threshold: 0.15,
}

const initialTransform: Record<NonNullable<FadeInProps["direction"]>, string> = {
  up: "translateY(24px)",
  down: "translateY(-24px)",
  left: "translateX(24px)",
  right: "translateX(-24px)",
  none: "translateY(0px)",
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.55,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      const [entry] = entries
      if (entry.isIntersecting) {
        setVisible(true)
        if (once) observer.unobserve(entry.target)
      } else if (!once) {
        setVisible(false)
      }
    },
    [once],
  )

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(handleIntersect, OBSERVER_OPTIONS)
    observer.observe(el)
    return () => observer.disconnect()
  }, [handleIntersect])

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px) translateX(0px)" : initialTransform[direction],
        // transition only touches compositor-only properties (opacity + transform)
        // so it never triggers layout or paint — pure GPU work
        transition: `opacity ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: visible ? "auto" : "transform, opacity",
      }}
    >
      {children}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Stagger helpers — driven by the same CSS approach, no JS per-frame
// ---------------------------------------------------------------------------

export function StaggerContainer({
  children,
  className,
  staggerDelay = 100,
}: {
  children: React.ReactNode
  className?: string
  /** ms between each child's delay */
  staggerDelay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry], obs) => {
      if (entry.isIntersecting) {
        setVisible(true)
        obs.unobserve(entry.target)
      }
    }, OBSERVER_OPTIONS)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      // Pass visibility down via CSS custom property so children can read it
      data-visible={visible ? "true" : undefined}
      className={cn(className)}
      style={{ "--stagger-delay": `${staggerDelay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  )
}

export function StaggerItem({
  children,
  className,
  index = 0,
}: {
  children: React.ReactNode
  className?: string
  index?: number
}) {
  // Uses the parent's data-visible via a CSS sibling trick isn't possible,
  // so we keep a tiny observer per item but with a shared options object
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry], obs) => {
      if (entry.isIntersecting) {
        setVisible(true)
        obs.unobserve(entry.target)
      }
    }, OBSERVER_OPTIONS)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(24px)",
        transition: `opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${index * 80}ms, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${index * 80}ms`,
        willChange: visible ? "auto" : "transform, opacity",
      }}
    >
      {children}
    </div>
  )
}

// Counter animation for stats — pure RAF, no JS per-frame via framer-motion
export function AnimatedCounter({
  value,
  className,
  suffix = "",
  prefix = "",
}: {
  value: number
  className?: string
  suffix?: string
  prefix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [visible, setVisible] = useState(false)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry], obs) => {
      if (entry.isIntersecting) {
        setVisible(true)
        obs.unobserve(entry.target)
      }
    }, OBSERVER_OPTIONS)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const duration = 1400
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress)
      setDisplay(Math.round(eased * value))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [visible, value])

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}{display}{suffix}
    </span>
  )
}
