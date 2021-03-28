import React from "react";
import {
  BackgroundPhoto,
  BackgroundCover,
  AccountContainer,
  AuthButton,
  AnimationWrapper,
} from "./account.styles";
import { Spacer } from "../../components/spacer/spacer.component";
import LottieView from "lottie-react-native";

const AccountScreen = ({ navigation }) => {
  return (
    <BackgroundPhoto>
      <BackgroundCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
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
