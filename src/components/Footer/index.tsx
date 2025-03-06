import {
  footerLinks,
  footerNewsData,
  footerQuickLinks,
} from "@/static-data/footer";
import FooterBottom from "./FooterBottom";
import FooterContact from "./FooterContact";
import FooterLinkItem from "./FooterLinkItem";
import Graphic from "./Graphic";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-black pb-16 pt-28">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="-mx-4 flex flex-wrap gap-y-10">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12">
            <FooterContact />
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-3/12">
            <div className="mb-10">
              <h3 className="mb-8 text-xl font-bold text-white">
                Our Services
              </h3>
              <ul className="space-y-4">
                {footerLinks.map((linkItem) => (
                  <FooterLinkItem key={linkItem?.id} linkItem={linkItem} />
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-2/12">
            <div className="mb-10">
              <h3 className="mb-8 text-xl font-bold text-white">News</h3>
              <ul className="space-y-4">
                {footerNewsData.map((linkItem) => (
                  <FooterLinkItem key={linkItem?.id} linkItem={linkItem} />
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-3/12">
            <div className="mb-10">
              <h3 className="mb-8 text-xl font-bold text-white">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {footerQuickLinks.map((linkItem) => (
                  <FooterLinkItem key={linkItem?.id} linkItem={linkItem} />
                ))}
              </ul>
            </div>
          </div>
        </div>

        <FooterBottom />
      </div>

      <Graphic />
    </footer>
  );
}
