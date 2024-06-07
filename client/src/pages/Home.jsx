export const Home = () => {
  return (
    <>
      <main>
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
                  <button className="btn">learn more</button>
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
    </>
  );
};
