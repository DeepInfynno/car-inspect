import React, { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import DownArrow from "../../assets/images/downArrow.svg";

const DropDown = ({ items, setActive, selected }) => {
  return (
    <div className="w-full">
      <Listbox value={selected} onChange={setActive}>
        <div className="relative mt-1">
          <Listbox.Button className="relative flex items-center justify-between w-full cursor-default rounded-lg border border-[#D3D3D7] p-5 text-left ">
            <span className="block truncate text-[#212338]">
              {selected.name}
            </span>
            <span className="">
              <div className="relative">
                <Image src={DownArrow} alt="Image" />
              </div>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {items.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-[#70BF44] text-white" : "text-[#212338]"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default DropDown;
