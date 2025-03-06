import { teamData } from "@/static-data/team";
import SingleTeam from "./SingleTeam";

export default function Team() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-[600px] text-center">
              <h2 className="mb-5 text-3xl font-bold text-dark sm:text-4xl md:text-[42px] leading-tight tracking-tight">
                Our Engineering Team
              </h2>
              <p className="text-lg text-body-color leading-relaxed">
                Our specialized team of engineers, planners, and technical specialists brings decades of combined experience to deliver precise, innovative solutions for complex projects.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center gap-y-8">
          {teamData.map((team) => (
            <SingleTeam key={team?.id} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
}
