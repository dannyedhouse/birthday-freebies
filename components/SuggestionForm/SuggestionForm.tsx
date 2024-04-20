// import {transformData} from '@/app/api/submitSuggestions'
import {suggestionFormSchema} from '@/models/SuggestionFormSchema'
import {SuggestionFormType} from '@/types/SuggestionFormType'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import FormField from './FormField'

type SuggestionFormProps = {
  onSubmit: () => void
}

export const SuggestionForm: React.FC<SuggestionFormProps> = ({onSubmit}) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<SuggestionFormType>({
    resolver: zodResolver(suggestionFormSchema),
  })

  const submitHandler = async (data: SuggestionFormType) => {
    const transformedData = transformData(data)

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/submit-suggestion`, {
        method: 'POST',
        body: JSON.stringify(transformedData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    } catch (error) {}
    onSubmit()
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
      <div>
        <div className="text-center">
          <button
            type="submit"
            className="w-[90%] bg-brand-red hover:scale-105 p-2 rounded text-white font-raleway font-medium"
          >
            Submit
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
