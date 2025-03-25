"use server";
import { eq } from "drizzle-orm";
import { db } from "..";
import { InsertPage, pagesTable, SelectPage } from "../schema";

export async function updatePageContent(id: SelectPage["id"], data: InsertPage) {
    await db.update(pagesTable)
        .set(data)
        .where(eq(pagesTable.id, id));
}