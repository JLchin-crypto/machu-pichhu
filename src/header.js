import './index.scss';
import $, { event } from 'jquery';

function Header() {
  var burg = 'closed';

  function burg_open() {
      if (burg == 'closed') {
        document.querySelector("#burg").src = 'svg/burg_hover.svg';
        document.querySelector("#nav-mobile").className = 'nav-mob-open';
        burg = 'open';
      }
      else if (burg == 'open') {
        document.querySelector("#burg").src = 'svg/burg_white.svg';
        document.querySelector("#nav-mobile").className = 'nav-mob-close';
        burg = 'closed';
      };
      
    };
    var prev_pos = 0;
    $(window).scroll(function() { 
      var element = $('#block1');
      var element_top = element.offset().top;
      var element_bottom = element.offset().top + element.height();
      var w_height = $(window).height();
      if (($(window).scrollTop() < element_top - w_height) || ($(window).scrollTop() > element_bottom)) {
        document.querySelector('#to-top').style.display = 'block';
      } else {
        document.querySelector('#to-top').style.display = 'none';
      };
      if (document.querySelector('#nav-mobile').classList.contains('nav-mob-close')) {
      if (prev_pos<window.scrollY) {
        prev_pos = window.scrollY;
        document.querySelector('#nav-mob').classList.add('hide');
        document.querySelector('#nav-mob').classList.remove('show');
      }
      else if (prev_pos>window.scrollY) {
        prev_pos = window.scrollY;
        document.querySelector('#nav-mob').classList.add('show');
        document.querySelector('#nav-mob').classList.remove('hide');
      }}

    })
    function to_top() {
      $('html').animate({scrollTop: 0}, 1000);
    };
  return (
    <header>
      <div id='to-top' onClick={to_top}></div>
      <div className='nav-mob-close' id='nav-mobile'>
        <div id='nav-mob-social'>
          <div id='wa'></div>
          <div id='viber'></div>
          <div id='tg'></div>
        </div>
        <div className='nav-mobill'>
        <a>INFO</a>
        <a>TOURS</a>
        <a>GALLERY</a>
        <a>ABOUT US</a>
        <a>CONTACTS</a>
        </div>
      </div>
      <nav id='nav-desk'>
        <div>
          <a className='logo'>
            DREAM<br/>MACHU.
          </a>
        </div>
        <div id='nav-cen'>
          <a>INFO</a>
          <a>TOURS</a>
          <a>GALLERY</a>
          <a>ABOUT US</a>
          <a>CONTACTS</a>
        </div>
        <div id='nav-r'>
          <div id='wa'></div>
          <div id='viber'></div>
          <div id='tg'></div>
        </div>
      </nav>
      <nav id='nav-mob'>
          <a className='logo' id='logo-mob'>
            DREAM<br/>MACHU.
          </a>
          <img src='svg/burg_white.svg' id='burg' onClick={burg_open}/>
      </nav>
    </header>
  );

}



export default Header;
