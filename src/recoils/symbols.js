import { atom } from "recoil";

export const allSymbolListsAtom = atom({
  key: "allSymbolLists",
  default: undefined,
});

export const userAddedAllSymbolListsAtom = atom({
  key: "userAddedAllSymbolLists",
  default: undefined,
});
