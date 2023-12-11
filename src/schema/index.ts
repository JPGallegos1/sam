import { z } from "zod";

export const studentSchema = z.object({
  name: z.string(),
  age: z.coerce.number().positive().max(99),
  email: z.string().email(),
});

export type StudentSchema = z.infer<typeof studentSchema>;
