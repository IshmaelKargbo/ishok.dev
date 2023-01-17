export interface Profile {
  name: string;
  caption: string;
  skills: Array<string>;
  bio: string;
  about: string;
}

export const nProfile: Profile = {
  about: "",
  bio: "",
  caption: "",
  name: "",
  skills: [],
};

export interface AllProfileResponse {
  status: string;
  data: [Profile];
}
