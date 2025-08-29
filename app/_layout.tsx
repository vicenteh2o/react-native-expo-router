import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Platform } from "react-native";

const queryClient = new QueryClient();

const RootLayout = () => {
  const [user, setUser] = useState({ token: "alo" });

  useEffect(() => {
    if (!user) {
      // react native temp issue: https://github.com/expo/router/issues/740
      if (Platform.OS === "ios") {
        setTimeout(() => {
          router.replace("/auth");
        }, 1);
      } else {
        setImmediate(() => {
          router.replace("/auth");
        });
      }
    }
  }, [user]);

  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </QueryClientProvider>
  );
};

export default RootLayout;
