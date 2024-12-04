import { createContext } from "react";
import { GetImageFormType } from "../validations/getImageFormValidation";
import { CardData } from "../types";

export type AppContext = {
  submit: (data: GetImageFormType) => Promise<void>;
  save: () => void;
  refetch: () => void;
  isLoading: boolean;
  error: string | null;
  previewData: CardData | undefined;
};

export const AppContext = createContext<AppContext>({
  submit: async () => {},
  save: () => {},
  refetch: () => {},
  isLoading: false,
  error: null,
  previewData: undefined,
});
