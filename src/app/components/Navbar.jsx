"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function Navbar() {
  const pathname = usePathname();
  console.log(pathname, pathname.includes('deshboard'));

  if(!pathname.includes('deshboard')){
      return (
    <div>
      <nav>
        <ul>
          <div className="flex justify-around pt-2">
            <Link href='/'><li>home</li></Link>
            <Link href='/Service'><li>Service</li></Link>
            <Link href='/about'><li>About</li></Link>
          </div>
        </ul>
      </nav>
    </div>
  );
  }
  else <></>

}

export default Navbar;
