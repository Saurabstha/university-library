import { auth, signOut } from "@/auth";
import BookList from "@/components/BookList";
import { Button } from "@/components/ui/button";
import { db } from "@/database/drizzle";
import { books, borrowRecords } from "@/database/schema";
import { eq } from "drizzle-orm";
import React from "react";

const page = async () => {
  const session = await auth();
  const userId = session?.user?.id as string;
  if (!userId) {
    throw new Error("User not authenticated");
  }

  const borrowedBooks = await db
    .select({
      book: books,
      borrowInfo: borrowRecords,
    })
    .from(borrowRecords)
    .innerJoin(books, eq(borrowRecords.bookId, books.id))
    .where(eq(borrowRecords.userId, userId));

  return (
    <>
      {/* <form
        action={async () => {
          "use server";

          await signOut();
        }}
        className="mb-10"
      >
        <Button>Logout</Button>
      </form> */}
      <BookList
        title="Borrowed Books"
        books={borrowedBooks?.map(({ book }) => book)}
      />
    </>
  );
};

export default page;
