import {
  Search,
  SlidersHorizontal,
  ArrowRight,
  CheckCircle2,
  Circle
} from 'lucide-react'
import { Link } from 'react-router-dom'

const problems = [
  {
    id: 'two-sum',
    title: 'Two Sum',
    difficulty: 'Easy',
    topic: 'Arrays',
    pattern: 'Hash Map',
    solved: true
  },
  {
    id: 'best-time-to-buy-and-sell-stock',
    title: 'Best Time to Buy and Sell Stock',
    difficulty: 'Easy',
    topic: 'Arrays',
    pattern: 'Sliding Window',
    solved: true
  },
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    topic: 'Stack',
    pattern: 'Stack',
    solved: false
  },
  {
    id: 'maximum-subarray',
    title: 'Maximum Subarray',
    difficulty: 'Medium',
    topic: 'Arrays',
    pattern: 'Kadane’s Algorithm',
    solved: false
  },
  {
    id: 'product-of-array-except-self',
    title: 'Product of Array Except Self',
    difficulty: 'Medium',
    topic: 'Arrays',
    pattern: 'Prefix / Suffix',
    solved: false
  }
]

function Practice() {
  return (
    <div className="max-w-7xl mx-auto space-y-7">

      {/* Header */}
      <section>
        <p className="text-sm font-medium text-blue-600">
          Practice
        </p>

        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
          Build your problem-solving skills
        </h1>

        <p className="mt-2 text-slate-500">
          Practice problems, recognize patterns, and strengthen your DSA
          fundamentals.
        </p>
      </section>


      {/* Search and filters */}
      <section className="bg-white border border-slate-200 rounded-2xl p-4">

        <div className="flex flex-col lg:flex-row gap-3">

          {/* Search */}
          <div className="relative flex-1">

            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search problems..."
              className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-200 bg-slate-50 text-sm outline-none focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />

          </div>


          {/* Difficulty */}
          <select
            className="h-11 px-4 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-600 outline-none focus:bg-white focus:border-blue-400"
          >
            <option>All difficulties</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>


          {/* Topic */}
          <select
            className="h-11 px-4 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-600 outline-none focus:bg-white focus:border-blue-400"
          >
            <option>All topics</option>
            <option>Arrays</option>
            <option>Strings</option>
            <option>Linked List</option>
            <option>Stack</option>
            <option>Queue</option>
            <option>Trees</option>
            <option>Graphs</option>
            <option>Dynamic Programming</option>
          </select>

          <button
            className="h-11 px-4 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
          >
            <SlidersHorizontal size={17} />
            Filters
          </button>

        </div>

      </section>


      {/* Practice summary */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <p className="text-sm text-slate-500">
            Total Problems
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            150
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <p className="text-sm text-slate-500">
            Completed
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            24
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <p className="text-sm text-slate-500">
            Remaining
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            126
          </p>
        </div>

      </section>


      {/* Problem list */}
      <section>

        <div className="flex items-center justify-between mb-4">

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Problems
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Start with the problems recommended for your current level.
            </p>
          </div>

          <span className="text-sm text-slate-400">
            {problems.length} shown
          </span>

        </div>


        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">

          {problems.map((problem, index) => (

            <div
              key={problem.id}
              className={`
                p-5 flex flex-col lg:flex-row lg:items-center
                justify-between gap-4
                hover:bg-slate-50 transition-colors
                ${index !== problems.length - 1 ? 'border-b border-slate-100' : ''}
              `}
            >

              <div className="flex items-start gap-4">

                {/* Status */}
                <div className="mt-1">
                  {problem.solved ? (
                    <CheckCircle2
                      size={20}
                      className="text-emerald-500"
                    />
                  ) : (
                    <Circle
                      size={20}
                      className="text-slate-300"
                    />
                  )}
                </div>


                {/* Problem info */}
                <div>

                  <h3 className="font-semibold text-slate-900">
                    {problem.title}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-2">

                    <span
                      className={`
                        px-2 py-0.5 rounded-md text-xs font-medium
                        ${
                          problem.difficulty === 'Easy'
                            ? 'bg-emerald-50 text-emerald-700'
                            : 'bg-amber-50 text-amber-700'
                        }
                      `}
                    >
                      {problem.difficulty}
                    </span>

                    <span className="text-xs text-slate-400">
                      {problem.topic}
                    </span>

                    <span className="text-slate-300">
                      •
                    </span>

                    <span className="text-xs text-slate-400">
                      {problem.pattern}
                    </span>

                  </div>

                </div>

              </div>


              <Link
                to={`/problem/${problem.id}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {problem.solved ? 'Review' : 'Solve'}
                <ArrowRight size={16} />
              </Link>

            </div>

          ))}

        </div>

      </section>

    </div>
  )
}

export default Practice