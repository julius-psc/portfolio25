import React, { useState, useRef, useEffect } from "react";
import dragIcon from "../assets/icons/drag-icon.svg";
import dragOut from "../assets/icons/drag-outline.svg";
import dragArrow from "../assets/icons/drag-arrow.svg";

import arrowIcon from '../assets/icons/social-icons/arrow-icon.svg';
import gitIcon from '../assets/icons/social-icons/github-icon.svg';
import igIcon from '../assets/icons/social-icons/instagram-icon.svg';
import linkIcon from '../assets/icons/social-icons/linkedin-icon.svg';

const Contact: React.FC = () => {
  const [dragPosition, setDragPosition] = useState(0);
  const isDragging = useRef(false);
  const dragStartPos = useRef(0);
  const dragIconRef = useRef<HTMLImageElement>(null);
  const dragOutlineRef = useRef<HTMLImageElement>(null);
  const emailAddress = "peschardjulius03@gmail.com";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (
        !isDragging.current ||
        !dragOutlineRef.current ||
        !dragIconRef.current
      )
        return;

      const outlineRect = dragOutlineRef.current.getBoundingClientRect();
      const iconRect = dragIconRef.current.getBoundingClientRect();
      const maxX = outlineRect.width - iconRect.width;
      const deltaX = e.clientX - dragStartPos.current;
      const newPosition = Math.max(0, Math.min(maxX, dragPosition + deltaX));

      setDragPosition(newPosition);
      dragStartPos.current = e.clientX;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);

      if (dragOutlineRef.current && dragIconRef.current) {
        const outlineRect = dragOutlineRef.current.getBoundingClientRect();
        const iconRect = dragIconRef.current.getBoundingClientRect();
        const maxX = outlineRect.width - iconRect.width;

        if (dragPosition >= maxX * 0.95) {
          window.location.href = `mailto:${emailAddress}`;
          setDragPosition(0); // Reset position after sending email
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragPosition]);

  const handleMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    isDragging.current = true;
    dragStartPos.current = e.clientX;
  };

  return (
    <section className="mx-5 sm:mx-20 py-0 sm:py-5">
      <div className="flex font-semibold text-xl pt-5 sm:pl-0 sm:pt-20">
        <h2 className="text-general-paragraphnum pr-1">[III]</h2>
        <h2 className="text-general-subtext">Contact me</h2>
      </div>
      <div className="">
          <h2 className="text-white font-semibold text-2xl sm:text-4xl my-2">
            Tell me about your next project
          </h2>
          <div className="text-general-paragraphnum sm:flex  sm:justify-around">
            <div>
                <div className="sm:block">
                  <h3>Send me an email</h3>
                  <a href={`mailto:${emailAddress}`} className="visible sm:hidden">
                  <div className="opacity-60 flex">
                    <p className="mr-1">link</p>
                    <img src={arrowIcon} alt="Send Email" className="w-2 h-auto mr-2" />
                  </div>
                                </a>
                </div>
              <div className="py-2 hidden sm:block">
                <div className="relative">
                  <img ref={dragOutlineRef} src={dragOut} alt="Drag outline icon" />
                  <div
                    className="absolute top-3 left-3"
                    style={{ left: dragPosition }}
                  >
                    <img
                      ref={dragIconRef}
                      className="ml-3 w-11 h-auto cursor-grab"
                      src={dragIcon}
                      alt="Drag email icon"
                      onMouseDown={handleMouseDown}
                    />
                  </div>
                  <img className="mx-auto" src={dragArrow} alt="drag email arrow" />
                </div>
              </div>
            </div>
            <div className="sm:mx-10 mx-0">
              <h3 className="sm:mb-3">Socials</h3>
              <div className="flex items-center space-x-2">
                <a className='hover:opacity-40 transition-opacity duration-200' href="https://www.linkedin.com/in/julius-peschard-007822309/" target="_blank" rel="noopener noreferrer">
                    <img src={linkIcon} alt="LinkedIn icon" className='w-6 h-auto'/>
                </a>
                <a className='hover:opacity-40 transition-opacity duration-200' href="https://github.com/julius-psc" target="_blank" rel="noopener noreferrer">
                    <img src={gitIcon} alt="GitHub icon" className='w-6 h-auto'/>
                </a>
                <a className='hover:opacity-40 transition-opacity duration-200' href="https://www.instagram.com/julius.psc/" target="_blank" rel="noopener noreferrer">
                    <img src={igIcon} alt="Instagram icon" className='w-6 h-auto'/>
                </a>
            </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Contact;
