import { createContext } from "react";
import { GetImageFormType } from "../validations/getImageFormValidation";
import { CardData } from "../types";

export type AppContext = {
  submit: (data: GetImageFormType) => Promise<void>;
  save: () => void;
  refetch: () => void;
  isLoading: boolean;
  error: string | null;
  data: CardData[];
  previewData: CardData | undefined;
};

export const AppContext = createContext<AppContext>({
  submit: async () => {},
  save: () => {},
  refetch: () => {},
  isLoading: false,
  error: null,
  data: [],
  previewData: undefined,
});
