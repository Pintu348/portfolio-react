export default function Footer() {
  return (
    <footer className='w-full border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur py-6 mt-12'>
      <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4'>
        <span className='text-gray-600 dark:text-gray-400 text-sm'>
          © {new Date().getFullYear()} Pintu.dev. All rights reserved.
        </span>
        <div className='flex gap-4'>
          <a
            href='https://github.com/your-github'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition'
            aria-label='GitHub'
          >
            <svg width='20' height='20' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z' />
            </svg>
          </a>
          {/* Add more social icons/links as needed */}
        </div>
      </div>
    </footer>
  );
}
