import React from "react";
import {
  BackgroundPhoto,
  BackgroundCover,
  AccountContainer,
  AuthButton,
} from "./account.styles";
import { Spacer } from "../../components/spacer/spacer.component";

const AccountScreen = ({ navigation }) => {
  debugger;
  console.log("I am here");
  return (
    <BackgroundPhoto>
      <BackgroundCover />
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </BackgroundPhoto>
  );
};

export default AccountScreen;
