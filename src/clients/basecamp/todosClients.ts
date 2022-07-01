import axios, { AxiosInstance } from "axios";
import { ICreateTodoForm, IGetTodoParams, ITodo } from "src/interfaces/basecamp/todoInterfaces";
import axiosInstace from "../"

class TodoClient {
  async getInstance(token: string, projectId: string): Promise<AxiosInstance> {
    const instance = await axiosInstace(token, projectId);
    return instance;
  }


  async getTodo({ projectId, todoId, token }: IGetTodoParams): Promise<ITodo> {
    try {
      const instance = await this.getInstance(token, projectId);
      const { data } = await instance.get<ITodo>(`/buckets/${projectId}/todos/${todoId}.json`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async createATodo({ token, todoId, projectId, ...payload }: ICreateTodoForm): Promise<ITodo> {
    try {
      const instance = await this.getInstance(token, projectId);
      const { data } = await instance.post<ITodo>(`/buckets/${projectId}/todolists/${todoId}/todos.json`, payload);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new TodoClient();