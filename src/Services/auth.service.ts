
import type { LoginFormData, SignupFormData } from "../Models/auth.model";

export async function loginUser(data: LoginFormData) {
  console.log("Login payload:", data);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        user: {
          id: 1,
          name: "Elias",
          email: data.email,
        },
      });
    }, 800);
  });
}

export async function signupUser(data: SignupFormData) {
  console.log("Signup payload:", data);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        user: {
          id: 2,
          name: data.fullName,
          email: data.email,
        },
      });
    }, 800);
  });
}