"use client"
import React from 'react';
import Link from 'next/link'
import "../globals.css";

const CallToActionButton = ({className, link, text, styles}) => {
  return (
  <button className={`${className} callToActionButton`} style={styles}>
    <Link href={link} className='link'>
        {text}
    </Link>
  </button>
  )
}

export default CallToActionButton