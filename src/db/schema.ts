
import { pgTable, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";
// Bảng Users: Liên kết với Clerk Authentication qua clerkId Lưu thông tin cơ bản: name, imageURL Có timestamp cho created/updated
export const users = pgTable("users", {
    // // Cột ID - Primary Key
    id: uuid("id").primaryKey().defaultRandom(),
    //  // Cột Clerk ID - Liên kết với Clerk Authentication
    clerkId: text("clerkid").unique().notNull(),
     // Cột tên người dùng
    name: text("name").notNull(),
    // TODO add banner fiels
    // Cột URL ảnh đại diện
    imageURL: text("image_url").notNull(),
      // Cột thời gian tạo
    createAt: timestamp("create_at").defaultNow().notNull(),
    // Cột thời gian cập nhật
    updateAt: timestamp("updated_at").defaultNow().notNull(),
}, (t) => [
    // Tạo unique index cho clerkId để tăng tốc độ query
    uniqueIndex("clerk_id_idx").on(t.clerkId)
]);

export const categories = pgTable("categories", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull().unique(),
    description: text("description"),
    createAt: timestamp("create_at").defaultNow().notNull(),
    updateAt: timestamp("updated_at").defaultNow().notNull(),
}, (t) => [uniqueIndex("name_idx").on(t.name)])