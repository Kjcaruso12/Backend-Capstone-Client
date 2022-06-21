import React, { useState } from "react"
import { addGroup, editGroup } from "../../groups/GroupManager"
import { AiOutlineClose } from "react-icons/ai"
import "./Dialog.css"

export const GroupDialogForm = ({ toggleGroupFormDialog, currentGroup, setCurrentGroup, editMode, fetchGroups }) => {

    const [label, setLabel] = useState(
        {
            label: ""
        }
    )

    const updateGroup = (event) => {
        if (editMode) {
            let copy = { ...currentGroup }
            copy[event.target.name] = event.target.value
            setCurrentGroup(copy)
        }
        else {
            let copy = { ...label }
            copy[event.target.name] = event.target.value
            setLabel(copy)
        }
    }

    const submitGroup = (event) => {
        event.preventDefault()
        if (editMode) {
            const updatedGroup = {
                id: currentGroup.id,
                label: currentGroup.label
            }
            editGroup(updatedGroup)
                .then(() => fetchGroups())
        }
        else {
            addGroup(label)
            setLabel({ label: ""})
            fetchGroups()
        }
        toggleGroupFormDialog()
    }

    return (
        <dialog id="dialog--group_form" className="dialog--group_form">
            {editMode && currentGroup ?
                <div>
                    <div>
                        <button
                            className="exit_group_view"
                            onClick={toggleGroupFormDialog}>
                            {AiOutlineClose()}
                        </button>
                        <h2>Edit Group</h2>
                    </div>
                    <div>
                        <h2>Label</h2>
                        <input value={currentGroup.label} type="text" name="label" onChange={updateGroup} required />
                    </div>
                </div>
                :
                <div>
                    <div>
                        <button
                            className="exit_group_view"
                            onClick={toggleGroupFormDialog}>
                            {AiOutlineClose()}
                        </button>
                        <h2>Add Group</h2>
                    </div>
                    <div>
                        <h2>Label</h2>
                        <input value={label.label} type="text" name="label" onChange={updateGroup} placeholder="Enter a group name..." required />
                    </div>
                </div>
            }
            <div>
                <button className="submit-button"
                    onClick={(event) => submitGroup(event)}>
                    Submit
                </button>
            </div>
        </dialog>
    )
}