import {Button} from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
      <div className="flex flex-col mt-10 gap-4 text-center sm:text-left mb-10 items-center sm:items-start h-full">
        <h1 className="font-raleway font-bold text-2xl sm:text-5xl">
          Oops, that page does not exist.
        </h1>
        <Link href="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </div>
      <Image priority className="" src={'/404.webp'} alt="404 image" height={800} width={600} />
    </div>
  )
}
