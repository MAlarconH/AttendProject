package com.cervantes.myappattend

import com.cervantes.myappattend.model.Event

class EventRepository (val events:MutableList<Event> = ArrayList()) {
    init{
        getDataEvents()
    }
    fun getDataEvents(): List<Event>{
        events.add(Event(1,"Recuperación semana 13","Clases Presenciales","ic_event_2","2022-07-05"))
        events.add(Event(2,"Evento TyC Week One","TyC Week","ic_event_1","2022-07-15"))
        events.add(Event(3,"Prevención contra el COVID-19","Charlas","ic_event_4","2022-07-10"))
        events.add(Event(4,"prueba evento","prueba1","ic_event_2","2022-06-29"))
        events.add(Event(5,"prueba evento 2","prueba2","ic_event_2","2022-06-29"))
    return events
    }
}