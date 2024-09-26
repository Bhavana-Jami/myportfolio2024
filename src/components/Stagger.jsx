// ScrollAnimationComponent.jsx
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';
import '../styles/Stagger.css';

gsap.registerPlugin(ScrollTrigger);

const Stagger = () => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 7, // Reduce duration for faster scrolling
      easing: (t) => t, // Linear easing for a more immediate feel
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Select all elements with the class 'reveal-type'
    const splitTypes = document.querySelectorAll('.reveal-type');

    splitTypes.forEach((char) => {
      const bg = char.dataset.bgColor;
      const fg = char.dataset.fgColor;

      const text = new SplitType(char, { types: 'chars' });

      gsap.fromTo(
        text.chars,
        {
          color: bg,
        },
        {
          color: fg,
          duration: 5,
          stagger: 0.02,
          scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false,
            toggleActions: 'play play reverse reverse',
          },
        }
      );
    });

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      lenis.destroy(); // Destroy Lenis instance when component unmounts
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <div>
      <section>
        <h1>Scroll down for awesomeness.</h1>
      </section>

      <section>
        <p className="reveal-type" data-bg-color="#cccccc" data-fg-color="teal">
          Systematically ushering in a new generation of amazing designers from across the globe.
        </p>
      </section>

      <section>
        <p className="reveal-type" data-bg-color="#b6b600" data-fg-color="black">
          Modern UI designers will expand their skillsets to include frontend.
        </p>
      </section>

      <section>
        <p className="reveal-type" data-bg-color="#353535" data-fg-color="red">
          The web isn't static anymore, interactivity and motion now dominate.
        </p>
      </section>

      <section></section>
    </div>
  );
};

export default Stagger;
