"use server";
import { eq } from "drizzle-orm";
import { db } from "../index";
import { InsertPage, pagesTable, SelectPage } from "../schema";

export async function createPage(data: InsertPage) {
    await db.insert(pagesTable).values(data);
}