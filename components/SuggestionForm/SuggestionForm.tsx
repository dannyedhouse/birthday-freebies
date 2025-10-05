'use client'

import {suggestionFormSchema} from '@/models/SuggestionFormSchema'
import {SuggestionFormType} from '@/types/SuggestionFormType'
import {zodResolver} from '@hookform/resolvers/zod'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import FormField from './FormField'

type SuggestionFormProps = {
  onSubmit: () => void
}

export const SuggestionForm: React.FC<SuggestionFormProps> = ({onSubmit}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<SuggestionFormType>({
    resolver: zodResolver(suggestionFormSchema),
  })

  const submitHandler = async (data: SuggestionFormType) => {
    const transformedData = transformData(data)
    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/submit-suggestion`, {
        method: 'POST',
        body: JSON.stringify(transformedData),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!res.ok) {
        throw new Error('Failed to submit suggestion. Please try again.')
      }

      onSubmit()
    } catch (error) {
      console.error('Submission error:', error)
      setError(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-2">
      <div>
        <FormField
          label={'Brand/Retailer*'}
          name={'retailer'}
          placeholder={"e.g. McDonald's"}
          register={{...register('retailer')}}
          errors={errors}
        />
        <FormField
          label={'Description*'}
          name={'description'}
          placeholder={'What is the freebie or deal?'}
          register={{...register('description')}}
          type="textarea"
          errors={errors}
        />
        <FormField
          label={'URL*'}
          name={'url'}
          placeholder={'https://'}
          register={{...register('url')}}
          errors={errors}
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div>
        <div className="text-center">
          <button
            type="submit"
            className="m-auto w-[90%] bg-brand-red hover:scale-105 p-2 rounded text-white font-raleway font-medium flex gap-2 justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            Submit
            {isLoading ? <Spinner /> : null}
          </button>
        </div>
      </div>
    </form>
  )
}

const transformData = (data: SuggestionFormType) => {
  const _id: string = new Date().getTime().toString()
  const _type: string = 'suggestions'
  const retailer: string = data.retailer
  const description: string = data.description
  const url: string = data.url

  return {_id, _type, retailer, description, url}
}

const Spinner = () => {
  return (
    <span role="status">
      <svg
        aria-hidden="true"
        className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </span>
  )
}
