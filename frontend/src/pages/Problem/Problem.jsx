/*import { useState } from 'react'

import {
  ArrowLeft,
  Lightbulb,
  Play,
  RotateCcw,
  Send,
  Sparkles
} from 'lucide-react'

import { Link, useParams } from 'react-router-dom'

import { problems } from '../../data/problem'

function Problem() {
  const { id } = useParams()

  const problem = problems.find(
    (item) => item.id === id
  )

  const starterCode = `class Solution {
      public int[] twoSum(int[] nums, int target) {

          // Write your solution here

      }
  }`

  const [code, setCode] = useState(starterCode)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)

  const handleRun = () => {
    setIsRunning(true)
    setOutput('Running test cases...')

    setTimeout(() => {
      setIsRunning(false)

      setOutput(
        'Test case 1 passed\n\nRuntime: 2 ms\nMemory: 42 MB'
      )
    }, 800)
  }

  return (
    <div className="max-w-[1500px] mx-auto">

      {/* Back */
      /*<Link
        to="/practice"
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-5"
      >
        <ArrowLeft size={16} />
        Back to Practice
      </Link>


      {/* Problem header */
      /*<div className="bg-white border border-slate-200 rounded-2xl p-6 mb-5">

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">

          <div>

            <div className="flex items-center gap-3">

              <h1 className="text-2xl font-bold text-slate-900">
                {problem.title}
              </h1>

              <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-semibold">
                {problem.difficulty}
              </span>

            </div>

            <p className="mt-2 text-sm text-slate-500">
              {problem.topic} · {problem.pattern}
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


      {/* Main workspace */
      /*<div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-5 items-stretch">

        {/* Problem description */
       /* <section className="h-[680px] bg-white border border-slate-200 rounded-2xl p-6 flex flex-col overflow-hidden">
          

          <h2 className="text-lg font-semibold text-slate-900">
            Problem
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            {problem.description}
          </p>


          <h3 className="mt-7 text-sm font-semibold text-slate-900">
            Example
          </h3>

          {problem.examples.map((example, index) => (
            <div
              key={index}
              className="mt-3 rounded-xl bg-slate-950 p-4 font-mono text-sm text-slate-200"
            >
              <p>Input:</p>

              <p className="mt-1 text-slate-400">
                {example.input}
              </p>

              <p className="mt-4">
                Output:
              </p>

              <p className="mt-1 text-slate-400">
                {example.output}
              </p>
            </div>
          ))}


          <h3 className="mt-7 text-sm font-semibold text-slate-900">
            Constraints
          </h3>

          <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc pl-5">
            {problem.constraints.map((constraint, index) => (
              <li key={index}>
                {constraint}
              </li>
            ))}
          </ul>

        </section>


        {/* Code editor area */
        /*<section className="bg-slate-950 rounded-2xl overflow-hidden">

          {/* Editor header */
          /*<div className="h-14 px-5 flex items-center justify-between border-b border-slate-800">

            <span className="text-sm font-medium text-slate-300">
              Java
            </span>

            <button
              onClick={() => {
                setCode(starterCode)
                setOutput('')
              }}
              className="text-sm text-slate-400 hover:text-white"
              title="Reset code"
            >
              <RotateCcw size={16} />
            </button>

          </div>


          {/* Temporary editor */
          /*<div className="p-5 min-h-[420px]">

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
              className="w-full min-h-[420px] resize-none bg-transparent text-slate-200 font-mono text-sm leading-7 outline-none"
              placeholder="Write your solution here..."
            />

          </div>


          {/* Editor actions */
          /*<div className="px-5 py-4 border-t border-slate-800 flex items-center justify-between">

            <button
              onClick={handleRun}
              disabled={isRunning}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Play size={16} />

              {isRunning ? 'Running...' : 'Run'}
            </button>

            <button
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500"
            >
              <Send size={16} />
              Submit
            </button>

          </div>

          {output && (
              <div className="border-t border-slate-800 p-5">

                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Output
                </p>

                <pre className="mt-3 whitespace-pre-wrap font-mono text-sm text-slate-300">
                  {output}
                </pre>

              </div>
            )}

          <div className="border-t border-slate-800">

            <div className="flex items-center gap-6 px-5 pt-4">

              <button className="text-sm font-medium text-white border-b-2 border-blue-500 pb-3">
                Test Cases
              </button>

              <button className="text-sm text-slate-500 pb-3">
                Output
              </button>

            </div>

            <div className="p-5">

              <div className="rounded-xl bg-slate-900 border border-slate-800 p-4">

                <p className="text-xs text-slate-500">
                  Test Case 1
                </p>

                <p className="mt-2 text-sm font-mono text-slate-300">
                  {problem.testCases[0].input}
                </p>

                <p className="mt-3 text-xs text-slate-500">
                  Expected
                </p>

                <p className="mt-2 text-sm font-mono text-slate-300">
                  {problem.testCases[0].expected}
                </p>

              </div>

            </div>

          </div>

        </section>

      </div>


      {/* AI Coach panel */
      /*<section className="mt-5 bg-white border border-slate-200 rounded-2xl p-6">

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

export default Problem*/


import { useState } from 'react'

import {
  ArrowLeft,
  CheckCircle2,
  Lightbulb,
  Play,
  RotateCcw,
  Send,
  Sparkles
} from 'lucide-react'

import { Link, useParams } from 'react-router-dom'

import { problems } from '../../data/problem'


function Problem() {
  const { id } = useParams()

  const problem = problems.find(
    (item) => item.id === id
  )

  const [code, setCode] = useState(problem.starterCode)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [activeTab, setActiveTab] = useState('testcases')
  const [showHint, setShowHint] = useState(false)
  const [hintIndex, setHintIndex] = useState(0)

  const handleRun = () => {
    setIsRunning(true)
    setActiveTab('output')
    setOutput('Running test cases...')

    setTimeout(() => {
      setIsRunning(false)

      setOutput(
        'Test case 1 passed\n\nRuntime: 2 ms\nMemory: 42 MB'
      )
    }, 800)
  }


  const handleReset = () => {
    setCode(problem.starterCode)
    setOutput('')
    setActiveTab('testcases')
    setShowHint(false)
    setHintIndex(0)
  }


  if (!problem) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">

          <h1 className="text-xl font-semibold text-slate-900">
            Problem not found
          </h1>

          <Link
            to="/practice"
            className="inline-flex items-center gap-2 mt-4 text-sm text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft size={16} />
            Back to Practice
          </Link>

        </div>
      </div>
    )
  }


  return (
    <div className="max-w-[1500px] mx-auto pb-8">


      {/* -------------------------------------------------- */}
      {/* BACK NAVIGATION */}
      {/* -------------------------------------------------- */}

      <Link
        to="/practice"
        className="inline-flex items-center gap-2 mb-4 text-xs font-medium text-slate-500 hover:text-slate-900 transition"
      >
        <ArrowLeft size={14} />
        Back to Practice
      </Link>


      {/* -------------------------------------------------- */}
      {/* PROBLEM HEADER */}
      {/* -------------------------------------------------- */}

      <div className="bg-white border border-slate-200 rounded-2xl px-6 py-5 mb-4 shadow-sm">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          <div>

            <div className="flex items-center gap-3">

              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                {problem.title}
              </h1>

              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold">
                {problem.difficulty}
              </span>

            </div>

            <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-500">

              <span>
                {problem.topic}
              </span>

              <span className="text-slate-300">
                •
              </span>

              <span>
                {problem.pattern}
              </span>

            </div>

          </div>


          <div className="flex items-center gap-2">

            <button
              onClick={() => {
                setShowHint(!showHint)
                setHintIndex(0)
              }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition"
            >
              <Lightbulb size={15} />

              {showHint ? 'Hide Hint' : 'Hint'}
            </button>


            <button
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition shadow-sm"
            >
              <Sparkles size={15} />
              AI Coach
            </button>

          </div>

        </div>

      </div>


      {/* -------------------------------------------------- */}
      {/* MAIN WORKSPACE */}
      {/* -------------------------------------------------- */}

      <div className="grid grid-cols-1 xl:grid-cols-[0.92fr_1.08fr] gap-4">


        {/* ================================================== */}
        {/* LEFT — PROBLEM */}
        {/* ================================================== */}

        <section className="h-[700px] bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col overflow-hidden">


          {/* Problem heading */}

          <div className="px-6 pt-5">

            <div className="flex items-center gap-2">

              <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <span className="text-xs font-bold">
                  ?
                </span>
              </div>

              <h2 className="text-sm font-semibold text-slate-900">
                Problem
              </h2>

            </div>

          </div>


          {/* Problem content */}

          <div className="flex-1 overflow-y-auto px-6 pt-4 pb-5">


            {/* Description */}

            <p className="text-sm leading-6 text-slate-600">
              {problem.description}
            </p>


            {/* Example */}

            <div className="mt-6">

              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Example
              </h3>


              {problem.examples.map((example, index) => (

                <div
                  key={index}
                  className="mt-3 rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs leading-6 shadow-sm"
                >

                  <div>

                    <span className="text-slate-500">
                      Input
                    </span>

                    <p className="mt-1 text-slate-300">
                      {example.input}
                    </p>

                  </div>


                  <div className="mt-4">

                    <span className="text-slate-500">
                      Output
                    </span>

                    <p className="mt-1 text-slate-300">
                      {example.output}
                    </p>

                  </div>

                </div>

              ))}

            </div>


            {/* Constraints */}

            <div className="mt-6">

              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Constraints
              </h3>


              <ul className="mt-3 space-y-2">

                {problem.constraints.map((constraint, index) => (

                  <li
                    key={index}
                    className="flex items-start gap-2 text-xs leading-5 text-slate-600"
                  >

                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />

                    <span>
                      {constraint}
                    </span>

                  </li>

                ))}

              </ul>

            </div>

            {/* Hint */}

            {showHint && (
              <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">

                <div className="flex items-start gap-3">

                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                    <Lightbulb size={15} />
                  </div>

                  <div className="min-w-0">

                    <p className="text-xs font-semibold text-amber-900">
                      Hint {hintIndex + 1}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-amber-800">
                      {problem.hints?.[hintIndex]}
                    </p>

                    {problem.hints && hintIndex < problem.hints.length - 1 && (
                      <button
                        onClick={() => setHintIndex(hintIndex + 1)}
                        className="mt-3 text-xs font-semibold text-amber-700 hover:text-amber-900"
                      >
                        Show next hint →
                      </button>
                    )}

                  </div>

                </div>

              </div>
            )}


          </div>


          {/* ================================================= */}
          {/* AI COACH */}
          {/* ================================================= */}

          <div className="border-t border-slate-100 px-6 py-4 bg-slate-50/70">


            <div className="flex items-start gap-3">

              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Sparkles size={15} />
              </div>


              <div className="min-w-0">

                <p className="text-xs font-semibold text-slate-900">
                  Need help?
                </p>

                <p className="mt-0.5 text-[11px] leading-4 text-slate-500">
                  Get guidance without immediately revealing the solution.
                </p>

              </div>

            </div>


            <div className="flex flex-wrap gap-2 mt-3">

              <button
                onClick={() => {
                  setShowHint(true)
                  setHintIndex(0)
                }}
                className="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-[11px] font-medium text-slate-600 hover:border-blue-200 hover:text-blue-600 transition"
              >
                Give me a hint
              </button>

              <button className="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-[11px] font-medium text-slate-600 hover:border-blue-200 hover:text-blue-600 transition">
                Explain approach
              </button>

              <button className="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-[11px] font-medium text-slate-600 hover:border-blue-200 hover:text-blue-600 transition">
                Analyze mistake
              </button>

            </div>

          </div>

        </section>


        {/* ================================================== */}
        {/* RIGHT — CODE WORKSPACE */}
        {/* ================================================== */}

        <section className="h-[700px] rounded-2xl bg-slate-950 border border-slate-800 shadow-lg overflow-hidden flex flex-col">


          {/* Editor header */}

          <div className="h-12 shrink-0 px-5 flex items-center justify-between border-b border-slate-800 bg-slate-950">

            <div className="flex items-center gap-2">

              <div className="w-2 h-2 rounded-full bg-blue-500" />

              <span className="text-xs font-semibold text-slate-300">
                Java
              </span>

            </div>


            <button
              onClick={handleReset}
              className="p-1.5 rounded-md text-slate-500 hover:text-slate-200 hover:bg-slate-900 transition"
              title="Reset code"
            >
              <RotateCcw size={15} />
            </button>

          </div>


          {/* Code editor */}

          <div className="flex-1 min-h-0 overflow-hidden bg-[#020617]">

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
              className="w-full h-full resize-none bg-transparent px-5 py-4 text-slate-200 font-mono text-[13px] leading-6 outline-none focus:ring-0"
              placeholder="Write your solution here..."
            />

          </div>


          {/* Editor actions */}

          <div className="h-14 shrink-0 px-5 border-t border-slate-800 flex items-center justify-between bg-slate-950">

            <button
              onClick={handleRun}
              disabled={isRunning}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:bg-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >

              <Play size={14} />

              {isRunning ? 'Running...' : 'Run'}

            </button>


            <button
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition shadow-sm"
            >

              <Send size={14} />

              Submit

            </button>

          </div>


          {/* ================================================= */}
          {/* TEST / OUTPUT PANEL */}
          {/* ================================================= */}

          <div className="h-[185px] shrink-0 border-t border-slate-800 bg-slate-950">


            {/* Tabs */}

            <div className="h-10 px-5 flex items-center gap-5 border-b border-slate-800">

              <button
                onClick={() => setActiveTab('testcases')}
                className={`h-full text-[11px] font-semibold border-b-2 transition ${
                  activeTab === 'testcases'
                    ? 'text-white border-blue-500'
                    : 'text-slate-500 border-transparent hover:text-slate-300'
                }`}
              >
                Test Cases
              </button>


              <button
                onClick={() => setActiveTab('output')}
                className={`h-full text-[11px] font-semibold border-b-2 transition ${
                  activeTab === 'output'
                    ? 'text-white border-blue-500'
                    : 'text-slate-500 border-transparent hover:text-slate-300'
                }`}
              >
                Output
              </button>

            </div>


            {/* Test cases */}

            {activeTab === 'testcases' && (

              <div className="h-[145px] overflow-y-auto p-4">

                <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3">

                  <div className="flex items-center justify-between">

                    <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                      Test Case 1
                    </span>

                  </div>


                  <p className="mt-2 text-xs font-mono text-slate-300">
                    {problem.testCases[0].input}
                  </p>


                  <div className="mt-2 flex items-center gap-2">

                    <span className="text-[10px] text-slate-500">
                      Expected:
                    </span>

                    <span className="text-xs font-mono text-slate-300">
                      {problem.testCases[0].expected}
                    </span>

                  </div>

                </div>

              </div>

            )}


            {/* Output */}

            {activeTab === 'output' && (

              <div className="h-[145px] overflow-y-auto p-4">

                {output ? (

                  <div className="rounded-lg border border-emerald-900/40 bg-emerald-950/20 p-3">

                    <div className="flex items-center gap-2">

                      <CheckCircle2
                        size={14}
                        className="text-emerald-400"
                      />

                      <span className="text-xs font-semibold text-emerald-300">
                        Execution Result
                      </span>

                    </div>


                    <pre className="mt-3 whitespace-pre-wrap font-mono text-xs leading-5 text-slate-300">
                      {output}
                    </pre>

                  </div>

                ) : (

                  <div className="h-full flex items-center justify-center text-xs text-slate-600">
                    Run your code to see the output.
                  </div>

                )}

              </div>

            )}

          </div>

        </section>

      </div>

    </div>
  )
}


export default Problem