import {SuggestionModal} from '@/components/Modal/SuggestionModal'
import LightModeToggle from '@/components/LightModeToggle/LightModeToggle'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <Link href="/" className="flex">
            <Image src="/logo.svg" width={200} height={200} alt="logo" className="h-8 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <LightModeToggle />
            <SuggestionModal />
          </div>
        </div>
      </div>
    </header>
  )
}
