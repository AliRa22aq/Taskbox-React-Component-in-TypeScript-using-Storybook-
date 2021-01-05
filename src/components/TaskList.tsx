import React from 'react';
import { isVariableStatement } from 'typescript';
import Task, { TaskInterface } from "./Task"

export interface TasksListProps {
    tasks: TaskInterface[]
    loading: boolean
    onPinTask?: any,
    onArchiveTask?: any

}

export const PureTaskList: React.FC<TasksListProps> = ({ loading, tasks, onPinTask, onArchiveTask }) => {
    const events = {
        onPinTask,
        onArchiveTask,
    };

    const LoadingRow = (
        <div className="loading-item">
            <span className="glow-checkbox" />
            <span className="glow-text">
                <span>Loading</span> <span>cool</span> <span>state</span>
            </span>
        </div>
    );
    if (loading) {
        return (
            <div className="list-items">
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
            </div>
        );
    }
    if (tasks.length === 0) {
        return (
            <div className="list-items">
                <div className="wrapper-message">
                    <span className="icon-check" />
                    <div className="title-message">You have no tasks</div>
                    <div className="subtitle-message">Sit back and relax</div>
                </div>
            </div>
        );
    }
    var a;
    var b;

    //   if (tasks) {
    //    a = tasks?.filter(t => t.state === 'TASK_PINNED')
    //   console.log(a)
    //    b = tasks?.filter(t => t.state !== 'TASK_PINNED')
    //   console.log(b)
    // }

    //   const tasksInOrder = a?.concat(b)


    const tasksInOrder = 
            [
                ...tasks?.filter(t => t.state === "TASK_PINNED"),

                ...tasks?.filter(t => t.state !== "TASK_PINNED"),

            ]


        return (
            <div className="list-items">
                {tasksInOrder.map(task => (
                    <Task key={task.id} task={task} {...events} />
                ))}
            </div>
        );
    }


