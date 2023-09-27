import Lab from "./components/Lab";
import Galllery from "./components/Gallery";
import { useState } from "react";

const images = require.context("./Gallery-Images", true);
const imageList = images.keys().map((image) => images(image));

// console.log(page);

function App() {
  const [page, setPage] = useState(0);
  let pageToGo = page * 4;
  const ImagesToShow = imageList.slice(pageToGo, pageToGo + 4);
  const pageSwitchHandler = (pageDirection) => {
    if ((page === 0 && pageDirection < 0) || imageList.length / 4 - 2 < page) {
      setPage(0);
    } else {
      setPage((prev) => prev + pageDirection);
    }
  };

  return (
    <div>
      <Lab />
      <Galllery
        images={ImagesToShow}
        CurrentPage={page}
        onPageSwitch={pageSwitchHandler}
      />
    </div>
  );
}

export default App;
