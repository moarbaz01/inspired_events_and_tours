"use client";
import { useEffect } from "react";

interface TawkAPIType {
  onLoaded: () => void;
  showWidget: () => void;
  hideWidget: () => void;
}

// Define types for the Tawk API and the window object to avoid using `any`
declare global {
  interface Window {
    Tawk_API?: TawkAPIType; // Specify more specific types if possible, like `TawkAPIType`
    Tawk_LoadStart?: Date;
  }
}

const ChatWidget: React.FC = () => {
  useEffect(() => {
    // Explicitly typing Tawk_LoadStart as a Date
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/6753396d2480f5b4f5a8f29c/1ieehgm9p";
    script.setAttribute("crossorigin", "*");

    // Append the script tag to the document
    const firstScriptTag = document.getElementsByTagName("script")[0];
    if (firstScriptTag?.parentNode) {
      firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
    }

    return () => {
      script.remove();
      delete window.Tawk_API;
      delete window.Tawk_LoadStart;
    };
  }, []);

  return null;
};

export default ChatWidget;
