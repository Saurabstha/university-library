ALTER TABLE "book_borrow" DROP CONSTRAINT "book_borrow_book_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "book_borrow" DROP CONSTRAINT "book_borrow_user_id_books_id_fk";
--> statement-breakpoint
ALTER TABLE "book_borrow" ADD CONSTRAINT "book_borrow_book_id_books_id_fk" FOREIGN KEY ("book_id") REFERENCES "public"."books"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "book_borrow" ADD CONSTRAINT "book_borrow_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;