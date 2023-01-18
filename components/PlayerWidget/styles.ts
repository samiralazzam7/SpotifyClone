import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 49,
    backgroundColor: '#131313',
    width: '100%',
    borderWidth: 2,
    borderColor: 'black',
  },
  progress: {
    height: 3,
    backgroundColor: '#bcbcbc'
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nameContainer: {
    alignItems: 'left',
    overflow: 'hidden',
    width: '60%',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-around'
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    textTransform: 'capitalize',
  },
  author: {
    color: 'lightgray',
    fontSize: 18,
    margin: 10,
    marginTop: -5,
    textTransform: 'capitalize',
  }
})

export default styles;
