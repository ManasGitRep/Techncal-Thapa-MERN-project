export const Home = () => {
  return (
    <>
      <main>
        {/* first section */}
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                alias labore quas pariatur distinctio nisi repellendus dolor vel
                doloribus porro?
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/service">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>
            {/* hero-image */}
            <div className="hero-image">
              <img
                src="/images/login.jpg"
                alt="coding together"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
      </main>
      {/* second section */}
      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>registration companies</p>
          </div>
          <div className="div1">
            <h2>100,00+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="div1">
            <h2>500+</h2>
            <p>well known developers</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>service</p>
          </div>
        </div>
      </section>
      {/* third section */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero-image */}
          <div className="hero-image">
            <img
              src="/images/login.jpg"
              alt="coding together"
              width={500}
              height={500}
            />
          </div>
          <div className="hero-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem alias
              labore quas pariatur distinctio nisi repellendus dolor vel
              doloribus porro?
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/service">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
