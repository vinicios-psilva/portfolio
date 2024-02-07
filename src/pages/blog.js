import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/styles/styles.css";
import Link from "next/link";
import Helmet from 'react-helmet'


const BlogPost = ({ title, description, date}) => {
    return (
        <div className="col-md-6 d-flex mb-4 p-2 justify-content-center">
            <Helmet title="Blog | Vinicios Pereira" />
            <div className="card  text-white text-center cards">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text "><small className="">{date}</small></p>
                    <a href="#" className="btn">Continua lendo</a>
                </div>
            </div>
        </div>
    );
};

const BlogPage = () => {
    const blogPosts = [
     {
        id: 1,
        title: 'Em contrução',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        date: 'Janeiro 20, 2024'
     },
     {
        id: 2,
        title: 'Em contrução',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        date: 'Janeiro 20, 2024'
     }, 
     {
        id: 3,
        title: 'Em contrução',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        date: 'Janeiro 20, 2024'
     }, 
     {
        id: 4,
        title: 'Em contrução',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        date: 'Janeiro 20, 2024'
     }, 
    ];

    return (
        <div>

            <div className="body text-white">
                <Navbar />

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

                <div className="container border-top ">
                    <div className="row py-4">
                        <div className="col-md-8 col-sm-none">
                            <div className="row row-cols-1 row-cols-md-2 g-4">
                                {blogPosts.map(post => (
                                    <BlogPost
                                      key={post.id}
                                      title={post.title}
                                      description={post.description}
                                      date={post.date}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="col-md-4 post ">
                            <div className="position-sticky mt-2 ">
                                <div>
                                    <h4 className="text-center">Posts recentes</h4>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#" className="d-flex flex-column flex-lg-row  gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                                                <img src="/img6.png" className="img-fluid rounded" width="100" hight="100" alt="Imagem 1" />
                                                <div className="col-lg-8">
                                                    <h6 className="text-white mb-0">Exemplo de posts</h6>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                                                <img src="/img7.png" className="img-fluid rounded" width="100" hight="100" alt="Imagem 1" />
                                                <div className="col-lg-8">
                                                    <h6 className="text-white mb-0">Exemplo de posts</h6>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                                                <img src="/img8.png" className="img-fluid rounded" width="100" hight="100" alt="Imagem 1" />
                                                <div className="col-lg-8">
                                                    <h6 className="text-white mb-0">Exemplo de posts</h6>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
            </div>
        </div>
    )
}

export default BlogPage;
