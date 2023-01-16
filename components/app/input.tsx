import { useState } from "react";
import { FiX } from "react-icons/fi";

interface props {
    placeholder?: string
    value: string
    className?: string
    onChange: (value) => void
}

export const InputTitle = ({ placeholder, value, className, onChange }: props) => {
    return <div className='border-2 border-alt p-3 rounded-md'>
        <input onChange={onChange} className={`bg-transparent font-bold w-full font-head focus:outline-none ${className}`} placeholder={placeholder} value={value} />
    </div>
}

interface sProps {
    skills: Array<string>
    onChange: (skills: Array<string>) => void
}

export const SkillInput = ({ skills = ['1', '2', '3', '4', '5'], onChange }: sProps) => {
    const [value, setValue] = useState("");

    const Skill = ({ skill }: any) => {
        return <div className="flex border-alt items-center space-x-2 px-2 py-0.5 mb-5 rounded-full border-2">
            <p className="text-base mt-1">{skill}</p>
            <FiX onClick={() => removeSkill(skill)} className="text-sm text-red-300 cursor-pointer" />
        </div>
    }

    const removeSkill = (skill) => {
        const filterSkill = skills.filter(e => e.toString() !== skill.toString());
        onChange(filterSkill);
    }

    const addSkill = (e) => {
        const list = new Set(skills);
        const skillList: Array<string> = [];

        if (e.key === "Enter") {
            list.add(value);
            setValue("");
            list.forEach((e: string) => skillList.push(e));
            onChange(skillList);
        }
    }

    const onTextChange = ({ target }) => {
        setValue(target.value);
    }

    return <div>
        <div className="flex flex-wrap space-x-3">
            {
                skills.map((skill) => <Skill skill={skill} />)
            }
        </div>
        <div>
            <div className="border-2 border-alt bg-transparent rounded-md px-3 py-2">
                <input onChange={onTextChange} value={value} onKeyDown={(e) => addSkill(e)} placeholder="Type skill" type="text" className="focus:outline-none bg-transparent w-full" />
            </div>
            <p className="text-xs mt-1 text-sec">Note: Press enter to add a new skill</p>
        </div>
    </div>
}