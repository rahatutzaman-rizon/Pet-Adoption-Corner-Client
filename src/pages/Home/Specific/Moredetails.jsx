import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../../shared/Navbar";

const Moredetails = () => {

  const item=useLoaderData();
    console.log(item);
   
   
   const {name,author,image,rating,category,desc}=item;

   const handleUpdateProduct = event => {
    event.preventDefault();

    const form = event.target;

    const bname = form.bname.value;
    const email = form.price.email;
    const date = form.brand.date;
    

    const updateproductitem = { name,bname,category,date,email }

    console.log(updateproductitem);

    // send data to the server
    fetch("https://library-management-server-phi.vercel.app/borrow", {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateproductitem)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'book borrowed  Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
}



  return (
    <div>
    <Navbar  className="mb-8"></Navbar>
     <div>
     <div className="max-w-sm mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-md overflow-hidden shadow-lg mt-24">
      <img className="w-full h-40 object-cover" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{name}</div>
        <p className="text-gray-200 text-base mb-2">by {author}</p>
        <div className="border-t border-b border-gray-300 my-2"></div>
        <div className="mb-2">
          <p className="text-gray-200 text-base">Rating: {rating}</p>
          <p className="text-gray-200 text-base">Category: {category}</p>
        </div>
        <div className="border-t border-b border-gray-300 my-2"></div>
        <p className="text-gray-200 text-base">{desc}</p>
      </div>
    </div>
     </div> 

     <div>
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Boorrow the book</h3>
    <p className="py-4"></p>
    <div className="modal-action">
      
        {/* if there is a button in form, it will close the modal */}
        <form onSubmit={handleUpdateProduct}>
            {/* form name and quantity row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Book Name Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="bname" placeholder="Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <label className="input-group">
                        <input type="email" name="email" placeholder="price" className="input input-bordered w-full" />
                    </label>
                </div>

                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">date</span>
                    </label>
                    <label className="input-group">
                        <input type="date" name="price"  placeholder="price" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>

           <Link to="/borrow"><input type="submit" value="submit to borrow" className="btn btn-block" />
        </Link> 
       
      </form>
       <button className="btn">Close</button>
    </div>
  </div>
</dialog>
     </div>
    </div>
    
  );
};

export default Moredetails;