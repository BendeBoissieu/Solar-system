import React from "react";
import Lottie from "react-lottie";
import * as location from "images/loader/planet-and-stars.json";

export function Loading() {

  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: location.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="loading">
      <Lottie options={defaultOptions1} height={200} width={200} />
    </div>
  )
}
