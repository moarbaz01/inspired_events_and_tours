"use client";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const ChatWidget = () => {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_WEBSITE_ID) {
      Crisp.configure(process.env.NEXT_PUBLIC_WEBSITE_ID);
    } else {
      console.error("Crisp website ID is not set!");
    }
  }, []);

  return null;
};

export default ChatWidget;
