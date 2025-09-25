import NextLink, {LinkProps} from 'next/link'
import {ReactNode} from 'react'

type CustomLinkProps = LinkProps & {
  children: ReactNode
  className?: string
  external?: boolean
}

export default function BrandLink({
  children,
  className = '',
  external = false,
  ...props
}: CustomLinkProps) {
  const baseClasses = 'text-blue-600 hover:text-blue-800 hover:underline transition-colors'

  if (external) {
    return (
      <a
        href={props.href as string}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${className}`}
      >
        {children}
      </a>
    )
  }

  return (
    <NextLink {...props} className={`${baseClasses} ${className}`}>
      {children}
    </NextLink>
  )
}
