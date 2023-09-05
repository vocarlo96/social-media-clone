import { Background, BlankProfile } from '../assets'
import { Calendar, Back } from '../assets/icons'

export default function Profile() {
    return (
        <section className='mx-auto max-w-[50%] min-h-[12rem]'>
            <div className='w-full flex px-4 h-12 items-center'>
                <img src={Back} alt="" className="mr-8 h-8" />
                <div className="flex flex-col">
                    <h2 className="font-bold h-4">Fabiana smith</h2>
                    <span className="">1,555 post</span>
                </div>
            </div>
            <div className='mb-4'>
                <img src={Background} alt="" className="w-full max-h-[260px] object-cover" />
                <div className='relative w-full h-14 flex items-end px-4'>
                    <img src={BlankProfile} alt="" className="rounded-full w-40 absolute bottom-0" />
                    <button className="ml-auto mb-2 border-2 border-black px-4 py-1 rounded-3xl capitalize">edit profile</button>
                </div>
            </div>
            <div className='px-2 mb-6'>
                <hgroup className='mb-2'>
                    <h1 className="font-bold">Fabiana Smith</h1>
                    <h2 className="">@fabix</h2>
                </hgroup>
                <p className="mb-3">esto es una descripcion de la bio ... hola!</p>
                <div className='flex'>
                    <div className='flex mr-4'><img src={Calendar} alt="" className="mr-1" /><span>Born March 9, 1996</span></div>
                    <div className='flex'><img src={Calendar} alt="" className="mr-1" /><span>Joined 2006</span></div>
                </div>
                <div className='flex'>
                    <div className='flex mr-4'><p className='font-bold mr-1'>100</p><span className='capitalize'>following</span></div>
                    <div className='flex'><p className='font-bold mr-1'>100</p><span className='capitalize'>followers</span></div>
                </div>
            </div>
            <nav className='w-full'>
                <ul className="flex h-8">
                    <li className="flex-shrink basis-full text-center capitalize border-b-blue-600 border-b-4">post</li>
                    <li className="flex-shrink basis-full text-center capitalize">replies</li>
                    <li className="flex-shrink basis-full text-center capitalize">highlights</li>
                    <li className="flex-shrink basis-full text-center capitalize">media</li>
                    <li className="flex-shrink basis-full text-center capitalize">likes</li>
                </ul>
            </nav>
        </section>
    )
}