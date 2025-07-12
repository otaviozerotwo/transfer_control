import React, { useState } from "react";
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { Eye, EyeOff } from "lucide-react-native";
import styles from "./styles";

interface InputProps extends TextInputProps {
  label: string;
  secure?: boolean;
  leftIcon?: React.ReactNode;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({ label, secure, leftIcon, errorMessage, ...rest }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const hasError = !!errorMessage;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View 
        style={[
          styles.inputContainer,
          hasError && { borderColor: '#E53935'},
        ]}
      >
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}

        <TextInput
          style={styles.input}
          secureTextEntry={secure && !isPasswordVisible}
          {...rest}
        />

        {secure && (
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            {isPasswordVisible ? (
              <Eye size={20} color='#6B7280' />
            ) : (
              <EyeOff size={20} color='#6B7280' />
            )}
          </TouchableOpacity>
        )}
      </View>

      {hasError && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
}

export default Input;