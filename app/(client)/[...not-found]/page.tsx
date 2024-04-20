import {notFound} from 'next/navigation'

// Workaround due to multiple layouts - https://github.com/vercel/next.js/discussions/50034
export default function NotFoundPage() {
  notFound()
}
