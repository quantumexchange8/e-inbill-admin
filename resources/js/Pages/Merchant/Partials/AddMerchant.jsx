import Button from "@/Components/Button";
import { PlusIcon, XIcon } from "@/Components/Icon/outline";
import Modal from "@/Components/Modal";
import React, { useState } from "react";

export default function Merchant () {

    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    const openModal = () => {
        console.log('test')
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }
    return (
        <>
            <div>
                <Button
                    size="lg"
                    iconOnly
                    className="w-full flex gap-2 items-center justify-center"
                    onClick={openModal}
                >
                    <PlusIcon/>
                    <span className="text-sm font-sf-pro text-white font-medium hidden xl:block">
                        Create New Merchant
                    </span>
                </Button>
            </div>

            <Modal
                title='Add Item'
                maxWidth='xl'
                maxHeight='xl' 
                isOpen={isOpen} close={closeModal}
                closeIcon={<XIcon />}
            >

            </Modal>
        </>
    )
}