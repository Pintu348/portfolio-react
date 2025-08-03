export default function Home() {
  return (
    <section className='flex flex-col justify-center items-start max-w-5xl mx-auto px-4 pt-16 min-h-[60vh]'>
      <h1 className='text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight'>
        Hi, I'm{" "}
        <span className='text-indigo-600 dark:text-indigo-400'>Pintu</span>
      </h1>
      <p className='text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl leading-relaxed'>
        Full Stack Developer with over 3 years of experience building scalable
        web applications and backend systems. Experienced in developing APIs,
        managing databases, and deploying cloud-native applications. Committed
        to performance, security, and reliability in distributed environments.
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
    </section>
  );
}
