import BGSvg from '../components/bgSvg/BGSvg';
import Layout from '../components/Layout/Layout';

import '../scss/pages/index.scss';

const index = () => (
  <Layout isLanding={true}>
    <div className="landing-page">
      <BGSvg />
      <div className="landing-page__content">
        <h1 className="landing-page__headline slide-in-top">Tony Pettigrew</h1>
        <h2 className="landing-page__sub-headline slide-in-top">
          Full Stack Web Developer
        </h2>
        <p className="landing-page__intro slide-in-left">
          I build customized web solutions for your business and personal
          ventures using Javascript. Need help with a project? Let’s talk!
        </p>
        <a href="#" className="landing-page__email slide-in-bot">
          get@tonypettigrew.dev
        </a>
      </div>
    </div>
  </Layout>
);

export default index;
