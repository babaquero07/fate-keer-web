import { useEffect, useMemo } from "react";
import { useParams } from "react-router";
import useMagicalGirls from "../../hooks/useMagicalGirls";
import MagicGirlCard from "../Molecules/MagicGirlCard";

const MagicGirl = () => {
  const { id } = useParams();
  const { getMagicalGirlById, magicalGirl, isLoading, error, saveStatus } =
    useMagicalGirls();

  useEffect(() => {
    getMagicalGirlById(id as string);
  }, [id]);

  const showLogs = useMemo(() => {
    return magicalGirl?.status_logs?.length > 0;
  }, [magicalGirl]);

  const handleSaveStatus = (status: string) => {
    if (magicalGirl?.status !== status) {
      saveStatus(id as string, status);
    }
  };

  // TODO: Create a loading component
  if (isLoading) return <div>Loading...</div>;

  // TODO: Create a error component
  if (error)
    return (
      <div className="flex justify-center items-center h-[calc(100vh-200px)]">
        <h1 className="text-red-500 text-center text-[36px] font-bold">
          {error.message}
        </h1>
      </div>
    );

  return (
    <div className="flex justify-center items-center h-[calc(100vh-200px)]">
      {magicalGirl && (
        <MagicGirlCard
          girl={magicalGirl}
          showLogs={showLogs}
          editableStatus
          handleSaveStatus={handleSaveStatus}
        />
      )}
    </div>
  );
};

export default MagicGirl;
