import Button from "@/Components/Button";
import TextInput from "@/Components/TextInput";
import React from "react";

export default function Confirmation({ data }) {

    return (
        <div className="flex gap-5 p-5 w-full xl:max-w-[1440px]">
            <div className="flex flex-col p-5 gap-10 w-2/3">
                <div className="flex flex-col gap-5 md:min-w-[294px] lg:max-w-[326px]">
                    <div className="text-lg font-bold text-neutral-950 font-sf-pro">
                        Select Module
                    </div>
                    <div className="flex flex-col border border-neutral-100 shadow-container rounded-lg">
                        <div className="p-4 flex flex-col gap-1 border-b border-gray-100">
                            <div></div>
                            <div></div>
                        </div>
                        <div className="p-4 flex items-center gap-2">
                            <div className="min-w-[70px] text-neutral-800 font-sf-pro text-sm">Monthly</div>
                            <div className="text-neutral-950 text-sm font-bold font-sf-pro">RM 999</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="text-neutral-950 font-bold text-lg font-sf-pro">
                        Account & Merchant Detail
                    </div>
                    <div className="flex flex-col">
                        <div className="py-3 flex flex-col gap-2">
                            <div className="text-neutral-950 text-base font-sf-pro">Account Name</div>
                            <div className="text-neutral-950 text-base font-bold font-sf-pro">{data.account_name ? data.account_name : null}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="py-3 flex flex-col gap-2">
                                <div className="text-neutral-950 text-base font-sf-pro">Merchant ID</div>
                                <div className="text-neutral-950 text-base font-bold font-sf-pro">{data.role_id ? data.role_id : null}</div>
                            </div>
                            <div className="py-3 flex flex-col gap-2">
                                <div className="text-neutral-950 text-base font-sf-pro">Password</div>
                                <div className="text-neutral-950 text-base font-bold font-sf-pro">
                                    {data.password ? data.password : null}
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="py-3 flex flex-col gap-2">
                                <div className="text-neutral-950 text-base font-sf-pro">Merchant Name</div>
                                <div className="text-neutral-950 text-base font-bold font-sf-pro">{data.merchant_name ? data.merchant_name : null}</div>
                            </div>
                            <div className="py-3 flex flex-col gap-2">
                                <div className="text-neutral-950 text-base font-sf-pro">TIN No.</div>
                                <div className="text-neutral-950 text-base font-bold font-sf-pro">{data.tin_no ? data.tin_no : null}</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="py-3 flex flex-col gap-2">
                                <div className="text-neutral-950 text-base font-sf-pro">Registration No.</div>
                                <div className="text-neutral-950 text-base font-bold font-sf-pro">{data.registration_no ? data.registration_no : null}</div>
                            </div>
                            <div className="py-3 flex flex-col gap-2">
                                <div className="text-neutral-950 text-base font-sf-pro">Classification Code</div>
                                <div className="text-neutral-950 text-base font-bold font-sf-pro">{data.classification_id ? data.classification_id.code : null}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-10 w-1/3 border border-gray-100 shadow-container rounded-lg">
                <div className="p-5 flex flex-col gap-5">
                    <div className="text-neutral-950 text-lg font-bold font-sf-pro">
                        Invoice Summary
                    </div>
                    <div className="flex flex-col gap-1 text-sm font-sf-pro text-neutral-950">
                        <div className="font-bold">{data.merchant_name ? data.merchant_name : null}</div>
                        <div>
                            {data.address ? data.address : null}, {data.postcode ? data.postcode : null} {data.area ? data.area : null}, {data.state ? data.state : null}
                        </div>
                        <div>{data.merchant_email ? data.merchant_email : null}</div>
                        <div>{data.phone ? data.phone : null}</div>
                    </div>
                    <div className="h-[1px] bg-[#F1F5F6]"></div>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-1">
                             <span className="text-neutral-950 text-sm font-bold font-sf-pro">Premium Plan</span>
                             <span className="text-gray-900 text-sm font-sf-pro">monthly plan</span>
                        </div>
                        <div className="flex flex-col gap-1">
                             <span className="text-neutral-950 text-sm font-medium font-sf-pro">RM</span>
                             <span></span>
                        </div>
                    </div>
                    <div className="h-[1px] bg-[#F1F5F6]"></div>
                    <div className="flex gap-3">
                        <div className="flex flex-col gap-1 w-full">
                            <div className="text-gray-950 text-xs font-sf-pro font-sf-pro">Personalised Discount</div>
                            <div>
                                <TextInput className="w-full" />
                            </div>
                        </div>
                        <div className="flex items-end">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="text-primary-700"
                                type="button"
                            >
                                Apply
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center">
                                <div className="text-neutral-950 text-sm font-sf-pro">Sub-Total</div>
                                <div className="text-neutral-950 text-sm font-sf-pro font-medium">RM </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="text-neutral-950 text-sm font-sf-pro">SST (6%)</div>
                                <div className="text-neutral-950 text-sm font-sf-pro font-medium">RM </div>
                            </div>
                        </div>
                        <div className="flex justify-between text-neutral-950 text-lg font-bold font-sf-pro">
                            <div>
                                Total
                            </div>
                            <div>
                                RM
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5 bg-gray-50 rounded-b-lg flex flex-col gap-4">
                    <div className="flex flex-col">
                        <div>Expiry Report</div>
                        <div></div>
                    </div>
                    <div Name="flex flex-col">
                        <div>Late Renewal Policies</div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}