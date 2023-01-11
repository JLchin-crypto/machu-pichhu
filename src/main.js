import './index.scss';
function Main() {
  return (
    <main>
        <div id='block1'>
            <div id='ten-t'></div>
            <div id='main-txt'>
                <a className='Montserrat-SemiBold'>LET US PLAN YOU A PERFECT</a><br/>
                <a className='Baron-Neue-Bold'>MACHU PICCHU <br/>TRIP</a>
            </div>
            <div id='kostyl1'>TRAVEL DETAILS
                <div id='line-1'></div>
            </div>
            <div id='ten-b'></div>
        </div>
        <div id='block2'>
          <img src={process.env.PUBLIC_URL + '/imgs/tattoo.png'} id='block2-tattoo1'/>
          <img src={process.env.PUBLIC_URL + "/imgs/tattoo2.png"} id='block2-tattoo2'/>
          <div id='block2-1'>
          <a>REASONS<br/></a>
          <a>FIVE REASONS WHY<br/>YOU SHOULD VISIT<br/>MACHUPICCHU</a>
          </div>
          <div>
            <table id='block2-content'>
              <tr>
                <td rowSpan={2} id='block2-imgholder'><div id='block2-img' className='b2-i1'/></td>
                <td id='line-to-l'>
                  The Mystery. A lot of people know that if was built by the incas centuries ago in what is today Peru, however, most people don`t know that the site was not "discovered" uneil 1911.
                </td>
              </tr>
              <tr>
                <td id='line-to-l'>Other sites en route. Parallacta is one of the sites you pass by on the Inca Trail. This is a large Inca site located near Machu Picchu.</td>
              </tr>
              <tr>
                <td id='line-to-r'>The Inca Trail. This is one of the most popular ways to get  to Machu Picchu, hiking over a long distance in the Andes Mountains, camping on the trail, and being able to see other Incan ruins.</td>
                <td rowSpan={2} id='block2-imgholder'><div id='block2-img2' className='b2-i2'/></td>
              </tr>
              <tr>
                <td id='line-to-r'>The amazing view. Even in pictures, but seeing the pictures does not compare to actually seeing it in person.</td>
              </tr>
              <tr>
                <td id='block2-imgFIX' ><div id='block2-img3' className='b2-i3'/></td>
                <td id='line-to-l'>Being an explorer. Cutting your way through a forest, exploring ancient ruins, and crossing deadly ancient rope bridges. Enjoy it!</td>
              </tr>
            </table>
          </div>
          <div id='line-2'>
            <div id='block2-dots'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
          </div>
        </div>
    </main>
  );
}

export default Main;
