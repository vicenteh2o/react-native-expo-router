import { router, Stack } from "expo-router";
import { useEffect, useState } from "react";

const RootLayout = () => {
  const [user, setUser] = useState({ token: "alo" });

  useEffect(() => {
    if (!user) {
      router.replace("/auth");
    } else {
      router.replace("/");
    }
  }, [user]);
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
