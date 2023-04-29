import { AccountPageWrapper } from "./AccountPage.styles";

import { H2 } from "../../common/styles";
import { usePageTitle } from "../../common/hooks/usePageTitle";

const AccountPage = () => {
  usePageTitle("Your Account");

  return (
    <AccountPageWrapper>
      <H2>Your Account</H2>
    </AccountPageWrapper>
  );
};

export default AccountPage;
