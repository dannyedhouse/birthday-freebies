'use client'

import React from 'react'
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
import {NewsletterCard} from '@/components/NewsletterForm/NewsletterCard'
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
  const [isNewsletterDismissed, setIsNewsletterDismissed] = useState(false)

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
          <div className="flex flex-row flex-wrap items-center justify-between gap-3">
            <div className="flex flex-row items-center gap-3 w-full sm:w-auto">
              <div className="flex-shrink-0">
                <Dropdown
                  selected={selectedCategory}
                  setSelected={setSelectedCategory}
                  options={options}
                />
              </div>
              <div className="flex-1 sm:flex-none">
                <SearchField
                  onSearchChange={handleSearchChange}
                  placeholder="Search offers, retailers, deals..."
                />
              </div>
            </div>
            <p className="hidden sm:block font-raleway text-sm text-center sm:text-right self-start sm:self-center">{`Showing ${filteredOffers.length} of ${props.data.length} deals`}</p>
          </div>

          {/* Tab Filter Row */}
          <div className="w-full">
            <TabFilter onFilterChange={handleFilterChange} initialFilter={activeFilter} />
          </div>
        </div>

        {filteredOffers.length != 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-8 pb-12">
            {filteredOffers.map((offer, idx) => (
              <React.Fragment key={idx}>
                <OfferCard data={offer} />
                {idx === 5 && !isNewsletterDismissed && (
                  <div className="lg:hidden col-span-full">
                    <NewsletterCard showCloseButton onDismiss={() => setIsNewsletterDismissed(true)} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row items-start lg:items-center w-full justify-between gap-6">
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
