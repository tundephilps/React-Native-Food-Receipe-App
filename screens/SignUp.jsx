import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  return (
    <View style={{ flex: 1, backgroundColor: "#F4EFF3" }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backBtn}
          >
            <Feather color="white" name="arrow-left" size={24} />
          </TouchableOpacity>

          <Text style={styles.title}>Create Account</Text>
        </View>

        <KeyboardAwareScrollView>
          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Username</Text>

              <TextInput
                onChangeText={(username) => setForm({ ...form, username })}
                placeholder="e.g. johndoe"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.username}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>First Name</Text>

              <TextInput
                onChangeText={(firstName) => setForm({ ...form, firstName })}
                placeholder="e.g. John"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.firstName}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Last Name</Text>

              <TextInput
                onChangeText={(lastName) => setForm({ ...form, lastName })}
                placeholder="e.g. Doe"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.lastName}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Email address</Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={(email) => setForm({ ...form, email })}
                placeholder="e.g. john@example.com"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.email}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Password</Text>

              <TextInput
                autoCorrect={false}
                onChangeText={(password) => setForm({ ...form, password })}
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={form.password}
              />
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Sign up</Text>
                </View>
              </TouchableOpacity>
            </View>

            <Text style={styles.formFooter}>
              By clicking "Sign up", you agree to our
              <Text style={{ color: "#45464E", fontWeight: "600" }}>
                {" "}
                Terms & Conditions{" "}
              </Text>
              and
              <Text style={{ color: "#45464E", fontWeight: "600" }}>
                {" "}
                Privacy Policy
              </Text>
              .
            </Text>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    paddingHorizontal: 24,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    marginBottom: 8,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#181818",
    marginBottom: 17,
  },
  form: {
    paddingHorizontal: 24,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "400",
    color: "#9fa5af",
    textAlign: "center",
  },
  inputLabel: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1c1c1e",
    marginBottom: 6,
  },
  inputControl: {
    height: 44,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#24262e",
  },
  btnText: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  input: {
    marginBottom: 12,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderWidth: 1,
    backgroundColor: "orange",
    borderColor: "#FD6B68",
  },
});
