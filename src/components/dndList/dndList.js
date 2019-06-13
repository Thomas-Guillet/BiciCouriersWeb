import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import Column from '../Column/Column.js';

const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: 'Biocop' },
      'task-2': { id: 'task-2', content: 'Fleuriste' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'todo',
        taskIds: ['task-1', 'task-2'],
      },
    },
    columnOrder: ['column-1'],
  };

class DndList extends Component {
    state=initialData;

    onDragEnd = result => {
        const { destination, source, draggableId } = result;

        if(!destination){
            return;
        }

        if(
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const column = this.state.columns[source.droppableId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...column,
            taskIds: newTaskIds,
        };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newColumn.id]: newColumn,
            },
        };

        this.setState(newState);
    }


  render() {
    return (
        <DragDropContext
            onDragEnd={this.onDragEnd}
        >
       {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

            return <Column key={column.id} column={column} tasks={tasks} />
        })}
        </DragDropContext>
    );
  }
}

export default DndList;