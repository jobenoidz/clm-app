import { router } from "@inertiajs/react";



export default function AddClientModal({ onAddClientClose }) {

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
        const key = e.target.id;
        const value = e.target.value;
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/add-lead', values)
    }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                <div
                    className="absolute inset-0 bg-black/50 z-1"
                    onClick={onClientAddClose}
                />
                <div className="relative flex flex-col bg-white rounded-2xl w-[60vw] min-h-[50vh] max-h-[100vh] overflow-auto z-2">
                    test
                </div>
            </div>
        </>
    )
}