import {StyleSheet, Text, Platform} from "react-native";

function TitleAndroid({children}) {
	return (
		<Text style={styles.title}>{children}</Text>);
}

export default TitleAndroid;

const styles = StyleSheet.create({
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 24,
		color: 'white',
		textAlign: 'center',
		// borderWidth: Platform.OS === 'android' ? 2 : 0,
		borderWidth: Platform.select({ android: 2, ios: 0}),
		borderColor: 'white',
		padding: 12,
		maxWidth: '80%',
		width: 300
	}
});