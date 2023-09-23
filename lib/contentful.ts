import { TypeServicesSkeleton } from "@/types";
import { createClient } from "contentful";

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export const getServices = async () => {
  const services = await contentfulClient.getEntries<TypeServicesSkeleton>({
    content_type: "services",
  });

  return services.items.map((item) => item.fields);
};

export const getServicesBySlug = async (slug: string) => {
  const service = await contentfulClient.getEntries<TypeServicesSkeleton>({
    content_type: "services",
    "fields.slug": slug,
  });

  return service.items[0].fields;
};

export const getServicesSubMenus = async () => {
  const menus = await getServices().then((items) =>
    items.map((item) => ({
      title: item.name,
      href: "/" + item.slug,
    }))
  );

  return menus;
};
