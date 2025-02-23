import { IoDocumentOutline } from "react-icons/io5";
import { MagicalGirl } from "../../interfaces/MagicalGirl";
import Separator from "../Atoms/Separator";
import EditStatusActions from "./EditStatusActions";

interface MagicGirlCardProps {
  girl: MagicalGirl;
  showLogs?: boolean;
  editableStatus?: boolean;
  handleSaveStatus?: (status: string) => void;
}

const MagicGirlCard = ({
  girl,
  showLogs = false,
  editableStatus = false,
  handleSaveStatus,
}: MagicGirlCardProps) => {
  return (
    <div
      key={girl.id}
      className="p-4 border-6 border-[#020202] rounded-[8px] bg-white hover:bg-gray-100 min-w-[330px]"
    >
      <h2 className="text-2xl font-bold text-center">{girl.name}</h2>
      <p>Age: {girl.age}</p>
      <p>Origin: {girl.origin_city}</p>
      <p>Status: {girl.status}</p>
      <p>Contract Date: {girl.contract_date}</p>
      <p>Created At: {girl.created_at}</p>

      {showLogs && (
        <>
          <Separator />
          <div>
            <div className="flex items-center gap-2">
              <IoDocumentOutline className="text-blue-950 text-[20px]" />
              <h3 className="text-blue-950 text-[20px]">Status Logs:</h3>
            </div>
            <ul className="list-disc list-inside p-4">
              {girl.status_logs?.map((log) => (
                <li key={log.id} className="text-[14px] font-bold">
                  {log.observation} - {log.created_at}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {editableStatus && handleSaveStatus && (
        <EditStatusActions onSaveStatus={handleSaveStatus} />
      )}
    </div>
  );
};

export default MagicGirlCard;
