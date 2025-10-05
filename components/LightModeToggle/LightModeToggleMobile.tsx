import {useTheme} from 'next-themes'
import {useState, useEffect} from 'react'
import {BsSun, BsMoon} from 'react-icons/bs'
import {MdComputer} from 'react-icons/md'

export const LightModeToggleMobile = () => {
  const {theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const options = [
    {value: 'light', icon: BsSun, label: 'Light'},
    {value: 'dark', icon: BsMoon, label: 'Dark'},
    {value: 'system', icon: MdComputer, label: 'Auto'},
  ]

  return (
    <div className="px-2">
      <div className="flex items-center bg-gray-100 rounded-lg p-1">
        {options.map((option) => {
          const Icon = option.icon
          const isActive = theme === option.value
          return (
            <button
              key={option.value}
              onClick={() => setTheme(option.value)}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{option.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
