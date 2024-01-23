import { atom } from "nanostores";

export const isOpen = atom(window.innerWidth > 800 ? true : false);
// as the screen gets resized, we want to change whether the sidebar is shown or not
// // but we also want to give the user the ability to open and close it at any screen size as well, so we can't just focus on media breaks for this behavior

export const userClicked = atom(false);
