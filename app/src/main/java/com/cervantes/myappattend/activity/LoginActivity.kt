package com.cervantes.myappattend.activity

import android.content.Intent
import android.os.Bundle
import android.view.View
import com.cervantes.myappattend.databinding.ActivityLoginBinding
import com.cervantes.myappattend.viewmodel.LoginViewModel

class LoginActivity : BaseActivity<ActivityLoginBinding>(ActivityLoginBinding::inflate){

    private lateinit var loginViewModel: LoginViewModel

    override fun onCreate(savedInstanceState: Bundle?){
        super.onCreate(savedInstanceState)

        loginViewModel = LoginViewModel(this)

        loginViewModel.onCreate()

        loginViewModel.emptyEmailError.observe(this){
            binding.tvEdtEmail.visibility = View.VISIBLE
            binding.tvEdtEmail.setText("Ingrese el Email")
        }

        loginViewModel.emptyPasswordError.observe(this){
            binding.tvEdtPassword.visibility = View.VISIBLE
            binding.tvEdtPassword.setText("Ingrese el Password")
        }

        loginViewModel.fieldsAuthenricateError.observe(this){
            binding.tvError.visibility = View.VISIBLE
            binding.tvError.setText("Error de Usuario")
        }

        loginViewModel.goalSuccesActivity.observe(this){
            val intent = Intent(this, MainActivity::class.java)
            startActivity(intent)
        }

    }

    fun startLogin(view: View){
        binding.tvError.visibility = View.GONE
        binding.tvEdtEmail.visibility = View.GONE
        binding.tvEdtPassword.visibility = View.GONE
        loginViewModel.validateInputs(binding.edtEmail.text.toString(),binding.edtPassword.text.toString())

    }

}
