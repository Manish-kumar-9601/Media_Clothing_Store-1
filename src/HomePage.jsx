import { useEffect, useState } from "react";
import { Card } from "./components/card.jsx";

export const HomePage = () =>
{
  const [data, setData] = useState([]);
  const URL = 'https://dummyjson.com/products';

  useEffect(() =>
  {
    const fetchData = async () =>
    {
      try
      {
        const response = await fetch(URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const res = await response.json();
        setData(res.products);
      } catch (error)
      {
        console.log("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <div className="categoryHeading">
        Welcome to Media Clothing Store we have high quality goods that best fit your needs
      </div>
      {data.length === 0 ? (
        <p>Failed to load data</p>
      ) : (
        <div className="productCard"  >
          {
            data.map((el) => (
              <Card
                id={el.id}
                key={el.id}
                productImage={el.thumbnail}
                title={el.title}
                productUrl={el.url}
                price={el.price}
              />

            ))
          } </div>
      )}
    </>
  );
};
