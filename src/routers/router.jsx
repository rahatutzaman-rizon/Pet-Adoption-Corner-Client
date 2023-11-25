import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import { DashboardLayout } from "../Dashboard/DashboardLayout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../pages/Login";
import SignleBook from "../pages/shared/SignleBook";

import Dashboard from "../Dashboard/Dashboard";
import ManageBooks from "../Dashboard/ManageBooks";
import EditBooks from "../Dashboard/EditBooks";
import Signup from "../pages/Signup";
import Logout from "../pages/Logout";
import ErrorPage from "../pages/shared/ErrorPage";

import Specific from "../pages/Home/Specific/Specific";
import Moredetails from "../pages/Home/Specific/Moredetails";
import BorrowBook from "../pages/Home/Specific/BorrowBook";
import MyDonations from "../Dashboard/MyDonations";
import PetListing from "../Pet/PetListing";
import AddPet from "../Dashboard/AddPet";
import MyPet from "../Dashboard/PetBoard/MyPet";
import AdoptionRequest from "../Dashboard/AdoptionRequest";
import MyDonationsCampign from "../Dashboard/MyDonationsCampign";
import CreateDonationsCampign from "../Dashboard/CreateDonationsCampign";
import MyDonation from "../Dashboard/PetBoard/MyDonation";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:()=>fetch('http://localhost:5000/pet-listing'),
      },
      {
        path: "/petlisting",
        element: <PetListing></PetListing>,
        loader:()=>fetch('http://localhost:5000/pet-listing'),

      }
      ,
      {
        path: "/all-book",
        element:<PrivateRoute><Shop /></PrivateRoute> ,
        loader:()=>fetch('https://library-management-server-phi.vercel.app/all-books'),
      },
      {
        path: "/book/:id",
        element: <SignleBook />,
        loader: ({ params }) => fetch(`https://library-management-server-phi.vercel.app/book/${params.id}`)
      },
     
      {
        path:"/borrow",
        element:<PrivateRoute><BorrowBook></BorrowBook></PrivateRoute>,
        loader:()=>fetch('https://library-management-server-phi.vercel.app/borrow'),
      },
    
    ]
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/admin/dashboard", element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>},
      { path: "/admin/dashboard/mydonation", element: <MyDonations></MyDonations> },
      { path: "/admin/dashboard/manage", element: <ManageBooks /> },
      
      { path: "/admin/dashboard/add-pet", element: <AddPet></AddPet> },

      { path: "/admin/dashboard/my-pet", element: <MyPet></MyPet> },
      { path: "/admin/dashboard/adoption", element: <AdoptionRequest></AdoptionRequest>  },
      { path: "/admin/dashboard/my-donation-campign", element: <MyDonationsCampign></MyDonationsCampign> },
      { path: "/admin/dashboard/create-donation", element:<CreateDonationsCampign></CreateDonationsCampign> },
      { path: "/admin/dashboard/my-donation", element: <MyDonation></MyDonation> },

      { path: "/admin/dashboard/edit-books/:id", element: <EditBooks />,
      loader: ({ params }) => fetch(`https://library-management-server-phi.vercel.app/book/${params.id}`)
    },
    
    ],
  },
  {
    path: "/specific/:id",
    element:<PrivateRoute><Specific></Specific></PrivateRoute>,
    loader:()=>fetch('https://library-management-server-phi.vercel.app/all-books'),
  },

  {
    path: "/moredetail/:id",
    element:<PrivateRoute><Moredetails></Moredetails></PrivateRoute>,
    loader:({params})=> fetch(`https://library-management-server-phi.vercel.app/moredetail/${params.id}`)  
  },

  {
    path: "login",
    element: <Login />
  },
  {
    path: "/create-user",
    element: <Signup/>
  },
  {
    path:"/logout",
    element: <Logout/>
  }
]);

export default router;