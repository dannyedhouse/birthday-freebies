import {OfferTags} from '@/types/OfferTags'
import {IoMdClose} from 'react-icons/io'

interface TagButton {
  label: OfferTags
  onClick: () => void
  isSelected: boolean
  colour: string
}

export const TagButton = ({label, onClick, isSelected, colour}: TagButton) => {
  return (
    <button
      onClick={onClick}
      className={`shadow-md font-raleway pl-2 pr-2 sm:pl-4 mt-1 sm:pr-4 text-sm sm:text-base rounded-full flex items-center gap-1 capitalize hover:bg-${colour}-200 border-gray-300 border-2 ${
        isSelected
          ? `bg-${colour}-200 border-solid border-${colour}-600 text-${colour}-900`
          : 'bg-white bg-opacity-40 border-dashed'
      }`}
    >
      {label}
      {'s'}
      {isSelected ? (
        <span className={`text-${colour}-900`}>
          <IoMdClose />
        </span>
      ) : null}
    </button>
  )
}
