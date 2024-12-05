import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Select from "../Select/Select";
import {
  formSchema,
  GetImageFormType,
} from "../../validations/getImageFormValidation";
import { useEffect } from "react";
import { useApp } from "../../hooks/useApp";
import { selectOptions } from "../../constants";

const GetImageForm = () => {
  const {
    register,
    reset,
    resetField,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<GetImageFormType>({
    resolver: zodResolver(formSchema),
  });
  const prefferedTopicValue = watch("prefferedTopic");

  const { submit } = useApp();

  const onSubmit = (data: GetImageFormType) => {
    submit(data);
    reset();
  };

  useEffect(() => {
    if (prefferedTopicValue !== "other") resetField("topic");
  }, [prefferedTopicValue, resetField]);

  return (
    <div className="flex items-start relative gap-x-4 w-[400px] rounded-lg border border-primary bg-white px-6 py-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-grow flex-col gap-y-5"
      >
        <div className="flex flex-col mb-2 gap-y-2">
          <Input
            autoFocus
            id="name"
            label="Name"
            placeholder="Enter your name..."
            {...register("name")}
            error={errors?.name?.message}
          />
          <Input
            id="surname"
            label="Surname"
            placeholder="Enter you surname..."
            {...register("surname")}
            error={errors?.surname?.message}
          />
          <Select
            id="prefferedTopic"
            label="Preffered topic"
            {...register("prefferedTopic")}
            options={selectOptions}
            error={errors?.prefferedTopic?.message}
          />
          {prefferedTopicValue === "other" && (
            <Input
              id="topic"
              label="Topic"
              placeholder="Enter your topic..."
              {...register("topic")}
              error={errors?.topic?.message}
            />
          )}
        </div>
        <Button>Search</Button>
      </form>
    </div>
  );
};

export default GetImageForm;
