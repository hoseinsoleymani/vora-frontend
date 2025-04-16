"use server";

interface SignupData {
  email: string;
  name: string;
  phone_number: string;
  password: string;
  password2: string;
}

export async function signupAction(data: SignupData) {
  try {
    const response = await fetch("http://5.161.155.143:5000/user/sign-up/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error("Signup failed");
    }

    return { success: true, data: responseData };
  } catch (error) {
    console.error("Error during signup:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "An error occurred",
    };
  }
}
