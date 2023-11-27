import {   useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../../shared/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const Moredetail2 = () => {
    const {user}=useContext(AuthContext);

    const navigate=useNavigate();
  
    const [showModal, setShowModal] = useState(false);
  
    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
  
    const item=useLoaderData();
      console.log(item);
     
     
     const {name,picture}=item;
  
     const handleUpdateProduct = event => {
      event.preventDefault();
  
      const form = event.target;
  
      const name = form.name.value;
      const petname = form.petname.value;
      const phone = form.phone.value;
      const email = form.email.value;
      const address = form.address.value;
      
    const updateproductitem = { name,email,phone,address,petname }
    
  
      console.log(updateproductitem);
  
      //send data to the server
      fetch("http://localhost:5000/adopt", {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(updateproductitem)
      })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if(data.insertedId){
                  Swal.fire({
                      title: 'Success!',
                      text: 'Pet adopt Successfully',
                      icon: 'success',
                      confirmButtonText: 'Cool'
                    })
  
                    navigate('/')
              }
          })
  }
  
    return (
        <div>
    <Navbar  className=""></Navbar>
     <div>
     <div className="max-w-3xl mx-auto bg-gradient-to-r from-teal-400 to-blue-300 rounded-md overflow-hidden shadow-lg mt-24  ">
     
      <div className="px-6 py-4">
      <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-6 rounded-md shadow-md">
      <img src={picture} alt={name} className="w-full h-54 object-cover mb-4 rounded-md" />
      <h2 className="text-lg font-semibold mb-2 text-white">{name}</h2>
      <p className="text-gray-200 mb-2"> Bkash Number: 016776263</p>
      <p className="text-gray-200 mb-2">Donation details: Donations play a crucial role in addressing various societal and global challenges, providing support to individuals, communities, and organizations in need. The importance of donations extends far beyond the act of giving money or resources; it represents a powerful force for positive change</p>
      
    </div>
        
        <div className="border-t border-b border-gray-300 my-2"></div>
        <button
          className="mt-4 mb-6 ml-54 bg-pink-500 text-white rounded-md p-2 hover:bg-blue-600"
          onClick={openModal}
        >
         Donated
        </button>
      </div>
    </div>
   
        
     </div> 

    
    {showModal  && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center mt-12 overflow-y-auto">
  <div className="bg-white p-8 w-96 rounded-md mt-18">
   
    <form onSubmit={handleUpdateProduct}>
      <div className=" mt-16">
        <label className="label">
          <span className="label-text">User Name:</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            defaultValue={user.displayName}
            className="input input-bordered w-full"
          />
        </label>
      </div>

      <div className="">
        <label className="label">
          <span className="label-text">Pet Name:</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="petname"
            placeholder="pet name"
            
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <div className="">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <label className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            defaultValue={user.email}
            className="input input-bordered w-full"
          />
        </label>
      </div>

      <div className="">
        <label className="label">
          <span className="label-text">Address</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="input input-bordered w-full"
          />
        </label>
      </div>

      <div className="mb-2">
        <label className="label">
          <span className="label-text">Phone Number</span>
        </label>
        <label className="input-group">
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            className="input input-bordered w-full"
          />
        </label>
      </div>

      <div className="">
        
          <input
            type="submit"
            value="Submit "
            className="btn btn-block bg-teal-500 text-white rounded-md p-2 hover:bg-blue-600"
          />
       
      </div>
    </form>

    <button
      className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 mb-2"
      onClick={closeModal}
    >
      Close
    </button>
    
  </div>
</div>

      )}
    </div>
       
       
    );
};

export default Moredetail2;