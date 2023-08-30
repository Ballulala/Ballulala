import { useCallback } from "react";

const useRegionFilter = (teams, filteredTeams, setFilteredTeams) => {
  const filterByGugun = useCallback(
    (gugun) => {
      setFilteredTeams(teams.filter((team) => team.gugun === gugun));
    },
    [teams]
  );

  const clearFilter = useCallback(() => {
    setFilteredTeams(teams);
  }, [teams]);

  return { filterByGugun, clearFilter };
};

export default useRegionFilter;
