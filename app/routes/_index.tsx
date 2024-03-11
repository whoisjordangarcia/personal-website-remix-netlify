import React from "react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Jordan Garcia" }];
};

export default function Index() {
  return (
    <>
      <h1 className="text-3xl font-bold">Jordan Garcia</h1>
      <h2 className="text-md font-bold">Engineering Lead</h2>
    </>
  );
}
