'use client'

import { useState } from 'react'
import { OfferTags } from '@/types/OfferTags'

export type FilterType = 'all' | 'freebie' | 'discount'

interface TabFilterProps {
  onFilterChange: (filter: FilterType) => void
  initialFilter?: FilterType
}

export const TabFilter = ({ onFilterChange, initialFilter = 'all' }: TabFilterProps) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>(initialFilter)

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter)
    onFilterChange(filter)
  }

  const tabs = [
    { 
      id: 'all' as FilterType, 
      label: 'All Deals', 
      count: null,
      icon: '🎁'
    },
    { 
      id: 'freebie' as FilterType, 
      label: 'Freebies', 
      count: null,
      icon: '🆓'
    },
    { 
      id: 'discount' as FilterType, 
      label: 'Discounts', 
      count: null,
      icon: '💰'
    }
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
              ${activeFilter === tab.id
                ? 'border-blue-500 text-blue-600 font-semibold'
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
