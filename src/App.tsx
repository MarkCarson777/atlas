import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      const res = await fetch("https://formspree.io/f/mlgaarza", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
        setError("");
      } else {
        setError("Something went wrong. Try again.");
      }
    } catch {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="page">
      <header className="header">
        <span className="logo">passgym</span>
      </header>

      <main className="main">
        <section className="hero">
          <p className="eyebrow">For nomads who train</p>
          <h1 className="headline">
            Find gyms that actually sell day passes, without the guesswork.
          </h1>
          <p className="subhead">
            You're in a new city. You want to train. So you Google, tab-hop,
            call a number that rings out, walk in somewhere that looks right,
            only to hear "members only." Every city is different. Every gym
            website is outdated. And you waste an hour you didn't have.
          </p>
          <p className="subhead">
            passgym is a directory of gyms worldwide that sell day passes and
            week passes, with real prices, real availability, and no commitment
            required.
          </p>
        </section>

        <section className="pain">
          <div className="pain-grid">
            <div className="pain-card">
              <span className="pain-icon">📍</span>
              <h3>Every city is different</h3>
              <p>
                Drop-in culture varies wildly. What's standard in Berlin doesn't
                exist in Bangkok.
              </p>
            </div>
            <div className="pain-card">
              <span className="pain-icon">🕳️</span>
              <h3>Gym websites are a lie</h3>
              <p>
                Prices haven't been updated since 2019. "Contact us" is not a
                pricing strategy.
              </p>
            </div>
            <div className="pain-card">
              <span className="pain-icon">💸</span>
              <h3>Rates are all over the place</h3>
              <p>
                £5 or £40 for the same thing? You shouldn't have to walk in to
                find out.
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2 className="cta-headline">Be the first to know when we launch.</h2>
          <p className="cta-sub">
            We're building this. Leave your email and we'll let you know when
            it's ready.
          </p>

          {submitted ? (
            <div className="success">
              You're on the list. We'll be in touch.
            </div>
          ) : (
            <form className="email-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="email-input"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="submit-btn">
                Notify me
              </button>
              {error && <p className="form-error">{error}</p>}
            </form>
          )}
        </section>
      </main>

      <footer className="footer">
        <p>passgym. For people who move and still want to lift.</p>
      </footer>
    </div>
  );
}

export default App;
