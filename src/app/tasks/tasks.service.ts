import { DUMMY_TASKS } from "../dummy.task";
import { NewTaskData } from "./task/task.model";

export class TasksService {
    public tasks = DUMMY_TASKS

    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId)
    }

    addTask(taskData: NewTaskData, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
        })
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((tsk) => tsk.id !== id)
    }

}