'use client'

import {useTheme} from 'next-themes'
import {useEffect, useState} from 'react'

export default function LightModeToggle() {
  const {theme, setTheme} = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  const [isBlowing, setIsBlowing] = useState(false)

  useEffect(() => setIsMounted(true), [])
  
  if (!isMounted) {
    return (
      <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200" aria-label="Toggle theme">
        <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      </button>
    )
  }

  const handleToggle = () => {
    if (theme === 'light') {
      setIsBlowing(true)
      setTimeout(() => {
        setIsBlowing(false)
        setTheme('dark')
      }, 200)
    } else {
      setTheme('light')
    }
  }

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 64 64"
        className="drop-shadow-lg transition-transform duration-200 hover:scale-105"
      >
        <defs>
          {/* Gradient definitions */}
          <linearGradient id="cakeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbb6ce" />
            <stop offset="100%" stopColor="#f687b3" />
          </linearGradient>
          <linearGradient id="frostingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fef7ff" />
            <stop offset="100%" stopColor="#f8fafc" />
          </linearGradient>
          <linearGradient id="candle1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="candle2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
          <linearGradient id="candle3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
          <radialGradient id="flameGradient" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="70%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </radialGradient>
        </defs>

        {/* Cake Base with shadow */}
        <ellipse cx="32" cy="50" rx="22" ry="4" fill="#000000" opacity="0.1" />
        <rect
          x="10"
          y="30"
          width="44"
          height="18"
          rx="6"
          fill="url(#cakeGradient)"
          stroke="#e879f9"
          strokeWidth="1"
        />

        {/* Cake layers */}
        <rect
          x="12"
          y="26"
          width="40"
          height="6"
          rx="3"
          fill="url(#frostingGradient)"
          stroke="#e2e8f0"
          strokeWidth="0.5"
        />

        {/* Decorative sprinkles */}
        <circle cx="18" cy="29" r="1" fill="#ef4444" />
        <circle cx="25" cy="29" r="1" fill="#3b82f6" />
        <circle cx="35" cy="29" r="1" fill="#10b981" />
        <circle cx="42" cy="29" r="1" fill="#f59e0b" />

        {/* Candles */}
        <rect
          x="17"
          y="14"
          width="3"
          height="14"
          rx="1.5"
          fill="url(#candle1)"
          stroke="#1e40af"
          strokeWidth="0.5"
        />
        <rect
          x="30.5"
          y="14"
          width="3"
          height="14"
          rx="1.5"
          fill="url(#candle2)"
          stroke="#166534"
          strokeWidth="0.5"
        />
        <rect
          x="44"
          y="14"
          width="3"
          height="14"
          rx="1.5"
          fill="url(#candle3)"
          stroke="#92400e"
          strokeWidth="0.5"
        />

        {/* Flame wicks */}
        <line x1="18.5" y1="12" x2="18.5" y2="14" stroke="#92400e" strokeWidth="0.5" />
        <line x1="32" y1="12" x2="32" y2="14" stroke="#92400e" strokeWidth="0.5" />
        <line x1="45.5" y1="12" x2="45.5" y2="14" stroke="#92400e" strokeWidth="0.5" />

        {/* Realistic flames (light mode) */}
        {theme === 'light' && (
          <g className={isBlowing ? 'animate-blowout' : 'animate-flicker'}>
            <ellipse cx="18.5" cy="10" rx="1.5" ry="2.5" fill="url(#flameGradient)" opacity="0.9" />
            <ellipse cx="32" cy="10" rx="1.5" ry="2.5" fill="url(#flameGradient)" opacity="0.9" />
            <ellipse cx="45.5" cy="10" rx="1.5" ry="2.5" fill="url(#flameGradient)" opacity="0.9" />
          </g>
        )}

        {/* Realistic smoke (dark mode) */}
        {theme === 'dark' && (
          <g className="animate-smoke">
            <ellipse cx="18.5" cy="8" rx="1.5" ry="2" fill="#9ca3af" opacity="0.6" />
            <ellipse cx="32" cy="7" rx="1.5" ry="2" fill="#9ca3af" opacity="0.5" />
            <ellipse cx="45.5" cy="9" rx="1.5" ry="2" fill="#9ca3af" opacity="0.4" />
          </g>
        )}
      </svg>
    </button>
  )
}
