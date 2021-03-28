import React, { useState, useContext, useEffect } from "react";

import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { ActivityIndicator, Colors } from "react-native-paper";

import {
  BackgroundPhoto,
  BackgroundCover,
  AccountInput,
  LoginContainer,
  AuthButton,
  AccountContainer,
  ErrorContainer,
} from "./account.styles";
import { Spacer } from "../../components/spacer/spacer.component";
import { Text } from "../../components/typography/text.component";

const RegisterScreen = ({ navigation }) => {
  // Use TextInput field from react native paper
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

  return (
    <BackgroundPhoto>
      <BackgroundCover />
      <Text>Meals To Go</Text>
      <LoginContainer>
        <AccountContainer>
          <AccountInput
            label="E-mail"
            autoCapitalize={"none"}
            autoCorrect={false}
            textContentType="emailAddress"
            keyboardType="email-address"
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
          <Spacer size="large" />
          <AccountInput
            label="Password"
            autoCapitalize={"none"}
            autoCorrect={false}
            textContentType="password"
            secureTextEntry
            value={password}
            onChangeText={(p) => setPassword(p)}
          />
          <Spacer size="large" />
          <AccountInput
            label="Repeat Password"
            autoCapitalize={"none"}
            autoCorrect={false}
            textContentType="password"
            secureTextEntry
            value={repeatedPassword}
            onChangeText={(rp) => setRepeatedPassword(rp)}
          />
          {error && (
            <Spacer size="large">
              <ErrorContainer>
                <Text variant="error">{error}</Text>
              </ErrorContainer>
            </Spacer>
          )}
          <Spacer size="large">
            {!isLoading ? (
              <AuthButton
                icon="email"
                mode="contained"
                onPress={() => onRegister(email, password, repeatedPassword)}
              >
                Register
              </AuthButton>
            ) : (
              <ActivityIndicator animating={true} color={Colors.blue300} />
            )}
          </Spacer>
        </AccountContainer>
      </LoginContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </BackgroundPhoto>
  );
};

export default RegisterScreen;
