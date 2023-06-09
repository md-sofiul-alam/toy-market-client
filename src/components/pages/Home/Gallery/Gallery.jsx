import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Gall from "./Gall";

const Gallery = () => {
  const [toys, setToys] = useState([]);
  const url = "http://localhost:5000/gallery";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center mt-8 mb-2 text-blue-600">
        Gallery
      </h2>
      <hr/>
      {" "}
      <Marquee>
        {toys.map((toy) => (
          <Gall key={toy._id} toy={toy}></Gall>
        ))}
      </Marquee>
    </div>
  );
};

export default Gallery;
