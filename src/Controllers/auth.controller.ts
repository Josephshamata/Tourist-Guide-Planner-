import type { LoginFormData, SignupFormData } from "../Models/auth.model";
import { loginUser, signupUser } from "../Services/auth.service";

export async function handleLogin(data: LoginFormData) {
  if (!data.email || !data.password) {
    throw new Error("Please fill in all fields.");
  }

  return await loginUser(data);
}

export async function handleSignup(data: SignupFormData) {
  if (!data.name || !data.email || !data.password || !data.confirmPassword) {
    throw new Error("Please fill in all fields.");
  }

  if (data.password !== data.confirmPassword) {
    throw new Error("Passwords do not match.");
  }

  return await signupUser({
    name: data.name,
    email: data.email,
    password: data.password,
  });
}