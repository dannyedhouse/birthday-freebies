import {writeClient} from '@/lib/sanity'
import axios, {AxiosResponse} from 'axios'
import * as cheerio from 'cheerio'
import {NextRequest} from 'next/server'

const url = process.env.DATA_SOURCE_URL!

interface NewDealData {
  _id: string
  _type: string
  title: string
  heading: string
  retailer: string
  tag: string
  dealSummary: string
  dealTerms: string
  url: string
  popularity: number
}

/** Vercel Cronjob for sourcing new freebies/deals */
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')

  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', {
      status: 401,
    })
  }

  const axiosInstance = axios.create()
  axiosInstance
    .get(url)
    .then((response) => getData(response))
    .then((deals) => {
      let transaction = writeClient.transaction()
      deals.forEach((deal) => {
        transaction.createIfNotExists(deal)
      })
      return transaction.commit()
    })
    .catch()
  return Response.json({message: 'Updated successfully'})
}

function getData(response: AxiosResponse): NewDealData[] {
  const html = response.data
  const $ = cheerio.load(html)
  const dealList = $('.numbers > li')
  const deals: NewDealData[] = []

  dealList.each((i, elem) => {
    const retailer: string = $(elem).find('h3').text()
    const url: string = $(elem).find('a').attr('href') ?? ''
    const deal: string = $(elem).find('p').text()

    let dealParts: string[]
    let tag: string = ''

    if (deal.includes('Freebie:')) {
      dealParts = deal.split(/Freebie:|How to claim your freebie:|T&Cs:/)
      tag = 'freebie'
    } else {
      dealParts = deal.split(/Discount:|How to claim your birthday discount:|T&Cs:/)
      tag = 'discount'
    }

    const heading: string = dealParts[1].replace('.', '').trim()
    const title: string = retailer + ' - ' + heading
    const dealSummary: string = dealParts[2].trim()
    const dealTerms: string = dealParts[3].trim()
    const _id: string = retailer.replace(/[^\w\s]/g, '').replace(/\s/g, '')
    const _type: string = 'deals'

    const popularity: number = 0
    deals.push({
      _id,
      _type,
      retailer,
      url,
      title,
      heading,
      dealSummary,
      dealTerms,
      tag,
      popularity,
    })
  })
  return deals
}
