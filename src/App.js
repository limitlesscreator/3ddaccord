import s from './App.module.sass'
import Spline from "@splinetool/react-spline";
import macIcon from '../src/img/macIcon.svg'
import logo from '../src/img/logo.png'
function App() {
  return (
   <div className={s.main}>


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
