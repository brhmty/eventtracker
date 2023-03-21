import React, { ReactNode } from "react";
import Header from "./Header";

function LayoutWrapper(props: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
}

export default LayoutWrapper;
