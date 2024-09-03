import {Dimensions, StyleSheet, View} from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {

	return ( <View style={styles.inputContainer}>{children}</View>);
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	inputContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		marginTop: deviceWidth < 380 ? 18 : 36,
		marginHorizontal: 24,
		borderRadius: 8,
		elevation: 4, /* box shadow android */
		shadowColor: 'black', /* box shadow ios */
		shadowOffset: {width: 0, height: 2}, /* box shadow ios */
		shadowRadius: 6, /* box shadow ios */
		shadowOpacity: 0.25, /* box shadow ios */
		backgroundColor: Colors.primary800
	}
});