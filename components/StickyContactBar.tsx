import { MessageCircle, Phone } from "lucide-react";
import { doctor } from "@/lib/doctor";

export default function StickyContactBar() {
  const phoneHref = `tel:${doctor.contact.phone.replace(/\s/g, "")}`;
  const whatsappHref = `https://wa.me/${doctor.contact.whatsapp}?text=${encodeURIComponent(
    doctor.contact.whatsappMessage
  )}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(74,28,40,0.10)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">

        {/* Call */}
        <a
          href={phoneHref}
          className="flex items-center justify-center gap-2 rounded-full border border-[#6B2737] py-3 text-sm font-semibold text-[#6B2737] transition hover:bg-[#F6ECEE] active:bg-[#F6ECEE]"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full bg-[#6B2737] py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4A1C28] active:bg-[#4A1C28]"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>

      </div>
    </div>
  );
}
