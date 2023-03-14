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
    <section className="flex flex-col bg-slate-100 dark:bg-dark-bg">
      <h1 className="font-serif font-semibold text-4xl my-4 md:text-5xl lg:text-6xl">
        Siberian Husky Shelter
      </h1>

      <div className="flex justify-around flex-wrap gap-6 m-4">
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
