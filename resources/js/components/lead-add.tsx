import React, { useState } from 'react'
import { router } from '@inertiajs/react'
import { PlusCircle } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'

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
            <form onSubmit={handleSubmit} className="relative bg-white rounded-2xl w-[70vw] max-h-[90vh] overflow-auto z-10 p-4">
                <h2 className="text-xl mb-4 text-center">Add New Lead</h2>
                <div className='flex items-center justify-center bg-orange-100'>
                    <div className='bg-gray-300 rounded-full p-6 mx-3'>
                        <PlusCircle />
                    </div>
                    <div className='flex-col space-y-2'>
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
                    </div>
                </div>
                <div className='flex'>
                    {/* left col */}
                    <div className='w-1/2 bg-orange-50 p-4 space-y-4'>
                        {/* Decision & Domain */}
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

                        {/* Contact Person */}
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

                        {/* Contact Details */}
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

                    {/* right col */}
                    <div className='w-1/2 bg-green-50 p-4'>
                        <div className='h-[60vh] overflow-y-auto space-y-4'>
                            {/* Lead Details */}
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

                            {/* Open-ended Fields */}
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
                <div className="absolute bottom-0 z-1 justify-end space-x-2 bg-pink-50 items-center py-2 pr-4">
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
    )
}