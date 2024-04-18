import { writeClient } from "@/lib/sanity";
import { SuggestionFormType } from "@/types/SuggestionFormType";

const transformData = (data: SuggestionFormType) => {
  let transformedData;
  const _id: string = new Date().getTime().toString();
  const _type: string = "suggestions";
  const retailer: string = data.retailer;
  const description: string = data.description;
  const url: string = data.url;

  transformedData = { _id, _type, retailer, description, url };
  return transformedData;
};

export const submitSuggestions = (data: SuggestionFormType) => {
  let transaction = writeClient.transaction();
  const transformedData = transformData(data);
  transaction.createIfNotExists(transformedData);
  return transaction.commit();
};
