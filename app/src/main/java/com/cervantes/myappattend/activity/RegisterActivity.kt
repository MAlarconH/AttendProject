package com.cervantes.myappattend.activity

import android.content.Intent
import android.os.Bundle
import android.view.View
import com.cervantes.myappattend.databinding.ActivityRegisterBinding
import com.cervantes.myappattend.viewmodel.RegisterViewModel

class RegisterActivity: BaseActivity<ActivityRegisterBinding>(ActivityRegisterBinding::inflate) {

    private lateinit var RegisterViewModel: RegisterViewModel

    override fun onCreate(savedInstanceState: Bundle?){
        super.onCreate(savedInstanceState)

        RegisterViewModel = RegisterViewModel(this)

        RegisterViewModel.onCreate()

        RegisterViewModel.emptyUserError.observe(this){
            binding.tvUserName.visibility = View.VISIBLE
            binding.tvUserName.setText("Ingrese el Username")
        }
        RegisterViewModel.emptyEmailError.observe(this){
            binding.tvEmail.visibility = View.VISIBLE
            binding.tvEmail.setText("Ingrese el Email")
        }
        RegisterViewModel.emptyPassword1Error.observe(this){
            binding.tvPassword.visibility = View.VISIBLE
            binding.tvPassword.setText("Ingrese el Password")
        }
        RegisterViewModel.emptyPassword2Error.observe(this){
            binding.tvPassword.visibility = View.VISIBLE
            binding.tvPassword.setText("Ingrese el Password")
        }
        RegisterViewModel.noMatchPassword1and2Error.observe(this){
            binding.tvPassword.visibility = View.VISIBLE
            binding.tvPassword.setText("El password no coincide")
        }
        RegisterViewModel.goalSuccesActivity.observe(this){
            val intent = Intent(applicationContext, LoginActivity::class.java)
            startActivity(intent)
        }

        RegisterViewModel.loadLoginActivity.observe(this){
            val intent = Intent(applicationContext, LoginActivity::class.java)
            startActivity(intent)
        }

    }

    fun loginUser(view: View){
        RegisterViewModel.sendToLogin()
    }
    fun registerUser(view: View) {
        binding.tvUserName.visibility = View.GONE
        binding.tvEmail.visibility = View.GONE
        binding.tvPassword.visibility = View.GONE

        RegisterViewModel.validateInputs(binding.edtUserName.text.toString(),
            binding.edtEmail.text.toString(),
            binding.edtPassword.text.toString(),
            binding.edtPassword2.text.toString())
    }
}