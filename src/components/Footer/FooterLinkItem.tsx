import { FooterLink } from "@/types/footer";
import Link from "next/link";

export default function FooterLinkItem({ linkItem }: { linkItem: FooterLink }) {
  return (
    <li>
      <Link
        href={linkItem?.href}
        target={linkItem?.external ? "_blank" : "_self"}
        className="inline-block text-base text-body-color hover:text-primary transition-colors duration-300 relative group"
      >
        <span className="relative inline-block pr-6">
          {linkItem?.title}
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </span>
      </Link>
    </li>
  );
}
