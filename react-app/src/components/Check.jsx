
import { useEffect } from "react";

const Check = () => {
  const fetchMyData = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2023-09-26&sortBy=publishedAt&apiKey=a0a61902b3834f688de377ea10d19d37"
    );

    const data = await response.json();
    console.log(data.articles[0].description);
  };

  useEffect(() => {
    fetchMyData();
  }, []);

  return <div> Hello </div>;
};

export default Check;