import PageTitle from "@/components/Common/PageTitle";
import Contact from "@/components/Contact";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Contact Our Engineering Team | ${siteName}`,
  description: "Connect with SHS Engineering for professional civil engineering and infrastructure project consultation",
  // other metadata
};

export default function ContactPage() {
  return (
    <>
      <PageTitle
        pageTitle="Contact Us"
        pageDescription="Reach out to discuss your engineering requirements. Our team of qualified professionals is ready to assist with your infrastructure and development projects."
      />

      <Contact />
    </>
  );
}
