import { PropsWithChildren, useState } from "react";
import { GetImageFormType } from "../validations/getImageFormValidation";
import { CardData } from "../types";
import { AppContext } from "./AppContext";
import useFetchImage from "../hooks/useFetchImage";
import { useNavigate } from "react-router";

export const AppProvider = ({ children }: PropsWithChildren) => {
  const { error, isLoading, fetchData } = useFetchImage();
  const [topic, setTopic] = useState<string | null>(null);
  const [previewData, setPreviewData] = useState<CardData>();
  const navigate = useNavigate();

  const fetchImage = async (topic: string) => {
    const json = await fetchData(topic);
    return json;
  };

  const submit = async (data: GetImageFormType) => {
    setTopic(data.topic ?? data.prefferedTopic);

    const imageDetails = await fetchImage(data.topic ?? data.prefferedTopic);

    if (!imageDetails) {
      return;
    }

    setPreviewData({
      name: data.name,
      surname: data.surname,
      imgUrl: imageDetails?.urls.small,
    });
    navigate("/image-preview");
  };

  const save = () => {
    if (previewData) {
      setPreviewData(previewData);
      navigate("/card");
    }
  };

  const refetch = async () => {
    if (topic && previewData) {
      const imageDetails = await fetchImage(topic);
      setPreviewData({
        ...previewData,
        imgUrl: imageDetails?.urls.small,
      });
    }
  };

  return (
    <AppContext.Provider
      value={{ submit, isLoading, error, refetch, save, previewData }}
    >
      {children}
    </AppContext.Provider>
  );
};
