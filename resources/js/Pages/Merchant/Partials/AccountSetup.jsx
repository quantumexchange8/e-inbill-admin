import React from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Dropdown } from 'primereact/dropdown';

export default function AccountSetup({data, setData, errors, selectedClass, setSelectedClass, classVal}) {

    return(
        <div className="p-5 flex flex-col gap-5 w-full xl:max-w-[1440px]">
            <div className="p-5 flex gap-[60px] border border-gray-100 bg-white shadow-container rounded-lg">
                <div className="md:max-w-[215px] xl:max-w-[268px] w-full flex flex-col gap-2">
                    <div className="text-neutral-950 text-lg font-bold font-sf-pro">Account Detail</div>
                    <div className="text-gray-800 text-sm font-sf-pro">Merchant will use the given email & password to log in to e-inbill.</div>
                </div>
                <div className="w-full grid grid-cols-2 grid-rows-2 gap-5">
                    <div className="flex flex-col space-y-1">
                        <div className="flex gap-1">
                            <InputLabel  value='Account Name' className="text-gray-950 font-semibold" /> <span className="text-error-500 text-xs font-semibold">*</span>
                        </div>
                        <TextInput 
                            id="account_name"
                            type='text'
                            name="account_name"
                            value={data.account_name}
                            onChange={(e) => setData('account_name', e.target.value)}
                            hasError={!!errors.account_name}
                            placeholder='e.g. account_name'
                            className=' w-full'
                        />
                        <InputError message={errors.account_name} className="mt-2" />
                    </div>
                    <div>

                    </div>
                    <div className="flex flex-col space-y-1">
                        <div className="flex gap-1">
                            <InputLabel  value='Merchant ID' className="text-gray-950 font-semibold" /><span className="text-error-500 text-xs font-semibold">*</span>
                        </div>
                        <TextInput 
                            id="role_id"
                            type='text'
                            name="role_id"
                            value={data.role_id}
                            onChange={(e) => setData('role_id', e.target.value)}
                            hasError={!!errors.role_id}
                            placeholder='e.g. role_id'
                            autoComplete="username"
                            className=' w-full'
                        />
                        <InputError message={errors.role_id} className="mt-2" />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div className="flex gap-1">
                            <InputLabel htmlFor="password"  value='Password' className="text-gray-950 font-semibold" /><span className="text-error-500 text-xs font-semibold">*</span>
                        </div>
                        <TextInput 
                            id="password"
                            type='password'
                            name="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            hasError={!!errors.password}
                            placeholder='e.g. password'
                            autoComplete="current-password"
                            className=' w-full'
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>
                </div>
            </div>
            <div className="p-5 flex gap-[60px] border border-gray-100 bg-white shadow-container rounded-lg">
                <div className="md:max-w-[215px] xl:max-w-[268px] w-full flex flex-col gap-2">
                    <div className="text-neutral-950 text-lg font-bold font-sf-pro">Merchant Detail</div>
                    <div className="text-gray-800 text-sm font-sf-pro"></div>
                </div>
                <div className="w-full grid grid-cols-2 grid-rows-2 gap-5">
                    <div className="flex flex-col space-y-1">
                        <div className="flex gap-1">
                            <InputLabel  value='Merchant Name' className="text-gray-950 font-semibold" /><span className="text-error-500 text-xs font-semibold">*</span>
                        </div>
                        <TextInput 
                            id="merchant_name"
                            type='text'
                            name="merchant_name"
                            value={data.merchant_name}
                            onChange={(e) => setData('merchant_name', e.target.value)}
                            hasError={!!errors.merchant_name}
                            placeholder='e.g. merchant_name'
                            className=' w-full'
                        />
                        <InputError message={errors.merchant_name} className="mt-2" />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div className="flex gap-1">
                            <InputLabel  value='TIN No.' className="text-gray-950 font-semibold" /><span className="text-error-500 text-xs font-semibold">*</span>
                        </div>
                        <TextInput 
                            id="tin_no"
                            type='text'
                            name="tin_no"
                            value={data.tin_no}
                            onChange={(e) => setData('tin_no', e.target.value)}
                            hasError={!!errors.tin_no}
                            placeholder='e.g. tin_no'
                            className=' w-full'
                        />
                        <InputError message={errors.tin_no} className="mt-2" />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div className="flex gap-1">
                            <InputLabel  value='Registration No.' className="text-gray-950 font-semibold" />
                            <span className="text-error-500 text-xs font-semibold">*</span>
                        </div>
                        <TextInput 
                            id="registration_no"
                            type='text'
                            name="registration_no"
                            value={data.registration_no}
                            onChange={(e) => setData('registration_no', e.target.value)}
                            hasError={!!errors.registration_no}
                            placeholder='e.g. registration_no'
                            className=' w-full'
                        />
                        <InputError message={errors.registration_no} className="mt-2" />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div className="flex gap-1">
                            <InputLabel  value='Classification Code' className="text-gray-950 font-semibold" />
                            <span className="text-error-500 text-xs font-semibold">*</span>
                        </div>
                        <Dropdown 
                            value={selectedClass} 
                            onChange={(e) => setSelectedClass(e.value)} 
                            options={classVal} 
                            optionLabel="code" 
                            placeholder="Select"
                            className="w-full md:w-14rem" 
                        />
                        <InputError message={errors.classification_id} className="mt-2" />
                    </div>
                </div>
            </div>
            <div className="p-5 flex gap-[60px] border border-gray-100 bg-white shadow-container rounded-lg">
                <div className="md:max-w-[215px] xl:max-w-[268px] w-full flex flex-col gap-2">
                    <div className="text-neutral-950 text-lg font-bold font-sf-pro">Billing Detail</div>
                    <div className="text-gray-800 text-sm font-sf-pro">These information are required to issue an invoice to your merchant.</div>
                </div>
                <div className="w-full flex flex-col gap-5">
                    <div className="flex flex-col space-y-1">
                        <div className="flex gap-1">
                            <InputLabel  value='Merchant Address' className="text-gray-950 font-semibold" />
                            <span className="text-error-500 text-xs font-semibold">*</span>
                        </div>
                        <TextInput 
                            id="address"
                            type='text'
                            name="address"
                            value={data.address}
                            onChange={(e) => setData('address', e.target.value)}
                            hasError={!!errors.address}
                            placeholder='e.g. address'
                            className=' w-full'
                        />
                        <InputError message={errors.address} className="mt-2" />
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="flex flex-col space-y-1 w-full">
                            <div className="flex gap-1">
                                <InputLabel  value='Post Code' className="text-gray-950 font-semibold" />
                                <span className="text-error-500 text-xs font-semibold">*</span>
                            </div>
                            <TextInput 
                                id="postcode"
                                type='text'
                                name="postcode"
                                value={data.postcode}
                                onChange={(e) => setData('postcode', e.target.value)}
                                hasError={!!errors.postcode}
                                placeholder='e.g. postcode'
                                className=' w-full'
                            />
                            <InputError message={errors.postcode} className="mt-2" />
                        </div>
                        <div className="flex flex-col space-y-1 w-full">
                            <div className="flex gap-1">
                                <InputLabel  value='Area' className="text-gray-950 font-semibold" />
                                <span className="text-error-500 text-xs font-semibold">*</span>
                            </div>
                            <TextInput 
                                id="area"
                                type='text'
                                name="area"
                                value={data.area}
                                onChange={(e) => setData('area', e.target.value)}
                                hasError={!!errors.area}
                                placeholder='e.g. area'
                                className=' w-full'
                            />
                            <InputError message={errors.area} className="mt-2" />
                        </div>
                        <div className="flex flex-col space-y-1 w-full">
                            <div className="flex gap-1">
                                <InputLabel  value='State' className="text-gray-950 font-semibold" />
                                <span className="text-error-500 text-xs font-semibold">*</span>
                            </div>
                            <TextInput 
                                id="state"
                                type='text'
                                name="state"
                                value={data.state}
                                onChange={(e) => setData('state', e.target.value)}
                                hasError={!!errors.state}
                                placeholder='e.g. state'
                                className=' w-full'
                            />
                            <InputError message={errors.state} className="mt-2" />
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="flex flex-col space-y-1 w-full">
                            <div className="flex gap-1">
                                <InputLabel  value='Email' className="text-gray-950 font-semibold" />
                                <span className="text-error-500 text-xs font-semibold">*</span>
                            </div>
                            <TextInput 
                                id="merchant_email"
                                type='email'
                                name="merchant_email"
                                value={data.merchant_email}
                                onChange={(e) => setData('merchant_email', e.target.value)}
                                hasError={!!errors.merchant_email}
                                placeholder='e.g. merchant_email'
                                className=' w-full'
                            />
                            <InputError message={errors.merchant_email} className="mt-2" />
                        </div>
                        <div className="flex flex-col space-y-1 w-full">
                            <div className="flex gap-1">
                                <InputLabel  value='Contact No.' className="text-gray-950 font-semibold" />
                                <span className="text-error-500 text-xs font-semibold">*</span>
                            </div>
                            <TextInput 
                                id="phone"
                                type='text'
                                name="phone"
                                value={data.phone}
                                onChange={(e) => setData('phone', e.target.value)}
                                hasError={!!errors.phone}
                                placeholder='e.g. phone'
                                className=' w-full'
                            />
                            <InputError message={errors.phone} className="mt-2" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-5 flex gap-[60px] border border-gray-100 bg-white shadow-container rounded-lg">
                <div className="md:max-w-[215px] xl:max-w-[268px] w-full flex flex-col gap-2">
                    <div className="text-neutral-950 text-lg font-bold font-sf-pro">Module & Term</div>
                    <div className="text-gray-800 text-sm font-sf-pro">Select a module of subscription and a term for this merchant.</div>
                </div>
                <div className="w-full grid grid-cols-2 grid-rows-1 gap-5">
                    <div className="flex flex-col space-y-1">
                        <div className="flex gap-1">
                            <InputLabel  value='Select a Module' className="text-gray-950 font-semibold" />
                            <span className="text-error-500 text-xs font-semibold">*</span>
                        </div>
                        <TextInput 
                            id="module"
                            type='text'
                            name="module"
                            value={data.module}
                            onChange={(e) => setData('module', e.target.value)}
                            hasError={!!errors.module}
                            placeholder='e.g. module'
                            className=' w-full'
                        />
                        <InputError message={errors.module} className="mt-2" />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div className="flex gap-1">
                            <InputLabel  value='Term' className="text-gray-950 font-semibold" />
                            <span className="text-error-500 text-xs font-semibold">*</span>
                        </div>
                        <TextInput 
                            id="term"
                            type='text'
                            name="term"
                            value={data.term}
                            onChange={(e) => setData('term', e.target.value)}
                            hasError={!!errors.term}
                            placeholder='e.g. term'
                            className=' w-full'
                        />
                        <InputError message={errors.term} className="mt-2" />
                    </div>
                </div>
            </div>
            <div className="p-5 flex gap-[60px] border border-gray-100 bg-white shadow-container rounded-lg">
                <div className="md:max-w-[215px] xl:max-w-[268px] w-full flex flex-col gap-2">
                    <div className="text-neutral-950 text-lg font-bold font-sf-pro">Billing Interval</div>
                    <div className="text-gray-800 text-sm font-sf-pro">Merchant will receive an invoice based on chosen billing interval and starting date.</div>
                </div>
                <div className="w-full grid grid-cols-2 grid-rows-1 gap-5">
                    <div className="flex flex-col space-y-1">
                        <div className="flex gap-1">
                            <InputLabel  value='Select Billing Interval' className="text-gray-950 font-semibold" />
                            <span className="text-error-500 text-xs font-semibold">*</span>
                        </div>
                        <TextInput 
                            id="billing"
                            type='text'
                            name="billing"
                            value={data.billing}
                            onChange={(e) => setData('billing', e.target.value)}
                            hasError={!!errors.billing}
                            placeholder='e.g. billing'
                            className=' w-full'
                        />
                        <InputError message={errors.billing} className="mt-2" />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div className="flex gap-1">
                            <InputLabel  value='Billing Starting Date' className="text-gray-950 font-semibold" />
                            <span className="text-error-500 text-xs font-semibold">*</span>
                        </div>
                        <TextInput 
                            id="billing_date"
                            type='text'
                            name="billing_date"
                            value={data.billing_date}
                            onChange={(e) => setData('billing_date', e.target.value)}
                            hasError={!!errors.billing_date}
                            placeholder='e.g. billing_date'
                            className=' w-full'
                        />
                        <InputError message={errors.billing_date} className="mt-2" />
                    </div>
                </div>
            </div>
            <div className="p-5 flex gap-[60px] border border-gray-100 bg-white shadow-container rounded-lg">
                <div className="md:max-w-[215px] xl:max-w-[268px] w-full flex flex-col gap-2">
                    <div className="text-neutral-950 text-lg font-bold font-sf-pro">Expiry Report</div>
                    <div className="text-gray-800 text-sm font-sf-pro">Expiry report will be sent to the merchant before the expiry date.</div>
                </div>
                <div className="w-full grid grid-cols-1 xl:grid-cols-2 grid-rows-1 gap-5">
                    <div className="flex flex-col space-y-1">
                        <InputLabel  value='Notify Merchant On' className="text-gray-950 font-semibold" />
                        <TextInput 
                            id="expired_type"
                            type='text'
                            name="expired_type"
                            value={data.expired_type}
                            onChange={(e) => setData('expired_type', e.target.value)}
                            hasError={!!errors.expired_type}
                            placeholder='e.g. expired_type'
                            className=' w-full'
                        />
                        <InputError message={errors.expired_type} className="mt-2" />
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}