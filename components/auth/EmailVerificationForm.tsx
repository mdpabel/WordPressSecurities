import React, { Dispatch, SetStateAction, SyntheticEvent } from "react";
import ComponentWrapper from "./common/ComponentWrapper";
import Logo from "./layouts/Logo";
import Button from "./ui/Button";
import Spinner from "./common/Spinner";
import Alert from "./common/Alert";
import { Input } from "./ui/Input";

interface IEmailVerificationForm {
  onPressVerify: (e: SyntheticEvent) => Promise<void>;
  code: string;
  setCode: Dispatch<SetStateAction<string>>;
  loading: boolean;
  error: string;
}

const EmailVerificationForm = ({
  onPressVerify,
  code,
  setCode,
  loading,
  error,
}: IEmailVerificationForm) => {
  return (
    <ComponentWrapper className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:min-h-[80vh] lg:py-0">
      <div className="pb-4">
        <Logo />
      </div>
      <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          {error && <Alert intent="danger">{error}</Alert>}
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
            Verify your email
          </h1>
          <form className="space-y-4" onSubmit={onPressVerify}>
            <Input
              id="code"
              type="text"
              label="Verification Code"
              placeholder="Code..."
              onChange={(e) => setCode(e.target.value)}
            />
            <Button type="submit">{loading ? <Spinner /> : "Login"}</Button>
          </form>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default EmailVerificationForm;
