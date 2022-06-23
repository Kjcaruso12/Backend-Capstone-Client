import React, { useState, useEffect } from "react"
import { getGroups } from "./GroupManager";
import { useModalGroupDelete, useModalGroupForm } from "../hooks/useModal"
import { GroupView } from "./Group";
import { GroupDialogDelete } from "./dialogs/DeleteGroup"
import { GroupDialogForm } from "./dialogs/GroupForm";
import "./Groups.css"

export const Groups = () => {
    const [allGroups, setAllGroups] = useState([])
    const [currentGroup, setCurrentGroup] = useState()
    const [editMode, setEditMode] = useState(false)
    let { toggleGroupDeleteDialog, groupDeleteModalIsOpen } = useModalGroupDelete("#dialog--group_delete")
    let { toggleGroupFormDialog, groupFormModalIsOpen } = useModalGroupForm("#dialog--group_form")

    const fetchGroups = () => {
        getGroups()
            .then(setAllGroups)
    }

    useEffect(
        () => {
            fetchGroups()
        }
        , []
    )


    const confirmGroupDelete = group => {
        setCurrentGroup(group)
        toggleGroupDeleteDialog()
    }

    const openGroupEdit = group => {
        setCurrentGroup(group)
        setEditMode(true)
        toggleGroupFormDialog()
    }

    const openGroupCreate = () => {
        setEditMode(false)
        toggleGroupFormDialog()
    }

    return (
        <div className="group_list">
            <GroupDialogForm toggleGroupFormDialog={toggleGroupFormDialog} currentGroup={currentGroup} setCurrentGroup={setCurrentGroup} editMode={editMode} fetchGroups={fetchGroups} />
            <GroupDialogDelete toggleGroupDeleteDialog={toggleGroupDeleteDialog} currentGroup={currentGroup} fetchGroups={fetchGroups} />
            <div className="group_header">
                <h2 className="header">Group Management</h2>
                <button
                    className="create_group"
                    onClick={() => openGroupCreate()}>Add Group</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Group Id</th>
                        <th>Name</th>
                        <th>Total Items</th>
                        <th>Added On</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allGroups?.map((group) =>
                        <GroupView key={`group--${group.id}`}
                            group={group}
                            confirmGroupDelete={confirmGroupDelete}
                            openGroupEdit={openGroupEdit}
                        />)
                    }
                </tbody>
            </table>
        </div>
    )
}