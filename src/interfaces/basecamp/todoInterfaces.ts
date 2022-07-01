export interface IGetTodoParams {
  projectId: string;
  todoId: string;
  token: string;
}


export interface ICreateTodoForm {
  description: string;
  assignee_ids: number[];
  completion_subscriber_ids: [];
  notify: boolean;
  due_on: number;
  starts_on: number;
  token: string;
  todoId: string;
  projectId: string;
}

export interface ITodo {
  id: number;
  status: string;
  created_at: string;
  updated_at: string;
  title: string;
  inherits_status: boolean;
  type: string;
  url: string;
  app_url: string;
  comments_count: number;
  comments_url: string;
  parent: {
    id: number;
    title: string;
    type: string;
    url: string;
    app_url: string;
  };
  bucket: {
    id: number;
    name: string;
    type: string;
  };
  creator: {
    id: number;
    attachable_sgid: string;
    name: string;
    email_address: string;
    personable_type: string;
    title: string;
    bio: string;
    created_at: string;
    updated_at: string;
    admin: boolean;
    owner: boolean;
    time_zone: string;
    avatar_url: string;
    company: {
      id: number;
      name: string;
    };
    description: string;
    bookmark_url: string;
    subscription_url: string;
    completed: boolean;
    completion: {
      created_at: string;
      creator: {
        id: number;
        attachable_sgid: string;
        name: string;
        email_address: string;
        personable_type: string;
        title: string;
        bio: any;
        created_at: string;
        updated_at: string;
        admin: boolean;
        owner: boolean;
        time_zone: string;
        avatar_url: string
      };
    };
    content: string;
    starts_on: any;
    due_on: any;
    assignees: IAssignees[];
    completion_subscribers: ICompletionSubscribers[];
    completion_url: string;
  }
}



interface ICompletionSubscribers {
  id: number;
  attachable_sgid: string;
  name: string;
  email_address: string;
  personable_type: string;
  title: string;
  bio: any;
  created_at: string;
  updated_at: string;
  admin: boolean;
  owner: boolean;
  time_zone: string;
  avatar_url: string;
}
interface IAssignees {
  id: number;
  attachable_sgid: string;
  name: string;
  email_address: string;
  personable_type: string;
  title: string;
  bio: null;
  created_at: string;
  updated_at: string;
  admin: boolean;
  owner: boolean;
  time_zone: string;
  avatar_url: string;
}