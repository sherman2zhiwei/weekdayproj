import * as React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import colors from "./colors";


class FormTextInput extends React.Component<Props> {
  render() {
    return (
      <TextInput
        selectionColor={colors.main}
        style={styles.textInput}
        onChangeText={this.props.onChangeText}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: colors.SILVER,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20
  }
});

export default FormTextInput;
