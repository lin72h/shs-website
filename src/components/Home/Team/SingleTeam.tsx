import { Team } from "@/types/team";
import Graphic from "./Graphic";

interface SingleTeamProps {
  team: Team;
  fullWidth?: boolean;
}

export default function SingleTeam({ team, fullWidth = false }: SingleTeamProps) {
  return (
    <div className={`w-full px-4 ${!fullWidth ? 'md:w-1/2 xl:w-1/4' : ''}`}>
      <div className="mx-auto mb-10 w-full max-w-[370px] transition-all duration-300 hover:translate-y-[-10px]">
        <div 
          className="relative aspect-square overflow-hidden rounded-xl shadow-lg"
          style={{
            background: `linear-gradient(to bottom right, ${team.gradient.from}, ${team.gradient.to})`
          }}
        >
          <div className={`absolute inset-x-0 ${fullWidth ? 'top-[10%]' : 'top-1/4'} bottom-0 flex flex-col justify-end`}>
            <div className="relative mx-3 sm:mx-5 mb-3 sm:mb-6 overflow-hidden rounded-xl bg-white px-3 sm:px-4 py-4 sm:py-6 shadow-xl">
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
