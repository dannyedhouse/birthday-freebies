import BrandLink from '../Link/Link'

export const Footer = () => {
  return (
    <footer className="sticky w-full py-3 font-raleway text-xs lg:text-sm bg-white border-t border-gray-200">
      <div className="container mx-auto flex gap-12 justify-center">
        <p>All names, logos and images shown are copyright of the respective brands shown.</p>
        <BrandLink href="/privacy-policy">Privacy Policy</BrandLink>
        <BrandLink href="https://github.com/dannyedhouse/birthday-freebies" external>
          View on GitHub
        </BrandLink>
      </div>
    </footer>
  )
}
