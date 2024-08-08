import LanguageIcon from "@/assets/icons/language-icon";
import LocationIcon from "@/assets/icons/location-icon";
import NotificationIcon from "@/assets/icons/notification-icon";
import { MenuOption } from "@/components/ui/menu-option";


export default function Settings() {
  
  return (
    <div className="bg-white text-black">
        <MenuOption  icon={<LanguageIcon />} option="Notifications" />
        <MenuOption icon={<NotificationIcon />} option="Language" />
        <MenuOption icon={<LocationIcon />} option="Location" />
      </div>   
  );
}
