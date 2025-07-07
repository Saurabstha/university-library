import Image from "next/image";
import React from "react";

const BookList = () => {
  return (
    <div className="flex flex-col my-20">
      <div className="text-light-100 font-semibold">Popular Books</div>
      <div className="flex flex-row my-10 gap-10 justify-between">
        <div className="flex flex-col gap-2">
          <Image
            src="/images/auth-illustration.png"
            alt="Book"
            width={150}
            height={100}
          />
          <div className="text-light-100">Book Title</div>
          <div className="text-light-100 italic">Genre</div>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            src="/images/auth-illustration.png"
            alt="Book"
            width={150}
            height={100}
          />
          <div className="text-light-100">Book Title</div>
          <div className="text-light-100 italic">Genre</div>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            src="/images/auth-illustration.png"
            alt="Book"
            width={150}
            height={100}
          />
          <div className="text-light-100">Book Title</div>
          <div className="text-light-100 italic">Genre</div>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            src="/images/auth-illustration.png"
            alt="Book"
            width={150}
            height={100}
          />
          <div className="text-light-100">Book Title</div>
          <div className="text-light-100 italic">Genre</div>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            src="/images/auth-illustration.png"
            alt="Book"
            width={150}
            height={100}
          />
          <div className="text-light-100">Book Title</div>
          <div className="text-light-100 italic">Genre</div>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            src="/images/auth-illustration.png"
            alt="Book"
            width={150}
            height={100}
          />
          <div className="text-light-100">Book Title</div>
          <div className="text-light-100 italic">Genre</div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
