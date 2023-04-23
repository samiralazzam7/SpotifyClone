import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 15,
    width: "70%"
  },
  image: {
    width: 75,
    height: 75,
  },
  rightContainer: {
    justifyContent: 'space-around',
    marginLeft: 15,
  },
  name: {
    color: 'white',
    fontSize: 24,
    textTransform: 'capitalize',
  },
  author: {
    color: 'lightgray',
    fontSize: 20,
    textTransform: 'capitalize',
  }
})

export default styles;
