"use server";
import { API_BASE_URL } from "@/lib";
import { cookies } from "next/headers";

export const googleLogin = async (token: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/social/google/`, {
      body: JSON.stringify({ access_token: token }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorResult = await response.json();
      return {
        success: false,
        message: errorResult,
      };
    }

    const result = await response.json();
    console.log(result);

    const cookieStore = await cookies();

    if (result.access) {
      cookieStore.set("access", result.access, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 5, 
      });
    }

    return { success: true, message: "success login", data: result };
  } catch (error) {
    console.error("Google login error:", error);
    return {
      success: false,
      message: error,
    };
  }
};
