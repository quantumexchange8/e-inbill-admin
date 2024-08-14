import Button from "@/Components/Button";
import { ChevronLeft, MerchantArrowRight, PlusIcon, XIcon } from "@/Components/Icon/outline";
import MerchantModal from "@/Components/MerchantModal";
import React, { useState } from "react";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { Link, useForm } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function Merchant () {

    const [isLoading, setIsLoading] = useState(false);
    const [step, setStep] = useState(1);

    const { data, setData, post, processing, errors, reset } = useForm({
        merchant_name: '',
        registration_no: '',
        classification_id: '',
    });

    const nextPage = () => {
        if (step === 1) {
            setStep(step + 1);
        }
    };

    const prevPage = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleBack = () => {
        window.history.back(); // Go back in the browser history
    };

    const submit = () => {
        
    }

    return (
        <div className="bg-white min-h-screen">
            <div className="sticky top-0 z-10 w-full flex flex-col items-center justify-center border-b border-gray-200 bg-gray-25">
               
                <div className="flex justify-between items-center py-2 px-4 border-b border-gray-200 h-16 w-full">
                    <div className="flex items-center gap-4">
                        
                        <div className="cursor-pointer" onClick={handleBack}>
                            <ChevronLeft />
                        </div>
                        <div className="text-neutral-950 text-base font-bold leading-normal">
                            Create New Merchant
                        </div>
                    </div>
                    <div>
                        {
                            step === 1 && (
                                <Button
                                    size="sm"
                                    onClick={nextPage}
                                    className="bg-[#0060FF]"
                                >
                                    Next
                                </Button> 
                            )
                        }    
                        {
                            step === 2 && (
                                <>
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        onClick={prevPage}
                                    >
                                        Back
                                    </Button>  
                                    <Button
                                        size="sm"
                                        onClick={submit}
                                    >
                                        Save
                                    </Button>
                                </>
                            )
                        }   
                    </div>
                </div>

                <div className="flex justify-center gap-4 w-full">
                    <div className="flex items-center gap-2">
                        <div className={step === 1 ? "w-6 h-6 rounded-full bg-[#0060FF] text-primary-25 text-xs font-bold font-sf-pro flex items-center justify-center" : "w-6 h-6 rounded-full bg-gray-100 text-gray-300 text-xs font-bold font-sf-pro flex items-center justify-center"}>
                            1
                        </div>
                        <div className="text-neutral-950 text-xs font-bold font-sf-pro">
                            Account Set Up
                        </div>
                    </div>
                    <div>
                        <MerchantArrowRight />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className={step === 2 ? "w-6 h-6 rounded-full bg-[#0060FF] text-primary-25 text-xs font-bold font-sf-pro flex items-center justify-center" : "w-6 h-6 rounded-full bg-gray-100 text-gray-300 text-xs font-bold font-sf-pro flex items-center justify-center"}>
                            2
                        </div>
                        <div className="text-neutral-950 text-xs font-bold font-sf-pro">
                            Account Set Up
                        </div>
                    </div>
                </div>
            </div>
                {
                    step === 1 && (
                        <div className="p-5 flex flex-col gap-5">
                            <div className="p-5 flex gap-[60px] border border-gray-100 bg-white shadow-container rounded-lg">
                                <div className="xl:max-w-[268px] w-full flex flex-col gap-2">
                                    <div className="text-neutral-950 text-lg font-bold font-sf-pro">Account Detail</div>
                                    <div className="text-gray-800 text-sm font-sf-pro">Merchant will use the given email & password to log in to e-inbill.</div>
                                </div>
                                <div className="w-full grid grid-cols-2 grid-rows-2 gap-5">
                                    <div className="flex flex-col space-y-1">
                                        <InputLabel  value='Account Name' className="text-gray-950 font-semibold" />
                                        <TextInput 
                                            id="attention"
                                            type='text'
                                            name="attention"
                                            value={data.attention}
                                            onChange={(e) => setData('attention', e.target.value)}
                                            hasError={!!errors.attention}
                                            placeholder='e.g. attention'
                                            className=' w-full'
                                        />
                                        <InputError message={errors.attention} className="mt-2" />
                                    </div>
                                    <div>

                                    </div>
                                    <div className="flex flex-col space-y-1">
                                        <InputLabel  value='Merchant ID' className="text-gray-950 font-semibold" />
                                        <TextInput 
                                            id="attention"
                                            type='text'
                                            name="attention"
                                            value={data.attention}
                                            onChange={(e) => setData('attention', e.target.value)}
                                            hasError={!!errors.attention}
                                            placeholder='e.g. attention'
                                            className=' w-full'
                                        />
                                        <InputError message={errors.attention} className="mt-2" />
                                    </div>
                                    <div className="flex flex-col space-y-1">
                                        <InputLabel  value='Password' className="text-gray-950 font-semibold" />
                                        <TextInput 
                                            id="attention"
                                            type='text'
                                            name="attention"
                                            value={data.attention}
                                            onChange={(e) => setData('attention', e.target.value)}
                                            hasError={!!errors.attention}
                                            placeholder='e.g. attention'
                                            className=' w-full'
                                        />
                                        <InputError message={errors.attention} className="mt-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 flex gap-[60px] border border-gray-100 bg-white shadow-container rounded-lg">
                                <div className="xl:max-w-[268px] w-full flex flex-col gap-2">
                                    <div className="text-neutral-950 text-lg font-bold font-sf-pro">Merchant Detail</div>
                                    <div className="text-gray-800 text-sm font-sf-pro"></div>
                                </div>
                                <div className="w-full grid grid-cols-2 grid-rows-2 gap-5">
                                    <div className="flex flex-col space-y-1">
                                        <InputLabel  value='Merchant Name' className="text-gray-950 font-semibold" />
                                        <TextInput 
                                            id="attention"
                                            type='text'
                                            name="attention"
                                            value={data.attention}
                                            onChange={(e) => setData('attention', e.target.value)}
                                            hasError={!!errors.attention}
                                            placeholder='e.g. attention'
                                            className=' w-full'
                                        />
                                        <InputError message={errors.attention} className="mt-2" />
                                    </div>
                                    <div className="flex flex-col space-y-1">
                                        <InputLabel  value='TIN No.' className="text-gray-950 font-semibold" />
                                        <TextInput 
                                            id="attention"
                                            type='text'
                                            name="attention"
                                            value={data.attention}
                                            onChange={(e) => setData('attention', e.target.value)}
                                            hasError={!!errors.attention}
                                            placeholder='e.g. attention'
                                            className=' w-full'
                                        />
                                        <InputError message={errors.attention} className="mt-2" />
                                    </div>
                                    <div className="flex flex-col space-y-1">
                                        <InputLabel  value='Registration No.' className="text-gray-950 font-semibold" />
                                        <TextInput 
                                            id="attention"
                                            type='text'
                                            name="attention"
                                            value={data.attention}
                                            onChange={(e) => setData('attention', e.target.value)}
                                            hasError={!!errors.attention}
                                            placeholder='e.g. attention'
                                            className=' w-full'
                                        />
                                        <InputError message={errors.attention} className="mt-2" />
                                    </div>
                                    <div className="flex flex-col space-y-1">
                                        <InputLabel  value='Classification Code' className="text-gray-950 font-semibold" />
                                        <TextInput 
                                            id="attention"
                                            type='text'
                                            name="attention"
                                            value={data.attention}
                                            onChange={(e) => setData('attention', e.target.value)}
                                            hasError={!!errors.attention}
                                            placeholder='e.g. attention'
                                            className=' w-full'
                                        />
                                        <InputError message={errors.attention} className="mt-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 flex gap-[60px] border border-gray-100 bg-white shadow-container rounded-lg">
                                <div className="xl:max-w-[268px] w-full flex flex-col gap-2">
                                    <div className="text-neutral-950 text-lg font-bold font-sf-pro">Billing Detail</div>
                                    <div className="text-gray-800 text-sm font-sf-pro">These information are required to issue an invoice to your merchant.</div>
                                </div>
                                <div className="w-full flex flex-col gap-5">
                                    <div className="flex flex-col space-y-1">
                                        <InputLabel  value='Merchant Address' className="text-gray-950 font-semibold" />
                                        <TextInput 
                                            id="attention"
                                            type='text'
                                            name="attention"
                                            value={data.attention}
                                            onChange={(e) => setData('attention', e.target.value)}
                                            hasError={!!errors.attention}
                                            placeholder='e.g. attention'
                                            className=' w-full'
                                        />
                                        <InputError message={errors.attention} className="mt-2" />
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <div className="flex flex-col space-y-1 w-full">
                                            <InputLabel  value='Post Code' className="text-gray-950 font-semibold" />
                                            <TextInput 
                                                id="attention"
                                                type='text'
                                                name="attention"
                                                value={data.attention}
                                                onChange={(e) => setData('attention', e.target.value)}
                                                hasError={!!errors.attention}
                                                placeholder='e.g. attention'
                                                className=' w-full'
                                            />
                                            <InputError message={errors.attention} className="mt-2" />
                                        </div>
                                        <div className="flex flex-col space-y-1 w-full">
                                            <InputLabel  value='Area' className="text-gray-950 font-semibold" />
                                            <TextInput 
                                                id="attention"
                                                type='text'
                                                name="attention"
                                                value={data.attention}
                                                onChange={(e) => setData('attention', e.target.value)}
                                                hasError={!!errors.attention}
                                                placeholder='e.g. attention'
                                                className=' w-full'
                                            />
                                            <InputError message={errors.attention} className="mt-2" />
                                        </div>
                                        <div className="flex flex-col space-y-1 w-full">
                                            <InputLabel  value='State' className="text-gray-950 font-semibold" />
                                            <TextInput 
                                                id="attention"
                                                type='text'
                                                name="attention"
                                                value={data.attention}
                                                onChange={(e) => setData('attention', e.target.value)}
                                                hasError={!!errors.attention}
                                                placeholder='e.g. attention'
                                                className=' w-full'
                                            />
                                            <InputError message={errors.attention} className="mt-2" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <div className="flex flex-col space-y-1 w-full">
                                            <InputLabel  value='Email' className="text-gray-950 font-semibold" />
                                            <TextInput 
                                                id="attention"
                                                type='text'
                                                name="attention"
                                                value={data.attention}
                                                onChange={(e) => setData('attention', e.target.value)}
                                                hasError={!!errors.attention}
                                                placeholder='e.g. attention'
                                                className=' w-full'
                                            />
                                            <InputError message={errors.attention} className="mt-2" />
                                        </div>
                                        <div className="flex flex-col space-y-1 w-full">
                                            <InputLabel  value='Contact No.' className="text-gray-950 font-semibold" />
                                            <TextInput 
                                                id="attention"
                                                type='text'
                                                name="attention"
                                                value={data.attention}
                                                onChange={(e) => setData('attention', e.target.value)}
                                                hasError={!!errors.attention}
                                                placeholder='e.g. attention'
                                                className=' w-full'
                                            />
                                            <InputError message={errors.attention} className="mt-2" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 flex gap-[60px] border border-gray-100 bg-white shadow-container rounded-lg">
                                <div className="xl:max-w-[268px] w-full flex flex-col gap-2">
                                    <div className="text-neutral-950 text-lg font-bold font-sf-pro">Module & Term</div>
                                    <div className="text-gray-800 text-sm font-sf-pro">Select a module of subscription and a term for this merchant.</div>
                                </div>
                                <div className="w-full grid grid-cols-2 grid-rows-1 gap-5">
                                    <div className="flex flex-col space-y-1">
                                        <InputLabel  value='Select a Module' className="text-gray-950 font-semibold" />
                                        <TextInput 
                                            id="attention"
                                            type='text'
                                            name="attention"
                                            value={data.attention}
                                            onChange={(e) => setData('attention', e.target.value)}
                                            hasError={!!errors.attention}
                                            placeholder='e.g. attention'
                                            className=' w-full'
                                        />
                                        <InputError message={errors.attention} className="mt-2" />
                                    </div>
                                    <div className="flex flex-col space-y-1">
                                        <InputLabel  value='Term' className="text-gray-950 font-semibold" />
                                        <TextInput 
                                            id="attention"
                                            type='text'
                                            name="attention"
                                            value={data.attention}
                                            onChange={(e) => setData('attention', e.target.value)}
                                            hasError={!!errors.attention}
                                            placeholder='e.g. attention'
                                            className=' w-full'
                                        />
                                        <InputError message={errors.attention} className="mt-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 flex gap-[60px] border border-gray-100 bg-white shadow-container rounded-lg">
                                <div className="xl:max-w-[268px] w-full flex flex-col gap-2">
                                    <div className="text-neutral-950 text-lg font-bold font-sf-pro">Billing Interval</div>
                                    <div className="text-gray-800 text-sm font-sf-pro">Merchant will receive an invoice based on chosen billing interval and starting date.</div>
                                </div>
                                <div className="w-full grid grid-cols-2 grid-rows-1 gap-5">
                                    <div className="flex flex-col space-y-1">
                                        <InputLabel  value='Select Billing Interval' className="text-gray-950 font-semibold" />
                                        <TextInput 
                                            id="attention"
                                            type='text'
                                            name="attention"
                                            value={data.attention}
                                            onChange={(e) => setData('attention', e.target.value)}
                                            hasError={!!errors.attention}
                                            placeholder='e.g. attention'
                                            className=' w-full'
                                        />
                                        <InputError message={errors.attention} className="mt-2" />
                                    </div>
                                    <div className="flex flex-col space-y-1">
                                        <InputLabel  value='Billing Starting Date' className="text-gray-950 font-semibold" />
                                        <TextInput 
                                            id="attention"
                                            type='text'
                                            name="attention"
                                            value={data.attention}
                                            onChange={(e) => setData('attention', e.target.value)}
                                            hasError={!!errors.attention}
                                            placeholder='e.g. attention'
                                            className=' w-full'
                                        />
                                        <InputError message={errors.attention} className="mt-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 flex gap-[60px] border border-gray-100 bg-white shadow-container rounded-lg">
                                <div className="xl:max-w-[268px] w-full flex flex-col gap-2">
                                    <div className="text-neutral-950 text-lg font-bold font-sf-pro">Expiry Report</div>
                                    <div className="text-gray-800 text-sm font-sf-pro">Expiry report will be sent to the merchant before the expiry date.</div>
                                </div>
                                <div className="w-full grid grid-cols-2 grid-rows-1 gap-5">
                                    <div className="flex flex-col space-y-1">
                                        <InputLabel  value='Notify Merchant On' className="text-gray-950 font-semibold" />
                                        <TextInput 
                                            id="attention"
                                            type='text'
                                            name="attention"
                                            value={data.attention}
                                            onChange={(e) => setData('attention', e.target.value)}
                                            hasError={!!errors.attention}
                                            placeholder='e.g. attention'
                                            className=' w-full'
                                        />
                                        <InputError message={errors.attention} className="mt-2" />
                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    step === 2 && (
                        <div>

                        </div>
                    )
                }

                {/* button */}

                {/* 
                <div className="flex items-center gap-4">
                    <Button
                        size="sm"
                        variant="ghost"
                        onClick={prevPage}
                    >
                        Back
                    </Button>  
                    <Button
                        size="sm"
                        onClick={submit}
                    >
                        Save
                    </Button>  
                </div> */}
        </div>
    )
}