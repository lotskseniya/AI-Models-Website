"use client"
import React from 'react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactLenis, useLenis } from "lenis/react";


const useVerticalScroll = () => {
    const lenis = useLenis();
    const heroRef = useRef(null);
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
        ScrollTrigger.create({
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
            markers: true,
        });
        }, heroRef);
    
        return () => ctx.revert();
    }, []);
    
    return { heroRef };
}
export default useVerticalScroll;
