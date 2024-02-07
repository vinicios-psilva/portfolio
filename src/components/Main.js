import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/styles.css';

const Main = () => {
    return (
        <main >
        <section className="jumbotron text-white p-4">
            <div className="container text-center">
                <h1>Vinicios Pereira</h1>
                <p>Engenheiro de Software</p>
                <ul className="social">
                    <a href="" className="bi bi-linkedin"></a>
                    <a href="" className="bi bi-github"></a>
                    <a href="" className="bi bi-whatsapp"></a>
                </ul>
            </div>
        </section>

        <section className="container p-2 section">
            <div className="row justify-content-center">
                <h2 className="text-center p-4">PORTFOLIO</h2>
                <a href="#" className="col-sm-4 col-md-4 col-lg-4 w-25">
                    <figure>
                        <img className="img-fluid rounded-3 " src="/img6.png" alt=""/>
                    </figure>
                </a>
                <a href="#" className="col-sm-4 col-md-4 col-lg-4 w-25">
                    <figure>
                        <img className="img-fluid rounded-3" src="/img7.png" alt=""/>
                    </figure>
                </a>
                <a href="#" className="col-sm-4 col-md-4 col-lg-4 w-25">
                    <figure>
                        <img className="img-fluid rounded-3" src="/img8.png" alt=""/>
                    </figure>
                </a>
            </div>
        </section>

        

        <section className="container p-2">
            <div className="row justify-content-center">
                <h2 className="text-center p-4">ANALISE DE DADOS</h2>
                <a href="#" className="col-sm-4 col-md-4 col-lg-4 w-25">
                    <figure>
                        <img className="img-fluid rounded-3 " src="/img6.png" alt=""/>
                    </figure>
                </a>
                <a href="#" className="col-sm-4 col-md-4 col-lg-4 w-25">
                    <figure>
                        <img className="img-fluid rounded-3" src="/img7.png" alt=""/>
                    </figure>
                </a>
                <a href="#" className="col-sm-4 col-md-4 col-lg-4 w-25">
                    <figure>
                        <img className="img-fluid rounded-3" src="/img8.png" alt=""/>
                    </figure>
                </a>
            </div>
        </section>

        <section className="container p-2">
            <div className="row justify-content-center ">
                <h2 className="text-center p-4">CLOUD COMPUTER</h2>
                <a href="#" className="col-sm-4 col-md-4 col-lg-4 w-25">
                    <figure>
                        <img className="img-fluid rounded-3 " src="/img6.png" alt=""/>
                    </figure>
                </a>
                <a href="#" className="col-sm-4 col-md-4 col-lg-4 w-25">
                    <figure>
                        <img className="img-fluid rounded-3" src="/img7.png" alt=""/>
                    </figure>
                </a>
                <a href="#" className="col-sm-4 col-md-4 col-lg-4 w-25">
                    <figure>
                        <img className="img-fluid rounded-3" src="/img8.png" alt=""/>
                    </figure>
                </a>
            </div>
        </section>

        <section className="container p-2">
            <div className="row justify-content-center">
                <h2 className="text-center p-4">CLOUD COMPUTER 1</h2>
                <div>
                    <div>
                        <div className="carousel-item col-sm-4">
                            <a href="" className="w-25">
                                <figure>
                                    <img className="img-fluid rounded-3" src="/img8.png" />
                                </figure>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="container p-2">
        <div id="carouselExampleInterval" class="carousel slide col-sm-12 col-md-12" data-bs-ride="carousel">
  <div class="carousel-inner row justify-content-md-center d-flex ">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="/img6.png" class="d-block w-25 rounded-3 " alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="10000">
      <img src="/img7.png" class="d-block w-25 rounded-3" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="10000">
      <img src="/img8.png" class="d-block w-25 rounded-3" alt="..."/>
    </div>
  </div>
  
</div>
        </section>

        
        
    </main>
    )
}

export default Main;