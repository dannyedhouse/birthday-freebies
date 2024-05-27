import {SuggestionModal} from '@/components/Modal/SuggestionModal'
import Image from 'next/image'

export const Header = () => {
  return (
    <div className="container mx-auto">
      <header className="flex justify-between items-center py-6 sm:py-10 gap-8 ">
        <a href="/" className="flex">
          <Image src="/logo.svg" width={400} height={400} alt="logo" className="bg-primary" />
        </a>
        <SuggestionModal />
      </header>
    </div>
  )
}
