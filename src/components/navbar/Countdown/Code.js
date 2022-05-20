
import './index.css';
function Counter() {
  return (
    <div className='spin-eye-div'>
    <img src='/images/eyeSpin.png' alt='' className='spin-eye'/>
    
    <div class="main">
       <h1>CoinView | Countdown <p>(Under development)</p></h1>
       

<div id="countdown" class="countdown">
  <div class="time">
    <h2 id="days"> </h2>
    <small>Days</small>
  </div>

  <div class="time">
    <h2 id="hours"> </h2>
    <small>hours</small>
  </div>

  <div class="time">
    <h2 id="minutes"> </h2>
    <small>Minutes</small>
  </div>

  <div class="time">
    <h2 id="seconds"> </h2>
    <small>Seconds</small>
  </div>
</div>
<footer class="text-center text-white">

  <div class="container pt-4">
  
    <section class="mb-4">
    
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i
      ></a>
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-instagram"></i
      ></a>
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-github"></i
      ></a>
    </section>
  </div>
  <div class="text-center text-dark p-3">
    © 2022 Copyright: 
    <a class="text-dark" href="https://coinview.eth.link/"> CoinView.eth</a>
  </div>
</footer>
    </div>
    </div>
    
  );
}

export default Counter;
