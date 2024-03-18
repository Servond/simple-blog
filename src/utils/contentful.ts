import { createClient } from "contentful";
import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeBlogPostFields {
  slug: EntryFieldTypes.Symbol;
  title: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.AssetLink;
  content: EntryFieldTypes.RichText;
  summary: EntryFieldTypes.Symbol;
}

export type TypeBlogPostSkeleton = EntrySkeletonType<
  TypeBlogPostFields,
  "blogPost"
>;
export type TypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>;

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: "CZMscQKzbvcyBE1-NosygIbjlk_vCMBc2jRhTkI21Gk" || "",
});

export default client;
