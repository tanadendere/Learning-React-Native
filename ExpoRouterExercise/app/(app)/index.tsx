import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <>
      <Text>Top-level page</Text>
      <View>
        {/* Link wraps children in a <Text> component by default. 
        You can customise the component by passing the asChild prop which will forward all props to the first child of the Link component. 
        The child component must support the onPress and onClick props, href and role will also be passed down. */}
        <Link href="/other" asChild>
          <Pressable>
            <Text>Home</Text>
          </Pressable>
        </Link>
        <Link href="/about">About</Link>
        {/* ...other links */}
        <Link href="/user/bacon">View user</Link>
      </View>
    </>
  );
}

// DEFINING PAGES
// Pages are defined by exporting a React component as the default value from a file in the app directory.
// The file they are exported from must use one of the .js, .jsx, .tsx, .ts extensions.

// ROUTE MATCHING
// Files named index match the parent directory and do not add a path segment.
// So app/index.tsx will match the / route in the app and the browser

/**
 * Platform specific extensions
 *
 * Metro bundler's platform-specific extensions (for example, .ios.tsx or .native.tsx) are supported in the app directory
 * only if a non-platform version also exists. This ensures that routes are universal across platforms for deep linking.
 *
 * Looking at the file structure
 * _layout.web.tsx file is used as a layout on the web and _layout.tsx is used on all other platforms.
 * index.tsx file is used as the home page for all platforms.
 * about.web.tsx file is used as the about page for the web, and the about.tsx file is used on all other platforms.
 */

// DYNAMIC ROUTES
// Dynamic routes match any unmatched path at a given segment level.
// app/blog/[slug].tsx ==> matches /blog/123
// Routes with higher specificity will be matched before a dynamic route. For example, /blog/bacon will match blog/bacon.tsx before blog/[id].tsx.

// multiple slugs can be matched in a single route by using the rest syntax(...)
// app/blog/[...id].tsx ==> matches /blog/123/settings OR /blog/tanaisthebest/123/yea/123 essentially /blog/*

// NAVIGATING BETWEEN PAGES
/**
 * Expo Router uses "links" to move between pages in the app.
 * conceptually similar to how the web works with <a> tags and the href attribute.
 */

/**
 * Native navigation
 *
 * Expo Router uses a stack-based navigation approach.
 * Each new route you navigate to gets added to a stack, if you navigate to a route already in the stack, the stack unwinds back to that existing route.
 * EXAMPLE
 * Navigating from /feed to /profile, the stack contains /feed and /profile
 * If you navigate to /settings, the stack ==> /feed, /profile, /settings
 * If you navigate to /feed, the stack ==> /feed (it unwinds back to /feed ie pops everything until that route)
 *
 *
 * Navigate without the stack unwinding
 * use push prop on Link component. This will push the route onto the stack, even if it already exists.
 *
 * Replace current url without adding to the stack
 * use replace prop to substitutes the current route in the navigation stack with a new one,
 * this effectively replacing the current screen with the new one without adding to the stack.
 *
 * To navigate, you can provide a
 * full path (/profile/settings),
 * relative path (../settings),
 * or by passing an object ({ pathname: 'profile', params: { id: '123' } }).
 *
 * The router object is immutable and contains the following functions:
 *
 * navigate: (href: Href) => void. Perform a navigate action.
 *    Navigate to the nearest route in the navigation state.
 *    only pushes a new screen if the new route is different (not including search parameters or the hash).
 *    Otherwise, the current screen rerenders with the new parameters.
 *    If you navigate to a route that is in the history, the stack will dismiss screens to that route.
 *
 * push: (href: Href) => void. Perform a push action.
 *    Always pushes a new route, and never pops or replaces to existing routes.
 *    You can push the current route multiple times or with new parameters.
 *
 * replace: (href: Href) => void. Perform a replace action.
 *    Remove the current route from the history and replace it with the specified URL. This is useful for redirects.
 *
 * back: () => void. Navigate back to previous route.
 *
 * canGoBack: () => boolean Returns true if a valid history stack exists and the back() function can pop back.
 *
 * setParams: (params: Record<string, string>) => void Update the query params for the currently selected route.
 *
 *
 * Imperative navigation
 * useful when you need to perform a navigation action outside a React component, such as in an event handler or a utility function.
 *      export function logout() {
 *        router.replace('/login');
 *      }
 *
 *
 * LAYOUT ROUTES
 * By default, routes fill the entire screen. Moving between them is a full-page transition with no animation.
 * In native apps, users expect shared elements like headers and tab bars to persist between pages. These are created using layout routes.
 *
 * So a layout route is like your tab to your different components in your directory
 * Expo Router supports adding a single layout route for a given directory. If you want to use multiple layout routes, add multiple directories:
 *
 * If you want multiple layout routes without modifying the URL, you can use GROUPS.
 * You can prevent a segment from showing in the URL by using the group syntax ()
 *    app/root/home.tsx matches /root/home
 *    app/(root)/home.tsx matches /home
 *    This is useful for adding layouts without adding additional segments to the URL. You can add as many groups as you want.
 *
 * Groups are also good for organizing sections of the app.
 *    example, we have app/(app) which is where the main app lives, and app/(aux) which is where auxiliary pages (t&c and/or privacy policy pages) live.
 *    This is useful for adding pages which you want to link to externally, but don't need to be part of the main app.
 * */
