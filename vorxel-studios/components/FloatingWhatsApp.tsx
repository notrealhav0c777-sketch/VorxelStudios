import WaButton from "./WaButton";
import { WhatsAppIcon } from "./Icons";

export default function FloatingWhatsApp() {
  return (<WaButton className="fab" label="Conversar no WhatsApp"><WhatsAppIcon size={24} /></WaButton>);
}
