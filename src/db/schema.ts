import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const pagesTable = pgTable("pages", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    name: text("name"),
    content: text("content"),
    created_at: timestamp("created_at", {withTimezone: true}),
});

export type InsertPage = typeof pagesTable.$inferInsert;
export type SelectPage = typeof pagesTable.$inferSelect;