'use client'

import Dropdown, {DropdownOption} from '@/components/Dropdown/Dropdown'
import {TabFilter} from '@/components/TabFilter/TabFilter'
import {OfferTags} from '@/types/OfferTags'
import {SearchField} from '@/components/SearchField/SearchField'
import {Button} from '@/components/ui/Button'
import {Sidebar} from '@/components/Sidebar/Sidebar'
import Image from 'next/image'
import {useState} from 'react'
import {BiCategory} from 'react-icons/bi'
import {FaCocktail} from 'react-icons/fa'
import {FaPaintbrush} from 'react-icons/fa6'
import {GiAmpleDress, GiHamburger} from 'react-icons/gi'
import {MdMore} from 'react-icons/md'
import OfferCard from '../../../components/OfferCard/OfferCard'
import {Offer} from '../../../types/OfferInterface'
type Props = {data: Offer[]}

const options: DropdownOption[] = [
  {name: 'All categories', icon: <BiCategory />},
  {name: 'Food', icon: <GiHamburger />},
  {name: 'Drinks', icon: <FaCocktail />},
  {name: 'Clothing', icon: <GiAmpleDress />},
  {name: 'Beauty', icon: <FaPaintbrush />},
  {name: 'Other', icon: <MdMore />},
]

const HeroSection = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState(options[0])
  const [activeFilter, setActiveFilter] = useState<OfferTags>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const handleFilterChange = (filter: OfferTags) => {
    setActiveFilter(filter)
  }

  const handleSearchChange = (term: string) => {
    setSearchTerm(term)
  }

  const resetFilters = () => {
    setSelectedCategory(options[0])
    setActiveFilter('all')
    setSearchTerm('')
  }

  const filteredOffers = props.data.filter((offer) => {
    const categoryMatches =
      selectedCategory.name === 'All categories' ||
      offer.category === selectedCategory.name.toLowerCase()

    const tagMatches = activeFilter === 'all' || offer.tag === activeFilter

    const searchMatches =
      searchTerm === '' ||
      offer.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offer.dealSummary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offer.retailer.toLowerCase().includes(searchTerm.toLowerCase())

    return categoryMatches && tagMatches && searchMatches
  })

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <div className="space-y-6 mb-8">
          {/* Top Row: Category Dropdown, Search, and Results Counter */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between align-center">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full sm:w-auto">
              <div className="flex-shrink-0 mt-1">
                <Dropdown
                  selected={selectedCategory}
                  setSelected={setSelectedCategory}
                  options={options}
                />
              </div>
              <div className="flex-2 sm:flex-none mt-1">
                <SearchField
                  onSearchChange={handleSearchChange}
                  placeholder="Search offers, retailers, deals..."
                />
              </div>
            </div>
            <p className="font-raleway text-sm text-center sm:text-right self-start sm:self-center">{`Showing ${filteredOffers.length} of ${props.data.length} deals`}</p>
          </div>

          {/* Tab Filter Row */}
          <div className="w-full">
            <TabFilter onFilterChange={handleFilterChange} initialFilter={activeFilter} />
          </div>
        </div>

        {filteredOffers.length != 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 pb-12">
            {filteredOffers.map((offer, idx) => (
              <OfferCard key={idx} data={offer} />
            ))}
          </div>
        ) : (
          <div className="flex items-center w-full justify-between">
            <div>
              <p className="font-raleway text-2xl h-fit mb-2">Sorry, no freebies or deals found</p>
              <Button variant="primary" onClick={resetFilters}>
                Clear all filters
              </Button>
            </div>
            <Image
              priority
              className="hidden md:block justify-self-end"
              src={'/no_results.png'}
              alt="no results found vector image"
              height={650}
              width={450}
            />
          </div>
        )}
      </div>

      {/* Sidebar */}
      <div className="hidden lg:block">
        <Sidebar topOffers={props.data} />
      </div>
    </div>
  )
}

export default HeroSection
