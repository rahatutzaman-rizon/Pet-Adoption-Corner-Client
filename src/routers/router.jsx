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
//import EditBooks from "../Dashboard/EditBooks";
import Signup from "../pages/Signup";
import Logout from "../pages/Logout";
import ErrorPage from "../pages/shared/ErrorPage";

import Specific from "../pages/Home/Specific/Specific";
import Moredetails from "../pages/Home/Specific/Moredetails";
import BorrowBook from "../pages/Home/Specific/BorrowBook";

import PetListing from "../Pet/PetListing";
import AddPet from "../Dashboard/AddPet";
import MyPet from "../Dashboard/PetBoard/MyPet";
import AdoptionRequest from "../Dashboard/AdoptionRequest";

import CreateDonationsCampign from "../Dashboard/CreateDonationsCampign";
import MyDonation from "../Dashboard/PetBoard/MyDonation";
import AdmitPet from "../Pet/AdmitPet";
import DonationCampign from "../Pet/DonationCampign";
import Moredetail2 from "../pages/Home/Specific/Moredetail2";

import UpdatePage from "../Dashboard/PetBoard/UpdatePage";
import MyDonationCampaign from "../Dashboard/PetBoard/MyDonationCampaign";


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
      {
        path:"/adopt",
        element:<AdmitPet></AdmitPet>,
        loader:()=>fetch('http://localhost:5000/adopt'),
      },

      {
        path:"/donation-campign",
        element:<DonationCampign></DonationCampign>,
        loader:()=>fetch('http://localhost:5000/pet-listing'),
      },
     

    
    ]
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/admin/dashboard", element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>},
      { path: "/admin/dashboard/mydonation", element: <MyDonation></MyDonation> ,
      loader:()=> fetch('http://localhost:5000/donation-detail'),
    },
      { path: "/admin/dashboard/manage", element: <ManageBooks /> },
      
      { path: "/admin/dashboard/add-pet", element: <AddPet></AddPet> },

      { path: "/admin/dashboard/my-pet", element: <MyPet></MyPet>,
      loader:()=> fetch('http://localhost:5000/add-pet'), },
      { path: "/admin/dashboard/adoption", element: <AdoptionRequest></AdoptionRequest>  },
      { path: "/admin/dashboard/donation-campaign", element: <MyDonationCampaign></MyDonationCampaign>,
      loader:()=> fetch('http://localhost:5000/donation-campaign'),
    },
      { path: "/admin/dashboard/create-donation-campaign", element:<CreateDonationsCampign></CreateDonationsCampign> },
     
       

      
    { path: "/admin/dashboard/add-pet/:id", element: <UpdatePage></UpdatePage>,
    loader: ({ params }) => fetch(`http://localhost:5000/update-pet/${params.id}`)
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
    element:<Moredetails></Moredetails>,
    loader:({params})=> fetch(`http://localhost:5000/moredetail/${params.id}`)  
  },
  {
    path: "/moredetail2/:id",
    element:<Moredetail2></Moredetail2>,
    loader:({params})=> fetch(`http://localhost:5000/moredetail2/${params.id}`)  
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