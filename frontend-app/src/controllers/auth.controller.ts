import type { RegisterData, LoginData, AuthResponse } from "../models/auth.model";
import { registerUser, loginUser } from "../services/auth.service";

export const handleRegister = async (
  userData: RegisterData
): Promise<AuthResponse> => {
  return await registerUser(userData);
};

export const handleLogin = async (
  userData: LoginData
): Promise<AuthResponse> => {
  return await loginUser(userData);
};