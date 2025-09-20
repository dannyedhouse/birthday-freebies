'use client'

import Dropdown, {DropdownOption} from '@/components/Dropdown/Dropdown'
import {TagButton} from '@/components/TagButton/TagButton'
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
  const [selectedTags, setSelectedTags] = useState<string[]>(['freebie', 'discount'])

  const handleTagClick = (selectedTag: string) => {
    setSelectedTags((prevTags) => {
      const newTags = prevTags.includes(selectedTag)
        ? prevTags.filter((t) => t !== selectedTag)
        : [...prevTags, selectedTag]

      return newTags.length === 0 ? ['freebie', 'discount'] : newTags
    })
  }

  const resetFilters = () => {
    setSelectedCategory(options[0])
    setSelectedTags(['freebie', 'discount'])
  }

  const filteredOffers = props.data.filter((offer) => {
    const categoryMatches =
      selectedCategory.name === 'All categories' ||
      offer.category === selectedCategory.name.toLowerCase()

    const tagMatches = selectedTags.length === 0 || selectedTags.includes(offer.tag)
    return categoryMatches && tagMatches
  })

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap justify-between align-center gap-2 sm:gap-4 mb-2 md:mb-6 w-full">
          <div className="flex gap-2 sm:gap-4 justify-center w-full md:justify-start md:w-fit">
            <Dropdown
              selected={selectedCategory}
              setSelected={setSelectedCategory}
              options={options}
            />
            <TagButton
              label={'freebie'}
              onClick={() => handleTagClick('freebie')}
              isSelected={selectedTags.includes('freebie')}
            />
            <TagButton
              label={'discount'}
              onClick={() => handleTagClick('discount')}
              isSelected={selectedTags.includes('discount')}
            />
          </div>
          <p className="mt-2 font-raleway text-sm sm:text-base text-center w-full md:text-right md:w-auto">{`Showing ${filteredOffers.length} of ${props.data.length} deals`}</p>
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
              <p className=" bg-primary font-raleway text-2xl h-fit mb-2">
                <i>No freebies or deals found 💔</i>
              </p>
              <Button variant="primary" onClick={resetFilters}>
                Clear all filters
              </Button>
            </div>
            <Image
              priority
              className="hidden md:block justify-self-end"
              src={'/no-data.webp'}
              alt="404 image"
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
