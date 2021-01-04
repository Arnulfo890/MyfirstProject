const banner = document.querySelector('.banner');
const buttons = document.querySelector('.buttons');

const t1 = new TimelineMax();

t1.fromTo(banner,1, {height: '50%'}, {height: '10%' , ease: Power2.easeInOut});
  