import { useState } from "react";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    passwaord: "",
  });
  //same as registration
  // handling the input values
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handling the form submition
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(user);
    console.log(user);
  };

  return (
    <>
      <section>
        <main>
          <div className="section-login">
            <div className=".container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/login.jpg"
                  alt="login form image"
                  width="500"
                  height="500"
                />

                <div>
                  <div className="login-form">
                    <h1 className="main-heading mb-3">Login Form</h1>
                    <br />
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="email">email</label>
                        <input
                          type="email"
                          name="email"
                          placeholder=" Enter your email"
                          id="email"
                          required
                          autoComplete="off"
                          value={user.email}
                          onChange={handleInput}
                        />
                      </div>
                      <div>
                        <label htmlFor="password">password</label>
                        <input
                          type="password"
                          name="password"
                          placeholder=" password"
                          id="password"
                          required
                          autoComplete="off"
                          value={user.password}
                          onChange={handleInput}
                        />
                      </div>
                      <br />
                      <button type="submit" className="btn btn-submit">
                        Login
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
