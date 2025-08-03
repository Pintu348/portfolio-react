export default function Contact() {
  return (
    <section className='max-w-xl mx-auto px-4 pt-16'>
      <h1 className='text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-4'>
        Contact Me
      </h1>
      <p className='text-lg text-gray-700 dark:text-gray-300 mb-8'>
        Have a question, project idea, or just want to say hello? Fill out the
        form below or email me at{" "}
        <a
          href='mailto:your.email@example.com'
          className='text-indigo-600 dark:text-indigo-400 underline'
        >
          your.email@example.com
        </a>
        .
      </p>
      <form className='space-y-6'>
        <div>
          <label
            className='block mb-1 font-medium text-gray-800 dark:text-gray-200'
            htmlFor='name'
          >
            Name
          </label>
          <input
            className='w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition'
            type='text'
            id='name'
            name='name'
            required
            autoComplete='off'
          />
        </div>
        <div>
          <label
            className='block mb-1 font-medium text-gray-800 dark:text-gray-200'
            htmlFor='email'
          >
            Email
          </label>
          <input
            className='w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition'
            type='email'
            id='email'
            name='email'
            required
            autoComplete='off'
          />
        </div>
        <div>
          <label
            className='block mb-1 font-medium text-gray-800 dark:text-gray-200'
            htmlFor='message'
          >
            Message
          </label>
          <textarea
            className='w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition'
            id='message'
            name='message'
            rows={5}
            required
          />
        </div>
        <button
          type='submit'
          className='w-full py-2 px-4 rounded bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition'
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
