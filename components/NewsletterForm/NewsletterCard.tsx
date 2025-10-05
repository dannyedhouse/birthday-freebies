import {HiX} from 'react-icons/hi'
import SenderEmbed from './SenderEmbed'

interface NewsletterCardProps {
  showCloseButton?: boolean
  onDismiss?: () => void
}

export const NewsletterCard = ({showCloseButton = false, onDismiss}: NewsletterCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm relative">
      {showCloseButton && onDismiss && (
        <button
          onClick={onDismiss}
          className="absolute top-3 right-3 p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
          aria-label="Dismiss newsletter"
        >
          <HiX className="w-4 h-4 text-gray-600" />
        </button>
      )}
      <div className="flex flex-col items-center justify-center text-center">
        <SenderEmbed />
      </div>
    </div>
  )
}
