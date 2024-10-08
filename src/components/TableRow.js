import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function TableRow({ exercise, onDelete, onEdit }){
    return(
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
                <td>
                    <MdEdit id="edit-button" onClick={() => onEdit(exercise)}/>
                </td>
                <td>
                    <MdDeleteForever id="delete-button" onClick={() => onDelete(exercise._id)}/>
                </td>
        </tr>
    );
}

export default TableRow;