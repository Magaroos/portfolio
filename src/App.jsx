import profile from './assets/profile.jpeg'
export default function Portfolio() {
  const projects = [
    {
      title: "LifeLink",
      desc: "Blood bank management system for managing donors and emergency blood requests efficiently.",
      tech: ["React.js", "Node.js", "MongoDB"],
    },
    {
      title: "Encrova",
      desc: "Secure file-sharing platform with authentication, Cloudinary integration and protected file transfer.",
      tech: ["React.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
    },
  ];

  const skills = [
    {
      title: "Frontend",
      items: ["React.js"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express.js"],
    },
    {
      title: "Database",
      items: ["MongoDB"],
    },
    {
      title: "Cloud Service",
      items: ["Cloudinary"],
    },
    {
      title: "Tools & Platforms",
      items: ["Git", "GitHub", "VS Code", "Postman"],
    },
    {
      title: "Learning / Exploring",
      items: [
        "JWT Authentication",
        "REST APIs",
        "File Upload Systems",
        "React Router",
        "AI Automation",
        "Secure Authentication",
        "Encryption Basics",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-black tracking-wide bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            MM
          </h1>

          <div className="hidden md:flex gap-10 text-sm text-gray-300">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.2),transparent_35%)]" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 pt-32">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-300 text-sm mb-6">
              Full Stack Developer
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Hi, I’m <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">
                Mohamed Magaroos
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-6">
              AI • Cloud • Web Development
            </h2>

            <p className="text-gray-400 text-lg leading-8 max-w-xl mb-10">
              I build modern, secure and scalable web applications with AI-powered automation and cloud integration that solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold hover:scale-105 transition"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition"
              >
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 hover:bg-cyan-400/20 transition"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

            <div className="relative bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-xl shadow-2xl">
              <img
                src="/profile.jpeg"
                alt="developer"
                className="w-full max-w-md rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              About Me
            </p>

            <h2 className="text-5xl font-black mb-8">Who I Am</h2>

            <p className="text-gray-400 text-lg leading-9 mb-6">
              I’m an MCA student passionate about building secure and scalable applications using modern web technologies.
            </p>

            <p className="text-gray-400 text-lg leading-9 mb-6">
              I enjoy exploring AI automation, cloud integration and full-stack development while continuously improving my problem-solving skills.
            </p>

            <p className="text-gray-400 text-lg leading-9">
              Currently building projects like LifeLink and SecureShare to gain real-world development experience.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-3">Master of Computer Applications</h3>
              <p className="text-cyan-400">Christ College of Engineering and Technology</p>
              <p className="text-gray-400 mt-2">CGPA: 8.98 • Pursuing</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-3">Bachelor of Computer Applications</h3>
              <p className="text-cyan-400">Pondicherry University Community College</p>
              <p className="text-gray-400 mt-2">2021 — 2024</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Skills
          </p>

          <h2 className="text-5xl font-black mb-16">Technical Arsenal</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/40 hover:-translate-y-2 transition duration-300"
              >
                <h3 className="text-2xl font-bold mb-6">{skill.title}</h3>

                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-xl bg-white/10 text-gray-300 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Projects
          </p>

          <h2 className="text-5xl font-black mb-16">Featured Projects</h2>

          <div className="grid lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-[32px] overflow-hidden hover:border-cyan-400/40 transition duration-300"
              >
                <div className="h-60 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center text-5xl font-black text-white/30">
                  {project.title}
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>

                  <p className="text-gray-400 leading-8 mb-6">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Magaroos"
                      className="px-6 py-3 rounded-xl border border-white/20 bg-white/5"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-28 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-5xl font-black mb-8">Let’s Build Something Great</h2>

          <p className="text-gray-400 text-lg leading-8 max-w-2xl mx-auto mb-12">
            Whether you have a project idea, internship opportunity or collaboration in mind, feel free to connect with me.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:yourmail@gmail.com"
              className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}