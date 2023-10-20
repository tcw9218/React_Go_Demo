import { createContext, useState } from "react"

type Props = {
	children: React.ReactNode
}

export type AuthParameters = {
	user: string
}

const AuthContext = createContext({})

export const AuthProvider = ({ children }: Props) => {
	const [auth, setAuth] = useState<AuthParameters>( { user: "" } )
	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	)
}

export 	default AuthContext
