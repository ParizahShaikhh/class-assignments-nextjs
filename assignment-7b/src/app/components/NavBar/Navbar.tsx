import React from 'react';
import Link from 'next/link';
import ClientSidePage from '@/app/ClientSideDataFetching/page';
import ServerSidePage from '@/app/ServerSideDataFetching/page';

const Navbar = () => {
  return (
    <div>
      <header><nav><Link href='/'>Home</Link>
      <Link href='/ClientSideDataFetching'>Client Side Data Fetching</Link>
      <Link href='/ServerSideDataFetching'>Server Side Data Fetching</Link></nav></header>
    </div>
  )
}

export default Navbar
