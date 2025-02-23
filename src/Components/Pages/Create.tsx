import useMagicalGirls from "../../hooks/useMagicalGirls";
import CreateGirlForm from "../Organisms/CreateGirlForm";

const Create = () => {
  const { createMagicalGirl, isLoading } = useMagicalGirls();

  return (
    <div className="flex flex-col justify-center items-center h-[80vh] gap-8">
      <h1 className="text-2xl font-bold text-white">Create Magical Girl</h1>

      <CreateGirlForm
        onSaveMagicalGirl={createMagicalGirl}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Create;
