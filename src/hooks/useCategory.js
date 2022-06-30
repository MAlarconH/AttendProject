import { useState } from "react"
import { getCategoriasApi, addCategoryApi, updateCategoryApi, deleteCategoryApi } from "../api/category"
import { useAuth } from "./"

export function useCategory() {
    const [ loading, setLoading ] = useState (true);
    const [ error, setError ] = useState (false);
    const [ categorias, setCategorias ] = useState (null);
    const { auth } = useAuth();

    const getCategorias = async () => {
        try {
            setLoading(true);
            const response = await getCategoriasApi();
            setLoading(false);
            setCategorias(response);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    const addCategory = async (data) => {
        try {
            setLoading(true);
            await addCategoryApi(data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    const updateCategory = async (id, data) => {
        try {
            setLoading(true);
            await updateCategoryApi(id, data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    const deleteCategory = async (id) => {
        try {
            setLoading(true);
            await deleteCategoryApi(id, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    return {
        loading,
        error,
        categorias,
        getCategorias,
        addCategory,
        updateCategory,
        deleteCategory,
    }
}