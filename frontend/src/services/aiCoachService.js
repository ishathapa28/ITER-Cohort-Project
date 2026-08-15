// ============================================================
// AI COACH SERVICE
// ============================================================
//
// This file is the communication layer between the AI Coach UI
// and the future FastAPI AI agent.
//
// CURRENT:
// Uses a mock response so the complete frontend can be built
// and tested without the backend.
//
// FUTURE:
// Replace the mock section inside getCoachResponse() with
// a fetch() request to your FastAPI backend.
//
// IMPORTANT:
// AICoach.jsx does NOT need to know how the AI works.
// It only calls getCoachResponse().
//
// Flow:
//
// AICoach.jsx
//      ↓
// getCoachResponse()
//      ↓
// FastAPI
//      ↓
// AI Agent
//      ↓
// LLM / tools / code analysis
//      ↓
// response
//
// ============================================================


// ============================================================
// CONFIGURATION
// ============================================================

// Later you can move this into a .env file.
//
// Example:
//
// VITE_API_BASE_URL=http://localhost:8000
//
// For now we keep it empty because we are using mock data.

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'


// ============================================================
// MOCK RESPONSES
// ============================================================
//
// These are temporary responses only.
// They allow the entire UI to work before FastAPI is connected.
//
// The backend will eventually generate dynamic responses based
// on:
//
// - problem
// - code
// - language
// - mode
// - conversation
// - user message
//
// ============================================================

const mockResponses = {

  hint: {
    default:
      'Think about what information you need to remember while moving through the input. Can you avoid checking every possible pair?'
  },

  explain: {
    default:
      'Start by identifying the main operation the problem asks you to perform. Then look for a data structure that can make that operation faster.'
  },

  analyze: {
    default:
      'Before changing your code, trace it manually with a small example. Check the first point where the actual result differs from the expected result.'
  },

  review: {
    default:
      'I can review your solution for correctness, time complexity, space complexity, and edge cases. Once the FastAPI execution and AI backend are connected, I can analyze your actual code in detail.'
  }

}


// ============================================================
// BUILD REQUEST PAYLOAD
// ============================================================
//
// Keeping this separate makes the future backend integration
// easier.
//
// ============================================================

function buildCoachPayload({
  message,
  mode,
  language,
  code,
  problem,
  conversation
}) {

  return {

    message,

    mode,

    language,

    code: code || '',

    problem: problem
      ? {
          id: problem.id,
          title: problem.title,
          difficulty: problem.difficulty,
          topic: problem.topic,
          pattern: problem.pattern,
          description: problem.description,
          examples: problem.examples || [],
          constraints: problem.constraints || []
        }
      : null,

    conversation: conversation || []

  }

}


// ============================================================
// MOCK MODE
// ============================================================
//
// This keeps the frontend completely functional before the
// FastAPI backend exists.
//
// ============================================================

async function getMockCoachResponse({
  mode
}) {

  // Simulate network/AI thinking time.

  await new Promise((resolve) => {
    setTimeout(resolve, 900)
  })


  return (
    mockResponses[mode]?.default ||
    mockResponses.hint.default
  )

}


// ============================================================
// FASTAPI REQUEST
// ============================================================
//
// This function is ready for the future backend.
//
// Expected FastAPI endpoint:
//
// POST /api/ai-coach/chat
//
// Expected request:
//
// {
//   message,
//   mode,
//   language,
//   code,
//   problem,
//   conversation
// }
//
// Expected response:
//
// {
//   response: "..."
// }
//
// ============================================================

async function getFastAPIResponse(payload) {

  const response = await fetch(
    `${API_BASE_URL}/api/ai-coach/chat`,
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(payload)
    }
  )


  if (!response.ok) {

    let errorMessage =
      `AI Coach request failed with status ${response.status}`

    try {

      const errorData =
        await response.json()

      if (errorData?.detail) {
        errorMessage = errorData.detail
      }

    } catch {
      // Keep the default error message.
    }

    throw new Error(errorMessage)
  }


  const data =
    await response.json()


  if (!data?.response) {

    throw new Error(
      'AI Coach returned an invalid response.'
    )

  }


  return data.response

}


// ============================================================
// GET COACH RESPONSE
// ============================================================
//
// THIS is the only function AICoach.jsx needs.
//
// For now:
//
// USE_MOCK_AI = true
//
// Later:
//
// USE_MOCK_AI = false
//
// Then the frontend will automatically use FastAPI.
//
// ============================================================

const USE_MOCK_AI = true


export async function getCoachResponse({

  message,

  mode,

  language,

  code,

  problem,

  conversation

}) {

  const payload =
    buildCoachPayload({
      message,
      mode,
      language,
      code,
      problem,
      conversation
    })


  // ----------------------------------------------------------
  // Development logging
  // ----------------------------------------------------------

  console.log(
    'AI Coach request:',
    payload
  )


  // ----------------------------------------------------------
  // CURRENT FRONTEND MODE
  // ----------------------------------------------------------

  if (USE_MOCK_AI) {

    return getMockCoachResponse({
      mode
    })

  }


  // ----------------------------------------------------------
  // FUTURE FASTAPI MODE
  // ----------------------------------------------------------

  return getFastAPIResponse(payload)

}


// ============================================================
// FUTURE BACKEND RESPONSE EXAMPLE
// ============================================================
//
// FastAPI:
//
// @app.post("/api/ai-coach/chat")
// async def ai_coach(request: CoachRequest):
//
//     response = await agent.run(...)
//
//     return {
//         "response": response
//     }
//
// ============================================================