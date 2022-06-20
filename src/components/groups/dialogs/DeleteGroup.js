import React from "react"
import { deleteGroup } from "../GroupManager"

export const GroupDialogDelete = ({ toggleGroupDeleteDialog, currentGroup, fetchGroups }) => {

    const deleteRefresh = () => {
        deleteGroup(currentGroup)
            .then(() => {fetchGroups()})
        toggleGroupDeleteDialog()
    }

    return (
        <dialog id="dialog--group_delete" className="dialog--group_delete">
            <div>
                <h2>Are you sure you want to delete this group?</h2>
            </div>
            <div>
                <button
                    onClick={() => {deleteRefresh()}}>
                    Confirm
                </button>
                <button
                    id="closeButton"
                    onClick={toggleGroupDeleteDialog}>
                    Cancel
                </button>
            </div>
        </dialog>
    )
}