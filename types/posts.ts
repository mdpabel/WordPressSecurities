export type PostDataType = {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: {
    _cloudinary_featured_overwrite: boolean;
    footnotes: string;
  };
  categories: number[];
  tags: number[];
  ppma_author: number[];
  acf: any[]; // You can specify the actual shape of "acf" if needed
  yoast_head: string;
  yoast_head_json: {
    title: string;
    robots: {
      index: string;
      follow: string;
      'max-snippet': string;
      'max-image-preview': string;
      ' max-video-preview': string;
    };
    canonical: string;
    og_locale: string;
    og_type: string;
    og_title: string;
    og_description: string;
    og_url: string;
    og_site_name: string;
    article_published_time: string;
    article_modified_time: string;
    og_image: {
      width: number;
      height: number;
      url: string;
      type: string;
    }[];
    author: string;
    twitter_card: string;
    twitter_misc: {
      'Written by': string;
    };
    schema: any; // You can specify the actual shape of "schema" if needed
  };
  authors: {
    term_id: number;
    user_id: number;
    is_guest: number;
    slug: string;
    display_name: string;
    avatar_url: string;
    user_url: string;
    last_name: string;
    first_name: string;
    description: string;
  }[];
  _links: {
    self: {
      href: string;
    }[];
    collection: {
      href: string;
    }[];
    about: {
      href: string;
    }[];
    author: {
      embeddable: boolean;
      href: string;
    }[];
    replies: {
      embeddable: boolean;
      href: string;
    }[];
    'version-history': {
      count: number;
      href: string;
    }[];
    ' predecessor-version': {
      id: number;
      href: string;
    }[];
    'wp:featuredmedia': {
      embeddable: boolean;
      href: string;
    }[];
    'wp:attachment': {
      href: string;
    }[];
    'wp:term': {
      taxonomy: string;
      embeddable: boolean;
      href: string;
    }[];
    curies: {
      name: string;
      href: string;
      templated: boolean;
    }[];
  };
};
