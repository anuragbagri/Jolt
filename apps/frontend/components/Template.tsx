const promptExamples = [
  "Explain quantum computing in simple terms",
  "Write a poem about the sea",
  "Suggest a workout routine for beginners",
  "Summarize today’s news in 3 bullet points",
];

export default function Template() {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 mt-12">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Try one of these prompts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        {promptExamples.map((example, i) => (
          <button
            key={i}
            className="p-3 border rounded-xl text-sm text-gray-700 hover:bg-gray-100 transition"
          >
            {example}
          </button>
        ))}
      </div>
    </section>
  );
}
