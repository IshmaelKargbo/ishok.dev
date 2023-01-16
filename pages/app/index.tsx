import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";
import { InputTitle, SkillInput } from "../../components/app/input";
import { LayoutApp } from "../../components/app/layout.app";

const MyEditor = dynamic(() => import('../../components/app/draft-editor'), { ssr: false });
const App: NextPage = () => {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState<Array<string>>([]);

  const onChangeName = ({ target }) => {
    setName(target.value);
  }

  const skillChange = (skills: Array<string>) => {
    setSkills(skills);
  }

  return (
    <LayoutApp>
      <div className="flex mt-10">
        <div className="flex-1 h-full pr-12">
          <div className="mb-10">
            <InputTitle placeholder="Name" className="text-6xl" value={name} onChange={onChangeName} />
          </div>
          <div className="mb-10">
            <InputTitle onChange={onChangeName} placeholder="text" className="text-3xl" value="Let’s design that future together" />
          </div>
          <div className="mb-10">
            <MyEditor placeholder="Bio" />
          </div>
          <div className="mb-10">
            <p className="mb-1">Tech Stack:</p>
            <SkillInput onChange={skillChange} skills={skills} />
          </div>
          <div className="mb-10">
            <MyEditor placeholder="About Us" />
          </div>
          <div>
            <button className="border-sec border text-sec md:py-3 md:px-10 px-6 py-3 text-sm md:text-lg rounded-md hover:bg-orange-200 hover:bg-opacity-10">Save</button>
          </div>
        </div>
        <div className="w-1/3">
          <div className="relative">
            <div className="w-full h-full -z-10 absolute border-2 border-alt rounded-md top-4 left-4">
            </div>
            <div className="w-full">
              <img src='me.jpeg' alt="me" className="rounded-md block border-2 border-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </LayoutApp>
  );
};

export default App;
