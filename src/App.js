import s from './App.module.sass'
import Spline from "@splinetool/react-spline";
import macIcon from '../src/img/macIcon.svg'
import logo from '../src/img/logo.png'
function App() {
  return (
   <div className={s.main}>

        <div className={s.secondHeader}>
            <nav  className="navbar navbar-expand-lg"  style={{backgroundColor: '#0e1129'}}>
                <div className="container-fluid">
                    <img src={logo} alt="Logo"
                         className="d-inline-block align-text-top"/>
                    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"  style={{filter: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(260deg) brightness(110%) contrast(104%)'}}></span>
                    </button>
                    <div className="collapse navbar-collapse"  style={{backgroundColor: '#0e1129'}}  id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                            </li>
                             <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#">Download</a>
                            </li>
                             <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#">App</a>
                            </li>
                             <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#">Login</a>
                            </li>
                             <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#">Get Started</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
       <header>
           <img src={logo} alt="logo"/>
           <a href="#">Home</a>
           <a href="#">Download</a>
           <a href="#">App</a>
           <a href="#">Login</a>
           <button>Get Started</button>
       </header>
       <div className={s.spline}>
           <Spline  scene="https://prod.spline.design/X243UUlVPWU5MiQl/scene.splinecode" />
       </div>
       <h1>Collaborate with people
           <div className={s.stick}></div>
       </h1>
       <p className={s.subTitle}>Bring your team together and build your community by using our cross-platform app that lets you collaborate via chat, voice and by sharing and storing unlimited media files. A world of topics is waiting for you. Join the private beta.</p>
       <button className={s.download}>
           <div>
               <img className={s.iconMac} src={macIcon} alt="mac"/>
               Download for Mac
           </div>
       </button>
   </div>
  );
}

export default App;
