import { FieldValues, useForm } from "react-hook-form";
import {
  AdminBookingInfoSchema,
  adminBookingInfoSchema,
} from "../../../schemas/adminBookingInfoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "../../styled/Inputs";
import { FormWrapper } from "../../styled/Wrappers";
import { SaveButton } from "../../styled/Admin";

interface IAdminBookingInfoProps {
  onSubmit: (data: FieldValues) => void;
}

export const AdminNewBookingInfo = (props: IAdminBookingInfoProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AdminBookingInfoSchema>({
    resolver: zodResolver(adminBookingInfoSchema),
  });

  return (
    <FormWrapper onSubmit={handleSubmit(props.onSubmit)}>
      <FormInput {...register("date")} type="date" placeholder="2020-02-20" />
      {errors.date && <p>{`${errors.date.message}`}</p>}

      <FormInput {...register("time")} type="time" placeholder="00:00" />
      {/* {errors.time && <p>{`${errors.time}`}</p>} */}

      <FormInput
        {...register("numberOfGuests")}
        type="number"
        placeholder="1-90"
      />
      {errors.numberOfGuests && <p>{`${errors.numberOfGuests.message}`}</p>}

      <SaveButton type="submit" disabled={isSubmitting}>
        Continue
      </SaveButton>
    </FormWrapper>
  );
};
