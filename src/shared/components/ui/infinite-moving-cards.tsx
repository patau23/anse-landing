import React, { useEffect, useRef, useState, useMemo } from 'react'
import { cn } from '@/shared/lib/utils.ts'
import InfiniteMovingServiceCard from '@/shared/components/ui/infinite-moving-service-card.tsx'

export type InfiniteCardItem = {
  city: string;
  boost: string;
  before: string;
  after: string;
  icon: string;
}

export const InfiniteMovingCards: React.FC<{
  items: InfiniteCardItem[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}> = ({
        items,
        direction = 'left',
        speed = 'fast',
        pauseOnHover = true,
        className,
      }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [start, setStart] = useState(false)

  const allItems = useMemo(() => [...items, ...items, ...items, ...items], [items])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    el.style.setProperty(
        '--animation-direction',
        direction === 'left' ? 'forwards' : 'reverse'
    )

    const duration =
        speed === 'fast' ? '20s' : speed === 'normal' ? '40s' : '80s'
    el.style.setProperty('--animation-duration', duration)

    setStart(true)
  }, [direction, speed])

  return (
      <div
          ref={containerRef}
          className={cn(
              'scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
              className
          )}
      >
        <ul
            className={cn(
                'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 bg-tab-bg',
                start && 'animate-scroll',
                pauseOnHover && 'hover:[animation-play-state:paused]'
            )}
        >
          {allItems.map((item, idx) => (
              <InfiniteMovingServiceCard
                  key={`${item.city}-${idx}`}
                  item={item}
              />
          ))}
        </ul>
      </div>
  )
}
