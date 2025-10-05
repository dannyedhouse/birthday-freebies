'use client'

import {Offer} from '@/types/OfferInterface'
import SenderEmbed from '../NewsletterForm/SenderEmbed'
import {FeaturedFreebiesSection} from './FeaturedFreebiesSection'

interface SidebarProps {
  topOffers?: Offer[]
}

export const Sidebar = ({topOffers = []}: SidebarProps) => {
  return (
    <aside className="w-full lg:w-80 xl:w-96 flex-shrink-0">
      <div className="sticky top-6 space-y-6">
        <FeaturedFreebiesSection offers={topOffers.slice(0, 3)} />
        <SenderEmbed />
        <div className="bg-primary rounded-lg border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 Top tip</h3>
          <p>
            Sign up to these freebies and discounts using a secondary email to avoid marketing spam!
          </p>
        </div>
      </div>
    </aside>
  )
}
