import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ReactImageGallery from "react-image-gallery";
import Image from "next/image";
import CrossImage from "../assets/images/cross.svg";

const ImageGallery = ({ images }) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="absolute bottom-3 left-3 px-5 py-3 rounded-[100px] bg-white text-sm font-medium"
      >
        +8 more
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto bg-[#000000CC]">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform rounded-2xl text-left align-middle shadow-xl transition-all ">
                  <button
                    onClick={closeModal}
                    className="absolute right-2 -top-16 xl:right-40 xl:-top-16 2xl:right-80"
                  >
                    <Image src={CrossImage} alt="Image" />
                  </button>
                  <ReactImageGallery
                    showFullscreenButton={false}
                    showThumbnails={false}
                    showPlayButton={false}
                    showIndex
                    items={images}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ImageGallery;
