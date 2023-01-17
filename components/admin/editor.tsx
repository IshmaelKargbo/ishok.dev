import React from 'react';
import 'highlight.js/styles/darcula.css'
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.bubble.css';
import dynamic from 'next/dynamic';

interface props {
    placeholder?: string
    value: string
    onChange: (value) => void
}

const MyEditor = ({ placeholder, value, onChange }: props) => {
    var toolbarOptions = [
        ['bold', 'italic', 'underline', 'blockquote', 'code'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        ['link', 'image', 'video'],
        ['clean'],
        ['code-block']
    ];

    const modules = {
        toolbar: toolbarOptions
    }

    return (
        <div className='w-full border-2 border-alt rounded-md'>
            <ReactQuill
                theme="bubble"
                modules={modules}
                placeholder={placeholder}
                onChange={onChange}
                value={value} />
        </div>
    );

}

export default MyEditor;