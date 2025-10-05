import {writeClient} from '@/lib/sanity'
import {NextResponse} from 'next/server'
import {suggestionFormSchema} from '@/models/SuggestionFormSchema'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function POST(req: any) {
  try {
    const body = await req.json()

    const validatedData = suggestionFormSchema.parse(body)

    const sanitizedData = {
      _type: 'suggestions',
      retailer: validatedData.retailer.trim(),
      description: validatedData.description.trim(),
      url: validatedData.url.trim(),
    }

    let transaction = writeClient.transaction()
    transaction.create(sanitizedData)
    await transaction.commit()

    return NextResponse.json({success: true}, {status: 200})
  } catch (error) {
    console.error('Suggestion submission error:', error)
    return NextResponse.json({error: 'Invalid submission'}, {status: 400})
  }
}
