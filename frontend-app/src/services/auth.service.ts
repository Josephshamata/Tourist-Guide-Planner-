import type {
  RegisterData,
  LoginData,
  AuthResponse,
} from "../models/auth.model";
import { apiRequest } from "./api";

export const registerUser = async (
  userData: RegisterData
): Promise<AuthResponse> => {
  return apiRequest<AuthResponse>("/register", {
    method: "POST",
    body: JSON.stringify(userData),
  });
};

export const loginUser = async (
  userData: LoginData
): Promise<AuthResponse> => {
  return apiRequest<AuthResponse>("/login", {
    method: "POST",
    body: JSON.stringify(userData),
  });
};