import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/styles.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm  ">
    <div className="container ">
        <a href="/" className="navbar-brand">
            <img src="favicon.ico" alt="logo" className="logo"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
            <ul className="navbar-nav mr-auto ">
                <li className="nav-item ">
                    <Link href="/" legacyBehavior>
                        <a className="nav-link text-white">HOME</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/blog" legacyBehavior>
                        <a className="nav-link text-white">BLOG</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/sobre" legacyBehavior>
                        <a className="nav-link text-white">SOBRE MIM</a>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
    
    </nav>

  );
};

export default Navbar;