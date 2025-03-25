"use server";

import { db } from "..";
import { pagesTable, SelectPage } from "../schema";
import { eq } from "drizzle-orm";

export async function getPageById(id: SelectPage["id"]) : Promise<SelectPage | null> {
    try {
        const data = await db
            .select()
            .from(pagesTable)
            .where(eq(pagesTable.id, id))
            .limit(1);

        if (!data) {
            throw new Error(`Page with id ${id} not found`);
        }
        return data[0];
    }
    catch(error) {
        console.log(error);
        return null;
    }
}