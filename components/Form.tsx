import ComponentWrapper from "@/components/ComponentWrapper";
import Logo from "@/components/Logo";
import Link from "next/link";
import React from "react";
import AuthButton from "./AuthButton";
import Alert from "./Alert";
import { SRRegister } from "@/app/(unAuthenticatedApp)/register/page";
import { SRLogin } from "@/app/(unAuthenticatedApp)/login/page";

interface IInput {
  label: string;
  type: string;
  placeholder: string;
  id: string;
}

const Input = ({ label, type, placeholder, id }: IInput) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

interface IForm {
  formSubmission: (formData: FormData) => Promise<void>;
  modeType: "register" | "signin";
  signInResponse: SRLogin | SRRegister;
}

const registerContent = {
  linkUrl: "/login",
  label: "Already have an account?",
  linkText: "Login",
  header: "Create a new account",
  buttonText: "Register",
  successMessage:
    "Account Creation Successful! 🌟 Please check your email for verification.",
};

const signInContent = {
  linkUrl: "/register",
  label: "Don't have an account?",
  linkText: "register",
  header: "Sign in to your account",
  buttonText: "Sign In",
  successMessage: `
You're in! 🎉 Sign in successful!`,
};

const Form = ({ formSubmission, modeType, signInResponse }: IForm) => {
  const content = modeType === "register" ? registerContent : signInContent;

  return (
    <ComponentWrapper className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:min-h-[80vh] lg:py-0">
      <div className="pb-4">
        <Logo />
      </div>
      <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          {signInResponse.error?.message && (
            <Alert intent="danger">{signInResponse.error?.message}</Alert>
          )}

          {signInResponse.data?.user && (
            <Alert intent="success">{content.successMessage}</Alert>
          )}
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
            {content.header}
          </h1>
          <form className="space-y-4 md:space-y-6" action={formSubmission}>
            <Input
              id="email"
              placeholder="hello@wordpresssecurities.com"
              type="email"
              label="Email"
            />

            <Input
              id="password"
              placeholder="*********"
              type="password"
              label="Password"
            />

            <div className="flex items-center justify-between">
              <AuthButton>{content.buttonText}</AuthButton>
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-primary-600 hover:underline "
              >
                Forgot password?
              </Link>
            </div>

            <p className="text-sm font-light text-gray-500 ">
              {content.label}{" "}
              <Link
                href={content.linkUrl}
                className="font-medium text-primary-600 hover:underline "
              >
                {content.linkText}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Form;
