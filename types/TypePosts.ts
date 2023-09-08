import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypePostsFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  content: EntryFieldTypes.RichText;
  coverImage: EntryFieldTypes.AssetLink;
  lastUpdated?: EntryFieldTypes.Date;
  previewDescription: EntryFieldTypes.Symbol;
}

export type TypePostsSkeleton = EntrySkeletonType<TypePostsFields, "posts">;
export type TypePosts<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypePostsSkeleton, Modifiers, Locales>;
