import SectionTitle from "@/components/Common/SectionTitle";
import { serviceData } from "@/static-data/service";
import Link from "next/link";
import SingleService from "./SingleService";

export default function Service() {
  return (
    <section
      id="services"
      className="bg-black pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="-mx-4 mb-10 flex flex-wrap items-end lg:mb-[60px]">
          <div className="w-full px-4 lg:w-8/12">
            <SectionTitle
              mainTitle="WHAT WE DO"
              title="We help to build clients their dream projects"
              width="625px"
              color="white"
            />
          </div>
          <div className="w-full px-4 lg:w-4/12">
            <div className="mb-[50px] flex lg:justify-end">
              <Link
                href="/service"
                className="text-lg font-medium text-white underline hover:text-primary"
              >
                EXPLORE SERVICES
              </Link>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {serviceData.map((service) => (
            <SingleService key={service?.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
