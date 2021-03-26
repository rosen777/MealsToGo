import React, { useState } from "react";
import {
  BackgroundPhoto,
  BackgroundCover,
  AccountContainer,
  AccountInput,
} from "./account.styles";

const RegisterScreen = () => {
  const [text, setText] = useState("");
  return (
    <BackgroundPhoto>
      <BackgroundCover />
      <AccountContainer>
        <AccountInput
          label="E-mail"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <AccountInput
          label="Password"
          value={text}
          onChangeText={(text) => setText(text)}
        />
      </AccountContainer>
    </BackgroundPhoto>
  );
};

export default RegisterScreen;
