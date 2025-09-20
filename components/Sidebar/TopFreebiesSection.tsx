import {Offer} from '@/types/OfferInterface'
import Link from 'next/link'

interface TopFreebiesSectionProps {
  offers: Offer[]
}

export const TopFreebiesSection = ({offers}: TopFreebiesSectionProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">🔥 Top Offers this Week</h3>
      <ul className="space-y-3">
        {offers.map((offer, index) => (
          <li key={index}>
            <Link
              href={offer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-700 hover:font-bold transition-colors duration-200 block"
            >
              {offer.heading}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
