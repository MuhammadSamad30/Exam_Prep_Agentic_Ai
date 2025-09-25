// dataImp.ts

// helper to create slugs
export const createSlug = (s: string) =>
  encodeURIComponent(
    s
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
  );

// MCQ type
export interface ExamMCQ {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

// Topic type
export interface ExamTopic {
  id: number;
  name: string;
  description: string;
  mcqs: ExamMCQ[];
}

// Category type
export interface ExamCategory {
  id: number;
  name: string;
  url: string;
  description: string;
  topics: ExamTopic[];
}

// Categories list
export const examCategoryList: ExamCategory[] = [
  {
    id: 1,
    name: "Agentic AI with Python & OpenAI SDK",
    url: "/agentic-ai-python",
    description: "MCQs on Python-based Agentic AI concepts with OpenAI SDK",
    topics: [
      {
        id: 101,
        name: "Handoffs",
        description: "Transferring control between agents and systems",
        mcqs: [
          {
            id: 1001,
            question: "What is the primary purpose of handoffs in agentic systems?",
            options: [
              "To transfer control between specialized agents",
              "To terminate conversation sessions",
              "To improve model accuracy",
              "To reduce API costs"
            ],
            answer: "To transfer control between specialized agents",
            explanation:
              "Handoffs allow transferring control between agents to leverage specialized capabilities."
          },
          {
            id: 1002,
            question: "Which pattern is commonly used for handoffs in OpenAI function calling?",
            options: [
              "Using parallel function execution",
              "Returning control to the main agent",
              "Sequential tool execution with context passing",
              "Direct agent-to-agent communication"
            ],
            answer: "Sequential tool execution with context passing",
            explanation:
              "Context is passed through sequential function calls to maintain conversation state."
          },
          {
            id: 1003,
            question: "When designing a handoff, what is critical to maintain between agents?",
            options: [
              "Session token rotation",
              "Opposite model weights",
              "Consistent context and state",
              "Separate billing accounts"
            ],
            answer: "Consistent context and state",
            explanation:
              "Maintaining context/state ensures the receiving agent can continue the task without loss of information."
          },
          {
            id: 1004,
            question: "Which of the following is a reason to perform a handoff to a specialized agent?",
            options: [
              "To reduce the number of API calls overall",
              "Because the main agent ran out of tokens",
              "To use a domain-specific capability the specialized agent provides",
              "To anonymize user data"
            ],
            answer: "To use a domain-specific capability the specialized agent provides",
            explanation:
              "Specialized agents encapsulate domain knowledge or tools not present in the main agent."
          },
          {
            id: 1005,
            question: "What is a typical failure mode during handoffs?",
            options: [
              "Overfitting the main model",
              "Lost or inconsistent context leading to incorrect responses",
              "Excessive GPU usage in the browser",
              "Incompatibility with JSON"
            ],
            answer: "Lost or inconsistent context leading to incorrect responses",
            explanation:
              "If context isn't passed correctly, the downstream agent won't have the information needed to act."
          },
          {
            id: 1006,
            question: "Which technique reduces context size when handing off to another agent?",
            options: [
              "Context summarization",
              "Token-padding with zeros",
              "Dropping all user messages",
              "Encrypting the context"
            ],
            answer: "Context summarization",
            explanation:
              "Summarizing prior conversation reduces token usage while preserving essential information."
          },
          {
            id: 1007,
            question: "In multi-agent systems, what does 'cascading handoff' mean?",
            options: [
              "One agent continuously loops without passing control",
              "Agents replicate identical responses",
              "Handoff to external human operators only",
              "Multiple agents hand off in a chain until goal is reached"
            ],
            answer: "Multiple agents hand off in a chain until goal is reached",
            explanation:
              "Cascading handoffs pass work along a pipeline of agents, each performing a subtask."
          },
          {
            id: 1008,
            question: "Which metadata is useful to attach during a handoff?",
            options: [
              "Agent version, conversation summary, required inputs",
              "User's raw credit card number",
              "Full model weights",
              "Unrelated log files"
            ],
            answer: "Agent version, conversation summary, required inputs",
            explanation:
              "Metadata like agent version and a short summary help the receiving agent continue correctly."
          },
          {
            id: 1009,
            question: "What role do 'timeouts' play in handoff orchestration?",
            options: [
              "They increase the token limit",
              "They ensure an agent doesn't stall the system indefinitely",
              "They automatically upgrade the model",
              "They reduce the number of topics"
            ],
            answer: "They ensure an agent doesn't stall the system indefinitely",
            explanation:
              "Timeouts guard against hung agents and enable fallback strategies or retries."
          },
          {
            id: 1010,
            question: "What is a safe fallback during a failed handoff?",
            options: [
              "Return a misleading confident answer",
              "Drop the user's request silently",
              "Escalate to a simpler agent or human operator with context",
              "Switch to a random agent"
            ],
            answer: "Escalate to a simpler agent or human operator with context",
            explanation:
              "Escalation with context preserves service quality and avoids producing unsafe or incorrect outputs."
          }
        ]
      },
      {
        id: 102,
        name: "Markdown Formatting",
        description: "Structured content formatting for AI responses",
        mcqs: [
          {
            id: 2001,
            question:
              "How should clickable images with tooltips be implemented in Agentic AI responses?",
            options: [
              "Using HTML <img> tags",
              "Using Python matplotlib",
              "With Markdown ![alt](url) syntax",
              "With custom JSON formatting"
            ],
            answer: "With Markdown ![alt](url) syntax",
            explanation:
              "Markdown is the preferred format for AI responses as it's portable and universally compatible."
          },
          {
            id: 2002,
            question: "Which is correct numbered list formatting in Markdown?",
            options: [
              "1) Item 1\n2) Item 2",
              "# Item 1\n# Item 2",
              "1. Item 1\n2. Item 2",
              "-1 Item 1\n-2 Item 2"
            ],
            answer: "1. Item 1\n2. Item 2",
            explanation: "Markdown uses period followed by space for numbered lists."
          },
          {
            id: 2003,
            question: "How do you create a code block in Markdown?",
            options: [
              "Wrap code in <code></code> only",
              "Use (code) delimiters",
              "Indent every line with #",
              "Use triple backticks ```",
            ],
            answer: "Use triple backticks ```",
            explanation: "Triple backticks create fenced code blocks with optional language hints."
          },
          {
            id: 2004,
            question: "Which Markdown syntax will create bold text?",
            options: [
              "*bold*",
              "`bold`",
              "**bold**",
              "_bold_"
            ],
            answer: "**bold**",
            explanation: "Double asterisks or double underscores create bold text in Markdown."
          }
        ]
      },
      {
        id: 103,
        name: "Pydantic",
        description: "Data validation and settings management",
        mcqs: [
          {
            id: 3001,
            question: "Why is Pydantic particularly useful in Agentic AI development?",
            options: [
              "For creating neural networks",
              "For validating function call parameters",
              "For image processing",
              "For audio transcription"
            ],
            answer: "For validating function call parameters",
            explanation:
              "Pydantic ensures structured data validation for AI function calls."
          },
          {
            id: 3002,
            question: "Which Pydantic feature helps create clear error messages when input is invalid?",
            options: [
              "Model introspection",
              "Validation errors with field paths",
              "Auto-summarization",
              "Token compression"
            ],
            answer: "Validation errors with field paths",
            explanation:
              "Pydantic raises ValidationError instances that include detailed field-level messages."
          },
          {
            id: 3003,
            question: "What is the Pydantic type used for environment-based settings?",
            options: [
              "BaseSettings",
              "EnvModel",
              "ConfigParser",
              "SettingsSchema"
            ],
            answer: "BaseSettings",
            explanation:
              "BaseSettings reads configuration from environment variables and other sources."
          },
          {
            id: 3004,
            question: "How does Pydantic handle nested models?",
            options: [
              "It disallows nesting",
              "Nested dicts are automatically coerced to nested Pydantic models",
              "It serializes nested models to XML",
              "It converts nested data to lists only"
            ],
            answer: "Nested dicts are automatically coerced to nested Pydantic models",
            explanation:
              "Pydantic will construct nested model instances when the field type is another model."
          },
          {
            id: 3005,
            question: "Which method returns a dict representation of a Pydantic model?",
            options: [
              "to_json()",
              "as_dict()",
              "dict()",
              "serialize()"
            ],
            answer: "dict()",
            explanation:
              "Pydantic models provide a .dict() method to get a dictionary representation."
          }
        ]
      },
      {
        id: 104,
        name: "Function Tool Calling",
        description: "Structured AI function invocation",
        mcqs: [
          {
            id: 4001,
            question: "What is the correct schema format for OpenAI function definitions?",
            options: [
              "XML-based schema",
              "GraphQL schema",
              "JSON Schema",
              "Protobuf schema"
            ],
            answer: "JSON Schema",
            explanation:
              "OpenAI API uses JSON Schema to define function parameters."
          },
          {
            id: 4002,
            question: "When a model requests a function call, what should the developer provide?",
            options: [
              "An HTTP redirect",
              "The implementation of the declared function to run",
              "A new model key",
              "A browser extension"
            ],
            answer: "The implementation of the declared function to run",
            explanation:
              "The system should map declared function names to concrete implementations that execute."
          },
          {
            id: 4003,
            question: "What must function parameter types conform to for reliable invocation?",
            options: [
              "Arbitrary binary blobs",
              "Types described in the function's JSON Schema",
              "Only string types",
              "Only integers"
            ],
            answer: "Types described in the function's JSON Schema",
            explanation:
              "JSON Schema defines expected types so callers and implementations agree on data shapes."
          },
          {
            id: 4004,
            question: "Which strategy helps when a function call returns too much data?",
            options: [
              "Ignore the return entirely",
              "Paginate or summarize the result before returning to the agent",
              "Return binary compressed payloads without schema",
              "Increase token limits on the model"
            ],
            answer: "Paginate or summarize the result before returning to the agent",
            explanation:
              "Summarization or pagination keeps context manageable for the agent and user."
          },
          {
            id: 4005,
            question: "What is a recommended practice for function naming in tool-calling?",
            options: [
              "Use ambiguous names like 'doit'",
              "Use descriptive, domain-specific names",
              "Use names that match model weights",
              "Use names containing special characters only"
            ],
            answer: "Use descriptive, domain-specific names",
            explanation:
              "Clear naming helps model decide which function to call and makes debugging easier."
          },
          {
            id: 4006,
            question: "How should sensitive data be handled when returning function results?",
            options: [
              "Always include all sensitive fields",
              "Mask, redact, or omit sensitive fields before returning",
              "Store sensitive data in client logs",
              "Encode sensitive data as base64 and return"
            ],
            answer: "Mask, redact, or omit sensitive fields before returning",
            explanation:
              "Protecting sensitive data minimizes leakage risk between agents and users."
          },
          {
            id: 4007,
            question: "What is the role of 'role' and 'name' fields in function specifications for model tool-calling?",
            options: [
              "They are required for billing",
              "They help the model select the correct function to call",
              "They determine the model architecture",
              "They encrypt the function payload"
            ],
            answer: "They help the model select the correct function to call",
            explanation:
              "'name' is the function identifier and 'description' helps the model decide which tool fits the request."
          },
          {
            id: 4008,
            question: "If a function call fails, what's a good recovery pattern?",
            options: [
              "Return a cryptic error and stop",
              "Provide a clear error message and fallback or retry logic",
              "Silently retry forever",
              "Restart the model process"
            ],
            answer: "Provide a clear error message and fallback or retry logic",
            explanation:
              "Clear errors and fallbacks improve reliability and allow useful recovery paths."
          }
        ]
      },
      {
        id: 105,
        name: "Agent as Tool Syntax",
        description: "Treating agents as executable tools",
        mcqs: [
          {
            id: 5001,
            question: "What is the 'agent as tool' pattern?",
            options: [
              "Using physical robots as tools",
              "Treating specialized agents as callable functions",
              "Using tools to build agents",
              "Converting tools into neural networks"
            ],
            answer: "Treating specialized agents as callable functions",
            explanation:
              "This pattern allows composing complex behaviors by chaining specialized agents."
          },
          {
            id: 5002,
            question: "Which benefit does 'agent as tool' composition provide?",
            options: [
              "Monolithic code with less modularity",
              "Ability to reuse specialized capabilities as building blocks",
              "Guarantees zero-latency responses",
              "Removes the need for testing"
            ],
            answer: "Ability to reuse specialized capabilities as building blocks",
            explanation:
              "Composable agents enable modular design and reuse of domain-specific functionality."
          },
          {
            id: 5003,
            question: "How should inputs be passed when treating an agent as a tool?",
            options: [
              "Always send raw model logits",
              "Send structured, validated inputs matching the agent's API",
              "Send random noise to trigger behavior",
              "Encode inputs in XML only"
            ],
            answer: "Send structured, validated inputs matching the agent's API",
            explanation:
              "Structured inputs improve reliability and let the receiving agent validate expectations."
          },
          {
            id: 5004,
            question: "What is an anti-pattern in agent-as-tool composition?",
            options: [
              "Clear interface contracts",
              "Tight coupling by sharing internal state directly",
              "Passing only necessary data",
              "Versioned agent endpoints"
            ],
            answer: "Tight coupling by sharing internal state directly",
            explanation:
              "Tight coupling makes maintenance hard and breaks modularity; prefer well-defined interfaces."
          },
          {
            id: 5005,
            question: "When should you prefer invoking a human as an agent (human-in-the-loop)?",
            options: [
              "When task requires complex judgement or safety review",
              "To decrease latency always",
              "To reduce development costs primarily",
              "Only for trivial formatting tasks"
            ],
            answer: "When task requires complex judgement or safety review",
            explanation:
              "Humans are good for edge cases, safety checks, and high-stakes decisions where models may fail."
          },
          {
            id: 5006,
            question: "What metadata is helpful when calling another agent as a tool?",
            options: [
              "Conversation summary, required output format, and time budget",
              "Complete GPU allocation list",
              "Full model training dataset",
              "User's browser history"
            ],
            answer: "Conversation summary, required output format, and time budget",
            explanation:
              "Including these makes it easier for the called agent to meet expectations and constraints."
          }
        ]
      },
      {
        id: 106,
        name: "Tooling & Orchestration",
        description: "Pipelines, schedulers, and tool integration",
        mcqs: [
          {
            id: 6001,
            question: "What is orchestration in the context of agentic AI?",
            options: [
              "Training a single large model",
              "Coordinating multiple agents/tools to complete tasks",
              "Compiling Python to WebAssembly",
              "Designing UI only"
            ],
            answer: "Coordinating multiple agents/tools to complete tasks",
            explanation:
              "Orchestration manages how agents and tools interact and the order of operations."
          },
          {
            id: 6002,
            question: "Which system property is important for orchestration frameworks?",
            options: [
              "Deterministic audio output",
              "Retries, idempotency, and observability",
              "Only using synchronous calls",
              "Avoiding logs entirely"
            ],
            answer: "Retries, idempotency, and observability",
            explanation:
              "These properties make pipelines robust and debuggable in production environments."
          },
          {
            id: 6003,
            question: "What is 'idempotency' in tooling calls?",
            options: [
              "A call that changes state every time",
              "A call that can be safely retried without side-effects",
              "A measure of latency",
              "A type of model architecture"
            ],
            answer: "A call that can be safely retried without side-effects",
            explanation:
              "Idempotent operations avoid duplicates and inconsistent state on retries."
          },
          {
            id: 6004,
            question: "Which tool is commonly used to schedule jobs and orchestrate tasks (general concept)?",
            options: [
              "Task scheduler/runner (e.g., cron-like, workflow engine)",
              "Only frontend frameworks",
              "Static site generator",
              "Image editor"
            ],
            answer: "Task scheduler/runner (e.g., cron-like, workflow engine)",
            explanation:
              "Workflow engines and schedulers coordinate recurring and long-running jobs."
          },
          {
            id: 6005,
            question: "What is observability in orchestration?",
            options: [
              "Hiding all internal logs",
              "Ability to understand system behavior via logs, metrics, traces",
              "Only monitoring CPU usage",
              "Encrypting all telemetry"
            ],
            answer: "Ability to understand system behavior via logs, metrics, traces",
            explanation:
              "Observability helps diagnose failures and understand runtime characteristics."
          }
        ]
      },
      {
        id: 107,
        name: "Safety & Alignment",
        description: "Responsible AI practices, guardrails, and alignment",
        mcqs: [
          {
            id: 7001,
            question: "What is a primary goal of safety in agentic systems?",
            options: [
              "Maximizing hallucinations",
              "Minimizing harm and preventing unsafe outputs",
              "Making agents opaque",
              "Disallowing all user inputs"
            ],
            answer: "Minimizing harm and preventing unsafe outputs",
            explanation:
              "Safety focuses on reducing risks such as misinformation, bias, and harmful advice."
          },
          {
            id: 7002,
            question: "What is a 'guardrail' in practical AI deployments?",
            options: [
              "A physical barrier",
              "Predefined rules and filters that prevent unsafe actions",
              "An optimization algorithm",
              "A model training dataset"
            ],
            answer: "Predefined rules and filters that prevent unsafe actions",
            explanation:
              "Guardrails enforce constraints to keep model outputs within acceptable bounds."
          },
          {
            id: 7003,
            question: "Which approach helps align agent behavior with human values?",
            options: [
              "Reinforcement learning from human feedback (RLHF)",
              "Removing human oversight completely",
              "Randomized response generation",
              "Training with adversarial noise only"
            ],
            answer: "Reinforcement learning from human feedback (RLHF)",
            explanation:
              "RLHF and related methods incorporate human preferences into model behavior."
          },
          {
            id: 7004,
            question: "Which mitigation reduces the risk of data leakage from model outputs?",
            options: [
              "Returning full training dataset rows verbatim",
              "Redaction and context trimming for sensitive fields",
              "Increasing model temperature",
              "Removing schemas"
            ],
            answer: "Redaction and context trimming for sensitive fields",
            explanation:
              "Redacting sensitive data and reducing context exposure helps prevent leaks."
          }
        ]
      },
      {
        id: 108,
        name: "Context Management",
        description: "Prompt windows, memory, and token budgeting",
        mcqs: [
          {
            id: 8001,
            question: "What is token budgeting in agentic systems?",
            options: [
              "Counting CPU cycles for each request",
              "Managing how many tokens of context you use to fit model limits",
              "Budgeting money for GPUs",
              "Limiting the number of agents"
            ],
            answer: "Managing how many tokens of context you use to fit model limits",
            explanation:
              "Token budgeting ensures prompts and responses fit within model context windows efficiently."
          },
          {
            id: 8002,
            question: "What is a common approach to keep long-term context without exceeding token limits?",
            options: [
              "Never store any memory",
              "Use summarized memories or external state storage",
              "Send the whole conversation every time",
              "Use raw binary dumps"
            ],
            answer: "Use summarized memories or external state storage",
            explanation:
              "Summaries and external stores let agents recall important facts without huge token costs."
          },
          {
            id: 8003,
            question: "Which is an advantage of structured context over unstructured context?",
            options: [
              "Easier programmatic access and validation",
              "It always increases token usage",
              "Makes models run slower by default",
              "Prevents any handoffs"
            ],
            answer: "Easier programmatic access and validation",
            explanation:
              "Structured context (e.g., JSON) is simpler to parse, validate, and reuse across agents."
          },
          {
            id: 8004,
            question: "When should you trim older messages from context?",
            options: [
              "When they are irrelevant to the current task",
              "Always after every message",
              "Never; keep everything",
              "Only if messages contain numbers"
            ],
            answer: "When they are irrelevant to the current task",
            explanation:
              "Trimming irrelevant content preserves important context and reduces token usage."
          }
        ]
      },
      {
        id: 109,
        name: "Prompt Engineering",
        description: "Designing prompts for reliable agent behavior",
        mcqs: [
          {
            id: 9001,
            question: "What is 'prompt conditioning'?",
            options: [
              "Training the model from scratch",
              "Providing instructions and examples in the prompt to shape model behavior",
              "Encrypting prompts",
              "Randomizing prompt order"
            ],
            answer: "Providing instructions and examples in the prompt to shape model behavior",
            explanation:
              "Conditioning the model via instructions and few-shot examples guides responses predictably."
          },
          {
            id: 9002,
            question: "Which technique reduces model hallucinations in prompts?",
            options: [
              "Provide explicit constraints and ask for citations or sources",
              "Increase temperature to 2.0",
              "Avoid specifying the desired output format",
              "Use vague instructions"
            ],
            answer: "Provide explicit constraints and ask for citations or sources",
            explanation:
              "Clear constraints and requests for evidence reduce unsupported claims from models."
          },
          {
            id: 9003,
            question: "What is few-shot prompting?",
            options: [
              "Providing several examples in the prompt to demonstrate the desired output",
              "Training with millions of examples only",
              "Using only zero examples",
              "A method to reduce token usage by dropping examples"
            ],
            answer: "Providing several examples in the prompt to demonstrate the desired output",
            explanation:
              "Few-shot includes example input-output pairs to illustrate the task to the model."
          },
          {
            id: 9004,
            question: "Why is it useful to specify output formats in prompts?",
            options: [
              "To make responses easier to parse programmatically",
              "To increase model training time",
              "To obfuscate the expected answer",
              "To disable function calling"
            ],
            answer: "To make responses easier to parse programmatically",
            explanation:
              "Specifying formats (JSON, bullet lists) reduces ambiguity and simplifies downstream processing."
          }
        ]
      }
    ]
  }
];


// helper to fetch all topics
export const fetchAllExamTopics = () =>
  examCategoryList.flatMap((c) =>
    c.topics.map((t) => ({ ...t, categoryName: c.name }))
  );
