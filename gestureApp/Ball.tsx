import { StyleSheet } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

export default function Ball() {
  //   const pan = Gesture.Pan();

  const isPressed = useSharedValue(false);
  const offset = useSharedValue({ x: 0, y: 0 });

  //   sharedValue
  /**
   *
   */

  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: isPressed.value ? "red" : "blue",
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
        { scale: withSpring(isPressed.value ? 1.2 : 1) },
      ],
    };
  });

  const panGesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onChange((event) => {
      offset.value = {
        x: event.changeX + offset.value.x,
        y: event.changeY + offset.value.y,
      };
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.ball, animatedStyles]}></Animated.View>
    </GestureDetector>
  );
}

// can add styles to the style prop as an array in the style object. The appended styles will take precended

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "blue",
  },
});
