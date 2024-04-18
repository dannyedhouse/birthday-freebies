'use client'

import Dropdown, {DropdownOption} from '@/components/Dropdown/Dropdown'
import {TagButton} from '@/components/TagButton/TagButton'
import {Button} from '@/components/ui/Button'
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
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const handleFreebiesClick = () => {
    setSelectedTag((prevTag) => (prevTag === 'freebie' ? null : 'freebie'))
  }

  const handleDiscountsClick = () => {
    setSelectedTag((prevTag) => (prevTag === 'discount' ? null : 'discount'))
  }

  const resetFilters = () => {
    setSelectedCategory(options[0])
    setSelectedTag(null)
  }

  const filteredOffers = props.data.filter((offer) => {
    if (selectedCategory.name === 'All categories' && !selectedTag) {
      return true
    } else if (selectedCategory.name === 'All categories') {
      return offer.tag === selectedTag
    } else {
      return (
        offer.category === selectedCategory.name.toLowerCase() &&
        (!selectedTag || offer.tag === selectedTag)
      )
    }
  })

  return (
    <>
      <div className="flex gap-2 sm:gap-4 m-auto mb-6 bg-primary md:m-0 md:mb-6 w-fit ">
        <Dropdown selected={selectedCategory} setSelected={setSelectedCategory} options={options} />
        <TagButton
          label={'freebie'}
          onClick={handleFreebiesClick}
          isSelected={selectedTag === 'freebie'}
          colour={'teal'}
        />
        <TagButton
          label={'discount'}
          onClick={handleDiscountsClick}
          isSelected={selectedTag === 'discount'}
          colour={'red'}
        />
      </div>

      {filteredOffers.length != 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-12">
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
    </>
  )
}

export default HeroSection
