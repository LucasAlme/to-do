import React, { useState } from "react";
import { FlatList, View } from "react-native";
import Header from "../../components/header";
import TaskList from "../../components/taskList";
import TodoInput from "../../components/todoInput";
import { styles } from "./style";


type item = {
    id?: string;
    title?: string;
    checked?: boolean
}

interface TaskData {
    id: string;
    title: string;
    checked: boolean;
}

export default function Home() {
    const [newTasks, setNewTasks] = useState('')
    const [tasks, setTasks] = useState<TaskData[]>([]);

    function handleCheck(item: item) {
        const updateTasks = tasks.map(task => ({ ...task }));
        const itemFind = updateTasks.find(itemFind => itemFind.id === item.id);
        if (!itemFind) return;
        itemFind.checked = !itemFind.checked;
        setTasks(updateTasks);
    }

    function handleNewTask() {
        if (newTasks != '') {
            const data = {
                id: String(new Date().getTime()),
                title: newTasks,
                checked: false
            }
            setTasks(oldState => [...oldState, data]);
        }
    }

    function handleRemoveTask(id: string) {
        setTasks(oldState => oldState.filter(
            task => task.id !== id
        ))
    }

    return (
        <View style={styles.background}>
            <Header numberTask={tasks.length} />
            <View style={{ paddingHorizontal: 24 }}>
                <TodoInput placeholder="Adicione uma tarefa" onChangeText={(txt) => setNewTasks(txt)} value={newTasks} onPressButton={handleNewTask} />
            </View>
            <FlatList
                style={{ marginTop: 152 }}
                data={tasks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TaskList title={item.title} checked={item.checked} onPressCheck={() => handleCheck(item)} onPressRemove={() => handleRemoveTask(item.id)} />
                )}
            />
        </View>
    )
}