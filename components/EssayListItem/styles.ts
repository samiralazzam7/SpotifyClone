import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 15,
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
  },
  author: {
    color: 'lightgray',
    fontSize: 20,
  }
})

export default styles;
