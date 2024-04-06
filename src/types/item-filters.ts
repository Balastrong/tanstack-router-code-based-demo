import * as v from "valibot";

const Category = v.union([
  v.literal("electronics"),
  v.literal("clothing"),
  v.literal("books"),
  v.literal("toys"),
]);

export const ItemFilters = v.object({
  query: v.optional(v.string()),
  hasDiscount: v.optional(v.boolean()),
  categories: v.optional(v.array(Category)),
});

export type ItemFilters = v.Input<typeof ItemFilters>;
