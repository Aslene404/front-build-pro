import { IUser } from '../user/user.model';
import { IMaterial } from './material.model';
import { ITask } from './task.model';

export interface IProject {
  projectname: string;
  owner: string;
  status: string;
  materials: IMaterial[];
  tasks: ITask[];
  staff: IUser[];

}
