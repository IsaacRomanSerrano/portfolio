export default function Index() {
  const projects = [
    {
      title: "Portfolio deployed through AWS:",
      subtitle: "Static web on S3 plus distribution with cloud front",
      href: "https://github.com/IsaacRomanSerrano/portfolio",
    },
    {
      title: "Dockerized App",
      subtitle: "Deployed on ECS Fargate",
      href: "https://github.com/IsaacRomanSerrano/Dockerized-App-deployed-on-ECS-Fargate",
    },
    {
      title: "Infrastructure as Code",
      subtitle: "Terraform (VPC + EC2 + S3)",
      href: "https://github.com/IsaacRomanSerrano/Infrastructure-as-Code-con-Terraform-VPC-EC2-S3-",
    },
  ];
  return (
    <div className="min-h-screen bg-[#1D2254] p-6 md:p-12 lg:p-16">
      <div className="max-w-[1867px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-7 lg:gap-8">
          {/* Left Sidebar */}
          <div className="flex flex-col gap-8 w-full lg:w-[625px] flex-shrink-0">
            {/* Profile Card */}
            <div className="bg-white rounded-[15px] p-8 flex flex-col items-center">
              <h1 className="text-[#6B4FFF] text-3xl md:text-4xl font-bold mb-8 text-center">
                Isaac Román Serrano
              </h1>
              
              {/* Profile Image */}
              <div className="w-48 h-48 mb-8 overflow-hidden rounded-full bg-gray-200">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F3d20b793ac7340f9a393d1030ab8690c%2Fb5979a4396554cc59ff83369c1c56022?format=webp&width=800"
                  alt="Isaac Román Serrano"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>

              {/* Contact Info */}
              <div className="w-full space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 uppercase text-sm font-medium">AGE</span>
                  <span className="text-[#3A3D5B] font-medium text-base md:text-lg">29</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 uppercase text-sm font-medium">LOCATION</span>
                  <span className="text-[#3A3D5B] font-medium text-base md:text-lg">Madrid, España</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 uppercase text-sm font-medium">PHONE</span>
                  <span className="text-[#3A3D5B] font-medium text-base md:text-lg">+34 608058551</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 uppercase text-sm font-medium">EMAIL</span>
                  <span className="text-[#3A3D5B] font-medium text-base md:text-lg">isaacromanserrano@gmail.com</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="grid grid-cols-2 gap-6 w-full max-w-xs">
                <a
                  href="https://raw.githubusercontent.com/IsaacRomanSerrano/portfolio/main/assets/pdf/CV%20-%20Espa%C3%B1ol.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center p-4 hover:opacity-70 transition-opacity"
                  aria-label="Abrir CV en PDF"
                >
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#3A3D5B" strokeWidth="2"/>
                    <path d="M7 7h10M7 12h10M7 17h7" stroke="#3A3D5B" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </a>
                <a href="mailto:isaacromanserrano@gmail.com" className="flex items-center justify-center p-4 hover:opacity-70 transition-opacity" aria-label="Enviar correo a isaacromanserrano@gmail.com">
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="#DC4E41" strokeWidth="2" fill="#DC4E41" opacity="0.2"/>
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" stroke="#DC4E41" strokeWidth="2"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/isaacromanserrano/" target="_blank" rel="noreferrer" className="flex items-center justify-center p-4 hover:opacity-70 transition-opacity" aria-label="LinkedIn: Isaac Román Serrano">
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="#0077B5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://github.com/IsaacRomanSerrano/Isaac-Rom-n-Serrano" target="_blank" rel="noreferrer" className="flex items-center justify-center p-4 hover:opacity-70 transition-opacity" aria-label="GitHub: Isaac Román Serrano">
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="#181717">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quote Card */}
            <div className="bg-white rounded-[15px] p-8">
              <div className="border-l-4 border-[#6B4FFF] pl-6">
                <p className="text-[#3A3D5B] text-lg font-medium">
                  From IT support to cloud engineering — building reliable, scalable infrastructures on AWS.
                </p>
              </div>
            </div>

            {/* Technologies Card */}
            <div className="bg-white rounded-[15px] p-8">
              <h2 className="text-[#1D2254] text-3xl font-bold mb-6">Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {['IAM', 'EC2', 'EKS', 'ECS', 'CloudFront', 'S3', 'Docker', 'GIT', 'KUBERNETES', 'LAMBDA', 'API GATEWAY'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-100 text-[#3A3D5B] font-medium rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages Card */}
            <div className="bg-white rounded-[15px] p-8">
              <h2 className="text-[#1D2254] text-3xl font-bold mb-6">Languages</h2>
              <div className="flex flex-wrap gap-3">
                {['PYTHON', 'BASH'].map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 bg-gray-100 text-[#3A3D5B] font-medium rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-8 flex-1">
            {/* Bio Section */}
            <div className="bg-white rounded-[15px] p-8">
              <h2 className="text-[#1D2254] text-4xl font-bold mb-6">Bio</h2>
              <p className="text-[#3A3D5B] text-2xl lg:text-[32px] leading-relaxed font-medium">
                I'm an IT professional with over ten years of experience leading technical support teams in Apple-certified environments. After a decade ensuring reliability, performance, and customer satisfaction in on-premise systems, I decided to evolve toward the future of infrastructure: the Cloud.
              </p>
              <p className="text-[#3A3D5B] text-2xl lg:text-[32px] leading-relaxed font-medium mt-6">
                Today I'm certified as an AWS Solutions Architect – Associate, and specialize in Linux administration, virtualization (VMware, Docker), automation, IAM, S3, EC2, EKS, CloudFront and more AWS services.
              </p>
            </div>

            {/* Certifications Section */}
            <div className="bg-white rounded-[15px] p-8">
              <h2 className="text-[#1D2254] text-4xl font-bold mb-6">Certifications</h2>
              <div className="flex flex-wrap justify-start items-center gap-8">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/eda48f399dcb8ef3e2bd70b0e58a99752f11d7bc?width=490"
                  alt="AWS Certified Solutions Architect Associate"
                  className="w-[245px] h-[245px] object-contain"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2711ebf28387fa8eacbcbad546a32b538ef5d939?width=490"
                  alt="AWS Certified Cloud Practitioner Foundational"
                  className="w-[245px] h-[245px] object-contain"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b6fa72a9aca59203a70f9b4d6a1382a3449cbfca?width=490"
                  alt="Cisco Certified CCNA"
                  className="w-[245px] h-[245px] object-contain"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ab4bb38e5a42c7314c36eb3b32a37c3cb96c7011?width=360"
                  alt="Apple Certified"
                  className="w-[180px] h-[210px] object-contain"
                />
              </div>
            </div>

            {/* Projects Section */}
            <div className="bg-white rounded-[15px] p-8">
              <h2 className="text-[#1D2254] text-4xl font-bold mb-6">Projects</h2>
              <div className="space-y-6">
                {projects.map((p, index) => (
                  p.href ? (
                    <a
                      key={index}
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 rounded-[15px]"
                      aria-label={`${p.title} ${p.subtitle}`}
                    >
                      <div className="bg-[#1E1A1A] rounded-[15px] p-8 transition-transform duration-200 ease-out shadow-sm ring-1 ring-transparent group-hover:-translate-y-0.5 group-hover:shadow-xl group-hover:ring-indigo-400/60">
                        <h3 className="text-[#EAEBF6] text-3xl lg:text-5xl font-bold mb-2">{p.title}</h3>
                        <p className="text-[#EAEBF6] text-xl lg:text-[34px] font-medium">{p.subtitle}</p>
                      </div>
                    </a>
                  ) : (
                    <div key={index} className="bg-[#1E1A1A] rounded-[15px] p-8">
                      <h3 className="text-[#EAEBF6] text-3xl lg:text-5xl font-bold mb-2">{p.title}</h3>
                      <p className="text-[#EAEBF6] text-xl lg:text-[34px] font-medium">{p.subtitle}</p>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
