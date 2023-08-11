import styles from './hero.module.css'

export default function Hero() {
  return (
    <div id={styles.hero} className='container-fluid' >
      <div className={styles.hero}>
        <div className={`row ${styles.rowhero}`}>
            <div className='col-lg-12 my-auto' >
              <h1 id='herotext'>Vitalidad Fitness</h1>
              <p className='lead'>Programas personalizados para todos!</p>
              <div className="container text-center">
                
            <p className='lead text-white text-upper mt-3'>
      
                <a className='btn btn-outline-danger ' href="/"> 
                  <i className="bi bi-facebook"></i>
                </a>
                <a className='btn btn-outline-danger ms-4' href="/">   
                  <i className="bi bi-instagram"></i>
                </a>
       
            </p>
           </div>
              {/* <a href='#contact' className='btn btn-lg btn-danger text-uppercase mt-3'>Schedule free class </a> */}
          </div>
        </div>
      </div>
    </div>
  )
}
