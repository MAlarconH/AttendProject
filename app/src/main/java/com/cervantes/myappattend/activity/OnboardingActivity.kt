package com.cervantes.myappattend.activity

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.LinearLayout
import androidx.core.content.ContextCompat
import androidx.core.view.get
import androidx.viewpager2.widget.ViewPager2
import com.cervantes.myappattend.R
import com.cervantes.myappattend.adapter.OnboardingAdapter
import com.cervantes.myappattend.databinding.ActivityOnboardingBinding
import com.cervantes.myappattend.util.Mock
import com.cervantes.myappattend.util.SharedPreferenceUtil

class OnboardingActivity : BaseActivity<ActivityOnboardingBinding>(ActivityOnboardingBinding::inflate) {

    private val adapter = OnboardingAdapter(Mock().getOnboarding())

    private lateinit var sharedPreferenceUtil: SharedPreferenceUtil

    override fun onCreate(savedInstanceState: Bundle?){
        super.onCreate(savedInstanceState)
        binding.vpOnboarding.adapter = adapter

        sharedPreferenceUtil = SharedPreferenceUtil().also {
            it.setSharedPreference(this)
        }
        setupIndicator()
        setCurrentIndicator(0)

        binding.vpOnboarding.registerOnPageChangeCallback(object: ViewPager2.OnPageChangeCallback(){
            override fun onPageSelected(position: Int){
                super.onPageSelected(position)
                setCurrentIndicator(position)
                validateShowButton(position)
            }
        })

        binding.layBackButton.setOnClickListener {
            sharedPreferenceUtil.saveIntroShow()
            startActivity(Intent(this, RegisterActivity::class.java))
        }
    }

    private fun setupIndicator(){
        val indicator = arrayOfNulls<ImageView>(adapter.itemCount)
        val layoutParams: LinearLayout.LayoutParams=
            LinearLayout.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT)
        layoutParams.setMargins(8,0,8,0)
        for(i in indicator.indices){
            indicator[i]=ImageView(applicationContext)
            indicator[i].apply {
                this?.setImageDrawable(
                    ContextCompat.getDrawable(
                        applicationContext,
                        R.drawable.ic_circle
                    )
                )
                this?.layoutParams = layoutParams
            }
            binding.dots.addView(indicator[i])
        }
    }

    private fun validateShowButton(itemCount:Int){
        if (itemCount == 2){
            binding.layBackButton.visibility = View.VISIBLE
        }
    }

    private fun setCurrentIndicator(position: Int){
        val childCount = binding.dots.childCount

        for(i in 0 until childCount){
            val imageView = binding.dots[i] as ImageView
            if(i==position){
                imageView.setImageDrawable(
                    ContextCompat.getDrawable(this, R.drawable.ic_blue_circle)
                )
            } else {
                imageView.setImageDrawable(
                    ContextCompat.getDrawable(this, R.drawable.ic_circle)
                )
            }
        }
    }
}