import { useEffect, useState } from "react";
import type {
  RegisterData,
  LoginData,
  AuthResponse,
  AuthUser,
} from "../models/auth.model";
import {
  registerUser,
  loginUser,
  getProfile,
} from "../services/auth.service";

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

export const useAuthUser = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getProfile();
        setUser(response.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading };
};