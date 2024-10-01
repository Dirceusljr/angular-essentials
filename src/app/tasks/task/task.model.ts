export interface Task {
  id: string;
  userId: string;
  title: string;
  dueDate: string;
  summary: string;
}

export interface newTaskData {
  title: string;
  summary: string;
  date: string;
}