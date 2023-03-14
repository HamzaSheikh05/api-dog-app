import TestLogo from "../images/logo192.png";

export const Home = () => {
  return (
    <section className="flex flex-col">
      <h1 className="font-serif font-semibold text-4xl my-4 md:text-5xl lg:text-6xl">
        German Shepherd Shelter
      </h1>

      <div className="flex justify-around flex-wrap gap-10 m-4">
        {/**Card Container */}
        <div className="flex flex-col p-2 max-w-md items-center border-2 rounded-xl">
          <img
            src={TestLogo}
            alt=""
            className="h-16 w-16 rounded-full bg-white"
          />
          <h2 className="text-lg font-burtons">Insert Title</h2>
          <p className="text-md font-serif">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
            assumenda. Omnis adipisci quo consectetur dolore nihil, molestias
            dolorem mollitia voluptatibus nostrum recusandae autem fugiat
            quisquam deleniti, corrupti illo blanditiis illum in ab? Quaerat
            incidunt labore doloremque laudantium sunt quis necessitatibus
            dolore explicabo dolorum animi. Iusto molestias itaque totam eius
            omnis.
          </p>
        </div>
        {/**End of Card Container */}
      </div>
    </section>
  );
};
