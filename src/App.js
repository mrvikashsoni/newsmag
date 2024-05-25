import React, { useState } from "react";
import "./App.js";
import Navbar from "./component/navbar/Navbar.jsx";

import NewsBoard from "./component/newsBoard/NewsBoard.jsx";
import Footer from "./component/footer/Footer.jsx";

export default function App() {
  // set category

  const [category, setCategory] = useState("general");

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
      <Footer />
    </div>
  );
}
