
import BannerCard from '../shared/BannerCard'

export const Banner = () => {
    return (
        <div className=' bg-cyan-300  px-4 lg:px-24 flex items-center  '>
            <div className='flex flex-col md:flex-row justify-between items-center gap-12 py-40'>
              
                <div className='md:w-1/2 h-full mr-12 mb-24'>
                    <BannerCard />
                </div>

                
                <div className='md:w-1/2 space-y-8 bg-cyan-300'>
                    <h1 className='lg:text-6xl text-3xl font-bold text-black mb-5 lg:leading-tight leading-snug'>Pet adoption  <span className='text-pink-700'>providing homes and saving lives</span></h1>
                    <p>Moreover, many adopted pets come from challenging backgrounds, and providing them with a caring home allows them to overcome past traumas and build trusting relationships with their new families. In addition to the direct impact on the lives of individual animals, adoption also helps address the larger issue of pet overpopulation through spaying and neutering programs. </p>
                    
                </div>
            </div>
        </div>
    )
}
