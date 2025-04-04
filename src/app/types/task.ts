export type Task = {
  id: string;
  title: string;
  content: string;
  created_at: string;
  end_at: string | null;
  user_id: string;
}