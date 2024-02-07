import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Helmet from "react-helmet";
import styles from "@/styles/styles.css";
import Link from "next/link";

const Sobre = () => {
  return (
    <div>
      <div className="body text-white">
      <Helmet title="Sobre | Vinicios Pereira" />
      <Navbar />
      <Footer />  
      </div>
    </div>    
  ) 
}

export default Sobre;