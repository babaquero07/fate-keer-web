import { MagicalGirl } from "../../interfaces/MagicalGirl";

const MagicGirlCard = ({ girl }: { girl: MagicalGirl }) => {
  return (
    <div
      key={girl.id}
      className="p-4 border-6 border-[#020202] rounded-[8px] bg-white cursor-pointer hover:bg-gray-100"
    >
      <h2 className="text-2xl font-bold text-center">{girl.name}</h2>
      <p>Age: {girl.age}</p>
      <p>Origin: {girl.origin_city}</p>
      <p>Status: {girl.status}</p>
      <p>Contract Date: {girl.contract_date}</p>
      <p>Created At: {girl.created_at}</p>
    </div>
  );
};

export default MagicGirlCard;
