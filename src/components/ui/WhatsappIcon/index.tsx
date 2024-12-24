import { SocialIcon } from "react-social-icons";

const WhatsappIcon = () => {
  return (
    <div className="fixed md:bottom-[92px] bottom-20 md:h-[60px] md:w-[60px] h-[54px] w-[54px] z-50 cursor-pointer hover:opacity-80 md:right-6 right-4">
      <SocialIcon
        network="whatsapp"
        url="https://api.whatsapp.com/send/?phone=447895961091&text&type=phone_number&app_absent=0"
        target="blank"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default WhatsappIcon;
