import {
  ArrowLeft,
  Lightbulb,
  Play,
  RotateCcw,
  Send,
  Sparkles
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

function Problem() {
  const { id } = useParams()

  return (
    <div className="max-w-[1500px] mx-auto">

      {/* Back */}
      <Link
        to="/practice"
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-5"
      >
        <ArrowLeft size={16} />
        Back to Practice
      </Link>


      {/* Problem header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-5">

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">

          <div>

            <div className="flex items-center gap-3">

              <h1 className="text-2xl font-bold text-slate-900">
                Two Sum
              </h1>

              <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-semibold">
                Easy
              </span>

            </div>

            <p className="mt-2 text-sm text-slate-500">
              Arrays · Hash Map
            </p>

          </div>


          <div className="flex items-center gap-2">

            <button
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50"
            >
              <Lightbulb size={17} />
              Hint
            </button>

            <button
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800"
            >
              <Sparkles size={17} />
              AI Coach
            </button>

          </div>

        </div>

      </div>


      {/* Main workspace */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

        {/* Problem description */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6">

          <h2 className="text-lg font-semibold text-slate-900">
            Problem
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Given an array of integers and a target value, return the indices
            of the two numbers that add up to the target.
          </p>


          <h3 className="mt-7 text-sm font-semibold text-slate-900">
            Example
          </h3>

          <div className="mt-3 rounded-xl bg-slate-950 p-4 font-mono text-sm text-slate-200">
            <p>Input:</p>
            <p className="mt-1 text-slate-400">
              nums = [2, 7, 11, 15], target = 9
            </p>

            <p className="mt-4">
              Output:
            </p>

            <p className="mt-1 text-slate-400">
              [0, 1]
            </p>
          </div>


          <h3 className="mt-7 text-sm font-semibold text-slate-900">
            Constraints
          </h3>

          <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc pl-5">
            <li>Each input has exactly one solution.</li>
            <li>You may not use the same element twice.</li>
            <li>The answer can be returned in any order.</li>
          </ul>

        </section>


        {/* Code editor area */}
        <section className="bg-slate-950 rounded-2xl overflow-hidden">

          {/* Editor header */}
          <div className="h-14 px-5 flex items-center justify-between border-b border-slate-800">

            <span className="text-sm font-medium text-slate-300">
              Java
            </span>

            <button
              className="text-sm text-slate-400 hover:text-white"
              title="Reset code"
            >
              <RotateCcw size={16} />
            </button>

          </div>


          {/* Temporary editor */}
          <div className="p-5 min-h-[420px]">

            <pre className="font-mono text-sm leading-7 text-slate-300">
{`class Solution {
    public int[] twoSum(int[] nums, int target) {

        // Write your solution here


    }
}`}
            </pre>

          </div>


          {/* Editor actions */}
          <div className="px-5 py-4 border-t border-slate-800 flex items-center justify-between">

            <button
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800"
            >
              <Play size={16} />
              Run
            </button>

            <button
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500"
            >
              <Send size={16} />
              Submit
            </button>

          </div>

        </section>

      </div>


      {/* AI Coach panel */}
      <section className="mt-5 bg-white border border-slate-200 rounded-2xl p-6">

        <div className="flex items-start gap-4">

          <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Sparkles size={20} />
          </div>

          <div>

            <h2 className="font-semibold text-slate-900">
              Need help?
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Your AI Coach can guide you without immediately revealing the
              solution.
            </p>

          </div>

        </div>


        <div className="mt-5 flex flex-wrap gap-3">

          <button className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50">
            Give me a hint
          </button>

          <button className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50">
            Explain the approach
          </button>

          <button className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50">
            Analyze my mistake
          </button>

        </div>

      </section>

    </div>
  )
}

export default Problem