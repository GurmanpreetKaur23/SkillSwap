import {
  mysqlTable,
  int,
  varchar,
  mysqlEnum,
  timestamp,
} from "drizzle-orm/mysql-core";
import { userTable } from "./user";


export const oauthAccountsTable = mysqlTable("oauth_accounts" , {
    id : int("id").autoincrement().primaryKey() ,
    userId: int("user_id")
        .notNull() 
        .references(() => userTable.id . {OnDelete: "cascade"}) ,
        provider: mysqlEnum("provider" , ["google"]).notNull() ,
        providerAccountId: varchar("provider_account_id" , {length : 255})
        .notNull()
        .unique() ,
        createdAt: timestamp("created_at").defaultNow().notNull() ,
}) ;