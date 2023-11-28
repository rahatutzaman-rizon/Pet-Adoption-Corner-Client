
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards, HiOutlineCloudUpload } from 'react-icons/hi';
import img from '../../src/assets/awardbooks.png'

import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import Navbar from '../pages/shared/Navbar';

const SideBar = () => {
  const {user} = useContext(AuthContext)

  return (
    <div className=''>
    <Navbar className=""></Navbar>
      <Sidebar aria-label="Sidebar with content separator example" className='hidden md:block mt-20 '>
        <Sidebar.Logo
          href="/"
          img={img}
          className='w-10 h-10 rounded-full'
          imgAlt="Flowbite logo"
        >
          <p>
            {user?.displayName || "Demo User" }
          </p>
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              href="/admin/dashboard"
              icon={HiChartPie}>
              <p>
                Dashboard
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/dashboard/mydonation"
              icon={HiOutlineCloudUpload}
            >
              <p>
                My Donation
              </p>
            </Sidebar.Item>

            <Sidebar.Item
              href="/admin/dashboard/donation-campaign"
              icon={HiOutlineCloudUpload}
            >
              <p>
                My Donations Campign
              </p>
            </Sidebar.Item>

            <Sidebar.Item
              href="/admin/dashboard/create-donation-campaign"
              icon={HiInbox}
            >
              <p>
              Create Donate Camp
              </p>
            </Sidebar.Item>


            <Sidebar.Item
              href="/admin/dashboard/my-pet"
              icon={HiInbox}
            >
              <p>
                My Pet
              </p>
            </Sidebar.Item>
            
            <Sidebar.Item
              href="/admin/dashboard/add-pet"
              icon={HiInbox}
            >
              <p>
               Add pet
              </p>
            </Sidebar.Item>


            <Sidebar.Item
              href="/admin/dashboard/add-pet"
              icon={HiInbox}
            >
              <p>
               Adoption Request
              </p>
            </Sidebar.Item>
            
            
            <Sidebar.Item
              href="/admin/dashboard/add-pet"
              icon={HiInbox}
            >
              <p>
            Edit Donation
              </p>
            </Sidebar.Item>
          

            <Sidebar.Item
              href="/admin/dashboard/add-pet"
              icon={HiInbox}
            >
              <p>
             Users
              </p>
            </Sidebar.Item>
          
            <Sidebar.Item
              href="/admin/dashboard/add-pet"
              icon={HiInbox}
            >
              <p>
             All Donations
              </p>
            </Sidebar.Item>

            <Sidebar.Item
              href="/admin/dashboard/add-pet"
              icon={HiInbox}
            >
              <p>
              All Pets
              </p>
            </Sidebar.Item>
      
           
            <Sidebar.Item
              href="/logout"
              icon={HiTable}
            >
              <p>
                Log out
              </p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
           
           
           
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
     
    </div>
  )
}

export default SideBar