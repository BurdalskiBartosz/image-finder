import * as z from "zod";

export const formSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    surname: z.string().min(1, { message: "Surname is required" }),
    prefferedTopic: z
      .string()
      .min(1, { message: "Preffered Topic is required" }),
    topic: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.prefferedTopic !== "other" && !data.topic) return true;
      if (data.prefferedTopic === "other" && data.topic) return true;
      return false;
    },
    {
      message: "Topic is required",
      path: ["topic"],
    }
  );

export type GetImageFormType = z.infer<typeof formSchema>;
