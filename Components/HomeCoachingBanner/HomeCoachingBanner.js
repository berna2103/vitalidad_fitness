import React from 'react'

export default function HomeCoachingBanner() {
  return (
    <div className='container-fluid pt-5 pb-5 bg-dark text-white'>
        <div className='container'>
        <h1 className='display-6 text-center'>
            Coaching personalizado
        </h1>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 col-sm-12'>
                    <div className='card text-center text-dark p-3 mt-4 mb-3'>
                        <p><i className="bi bi-basket2-fill display-3"></i></p>
                        <p className='text-dark display-6'>Nutricion</p>
                        <p className='text-muted lead'>
                            Obten un plan de nutricion personalizado. 
                            El plan incluye los macro nutrientes que tu
                            cuerpo necesita de acuerdo a tus metas 
                            de fitness. Semanalmente tus macros son optmizados para obtener 
                            resultados mas rapido. 
                        </p>
                        <a href='/coaching' className='btn btn-dark'>Mas informacion</a>
                    </div> 
                </div>
                <div className='col-lg-4 col-sm-12'>
                <div className='card text-center text-dark p-3 mt-4 mb-3'>
                        <p><i className="bi bi-trophy display-3 "></i></p>
                        <p className='text-dark display-6'>Coaching</p>
                        <p className='text-muted lead'>
                            Nuestro coaching personalizado utiliza AI para crear una plan 
                            de nutricion y ejercicios personalizado a tus metas y necesidades. 
                            Semanalmente monitorea resultados y optimiza el plan de acuerdo a
                            los resultados obtenidos.
                        </p>
                        <a href='/coaching' className='btn btn-dark'>Mas informacion</a>
                    </div> 
                 </div>
                <div className='col-lg-4 col-sm-12'>
                <div className='card text-center text-dark p-3 mt-4 mb-3'>
                        <p><i className="bi bi-clipboard2-check  display-3 "></i></p>
                        <p className='text-dark display-6'>Entrenamientos</p>
                        <p className='text-muted lead'>
                            El plan de entrenamientos es creado de acuerdo a tus necesidades.
                            Tu elijes cuantos dias puedes ejercitarte. Tu elijes si quieres
                            hacer ejercicios en el gym, en tu casa, en el parque, 
                            los ejercicios son personalizados no todos somos iguales!
                        </p>
                        <a href='/coaching' className='btn btn-dark'>Mas informacion</a>
                    </div> 
                 </div>
            </div>
        </div>
    </div>
  )
}
