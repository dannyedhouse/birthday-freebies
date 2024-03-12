import {
  SuggestionFormType,
  suggestionFormSchema,
} from "@/types/SuggestionFormType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormField from "./FormField";

type FavFoodFormProps = {
  onSubmit: (data: SuggestionFormType) => void;
};

export const SuggestionForm: React.FC<FavFoodFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SuggestionFormType>({
    resolver: zodResolver(suggestionFormSchema),
  });

  const submitHandler = (data: SuggestionFormType) => {
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col gap-2"
    >
      <div>
        <FormField
          label={"Brand/Retailer*"}
          name={"retailer"}
          placeholder={"e.g. McDonald's"}
          register={{ ...register("retailer") }}
          errors={errors}
        />
        <FormField
          label={"Description*"}
          name={"description"}
          placeholder={"What is the freebie or deal?"}
          register={{ ...register("description") }}
          errors={errors}
        />
        <FormField
          label={"URL*"}
          name={"url"}
          placeholder={"https://"}
          register={{ ...register("url") }}
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
  );
};
