import { useEffect, useState } from "react";
import { Card } from "../components/Card";

export const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dog.ceo/api/breed/husky/images");
      const json = await response.json();
      setData(json.message);
    }
    fetchData();
  }, [data]);
  return (
    <section className="flex flex-col bg-custom-bg dark:bg-dark-bg">
      <h1 className="font-serif text-blue-100 font-semibold text-4xl my-4 md:text-5xl lg:text-6xl dark:text-orange-200">
        Siberian Husky Shelter
      </h1>

      <div className="flex justify-around flex-wrap gap-6 m-4 group">
        {/**Card Container */}
        {data &&
          data.map((value, index) => (
            <Card key={index} message={value} index={index} />
          ))}
        {/**End of Card Container */}
      </div>
    </section>
  );
};
