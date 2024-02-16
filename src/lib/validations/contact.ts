import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});
