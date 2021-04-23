import { atom } from "recoil";

export const userProfileData = atom({
  key: "userProfileData",
  default: undefined,
});

export const userToken = atom({
  key: "userToken",
  default: undefined,
});
