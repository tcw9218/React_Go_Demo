import { Link, useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { TsignInSchema, signInSchema } from "../../lib/types"

type loginResp = {
	user: string,
	token: string
}

export const  LoginReactHook = () => {
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState : { errors, isSubmitting, },
		reset,
		setError
	} = useForm<TsignInSchema>({
		resolver: zodResolver(signInSchema)
	}
	)

	const storeAuthentication = (user: string,token: string) => {
		localStorage.setItem("user", user)
		localStorage.setItem("jwt",token)
	}

	const onSubmit  = async( data: TsignInSchema) => {
		console.log(data.email)
		const resp = await fetch('http://localhost:8000/api/login', {
			method:'POST',
			headers: { 'Content-Type':'application/json' },
			credentials: 'include',
			body: JSON.stringify({
				email: data.email,
				password: data.password
			})
		})
		if ( !resp.ok){
			alert("Submit Failed")
			return
		}
		const responseData: loginResp = await resp.json()
		// if (responseData.errors) {
		// 	const errors = responseData.errors
		// 	if(errors.email) {
		// 		setError("email",{
		// 			type: "server",
		// 			message: errors.email
		// 		})
		// 	}else if (errors.password) {
		// 		setError("password",{
		// 			type: "server",
		// 			message: errors.password
		// 		})
		// 	}

		// }
		storeAuthentication(responseData.user, responseData.token)
		// reset()
		navigate('/',{ replace:true })
	}
	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
		  		<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
			  			Sign in to your account
				</h2>
		  		</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form onSubmit={ handleSubmit( onSubmit) } className="space-y-6">
					<input
						{...register('email')}
						placeholder="Email"
						type="email"
						required
						autoComplete="email"
						className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
					{errors.email &&  (
						<p className = "text-red-500">{`${errors.email.message}`}</p>
					)}
					<div>
						<div className="flex items-center justify-between">
							<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
									Password
							</label>
							<div className="text-sm">
								<a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
									Forgot password?
								</a>
							</div>
						</div>
						<div className="mt-2">
							<input
								{...register('password')}
								placeholder="PassWord"
								type="password"
								required
								autoComplete="current-password"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
							{errors.password &&  (
								<p className = "text-red-500">{`${errors.password.message}`}</p>)
							}
						</div>
					</div>

					<div>
						<button
							disabled={isSubmitting}
							type="submit"
							className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 disabled:bg-gray-500"
						>
								Sign in
						</button>
					</div>
				</form>

				<p className="mt-10 text-center text-sm text-gray-500">
						Havent Registered?{' '}
					<Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register</Link>

				</p>
			</div>
		</div>

	)
}
