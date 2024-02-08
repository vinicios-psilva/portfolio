import Link from "next/link"
import styles from '../styles/styles.css'

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-2">
            <div className="container d-flex justify-content-center">
                <span>
                    &copy; 2024 Todos os direitos reservados
                </span>
            </div>
        </footer>
    )
}

export default Footer;