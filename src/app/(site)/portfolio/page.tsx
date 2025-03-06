import PageTitle from "@/components/Common/PageTitle";
import SinglePortfolio from "@/components/Portfolio/SinglePortfolio";
import { portfolioData } from "@/static-data/portfolio";

import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Engineering Projects Portfolio | ${siteName}`,
  description: "Explore our portfolio of civil engineering projects across Auckland, including infrastructure development, stormwater management, and residential subdivisions.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageTitle
        pageTitle="Engineering Projects Portfolio"
        pageDescription="Browse our completed civil engineering and infrastructure projects across Auckland. Each project showcases our commitment to quality, innovation, and sustainable development."
      />

      <section className="bg-white pb-20 pt-[90px]">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 2xl:grid-cols-3">
            {portfolioData.map((portfolio) => (
              <SinglePortfolio key={portfolio?.id} portfolio={portfolio} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
