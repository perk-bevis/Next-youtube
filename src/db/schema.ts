import {pgTable ,text, timestamp ,uniqueIndex,uuid} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    clerkId: text("clerkid").unique().notNull(),
    name: text("name").notNull(),
    // TODO add banner fiels
    imageURL: text("image_url").notNull(),
    createAt: timestamp("create_at").defaultNow().notNull(),
    updateAt: timestamp("updated_at").defaultNow().notNull(),
},(t) => [uniqueIndex("clerk_id_idx").on(t.clerkId)]);