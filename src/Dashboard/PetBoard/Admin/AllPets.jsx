import { useLoaderData } from "react-router-dom";

const AllPets = () => {
const  allpets=useLoaderData();


    return (
        <div>
        <div>
       <div className="container mx-auto mt-24">
 <table className="min-w-full bg-cyan-300  border border-gray-300">
   <thead>
     <tr>
       
       <th className="py-2 px-4 border-b">Pet Name</th>
       <th className="py-2 px-4 border-b">Category</th>
       <th className="py-2 px-4 border-b">Age</th>
       <th className="py-2 px-4 border-b"> Desc </th>
       <th className="py-2 px-4 border-b">Location</th>
     </tr>
   </thead>
   <tbody>
     {allpets.map((campaign,idx) => (
       <tr key={idx}>
         
         <td className="py-2 px-4 border-b">{campaign.name}</td>
         <td className="py-2 px-4 border-b">{campaign.category}</td>
         <td className="py-2 px-4 border-b">{campaign.age}</td>
         <td className="py-2 px-4 border-b">{campaign.short_description}</td>
         <td className="py-2 px-4 border-b">{campaign.location}</td>
        
         <td className="py-2 px-4 border-b">
           <button
             //onClick={() => handleRefund(donation.id)}
             className="bg-red-500 text-white py-1 px-2 rounded"
           >
             Ask for Refund 1
           </button>
         </td>
       </tr>
     ))}
   </tbody>
 </table>
</div>
   </div>
   </div>
    );
};

export default AllPets;