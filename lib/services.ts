type ServiceType = {
  slug: string;
  title: string;
  content: string;
  carouselImages: Array<
    Array<{
      id: number;
      title: string;
      caption: string;
      full_image_url: string;
      thumbnail_image_url: string;
      large_srcset: string;
      medium_srcset: string;
      url: string;
      target: string;
    }>
  >;
  price: number;
};

export const getServices = async () => {
  const res = await fetch("https://pabel.xyz/blog/wp-json/wp/v2/service");
  const data = await res.json();

  const services = data.map((s: any) => ({
    slug: s.slug,
    title: s.title.rendered,
    content: s.content.rendered,
    carouselImages: s.acf.photo_gallery.carousel_images,
    price: s.acf.price,
  }));

  return services as ServiceType[];
};

export const getServicesSubMenus = async () => {
  const services = await getServices();
  const menus = services?.map((service) => ({
    title: service?.title,
    href: service.slug,
  }));

  return menus;
};

export const getServicesBySlug = async (slug: string) => {
  const res = await fetch(
    `https://pabel.xyz/blog/wp-json/wp/v2/service?slug=${slug}`
  );
  const data = await res.json();

  const service = data[0];

  return {
    slug: service?.slug,
    title: service?.title?.rendered,
    content: service?.content?.rendered,
    carouselImages: service?.acf?.photo_gallery?.carousel_images,
    price: service?.acf?.price,
  };
};
