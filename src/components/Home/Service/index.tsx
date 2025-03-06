import SectionTitle from "@/components/Common/SectionTitle";
import { serviceData } from "@/static-data/service";
import Link from "next/link";
import SingleService from "./SingleService";

export default function Service() {
  return (
    <section
      id="services"
      className="bg-black pb-20 pt-24 lg:pb-28 lg:pt-32"
    >
      <div className="container max-w-7xl mx-auto px-6">
        <div className="-mx-4 mb-14 flex flex-wrap items-end lg:mb-16">
          <div className="w-full px-4 lg:w-8/12">
            <SectionTitle
              mainTitle="WHAT WE DO"
              title="We help to build clients their dream projects"
              width="625px"
              color="white"
            />
          </div>
          <div className="w-full px-4 lg:w-4/12">
            <div className="mb-12 flex lg:justify-end">
              <Link
                href="/service"
                className="text-lg font-medium text-white underline hover:text-primary transition-colors duration-300"
              >
                EXPLORE SERVICES
              </Link>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap gap-y-8">
          {serviceData.map((service) => (
            <SingleService key={service?.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
