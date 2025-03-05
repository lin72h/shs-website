"use client";

import { portfolioData } from "@/static-data/portfolio";
import { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SectionTitle from "../Common/SectionTitle";
import SinglePortfolio from "./SinglePortfolio";

export default function Portfolio() {
  const [activeTag, setActiveTag] = useState("All");
  const [items, setItems] = useState(portfolioData);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const allTag = Array.from(
    new Set(portfolioData.flatMap((item) => item.tags)),
  );

  const filterItems = (itemTag: any) => {
    setActiveTag(itemTag);
    if (itemTag === "All") {
      return setItems(portfolioData);
    } else {
      const findItems = portfolioData.filter((findItem) => {
        return findItem.tags.includes(itemTag);
      });
      setItems(findItems);
    }
  };

  return (
    <section id="portfolio" className="bg-[#f8f9ff] pb-[70px] pt-[120px]">
      <div className="container">
        <div className="mx-[-16px] flex flex-wrap">
          <div className="w-full px-4">
            <SectionTitle
              mainTitle="Creative Portfolio"
              title="Recent Works"
              paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
              center
            />
          </div>
          <div className="w-full px-4">
            <div className="portfolio-buttons mb-12 flex flex-wrap items-center justify-center">
              <button
                className={`${activeTag === "All" ? "active" : "hover:bg-primary/5 hover:text-primary"} mb-2 block rounded-full px-5 py-2 text-sm text-body-color sm:text-base sm:font-semibold md:mx-2`}
                onClick={() => filterItems("All")}
              >
                All
              </button>
              {allTag.map((tag: any, i: any) => (
                <button
                  key={i}
                  className={`${activeTag === tag ? "active" : "hover:bg-primary/5 hover:text-primary"} mb-2 block rounded-full px-5 py-2 text-sm capitalize text-body-color sm:text-base sm:font-semibold md:mx-2`}
                  onClick={() => filterItems(`${tag}`)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="portfolio-container -mx-4 flex justify-center">
          <div className="w-full px-4 xl:w-10/12">
            {mounted ? (
              <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
                <Masonry gutter="30px">
                  {items.map((portfolio) => (
                    <SinglePortfolio key={portfolio?.id} portfolio={portfolio} />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 2xl:grid-cols-3">
                {items.map((portfolio) => (
                  <SinglePortfolio key={portfolio?.id} portfolio={portfolio} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
