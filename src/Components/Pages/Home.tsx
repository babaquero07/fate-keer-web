import { useEffect } from "react";
import useMagicalGirls from "../../hooks/useMagicalGirls";
import StatusFilter from "../Molecules/StatusFilter";
import MagicalGirlsList from "../Organisms/MagicalGirlsList";
import {
  FILTER_STATUS_OPTIONS,
  FilterStatusOption,
} from "../../utils/constants";
import Loading from "../Atoms/Loading";

const Home = () => {
  const { getMagicalGirls, magicalGirls, isLoading, error, filterByStatus } =
    useMagicalGirls();

  useEffect(() => {
    getMagicalGirls();
  }, []);

  if (isLoading) return <Loading />;

  if (error && error.name !== "AbortError") {
    return alert(error.message);
  }

  return (
    <section>
      <h1 className="text-4xl font-bold text-center text-white">
        List of Magical Girls
      </h1>

      <div className="w-full flex justify-start">
        <StatusFilter
          options={FILTER_STATUS_OPTIONS}
          onChange={(value) => filterByStatus(value as FilterStatusOption)}
          className="text-white"
        />
      </div>

      <MagicalGirlsList girls={magicalGirls} />
    </section>
  );
};

export default Home;
