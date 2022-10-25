import React, { useLayoutEffect } from "react";
import { AnimationAction } from "three";
import LocalStorage from "../LocalStorage";
import styles from '../../styles/Home.module.scss'

// import { Player } from "@lottiefiles/react-lottie-player"
// import changeThemeLottie from '../../public/lottie/changeTheme.json';

const ToggleTheme = ({ changeTheme }:any) => {
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

  const toggleTheme = (e:any) => {
    // playerRef.current?.play();
    // setTimeout(() => {
    //   playerRef.current?.pause();      
    // }, 1100);
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

  return (
    <>
      <input
        className={styles.toggleItem}
        type="checkbox"
        id="toggle" 
        onClick={toggleTheme}
        defaultChecked={defaultDark}
      />
      <label htmlFor="toggle"></label>
    </>
  );
}


export default ToggleTheme;