package com.cervantes.myappattend

import com.cervantes.myappattend.model.Event

class EventRepository (val events:MutableList<Event> = ArrayList()) {
    init{
        getDataEvents()
    }
    fun getDataEvents(): List<Event>{
        events.add(Event(1,"TyC Week","Tecsup","ic_event_1","Presencial"))
        events.add(Event(2,"Conociendo el Campus","unknown","ic_event_2","Presencial"))
        events.add((Event(3,"CiberSeguridad","unknown","ic_event_3","conferencia")))
    return events
    }
}