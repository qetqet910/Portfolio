import React, { useEffect, useLayoutEffect } from "react";
import LocalStorage from "../LocalStorage";
import mode from "../../styles/common/dot/mode.module.scss";
import ModeToggle from '../modeToggle';

const ToggleTheme = ({ changeTheme }) => {
  const setDark = React.useCallback(() => {
    localStorage.setItem("theme", "Dark");
    document.documentElement.setAttribute("data-theme", "Dark");
    if (changeTheme !== undefined) changeTheme();
  }, [changeTheme]);

  const setLight = React.useCallback(() => {
    localStorage.setItem("theme", "Light");
    document.documentElement.setAttribute("data-theme", "Light");
    if (changeTheme !== undefined) changeTheme(); 
  }, [changeTheme]);

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  };

  const storedTheme = LocalStorage.getItem("theme");

  let prefersDark;
  if(typeof window !== undefined) {
    prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: Dark)").matches;
  }

  const defaultDark = storedTheme === "Dark" || (storedTheme === null && prefersDark);

  useLayoutEffect(() => {
    if (defaultDark) {
      setDark()
    }else{
      setLight()
    }
  }, [setDark, setLight, defaultDark]);

  useEffect(() => {
    setTimeout(() => {
      if(defaultDark){
        document.querySelector('#__next header lottie-player').click();
      }else{
        return
      }
      document.querySelector('#__next header lottie-player').addEventListener('click', toggleTheme)
      console.log(document.querySelector('#__next header lottie-player'))
    }, 500);
  }, [defaultDark, toggleTheme])

  return (
    <>
    </>
  );
}


export default ToggleTheme;