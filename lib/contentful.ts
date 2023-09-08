import { createClient } from "contentful";
import { Asset, AssetLink } from "contentful";

export const contentfulClient = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  space: process.env.CONTENTFUL_SPACE_ID!,
});

export const parseContentFulImage = (
  asset?: Asset<undefined, string> | { sys: AssetLink }
) => {
  if (!asset) return null;

  if (!("fields" in asset)) {
    return null;
  }

  return {
    src: "https:" + asset.fields.file?.url || "",
    alt: asset.fields.description || "",
    width: asset.fields.file?.details.image?.width || 0,
    height: asset.fields.file?.details.image?.height || 0,
  };
};
