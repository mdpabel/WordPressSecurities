import { redirect } from "next/navigation";

export const dynamic = "force-static";
export const revalidate = 86400;

const page = () => {
  redirect("/solutions/malware-removal");
};

export default page;
