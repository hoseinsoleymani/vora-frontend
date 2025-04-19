"use server";
import { cookies } from "next/headers";

const Login = async (data: { email: string; password: string }) => {
  try {
    const response = await fetch("http://5.161.155.143:5000/user/log-in/", {
      method: "POST",
      body: JSON.stringify(data),
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
    const cookieStore = await cookies();
    if (result.access) {
      cookieStore.set("access", result.access, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 30,
      });
    }
    console.log(result);
    return { success: true, message: "success login", data: result };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "No active account found with the given credentials",
    };
  }
};

export { Login };
