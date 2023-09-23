import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypePortfolioSkeleton } from "./TypePortfolio";

export interface TypeServicesFields {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    subtitle: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.RichText;
    price: EntryFieldTypes.Integer;
    items: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    portfolio: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePortfolioSkeleton>>;
    slug: EntryFieldTypes.Symbol;
}

export type TypeServicesSkeleton = EntrySkeletonType<TypeServicesFields, "services">;
export type TypeServices<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeServicesSkeleton, Modifiers, Locales>;
