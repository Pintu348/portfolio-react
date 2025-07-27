const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS.",
    link: "https://your-portfolio-link.com",
    github: "https://github.com/your-github/portfolio",
  },
  {
    title: "MERN Blog",
    description: "A full-featured blog platform using the MERN stack.",
    link: "https://your-blog-link.com",
    github: "https://github.com/your-github/mern-blog",
  },
  {
    title: "E-commerce App",
    description:
      "A modern e-commerce web app with shopping cart and payment integration.",
    link: "https://your-ecommerce-link.com",
    github: "https://github.com/your-github/ecommerce-app",
  },
];

export default function Projects() {
  return (
    <section className='max-w-5xl mx-auto px-4 py-16'>
      <h1 className='text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-8'>
        Projects
      </h1>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (
          <div
            key={project.title}
            className='bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col'
          >
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
              {project.title}
            </h2>
            <p className='text-gray-700 dark:text-gray-300 mb-4 flex-1'>
              {project.description}
            </p>
            <div className='flex gap-4 mt-auto'>
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-indigo-600 dark:text-indigo-400 font-semibold hover:underline'
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition'
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
