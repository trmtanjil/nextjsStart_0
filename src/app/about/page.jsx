'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function AboutPage() {
    const router = useRouter()
    const islogedIn =true;
    const handleNavigation =()=>{
        if(islogedIn){
            router.push('/about/addres')
        }else{
            router.push('/')
        }
    }
  return (
    <div>
        <p className='text-shadow-blue-800 text-2xl font-bold'>
            AboutPage
        </p>
        <p>

        <Link href='/about/addres'>
        addresPage
        </Link>
        </p>
        <button className='btn bg-amber-500 p-4 rounded-2xl' type='button' onClick={handleNavigation}>
        addres page 
        </button>
    </div>
  )
}

export default AboutPage