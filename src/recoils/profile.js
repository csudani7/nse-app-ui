import { atom, selector } from "recoil";

export const userProfileData = atom({
  key: "userProfileData",
  default: undefined,
});

export const userAmount = selector({
  key: "userAmount",
  get: ({ get }) => {
    const profileData = get(userProfileData);
    if (profileData) {
      return profileData?.credit;
    }
    return undefined;
  },
});

export const userInitial = selector({
  key: "userInitial",
  get: ({ get }) => {
    const profileData = get(userProfileData);
    if (profileData) {
      const fullName = profileData?.full_name?.split(" ");
      return fullName.shift().charAt(0) + fullName.pop().charAt(0);
    }
    return undefined;
  },
});
