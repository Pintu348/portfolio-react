export default function About() {
  return (
    <section className='max-w-5xl mx-auto px-4 py-16'>
      <h1 className='text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-4'>
        About Me
      </h1>
      <p className='text-lg text-gray-700 dark:text-gray-300 mb-6'>
        Hello! I'm{" "}
        <span className='font-semibold text-indigo-600 dark:text-indigo-400'>
          Pintu
        </span>
        , a dedicated Full Stack Developer with a passion for building robust
        and user-friendly web applications. I love working with the{" "}
        <span className='font-semibold'>MERN stack</span> and enjoy solving
        complex problems with clean, efficient code.
      </p>
      <div className='mb-6'>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
          Skills
        </h2>
        <ul className='flex flex-wrap gap-3'>
          <li className='bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium'>
            React
          </li>
          <li className='bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium'>
            Node.js
          </li>
          <li className='bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium'>
            Express
          </li>
          <li className='bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium'>
            MongoDB
          </li>
          <li className='bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium'>
            TypeScript
          </li>
          <li className='bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium'>
            Tailwind CSS
          </li>
        </ul>
      </div>
      <div>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
          Background
        </h2>
        <p className='text-gray-700 dark:text-gray-300'>
          With several years of experience in web development, I have worked on
          a variety of projects, from small business websites to large-scale
          applications. I am always eager to learn new technologies and
          collaborate with others to create impactful solutions.
        </p>
      </div>
    </section>
  );
}
