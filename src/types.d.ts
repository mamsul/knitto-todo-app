interface ITodosState {
  pageStart: number;
  pageLimit: number;
}

interface ITodo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
