import { z } from "zod"
export const signInSchema = z.object({
	email: z.string().email(),
	password: z.string().min(3, "Pasword must be at least 3 words")

})
export type TsignInSchema = Zod.infer<typeof signInSchema>
