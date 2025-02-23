import { useState } from "react";
import Button from "../Atoms/Button";
import { FaPencil } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import StatusSelect from "./StatusSelect";
import Separator from "../Atoms/Separator";

interface EditStatusActionsProps {
  onSaveStatus: (status: string) => void;
}

const EditStatusActions = ({ onSaveStatus }: EditStatusActionsProps) => {
  const [showEditAction, setshowEditAction] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Active");

  return (
    <div className="flex flex-col gap-4">
      <Separator />
      <div className="flex justify-between items-center">
        {/* Editar status */}
        <Button
          variant="secondary"
          size="md"
          text="Edit Status"
          className="flex items-center gap-2"
          onClick={() => setshowEditAction(!showEditAction)}
        >
          <FaPencil className="text-[16px]" />
          <span>Edit Status</span>
        </Button>

        {showEditAction && (
          <StatusSelect
            value={selectedStatus}
            onChange={setSelectedStatus}
            className="w-[150px]"
          />
        )}
      </div>

      {showEditAction && (
        <Button
          variant="secondary"
          size="md"
          text="Save"
          className="w-full flex items-center gap-2 justify-center"
          onClick={() => onSaveStatus(selectedStatus)}
        >
          <FaSave className="text-[16px]" />
          <span>Save</span>
        </Button>
      )}
    </div>
  );
};

export default EditStatusActions;
