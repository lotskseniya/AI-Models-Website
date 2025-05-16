"use client"
import React from 'react';
import Link from 'next/link'

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