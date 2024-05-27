import {OfferTags} from '@/types/OfferTags'
import {IoIosCloseCircle} from 'react-icons/io'

interface TagButton {
  label: OfferTags
  onClick: () => void
  isSelected: boolean
}

export const TagButton = ({label, onClick, isSelected}: TagButton) => {
  return (
    <button
      onClick={onClick}
      className={`min-w-[101px] sm:min-w-[120px] flex items-center gap-1 shadow-md font-raleway pl-2 pr-2 sm:pl-4 mt-1 sm:pr-4 text-sm sm:text-base rounded-full capitalize hover:bg-gray-200 border-gray-300 border-2 ${
        isSelected ? `bg-white border-solid  text-gray-900` : 'bg-white bg-opacity-40 border-dashed'
      }`}
    >
      {label}
      {'s'}
      {isSelected ? (
        <span className={`text-gray-600`}>
          <IoIosCloseCircle />
        </span>
      ) : null}
    </button>
  )
}
