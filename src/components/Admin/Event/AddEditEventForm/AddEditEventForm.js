import React, { useState, useEffect } from 'react'
import { Form, Button, Dropdown, Checkbox } from "semantic-ui-react"
import { useCategory, useEvent } from "../../../../hooks"
import { map } from 'lodash'
import { useFormik } from "formik"
import * as Yup from "yup"
import "./AddEditEventForm.scss"

export function AddEditEventForm(props) {

    const { onClose, onRefetch } = props;

    const [ categoriesFormat, setCategoriesFormat ] = useState([])
    const { categorias, getCategorias } = useCategory();
    const { addEvent } = useEvent();


    useEffect(() => {
        try {
          getCategorias()
        } catch (error) {
          throw error
        }
    }, []);

    useEffect(() => {
        try {
          setCategoriesFormat(formatDropdownData(categorias))
        } catch (error) {
          throw error
        }
    }, [categorias]);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(newSchema()),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            await addEvent(formValue)

            onRefetch();
            onClose();
        }
    })



  return (
    <Form className='add-edit-event-form' onSubmit={formik.handleSubmit}>

        <Form.Input 
            name="title" 
            placeholder="Nombre del evento" 
            value={formik.values.title} 
            onChange={formik.handleChange}
            error={formik.errors.title}
        />
        <Form.Input
            type='time'
            name="time" 
            value={formik.values.time}
            onChange={formik.handleChange}
            error={formik.errors.time}
        />
        <Form.Input 
            type='date'
            name="date" 
            value={formik.values.date}
            onChange={formik.handleChange}
            error={formik.errors.date} 
        />

        <Dropdown 
            placeholder='Categoria' 
            fluid 
            selection 
            search 
            options={categoriesFormat}
            value={formik.values.category}
            error={formik.errors.category}
            onChange={(_, data) => formik.setFieldValue('category', data.value) } 
        />

        <div className='add-edit-event-form__active'>
            <Checkbox 
                toggle 
                checked={formik.values.active} 
                onChange={(_, data) => formik.setFieldValue('active', data.checked) } 
            />
            Evento activo
        </div>

        <Button type='submit' primary fluid content="Crear" />

    </Form>
  )
}

function formatDropdownData(data) {
    return map(data, (item) => ({
        key: item.id,
        text: item.title,
        value: item.id,
    }))
}

function initialValues() {
    return {
        title: "",
        time: "",
        date: "",
        category: "",
        active: false,
    }
}

//const moment = require("moment");

function newSchema() {
    return {
        title: Yup.string().required(true),
        time: Yup.string().required(true),
        date: Yup.date().required(true),
        category: Yup.number().required(true),
        active: Yup.boolean().required(true),
    }
}
