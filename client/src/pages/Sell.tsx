import { TuploadSchema, uploadSchema } from "../../common/types";
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/UI/Button";

const onSubmit  = async( data: TuploadSchema) => {

	const resp = await fetch('http://localhost:8000/api/login', {
		method:'POST',
		headers: { 'Content-Type':'application/json' },
		credentials: 'include',
		body: JSON.stringify({
			year: data.year,
			brand: data.brand,
			model: data.model,
			serialnumber: data.serialNumber,
			descriptioon: data.description,
			frontimage: data.frontImage,
			backimage: data.backImage
		})
	})
	if ( !resp.ok){
		alert("Submit Failed")
		return
	}

}

const Sell = () => {

	const {
		register,
		handleSubmit,
		formState : { errors, isSubmitting },
	} = useForm<TuploadSchema>({
		resolver: zodResolver(uploadSchema)
	})

	return (
		<section className="flex flex-col p-4 gap-y-2">
			<div className="flex flex-col border-b-2 border-spacing-y-5 border-b-white">
				<h1 className="text-2xl font-bold">
				Tell us about your frame
				</h1>
				<p className="py-2">We need to know more about your frame so we can accurately appraise the value.</p>
			</div>
			<div>
				<div className="flex items-center justify-between">
					<label className="block text-sm font-medium leading-6 text-gray-900">
									Year
					</label>
				</div>
				<form onSubmit={ handleSubmit( onSubmit) } className="space-y-6">
					<input
						{...register('year')}
						placeholder="year"
						required
						className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
					{errors.year &&  (
						<p className = "text-red-500">{`${errors.year.message}`}</p>
					)}
					<div>
						<div className="flex items-center justify-between">
							<label className="block text-sm font-medium leading-6 text-gray-900">
									Brand
							</label>
						</div>
						<div className="mt-2">
							<input
								{...register('brand')}
								placeholder="Brand"
								required
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
							{errors.brand &&  (
								<p className = "text-red-500">{`${errors.brand.message}`}</p>)
							}
						</div>
					</div>

					<div>
						<Button
							label="Upload"
							disabled={isSubmitting}
							type="submit"
						/>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Sell


