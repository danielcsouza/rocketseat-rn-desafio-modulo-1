import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    //criando objeto
     const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    };

    //adicionando no estado
    setTasks(old =>[...old, data]);

  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    //pega o item que estou procurando
    let task = tasks.find(s=>s.id == id);

    //verifico se acho algo pq pode vir undefined
    if (task)
    {
      task.done = !task.done; // mudo o status de concluido para nao concluido
    }

    //atualizo novamente as tasks pegando as que ja tem e adicionando a nova alteracao
    //com principio de imutabilidade
    const updatedTasks = tasks.map(task => ({...task }))

    //mando atualizar o state
    setTasks(updatedTasks);
    
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    //criando um novo estado do Array de tasks com todos
    //menos o que o id que foi passado.
    setTasks(geral => geral.filter(s=>s.id !== id))
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})