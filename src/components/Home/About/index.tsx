import Graphic from "./Graphic";
import SocialLinks from "./SocialLinks";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 bg-white pb-28 pt-24 lg:pt-32"
    >
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center">
          <div className="mb-12 w-full px-4 lg:mb-0 lg:w-1/2 xl:w-7/12">
            <span className="mb-4 inline-block text-lg font-bold text-primary md:text-xl tracking-wide">
              ABOUT US
            </span>
            <h2 className="mb-6 max-w-[540px] text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl md:leading-tight">
              Better design, better experience
            </h2>
            <p className="max-w-[570px] text-lg font-medium leading-relaxed text-body-color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dui ligula, malesuada vel convallis in, tincidunt ut mi Vestibulum
              sit amet.
            </p>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="mb-6 text-2xl font-bold text-black md:text-3xl">
                Connect With Us
              </h3>
              <p className="mb-10 text-lg font-medium leading-relaxed text-body-color">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui ligula, malesuada vel convallis in, tincidunt ut mi.
                Vestibulum sit amet urna placerat, tempor soloa demanium testi lor
                Aliq lorem vitae semper tempor.
              </p>

              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      <Graphic />
    </section>
  );
}
