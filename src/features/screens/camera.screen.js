import React, { useState, useEffect, useRef, useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import {
  CameraContainer,
  Camera,
  ButtonContainer,
  FlipButton,
  FlipText,
} from "./camera.styles";
import { Text } from "../../components/typography/text.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const { user } = useContext(AuthenticationContext);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const cameraRef = useRef();

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <CameraContainer>
      <TouchableOpacity onPress={snap}>
        <Camera ref={(camera) => (cameraRef.current = camera)} type={type}>
          <ButtonContainer>
            <FlipButton
              onPress={() =>
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                )
              }
            >
              <FlipText>Flip</FlipText>
            </FlipButton>
          </ButtonContainer>
        </Camera>
      </TouchableOpacity>
    </CameraContainer>
  );
};

export default CameraScreen;
