import Link from "next/link";
import React from "react";

export default function BackBtn() {
  return (
    <>
      <Link className="backBtn" href={"/sommaire"}>
        Back
      </Link>
    </>
  );
}
