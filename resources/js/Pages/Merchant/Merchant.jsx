import Button from "@/Components/Button";
import { DashboardIcon, FilterIcon, ListIcon, NoOfMerchantIcon, PlusIcon, Search } from "@/Components/Icon/outline";
import InputIconWrapper from "@/Components/InputIconWrapper";
import SearchInput from "@/Components/SearchInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React from "react";
import CountUp from 'react-countup';
// import AddMerchant from "@/Pages/Merchant/Partials/AddMerchant";

export default function Merchant({auth, merchantNo}) {

    const { data, setData, post, processing, errors, reset } = useForm({
        search: '',
    });

    const searchVal = data.search;

    return (
        <Authenticated
            user={auth.user}
            header="Merchant"
        >
            <Head title="Merchant" />
            <div className="flex flex-col gap-5">

                <div className="flex flex-col md:flex-row gap-5">
                    <div className="md:w-1/3 flex flex-col gap-5">
                        <div className="flex flex-col gap-5 p-5 rounded-lg border border-neutral-100 bg-gray-25 shadow-container">
                            <div className="border-l-4 rounded-l border-primary-700 flex flex-row gap-5 w-full py-1 pl-4">
                                <div className="flex flex-col gap-1 w-full">
                                    <span className="text-xs text-neutral-950 font-sf-pro">No.of Merchant</span>
                                    <span className="text-xl text-neutral-950 font-sf-pro font-bold leading-tight">
                                        <CountUp end={merchantNo} duration={2} /> 
                                    </span>
                                </div>
                                <div>
                                    <NoOfMerchantIcon />
                                </div>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <div className="py-1 px-2 bg-secondary-50 rounded">
                                    <span className="text-secondary-700 text-xs font-medium font-sf-pro">99</span>
                                </div>
                                <div className="text-gray-900 text-xs font-sf-pro">than last month</div>
                            </div>
                        </div>
                        <div className="flex flex-col md:p-5 rounded-lg md:border md:border-neutral-100 md:bg-gray-25 md:shadow-container">
                            <div className="flex flex-col gap-4">
                                <div className="text-neutral-950 text-lg font-bold font-sf-pro">
                                    Merchant Created
                                </div>
                                <div className="p-5 md:p-0 border md:border-none border-neutral-100 rounded-lg md:rounded-none bg-gray-25 shadow-container md:shadow-none">
                                    {/* GRAPH */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-2/3 md:p-5 rounded-lg md:border md:border-neutral-100 md:bg-gray-25 md:shadow-container">
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between">
                                <div className="text-neutral-950 text-lg font-bold font-sf-pro">
                                    Merchant Churn
                                </div>
                                <div>
                                    {/* button */}
                                </div>
                            </div>
                            <div className="p-5 md:p-0 rounded-lg border md:border-none border-neutral-100 bg-gray-25 shadow-container md:shadow-none">
                                {/* GRAPH */}
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-5 md:p-5 md:rounded-lg md:border md:border-neutral-100 md:bg-gray-25 md:shadow-container">
                    <div className="text-neutral-950 text-lg font-bold font-sf-pro">
                        List of Merchant
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <InputIconWrapper 
                                icon={  
                                    <Search
                                        aria-hidden="true"
                                        className="w-5 h-5"
                                    />
                                }
                            >
                                <SearchInput 
                                    id="search"
                                    type="email"
                                    name="search"
                                    value={data.search}
                                    className="block w-full md:w-64"
                                    isFocused={false}
                                    handleChange={(e) => setData('search', e.target.value)}
                                    hasError={!!errors.search}
                                    placeholder='Search...'
                                    withIcon
                                    size='lg'
                                />
                            </InputIconWrapper>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="hidden md:flex items-center gap-3">
                                <div className="px-2.5 py-3 border border-gray-200 rounded bg-gray-25 hover:bg-gray-50 hover:border-gray-300 shadow-container cursor-pointer drop-shadow-sm">
                                    <ListIcon />
                                </div>
                                <div className="p-2.5 border border-gray-200 rounded bg-gray-25 hover:bg-gray-50 hover:border-gray-300 shadow-container cursor-pointer drop-shadow-sm">
                                    <DashboardIcon />
                                </div>
                            </div>
                            <div className="flex items-center gap-2 md:gap-3 xl:gap-5">
                                <div className="flex items-center gap-2 p-3 md:py-3 md:px-4 border border-gray-200 rounded bg-gray-25 hover:bg-gray-50 hover:border-gray-300 shadow-container cursor-pointer drop-shadow-sm">
                                    <div>
                                        <FilterIcon />
                                    </div>
                                    <div className="text-neutral-800 text-sm font-semibold font-sf-pro hidden xl:block">
                                        Filter
                                    </div>
                                </div>
                                <Link href={route('merchant.add-merchant')} >
                                    <Button
                                        size="lg"
                                        iconOnly
                                        className="w-full flex gap-2 items-center justify-center"
                                    >
                                        <PlusIcon/>
                                        <span className="text-sm font-sf-pro text-white font-medium hidden xl:block">
                                            Create New Merchant
                                        </span>
                                    </Button>
                                </Link>
                                {/* <AddMerchant /> */}
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>

        </Authenticated>
    )
}