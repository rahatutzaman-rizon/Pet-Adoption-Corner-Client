
import { Banner } from './Banner'

import FavoriteBook from './FavoriteBook'


import PromoBanner from './PromoBanner'


import { useLoaderData } from 'react-router-dom'
import CategoryCard from './CategoryCard'

export const Home = () => {
  const categories = useLoaderData();
  const uniqueCategories = Array.from(new Set(categories.map(category => category.category)));
  return (
    <div>
      <Banner/>
 <h2 className="text-4xl my-6 font-bold text-center">Books Category</h2>
            <div   className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-16 gap-8 my-4 py-10 ml-24 text-center '>
            {
              uniqueCategories.map((category, index)=> 
          <CategoryCard key={index} category={category} />
        )
        }

   
</div>

      
      
      <FavoriteBook/>
      <PromoBanner/>
    
     
    </div>
  )
}
