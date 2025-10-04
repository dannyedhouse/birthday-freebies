'use client'

import {useState} from 'react'
import {OfferTags} from '@/types/OfferTags'

export type FilterType = 'all' | 'freebie' | 'discount'

interface TabFilterProps {
  onFilterChange: (filter: OfferTags) => void
  initialFilter?: OfferTags
}

export const TabFilter = ({onFilterChange, initialFilter = 'all'}: TabFilterProps) => {
  const [activeFilter, setActiveFilter] = useState<OfferTags>(initialFilter)

  const handleFilterChange = (filter: OfferTags) => {
    setActiveFilter(filter)
    onFilterChange(filter)
  }

  const tabs = [
    {
      id: 'all' as OfferTags,
      label: 'All Deals',
      count: null,
      icon: '🎁',
    },
    {
      id: 'freebie' as OfferTags,
      label: 'Freebies',
      count: null,
      icon: '🆓',
    },
    {
      id: 'discount' as OfferTags,
      label: 'Discounts',
      count: null,
      icon: '💰',
    },
  ]

  return (
    <div className="border-b border-gray-200 w-full">
      <nav className="flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleFilterChange(tab.id)}
            className={`
              flex items-center gap-2 px-1 py-4 text-sm font-medium border-b-2 transition-all duration-200
              ${
                activeFilter === tab.id
                  ? 'border-sky-500 text-sky-600 font-semibold'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }
            `}
          >
            <span className="text-base">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}
