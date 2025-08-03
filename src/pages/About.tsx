const skills = [
  "React.js",
  "Next.js",
  "Redux",
  "TanStack Query",
  "Tailwind CSS",
  "Material UI",
  "Bootstrap",
  "Node.js",
  "Express.js",
  "Microservices Architecture",
  "RESTful APIs",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Redis",
  "AWS (S3, EC2, RDS, SNS, SES, SQS)",
  "Docker",
  "Git & GitHub",
  "CI/CD Pipelines",
  "System Design",
  "Socket.io",
  "Stripe Integration",
  "Identity & Access Management (JWT, OAuth 2.0)",
];

export default function About() {
  return (
    <section className='max-w-5xl mx-auto px-4 py-16'>
      <h1 className='text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-4'>
        About Me
      </h1>
      <p className='text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-3xl leading-relaxed'>
        I specialize in developing robust, high-performance web applications
        using the <span className='font-semibold'>MERN stack</span>. My focus is
        on scalability, security, and real-time architecture, designing systems
        that grow with business needs. Recent work includes optimizing APIs,
        streamlining cloud infrastructure, and enhancing operational efficiency
        through automation.
      </p>

      <div className='mb-8'>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
          Skills
        </h2>
        <ul className='flex flex-wrap gap-3'>
          {skills.map((skill) => (
            <li
              key={skill}
              className='bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium'
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
          Background
        </h2>
        <div className='text-lg text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed space-y-4'>
          <p>
            At <span className='font-medium'>Codetribe Solutions</span>, I led
            improvements that{" "}
            <span className='font-semibold'>
              reduced API response times by 50%
            </span>
            , lowered infrastructure costs by{" "}
            <span className='font-semibold'>20%</span>, and increased system
            scalability through{" "}
            <span className='font-semibold'>microservices architecture</span>. I
            also enhanced operational efficiency with an{" "}
            <span className='font-semibold'>
              automated Equipment Rental System
            </span>{" "}
            and strengthened application security.
          </p>
          <p>
            Previously at{" "}
            <span className='font-medium'>Escalon Business Services</span>, I
            built internal systems such as a{" "}
            <span className='font-semibold'>Holiday Management System</span> and
            integrated <span className='font-semibold'>OwnCloud</span> for
            secure file handling. My work improved performance, reduced manual
            tasks, and enhanced system security using{" "}
            <span className='font-semibold'>RBAC and encryption</span>.
          </p>
          <p>
            I hold a{" "}
            <span className='font-medium'>
              B.Tech in Computer Science and Engineering
            </span>{" "}
            from{" "}
            <span className='font-medium'>Punjab Technical University</span>{" "}
            with a <span className='font-semibold'>CGPA of 8.41</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
