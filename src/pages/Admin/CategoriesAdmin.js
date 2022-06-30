import React, { useState, useEffect } from 'react'
import { Loader } from 'semantic-ui-react';
import { AddEditCategoryForm, HeaderPage, TableCategoryAdmin } from "../../components/Admin"
import { useCategory } from "../../hooks"
import { ModalBasic } from "../../components/Common"

export function CategoriesAdmin() {

  const [showModal, setShowModal] = useState(false)
  const [titleModal, setTitleModal] = useState(null)
  const [contentModal, setContentModal] = useState(null)
  const [refetch, setRefetch] = useState(false)
  const { loading, categorias, getCategorias, deleteCategory } = useCategory();

  useEffect(() => {
      try {
        getCategorias()
      } catch (error) {
        throw error
      }
    }, [refetch]);

  const openCloseModal = () => setShowModal((prev) => !prev)
  const onRefetch = () => setRefetch((prev) => !prev)

  const addCetegory = () => {
    setTitleModal("Nueva categoria")
    setContentModal(<AddEditCategoryForm onClose={openCloseModal} onRefetch={onRefetch} />)
    openCloseModal()
  }

  const updateCategory = (data) => {
    setTitleModal("Actualizar categoria")
    setContentModal(
      <AddEditCategoryForm onClose={openCloseModal} onRefetch={onRefetch} category={data} />
    )
    openCloseModal()
  }

  const onDeleteCategory = async (data) => {
    const result = window.confirm(`¿Eliminar categoria ${data.title}?`)
    if (result) {
      await deleteCategory(data.id)
      onRefetch()
    }
  }
    
  return (
    <>
      <HeaderPage tittle="Categorias" btnTitle="Nueva categoria" btnClick={addCetegory}/>
      {loading ? (
          <Loader active inline="centered">
              Cargando...
          </Loader>
          ) : (
              <TableCategoryAdmin 
                categorias={categorias} 
                updateCategory={updateCategory}
                deleteCategory={onDeleteCategory}
              />
          )}

      <ModalBasic
        show={showModal}
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  )
}
