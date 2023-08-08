import Form from "@/components/Form";
import { sleep } from "@/utils/sleep";
import {
  Session,
  User,
  createServerActionClient,
} from "@supabase/auth-helpers-nextjs";
import { AuthError } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type SRLogin = {
  data: { user: User; session: Session } | { user: null; session: null };
  error: AuthError | null;
};

const signInResponse: SRLogin = {
  error: null,
  data: { user: null, session: null },
};

const Login = async () => {
  const formSubmission = async (formData: FormData) => {
    "use server";
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      throw new Error("Email and password is required");
    }

    const supabase = createServerActionClient({
      cookies,
    });

    const res = await supabase.auth.signInWithPassword({
      email: email as string,
      password: password as string,
    });
    signInResponse.data = res.data;
    signInResponse.error = res.error;

    if (res.data) {
      // await sleep(400);
      redirect("/dashboard");
    }
  };
  return (
    <Form
      signInResponse={signInResponse}
      modeType="signin"
      formSubmission={formSubmission}
    />
  );
};

export default Login;
