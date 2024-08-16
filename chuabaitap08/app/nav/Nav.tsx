"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import React from 'react'

export default function page() {
  const pathName=usePathname();
  console.log(22222,pathName);
  
  return (
    <div>
          <Link href={"/about"}>about </Link>
          <Link href={"/news"}>new </Link>
    </div>
  )
}
