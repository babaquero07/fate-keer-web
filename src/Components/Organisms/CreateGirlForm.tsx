import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../Atoms/Input";
import InputError from "../Atoms/InputError";
import Button from "../Atoms/Button";
import { CreateMagicalGirl } from "../../interfaces/MagicalGirl";

enum StatusEnum {
  Active = "Active",
  Disappeared = "Disappeared",
  Rescued = "Rescued",
}

type Inputs = {
  name: string;
  age: string;
  origin_city: string;
  status: StatusEnum;
  contract_date: string;
};

interface CreateGirlFormProps {
  onSaveMagicalGirl: (magicalGirl: CreateMagicalGirl) => void;
  isLoading: boolean;
}

const CreateGirlForm = ({
  onSaveMagicalGirl,
  isLoading,
}: CreateGirlFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onSaveMagicalGirl({
      ...data,
      age: +data.age,
    });
  };

  return (
    <form
      className="flex flex-col gap-4 min-w-[320px] w-[460px] rounded-[11px] py-4 px-8 bg-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <label>Name</label>
        <Input
          type="text"
          placeholder="Girl name"
          {...register("name", { required: true, maxLength: 255 })}
        />

        {errors.name && <InputError error="Name is required*" />}
        {errors.name?.type === "maxLength" && (
          <InputError error="Name cannot be more than 255 characters" />
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label>Age</label>
        <Input
          type="string"
          placeholder="Girl age"
          {...register("age", { required: true })}
        />
        {errors.age && <InputError error="Age is required*" />}
      </div>

      <div className="flex flex-col gap-2">
        <label>Origin City</label>
        <Input
          type="text"
          placeholder="Origin City"
          {...register("origin_city", { required: true, maxLength: 255 })}
        />
        {errors.origin_city && <span>Origin City is required*</span>}
        {errors.origin_city?.type === "maxLength" && (
          <InputError error="Origin City cannot be more than 255 characters" />
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label>Status</label>
        <select
          {...register("status", { required: true })}
          className="p-2 border-2 border-gray-300 rounded-md cursor-pointer"
        >
          <option value="">Select a status</option>
          <option value="Active">Active</option>
          <option value="Disappeared">Disappeared</option>
          <option value="Rescued">Rescued</option>
        </select>
        {errors.status && <InputError error="Status is required*" />}
      </div>

      <div className="flex flex-col gap-2">
        <label>Contract Date</label>
        <Input
          type="date"
          className="cursor-pointer"
          {...register("contract_date", { required: true })}
        />
        {errors.contract_date && (
          <InputError error="Contract Date is required*" />
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        className="border-2 border-solid border-black"
        isLoading={isLoading}
      >
        Create
      </Button>
    </form>
  );
};

export default CreateGirlForm;
