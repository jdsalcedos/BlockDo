import { getTaskData } from '@/app/services/tasks/get-tasks'
import { Task } from '@/app/types/task'
import React from 'react'
import TaskCard from './task-card'

export default async function TaskList() {

  const tasks = await getTaskData()

  return (
    <div className="grid grid-cols-3 gap-4 p-4 space-x-3">
      {tasks.map((task: Task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}
