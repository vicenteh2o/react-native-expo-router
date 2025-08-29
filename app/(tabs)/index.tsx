import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { addTodo, fetchTodos } from "../shared/services";

export default function Index() {
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");

  const { data, isLoading } = useQuery({
    queryFn: () => fetchTodos(search),
    queryKey: ["todos", search],
  });

  const { mutateAsync } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleAddTodo = async () => {
    try {
      await mutateAsync({ title });
      setTitle("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Link href="/users/1">Go to user 1</Link>
      <Pressable onPress={() => router.push("/users/2")}>
        <Text>Go to user 2</Text>
      </Pressable>
      <View style={{ marginTop: 20, flexDirection: "row" }}>
        {/* add text input */}
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Add a new todo"
          style={styles.input}
        />
        <Button title="Add Todo" onPress={handleAddTodo} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontWeight: "bold", textAlign: "center" }}>
          TanStack Query
        </Text>
        {data?.map((todo) => (
          <View key={todo.id} style={styles.todoItem}>
            <Text>{todo.title}</Text>
            <Button title="Complete" onPress={() => {}} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
    padding: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  todoItem: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    borderRadius: 8,
    borderColor: "lightgray",
    borderWidth: 1,
    padding: 12,
  },
});
