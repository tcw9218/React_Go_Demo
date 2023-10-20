import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

export const RequireAuth = () => {
	const { auth } = useAuth()
	const location = useLocation()

	return (
		auth?.user
	)
}
