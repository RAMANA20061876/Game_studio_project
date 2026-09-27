import { useEffect, useState } from 'react'
import './App.css'

const games = [
  {
    id: 1,
    title: 'NEON HORIZON',
    genre: 'ACTION • SCI-FI • ADVENTURE',
    description:
      'A futuristic city. A broken world. One final mission. Explore a massive cyberpunk world filled with secrets and danger.',
    year: '2026',
    platform: 'PC • PLAYSTATION • XBOX',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 2,
    title: 'DARK LEGACY',
    genre: 'RPG • FANTASY • OPEN WORLD',
    description:
      'Enter a forgotten kingdom where ancient powers awaken and every decision shapes your journey.',
    year: '2027',
    platform: 'PC • PLAYSTATION',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 3,
    title: 'CYBER STRIKE',
    genre: 'FPS • CYBERPUNK • MULTIPLAYER',
    description:
      'Join an elite squad and fight through a futuristic battlefield where technology decides who survives.',
    year: '2027',
    platform: 'PC • XBOX • PLAYSTATION',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=85',
  },
]

function App() {
  const [selectedGame, setSelectedGame] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mouse, setMouse] = useState({ x: 50, y: 50 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 100
      const y = (event.clientY / window.innerHeight) * 100

      setMouse({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedGame(null)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })

    setMenuOpen(false)
  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })

    setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill all fields.')
      return
    }

    setSubmitted(true)

    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <div
      className="app"
      style={{
        '--mouse-x': `${mouse.x}%`,
        '--mouse-y': `${mouse.y}%`,
      }}
    >

      {/* BACKGROUND EFFECTS */}

      <div className="noise"></div>

      <div className="particles">
        {Array.from({ length: 35 }).map((_, index) => (
          <span key={index}></span>
        ))}
      </div>


      {/* NAVBAR */}

      <nav className="navbar">

        <button
          className="brand"
          onClick={() => scrollTo('home')}
        >
          <span className="brand-symbol">G</span>
          GAMEFORGE
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>

          <button onClick={() => scrollTo('home')}>
            HOME
          </button>

          <button onClick={() => scrollTo('games')}>
            GAMES
          </button>

          <button onClick={() => scrollTo('about')}>
            ABOUT
          </button>

          <button onClick={() => scrollTo('team')}>
            TEAM
          </button>

          <button onClick={() => scrollTo('contact')}>
            CONTACT
          </button>

        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </nav>


      {/* HERO */}

      <section id="home" className="hero">

        <div className="hero-grid"></div>

        <div className="hero-light"></div>

        <div className="hero-content">

          <div className="hero-tag">
            <span></span>
            INDEPENDENT GAME STUDIO
          </div>

          <h1>
            WE CREATE
            <br />

            <span className="outline-text">
              WORLDS
            </span>

            <span className="solid-text">
              BEYOND
            </span>
          </h1>

          <p className="hero-description">
            We design immersive universes, unforgettable
            characters and experiences that push the
            boundaries of gaming.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => scrollTo('games')}
            >
              EXPLORE GAMES
              <span>↗</span>
            </button>

            <button
              className="play-btn"
              onClick={() => scrollTo('about')}
            >
              <span className="play-icon">▶</span>
              OUR STORY
            </button>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1600&q=85"
            alt="Gaming setup"
          />

          <div className="hero-image-overlay"></div>

          <div className="image-label">
            <span>01</span>
            GAME DEVELOPMENT
          </div>

        </div>

        <div className="hero-bottom">

          <div>
            <strong>01</strong>
            <span>EXPLORE</span>
          </div>

          <div>
            <strong>SCROLL</strong>
            <span>↓</span>
          </div>

        </div>

      </section>


      {/* MARQUEE */}

      <div className="marquee">

        <div className="marquee-track">
          GAME DEVELOPMENT
          <span>✦</span>
          IMMERSIVE WORLDS
          <span>✦</span>
          DIGITAL EXPERIENCES
          <span>✦</span>
          GAME DEVELOPMENT
          <span>✦</span>
          IMMERSIVE WORLDS
          <span>✦</span>
          DIGITAL EXPERIENCES
          <span>✦</span>
        </div>

      </div>


      {/* GAMES */}

      <section id="games" className="games-section">

        <div className="section-header">

          <div>

            <p className="eyebrow">
              01 / OUR CREATIONS
            </p>

            <h2>
              FEATURED
              <br />
              <span>GAMES</span>
            </h2>

          </div>

          <p className="section-intro">
            Worlds built from imagination.
            Experiences crafted for players.
          </p>

        </div>


        <div className="games-grid">

          {games.map((game, index) => (

            <article
              className={`game-card card-${index + 1}`}
              key={game.id}
              onClick={() => setSelectedGame(game)}
            >

              <div className="game-photo">

                <img
                  src={game.image}
                  alt={game.title}
                />

                <div className="photo-overlay"></div>

                <div className="game-number">
                  0{game.id}
                </div>

                <div className="game-status">
                  COMING SOON
                </div>

                <div className="view-circle">
                  ↗
                </div>

              </div>

              <div className="game-info">

                <p>{game.genre}</p>

                <h3>
                  {game.title}
                </h3>

                <span>
                  VIEW PROJECT →
                </span>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ABOUT */}

      <section id="about" className="about-section">

        <div className="about-visual">

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="core">
            GF
          </div>

          <div className="orbit-label label-one">
            CREATIVITY
          </div>

          <div className="orbit-label label-two">
            TECHNOLOGY
          </div>

          <div className="orbit-label label-three">
            STORY
          </div>

        </div>


        <div className="about-content">

          <p className="eyebrow">
            02 / WHO WE ARE
          </p>

          <h2>
            WE DON'T JUST
            <br />
            <span>MAKE GAMES.</span>
          </h2>

          <p className="large-text">
            We build worlds people want to lose themselves in.
          </p>

          <p>
            GameForge is a next-generation independent game
            studio focused on creating visually stunning,
            emotionally engaging and technically ambitious
            gaming experiences.
          </p>

          <button
            className="line-button"
            onClick={() => scrollTo('team')}
          >
            MEET THE TEAM
            <span>↗</span>
          </button>

        </div>

      </section>


      {/* STATS */}

      <section className="stats-section">

        <div className="stat">
          <strong>12</strong>
          <span>Games Created</span>
        </div>

        <div className="stat">
          <strong>25</strong>
          <span>Creative Minds</span>
        </div>

        <div className="stat">
          <strong>5M</strong>
          <span>Players Reached</span>
        </div>

        <div className="stat">
          <strong>08</strong>
          <span>Years Creating</span>
        </div>

      </section>


      {/* TEAM */}

      <section id="team" className="team-section">

        <div className="section-header">

          <div>

            <p className="eyebrow">
              03 / THE CREW
            </p>

            <h2>
              MEET THE
              <br />
              <span>CREATORS</span>
            </h2>

          </div>

          <p className="section-intro">
            Designers. Developers. Artists.
            Storytellers. One team.
          </p>

        </div>


        <div className="team-grid">

          <div className="team-member">

            <div className="member-image member-one">
              AC
            </div>

            <div>
              <h3>ALEX CARTER</h3>
              <p>Creative Director</p>
            </div>

            <span>01</span>

          </div>


          <div className="team-member">

            <div className="member-image member-two">
              RC
            </div>

            <div>
              <h3>RYAN COLE</h3>
              <p>Lead Developer</p>
            </div>

            <span>02</span>

          </div>


          <div className="team-member">

            <div className="member-image member-three">
              MS
            </div>

            <div>
              <h3>MAYA STONE</h3>
              <p>Game Designer</p>
            </div>

            <span>03</span>

          </div>

        </div>

      </section>


      {/* CONTACT */}

      <section id="contact" className="contact-section">

        <div className="contact-glow"></div>

        <div className="contact-content">

          <p className="eyebrow">
            04 / START SOMETHING
          </p>

          <h2>
            HAVE AN IDEA?
            <br />
            <span>LET'S BUILD IT.</span>
          </h2>

          <p>
            Tell us about your next game,
            project or crazy idea.
          </p>

        </div>


        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="input-row">

            <input
              name="name"
              type="text"
              placeholder="YOUR NAME"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              name="email"
              type="email"
              placeholder="YOUR EMAIL"
              value={formData.email}
              onChange={handleChange}
            />

          </div>

          <textarea
            name="message"
            placeholder="TELL US ABOUT YOUR IDEA..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button className="send-button">
            SEND MESSAGE
            <span>↗</span>
          </button>

          {submitted && (
            <div className="success">
              ✓ MESSAGE RECEIVED — WE'LL BE IN TOUCH.
            </div>
          )}

        </form>

      </section>


      {/* FOOTER */}

      <footer>

        <button
          className="brand footer-brand"
          onClick={() => scrollTo('home')}
        >
          <span className="brand-symbol">G</span>
          GAMEFORGE
        </button>

        <p>
          © 2026 GAMEFORGE STUDIO
        </p>

        <button
          className="back-top"
          onClick={() => scrollTo('home')}
        >
          BACK TO TOP ↑
        </button>

      </footer>


      {/* GAME MODAL */}

      {selectedGame && (

        <div
          className="modal"
          onClick={() => setSelectedGame(null)}
        >

          <div
            className="modal-box"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setSelectedGame(null)}
            >
              ×
            </button>

            <img
              src={selectedGame.image}
              alt={selectedGame.title}
            />

            <div className="modal-details">

              <p className="eyebrow">
                {selectedGame.genre}
              </p>

              <h2>
                {selectedGame.title}
              </h2>

              <p>
                {selectedGame.description}
              </p>

              <div className="details-grid">

                <div>
                  <span>RELEASE</span>
                  <strong>{selectedGame.year}</strong>
                </div>

                <div>
                  <span>PLATFORM</span>
                  <strong>{selectedGame.platform}</strong>
                </div>

              </div>

              <button
                className="primary-btn"
                onClick={() => setSelectedGame(null)}
              >
                CLOSE PROJECT
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  )
}

export default App