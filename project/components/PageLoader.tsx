"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function PageLoader() {
  const loaderRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to('.loader-content', {
      duration: 0.8,
      opacity: 0,
      y: -100,
      ease: 'power2.in',
    })
    .to('.loader', {
      duration: 0.8,
      scaleY: 0,
      transformOrigin: 'top',
      ease: 'power4.inOut',
    })
    .set('.loader', { display: 'none' });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={loaderRef} className="loader">
      <div className="loader-content">
        <span className="block">MAXENCE</span>
      </div>
    </div>
  );
}