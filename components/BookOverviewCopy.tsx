import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const BookOverviewCopy = ({
  title,
  author,
  genre,
  rating,
  total_copies,
  available_copies,
  description,
  color,
  cover,
}: Book) => {
  return (
    <>
      <div className="flex flex-row gap-10 text-light-100 justify-between">
        <div className="flex flex-col gap-1 w-1/2 ">
          <div className="text-4xl">{title}</div>
          {/* <div>By c</div> */}
          <div className="flex flex-row gap-5">
            <div className="flex flex-row">
              By <div className="text-light-200 mx-2">Dan Brown</div>
            </div>
            <div className="flex flex-row">
              Category{" "}
              <div className="text-light-200 mx-2">Thriller / Suspense</div>
            </div>
            <div className="flex flex-row">
              <Image src="icons/star.svg" alt="Book" width={15} height={15} />
              <div className="text-light-200 mx-2">4.5/5</div>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-row">
              Total books: <div className="text-light-200 mx-2">100</div>
            </div>
            <div className="flex flex-row">
              Available books: <div className="text-light-200 mx-2">42</div>
            </div>
          </div>
          <br />
          <div>
            Very long descriptions Very long descriptions Very long descriptions
            Very long descriptions Very long descriptions Very long descriptions
            Very long descriptions Very long descriptions Very long descriptions
          </div>
          <br />

          <Button size="sm" className="w-48 text-dark-100">
            <Image src="icons/book.svg" alt="Book" width={15} height={15} />
            Borrow Book Request
          </Button>
        </div>
        <Image
          src="/images/auth-illustration.png"
          alt="Book"
          width={250}
          height={250}
        />
      </div>
    </>
  );
};

export default BookOverviewCopy;
