import HiringPromotion from "./HiringPromotion";
import SocialLinks from "./SocialLinks";

const BlogSidebar = ({}: {}) => {
  return (
    <div className="flex flex-col space-y-5">
      <HiringPromotion />
      <SocialLinks />
    </div>
  );
};

export default BlogSidebar;
