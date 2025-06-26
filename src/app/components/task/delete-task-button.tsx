import { deleteTask } from "@/app/actions/delete-task-action";

export default function DeleteTaskButton({task}: { task: { id: string } }) {
  return (
    <form action={async () => await deleteTask(task.id)}>
      <input type='hidden' name='task_id' value={task.id} />
      <button
        type='submit'
        className='bg-red-500 text-sm disabled:opacity-40 disabled:pointer-events-none font-light rounded-xl px-5 py-2 self-end text-white hover:bg-red-500/20 transition-colors duration-150 ease-in-out cursor-pointer'
      >
        Eliminar
      </button>
    </form>
  )
}
