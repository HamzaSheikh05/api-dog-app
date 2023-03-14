import TestLogo from "../images/logo192.png";
export const Card = ({ message }) => {
  return (
    <div className="flex flex-col p-2 md:max-w-sm lg:max-w-md items-center border-2 rounded-xl">
      <img
        src={message}
        alt=""
        className="h-16 w-16 rounded-full object-fill bg-white"
      />
      <h2 className="text-lg font-burtons">Insert Title</h2>
      <p className="text-md font-serif">
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
