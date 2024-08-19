import Button from "@/Components/Button";
import { ChevronLeft, MerchantArrowRight, PlusIcon, XIcon } from "@/Components/Icon/outline";
import MerchantModal from "@/Components/MerchantModal";
import React, { useEffect, useState } from "react";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { Head, Link, useForm } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Dropdown } from 'primereact/dropdown';
import AccountSetup from "./Partials/AccountSetup";
import toast from "react-hot-toast";
import Confirmation from "./Partials/Confirmation";

export default function Merchant () {

    const [isLoading, setIsLoading] = useState(false);
    const [step, setStep] = useState(1);
    const [classVal, setClassification] = useState([]);
    const [selectedClass, setSelectedClass] = useState(null);

    const fetchData = async () => {
        try {

            const response = await axios.get('/merchant/getClassification');
            
            setClassification(response.data);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const { data, setData, post, processing, errors, reset } = useForm({
        account_name: '',
        role_id: '',
        password: '',
        merchant_name: '',
        tin_no: '',
        registration_no: '',
        classification_id: selectedClass,
        address: '',
        postcode: '',
        area: '',
        state: '',
        merchant_email: '',
        phone: '',
        module: '',
        term: '',
        billing: '',
        billing_date: '',
        expired_type: '',
    });

    useEffect(() => {
        setData('classification_id', selectedClass);
      }, [selectedClass]);

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

    const submit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        post('/merchant/new-merchant', {
            preserveScroll: true,
            onSuccess: () => {
                setIsLoading(false);
                reset();
                // if (itemAdded) {
                //     itemAdded();
                // }
                toast.success('Merchant created.', {
                    title: 'Merchant created.',
                    duration: 3000,
                    variant: 'variant3',
                });
            }
        })
    }

    return (
        <div className="bg-white min-h-screen">
            <Head title='Add Merchant' />
            <div className="sticky top-0 z-10 w-full flex flex-col items-center justify-center border-b border-gray-200 bg-gray-25">
               
               <div className="w-full flex justify-center border-b border-gray-200">
                    <div className="flex justify-between items-center py-2 px-4 h-16 w-full xl:max-w-[1440px]">
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
               </div>

                <div className="flex justify-center gap-4 w-full xl:max-w-[1440px]">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#0060FF] text-primary-25 text-xs font-bold font-sf-pro flex items-center justify-center">
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
                            Confirmation
                        </div>
                    </div>
                </div>
            </div>
            <form>
                <div className="flex justify-center">
                    {
                        step === 1 && (
                            <AccountSetup 
                                data={data}
                                setData={setData}
                                errors={errors}
                                selectedClass={selectedClass}
                                setSelectedClass={setSelectedClass}
                                classVal={classVal}
                            />
                        )
                    }
                    {
                        step === 2 && (
                            <Confirmation 
                                data={data}
                                selectedClass={selectedClass}
                            />
                        )
                    }
                </div>
            </form>

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