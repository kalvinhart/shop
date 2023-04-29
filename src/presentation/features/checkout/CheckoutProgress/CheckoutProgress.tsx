import {
  CheckoutProgressWrapper,
  ProgressNumberWrapper,
  ProgressSpan,
} from "./CheckoutProgress.styles";

type Props = {
  progressStep: number;
};

const CheckoutProgress = ({ progressStep }: Props) => {
  return (
    <CheckoutProgressWrapper>
      <ProgressNumberWrapper>
        <ProgressSpan step={1} currentStep={progressStep}>
          1
        </ProgressSpan>
        <ProgressSpan step={2} currentStep={progressStep}>
          2
        </ProgressSpan>
        <ProgressSpan step={3} currentStep={progressStep}>
          3
        </ProgressSpan>
      </ProgressNumberWrapper>
    </CheckoutProgressWrapper>
  );
};

export default CheckoutProgress;
