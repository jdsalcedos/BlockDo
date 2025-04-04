import { type Database } from "../types/database";

type TaskEntity = Database['public']['Tables']['tasks']['Row']
type UserEntity = Database['public']['Tables']['users']['Row']

export type Task = TaskEntity & {
  user: UserEntity
}