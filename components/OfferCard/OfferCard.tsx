import {urlFor} from '@/lib/sanity'
import {Offer} from '@/types/OfferInterface'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import {FaArrowAltCircleLeft, FaExternalLinkAlt} from 'react-icons/fa'
import {FaShop} from 'react-icons/fa6'
import OfferBadge from '../OfferBadge/OfferBadge'
import {Button} from '../ui/Button'

interface OfferCardProps {
  data: Offer
}

const OfferCard = (props: OfferCardProps) => {
  const offer = props.data
  let [toggleTerms, setToggleTerms] = useState<boolean>(false)

  const onToggleTerms = () => {
    setToggleTerms((toggleTerms = !toggleTerms))
  }

  return (
    <div className="relative flex flex-col">
      <Image
        src={
          offer.image
            ? urlFor(offer.image).format('webp').width(600).height(400).url()
            : 'https://placehold.co/600x400.png'
        }
        alt={offer.retailer + ' brand image'}
        width={600}
        height={400}
        className="w-full object-center rounded-lg shadow-md bg-white"
        unoptimized={!!offer.image}
      />
      {offer.logo ? (
        <div
          style={{
            position: 'absolute',
            width: `${100}px`,
            height: `${50}px`,
            right: 0,
            overflow: 'hidden',
          }}
        >
          <Image
            src={urlFor(offer.logo).format('webp').url()}
            alt={offer.retailer + ' logo'}
            style={{objectFit: 'contain'}}
            fill
            sizes={'(max-width: 600px) auto, auto'}
            className="absolute  p-2 bg-white"
            unoptimized
          />
        </div>
      ) : null}
      <div className="flex-grow relative -mt-16 px-5">
        <div
          className={`bg-white rounded-lg shadow-lg p-4 h-full relative pb-12 ${
            toggleTerms
              ? 'preserve-3d flip-offer-card w-full h-full duration-1000'
              : 'preserve-3d flip-offer-card-reverse w-full h-full duration-1000 '
          }`}
        >
          <div className={`backface-hidden ${toggleTerms ? 'pointer-events-none' : ''}`}>
            <div className="flex items-baseline -ml-2 justify-between">
              <div className="ml-2 text-gray-600 uppercase text-xs font-semibold flex gap-1 items-center">
                <FaShop />
                {offer.retailer}
              </div>
              <OfferBadge tag={offer.tag} />
            </div>

            {/**Deal/offer card front*/}
            <h4 className="text-lg font-semibold mt-1">{offer.heading}</h4>
            <p className="text-sm pb-2">{offer.dealSummary}</p>
            <div className={`absolute bottom-0 left-0 w-full p-4`}>
              <div className="flex items-center flex-wrap justify-between relative">
                <Button variant="link" onClick={onToggleTerms} disabled={toggleTerms}>
                  T&Cs
                </Button>
                <Link href={offer.url} target="_blank" rel="noreferrer">
                  <Button variant="primary" disabled={toggleTerms}>
                    Get Freebie <FaExternalLinkAlt />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/**Deal/offer card back T&Cs*/}
          <div className="absolute flip-offer-card backface-hidden top-0 right-0 p-4 h-full">
            <div className="max-h-[70%] overflow-y-auto">
              <h5 className="text-md font-semibold">Terms and Conditions</h5>
              <p className="text-xs text-grey-500 ">{offer.dealTerms}</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4">
              <Button variant="info" onClick={onToggleTerms}>
                <span className="inline-flex gap-2 items-center">
                  <FaArrowAltCircleLeft /> Got it!
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfferCard
