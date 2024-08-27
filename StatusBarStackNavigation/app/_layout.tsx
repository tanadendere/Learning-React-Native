import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Stack>
      {/* The (tabs) directory is a special directory name that tells Expo Router to use the Tabs layout. */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

/**
 * From the file structure, the (tabs) directory has three files.
 *  The first is (tabs)/_layout.tsx.
 *      This file is the main layout file for the tab bar and each tab.
 *      Inside it, you can control how the tab bar and each tab button look and behave.
 *
 * Finally, you have the two tab files that make up the content of the tabs:
 *  app/(tabs)/index.tsx and
 *  app/(tabs)/settings.tsx.
 *
 */

// STACK Navigation

/**
 * A stack navigator is the foundational way of navigating between routes in an app.
 *      On Android, a stacked route animates on top of the current screen.
 *      On iOS, a stacked route animates from the right.
 *
 * Expo Router provides a Stack navigation component that creates a navigation stack and allows you to add new routes in your app.
 *
 * Using file-based routing to create a stack navigator
 *
 * exmaple file structure:
 *  app
 *    /_layout.tsx
 *    /index.tsx
 *    /details.tsx
 *
 * This file structure produces a layout where the index route is the first route in the stack,
 * and then details route is pushed on top of the index route when navigated.
 *
 * You can use the app/_layout.tsx file to define your app's Stack navigator with these two routes:
 */

// import { Stack } from "expo-router/stack";

// export default function Layout() {
//   return (
//     <Stack
//       // configuring common header style acroos all routes
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: "#f4511e",
//         },
//         headerTintColor: "#fff",
//         headerTitleStyle: {
//           fontWeight: "bold",
//         },
//       }}
//     >
//       {/* Optionally configure static options outside the route.*/}
//       <Stack.Screen name="home" options={{}} />
//     </Stack>
//   );
// }

// Statically configure route options
/**
 * You can use the <Stack.Screen name={routeName} /> component in the layout component route to statically configure a route's options.
 * (This is also useful for tabs or drawers as they need an icon defined ahead of time.)
 *
 * As an alternative to the <Stack.Screen> component,
 * you can use navigation.setOptions() to configure a route's options from within the route's component file.
 *
 */

// Configure header bar
/**
 * You can configure the header bar for all routes in a Stack navigator by using the screenOptions prop.
 * This is useful for setting a common header style across all routes.
 *
 * To configure the header bar dynamically for an individual route,
 * use that navigator's <Stack.Screen> component in the routes's file.
 * This is useful for interactions that change the UI.
 */

// Set Screen options dynamically
/**
 * To configure a route's option dynamically, you can always use the <Stack.Screen> component in that route's file.
 * As an alternative, you can also use the imperative API's router.setParams() function to configure the route dynamically.
 *
 * Check out app/details.tsx
 */
