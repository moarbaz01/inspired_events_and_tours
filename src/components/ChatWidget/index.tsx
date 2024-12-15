"use client";
import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

declare global {
  interface Window {
    $crisp: any;
  }
}

const ChatWidget = () => {
  useEffect(() => {
    Crisp.configure("d6aa439f-4e32-44da-a439-1fb8ad6005c7");
  }, []);

  return null;
};

export default ChatWidget;
