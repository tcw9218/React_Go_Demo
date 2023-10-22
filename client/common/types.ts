import { z } from "zod" //share for serverside usage
export const signInSchema = z.object({
	email: z.string().email(),
	password: z.string().min(3, "Pasword must be at least 3 words")

})
export type TsignInSchema = Zod.infer<typeof signInSchema>

const MAX_FILE_SIZE = 500000
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"]
export const uploadSchema = z.object({
	year: z.number().positive(),
	brand: z.string(),
	model: z.string(),
	serialNumber: z.string().optional(),
	description: z.string().optional(),
	frontImage: z
    			.any()
    			.refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    			.refine(
      				(file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      			"Only .jpg, .jpeg, .png and .webp formats are supported."
    			),
	backImage: z
    			.any()
    			.refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    			.refine(
      				(file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      			"Only .jpg, .jpeg, .png and .webp formats are supported."
    			)

})
export type TuploadSchema = Zod.infer<typeof uploadSchema>
