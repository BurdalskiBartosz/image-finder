import { createContext } from "react";
import { GetImageFormType } from "../validations/getImageFormValidation";
import { CardData } from "../types";

export type ImageDataContext = {
  submit: (data: GetImageFormType) => Promise<void>;
  save: () => void;
  refetch: () => void;
  isLoading: boolean;
  error: string | null;
  data: CardData[];
  previewData: CardData | undefined;
};

export const ImageDataContext = createContext<ImageDataContext>({
  submit: async () => {},
  save: () => {},
  refetch: () => {},
  isLoading: false,
  error: null,
  data: [],
  previewData: undefined,
});
