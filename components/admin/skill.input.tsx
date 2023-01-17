import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

interface sProps {
  skills: Array<string>;
  onChange: (skills: Array<string>) => void;
}

export const SkillInput = ({
  skills = [],
  onChange,
}: sProps) => {
  const [value, setValue] = useState("");
  const [state, setState] = useState(false);

  const Skill = ({ skill }: any) => {
    return (
      <div className="flex border-alt items-center space-x-2 px-2 py-0.5 mb-5 rounded-full border-2">
        <p className="text-base mt-1">{skill}</p>
        <FiX
          onClick={() => removeSkill(skill)}
          className="text-sm text-red-300 cursor-pointer"
        />
      </div>
    );
  };

  const removeSkill = (skill) => {
    const filterSkill = skills.filter((e) => e.toString() !== skill.toString());
    onChange(filterSkill);
  };

  const addSkill = (e) => {
    const list = new Set(skills);
    const skillList: Array<string> = [];

    if (e.key === "Enter") {
      list.add(value);
      setValue("");
      list.forEach((e: string) => skillList.push(e));
      onChange(skillList);
    }
  };

  const onTextChange = ({ target }) => {
    setValue(target.value);
  };

  return (
    <div>
      <div className="flex flex-wrap space-x-3">
        {skills.map((skill, key) => (
          <Skill key={key} skill={skill} />
        ))}
      </div>
      <div>

        {
          state ? <div>
            <div className="flex items-center space-x-2">
              <div className="border-2 w-72 border-alt bg-transparent rounded-md px-3 py-1">
                <input
                  onChange={onTextChange}
                  value={value}
                  onKeyDown={(e) => addSkill(e)}
                  placeholder="Type skill"
                  type="text"
                  className="focus:outline-none bg-transparent w-full font-cal placeholder-alt"
                />
              </div>
              <button className="border-2 bg-red-600 border-red-400 rounded-md p-2.5"
                onClick={() => setState(false)}><FiX
                  className="text-base text-white cursor-pointer"
                /></button>
            </div>
            <p className="text-xs mt-2 pl-1 text-sec">
              Note: Press enter to add a new skill
            </p>
          </div> : <button onClick={() => setState(true)} className="flex border-2 space-x-1 border-sec text-sec px-3 pt-2 pb-0.5 rounded-full hover:bg-sec hover:text-gray-500">
            <span>Add Skill</span>
            <FiPlus className="pt-0.5" />
          </button>
        }

      </div>
    </div>
  );
};
