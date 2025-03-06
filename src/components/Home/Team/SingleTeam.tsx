import { Team } from "@/types/team";
import Graphic from "./Graphic";

export default function SingleTeam({ team }: { team: Team }) {
  return (
    <div className="w-full px-4 md:w-1/2 xl:w-1/4">
      <div className="mx-auto mb-10 w-full max-w-[370px] transition-all duration-300 hover:translate-y-[-10px]">
        <div 
          className="relative aspect-[149/182] overflow-hidden rounded-xl shadow-lg"
          style={{
            background: `linear-gradient(to bottom right, ${team.gradient.from}, ${team.gradient.to})`
          }}
        >
          <div className="absolute bottom-6 left-0 w-full text-center">
            <div className="relative mx-5 overflow-hidden rounded-xl bg-white px-4 py-6 shadow-xl">
              <h3 className="text-lg font-bold text-dark mb-1">
                {team?.name}
              </h3>
              <p className="text-sm font-medium text-body-color tracking-wide">{team?.designation}</p>
              <Graphic />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
