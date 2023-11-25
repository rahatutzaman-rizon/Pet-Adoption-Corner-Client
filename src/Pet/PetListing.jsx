import { useLoaderData } from "react-router-dom";
import PetListingCard from "./PetListingCard";


const PetListing = () => {
    const petlist=useLoaderData();
    console.log(petlist)

    return (
      <div>

<h2 className="text-4xl my-6 font-bold text-center">Books Category</h2>
            <div   className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-16 gap-8 my-4 py-10 ml-24 text-center '>
            {
              petlist.map((pet, index)=> 
          <PetListingCard key={index} pet={pet} />
        )
        }

      </div>
       </div>
    );
};

export default PetListing;