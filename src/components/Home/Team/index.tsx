import { teamData } from "@/static-data/team";
import SingleTeam from "./SingleTeam";

export default function Team() {
  // Separate the director (first team member) from the rest
  const director = teamData[0];
  const otherTeamMembers = teamData.slice(1);

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

        {/* Mobile Layout: Director (full width) + 2 team members in a row */}
        <div className="block sm:hidden">
          {/* Director at the top - full width */}
          <div className="mb-8">
            <SingleTeam key={director?.id} team={director} fullWidth={true} />
          </div>
          
          {/* Other team members in a 2-column layout */}
          <div className="flex justify-center gap-4">
            {otherTeamMembers.map((team) => (
              <div key={team?.id} className="w-1/2 max-w-[180px]">
                <SingleTeam team={team} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop/Tablet Layout (original) */}
        <div className="hidden sm:flex sm:flex-wrap sm:justify-center sm:gap-y-8">
          {teamData.map((team) => (
            <SingleTeam key={team?.id} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
}
