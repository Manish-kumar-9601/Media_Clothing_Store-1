import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Bestseller(props) {
  const URL = "https://jsonplaceholder.typicode.com/photos";

  const [data, setData] = useState([]);

  useEffect(() => {
    async function dataFething() {
      const response = fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          const finData = data.splice(0, 10);
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
            <Link to={`/clothinfo/${x.id}`}>
              <img src={x.url} alt="" />
            </Link>
          );
        })}
      </div>
    </>
  );
}
export default Bestseller;
