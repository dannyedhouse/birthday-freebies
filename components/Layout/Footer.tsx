import BrandLink from '../Link/Link'

export const Footer = () => {
  return (
    <footer className="sticky w-full py-3 font-raleway text-xs lg:text-sm bg-white border-t border-gray-200">
      <div className="container mx-auto flex flex-col gap-4 justify-center sm:flex-row sm:gap-12">
        <p>All names, logos and images shown are copyright of the respective brands shown.</p>
        <BrandLink href="/privacy-policy">Privacy Policy</BrandLink>
      </div>
    </footer>
  )
}
