package com.cervantes.myappattend.activity

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.cervantes.myappattend.EventRepository
import com.cervantes.myappattend.adapter.EventAdapter
import com.cervantes.myappattend.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding
    private lateinit var eventListRecyclerView: RecyclerView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)
        setRecyclerView()
    }
    private fun setRecyclerView(){
        eventListRecyclerView = binding.eventsList
        eventListRecyclerView.layoutManager = LinearLayoutManager(this)
        val events = EventRepository()
        val adapter = EventAdapter(events.events)
        eventListRecyclerView.adapter = adapter
    }
}