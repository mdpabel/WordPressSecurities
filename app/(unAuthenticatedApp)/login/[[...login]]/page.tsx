import ComponentWrapper from "@/components/ComponentWrapper";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <ComponentWrapper className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:min-h-[80vh] lg:py-0">
      <SignIn />
    </ComponentWrapper>
  );
}
