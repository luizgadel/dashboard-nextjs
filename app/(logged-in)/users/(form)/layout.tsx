
export default function UserFormLayout({ children }: { children: React.ReactNode }) {
    const inputFieldArray = [
        { title: 'Name', type: 'text', required: false },
        { title: 'Email', type: 'text', required: true },
        { title: 'Password', type: 'password', required: true, rule: 'Must have 6 or more characters.' },
        { title: 'Confirm your password', type: 'password', required: true, rule: 'Must have 6 or more characters.' }
    ]
    return (
        <div className="border border-gray-500/75 rounded-xl flex flex-col max-w-xl pt-4 px-6 pb-6">
            {inputFieldArray.map((inputField) => (
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">{inputField.title}</span>
                    </div>
                    <input type={inputField.type} className="input input-bordered" />
                    <div className="label">
                        {inputField.required ? (<span className="label-text-alt">*Required</span>):''}
                        <span className="label-text-alt">{inputField.rule ? inputField.rule:''}</span>
                    </div>
                </label>
            ))}
            <div className="place-self-end mt-6">
                <div className="w-24">
                    {children}
                </div>
            </div>
        </div>
    )
}