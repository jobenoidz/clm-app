import React, { useState } from 'react'
import { router } from '@inertiajs/react'
import { PlusCircle } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function AddLeadModal({ onAddLeadClose }) {
    const [values, setValues] = useState({
        company_name: "",
        address: "",
        key_decision_maker: "",
        domain: "",
        contact_person: "",
        position: "",
        work_email: "",
        work_phone: "",
        rt_date: "",
        lead_source: "",
        timeline: "",
        challenges: "",
        remarks: "",
        needs: "",
        notes: "",
    })

    function handleChange(e) {
        const key = e.target.id
        const value = e.target.value
        setValues(v => ({ ...v, [key]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log("Submitting lead:", values)
        router.post('/add-lead', values)
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onAddLeadClose}
            />

            <div className="relative bg-orange-200 rounded-2xl w-[70vw] max-h-[90vh] flex flex-col overflow-hidden z-10">
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col overflow-hidden">
                    {/* Scrollable Content Area */}
                    <div className="overflow-auto p-4">
                        <h2 className="text-xl mb-4 text-center">Add New Lead</h2>

                        <div className='flex items-center justify-center bg-white p-4 m-4 mb-2 rounded-xl drop-shadow-lg'>
                            <div className='bg-gray-300 rounded-full p-10 mx-3'>
                                <PlusCircle size={50} />
                            </div>
                            <div className='flex-col space-y-2 w-[50%]'>
                                <h1>Company Details</h1>
                                <div className='flex'>
                                    <label htmlFor="company_name" className="font-bold w-50">Company Name</label>
                                    <Input
                                        id="company_name"
                                        value={values.company_name}
                                        onChange={handleChange}
                                        className="w-full border px-2 py-1"
                                        placeholder="Acme Corp"
                                    />
                                </div>
                                <div className='flex'>
                                    <label htmlFor="address" className="font-bold w-50">Address</label>
                                    <Input
                                        id="address"
                                        value={values.address}
                                        onChange={handleChange}
                                        className="w-full border px-2 py-1"
                                        placeholder="123 Main St"
                                    />
                                </div>
                                <div className='flex items-center'>
                                    <label htmlFor="work_phone" className="text-sm font-bold w-50">Category</label>
                                    <Select>
                                        <SelectTrigger className='w-full'>
                                            <SelectValue placeholder="Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Educational Institution</SelectLabel>
                                                <SelectItem value="HE">Higher Education</SelectItem>
                                                <SelectItem value="K12">K-12 Education</SelectItem>
                                            </SelectGroup>
                                            <SelectGroup>
                                                <SelectLabel>Organization</SelectLabel>
                                                <SelectItem value="Gov">Government (Bidding)</SelectItem>
                                                <SelectItem value="GovBid">Government</SelectItem>
                                                <SelectItem value="Priv">Private</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        <div className='flex'>
                            {/* Left Column */}
                            <div className='w-1/2 bg-white p-4 space-y-4 ml-4 mr-1 rounded-xl drop-shadow-lg'>
                                <div className='flex items-center'>
                                    <label htmlFor="key_decision_maker" className="text-sm font-bold w-50">Key Decision Maker</label>
                                    <Input
                                        id="key_decision_maker"
                                        value={values.key_decision_maker}
                                        onChange={handleChange}
                                        className="w-full border px-2 py-1"
                                        placeholder="Jane Doe"
                                    />
                                </div>
                                <div className='flex items-center'>
                                    <label htmlFor="domain" className="text-sm font-bold w-50">Domain</label>
                                    <Input
                                        id="domain"
                                        value={values.domain}
                                        onChange={handleChange}
                                        className="w-full border px-2 py-1"
                                        placeholder="acme.com"
                                    />
                                </div>
                                <div className='flex items-center'>
                                    <label htmlFor="contact_person" className="text-sm font-bold w-50">Contact Person</label>
                                    <Input
                                        id="contact_person"
                                        value={values.contact_person}
                                        onChange={handleChange}
                                        className="w-full border px-2 py-1"
                                        placeholder="John Smith"
                                    />
                                </div>
                                <div className='flex items-center'>
                                    <label htmlFor="position" className="text-sm font-bold w-50">Position</label>
                                    <Input
                                        id="position"
                                        value={values.position}
                                        onChange={handleChange}
                                        className="w-full border px-2 py-1"
                                        placeholder="CTO"
                                    />
                                </div>
                                <div className='flex items-center'>
                                    <label htmlFor="work_email" className="text-sm font-bold w-50">Work Email</label>
                                    <Input
                                        id="work_email"
                                        type="email"
                                        value={values.work_email}
                                        onChange={handleChange}
                                        className="w-full border px-2 py-1"
                                        placeholder="john@acme.com"
                                    />
                                </div>
                                <div className='flex items-center'>
                                    <label htmlFor="work_phone" className="text-sm font-bold w-50">Work Phone</label>
                                    <Input
                                        id="work_phone"
                                        type="tel"
                                        value={values.work_phone}
                                        onChange={handleChange}
                                        className="w-full border px-2 py-1"
                                        placeholder="+1 555-1234"
                                    />
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className='w-1/2 bg-white p-4 ml-1 mr-4 rounded-xl drop-shadow-lg'>
                                <div className='space-y-4'>
                                    <div>
                                        <label htmlFor="rt_date" className="block text-sm">RT Date</label>
                                        <Input
                                            id="rt_date"
                                            type="date"
                                            value={values.rt_date}
                                            onChange={handleChange}
                                            className="w-full border px-2 py-1"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lead_source" className="block text-sm">Lead Source</label>
                                        <Input
                                            id="lead_source"
                                            value={values.lead_source}
                                            onChange={handleChange}
                                            className="w-full border px-2 py-1"
                                            placeholder="Referral"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="timeline" className="block text-sm">Timeline</label>
                                        <Input
                                            id="timeline"
                                            value={values.timeline}
                                            onChange={handleChange}
                                            className="w-full border px-2 py-1"
                                            placeholder="Q4 2025"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="challenges" className="block text-sm">Challenges</label>
                                        <textarea
                                            id="challenges"
                                            value={values.challenges}
                                            onChange={handleChange}
                                            className="w-full border px-2 py-1 min-h-15"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="needs" className="block text-sm">Needs</label>
                                        <textarea
                                            id="needs"
                                            value={values.needs}
                                            onChange={handleChange}
                                            className="w-full border px-2 py-1 min-h-15"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="remarks" className="block text-sm">Remarks</label>
                                        <textarea
                                            id="remarks"
                                            value={values.remarks}
                                            onChange={handleChange}
                                            className="w-full border px-2 py-1 min-h-15"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="notes" className="block text-sm">Notes</label>
                                        <textarea
                                            id="notes"
                                            value={values.notes}
                                            onChange={handleChange}
                                            className="w-full border px-2 py-1 min-h-15"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fixed Button Bar */}
                    <div className="bg-orange-300 p-2 flex justify-center space-x-2">
                        <Button
                            variant={'secondary'}
                            type="button"
                            onClick={onAddLeadClose}
                            className="px-4 py-2 border rounded"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}