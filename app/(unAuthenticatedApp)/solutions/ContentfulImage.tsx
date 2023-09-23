import Image from "next/image";

type Props = {
  src: string;
  width: string;
  quality: string;
};

const contentfulLoader = ({ src, width, quality }: Props) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ContentfulImage = (props: any) => {
  return <Image loader={contentfulLoader} {...props} />;
};

export default ContentfulImage;
