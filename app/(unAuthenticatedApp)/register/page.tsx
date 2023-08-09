import Form from "@/components/Form";
import {
  Session,
  User,
  createServerActionClient,
} from "@supabase/auth-helpers-nextjs";
import { AuthError } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export type SRRegister = {
  data:
    | { user: User | null; session: Session | null }
    | { user: null; session: null };
  error: AuthError | null | any;
};

const signInResponse: SRRegister = {
  error: null,
  data: { user: null, session: null },
};

const Login = () => {
  const formSubmission = async (formData: FormData) => {
    "use server";
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      throw new Error("Email and password is required");
    }

    const supabase = createServerActionClient<Database>({
      cookies,
    });

    const res = await supabase.auth.signUp({
      email: email as string,
      password: password as string,
      options: {
        emailRedirectTo: `${process.env.SITE_URL}/api/auth/callback`,
      },
    });

    if (res.data?.user?.identities) {
      signInResponse.error = {
        message: "The user already exists",
      };
      signInResponse.data = { user: null, session: null };
    }

    signInResponse.data = res.data;
    signInResponse.error = res.error;
  };
  return (
    <Form
      signInResponse={signInResponse}
      modeType="register"
      formSubmission={formSubmission}
    />
  );
};

export default Login;
