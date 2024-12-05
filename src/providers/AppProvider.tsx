import { PropsWithChildren, useState } from "react";
import { GetImageFormType } from "../validations/getImageFormValidation";
import { CardData } from "../types";
import { AppContext } from "./AppContext";
import useFetchImage from "../hooks/useFetchImage";

export const AppProvider = ({ children }: PropsWithChildren) => {
  const { error, isLoading, fetchData } = useFetchImage();
  const [data, setData] = useState<CardData[]>([]);
  const [topic, setTopic] = useState<string | null>(null);
  const [previewData, setPreviewData] = useState<CardData>();

  const fetchImage = async (topic: string) => {
    const json = await fetchData(topic);
    return json;
  };

  const submit = async (data: GetImageFormType) => {
    setTopic(data.topic ?? data.prefferedTopic);

    const imageDetails = await fetchImage(data.topic ?? data.prefferedTopic);

    setPreviewData({
      name: data.name,
      surname: data.surname,
      imgUrl: imageDetails?.urls?.small,
    });
  };

  const save = () => {
    if (previewData) {
      setData([...data, previewData]);
      setPreviewData(undefined);
    }
  };

  const refetch = async () => {
    if (topic && previewData) {
      const imageDetails = await fetchImage(topic);
      setPreviewData({
        ...previewData,
        imgUrl: imageDetails?.urls?.small,
      });
    }
  };

  return (
    <AppContext.Provider
      value={{ submit, isLoading, error, refetch, save, previewData, data }}
    >
      {children}
    </AppContext.Provider>
  );
};
