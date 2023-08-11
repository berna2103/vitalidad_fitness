import React from 'react'
import NewsLetterContactForm from '../NewsletterContactForm/NewsLetterContactForm'

export default function MacrosCard({protein, proteinCals, carbs, carbsCals, fat, fatCals, bmr}) {
  return (
    <div className="container text-center">
    {/* <img className="img-fluid mb-4 rounded-3" src="https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg" alt='meat' /> */}
    <h1 className="display-6">Tus Macros!</h1>
    <p className="lead"><span className="fw-bold"><i class="bi bi-patch-check"></i> Proteina: </span>{protein} gr ({proteinCals} cals)</p>
    <p className="lead"><span className="fw-bold"><i class="bi bi-patch-check"></i> Carbs: </span>{carbs} gr ({carbsCals} cals)</p>
    <p className="lead"><span className="fw-bold"><i class="bi bi-patch-check"></i> Grasas: </span>{fat} gr ({fatCals} cals)</p>
    <p className="lead"><span className="fw-bold"><i class="bi bi-patch-check"></i> BMR: </span>{bmr} cals / dia</p>
    <hr></hr>
    <NewsLetterContactForm></NewsLetterContactForm>
  </div>
  )
}
