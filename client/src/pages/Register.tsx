import { SyntheticEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Register = () => {
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const submit = async (e: SyntheticEvent) => {
		e.preventDefault()
		console.log({
			email,
			password
		})
		 await fetch('http://localhost:8000/api/register', {
			method:'POST',
			headers: { 'Content-Type':'application/json' },
			body: JSON.stringify({
				email,
				password
			})
		})
		// const content = await res.json()
		navigate('/login',{ replace:true })
	}
	return(
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" onSubmit={submit}>
						<div>
							<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
									Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									onChange = {(e => setEmail(e.target.value))}
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
										Password
								</label>

							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									onChange = {(e => setPassword(e.target.value))}
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
									Submit
							</button>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
							Have Registered?{' '}

						<Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</Link>

					</p>
				</div>
			</div>
		</>
	)
}
