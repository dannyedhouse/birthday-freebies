'use client'

import Image from 'next/image'
import {ReactElement, useState} from 'react'
import {FaRegPenToSquare} from 'react-icons/fa6'
import {SuggestionForm} from '../SuggestionForm/SuggestionForm'
import {Button} from '../ui/Button'
import {Modal} from './Modal'

export const SuggestionModal = () => {
  let [isOpen, setIsOpen] = useState(false)
  const [modalContent, setModalContent] = useState<ReactElement | null>(null)

  function closeModal() {
    setIsOpen(false)
    setModalContent(null)
  }

  function openModal() {
    setIsOpen(true)
    setModalContent(<SuggestionForm onSubmit={closeModalOnSubmit} />)
  }

  const closeModalOnSubmit = () => {
    setModalContent(successMessage)
    setTimeout(() => closeModal(), 5000)
  }

  const successMessage = (): ReactElement => {
    return (
      <>
        <div className="flex gap-4">
          <div>
            <Image src={'/icon.png'} width={40} height={40} alt="success icon" />
          </div>
          <div>
            <h2 className="text-lg">Thank you</h2>
            <p>We have received your submission, and we will review the deal.</p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div>
        <Button variant="secondary" onClick={openModal}>
          <FaRegPenToSquare />
          <span className="hidden sm:block px-2 font-raleway">Suggest a freebie</span>
        </Button>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="Suggest a freebie"
        content={modalContent}
      />
    </>
  )
}
