import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; 
import Link from "next/link"
import styles from '../styles/styles.css'
import Helmet from 'react-helmet'



const Home = () => {
  return (
    <div>
      <div className="body text-white">
      <Helmet title="Home | Vinicios Pereira" />
        <Navbar />
        <main>
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

        {/* Seções */}

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

        <section className="container p-2 section">
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

        <section className="container p-2 section">
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

        {/* Fim das seções */}

        {/* Inicio carousel*/}

        <section className="container p-2 carousel">
            <div className="container">
                <h2 className="text-center p-4">WEBSITES</h2>
                <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="100">
                            <img src="/img6.png" className="d-block w-50 mx-auto rounded-3" alt="Imagem 1"/>
                        </div>
                        <div className="carousel-item" data-interval="100">
                            <img src="/img7.png" className="d-block w-50 mx-auto rounded-3" alt="Imagem 2"/>
                        </div>
                        <div className="carousel-item" data-interval="100">
                            <img src="/img8.png" className="d-block w-50 mx-auto rounded-3" alt="Imagem 3"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="container p-2 carousel">
            <div className="container">
                <h2 className="text-center p-4">ANALISES DE DADOS</h2>
                <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="100">
                            <img src="/img6.png" className="d-block w-50 mx-auto rounded-3" alt="Imagem 1"/>
                        </div>
                        <div className="carousel-item" data-interval="100">
                            <img src="/img7.png" className="d-block w-50 mx-auto rounded-3" alt="Imagem 2"/>
                        </div>
                        <div className="carousel-item" data-interval="100">
                            <img src="/img8.png" className="d-block w-50 mx-auto rounded-3" alt="Imagem 3"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="container p-2 carousel">
            <div className="container">
                <h2 className="text-center p-4">CLOUD COMPUTER</h2>
                <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="100">
                            <img src="/img6.png" className="d-block w-50 mx-auto rounded-3" alt="Imagem 1"/>
                        </div>
                        <div className="carousel-item" data-interval="100">
                            <img src="/img7.png" className="d-block w-50 mx-auto rounded-3" alt="Imagem 2"/>
                        </div>
                        <div className="carousel-item" data-interval="100">
                            <img src="/img8.png" className="d-block w-50 mx-auto rounded-3" alt="Imagem 3"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Fim do carousel */}

  
        </main>

        <Footer />
      </div>

        <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossOrigin="anonymous"></script>
    </div>
  );
};

export default Home;
