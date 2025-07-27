export default function Home() {
  return (
    <section className='flex flex-col-reverse md:flex-row items-center justify-between max-w-5xl mx-auto px-4 py-16 min-h-[70vh]'>
      {/* Text Content */}
      <div className='w-full md:w-2/3 mt-8 md:mt-0'>
        <h1 className='text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight'>
          Hi, I'm{" "}
          <span className='text-indigo-600 dark:text-indigo-400'>Pintu</span>
        </h1>
        <p className='text-lg text-gray-700 dark:text-gray-300 mb-6'>
          I'm a passionate{" "}
          <span className='font-semibold text-indigo-600 dark:text-indigo-400'>
            Full Stack Developer
          </span>{" "}
          specializing in building exceptional digital experiences with the MERN
          stack.
        </p>
        <div className='flex gap-4'>
          <a
            href='#projects'
            className='inline-block px-6 py-2 rounded bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition'
          >
            View Projects
          </a>
          <a
            href='#contact'
            className='inline-block px-6 py-2 rounded border border-indigo-600 text-indigo-600 dark:text-indigo-400 font-semibold hover:bg-indigo-50 dark:hover:bg-gray-800 transition'
          >
            Contact Me
          </a>
        </div>
      </div>
      {/* Profile Image */}
      <div className='w-full md:w-1/3 flex justify-center md:justify-end'>
        <img
          src='https://avatars.githubusercontent.com/u/placeholder'
          alt="Pintu's profile"
          className='w-40 h-40 rounded-full shadow-lg object-cover border-4 border-indigo-200 dark:border-indigo-400'
        />
      </div>
    </section>
  );
}
