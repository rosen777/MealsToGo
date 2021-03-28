import styled from "styled-components/native";
import { colors } from "../../infrastructure/theme/colors";
import { Text } from "../../components/typography/text.component";

import { Button, TextInput } from "react-native-paper";

export const BackgroundPhoto = styled.ImageBackground.attrs({
  source: require("../../../assets/home_bg.jpeg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BackgroundCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const AccountInput = styled(TextInput)`
  width: 300px;
  border-radius: 5px;
`;

export const LoginContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.View``;

export const Title = styled(Text)`
  font-size: 30px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  height: 40%;
  width: 100%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;
