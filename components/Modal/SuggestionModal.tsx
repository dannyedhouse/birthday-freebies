"use client";

import { writeClient } from "@/lib/sanity";
import { SuggestionFormType } from "@/types/SuggestionFormType";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { SuggestionForm } from "../SuggestionForm/SuggestionForm";
import { Button } from "../ui/Button";

export const SuggestionModal = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const transformData = (data: SuggestionFormType) => {
    let transformedData;
    const _id: string = new Date().getTime().toString();
    const _type: string = "suggestions";
    const retailer: string = data.retailer;
    const description: string = data.description;
    const url: string = data.url;

    transformedData = { _id, _type, retailer, description, url };
    return transformedData;
  };

  const submitSuggestionData = (data: SuggestionFormType) => {
    closeModal();
    let transaction = writeClient.transaction();
    const transformedData = transformData(data);
    transaction.createIfNotExists(transformedData);
    return transaction.commit();
  };

  return (
    <>
      <div>
        <Button variant="secondary" onClick={openModal}>
          <FaRegPenToSquare />
          <span className="hidden sm:block px-2 font-raleway">
            Suggest a freebie
          </span>
        </Button>
      </div>
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
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <button
                    className="absolute top-0 right-0 m-4"
                    onClick={closeModal}
                  >
                    <IoMdClose size={20} />
                  </button>
                  <Dialog.Title
                    as="h4"
                    className="text-lg text-gray-900 font-raleway font-bold mb-4"
                  >
                    Suggest a freebie
                  </Dialog.Title>
                  <SuggestionForm
                    onSubmit={(data) => submitSuggestionData(data)}
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
