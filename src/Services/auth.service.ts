import { apiRequest } from "./api";
import type {
  LoginFormData,
  SignupFormData,
  AuthResponse,
} from "../Models/auth.model";

export function loginUser(data: LoginFormData) {
  return apiRequest<AuthResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function signupUser(data: Omit<SignupFormData, "confirmPassword">) {
  return apiRequest<AuthResponse>("/auth/signup", {
    method: "POST",
    body: JSON.stringify(data),
  });
}