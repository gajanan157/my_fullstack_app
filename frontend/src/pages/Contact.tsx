const Contact = () => {
  return (
    <section className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex items-center justify-center">
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
          Feel free to reach out for collaborations, freelance projects, or just to say hi 👋
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 w-full"
            />
          </div>
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
