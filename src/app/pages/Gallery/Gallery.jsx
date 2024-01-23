'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Gallery({ images }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  const closeOnOverlayClick = (e) => {
    console.log('Overlay Clicked');
  console.log('Target ID:', e.currentTarget.id);
    if (e.currentTarget.id === 'default-modal') {
      closeModal();
    }
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const nextIndex = (selectedImageIndex + 1) % images.length;
    setSelectedImageIndex(nextIndex);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const prevIndex = (selectedImageIndex - 1 + images.length) % images.length;
    setSelectedImageIndex(prevIndex);
  };

  return (
    <div className="bg-black container px-5 py-10 mx-auto">
      <div className="columns-1 gap-0 1g:gap- sm:columns-2 lg:columns-3 xl:columns-4 [&>img: not (:first-child)]:mt-5 lg: [&>img:not (:first-child)]=mt-8">
        {images.map((src, index) => (
          <div key={index} className="p-2">
            <button
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
              type="button"
              onClick={() => openModal(index)}
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={800}
                height={600}
              />
            </button>
          </div>
        ))}
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className={`${
            isModalOpen ? 'fixed' : 'hidden'
          } overflow-y-hidden overflow-x-hidden top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full`}
          onClick={closeOnOverlayClick}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
        >
          <div className="relative p-16 w-full h-full flex justify-center items-center">
            {/* Modal content */}
            {/* ... (existing code) */}
            {/* Modal body */}
            {selectedImageIndex !== null && (
              <div className="imgModal flex items-center h-full">
                {/* Previous Button */}
                <button
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-4"
                  onClick={prevImage}
                >
                  <FiChevronLeft size={80} />
                </button>
                {/* Image */}
                <Image
                  className="w-full h-full object-cover"
                  src={images[selectedImageIndex]}
                  alt={`Image ${selectedImageIndex + 1}`}
                  width={800}
                  height={800}
                />
                {/* Next Button */}
                <button
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-4"
                  onClick={nextImage}
                >
                  <FiChevronRight size={80} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;