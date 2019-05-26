import Layout from '../components/Layout/Layout';

import '../scss/pages/about.scss';

const about = () => {
  return (
    <Layout isLanding={false}>
      <main className="about">
        <section className="about__content">
          <h2 className="sub-headline">
            <span>About</span>
            {` `}Tony
          </h2>
          <p className="paragraph--lg paragraph--black">
            My name is Tony Pettigrew and I’m a full stack web developer based
            in Seattle, Wa.
          </p>
          <p className="paragraph">
            I am professionaly passionate about two things. FIRST, the
            creative/technical process involved with materializing web
            appliacations. SECONDLY, helping others through the former to
            acheive an optimized solution. When I’m not working on a client
            based project, I love exploring new web tech or creating patches for
            my Juno-60 (as pictured below) in the depths of my studio.
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
            <span>Educational</span>
            {` `}Background
          </h2>
          <p className="paragraph">
            I graduated from Western Washington University in 2012 with a B.S.
            in Cell Biology. After a stem cell culture internship at University
            of Pittsburgh Medical Center and a year working as a histology
            technician at Presage Biosciences, I was feeling disatisfied with
            the work that I was involved in.
          </p>
          <p className="paragraph">
            During the Summer of 2017 I bought a laptop to build a website for
            my music. I thought, "how hard can it be, right?". In the following
            months, I would discover a love for programatic problem solving that
            was unmet by any other endeavor in my life.
          </p>
          <p className="paragraph">
            After many late nights of slamming my head against the whiteboard,
            reading through docs and console logging all the things, I still
            cherrish the opportunity that I have, each day, to continue learning
            and progressing.
          </p>
        </section>
      </main>
    </Layout>
  );
};

export default about;
