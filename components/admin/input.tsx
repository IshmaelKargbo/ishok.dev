import { useState } from "react";
import { FiX } from "react-icons/fi";

interface props {
    placeholder?: string
    value?: string
    className?: string
    onChange: (value) => void
}

export const InputTitle = ({ placeholder, value, className, onChange }: props) => {
    return <div className='border-2 border-alt p-3 rounded-md'>
        <input onChange={onChange} className={`bg-transparent font-bold w-full font-head focus:outline-none ${className}`} placeholder={placeholder} value={value} />
    </div>
}