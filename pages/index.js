import BGSvg from '../components/bg-svg/BGSvg';
import Header from '../components/header/Header';

import '../scss/pages/index.scss';

const index = () => (
  <div className="landing-page">
    <BGSvg />
    <Header />
    <div className="landing-page__content">
      <h1 className="landing-page__headline slide-in-top">Tony Pettigrew</h1>
      <h2 className="landing-page__sub-headline slide-in-top">
        Full Stack Web Developer
      </h2>
      <p className="landing-page__intro slide-in-left">
        I build customized web solutions for your business and personal needs.
        If you’re curious about how I can help you, <a href="#">get @ me</a>!
      </p>
    </div>
  </div>
);

export default index;
