import { useEffect, useState } from "react";
// import tempdata from "./assets/tempData.json";
import axios from "axios";
import { Link } from "react-router-dom";

function Bestseller() {
  // const URL = tempdata.;
  const URL2 = "https://jsonplaceholder.typicode.com/photos";

  const [data, setData] = useState([]);

  useEffect(() => {
    async function dataFething() {
      const response = fetch(URL2)
        .then((res) => res.json())
        .then((data) => {
          const finData = data.splice(0, 10);
          console.log(finData);
          setData(finData);
        });
    }

    dataFething();
  }, []);
  return (
    <>
      <h2>Our bestsellers</h2>
      <div className="bestseller">
        {data.map((x) => {
          return (
            <Link to="/ClothInfo/:id">
              <img src={x.url} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
export default Bestseller;
