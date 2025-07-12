import React from "react"
import { SafeAreaView, ViewStyle } from "react-native";
import styles from "./styles";

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
};

const SafeArea: React.FC<Props> = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
};

export default SafeArea;