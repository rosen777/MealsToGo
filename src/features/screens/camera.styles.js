import styled from "styled-components/native";
import { Camera as ExpoCamera } from "expo-camera";
import { TouchableOpacity, Text } from "react-native";

export const CameraContainer = styled.View`
  flex: 1;
`;

export const Camera = styled(ExpoCamera)`
  width: 100%;
  height: 100%;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  background-color: transparent;
  flex-direction: row;
  justify-content: center;
  margin: ${(props) => props.theme.space[3]};
`;

export const FlipButton = styled(TouchableOpacity)`
  flex: 0.2;
  flex-direction: row;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  background-color: ${(props) => props.theme.colors.ui.semiTransparent};
  padding: ${(props) => props.theme.space[2]}
  color: ${(props) => props.theme.colors.text.inverse};
`;

export const FlipText = styled(Text)`
  color: #fff;
`;
