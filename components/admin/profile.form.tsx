import { useState } from "react";
import { Profile } from "../../redux/interface/profile";
import { Button } from "../button";
import { SingleLoading } from "../loading";
import MyEditor from "./editor";
import { InputTitle } from "./input";
import { SkillInput } from "./skill.input";

interface props {
  profile: Profile;
}

export const ProfileForm = ({ profile }: props) => {
  const [name, setName] = useState<string>(profile.name);
  const [caption, setCaption] = useState(profile.caption);
  const [bio, setBio] = useState(profile.bio);
  const [about, setAbout] = useState(profile.about);
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState<Array<string>>(profile.skills);

  const nameChange = ({ target }) => {
    setName(target.value);
  };

  const captionChange = ({ target }) => {
    setCaption(target.value);
  };

  const skillChange = (skills: Array<string>) => {
    setSkills(skills);
  };

  const aboutChange = (value) => {
    setAbout(value);
  }

  const bioChange = (value) => {
    setBio(value);
  }

  return (
    <div className="flex mt-10">
      <div className="flex-1 h-full pr-12">
        <div className="mb-10">
          <InputTitle
            placeholder="Name"
            className="text-6xl"
            onChange={nameChange}
            value={name}
          />
        </div>
        <div className="mb-10">
          <InputTitle
            onChange={captionChange}
            placeholder="text"
            className="text-3xl"
            value={caption}
          />
        </div>
        <div className="mb-10">
          <MyEditor onChange={bioChange} placeholder="Bio" value={bio} />
        </div>
        <div className="mb-10">
          <p className="mb-1">Tech Stack:</p>
          <SkillInput onChange={skillChange} skills={skills} />
        </div>
        <div className="mb-10">
          <MyEditor onChange={aboutChange} placeholder="About Us" value={about} />
        </div>
        <div>
          <Button text="Save" loading={loading} />
        </div>
      </div>
      <div className="w-1/3">
        <div className="relative">
          <div className="w-full h-full -z-10 absolute border-2 border-alt rounded-md top-4 left-4"></div>
          <div className="w-full">
            <img
              src="me.jpeg"
              alt="me"
              className="rounded-md block border-2 border-alt overflow-hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
