import { useState } from "react"
import { getEventApi, addEventApi } from "../api/event"
import { useAuth } from "./"

export function useEvent() {

    const [ loading, setLoading] = useState(true)
    const [ error, setError] = useState(false)
    const [ events, setEvents] = useState(null)
    const { auth } = useAuth();

    const getEvents = async () => {
        try {
            setLoading(true);
            const response = await getEventApi();
            setLoading(false);
            setEvents(response);
        } catch (error) {
            throw error
        }
    };

    const addEvent = async (data) => {
        try {
            setLoading(true);
            await addEventApi(data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    return {
        loading,
        error,
        events,
        getEvents,
        addEvent
    };
}