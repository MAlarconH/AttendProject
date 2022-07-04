package com.cervantes.myappattend.adapter

import android.view.LayoutInflater
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import androidx.recyclerview.widget.RecyclerView
import com.cervantes.myappattend.databinding.ItemEventBinding
import com.cervantes.myappattend.model.Event
import de.hdodenhof.circleimageview.CircleImageView

class EventAdapter(private val dataSet: List<Event>): RecyclerView.Adapter<EventAdapter.ViewHolder>() {
    class ViewHolder(private val binding: ItemEventBinding):RecyclerView.ViewHolder(binding.root){
        var picture: ImageView = binding.pictureImage
        var nameEvent: TextView = binding.nameEvent
        var namePresenter: TextView = binding.namePresenter
        var nameTopic: TextView = binding.nameTopic
        var pictureConfirm: CircleImageView = binding.pictureConfirm
        var pictureDeny: CircleImageView = binding.pictureDeny
        var pictureInfo: CircleImageView = binding.pictureInfo
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val itemBinding = ItemEventBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return ViewHolder(itemBinding)
    }

    override fun onBindViewHolder(binding: ViewHolder, position: Int) {
        val event: Event = this.dataSet[position]
        val context = binding.itemView.context
        val idRes = context.resources.getIdentifier(event.picture, "drawable", context.packageName)

        binding.nameEvent.text = event.eventName
        binding.namePresenter.text = event.presenterName
        binding.picture.setImageResource(idRes)
        binding.nameTopic.text = event.topicName

        binding.picture.setOnClickListener{
            TODO()
        }
        binding.pictureConfirm.setOnClickListener{
            Toast.makeText(context,"CONFIRMAR ASISTENCIA",Toast.LENGTH_SHORT).show()
        }
        binding.pictureDeny.setOnClickListener{
            Toast.makeText(context,"NO ASISTIRÉ",Toast.LENGTH_SHORT).show()
        }
        binding.pictureInfo.setOnClickListener{
            Toast.makeText(context,"MOSTRAR INFORMACIÓN",Toast.LENGTH_SHORT).show()
        }
    }
    override fun getItemCount(): Int = dataSet.size
}