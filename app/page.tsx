
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import './globals.css'

export default function Page() {
  return (
     <div className='flex min-h-screen flex-col'>
        <nav className='flex flex-row justify-between min-w-screen  border-b-2 border-slate-500 p-6'>
            <div className='flex flex-row justify-between'>
               <a href="/">
                 <div >
                    <img src="null" alt="" />
                    <h1 className='text-blue-500 text-3xl text-opacity-85 font-bi'>
                      100xDevs
                    </h1>
                 </div>  
               </a>
            </div>
            <div>
                <ul className = 'flex flex-row gap-4'>
                     <li className=''>
                         <button>
                             themeIcon
                         </button>
                     </li>
                     <li>
                         <Button className='bg-sky-400 hover:bg-sky-700 hover:bg-slate-200 hover:text-sky-900 text-nowrap text-md font-medium'>
                              Login Now
                         </Button>
                     </li>
                     <li>
                     <Button className='bg-sky-400 hover:bg-sky-700 hover:bg-slate-200 hover:text-sky-900 text-nowrap text-md font-medium'>
                             Join Now
                         </Button>
                     </li>
                </ul>
            </div>
        </nav>

       <div className='items-center flex flex-col content-center p-16'>
               <h1  className='flex items-center flex-col text-6xl font-bold '>
               100xDevs, because
               </h1>
               <h1 className='flex items-center flex-col text-6xl font-bold '> 
               10x ain't enough!
               </h1>
               
               <p className='font-bold text-lg p-2'>A beginner-friendly platform for mastering programming skills.</p>
               <div className='space-x-2 px-'> 
                   <Button variant="destructive" className='bg-sky-600 text-slate-100 hover:text-sky-400 hover:bg-black text-md'>Explore Courses</Button>
                   <Button variant="destructive" className='bg-sky-600 text-slate-100 hover:text-sky-400 hover:bg-black text-md'>Explore Notes</Button>
               </div>
               <div className='flex overflow-hidden space-x-16 py-8'>
                  <div className='flex space-x-5 w-full h-full animate-loop-scroll'>
                  <img src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png" alt="web3 course" className='w-1/3 rounded-2xl'/>
                  <img src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png" alt="web3 course" className='  w-1/3 rounded-2xl'/>
                  <img src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png" alt="web3 course" className='  w-1/3 rounded-2xl'/>
                  <img src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png" alt="web3 course" className=' w-1/3 rounded-2xl'/>
                  <img src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png" alt="web3 course" className='  w-1/3 rounded-2xl'/>
                  <img src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png" alt="web3 course" className='w-1/3 rounded-2xl'/>
                  </div>
               </div>
       </div>
       <footer>
           
       </footer>
     </div>
  );
}
