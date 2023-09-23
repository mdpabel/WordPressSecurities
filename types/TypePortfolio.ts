import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePortfolioFields {
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
}

export type TypePortfolioSkeleton = EntrySkeletonType<TypePortfolioFields, "portfolio">;
export type TypePortfolio<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePortfolioSkeleton, Modifiers, Locales>;
