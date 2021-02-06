import React from "react";
import FirstNaveBar from "../component/FirstNavBar/index";
import ProfileNavBar from "../component/ProfileNavBar/index";
import ProductCard from "../component/MessageBox/messageBox";
export default function MainPage({ children }) {
  return (
    <>
      <FirstNaveBar />
      <ProfileNavBar />
      {/* problem with with message page require help */}
      {/* <ProductCard /> */}
    </>
  );
}
