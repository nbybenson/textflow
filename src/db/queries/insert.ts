"use server";
import { db } from "../index";
import { InsertPage, pagesTable } from "../schema";

export async function createPage(data: InsertPage) {
    await db.insert(pagesTable).values(data);
}