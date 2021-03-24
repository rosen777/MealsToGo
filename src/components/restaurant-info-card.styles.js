import styled from "styled-components/native";
import { View, Text, Image } from "react-native";
import { Card } from "react-native-paper";

export const Icon = styled(Image)`
  width: 15px;
  height: 15px;
`;

export const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantCard = styled(Card)`
  background-color: white;
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const SectionEnd = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
`;
