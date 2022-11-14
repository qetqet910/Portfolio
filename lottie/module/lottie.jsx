import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
import { create } from "@lottiefiles/lottie-interactivity";
import stylesToggle from '../../../styles/common/components/mode.module.scss'
import LocalStorage from "../../../components/LocalStorage";

export default function LottieContainer({changeTheme}) {
  const ref = useRef(null);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
    
    const handleInteraction = () => {
      create({
        player: "#modeToggle",
        mode: "cursor",
        actions: [
          {
            type: "toggle",
          }
        ]
      });
    };
    const handleTransition = (e) => {
      if (e.detail.newIndex === 1) {
        // setMode("dark");
        console.log('dark');
      } else if (e.detail.newIndex === 3) {
        // setMode("light");
        console.log('light');
      }
    };
    ref.current?.addEventListener("load", handleInteraction);
    ref.current?.addEventListener(
      "transition",
      handleTransition
    );

    return () => {
      ref.current?.removeEventListener(
        "load",
        handleInteraction
      );
      ref.current?.removeEventListener(
        "transition",
        handleTransition
      );
    };
  });

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
  useEffect(() => {
    prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: Dark)").matches;
  }, [prefersDark]);

  const defaultDark = storedTheme === "Dark" || (storedTheme === null && prefersDark);

  let toggleCnt = 0
  // 0 White 1 Dark

  useLayoutEffect(() => {
    if (defaultDark) {
      setDark()
      toggleCnt = 1
    }else{
      setLight()
      toggleCnt = 0
    }
  }, [setDark, setLight, defaultDark]);

  useEffect(() => {
    setTimeout(() => {      
      if(toggleCnt == 1){
        ref.current.click();
      }
      ref.current.shadowRoot.querySelector('svg').style.transform = 'scale(1.8)'
      ref.current.onclick = () => {
        if(toggleCnt == 0){
          setDark();
          toggleCnt += 1
          console.log(toggleCnt);
        }else if(toggleCnt == 1){
          setLight();
          toggleCnt -= 1
          console.log(toggleCnt);
        }
      }
    }, 500);
  }, [])

  return (
    <div>
        <lottie-player
        id="modeToggle"
        class={stylesToggle.animation}
        ref={ref}
        mode="normal"
        src="../lottie/toggle.json"
      ></lottie-player>
    </div>
  );
}
