import React, { useState, useEffect } from 'react'
import { Loader } from 'semantic-ui-react';
import { AddEditEventForm, HeaderPage, TableEventAdmin } from "../../components/Admin"
import { ModalBasic } from "../../components/Common"
import { useEvent } from "../../hooks"

export function EventAdmin() {

    const [showModal, setShowModal] = useState(false)
    const [titleModal, setTitleModal] = useState(null)
    const [contentModal, setContentModal] = useState(null)
    const [refetch, setRefetch] = useState(false)
    
    const { loading, events, getEvents} = useEvent();

    useEffect(() => {
        try {
          getEvents()
        } catch (error) {
          throw error
        }
      }, [refetch]);

    const openCloseModal = () => setShowModal((prev) => !prev)
    const onRefetch = () => setRefetch((prev) => !prev)

    const addEvent = () => {
        setTitleModal("Nuevo evento");
        setContentModal( <AddEditEventForm onClose={openCloseModal} onRefetch={onRefetch} /> );
        openCloseModal();
    }

    
  return (
    <>
        <HeaderPage tittle="Eventos" btnTitle="Nuevo Evento" btnClick={addEvent} />
        { loading ? (
            <Loader active inline="centered">
                Cargando...
            </Loader>
        ) : (
            <TableEventAdmin events={events} />
        )}

        <ModalBasic show={showModal} onClose={openCloseModal} title={titleModal} children={contentModal} />
    </>
  )
}
