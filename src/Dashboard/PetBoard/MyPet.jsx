import { useLoaderData } from "react-router-dom";

const MyPet = () => {
  const mypet=useLoaderData();
  console.log(mypet)
    return (
        <div>
          <h2>my pet</h2>  
        </div>
    );
};

export default MyPet;