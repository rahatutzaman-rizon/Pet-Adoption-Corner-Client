import { useLoaderData } from "react-router-dom";

const MyDonationCampaign = () => {
     const campaign=useLoaderData();
     console.log(campaign)
    return (
        <div>
             <div>
            <div className="container mx-auto mt-24">
      <table className="min-w-full bg-cyan-300  border border-gray-300">
        <thead>
          <tr>
            
            <th className="py-2 px-4 border-b">Pet Name</th>
            <th className="py-2 px-4 border-b">Donated totalPages Amount</th>
            <th className="py-2 px-4 border-b">Maximum donation amount</th>
            <th className="py-2 px-4 border-b"> Last Date</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaign.map((campaign,idx) => (
            <tr key={idx}>
              
              <td className="py-2 px-4 border-b">{campaign.name}</td>
              <td className="py-2 px-4 border-b">${campaign.total}</td>
              <td className="py-2 px-4 border-b">{campaign.max}</td>
              <td className="py-2 px-4 border-b">{campaign.date}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleRefund(donation.id)}
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

export default MyDonationCampaign;