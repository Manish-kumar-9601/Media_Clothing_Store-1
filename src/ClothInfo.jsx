import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ClothInfo() {
  const URL = "https://jsonplaceholder.typicode.com/photos";
  const [data, setData] = useState([]);
  useEffect(() => {
    function fetchData() {
      fetch(URL)
        .then((res) => res.json())
        .then((paramData) => {
          const finalArr = paramData.slice(0, 10);
          setData(finalArr);
        });
    }
    fetchData();
  }, []);

  const pageId=useParams();
  return (
    <div>
      {data.map((x) => {
        if(x==pageId){
        }
     })}
    </div>
  );
}
export default ClothInfo;
