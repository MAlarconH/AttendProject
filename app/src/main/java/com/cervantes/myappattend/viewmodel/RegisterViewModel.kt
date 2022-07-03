package com.cervantes.myappattend.viewmodel

import android.content.Context
import androidx.lifecycle.MutableLiveData
import com.cervantes.myappattend.model.User
import com.cervantes.myappattend.util.SharedPreferenceUtil

class RegisterViewModel(private val context: Context) {
    private lateinit var sharedPreferenceUtil: SharedPreferenceUtil

    val emptyUserError = MutableLiveData<Boolean>()
    val emptyEmailError = MutableLiveData<Boolean>()
    val emptyPassword1Error = MutableLiveData<Boolean>()
    val emptyPassword2Error = MutableLiveData<Boolean>()
    val noMatchPassword1and2Error = MutableLiveData<Boolean>()
    val loadLoginActivity = MutableLiveData<Boolean>()

    val goalSuccesActivity = MutableLiveData<Boolean>()


    fun onCreate(){
        sharedPreferenceUtil= SharedPreferenceUtil().also{
            it.setSharedPreference(context)
        }
    }

    fun validateInputs(username: String, email:String, password1: String, password2: String){
        if(username.isEmpty()){
            emptyUserError.postValue(true)
        }else if(email.isEmpty()){
            emptyEmailError.postValue(true)
        }else if(password1.isEmpty()){
            emptyPassword1Error.postValue(true)
        }else if(password2.isEmpty()){
            emptyPassword2Error.postValue(true)
        }else if(password1 != password2){
            noMatchPassword1and2Error.postValue(true)
        }else{
            val user = User(
                "1",
                username,
                email,
                password1)
            sharedPreferenceUtil.saveFacebookUser(user)
            goalSuccesActivity.postValue(true)
        }
    }


    fun sendToLogin(){
        loadLoginActivity.postValue(true)
    }
}