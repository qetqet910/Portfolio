import React, { useLayoutEffect } from "react";
import LocalStorage from "../LocalStorage";
import mode from "../../styles/common/dot/mode.module.scss";

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
      <input type="checkbox" id="toggle" className={mode.toggle_checkbox} onClick={toggleTheme} defaultChecked={defaultDark} />
      <label htmlFor="toggle" className={mode.toggle_label}>
        <span className="toggle--label-background"></span>
      </label>
    </>
  );
}


export default ToggleTheme;