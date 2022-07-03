package com.cervantes.myappattend.util

import com.cervantes.myappattend.model.Onboarding

class Mock {
    fun getOnboarding() = listOf(
        Onboarding(
            id = 1,
            img = "",
            nameEvent = "TyC Week",
            title = ""
        )
    )
}