import Layout from '../components/Layout/Layout';

import '../scss/pages/about.scss';

const about = ({ pathname }) => {
  return (
    <Layout pathname={pathname} isLanding={false}>
      <main className="about">
        <section className="about__content">
          <h2 className="sub-headline">
            <span>About</span>
            {` `}Tony
          </h2>
          <p className="paragraph--lg paragraph--black">
            My name is Tony Pettigrew and I’m a full stack web developer based
            in Seattle.
          </p>
          <p className="paragraph">
            I am professionally passionate about two things: FIRST, the
            creative/technical problem solving process involved with
            materializing web applications. SECONDLY, helping others through the
            former to achieve an elegant solution. When I’m not working on a
            client based project, I love exploring new web tech and creating
            patches for my Juno-60 (as pictured below) in the depths of my
            studio.
          </p>
        </section>
        <div className="about__img-display">
          <img
            src="/static/img/tony-keyboard.png"
            alt="Tony playing a Roland Juno-60 synthesizer on stage"
            className="about__img"
          />
          <img
            src="/static/img/tony-sloth.png"
            alt="Tony attempting to pet a sloth"
            className="about__img"
          />
        </div>
        <section className="about__content">
          <h2 className="sub-headline">
            <span>My</span>
            {` `}Background
          </h2>
          <p className="paragraph">
            I graduated from Western Washington University in 2012 with a B.S.
            in Cell Biology. After a stem cell culture internship at University
            of Pittsburgh Medical Center and a year working as a histology
            technician at Presage Biosciences, I was feeling dissatisfied with
            the work that I was involved in. So, I started exploring
            alternatives.
          </p>
          <p className="paragraph">
            I decided to try my hand at web development, so I bought a laptop to
            build a website for my music. I thought, "how hard can it be,
            right?" What started as a simple, pragmatic endeavor, ended up
            igniting a passion I didn't know I had: programmatic problem
            solving.
          </p>
          <p className="paragraph">
            Excitedly, I spent many late nights reading through technical
            documentation, slamming my head against a whiteboard, and console
            logging <span className="paragraph--italic">all the things</span>.
            I’ve reached a point where I can confidently build the web solutions
            my clients need, but there’s a fire in me now, and I still take
            every opportunity to continue learning, progressing, and innovating.
          </p>
        </section>
      </main>
    </Layout>
  );
};

about.getInitialProps = async ({ pathname }) => {
  return { pathname };
};

export default about;
