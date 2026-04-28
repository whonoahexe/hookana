"use client"

import { useEffect, useState } from "react"

const BASE_COUNT = 10_428

export function LiveCounter() {
  const [count, setCount] = useState(BASE_COUNT)

  useEffect(() => {
    function tick() {
      setCount((n) => n + 1)
      const next = 3000 + Math.random() * 5000
      setTimeout(tick, next)
    }
    const id = setTimeout(tick, 3000 + Math.random() * 4000)
    return () => clearTimeout(id)
  }, [])

  return (
    <div className="mt-2 flex items-center gap-2.5 rounded-full bg-secondary px-4 py-1.5">
      <span className="relative flex size-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
        <span className="relative inline-flex size-2 rounded-full bg-primary" />
      </span>
      <p className="type-monospaced text-secondary-foreground">
        {count.toLocaleString()} ads delivered - live
      </p>
    </div>
  )
}
