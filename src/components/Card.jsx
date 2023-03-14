export const Card = ({ message, index }) => {
  return (
    <div className="flex flex-col sm:max-w-xs md:max-w-sm lg:max-w-md items-center border-2 rounded-xl cursor-pointer group-hover:scale-[0.85] hover:!scale-100 duration-500">
      <img
        src={message}
        alt="husky images"
        className="lg:h-80 md:h-64 sm:h-48 xs:h-32 rounded-t-lg w-full object-fill bg-white"
      />
      <h2 className="text-xl text-white font-burtons mt-2 dark:text-purple-200">
        Husky Dog {index}
      </h2>
      <p className="text-md px-2 text-justify font-serif mt-2 text-blue-50 dark:text-blue-100">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
        assumenda. Omnis adipisci quo consectetur dolore nihil, molestias
        dolorem mollitia voluptatibus nostrum recusandae autem fugiat quisquam
        deleniti, corrupti illo blanditiis illum in ab? Quaerat incidunt labore
        doloremque laudantium sunt quis necessitatibus dolore explicabo dolorum
        animi. Iusto molestias itaque totam eius omnis.
      </p>
    </div>
  );
};
