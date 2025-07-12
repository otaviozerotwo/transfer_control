import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import SafeArea from '../../components/SafeArea';
import Input from '../../components/Input';
import { Controller, useForm } from 'react-hook-form';
import FormButton from '../../components/FormButton';
import styles from './styles';

type FormData = {
  username: string;
  password: string;
}

const LoginScreen = () => {
  const { 
    control, 
    handleSubmit, 
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Login com:', data);
  };

  return (
    <SafeArea style={styles.container}>
      <StatusBar style='auto' />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps='handled'
          >
            <View style={styles.header}>
              <View style={styles.containerLogo}>
                <FontAwesome6 name='prescription-bottle-medical' size={36} color='#4B5563' />
              </View>
            </View>

            <View style={styles.containerTitle}>
              <Text style={styles.title}>Transfer Control</Text>
              <Text style={styles.subtitle}>Gestão de movimentação de mercadorias</Text>
            </View>

            <View style={styles.containerForm}>
              <Controller
                control={control}
                name='username'
                rules={{ required: 'Usuário é obrigatório' }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    label='Usuário'
                    placeholder='Digite seu usuário'
                    leftIcon={<FontAwesome6 name='user' size={16} color='#6B7280' />}
                    value={value}
                    onChangeText={onChange}
                    autoCapitalize='none'
                    errorMessage={errors.username?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name='password'
                rules={{ 
                  required: 'Senha é obrigatória',
                  minLength: { value: 6, message: 'Mínimo 6 caracteres' },
                }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    label='Senha'
                    placeholder='Digite sua senha'
                    secure={true}
                    leftIcon={<FontAwesome6 name='lock' size={16} color='#6B7280' />}
                    value={value}
                    onChangeText={onChange}
                    errorMessage={errors.password?.message}
                  />
                )}
              />

              <FormButton 
                title='Entrar' 
                onPress={handleSubmit(onSubmit)}
                // loading={isLoading}
              />
            </View>
            <View style={styles.footer}>
              <View style={styles.footerTextContainer}>
                <FontAwesome6 name='barcode' size={14} color='#4B5563' />
                <Text style={styles.footerText}>Versão 1.0.0</Text>
              </View>
              <View style={styles.footerTextContainer}>
                <FontAwesome6 name='copyright' size={14} color='#4B5563' />
                <Text style={styles.footerText}>2025 Transfer Control. Todos os direitos reservador.</Text>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeArea>
  );
};

export default LoginScreen;