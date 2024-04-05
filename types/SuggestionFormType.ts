import { suggestionFormSchema } from "@/models/SuggestionFormSchema";
import { z } from "zod";

export type SuggestionFormType = z.infer<typeof suggestionFormSchema>;
