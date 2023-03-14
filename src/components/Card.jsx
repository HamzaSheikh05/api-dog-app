export const Card = ({ message, index }) => {
  return (
    <div className="flex flex-col p-2 md:max-w-sm lg:max-w-md items-center border-2 rounded-xl">
      <img
        src={message}
        alt="husky images"
        className="h-16 w-16 rounded-full object-fill bg-white"
      />
      <h2 className="text-xl font-burtons mt-2">Husky Dog {index}</h2>
      <p className="text-md font-serif mt-2">
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
