// DottedArrow.tsx
import React, { useId } from 'react';
import { motion } from 'framer-motion';

type DottedArrowProps = {
  /** stroke-путь (центральная линия), экспортируй из Figma как stroke, без Outline */
  d: string;
  /** viewBox исходного SVG из макета */
  viewBox?: string; // по умолчанию под твой пример
  className?: string;

  color?: string; // цвет линии и стрелки
  strokeWidth?: number; // толщина линии
  dash?: string | number[]; // пунктир, например "6 10" или [6, 10]

  /** анимация */
  duration?: number;
  delay?: number;
  once?: boolean; // анимировать 1 раз при первом появлении
  viewportAmount?: number; // доля видимости для старта анимации

  /** наконечник стрелки */
  showHead?: boolean;
  /** размер маркера-стрелки (множитель к strokeWidth) */
  headScale?: number;

  /** SVG preserveAspectRatio, если нужен растяг без сохранения пропорций */
  preserveAspectRatio?: React.SVGAttributes<SVGSVGElement>['preserveAspectRatio'];
};

export default function DottedArrow({
  d,
  viewBox = '0 0 328 160',
  className,

  color = '#7268E7',
  strokeWidth = 3,
  dash = '6 10',

  duration = 1.6,
  delay = 0,

  showHead = true,
  headScale = 3.2,

  preserveAspectRatio = 'xMidYMid meet',
}: DottedArrowProps) {
  const rawId = useId(); // например :r0:
  const markerId = `arrowHead-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`; // валидный id
  const dashStr = Array.isArray(dash) ? dash.join(' ') : dash;

  // размеры маркера относительно толщины линии
  const mW = strokeWidth * headScale * 1.8;
  const mH = strokeWidth * headScale;

  const arrow = showHead && (
    <defs>
      <marker
        id={markerId}
        markerWidth={mW}
        markerHeight={mH}
        refX={mW - strokeWidth} // чтобы «носик» совпадал с концом пути
        refY={mH / 2}
        orient="auto"
      >
        {/* простая «стрелка»; можно заменить на свой path */}
        <path
          d={`M0,0 L${mW},${mH / 2} L0,${mH} L${mW * 0.32},${mH / 2} Z`}
          fill={color}
        />
      </marker>
    </defs>
  );

  return (
    <svg
      className={className}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio={preserveAspectRatio}
    >
      {/* {arrow} */}

      <motion.path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={dashStr}
        markerEnd={showHead ? `url(#${markerId})` : undefined}
        initial={{ pathLength: 0, pathOffset: 1 }}
        whileInView={{ pathLength: 1, pathOffset: 0 }}
        viewport={{
          once: true, // анимировать только один раз
          amount: 0.2, // 20% пути в видимой зоне – стартуем
          // margin: '0px 0px -15% 0px', // опционально: триггер чуть раньше/позже
        }}
        transition={{ duration, delay, ease: [0.65, 0, 0.35, 1] }}
      />
    </svg>
  );
}
