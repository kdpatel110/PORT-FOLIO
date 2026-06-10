// "About" block: short bio, two quick stats and a second portrait photo.



export function About() {
  return (
    <section id="about-me" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Left: heading, bio paragraph and stats */}
        <div>
          <h2 className="text-3xl font-extrabold leading-tight text-balance md:text-4xl">
            With every line of code, I make the world a little better !
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            A driven Computer Engineering student at L.D. College of Engineering with hands-on experience in full-stack development, AI integration, and open-source ecosystems. Key contributions include developing the university's official admin panel using React.js and JavaScript, serving on the GDGoC-LDCE tech team, and participating in GSSoC '25 and OSCI ’25. Demonstrated technical capability by co-developing "FloatChat," an AI-powered conversational data interface using LangChain and Google Gemini for SIH 2025, backed by an AWS Certified Machine Learning - Specialty credential.
          </p>

        
        </div>

        {/* Right: portrait in a black t-shirt */}
        <div className="flex justify-center">
          <img
            src="/images/portrait-tshirt.png"
            alt="Reza Ghasemzadeh - Professional Developer Portrait"
            className="w-72 md:w-80"
          />
        </div>
      </div>
    </section>
  )
}
