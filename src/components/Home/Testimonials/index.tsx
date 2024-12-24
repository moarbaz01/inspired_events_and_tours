"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    ElfsightPlatform:
      | {
          load: () => void;
        }
      | undefined;
  }
}

const GoogleReviews = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.onload = () => {
      if (window.ElfsightPlatform) {
        window.ElfsightPlatform.load();
      }
      setIsLoading(false); // Set loading state to false once the widget is loaded
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="py-12 px-4 md:px-6">
      {isLoading && (
        <div className="flex justify-center h-[60vh] items-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="loader"></span>
            <p className="text-center text-gray-500 mt-4">Reviews Loading...</p>
          </div>
        </div>
      )}
      <div
        className={process.env.NEXT_PUBLIC_ELFSIGHT_API!}
        style={{ display: isLoading ? "none" : "block" }}
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default GoogleReviews;
