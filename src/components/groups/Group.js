import React from "react"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { FormatDate } from "../utils/FormatDate"

export const GroupView = ({ group, confirmGroupDelete, openGroupEdit }) => {

    return (
        <tr className="single_group">
            <td>{group.id}</td>
            <td>{group.label}</td>
            <td>{group.product_count}</td>
            <td>{FormatDate(group.created_on)}</td>
            <td><button
                        className="edit_group"
                        onClick={() => openGroupEdit(group)}>{AiFillEdit()}</button>
                <button
                        className="delete_group"
                        onClick={() => confirmGroupDelete(group)}>{AiFillDelete()}</button>
            </td>
        </tr>
    )
}