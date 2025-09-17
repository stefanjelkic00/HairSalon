
export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-12 sm:py-16 px-2 sm:px-4 md:px-16 text-center bg-gradient-to-b from-salon-light to-white"
    > 
      <div className="max-w-7xl mx-auto relative">

        <div
          className="max-w-5xl mx-auto px-5 animate-on-scroll review-card"
          data-animate-delay="200"
        >
          {/* Elfsight Google Reviews Widget */}
          <div
            className="elfsight-app-0bb367ae-58ce-4223-95d2-3ed3313f3939"
            data-elfsight-app-lazy
          />
        </div>
        <div className="mt-8 animate-on-scroll" data-animate-delay="400">
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJTzph2xgQW0cRtdyHXj8V9NQ"
            target="_blank"
            rel="noopener noreferrer"
            className="group button-bordered inline-flex items-center justify-center bg-[#09001e] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all duration-300"
          >
            <span className="inline-flex items-center justify-center">
              <svg
                className="w-0 h-5 opacity-0 group-hover:w-5 group-hover:opacity-100 mr-2 transition-all duration-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95.49-7.45-2.41-7.94-6.36-.49-3.95 2.41-7.45 6.36-7.94V8h2v2h2v2h-2v2h-2v-2H6.07c-2.76 2.24-3.47 6.17-1.23 8.93 2.24 2.76 6.17 3.47 8.93 1.23L11 19.93z" />
              </svg>
              Ostavi recenziju
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}