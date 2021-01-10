import { IUser } from '../user/user.model';

export interface ITask{
    taskname:string;
    sdate:IDay;
    fdate:IDay;
	staff:IUser[];
    
}
export interface IDay {
    day: number;
    month: number;
    year:number;
}