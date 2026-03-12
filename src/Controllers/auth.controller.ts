import { loginUser, signupUser } from "../Services/auth.service";
import type { LoginFormData, SignupFormData } from "../Models/auth.model";

export async function handleLogin(data: LoginFormData) {
  if (!data.email || !data.password) {
    throw new Error("Please fill in all fields.");
  }

  return await loginUser(data);
}

export async function handleSignup(data: SignupFormData) {
  if (!data.fullName || !data.email || !data.password || !data.confirmPassword) {
    throw new Error("Please fill in all fields.");
  }

  if (data.password !== data.confirmPassword) {
    throw new Error("Passwords do not match.");
  }

  return await signupUser(data);
}