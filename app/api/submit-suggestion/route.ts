import {writeClient} from '@/lib/sanity'
import {NextResponse} from 'next/server'

export async function POST(req: any) {
  const data = await req.json()
  let transaction = writeClient.transaction()
  transaction.createIfNotExists(data)
  await transaction.commit()

  return NextResponse.json(data)
}
