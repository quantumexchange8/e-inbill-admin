import { Button, CloseButton, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useCallback, useState } from 'react';
import { XIcon } from './Icon/outline';

export default function MerchantModal({ children, show = false, maxWidth = 'md', maxHeight = 'md', isOpen, close, title, footer, closeIcon, preventCloseOnClickOutside = true }) {

    const maxWidthClass = {
        sm: 'sm:w-[300px] ',
        md: 'max-w-[500px]',
        lg: 'sm:max-w-lg',
        xl: 'sm:w-full md:min-w-full lg:min-w-[1024px] xl:min-w-[1280px]',
    }[maxWidth] ;

    const maxHeightClass = {
        sm: 'sm:h-[500px] xl:h-[700px]',
        md: 'h-full',
        xl: 'sm:h-full max-h-screen md:h-full lg:min-h-auto xl:min-h-full',
    }[maxHeight];

    const handleOverlayClick = useCallback((e) => {
        if (preventCloseOnClickOutside) {
            e.stopPropagation();
        } else {
            close(); // Close if not preventing
        }
    }, [preventCloseOnClickOutside, close]);

    return (
        <>
            <Dialog open={isOpen} as="div" className="relative z-20 focus:outline-none" onClose={preventCloseOnClickOutside ? () => {} : close} >

                <div className="fixed inset-0 z-20 w-screen overflow-y-auto" onClick={handleOverlayClick}>
                <div className="flex min-h-full justify-center items-start p-1 md:p-4 bg-black/25">
                    <DialogPanel
                        transition
                        className={`w-full max-w-md rounded-xl bg-white border shadow-md backdrop-blur-2xl duration-150 ease-out data-[closed]:transform-[scale(90%)] data-[closed]:opacity-0 data-[closed]:ease-in ${maxWidthClass} ${maxHeightClass}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <DialogTitle className="text-lg font-bold text-neutral-950 flex justify-between p-5 border-b border-gray-200">
                            <div className='w-full'>
                                {title}
                            </div>
                            <div >
                                {closeIcon}
                            </div>
                        </DialogTitle>
                        {children}
                    </DialogPanel>
                </div>
                </div>
            </Dialog>
        </>
    );
}
