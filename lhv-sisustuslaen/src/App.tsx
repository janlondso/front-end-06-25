
import './App.css'
import imageBox from './assets/img1.png'
import supportBox from './assets/support.png'
import phoneImg from './assets/phone-call.png'
import emailImg from './assets/email.png'
import plusIcon from './assets/plus.png'
import trashIcon from './assets/trash.png'


function App() {

  return (
    <div className='app'>
      <div className='container-one'>
        <div className="blue-container">
          <div className='info-box'>
            <img className='image-box' src={imageBox} alt="" />
            <div className="info-text">
              <h3>Kas sinu diivan on oma aja ära elanud?</h3>
            <p>
              Oled väsinud segadusest, kus asjadel pole oma kohta. Oled unistanud lausa täiesti uuest sisekujundusest, aga kõik tundub korraga liiga kallis? LHV sisustuslaenuga saad oma unistused ellu viia juba täna.</p>
             <p><a href='#'>Loe lisa</a></p>
            </div>
          </div>
        </div>
      </div>
      {/* container-two */}
      <div className="container-two">
        <h1><b>Koosta soovinimekiri</b> ja vaata oma uue sisustuse kuumakset</h1>
        <div className="container">
          <div className="box">
            <table>
              <thead>
                <tr>
                  <th className='header-label'>TOODE</th>
                  <th className='header-label'>HIND</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="text" placeholder='Diivan' /></td>
                  <td>500</td>
                  <td className='eur'>€</td>
                </tr>
                <tr>
                  <td>Lamp</td>
                  <td>85</td>
                  <td className='eur'>€</td>
                </tr>
                <tr>
                  <td className='no-border'>
                    <p className='add'><img className='plus'
                    src={plusIcon} alt="" />
                    Lisa toode
                    </p>  
                  </td>
                  <td className='no-border'></td>
                  <td className='no-border'>
                    <p className='delete'><img className='trash'
                    src={trashIcon} alt="" />
                    Kustuta
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="box">
            <p className='sum'>585€</p>
            <p className='take-loan'><button>Taotle sisustuslaenu</button></p>
            <p className='check'><a href="#">Tutvu tingimustega</a></p>
          </div>
        </div>
      </div>
      {/* Container three */}
      <div className="container-three">

        <div className="container-box">
           <div className='support-image'><img className='support-img' src={supportBox} alt="" /></div>
        <div className='support-text'> 
          <h2><span className='lhv'>LHV</span> Klienditugi</h2>
          <p>Kui sul tekib pangateenuse kasutamisel probleeme, saad klienditoe infotelefonilt abi ööpäev ringi. </p>
        </div>
        </div>

        <div className="container-box">
          <div className="phone">
            <span>
              <img className='phone-icon' src={phoneImg} alt="" />
              </span>
              <span>6 800 400</span>
          </div>
          <div className="email">
            <span>
              <img className='email-icon' src={emailImg} alt="" />
              </span>
              <span>info@lhv.ee</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
