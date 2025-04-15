"use server";

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
    console.log(result);
    return { success: true, message: "success login" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "No active account found with the given credentials" };
  }
};

export { Login };
