"use client";
import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

const ChatWidget = () => {
  useEffect(() => {
    Crisp.configure(process.env.NEXT_PUBLIC_WEBSITE_ID!);
  }, []);

  return null;
};

export default ChatWidget;
