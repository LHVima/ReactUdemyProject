import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function inputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function btnHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          placeholder="Your course goal"
          placeholderTextColor="#ccc"
          style={styles.textInput}
          onChangeText={inputHandler}
          value={enteredGoalText}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title="Add Goal" onPress={btnHandler} color="#5e0acc" />
          </View>
          <View style={styles.btn}>
            <Button title="Cancel" onPress={props.onCancel} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    color: "#ccc",
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 4,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 16,
  },
  btn: {
    width: "35%",
  },
});
