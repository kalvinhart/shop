import { Dispatch, SetStateAction } from "react";

import { SpanError } from "../../../common/styles";
import { Input, InputGroup, InputsFlexWrapper, Label } from "../../../common/styles";
import {
  CheckoutAddressFormButtonWrapper,
  CheckoutAddressFormWrapper,
} from "./CheckoutAddressForm.styles";
import {
  CheckoutAddressFormData,
  useCheckoutAddressForm,
} from "../hooks/useCheckoutAddressForm";
import { Button } from "../../../common/components/Button";

type CheckoutFormProps = {
  addressData: CheckoutAddressFormData;
  setAddressData: Dispatch<SetStateAction<CheckoutAddressFormData>>;
  changeStep: (val: number) => void;
};

const CheckoutAddressForm = ({
  addressData,
  setAddressData,
  changeStep,
}: CheckoutFormProps) => {
  const { register, errors, submitForm } = useCheckoutAddressForm(
    addressData,
    setAddressData,
    changeStep
  );

  return (
    <CheckoutAddressFormWrapper>
      <form aria-label="Checkout Form" onSubmit={submitForm}>
        <InputsFlexWrapper>
          <InputGroup>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              id="firstName"
              {...register("firstName", { required: true, minLength: 2 })}
            />
            {errors.firstName && (
              <SpanError>This field requires at least 2 characters.</SpanError>
            )}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              type="text"
              id="lastName"
              {...register("lastName", { required: true, minLength: 2 })}
            />
            {errors.lastName && (
              <SpanError>This field requires at least 2 characters.</SpanError>
            )}
          </InputGroup>
        </InputsFlexWrapper>

        <InputGroup>
          <Label htmlFor="address1">Address Line 1</Label>
          <Input
            type="text"
            id="address1"
            {...register("address1", { required: true })}
          />
          {errors.address1 && <SpanError>This field is required.</SpanError>}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="address2">Address Line 2</Label>
          <Input type="text" id="address2" {...register("address2")} />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="city">City</Label>
          <Input type="text" id="city" {...register("city", { required: true })} />
          {errors.city && <SpanError>This field is required.</SpanError>}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="state">County</Label>
          <Input type="text" id="state" {...register("state")} />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="postalCode">Postal Code</Label>
          <Input
            type="text"
            id="postalCode"
            {...register("postalCode", { required: true })}
          />
          {errors.postalCode && <SpanError>This field is required.</SpanError>}
        </InputGroup>

        <CheckoutAddressFormButtonWrapper>
          <Button variant="secondary" onClick={() => changeStep(1)}>
            Back
          </Button>
          <Button variant="primary">Next</Button>
        </CheckoutAddressFormButtonWrapper>
      </form>
    </CheckoutAddressFormWrapper>
  );
};

export default CheckoutAddressForm;
