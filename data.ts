export interface MCQ {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
}

export interface Topic {
  id: number;
  name: string;
  description?: string;
  mcqs: MCQ[];
}

export interface Category {
  id: number;
  name: string;
  url?: any;
  description?: string;
  topics: Topic[];
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Basic",
    url: "/basic",
    description: "Fundamental topics for Python / Agentic AI exams",
    topics: [
      {
        id: 101,
        name: "Agent",
        description:
          "Core concepts, lifecycle, and behavior of an Agent in agentic systems",
        mcqs: [
          {
            id: 1001,
            question: 'What is an "Agent" in the context of agentic AI?',
            options: [
              "A passive data storage",
              "A self-contained program that perceives, decides, and acts to achieve goals",
              "A hardware component only",
              "A visualization tool",
            ],
            answer:
              "A self-contained program that perceives, decides, and acts to achieve goals",
            explanation:
              "An agent observes input, makes decisions (possibly using models/tools), and takes actions toward goals.",
          },
          {
            id: 1002,
            question:
              "Which of the following best describes an agent's lifecycle?",
            options: [
              "Train → Deploy → Ignore",
              "Perceive → Plan/Decide → Act → Learn/Terminate",
              "Build → Test only",
              "Store → Retrieve",
            ],
            answer: "Perceive → Plan/Decide → Act → Learn/Terminate",
            explanation:
              "Agents sense their environment, decide on actions, act, and may learn or end.",
          },
          {
            id: 1003,
            question: 'What role do "tools" typically play for an agent?',
            options: [
              "They are decorative labels",
              "They provide external capabilities the agent can call (APIs, functions, search)",
              "They replace the model entirely",
              "They only manage memory",
            ],
            answer:
              "They provide external capabilities the agent can call (APIs, functions, search)",
            explanation:
              "Tools let agents perform actions beyond model-only responses, like fetching data or executing commands.",
          },
          {
            id: 1004,
            question: "Which is NOT a usual responsibility of an agent?",
            options: [
              "Stateful decision-making",
              "Interacting with tools",
              "Rendering HTML to the user directly",
              "Maintaining context across turns",
            ],
            answer: "Rendering HTML to the user directly",
            explanation:
              "Rendering UI is usually an application concern; agents focus on decisions/actions.",
          },
          {
            id: 1005,
            question: 'In agentic systems, what is "perception"?',
            options: [
              "The agent's ability to store files",
              "Receiving and interpreting inputs from environment or user",
              "The agent's training process",
              "The agent's UI theme",
            ],
            answer:
              "Receiving and interpreting inputs from environment or user",
            explanation:
              "Perception is how the agent ingests and interprets incoming information.",
          },
          {
            id: 1006,
            question:
              "What is a common way agents keep track of past interactions?",
            options: [
              "Ignoring history",
              "Context or memory structures (conversation history, state)",
              "Only external databases",
              "Fixed-size cache without context",
            ],
            answer:
              "Context or memory structures (conversation history, state)",
            explanation:
              "Agents use context/memory to maintain state and inform future decisions.",
          },
          {
            id: 1007,
            question:
              "Which property improves an agent's reproducibility and predictability?",
            options: [
              "Randomized tool calls always",
              "Controlled model settings and deterministic seeds",
              "Never logging actions",
              "Removing context",
            ],
            answer: "Controlled model settings and deterministic seeds",
            explanation:
              "Controlling temperature, seeds, and settings helps reproduce behavior.",
          },
          {
            id: 1008,
            question:
              'What is the main benefit of separating "agent logic" from "tool implementation"?',
            options: [
              "There is no benefit",
              "Cleaner design, easier testing and swapping tools independently",
              "Slower execution always",
              "Makes it impossible to use streaming",
            ],
            answer:
              "Cleaner design, easier testing and swapping tools independently",
            explanation: "Separation improves modularity and maintainability.",
          },
          {
            id: 1009,
            question: "Which statement about agent goals is true?",
            options: [
              "Agents don't need explicit goals",
              "Explicit goals guide planning and action selection",
              "Goals are only set during runtime and never in config",
              "Goals are irrelevant for tool selection",
            ],
            answer: "Explicit goals guide planning and action selection",
            explanation:
              "Clear goals steer the agent's decisions and tool usage.",
          },
          {
            id: 1010,
            question: "What does it mean when an agent is 'stateless'?",
            options: [
              "It never starts",
              "It does not retain previous interaction context between calls",
              "It uses advanced memory",
              "It writes to disk every step",
            ],
            answer:
              "It does not retain previous interaction context between calls",
            explanation:
              "Stateless agents treat each request independently without stored context.",
          },
          {
            id: 1011,
            question: "Why might you want an agent to be 'stateful'?",
            options: [
              "To consume more memory for no reason",
              "To maintain conversation flow, user preferences, or task progress",
              "To avoid using tools",
              "To prevent logging",
            ],
            answer:
              "To maintain conversation flow, user preferences, or task progress",
            explanation:
              "State helps preserve context and continuity across turns.",
          },
          {
            id: 1012,
            question: "Which of these is an example of an agent action?",
            options: [
              "Selecting a tool and invoking it",
              "Formatting internal variables only",
              "Changing the user's browser settings without permission",
              "Deleting the model",
            ],
            answer: "Selecting a tool and invoking it",
            explanation:
              "Action includes using tools or responding to the user based on a decision.",
          },
          {
            id: 1013,
            question: "What is 'agent orchestration' in the simplest sense?",
            options: [
              "Running a single agent on a schedule",
              "Coordinating multiple agents to achieve a complex task",
              "Only training agents in parallel",
              "Turning agents off",
            ],
            answer: "Coordinating multiple agents to achieve a complex task",
            explanation:
              "Orchestration manages interactions and responsibilities among agents.",
          },
          {
            id: 1014,
            question: "Which design promotes safer agent behavior?",
            options: [
              "No guardrails or checks",
              "Defining guardrails, validation and tool permissioning",
              "Allowing arbitrary external code execution",
              "Hiding logs permanently",
            ],
            answer: "Defining guardrails, validation and tool permissioning",
            explanation:
              "Safety mechanisms and permissions reduce risky actions.",
          },
          {
            id: 1015,
            question: "What is a common method to debug agent decisions?",
            options: [
              "Turn off logging",
              "Enable tracing and inspect decision traces and tool calls",
              "Randomize outputs",
              "Disable context",
            ],
            answer: "Enable tracing and inspect decision traces and tool calls",
            explanation:
              "Tracing helps inspect internal choices and sequence of events.",
          },
          {
            id: 1016,
            question:
              "Agents often need which of these to choose between alternative actions?",
            options: [
              "A randomness source only",
              "A decision policy or scoring mechanism",
              "Only pre-specified deterministic outputs",
              "No inputs at all",
            ],
            answer: "A decision policy or scoring mechanism",
            explanation:
              "Policies or scoring systems let agents evaluate and pick actions.",
          },
          {
            id: 1017,
            question:
              "What does 'tool_choice' typically control in an agent SDK?",
            options: [
              "The UI theme of the tool",
              "Which tool(s) an agent selects or is permitted to call",
              "The programming language of the agent",
              "The agent's memory encoding",
            ],
            answer: "Which tool(s) an agent selects or is permitted to call",
            explanation:
              "tool_choice determines allowed or selected tools during runs.",
          },
          {
            id: 1018,
            question: "In testing an agent, what does 'mocking a tool' allow?",
            options: [
              "Replacing the tool with a predictable stub for tests",
              "Increasing randomness in production",
              "Decreasing test coverage",
              "Encrypting logs",
            ],
            answer: "Replacing the tool with a predictable stub for tests",
            explanation:
              "Mocking provides controlled responses so agent behavior can be tested.",
          },
          {
            id: 1019,
            question:
              "Which metric is useful when evaluating an agent's task success?",
            options: [
              "Task completion rate or success rate",
              "Number of colors in UI",
              "Size of the agent file only",
              "Random seed value",
            ],
            answer: "Task completion rate or success rate",
            explanation:
              "Success metrics measure whether the agent achieves intended goals.",
          },
          {
            id: 1020,
            question: "What is the typical purpose of an agent's 'policy'?",
            options: [
              "To define the agent's action selection rules",
              "To store logs in the cloud",
              "To create UI elements",
              "To reduce model parameters",
            ],
            answer: "To define the agent's action selection rules",
            explanation:
              "Policies guide how agents map observations and context to actions.",
          },
          {
            id: 1021,
            question:
              "Which of these is a reason for using a multi-agent architecture?",
            options: [
              "To centralize all logic into a single monolith",
              "To decompose complex problems into specialized agents",
              "Because multi-agent systems are always simple",
              "To avoid using tools",
            ],
            answer: "To decompose complex problems into specialized agents",
            explanation:
              "Different agents can handle sub-tasks and collaborate to solve complex goals.",
          },
          {
            id: 1022,
            question: "What does it mean for an agent to 'delegate' a subtask?",
            options: [
              "It ignores the subtask",
              "It assigns the subtask to a tool or another agent",
              "It always fails",
              "It stores the subtask in a database only",
            ],
            answer: "It assigns the subtask to a tool or another agent",
            explanation:
              "Delegation passes responsibility for a subtask to a more appropriate actor.",
          },
          {
            id: 1023,
            question: "Which is an example of agent 'observability'?",
            options: [
              "No logs at all",
              "Traces, logs, and monitoring of agent actions and tool calls",
              "Hiding internal states",
              "Avoiding tests",
            ],
            answer:
              "Traces, logs, and monitoring of agent actions and tool calls",
            explanation:
              "Observability gives insight into runtime behavior for debugging and analysis.",
          },
          {
            id: 1024,
            question: "What is a 'turn' in conversational agent contexts?",
            options: [
              "A type of tool",
              "One exchange where the agent or user speaks or acts",
              "A background thread only",
              "A database transaction",
            ],
            answer: "One exchange where the agent or user speaks or acts",
            explanation:
              "A turn is one step in the conversation or interaction sequence.",
          },
          {
            id: 1025,
            question: "Why is input validation important for agents?",
            options: [
              "It's never important",
              "To avoid invalid or malicious inputs causing errors or harmful actions",
              "To increase execution time unnecessarily",
              "To remove context",
            ],
            answer:
              "To avoid invalid or malicious inputs causing errors or harmful actions",
            explanation:
              "Validation reduces risk by ensuring inputs meet expectations before action.",
          },
          {
            id: 1026,
            question:
              "Which of these is a best practice when designing agent prompts?",
            options: [
              "Use vague, ambiguous instructions",
              "Provide clear, specific instructions and expected output format",
              "Always use maximum model temperature",
              "Never include examples",
            ],
            answer:
              "Provide clear, specific instructions and expected output format",
            explanation:
              "Clarity and formatting expectations lead to more reliable outputs.",
          },
          {
            id: 1027,
            question: "What does 'agent introspection' usually refer to?",
            options: [
              "The agent changing its own source code",
              "The agent analyzing its internal state, reasoning steps, or decisions",
              "Removing all logs",
              "Only training models",
            ],
            answer:
              "The agent analyzing its internal state, reasoning steps, or decisions",
            explanation:
              "Introspection helps explain or adapt behavior based on internal reasoning traces.",
          },
          {
            id: 1028,
            question:
              "Which factor can directly affect an agent's response variability?",
            options: [
              "Model temperature or randomness settings",
              "File system type",
              "Color of the terminal",
              "User IP address only",
            ],
            answer: "Model temperature or randomness settings",
            explanation:
              "Higher temperature increases variation; lower temperature yields more deterministic outputs.",
          },
          {
            id: 1029,
            question:
              "If an agent must always return JSON adhering to a schema, what should you do?",
            options: [
              "Never validate the output",
              "Use structured output enforcement and validation against the schema",
              "Leave it to random chance",
              "Return plain text only",
            ],
            answer:
              "Use structured output enforcement and validation against the schema",
            explanation:
              "Schema validation ensures the agent's outputs are machine-readable and consistent.",
          },
          {
            id: 1030,
            question: "Which of the following is true about agent 'timeouts'?",
            options: [
              "Timeouts are irrelevant",
              "They limit how long an agent or tool call can run to prevent hangs",
              "They increase memory usage",
              "They disable logging automatically",
            ],
            answer:
              "They limit how long an agent or tool call can run to prevent hangs",
            explanation:
              "Timeouts protect systems from long-running or stuck operations.",
          },
          {
            id: 1031,
            question: "How can agents handle external API failures gracefully?",
            options: [
              "Crash the system",
              "Catch errors, retry with backoff, fallback to alternate tools or degrade functionality",
              "Ignore errors silently",
              "Always escalate to a user immediately",
            ],
            answer:
              "Catch errors, retry with backoff, fallback to alternate tools or degrade functionality",
            explanation:
              "Robust error handling and fallback plans improve resilience.",
          },
          {
            id: 1032,
            question: "Which behavior is characteristic of a reactive agent?",
            options: [
              "Planning many steps ahead before acting",
              "Immediate responses to inputs without long-term planning",
              "Performing only offline batch processing",
              "Never using tools",
            ],
            answer: "Immediate responses to inputs without long-term planning",
            explanation:
              "Reactive agents respond quickly based on current input rather than extended planning.",
          },
          {
            id: 1033,
            question:
              "A deliberative agent primarily focuses on which capability?",
            options: [
              "Random output generation",
              "Explicit internal planning and reasoning before action",
              "Only caching results",
              "No decision-making",
            ],
            answer: "Explicit internal planning and reasoning before action",
            explanation:
              "Deliberative agents plan multi-step strategies before acting.",
          },
          {
            id: 1034,
            question:
              "When designing an agent, why separate 'observation' and 'action' representations?",
            options: [
              "To confuse developers",
              "To make mapping from observations to actions clear and modular",
              "To remove testing",
              "To avoid using tools",
            ],
            answer:
              "To make mapping from observations to actions clear and modular",
            explanation:
              "Clear separation simplifies design, testing, and reuse of components.",
          },
          {
            id: 1035,
            question: "What does the term 'closed-loop' agent imply?",
            options: [
              "Agent acts without receiving feedback",
              "Agent uses feedback from actions to update future decisions",
              "Agent only logs actions",
              "Agent cannot call tools",
            ],
            answer:
              "Agent uses feedback from actions to update future decisions",
            explanation:
              "Closed-loop systems incorporate feedback to refine behavior.",
          },
          {
            id: 1036,
            question:
              "What is an important consideration for agents interacting with user data?",
            options: [
              "Ignore privacy and log everything",
              "Respect privacy, minimize data retention, and apply access controls",
              "Always broadcast user data publicly",
              "Never encrypt data",
            ],
            answer:
              "Respect privacy, minimize data retention, and apply access controls",
            explanation:
              "Privacy and security practices are essential for user trust and compliance.",
          },
          {
            id: 1037,
            question:
              "Which of these best describes the relationship between an agent and the underlying language model?",
            options: [
              "The agent is the language model itself",
              "The agent orchestrates the model(s), tools, and context to perform tasks",
              "The model is only used for logging",
              "They cannot be used together",
            ],
            answer:
              "The agent orchestrates the model(s), tools, and context to perform tasks",
            explanation:
              "Agents combine models with tools, context, and policies to act.",
          },
          {
            id: 1038,
            question:
              "Which of the following should be logged for agent accountability?",
            options: [
              "Decision traces, tool calls, inputs and outputs",
              "Only the final answer without context",
              "Only system uptime",
              "Nothing at all",
            ],
            answer: "Decision traces, tool calls, inputs and outputs",
            explanation:
              "Detailed logs enable auditing and debugging of agent behavior.",
          },
          {
            id: 1039,
            question: "What is 'rolling back' an agent action useful for?",
            options: [
              "It is never useful",
              "Undoing or mitigating effects of an incorrect or harmful action",
              "Increasing randomness",
              "Deleting all logs",
            ],
            answer:
              "Undoing or mitigating effects of an incorrect or harmful action",
            explanation:
              "Rollback provides safety by reverting harmful changes when possible.",
          },
          {
            id: 1040,
            question: "When should an agent consult a human in the loop?",
            options: [
              "When tasks are low risk",
              "When uncertainty or risk is high and human judgement is needed",
              "Never consult humans",
              "Only during development",
            ],
            answer:
              "When uncertainty or risk is high and human judgement is needed",
            explanation:
              "Human oversight is required for high-risk or ambiguous decisions.",
          },
          {
            id: 1041,
            question:
              "Which of these helps reduce hallucinations in agent outputs?",
            options: [
              "Using reliable tools and grounding responses in verifiable data",
              "Maximizing temperature always",
              "Removing tool access",
              "Avoiding validation",
            ],
            answer:
              "Using reliable tools and grounding responses in verifiable data",
            explanation:
              "Grounding with sources and tools reduces fabricated responses.",
          },
          {
            id: 1042,
            question:
              "What is the primary reason to limit an agent's tool permissions?",
            options: [
              "To make development harder",
              "To reduce the risk of harmful or unauthorized actions",
              "To increase CPU usage",
              "To hide logs",
            ],
            answer: "To reduce the risk of harmful or unauthorized actions",
            explanation:
              "Permissioning prevents misuse and secures sensitive capabilities.",
          },
          {
            id: 1043,
            question:
              "What kind of tests are especially useful for agent reliability?",
            options: [
              "Unit tests for logic, integration tests for tools, and end-to-end task tests",
              "Only UI tests",
              "Tests that never run",
              "Only manual tests",
            ],
            answer:
              "Unit tests for logic, integration tests for tools, and end-to-end task tests",
            explanation:
              "Multiple test layers ensure correctness across components and flows.",
          },
          {
            id: 1044,
            question: 'What is an "execution trace" in agent systems?',
            options: [
              "A graphic asset",
              "A chronological record of decisions, tool calls, and outputs during a run",
              "A compilation error",
              "A database schema",
            ],
            answer:
              "A chronological record of decisions, tool calls, and outputs during a run",
            explanation:
              "Traces capture the sequence of events for analysis and debugging.",
          },
          {
            id: 1045,
            question:
              "Why is idempotency important when agents call external tools?",
            options: [
              "It isn't important",
              "So retries don't cause unintended side effects (e.g., double charges)",
              "To make tools slower",
              "To increase storage",
            ],
            answer:
              "So retries don't cause unintended side effects (e.g., double charges)",
            explanation:
              "Idempotent operations ensure safe repeated calls and reliable retries.",
          },
          {
            id: 1046,
            question:
              "Which of these is a benefit of using a pre-defined agent template or configuration?",
            options: [
              "Consistent behavior and faster setup across similar tasks",
              "Always slower performance",
              "Removes ability to configure models",
              "Prevents logging",
            ],
            answer: "Consistent behavior and faster setup across similar tasks",
            explanation:
              "Templates standardize behavior and speed development.",
          },
          {
            id: 1047,
            question: "What does 'tool latency' impact in agent runs?",
            options: [
              "Only memory usage",
              "Response time and user experience; long latencies slow overall agent performance",
              "Model architecture",
              "Number of available tools",
            ],
            answer:
              "Response time and user experience; long latencies slow overall agent performance",
            explanation:
              "Slow tool calls increase end-to-end latency for agent responses.",
          },
          {
            id: 1048,
            question:
              "Which is a common approach to limit an agent's resource usage?",
            options: [
              "Set timeouts, use max turn limits, and limit tool concurrency",
              "Never set any limits",
              "Disable logging entirely",
              "Increase temperature",
            ],
            answer:
              "Set timeouts, use max turn limits, and limit tool concurrency",
            explanation:
              "Resource caps prevent runaway usage and control costs.",
          },
          {
            id: 1049,
            question:
              "What is one sign an agent is overfitting to training data or prompts?",
            options: [
              "Generalizing poorly to new inputs and repeating memorized outputs",
              "Perfect performance on unseen data",
              "Faster tool calls",
              "Better privacy",
            ],
            answer:
              "Generalizing poorly to new inputs and repeating memorized outputs",
            explanation:
              "Overfitting leads to poor generalization and memorized responses on novel inputs.",
          },
          {
            id: 1050,
            question:
              "Which practice increases the explainability of an agent's decisions?",
            options: [
              "Removing logs and traces",
              "Recording reasoning steps, decisions, and tool outputs in structured traces",
              "Obfuscating tool calls",
              "Disabling validation",
            ],
            answer:
              "Recording reasoning steps, decisions, and tool outputs in structured traces",
            explanation:
              "Structured traces and step logging help explain and audit agent behavior.",
          },
        ],
      },
      {
        id: 102,
        name: "Agent Configuration",
        description:
          "Settings and parameters used to initialize and control agent behavior",
        mcqs: [
          {
            id: 1051,
            question:
              "What is the primary purpose of an agent configuration file?",
            options: [
              "To store model weights",
              "To define runtime settings, tools, and policies for an agent",
              "To host the web UI",
              "To encrypt network traffic",
            ],
            answer:
              "To define runtime settings, tools, and policies for an agent",
            explanation:
              "Configuration files declare how an agent should behave and which resources it can use.",
          },
          {
            id: 1052,
            question:
              "Which configuration parameter typically controls randomness in model outputs?",
            options: ["timeout", "temperature", "max_turns", "name_override"],
            answer: "temperature",
            explanation:
              "Temperature adjusts sampling randomness: higher values increase variability.",
          },
          {
            id: 1053,
            question:
              "Where would you usually specify which external tools an agent may call?",
            options: [
              "In the agent configuration under tools or allowed_tools",
              "In the OS kernel settings",
              "Directly inside the model weights",
              "In the browser cookies",
            ],
            answer: "In the agent configuration under tools or allowed_tools",
            explanation:
              "Tool lists are typically declared in the agent configuration for permissioning and discovery.",
          },
          {
            id: 1054,
            question: "What does the `max_turns` configuration control?",
            options: [
              "Maximum number of parallel tools",
              "Maximum number of conversation turns the agent can take in a run",
              "Maximum model parameter size",
              "Maximum file attachments",
            ],
            answer:
              "Maximum number of conversation turns the agent can take in a run",
            explanation:
              "max_turns prevents infinite loops by bounding the dialogue length per run.",
          },
          {
            id: 1055,
            question:
              "Which setting would you adjust to limit how long a tool call is allowed to run?",
            options: [
              "tool_timeout or timeout",
              "temperature",
              "top_k",
              "name_override",
            ],
            answer: "tool_timeout or timeout",
            explanation:
              "Timeout settings prevent long-running tool calls from blocking the agent.",
          },
          {
            id: 1056,
            question:
              "What is a safe default for enabling potentially dangerous tools in production?",
            options: [
              "Enable all tools by default",
              "Disable by default and require explicit permission in config",
              "Enable only in weekends",
              "Enable in config but hide logs",
            ],
            answer:
              "Disable by default and require explicit permission in config",
            explanation:
              "Restricting potentially harmful tools by default reduces risk.",
          },
          {
            id: 1057,
            question:
              "Which configuration entry is best for setting the model's maximum tokens per response?",
            options: [
              "max_tokens",
              "max_turns",
              "presence_penalty",
              "name_override",
            ],
            answer: "max_tokens",
            explanation:
              "max_tokens constrains the response length generated by the model.",
          },
          {
            id: 1058,
            question:
              "Why include `logging` and `tracing` options in agent config?",
            options: [
              "To disable the agent",
              "To control verbosity, storage and tracing level for debugging and audits",
              "To set model temperature",
              "To hide tools",
            ],
            answer:
              "To control verbosity, storage and tracing level for debugging and audits",
            explanation:
              "Logging/tracing settings help monitor and debug agent runs and maintain accountability.",
          },
          {
            id: 1059,
            question:
              "What does `tool_choice` configuration typically influence?",
            options: [
              "Which programming language the agent is written in",
              "Which tool selection strategy or allowed tools the agent can use",
              "The system time zone",
              "The database schema",
            ],
            answer:
              "Which tool selection strategy or allowed tools the agent can use",
            explanation:
              "tool_choice governs permitted tools or selection heuristics during execution.",
          },
          {
            id: 1060,
            question:
              "If you want deterministic outputs for testing, which configuration is most relevant?",
            options: [
              "Increase `temperature` and `top_p`",
              "Set deterministic seed and lower randomness (temperature=0)",
              "Enable all tools",
              "Disable tracing",
            ],
            answer:
              "Set deterministic seed and lower randomness (temperature=0)",
            explanation:
              "Lowering randomness and fixing seeds helps reproduce outputs reliably in tests.",
          },
          {
            id: 1061,
            question:
              "What is the purpose of `allowed_origins` or similar network config in agent settings?",
            options: [
              "To configure CORS and restrict which domains can interact with the agent",
              "To specify model hyperparameters",
              "To encrypt local files",
              "To change UI colors",
            ],
            answer:
              "To configure CORS and restrict which domains can interact with the agent",
            explanation:
              "Network origin settings limit which clients can call the agent endpoints for security.",
          },
          {
            id: 1062,
            question:
              "Which configuration is appropriate for controlling parallel tool calls?",
            options: [
              "parallel_tool_calls (true/false or concurrency limits)",
              "presence_penalty",
              "max_tokens",
              "structure_output",
            ],
            answer: "parallel_tool_calls (true/false or concurrency limits)",
            explanation:
              "parallel_tool_calls controls whether and how many tools can be used concurrently.",
          },
          {
            id: 1063,
            question:
              "Where would you configure retry and backoff behavior for tool calls?",
            options: [
              "In the agent's tool configuration or runtime settings",
              "In the model weights",
              "In the UI stylesheet",
              "In the OS time settings",
            ],
            answer: "In the agent's tool configuration or runtime settings",
            explanation:
              "Retry/backoff policies are specified alongside tool definitions to handle transient failures.",
          },
          {
            id: 1064,
            question: "What does `presence_penalty` configuration influence?",
            options: [
              "How often tools are chosen",
              "Encourages or discourages the model from mentioning new tokens",
              "The number of tools available",
              "Timeout length",
            ],
            answer:
              "Encourages or discourages the model from mentioning new tokens",
            explanation:
              "presence_penalty affects token usage by penalizing new token introduction.",
          },
          {
            id: 1065,
            question:
              "If an agent configuration includes `hooks`, what is their typical role?",
            options: [
              "To style the UI",
              "To run custom code at lifecycle events (before/after run, on tool call)",
              "To change model weights",
              "To compress logs only",
            ],
            answer:
              "To run custom code at lifecycle events (before/after run, on tool call)",
            explanation:
              "Hooks allow custom behavior to be executed at defined points in the agent lifecycle.",
          },
          {
            id: 1066,
            question:
              "What is a recommended practice for storing sensitive configuration (API keys)?",
            options: [
              "Commit them to source control",
              "Store them in environment variables or secret managers and reference in config",
              "Hardcode in the agent code",
              "Write them in public docs",
            ],
            answer:
              "Store them in environment variables or secret managers and reference in config",
            explanation:
              "Secrets should be managed securely, not committed to source control.",
          },
          {
            id: 1067,
            question:
              "Which config option helps control how the agent formats its outputs (e.g., JSON schema)?",
            options: [
              "structure_output or output_schema",
              "tool_timeout",
              "max_turns",
              "presence_penalty",
            ],
            answer: "structure_output or output_schema",
            explanation:
              "Output schema/config enforces structure like JSON for machine-readability.",
          },
          {
            id: 1068,
            question:
              "What is the effect of increasing `top_k` in model settings within the agent config?",
            options: [
              "Limits token length",
              "Considers more candidate tokens at each step, often increasing diversity",
              "Disables tool usage",
              "Increases timeout",
            ],
            answer:
              "Considers more candidate tokens at each step, often increasing diversity",
            explanation:
              "top_k restricts sampling to the top K tokens; larger values allow more options.",
          },
          {
            id: 1069,
            question:
              "Which configuration is useful to prevent an agent from performing certain actions at runtime?",
            options: [
              "is_enabled flags on tools or features",
              "temperature",
              "max_tokens",
              "top_p",
            ],
            answer: "is_enabled flags on tools or features",
            explanation:
              "is_enabled toggles allow disabling risky tools or capabilities as needed.",
          },
          {
            id: 1070,
            question:
              "What role does `default_prompt` or `initial_prompt` in config serve?",
            options: [
              "It sets the agent's initial system instruction or behavior blueprint",
              "It stores model checkpoints",
              "It is used only for logging",
              "It configures network ports",
            ],
            answer:
              "It sets the agent's initial system instruction or behavior blueprint",
            explanation:
              "Initial prompts establish the agent's role and baseline instructions for runs.",
          },
          {
            id: 1071,
            question:
              "Which config parameter is specifically useful to control how many tokens the model can consider from context?",
            options: [
              "context_window or max_context_tokens",
              "max_turns",
              "name_override",
              "is_enabled",
            ],
            answer: "context_window or max_context_tokens",
            explanation:
              "Context size limits how much prior text the model can attend to during generation.",
          },
          {
            id: 1072,
            question:
              "If you want the agent to always prefer a particular tool, what config approach can help?",
            options: [
              "Set tool priority weights or prefer_tool entries in config",
              "Increase temperature",
              "Remove all other tools",
              "Disable tracing",
            ],
            answer:
              "Set tool priority weights or prefer_tool entries in config",
            explanation:
              "Priority settings bias the agent toward selecting preferred tools when appropriate.",
          },
          {
            id: 1073,
            question:
              "Why include `resource_limits` (CPU/memory) in an agent configuration?",
            options: [
              "To crash the process intentionally",
              "To ensure the agent runs within allowed system resource budgets",
              "To change model weights",
              "To hide logs",
            ],
            answer:
              "To ensure the agent runs within allowed system resource budgets",
            explanation:
              "Resource limits prevent runaway usage and enable safe multi-tenant operation.",
          },
          {
            id: 1074,
            question:
              "What is the function of a `validation_schema` entry in an agent config for inputs?",
            options: [
              "To pause the agent",
              "To specify rules that incoming requests must satisfy before processing",
              "To change tool timeouts",
              "To set UI color themes",
            ],
            answer:
              "To specify rules that incoming requests must satisfy before processing",
            explanation:
              "Input validation schemas enforce structure and constraints to avoid bad inputs.",
          },
          {
            id: 1075,
            question:
              "How would `concurrency_limit` in config affect an agent service?",
            options: [
              "Control how many runs or tool invocations can execute simultaneously",
              "Change the model's vocabulary",
              "Increase temperature automatically",
              "Disable logs",
            ],
            answer:
              "Control how many runs or tool invocations can execute simultaneously",
            explanation:
              "Concurrency limits manage throughput and protect shared resources.",
          },
          {
            id: 1076,
            question:
              "Which configuration option would you tweak to bias the model towards shorter replies?",
            options: [
              "Increase max_tokens",
              "Decrease max_tokens or increase length_penalty / set stop sequences",
              "Enable all tools",
              "Set temperature to 2",
            ],
            answer:
              "Decrease max_tokens or increase length_penalty / set stop sequences",
            explanation:
              "Lower max_tokens or use penalties and stop tokens to shorten responses.",
          },
          {
            id: 1077,
            question:
              "What does `role` or `persona` in agent config commonly define?",
            options: [
              "The hardware type",
              "The behavioral persona or system role used in the system prompt",
              "The database connection string",
              "The UI layout",
            ],
            answer:
              "The behavioral persona or system role used in the system prompt",
            explanation:
              "Persona defines agent style, tone, and role for consistent behavior across runs.",
          },
          {
            id: 1078,
            question:
              "Why might an agent config include `allowed_file_types` for file-handling tools?",
            options: [
              "To increase attack surface",
              "To filter and restrict which file types can be processed for security reasons",
              "To change model temperature",
              "To change UI fonts",
            ],
            answer:
              "To filter and restrict which file types can be processed for security reasons",
            explanation:
              "Limiting file types reduces risk from malicious or unsupported formats.",
          },
          {
            id: 1079,
            question:
              "What is the advantage of making agent configuration declarative (e.g., YAML/JSON) rather than code-only?",
            options: [
              "Harder to change",
              "Easier to review, version, and modify without changing program logic",
              "Makes the agent run faster",
              "Removes need for tests",
            ],
            answer:
              "Easier to review, version, and modify without changing program logic",
            explanation:
              "Declarative configs separate behavior definitions from code and simplify ops.",
          },
          {
            id: 1080,
            question:
              "Which entry would you add to config to enable human review on high-risk decisions?",
            options: [
              "human_in_loop or escalation_policy",
              "temperature",
              "top_k",
              "name_override",
            ],
            answer: "human_in_loop or escalation_policy",
            explanation:
              "Escalation or human-in-loop settings define when to pause and request human approval.",
          },
          {
            id: 1081,
            question:
              "What does `default_tool_timeout` in configuration provide?",
            options: [
              "Default timeout applied to tool calls lacking explicit timeout settings",
              "Maximum tokens for the model",
              "Default temperature",
              "Tool naming convention",
            ],
            answer:
              "Default timeout applied to tool calls lacking explicit timeout settings",
            explanation:
              "A default timeout standardizes behavior when individual tools do not define one.",
          },
          {
            id: 1082,
            question:
              "How is `audit_logging` setting in config typically used?",
            options: [
              "To disable all logs",
              "To capture structured events for compliance and post-run review",
              "To change the agent's persona",
              "To increase temperature",
            ],
            answer:
              "To capture structured events for compliance and post-run review",
            explanation:
              "Audit logs record important events and decisions for accountability.",
          },
          {
            id: 1083,
            question:
              "Which configuration item helps ensure agent outputs follow a strict schema?",
            options: [
              "output_validation or structure_output enabled with schema",
              "parallel_tool_calls",
              "max_turns",
              "presence_penalty",
            ],
            answer: "output_validation or structure_output enabled with schema",
            explanation:
              "Output validation enforces schema compliance before returning results.",
          },
          {
            id: 1084,
            question:
              "What is the effect of enabling `debug_mode` in an agent config?",
            options: [
              "Deletes data",
              "Increases logging detail and may expose internal reasoning for troubleshooting",
              "Disables tools permanently",
              "Compresses logs",
            ],
            answer:
              "Increases logging detail and may expose internal reasoning for troubleshooting",
            explanation:
              "Debug mode provides richer introspection but should be restricted in production.",
          },
          {
            id: 1085,
            question:
              "If an agent must operate under regional data rules, what config element helps?",
            options: [
              "data_residency or region settings specifying allowed storage/processing locations",
              "temperature",
              "max_tokens",
              "name_override",
            ],
            answer:
              "data_residency or region settings specifying allowed storage/processing locations",
            explanation:
              "Data residency controls where data is stored/processed to meet legal requirements.",
          },
          {
            id: 1086,
            question:
              "Which config option would help avoid expensive model calls for trivial tasks?",
            options: [
              "fallback_to_local_rules or use lightweight heuristics before model invocation",
              "Increase temperature",
              "Set top_k high",
              "Disable logging",
            ],
            answer:
              "fallback_to_local_rules or use lightweight heuristics before model invocation",
            explanation:
              "Local rules or heuristics can handle simple cases without invoking large models.",
          },
          {
            id: 1087,
            question: "What does `max_retries` for a tool define in config?",
            options: [
              "Maximum number of times to retry a failed tool call",
              "Maximum tokens the model can generate",
              "Number of tools available",
              "The agent's priority",
            ],
            answer: "Maximum number of times to retry a failed tool call",
            explanation:
              "max_retries prevents infinite retry loops and controls resilience behavior.",
          },
          {
            id: 1088,
            question:
              "Why would you include `schema_version` in an agent configuration?",
            options: [
              "To make configuration unreadable",
              "To track and manage config evolution and backward compatibility",
              "To change model temperature",
              "To hide tools",
            ],
            answer:
              "To track and manage config evolution and backward compatibility",
            explanation:
              "Schema versions help upgrade configs safely and detect incompatibilities.",
          },
          {
            id: 1089,
            question:
              "Which setting helps an agent decide whether to call external APIs synchronously or asynchronously?",
            options: [
              "call_mode (sync/async) or concurrency config for tools",
              "temperature",
              "presence_penalty",
              "max_tokens",
            ],
            answer: "call_mode (sync/async) or concurrency config for tools",
            explanation:
              "Call mode controls whether to wait for tool responses or schedule them asynchronously.",
          },
          {
            id: 1090,
            question: "What is the role of `init_hooks` in configuration?",
            options: [
              "To run code after the agent terminates",
              "To execute setup logic when the agent instance starts (e.g., load caches)",
              "To change model weights",
              "To compress logs",
            ],
            answer:
              "To execute setup logic when the agent instance starts (e.g., load caches)",
            explanation:
              "Init hooks prepare resources or state needed before handling requests.",
          },
          {
            id: 1091,
            question:
              "Which configuration is most relevant to controlling cost for model usage?",
            options: [
              "max_tokens, model selection, and request sampling settings",
              "is_enabled only",
              "name_override",
              "description_override",
            ],
            answer:
              "max_tokens, model selection, and request sampling settings",
            explanation:
              "Selecting smaller models and limiting tokens reduces compute cost.",
          },
          {
            id: 1092,
            question:
              "Where should `environment` specific overrides (dev/staging/prod) appear?",
            options: [
              "In separate environment-specific config files or overlays",
              "In the model weights",
              "In the browser cache",
              "In the agent's CLI only",
            ],
            answer: "In separate environment-specific config files or overlays",
            explanation:
              "Environment overlays let you safely vary settings across deployment stages.",
          },
          {
            id: 1093,
            question: "What does `enable_guardrails` in config typically do?",
            options: [
              "Disable all safety checks",
              "Activate validation/safety rules to restrict risky actions",
              "Increase temperature",
              "Remove logging",
            ],
            answer:
              "Activate validation/safety rules to restrict risky actions",
            explanation:
              "Guardrails enforce constraints and prevent unsafe or disallowed behavior.",
          },
          {
            id: 1094,
            question: "Why include a `metadata` section in agent config?",
            options: [
              "To provide human-friendly descriptions, owners, and contact info for the agent",
              "To set model temperature",
              "To increase token limits",
              "To disable tools",
            ],
            answer:
              "To provide human-friendly descriptions, owners, and contact info for the agent",
            explanation:
              "Metadata helps operators understand purpose and who to contact for issues.",
          },
          {
            id: 1095,
            question:
              "Which configuration option helps the agent respect rate limits of external services?",
            options: [
              "rate_limit or throttle settings in tool config",
              "temperature",
              "presence_penalty",
              "max_tokens",
            ],
            answer: "rate_limit or throttle settings in tool config",
            explanation:
              "Rate limiting prevents exceeding third-party quotas and avoids service disruptions.",
          },
          {
            id: 1096,
            question:
              "What does `user_overrides_allowed` control in an agent configuration?",
            options: [
              "Whether end-users can override some config settings at runtime",
              "The agent's max tokens",
              "Tool concurrency",
              "Model architecture",
            ],
            answer:
              "Whether end-users can override some config settings at runtime",
            explanation:
              "This flag determines which configuration values are changeable by callers.",
          },
          {
            id: 1097,
            question:
              "Which config option would best support A/B testing different agent behaviors?",
            options: [
              "variant or experiment settings referencing different config sets",
              "presence_penalty",
              "is_enabled only",
              "max_turns",
            ],
            answer:
              "variant or experiment settings referencing different config sets",
            explanation:
              "Variants enable running alternate configurations to compare performance metrics.",
          },
          {
            id: 1098,
            question:
              "Why add `failure_error_function` handlers in tool configuration?",
            options: [
              "To increase the chance of crashes",
              "To provide custom logic on tool failure (raise, fallback, transform error)",
              "To change model vocabulary",
              "To disable logging",
            ],
            answer:
              "To provide custom logic on tool failure (raise, fallback, transform error)",
            explanation:
              "Custom failure handlers let the agent respond intelligently to tool errors.",
          },
          {
            id: 1099,
            question:
              "Which config item ensures config changes are tracked and auditable?",
            options: [
              "Store configs in version-controlled repositories and include change metadata",
              "Never save configs",
              "Store them only on local machines",
              "Disable logging",
            ],
            answer:
              "Store configs in version-controlled repositories and include change metadata",
            explanation:
              "Version control enables auditability and safe rollbacks for configuration changes.",
          },
          {
            id: 1100,
            question:
              "What is the benefit of validating agent config on startup?",
            options: [
              "Slower startup only",
              "Detect misconfigurations early and fail fast with clear errors",
              "To prevent any agent runs ever",
              "To hide runtime logs",
            ],
            answer:
              "Detect misconfigurations early and fail fast with clear errors",
            explanation:
              "Startup validation avoids runtime surprises and simplifies debugging of bad configs.",
          },
        ],
      },
      {
        id: 103,
        name: "Tools",
        description:
          "Tool definition, integration, failure handling, security, and advanced tool behaviors",
        mcqs: [
          {
            id: 1101,
            question: "What is a 'tool' in the context of an agentic SDK?",
            options: [
              "A UI color theme",
              "A callable external capability (API, function) the agent can use",
              "A model checkpoint",
              "A network protocol",
            ],
            answer:
              "A callable external capability (API, function) the agent can use",
            explanation:
              "Tools provide external functionality (search, DB access, actions) an agent can invoke.",
          },
          {
            id: 1102,
            question:
              "Which parameter most directly allows toggling a tool on or off?",
            options: ["name_override", "is_enabled", "top_p", "max_tokens"],
            answer: "is_enabled",
            explanation:
              "is_enabled flags let you enable or disable tools in config or at runtime.",
          },
          {
            id: 1103,
            question: "What is the purpose of `name_override` for a tool?",
            options: [
              "To change the underlying tool logic",
              "To present or register the tool under a different display/identifier name",
              "To set timeouts",
              "To encrypt the tool",
            ],
            answer:
              "To present or register the tool under a different display/identifier name",
            explanation:
              "name_override customizes the tool's visible name without altering its implementation.",
          },
          {
            id: 1104,
            question: "Why use `description_override` for a tool?",
            options: [
              "To change tool code",
              "To provide a clearer or domain-specific description shown to agents or operators",
              "To modify model temperature",
              "To limit tokens",
            ],
            answer:
              "To provide a clearer or domain-specific description shown to agents or operators",
            explanation:
              "Description overrides help clarify tool purpose and correct usage for decision-making.",
          },
          {
            id: 1105,
            question:
              "What does `failure_error_function` typically do in tool config?",
            options: [
              "Transforms or handles tool errors (raise, map, fallback)",
              "Changes UI styling",
              "Increases randomness",
              "Deletes logs",
            ],
            answer: "Transforms or handles tool errors (raise, map, fallback)",
            explanation:
              "Custom handlers let the agent respond intelligently to tool failures.",
          },
          {
            id: 1106,
            question:
              "Which is a best practice for securing tools that perform sensitive actions?",
            options: [
              "Expose them publicly without auth",
              "Require authentication, permissioning, and least-privilege access",
              "Hardcode credentials in source",
              "Allow all agents to call them by default",
            ],
            answer:
              "Require authentication, permissioning, and least-privilege access",
            explanation:
              "Security requires controlled access and minimal privileges to reduce risk.",
          },
          {
            id: 1107,
            question: "Why add an `input_schema` for tools?",
            options: [
              "To decorate the tool",
              "To validate and ensure correct structure of inputs before invocation",
              "To increase model temperature",
              "To slow down calls",
            ],
            answer:
              "To validate and ensure correct structure of inputs before invocation",
            explanation:
              "Schemas prevent invalid inputs and protect downstream systems from malformed data.",
          },
          {
            id: 1108,
            question: "What is the benefit of `output_schema` for tools?",
            options: [
              "It prevents the tool from running",
              "It ensures predictable, machine-readable outputs and aids downstream parsing",
              "It increases token usage",
              "It disables retries",
            ],
            answer:
              "It ensures predictable, machine-readable outputs and aids downstream parsing",
            explanation:
              "Output schemas guarantee structure for integrations and agent reasoning.",
          },
          {
            id: 1109,
            question:
              "What is a common pattern when an external tool is unreliable?",
            options: [
              "Never call it",
              "Implement retries with backoff and fallback strategies",
              "Always increase temperature",
              "Ignore failures silently",
            ],
            answer: "Implement retries with backoff and fallback strategies",
            explanation:
              "Retries/backoff and fallbacks help maintain robustness when tools fail transiently.",
          },
          {
            id: 1110,
            question: "What does 'idempotency' mean for a tool?",
            options: [
              "Tool always errors",
              "Repeated identical calls have the same effect as one call",
              "Tool requires authentication",
              "Tool changes its name each call",
            ],
            answer: "Repeated identical calls have the same effect as one call",
            explanation:
              "Idempotent tools make retries safe by avoiding duplicate side effects.",
          },
          {
            id: 1111,
            question: "Why might you mock tools during agent testing?",
            options: [
              "To slow tests down",
              "To provide deterministic, controlled responses and avoid external dependencies",
              "To hide tool names",
              "To bypass unit tests",
            ],
            answer:
              "To provide deterministic, controlled responses and avoid external dependencies",
            explanation:
              "Mocked tools make tests reliable, fast, and isolated from network variability.",
          },
          {
            id: 1112,
            question:
              "Which tool property helps an orchestrator decide tool concurrency limits?",
            options: [
              "description_override",
              "concurrency_limit or parallel_safe flag",
              "name_override",
              "output_schema",
            ],
            answer: "concurrency_limit or parallel_safe flag",
            explanation:
              "Concurrency settings indicate safe parallel usage and help prevent resource exhaustion.",
          },
          {
            id: 1113,
            question: "What is 'Agent as Tools' pattern?",
            options: [
              "Embedding agents inside model weights",
              "Exposing a specialized agent behind a tool-like interface so other agents can call it",
              "Converting tools into UI widgets",
              "Running agents without tools",
            ],
            answer:
              "Exposing a specialized agent behind a tool-like interface so other agents can call it",
            explanation:
              "This enables modular multi-agent designs where agents delegate to agent-tools.",
          },
          {
            id: 1114,
            question:
              "What does a `custom_output_extractor` do when an agent uses another agent as a tool?",
            options: [
              "Changes the calling agent's model type",
              "Parses and extracts relevant structured data from the called agent's output",
              "Deletes logs",
              "Encrypts requests",
            ],
            answer:
              "Parses and extracts relevant structured data from the called agent's output",
            explanation:
              "Custom extractors transform raw outputs into consumable formats for the caller.",
          },
          {
            id: 1115,
            question:
              "Which tool config would you use to limit API rate usage?",
            options: [
              "rate_limit or throttle settings",
              "name_override",
              "output_schema",
              "description_override",
            ],
            answer: "rate_limit or throttle settings",
            explanation:
              "Rate limiting prevents exceeding third-party quotas and avoids service rejection.",
          },
          {
            id: 1116,
            question: "What does setting `tool_timeout` prevent?",
            options: [
              "The agent from starting",
              "Tool calls from running indefinitely and blocking the agent",
              "The model from generating tokens",
              "The tool from being registered",
            ],
            answer:
              "Tool calls from running indefinitely and blocking the agent",
            explanation:
              "Timeouts protect the agent from stuck external calls and improve responsiveness.",
          },
          {
            id: 1117,
            question:
              "Why include permission metadata on tools (e.g., roles allowed)?",
            options: [
              "To publicize secrets",
              "To control which agents or users may invoke sensitive capabilities",
              "To slow down execution",
              "To rename the tool",
            ],
            answer:
              "To control which agents or users may invoke sensitive capabilities",
            explanation:
              "Permissioning enforces least privilege and reduces misuse risks.",
          },
          {
            id: 1118,
            question:
              "Which is a reason to add `health_check` endpoints for tools?",
            options: [
              "To increase temperature",
              "To proactively detect unavailability and avoid calling unhealthy services",
              "To encrypt traffic",
              "To rename tools",
            ],
            answer:
              "To proactively detect unavailability and avoid calling unhealthy services",
            explanation:
              "Health checks improve reliability by routing around broken dependencies.",
          },
          {
            id: 1119,
            question:
              "What is the role of detailed tool descriptions when exposed to an LLM-based agent?",
            options: [
              "They confuse the agent",
              "They help the model understand purpose, inputs, and expected outputs for correct tool selection",
              "They change the model weights",
              "They decrease performance",
            ],
            answer:
              "They help the model understand purpose, inputs, and expected outputs for correct tool selection",
            explanation:
              "Clear descriptions guide the agent when choosing and calling tools.",
          },
          {
            id: 1120,
            question:
              "Which tool interface style is easiest for agents to call programmatically?",
            options: [
              "Freeform unstructured text only",
              "Structured APIs with defined inputs/outputs and schemas",
              "Binary blobs without schema",
              "Human-only UI",
            ],
            answer: "Structured APIs with defined inputs/outputs and schemas",
            explanation:
              "Structured interfaces reduce ambiguity and enable automated parsing and validation.",
          },
          {
            id: 1121,
            question: "What should a tool do when it receives invalid inputs?",
            options: [
              "Crash silently",
              "Return a clear error with validation details or raise a mapped exception",
              "Return random data",
              "Ignore the request",
            ],
            answer:
              "Return a clear error with validation details or raise a mapped exception",
            explanation:
              "Clear errors allow agents to handle issues (retry, correct inputs, fallback).",
          },
          {
            id: 1122,
            question: "Why is observability (logs/traces) important for tools?",
            options: [
              "It reduces security",
              "It provides insight into usage, errors, and performance for troubleshooting and audits",
              "It increases randomness",
              "It prevents calls",
            ],
            answer:
              "It provides insight into usage, errors, and performance for troubleshooting and audits",
            explanation:
              "Logging and tracing help diagnose problems and monitor behavior in production.",
          },
          {
            id: 1123,
            question:
              "What is the recommended behavior if a tool has side effects and a call fails mid-way?",
            options: [
              "Do nothing and assume success",
              "Provide rollback or compensating actions when possible",
              "Always retry infinitely",
              "Return success anyway",
            ],
            answer: "Provide rollback or compensating actions when possible",
            explanation:
              "Compensation or rollback helps maintain consistency when partial failures occur.",
          },
          {
            id: 1124,
            question:
              "Which tool attribute helps the agent choose between multiple similar tools?",
            options: [
              "description_override and explicit capability signatures",
              "Tool font size",
              "Model temperature",
              "Max tokens",
            ],
            answer: "description_override and explicit capability signatures",
            explanation:
              "Clear capability descriptions and signatures enable better tool selection by the agent.",
          },
          {
            id: 1125,
            question: "What does 'tool_discovery' refer to?",
            options: [
              "Finding available tools and their metadata at runtime",
              "Discovering model weights",
              "Changing UI theme",
              "Encrypting tools",
            ],
            answer: "Finding available tools and their metadata at runtime",
            explanation:
              "Discovery lets agents learn about tools they may call during execution.",
          },
          {
            id: 1126,
            question:
              "When exposing tools to external agents, what is a common security control?",
            options: [
              "Expose all internal APIs unrestricted",
              "Use API keys, OAuth, or mTLS and scope permissions per tool",
              "Hardcode credentials in requests",
              "Ignore authentication",
            ],
            answer:
              "Use API keys, OAuth, or mTLS and scope permissions per tool",
            explanation:
              "Strong auth and scoping prevents unauthorized usage of sensitive capabilities.",
          },
          {
            id: 1127,
            question: "What role does 'tool versioning' play?",
            options: [
              "It reduces auditability",
              "It allows safe upgrades and compatibility handling for callers",
              "It hides tool names",
              "It increases randomness",
            ],
            answer:
              "It allows safe upgrades and compatibility handling for callers",
            explanation:
              "Versioning helps manage changes without breaking dependent agents or integrations.",
          },
          {
            id: 1128,
            question:
              "Why should tool outputs include provenance or source metadata when relevant?",
            options: [
              "To increase token counts",
              "To show where data came from and support validation and trust",
              "To obfuscate results",
              "To prevent caching",
            ],
            answer:
              "To show where data came from and support validation and trust",
            explanation:
              "Provenance helps users and agents judge reliability and trace errors.",
          },
          {
            id: 1129,
            question:
              "Which approach improves performance when a tool is expensive to call?",
            options: [
              "Calling it repeatedly for the same input",
              "Caching results for identical/near-identical requests",
              "Always disabling caching",
              "Increasing temperature",
            ],
            answer: "Caching results for identical/near-identical requests",
            explanation:
              "Caching reduces repeated cost and latency for frequently requested data.",
          },
          {
            id: 1130,
            question:
              "How can tools communicate suggested confidence to agents?",
            options: [
              "By returning a confidence score or probability in the response",
              "By changing their name",
              "By increasing token usage",
              "By removing logs",
            ],
            answer:
              "By returning a confidence score or probability in the response",
            explanation:
              "Explicit confidence values let agents decide when to trust or verify outputs.",
          },
          {
            id: 1131,
            question: "What is 'tool sandboxing'?",
            options: [
              "Running tools in isolated environments to limit side effects and improve security",
              "Giving tools root access",
              "Disabling all tools",
              "Merging tools into one binary",
            ],
            answer:
              "Running tools in isolated environments to limit side effects and improve security",
            explanation:
              "Sandboxing contains failures and reduces attack surface for third-party code.",
          },
          {
            id: 1132,
            question:
              "What should you do if a tool returns ambiguous data the agent cannot parse?",
            options: [
              "Assume a random value",
              "Return an error, ask for clarification, or use a custom_output_extractor to parse",
              "Ignore it",
              "Increase temperature",
            ],
            answer:
              "Return an error, ask for clarification, or use a custom_output_extractor to parse",
            explanation:
              "Proper error handling and extraction keep the agent's flow reliable.",
          },
          {
            id: 1133,
            question:
              "Which is a recommended pattern for tools that query private user data?",
            options: [
              "Return all data indiscriminately",
              "Enforce access checks, minimal data return, and auditing",
              "Store credentials in logs",
              "Expose full DB schema",
            ],
            answer: "Enforce access checks, minimal data return, and auditing",
            explanation:
              "Least-privilege returns only necessary data and records access for compliance.",
          },
          {
            id: 1134,
            question:
              "Why document tool contracts (inputs, outputs, errors) clearly?",
            options: [
              "To confuse integrators",
              "To enable reliable integration, testing, and correct agent usage",
              "To prevent tests",
              "To increase token usage",
            ],
            answer:
              "To enable reliable integration, testing, and correct agent usage",
            explanation:
              "Clear contracts reduce integration bugs and ambiguous behavior.",
          },
          {
            id: 1135,
            question: "What is the meaning of 'tool_signature'?",
            options: [
              "A cryptographic signature only",
              "A declaration of input types, parameters, and expected outputs for a tool",
              "A UI asset",
              "A random string",
            ],
            answer:
              "A declaration of input types, parameters, and expected outputs for a tool",
            explanation:
              "Signatures describe how to call tools programmatically and what to expect.",
          },
          {
            id: 1136,
            question:
              "How can tools avoid leaking sensitive prompts or data in logs?",
            options: [
              "Log everything verbatim",
              "Mask or redact sensitive fields and limit log retention and access",
              "Disable all logs forever",
              "Print secrets to stdout",
            ],
            answer:
              "Mask or redact sensitive fields and limit log retention and access",
            explanation:
              "Redaction and retention policies protect secrets while preserving useful logs.",
          },
          {
            id: 1137,
            question: "What does 'tool chaining' mean?",
            options: [
              "Calling multiple tools in sequence where outputs feed into the next",
              "Merging tools into one endpoint forever",
              "Naming tools alphabetically",
              "Running tools only in parallel",
            ],
            answer:
              "Calling multiple tools in sequence where outputs feed into the next",
            explanation:
              "Chaining composes capabilities for multi-step workflows across tools.",
          },
          {
            id: 1138,
            question:
              "Which practice helps ensure tool upgrades don't break callers?",
            options: [
              "Break interfaces frequently",
              "Follow semantic versioning and maintain backward-compatible change paths",
              "Remove all versioning",
              "Change signatures silently",
            ],
            answer:
              "Follow semantic versioning and maintain backward-compatible change paths",
            explanation:
              "Semantic versioning communicates compatibility and avoids unexpected breakage.",
          },
          {
            id: 1139,
            question:
              "When should an agent prefer local tools over remote ones?",
            options: [
              "When latency, cost, or data residency makes remote calls undesirable and local heuristics suffice",
              "Never prefer local tools",
              "Always call remote tools",
              "When debugging is disabled",
            ],
            answer:
              "When latency, cost, or data residency makes remote calls undesirable and local heuristics suffice",
            explanation:
              "Local fallbacks can improve speed, cost, and compliance for simple tasks.",
          },
          {
            id: 1140,
            question:
              "What is a common way to expose tools to an LLM so it can reason about calling them?",
            options: [
              "Provide structured metadata (name, description, parameters) in the prompt or tool registry",
              "Hide tool info entirely",
              "Send raw binaries",
              "Increase model temperature",
            ],
            answer:
              "Provide structured metadata (name, description, parameters) in the prompt or tool registry",
            explanation:
              "Structured metadata helps the model select the right tool and format calls correctly.",
          },
          {
            id: 1141,
            question:
              "Why might a tool return a 'confidence' field alongside its result?",
            options: [
              "To confuse the agent",
              "To let the agent assess reliability and decide to verify or escalate",
              "To increase token usage",
              "To disable retries",
            ],
            answer:
              "To let the agent assess reliability and decide to verify or escalate",
            explanation:
              "Confidence scores inform decision-making under uncertainty.",
          },
          {
            id: 1142,
            question:
              "Which testing layer specifically validates tool integration with external systems?",
            options: [
              "Unit tests only",
              "Integration tests",
              "UI tests only",
              "No tests",
            ],
            answer: "Integration tests",
            explanation:
              "Integration tests verify correct interactions with external APIs and services.",
          },
          {
            id: 1143,
            question: "What does making a tool 'parallel_safe' imply?",
            options: [
              "It cannot be called more than once",
              "It can be safely executed concurrently without conflicts",
              "It will always time out",
              "It disables logging",
            ],
            answer: "It can be safely executed concurrently without conflicts",
            explanation:
              "Parallel-safety indicates the tool's internal operations won't clash under concurrency.",
          },
          {
            id: 1144,
            question:
              "Which strategy helps maintain privacy when tools process user data?",
            options: [
              "Return all user data in logs",
              "Minimize data sent, anonymize/pseudonymize, encrypt in transit and at rest",
              "Send data to third parties without consent",
              "Store plaintext forever",
            ],
            answer:
              "Minimize data sent, anonymize/pseudonymize, encrypt in transit and at rest",
            explanation:
              "Data minimization and encryption reduce exposure and compliance risk.",
          },
          {
            id: 1145,
            question:
              "What should a tool registry include to help agents and developers?",
            options: [
              "Only binary blobs",
              "Tool name, version, description, input/output schema, permissions, and endpoints",
              "Only UI assets",
              "Only logs",
            ],
            answer:
              "Tool name, version, description, input/output schema, permissions, and endpoints",
            explanation:
              "Comprehensive registries make discovery, selection, and safe use straightforward.",
          },
          {
            id: 1146,
            question:
              "How can tools support graceful degradation when a service is partially available?",
            options: [
              "Return partial results with status and allow agent to proceed or fallback",
              "Always fail hard",
              "Return random data",
              "Silently drop responses",
            ],
            answer:
              "Return partial results with status and allow agent to proceed or fallback",
            explanation:
              "Partial responses with status let agents make informed decisions about next steps.",
          },
          {
            id: 1147,
            question:
              "Which is a reason to limit the set of tools an agent is allowed to see?",
            options: [
              "To increase agent confusion",
              "To reduce risk by enforcing least privilege and reduce attack surface",
              "To increase token usage",
              "To make registration harder",
            ],
            answer:
              "To reduce risk by enforcing least privilege and reduce attack surface",
            explanation:
              "Limiting visibility focuses capabilities and reduces potential misuse.",
          },
          {
            id: 1148,
            question: "What does 'tool contract testing' validate?",
            options: [
              "Only UI layout",
              "That inputs, outputs, and error behaviors match the documented contract",
              "Model hyperparameters",
              "Tool name length",
            ],
            answer:
              "That inputs, outputs, and error behaviors match the documented contract",
            explanation:
              "Contract tests ensure integrations remain compatible and predictable across releases.",
          },
          {
            id: 1149,
            question: "Why might a tool expose a 'dry-run' mode?",
            options: [
              "To perform potentially dangerous operations for real",
              "To simulate actions without side effects so agents can validate plans",
              "To disable logging",
              "To increase token usage",
            ],
            answer:
              "To simulate actions without side effects so agents can validate plans",
            explanation:
              "Dry-run allows safe validation of intended operations before committing changes.",
          },
          {
            id: 1150,
            question:
              "Which metric is most useful to monitor for tool performance impact on agent latency?",
            options: [
              "Tool average latency and 95th-percentile latency",
              "Tool name length",
              "Model temperature",
              "Number of tool descriptions",
            ],
            answer: "Tool average latency and 95th-percentile latency",
            explanation:
              "Monitoring latency (avg and tail) reveals performance issues that affect user experience.",
          },
        ],
      },
      {
        id: 104,
        name: "Context",
        description:
          "Context, memory, and how past interactions or external data are incorporated into agent decisions",
        mcqs: [
          {
            id: 1151,
            question: "What is 'context' in conversational agents?",
            options: [
              "A UI theme",
              "Information from prior turns, environment, or external data used to inform responses",
              "Model hyperparameters",
              "Only the current user ID",
            ],
            answer:
              "Information from prior turns, environment, or external data used to inform responses",
            explanation:
              "Context includes conversation history, memory, and external data that shape agent responses.",
          },
          {
            id: 1152,
            question: "Why is context window size important?",
            options: [
              "It sets the agent's color scheme",
              "It limits how much prior text the model can attend to, affecting recall and relevance",
              "It sets tool permissions",
              "It changes model version",
            ],
            answer:
              "It limits how much prior text the model can attend to, affecting recall and relevance",
            explanation:
              "Context window caps the tokens the model can consider from history, so larger windows allow more history.",
          },
          {
            id: 1153,
            question: "What does 'context truncation' typically do?",
            options: [
              "Encrypts the context",
              "Removes or summarizes older parts of context when the window limit is reached",
              "Doubles the context length",
              "Changes tool names",
            ],
            answer:
              "Removes or summarizes older parts of context when the window limit is reached",
            explanation:
              "Truncation ensures the active context fits within token limits by dropping or compressing earlier content.",
          },
          {
            id: 1154,
            question:
              "Which technique helps include large external documents in context efficiently?",
            options: [
              "Sending whole documents unchanged",
              "Retrieval-augmented generation (RAG) with embeddings and a vector store",
              "Increasing temperature only",
              "Setting is_enabled=false",
            ],
            answer:
              "Retrieval-augmented generation (RAG) with embeddings and a vector store",
            explanation:
              "RAG retrieves relevant passages from a vector DB to include concise, pertinent context.",
          },
          {
            id: 1155,
            question: "What is 'long-term memory' for an agent?",
            options: [
              "Temporary buffer cleared every turn",
              "Persistent knowledge stored across sessions (user prefs, facts)",
              "Only model weights",
              "UI cache",
            ],
            answer:
              "Persistent knowledge stored across sessions (user prefs, facts)",
            explanation:
              "Long-term memory persists beyond a single conversation to inform future interactions.",
          },
          {
            id: 1156,
            question: "What is 'short-term memory' in chat agents?",
            options: [
              "Persistent DB records",
              "Context limited to the current session or recent turns",
              "Tool implementation details",
              "Model architecture",
            ],
            answer: "Context limited to the current session or recent turns",
            explanation:
              "Short-term memory keeps recent conversation or state to maintain coherence during a session.",
          },
          {
            id: 1157,
            question: "Which is a common method for compressing context?",
            options: [
              "Using context compression (summarization) or embeddings-based condensation",
              "Increasing token limits indefinitely",
              "Removing all pronouns",
              "Encrypting context",
            ],
            answer:
              "Using context compression (summarization) or embeddings-based condensation",
            explanation:
              "Summaries or dense vector representations reduce size while preserving meaning.",
          },
          {
            id: 1158,
            question: "What role do embeddings play in context management?",
            options: [
              "They format JSON",
              "They represent text semantically to enable similarity search in vector stores",
              "They change model temperature",
              "They compress images only",
            ],
            answer:
              "They represent text semantically to enable similarity search in vector stores",
            explanation:
              "Embeddings encode semantics so relevant context passages can be retrieved efficiently.",
          },
          {
            id: 1159,
            question: "What is the purpose of 'context stitching'?",
            options: [
              "To delete context permanently",
              "To combine pieces of retrieved context, summaries, and history into a coherent prompt",
              "To increase model size",
              "To obfuscate tool names",
            ],
            answer:
              "To combine pieces of retrieved context, summaries, and history into a coherent prompt",
            explanation:
              "Stitching organizes multiple context sources into a single prompt that the model can use.",
          },
          {
            id: 1160,
            question:
              "Which is a reason to sanitize context before sending it to a model?",
            options: [
              "To remove PII, sensitive data and reduce leakage risk",
              "To break the model",
              "To increase token usage",
              "To change the model",
            ],
            answer: "To remove PII, sensitive data and reduce leakage risk",
            explanation:
              "Sanitization helps protect privacy and comply with data policies by removing sensitive fields.",
          },
          {
            id: 1161,
            question: "What is 'context relevance scoring'?",
            options: [
              "A way to colorize text",
              "Scoring retrieved documents by how relevant they are to the query",
              "Increasing temperature randomly",
              "Changing tool permissions",
            ],
            answer:
              "Scoring retrieved documents by how relevant they are to the query",
            explanation:
              "Relevance scores help pick the most useful passages for inclusion in prompts.",
          },
          {
            id: 1162,
            question:
              "Which approach reduces hallucinations by grounding responses?",
            options: [
              "Avoiding any external data",
              "Providing verified context (sources, facts) via retrieval to the model",
              "Setting temperature to 2",
              "Removing context completely",
            ],
            answer:
              "Providing verified context (sources, facts) via retrieval to the model",
            explanation:
              "Grounding with reliable retrieved data reduces unsupported or fabricated claims.",
          },
          {
            id: 1163,
            question:
              "What is the effect of including irrelevant context in the prompt?",
            options: [
              "Improves accuracy",
              "May confuse the model and reduce response quality",
              "Increases token budget efficiency",
              "Guarantees deterministic outputs",
            ],
            answer: "May confuse the model and reduce response quality",
            explanation:
              "Irrelevant context adds noise, making it harder for the model to focus on the core query.",
          },
          {
            id: 1164,
            question:
              "How can you maintain user-specific context across multiple devices?",
            options: [
              "Store persistent memory in a secure backend associated with user IDs",
              "Keep everything in browser localStorage only",
              "Rely on ephemeral session tokens",
              "Hardcode context in the agent binary",
            ],
            answer:
              "Store persistent memory in a secure backend associated with user IDs",
            explanation:
              "A secure backend allows consistent retrieval of user-specific memory across devices.",
          },
          {
            id: 1165,
            question: "What does 'context window sliding' refer to?",
            options: [
              "A UI animation",
              "Moving the active window over conversation history, keeping recent tokens while dropping older ones",
              "Encrypting context progressively",
              "Renaming tools dynamically",
            ],
            answer:
              "Moving the active window over conversation history, keeping recent tokens while dropping older ones",
            explanation:
              "Sliding window retains the most recent context within the token limit as the conversation grows.",
          },
          {
            id: 1166,
            question:
              "Which is a good strategy when the context exceeds the model's token limit?",
            options: [
              "Drop everything randomly",
              "Summarize older context, retrieve only relevant docs, or use RAG to include essential info",
              "Increase model temperature only",
              "Call all tools in parallel",
            ],
            answer:
              "Summarize older context, retrieve only relevant docs, or use RAG to include essential info",
            explanation:
              "Compression and selective retrieval keep the prompt focused and within token limits.",
          },
          {
            id: 1167,
            question: "Why track provenance for retrieved context?",
            options: [
              "To obfuscate data sources",
              "To show where context came from and allow verification of claims",
              "To increase token usage",
              "To disable tracing",
            ],
            answer:
              "To show where context came from and allow verification of claims",
            explanation:
              "Provenance enables trust and source-checking of information used by the agent.",
          },
          {
            id: 1168,
            question: "What is 'context anchoring'?",
            options: [
              "Locking the UI",
              "Providing explicit facts or instructions early in the prompt to guide the model",
              "Encrypting the model",
              "Naming the tools",
            ],
            answer:
              "Providing explicit facts or instructions early in the prompt to guide the model",
            explanation:
              "Anchoring helps set the model's expectations and reduces drift from the intended task.",
          },
          {
            id: 1169,
            question:
              "Which of these is a privacy risk when persisting context?",
            options: [
              "Reduced response time",
              "Storing sensitive personal information without consent or encryption",
              "Better personalization",
              "Improved relevance",
            ],
            answer:
              "Storing sensitive personal information without consent or encryption",
            explanation:
              "Persisting PII without controls creates compliance and privacy hazards.",
          },
          {
            id: 1170,
            question: "What is 'episodic memory' for agents?",
            options: [
              "Memory of random system metrics",
              "Memory of specific past interactions or events retained for context",
              "Only model weights",
              "Tool endpoints list",
            ],
            answer:
              "Memory of specific past interactions or events retained for context",
            explanation:
              "Episodic memory stores discrete past events useful for future decisions.",
          },
          {
            id: 1171,
            question:
              "How does 'semantic search' differ from keyword search in context retrieval?",
            options: [
              "It uses exact string matching only",
              "It finds conceptually similar texts via embeddings rather than exact keywords",
              "It sorts by file size",
              "It increases token usage",
            ],
            answer:
              "It finds conceptually similar texts via embeddings rather than exact keywords",
            explanation:
              "Semantic search uses vector similarity to retrieve semantically relevant passages.",
          },
          {
            id: 1172,
            question:
              "Why is ordering context items (most relevant first) useful in prompts?",
            options: [
              "It changes model architecture",
              "Models attend to earlier tokens more, so prioritizing relevance improves effectiveness",
              "It encrypts context",
              "It reduces token usage automatically",
            ],
            answer:
              "Models attend to earlier tokens more, so prioritizing relevance improves effectiveness",
            explanation:
              "Ordering ensures the most important info is within the model's attention and token window.",
          },
          {
            id: 1173,
            question: "What is a 'context cache' used for?",
            options: [
              "To store UI themes",
              "To reuse recent retrieval results and reduce repeat retrieval latency/cost",
              "To encrypt tokens",
              "To increase model temperature",
            ],
            answer:
              "To reuse recent retrieval results and reduce repeat retrieval latency/cost",
            explanation:
              "Caching avoids redundant retrievals for similar queries and improves performance.",
          },
          {
            id: 1174,
            question:
              "Which approach helps when multiple agents share context?",
            options: [
              "No coordination at all",
              "Use a shared context store or well-defined handoff with context transfer rules",
              "Overwrite each other's memory randomly",
              "Disable tracing",
            ],
            answer:
              "Use a shared context store or well-defined handoff with context transfer rules",
            explanation:
              "Shared stores and clear contracts prevent conflicts and preserve continuity between agents.",
          },
          {
            id: 1175,
            question: "What is 'context-based routing'?",
            options: [
              "Routing network packets only",
              "Choosing which agent or tool to call based on context features or intents",
              "Changing token limits based on time",
              "Renaming tools",
            ],
            answer:
              "Choosing which agent or tool to call based on context features or intents",
            explanation:
              "Routing directs requests to the most appropriate component based on available context.",
          },
          {
            id: 1176,
            question:
              "Which is a benefit of summarizing long conversations into short notes for memory?",
            options: [
              "Loses all important details always",
              "Reduces token footprint while preserving important facts for future retrieval",
              "Increases cost dramatically",
              "Prevents retrieval",
            ],
            answer:
              "Reduces token footprint while preserving important facts for future retrieval",
            explanation:
              "Summaries compact information so it fits within token limits but remains useful.",
          },
          {
            id: 1177,
            question: "What is 'context poisoning'?",
            options: [
              "A harmless optimization",
              "Malicious or erroneous data inserted into context that leads the agent to bad behavior",
              "A model training technique",
              "A UI effect",
            ],
            answer:
              "Malicious or erroneous data inserted into context that leads the agent to bad behavior",
            explanation:
              "Poisoning can cause hallucinations or incorrect actions by contaminating retrieved context.",
          },
          {
            id: 1178,
            question: "Which practice helps mitigate context poisoning risks?",
            options: [
              "Automatically trusting all sources",
              "Validate sources, filter untrusted inputs, and use provenance checks",
              "Increase temperature",
              "Remove all context",
            ],
            answer:
              "Validate sources, filter untrusted inputs, and use provenance checks",
            explanation:
              "Source validation and provenance reduce chances of poisoned or unreliable context.",
          },
          {
            id: 1179,
            question: "What is 'context enrichment'?",
            options: [
              "Removing metadata deliberately",
              "Adding relevant external facts, user profile data, or computed features to improve responses",
              "Encrypting everything",
              "Lowering model precision",
            ],
            answer:
              "Adding relevant external facts, user profile data, or computed features to improve responses",
            explanation:
              "Enrichment supplements the prompt with extra useful information to inform decisions.",
          },
          {
            id: 1180,
            question:
              "How can you ensure sensitive context is not accidentally sent to third-party tools?",
            options: [
              "Send full context to all tools",
              "Use context filters, masking, and strict tool permissioning",
              "Turn off all logging",
              "Disable model",
            ],
            answer:
              "Use context filters, masking, and strict tool permissioning",
            explanation:
              "Filtering and permissions prevent sensitive fields from leaving controlled environments.",
          },
          {
            id: 1181,
            question: "What is a practical way to measure context usefulness?",
            options: [
              "Counting characters only",
              "A/B testing with and without certain context and measuring task success",
              "Changing font sizes",
              "Increasing temperature",
            ],
            answer:
              "A/B testing with and without certain context and measuring task success",
            explanation:
              "Empirical testing reveals whether specific context items improve outcomes.",
          },
          {
            id: 1182,
            question:
              "When using streaming, how should incremental context be handled?",
            options: [
              "Ignore streaming inputs entirely",
              "Append or incrementally include partial context carefully, ensuring consistency and atomicity",
              "Clear all context after each chunk",
              "Always restart the agent",
            ],
            answer:
              "Append or incrementally include partial context carefully, ensuring consistency and atomicity",
            explanation:
              "Streaming requires careful accumulation and consistency to avoid conflicting partial state.",
          },
          {
            id: 1183,
            question: "Why is versioning context schemas important?",
            options: [
              "To make upgrades impossible",
              "To handle changes safely when reading/writing structured memory and maintain backwards compatibility",
              "To hide data",
              "To increase token usage",
            ],
            answer:
              "To handle changes safely when reading/writing structured memory and maintain backwards compatibility",
            explanation:
              "Schema versioning prevents breakage when memory formats evolve.",
          },
          {
            id: 1184,
            question: "What is 'context freshness' and why does it matter?",
            options: [
              "It refers to UI freshness only",
              "How up-to-date the context data is; stale context can lead to incorrect decisions",
              "It determines model temperature",
              "It affects tool names",
            ],
            answer:
              "How up-to-date the context data is; stale context can lead to incorrect decisions",
            explanation:
              "Fresh context ensures decisions are based on current, relevant information.",
          },
          {
            id: 1185,
            question:
              "Which is a good practice for storing large archives of context for rare retrieval?",
            options: [
              "Store them in the prompt directly",
              "Archive in a vector store or document DB and retrieve on demand",
              "Keep them only in memory forever",
              "Send them to all tools every time",
            ],
            answer:
              "Archive in a vector store or document DB and retrieve on demand",
            explanation:
              "On-demand retrieval from efficient stores balances storage and access costs.",
          },
          {
            id: 1186,
            question: "How can you keep context behavior explainable to users?",
            options: [
              "Never show context provenance",
              "Provide summaries and provenance for what was used and why",
              "Return raw embeddings only",
              "Hide all logs",
            ],
            answer:
              "Provide summaries and provenance for what was used and why",
            explanation:
              "Transparency about used context and sources builds trust and aids debugging.",
          },
          {
            id: 1187,
            question: "What is 'context isolation' in multi-tenant systems?",
            options: [
              "Mixing user data across tenants",
              "Keeping each tenant's context separate and access-controlled",
              "Sharing all memory by default",
              "Using same API keys for everyone",
            ],
            answer:
              "Keeping each tenant's context separate and access-controlled",
            explanation:
              "Isolation prevents data leakage between tenants and preserves privacy and security.",
          },
          {
            id: 1188,
            question:
              "Which technique reduces prompt size while preserving retrieval accuracy?",
            options: [
              "Random deletion of sentences",
              "Embedding-based retrieval with smart chunking and overlap",
              "Increasing temperature",
              "Turning off tracing",
            ],
            answer: "Embedding-based retrieval with smart chunking and overlap",
            explanation:
              "Smart chunking plus embeddings finds relevant passages without sending whole docs.",
          },
          {
            id: 1189,
            question:
              "When handing off between agents, what context should be transferred?",
            options: [
              "All raw logs and secrets",
              "Relevant state, task history, and instructions while excluding sensitive or redundant data",
              "Only the agent code",
              "Nothing at all",
            ],
            answer:
              "Relevant state, task history, and instructions while excluding sensitive or redundant data",
            explanation:
              "Hand-off passes needed info while avoiding leaks and keeping payload small.",
          },
          {
            id: 1190,
            question: "What does 'context debugging' typically involve?",
            options: [
              "Hiding all context",
              "Inspecting stored memories, retrieval results, and how context influenced decisions",
              "Only changing model weights",
              "Turning off tools",
            ],
            answer:
              "Inspecting stored memories, retrieval results, and how context influenced decisions",
            explanation:
              "Debugging traces context usage to identify errors or unexpected influences.",
          },
          {
            id: 1191,
            question:
              "Which of the following is a trade-off when persisting more context for personalization?",
            options: [
              "Improved personalization vs higher storage, privacy, and compliance costs",
              "Always better with no downsides",
              "Less relevance always",
              "Fewer tokens used",
            ],
            answer:
              "Improved personalization vs higher storage, privacy, and compliance costs",
            explanation:
              "More persistent data boosts personalization but increases responsibility and costs.",
          },
          {
            id: 1192,
            question:
              "How do 'contextual prompts' differ from generic prompts?",
            options: [
              "They are shorter always",
              "They include specific user or task context to tailor responses to the situation",
              "They change the model type",
              "They disable tools",
            ],
            answer:
              "They include specific user or task context to tailor responses to the situation",
            explanation:
              "Contextual prompts provide relevant details so the model can produce more accurate outputs.",
          },
          {
            id: 1193,
            question: "What is 'context debugging trace' used for after a run?",
            options: [
              "Deleting everything",
              "Reviewing which context items were retrieved, used, and how they influenced outputs",
              "Encrypting outputs",
              "Sending tokens to third parties",
            ],
            answer:
              "Reviewing which context items were retrieved, used, and how they influenced outputs",
            explanation:
              "Traces document context usage to help analyze and improve agent behavior.",
          },
          {
            id: 1194,
            question:
              "Why chunk documents when creating context for retrieval?",
            options: [
              "To make indexing impossible",
              "To make retrieval granular and fit chunks within model token limits",
              "To increase cost arbitrarily",
              "To obfuscate content",
            ],
            answer:
              "To make retrieval granular and fit chunks within model token limits",
            explanation:
              "Chunking balances retrieval precision and prompt size for better relevance and efficiency.",
          },
          {
            id: 1195,
            question:
              "Which is an advantage of storing context as structured key-value memory?",
            options: [
              "Harder retrieval",
              "Fast lookup for specific facts and easier updates",
              "Incompatible with retrieval",
              "Always increases hallucinations",
            ],
            answer: "Fast lookup for specific facts and easier updates",
            explanation:
              "Structured memory enables efficient access and precise updates of known facts.",
          },
          {
            id: 1196,
            question: "What is the role of 'context expiration' policies?",
            options: [
              "Never delete anything",
              "Automatically remove or archive outdated context to control size and relevance",
              "Increase model temperature",
              "Disable tools",
            ],
            answer:
              "Automatically remove or archive outdated context to control size and relevance",
            explanation:
              "Expiration keeps memory relevant and reduces storage costs for stale data.",
          },
          {
            id: 1197,
            question:
              "Which is a way to ensure reproducible behavior when context changes?",
            options: [
              "Never version context",
              "Snapshot context used for a run and store metadata to reproduce or audit",
              "Delete all traces",
              "Randomize retrievals each time",
            ],
            answer:
              "Snapshot context used for a run and store metadata to reproduce or audit",
            explanation:
              "Snapshots allow re-running with the exact context to reproduce outcomes.",
          },
          {
            id: 1198,
            question:
              "Which best practice helps keep context size manageable while supporting useful memory?",
            options: [
              "Store every token ever seen",
              "Summarize, prioritize, and index important facts, use embeddings for retrieval",
              "Disable retrieval entirely",
              "Increase model temperature",
            ],
            answer:
              "Summarize, prioritize, and index important facts, use embeddings for retrieval",
            explanation:
              "Prioritization and embedding-based retrieval optimize memory utility vs cost.",
          },
          {
            id: 1199,
            question: "What is 'context-aware testing'?",
            options: [
              "Testing that ignores context completely",
              "Test scenarios that validate agent behavior under differing context states and edge cases",
              "Only UI snapshot tests",
              "Only unit tests without context",
            ],
            answer:
              "Test scenarios that validate agent behavior under differing context states and edge cases",
            explanation:
              "Context-aware tests ensure agents behave correctly when memory or retrieved data vary.",
          },
          {
            id: 1200,
            question:
              "Which of the following describes an effective context hygiene practice?",
            options: [
              "Persist everything forever with no review",
              "Regularly review, purge sensitive or stale items, and enforce schemas and access controls",
              "Expose context to all tools by default",
              "Never backup context",
            ],
            answer:
              "Regularly review, purge sensitive or stale items, and enforce schemas and access controls",
            explanation:
              "Hygiene reduces risk, keeps memory relevant, and ensures data governance and compliance.",
          },
        ],
      },
      {
        id: 105,
        name: "Model Settings",
        description:
          "Model sampling and configuration settings (temperature, top_p, top_k, penalties, seeds, etc.)",
        mcqs: [
          {
            id: 1201,
            question:
              "What does the 'temperature' parameter control in a language model?",
            options: [
              "How many tokens are returned",
              "The randomness of sampling from the model's probability distribution",
              "The model's memory size",
              "The model's network latency",
            ],
            answer:
              "The randomness of sampling from the model's probability distribution",
            explanation:
              "Temperature scales logits: higher values increase randomness, lower values make outputs more deterministic.",
          },
          {
            id: 1202,
            question:
              "Which setting limits the number of candidate tokens considered at each sampling step?",
            options: ["temperature", "top_k", "presence_penalty", "max_turns"],
            answer: "top_k",
            explanation:
              "top_k restricts sampling to the top K most probable tokens at each step, reducing diversity when small.",
          },
          {
            id: 1203,
            question: "What is 'top_p' (nucleus sampling)?",
            options: [
              "Selecting only the single most probable token",
              "Sampling from the smallest set of tokens whose cumulative probability ≥ p",
              "Limiting output length to p tokens",
              "A timeout setting",
            ],
            answer:
              "Sampling from the smallest set of tokens whose cumulative probability ≥ p",
            explanation:
              "Top-p adaptively chooses a variable-size set of top tokens covering probability mass p for sampling.",
          },
          {
            id: 1204,
            question:
              "Which parameter discourages the model from repeating tokens already present in the output?",
            options: ["frequency_penalty", "max_tokens", "top_k", "is_enabled"],
            answer: "frequency_penalty",
            explanation:
              "frequency_penalty reduces probability of tokens proportionally to how often they have already appeared.",
          },
          {
            id: 1205,
            question: "What does 'presence_penalty' encourage the model to do?",
            options: [
              "Avoid mentioning topics that have already appeared",
              "Generate maximum tokens",
              "Increase model temperature",
              "Disable tools",
            ],
            answer: "Avoid mentioning topics that have already appeared",
            explanation:
              "presence_penalty discourages introducing tokens that have already been seen, promoting novel content.",
          },
          {
            id: 1206,
            question: "Why set a 'max_tokens' limit for model responses?",
            options: [
              "To change model weights",
              "To constrain response length for cost, latency, or downstream parsing reasons",
              "To enable more tools",
              "To increase randomness",
            ],
            answer:
              "To constrain response length for cost, latency, or downstream parsing reasons",
            explanation:
              "max_tokens limits generated tokens to control compute, response size, and behavior.",
          },
          {
            id: 1207,
            question:
              "If you want deterministic model outputs for tests, which combination is most appropriate?",
            options: [
              "High temperature and random seed",
              "temperature=0 (or very low) and fixed random seed",
              "top_p=1.0 and no seed",
              "No configuration changes",
            ],
            answer: "temperature=0 (or very low) and fixed random seed",
            explanation:
              "Lowering randomness and fixing seeds yields reproducible outputs useful for testing.",
          },
          {
            id: 1208,
            question: "How does increasing 'top_k' generally affect diversity?",
            options: [
              "Decreases diversity",
              "Increases diversity by allowing more candidate tokens",
              "No effect",
              "Always produces deterministic output",
            ],
            answer: "Increases diversity by allowing more candidate tokens",
            explanation:
              "A larger top_k considers more tokens for sampling, typically increasing output variation.",
          },
          {
            id: 1209,
            question:
              "What is the expected effect of raising temperature from 0.2 to 1.0?",
            options: [
              "Outputs become more conservative",
              "Outputs become more diverse and less predictable",
              "Model runs faster",
              "Tool permissions change",
            ],
            answer: "Outputs become more diverse and less predictable",
            explanation:
              "Higher temperature flattens the probability distribution, making rarer tokens more likely.",
          },
          {
            id: 1210,
            question:
              "Which setting would you tune to penalize long verbose outputs?",
            options: [
              "presence_penalty",
              "length_penalty or adjusting max_tokens and stop sequences",
              "top_k",
              "name_override",
            ],
            answer: "length_penalty or adjusting max_tokens and stop sequences",
            explanation:
              "Length penalties and stop sequences control verbosity; max_tokens caps length directly.",
          },
          {
            id: 1211,
            question: "What does 'beam search' primarily aim to improve?",
            options: [
              "Randomness in outputs",
              "Finding high-probability sequences by exploring multiple beams deterministically",
              "Reducing model size",
              "Tool discovery",
            ],
            answer:
              "Finding high-probability sequences by exploring multiple beams deterministically",
            explanation:
              "Beam search keeps top scoring partial sequences (beams) to construct higher-probability outputs.",
          },
          {
            id: 1212,
            question:
              "Which combo is most likely to reduce hallucination risk?",
            options: [
              "High temperature + no grounding",
              "Lower temperature + retrieval-grounded context + tool verification",
              "High top_k only",
              "No context at all",
            ],
            answer:
              "Lower temperature + retrieval-grounded context + tool verification",
            explanation:
              "Lower randomness and grounding outputs in verified sources reduce fabricated content.",
          },
          {
            id: 1213,
            question: "What does 'sampling' refer to in model generation?",
            options: [
              "Selecting tokens deterministically only",
              "Drawing tokens probabilistically from the model's output distribution",
              "Saving logs",
              "Changing tool names",
            ],
            answer:
              "Drawing tokens probabilistically from the model's output distribution",
            explanation:
              "Sampling chooses tokens according to probabilities, influenced by temperature and top_k/top_p.",
          },
          {
            id: 1214,
            question:
              "Which parameter would you adjust to make the model avoid certain words more strongly?",
            options: [
              "frequency_penalty or logit_bias to reduce token probabilities",
              "max_tokens",
              "top_k only",
              "is_enabled",
            ],
            answer:
              "frequency_penalty or logit_bias to reduce token probabilities",
            explanation:
              "frequency_penalty discourages repetition; logit_bias can explicitly increase or decrease token logits.",
          },
          {
            id: 1215,
            question: "What is 'logit_bias' used for?",
            options: [
              "Adjusting probabilities of specific tokens by boosting or suppressing logits",
              "Increasing context window size",
              "Setting model temperature",
              "Renaming tools",
            ],
            answer:
              "Adjusting probabilities of specific tokens by boosting or suppressing logits",
            explanation:
              "logit_bias modifies token logits to bias the model toward or away from particular tokens.",
          },
          {
            id: 1216,
            question:
              "Which model setting affects both diversity and the risk of incoherent output when set too high?",
            options: [
              "max_turns",
              "temperature",
              "is_enabled",
              "description_override",
            ],
            answer: "temperature",
            explanation:
              "High temperature increases diversity but can also produce incoherent or off-topic outputs.",
          },
          {
            id: 1217,
            question:
              "What is the practical difference between top_k=1 and temperature=0?",
            options: [
              "They are identical in all cases",
              "top_k=1 restricts to the single highest-probability token; temperature=0 makes sampling deterministic favoring highest-probability token but may behave slightly differently depending on implementation",
              "Both increase randomness",
              "Both control token length",
            ],
            answer:
              "top_k=1 restricts to the single highest-probability token; temperature=0 makes sampling deterministic favoring highest-probability token but may behave slightly differently depending on implementation",
            explanation:
              "Both reduce randomness but are implemented differently; top_k truncates candidates, temperature scales logits.",
          },
          {
            id: 1218,
            question:
              "Why might you choose a higher 'top_p' (e.g., 0.95) vs top_k?",
            options: [
              "top_p is deterministic always",
              "top_p adapts candidate set size to probability mass and can be more flexible than fixed top_k",
              "top_p reduces context window",
              "top_p increases latency",
            ],
            answer:
              "top_p adapts candidate set size to probability mass and can be more flexible than fixed top_k",
            explanation:
              "Top-p (nucleus) considers a variable number of tokens based on cumulative probability, adapting to the distribution.",
          },
          {
            id: 1219,
            question:
              "Which setting should be used to avoid token overlap between model prompt and generated text?",
            options: [
              "presence_penalty",
              "stop sequences to explicitly terminate generation",
              "top_k",
              "is_enabled",
            ],
            answer: "stop sequences to explicitly terminate generation",
            explanation:
              "Stop sequences instruct the model to cease generation when encountering defined token patterns.",
          },
          {
            id: 1220,
            question: "What does 'max_context_tokens' control?",
            options: [
              "The number of tokens allowed in the model's input context window",
              "The maximum tokens returned",
              "The number of tools available",
              "The number of retries",
            ],
            answer:
              "The number of tokens allowed in the model's input context window",
            explanation:
              "max_context_tokens limits the amount of input the model can attend to during generation.",
          },
          {
            id: 1221,
            question:
              "Which combination is likely to yield the most creative—but less predictable—outputs?",
            options: [
              "temperature high, top_p high, top_k large",
              "temperature=0, top_k=1",
              "low max_tokens only",
              "is_enabled=false",
            ],
            answer: "temperature high, top_p high, top_k large",
            explanation:
              "High randomness and broad candidate sets increase novelty at the expense of predictability.",
          },
          {
            id: 1222,
            question:
              "What does the 'seed' parameter affect in random sampling?",
            options: [
              "The model architecture",
              "The reproducibility of random choices when sampling tokens",
              "Tool permissions",
              "The prompt length",
            ],
            answer:
              "The reproducibility of random choices when sampling tokens",
            explanation:
              "A fixed seed ensures the same pseudo-random sequence for reproducible sampling when supported.",
          },
          {
            id: 1223,
            question:
              "Which model setting is most relevant to reduce bias toward earlier tokens in long prompts?",
            options: [
              "context_window size and careful prompt ordering",
              "frequency_penalty only",
              "is_enabled flag",
              "description_override",
            ],
            answer: "context_window size and careful prompt ordering",
            explanation:
              "Model attention biases to earlier tokens; increasing context window and ordering important info earlier helps.",
          },
          {
            id: 1224,
            question:
              "What is the effect of using a 'temperature' slightly above 0 (e.g., 0.2) vs 0 exactly?",
            options: [
              "No difference at all",
              "A tiny bit of stochasticity enabling rare variations while mostly deterministic",
              "Model stops generating",
              "Tools are disabled",
            ],
            answer:
              "A tiny bit of stochasticity enabling rare variations while mostly deterministic",
            explanation:
              "Small nonzero temperatures introduce minimal randomness, useful for slight diversity without instability.",
          },
          {
            id: 1225,
            question:
              "Why might you lower 'top_k' and 'top_p' for production-critical summarization?",
            options: [
              "To increase hallucinations",
              "To make outputs more conservative and reduce unexpected content",
              "To increase token usage",
              "To disable tools",
            ],
            answer:
              "To make outputs more conservative and reduce unexpected content",
            explanation:
              "Restricting sampling makes summaries more stable and predictable for critical tasks.",
          },
          {
            id: 1226,
            question:
              "Which setting helps control whether model will produce known named entities repeatedly?",
            options: [
              "frequency_penalty and presence_penalty",
              "max_context_tokens only",
              "name_override",
              "top_k only",
            ],
            answer: "frequency_penalty and presence_penalty",
            explanation:
              "Penalties discourage repetition and reintroduction of tokens/entities in the output.",
          },
          {
            id: 1227,
            question:
              "What is a practical reason to choose deterministic sampling during CI tests?",
            options: [
              "To increase false negatives",
              "To ensure test stability and reproducible assertions",
              "To increase randomness for coverage",
              "To disable logging",
            ],
            answer: "To ensure test stability and reproducible assertions",
            explanation:
              "Determinism avoids flaky tests that fail due to stochastic model outputs.",
          },
          {
            id: 1228,
            question:
              "Which of the following is true about 'temperature' and 'top_p' used together?",
            options: [
              "They are mutually exclusive and cannot be combined",
              "They can be combined; temperature scales logits and top_p restricts candidate set by cumulative probability",
              "Using both always crashes the model",
              "They control token length only",
            ],
            answer:
              "They can be combined; temperature scales logits and top_p restricts candidate set by cumulative probability",
            explanation:
              "Using both provides flexible control over randomness and candidate selection.",
          },
          {
            id: 1229,
            question:
              "What is 'sampling strategy' in the context of model settings?",
            options: [
              "The method used to select next tokens (e.g., greedy, beam, top-k, top-p, temperature sampling)",
              "Only the way tools are called",
              "Database indexing method",
              "Network protocol only",
            ],
            answer:
              "The method used to select next tokens (e.g., greedy, beam, top-k, top-p, temperature sampling)",
            explanation:
              "Sampling strategy defines how tokens are chosen from the model's distribution during generation.",
          },
          {
            id: 1230,
            question:
              "Which model setting affects cost most directly per API call?",
            options: [
              "max_tokens and model size selection",
              "presence_penalty only",
              "name_override",
              "is_enabled",
            ],
            answer: "max_tokens and model size selection",
            explanation:
              "Longer outputs and larger models use more compute and therefore increase cost.",
          },
          {
            id: 1231,
            question:
              "Which of these helps handle tokens with undesired probability without retraining the model?",
            options: [
              "Adjust logit_bias to penalize or boost specific tokens",
              "Change the model architecture immediately",
              "Rewrite the OS",
              "Increase top_k only",
            ],
            answer: "Adjust logit_bias to penalize or boost specific tokens",
            explanation:
              "Logit bias directly manipulates token probabilities at inference time for fine-grained control.",
          },
          {
            id: 1232,
            question: "What trade-off does increasing top_k create?",
            options: [
              "Less diversity, lower coherence",
              "More candidate tokens (more diversity) but potentially less coherent/high-probability sequences",
              "Instant deterministic outputs",
              "No trade-off at all",
            ],
            answer:
              "More candidate tokens (more diversity) but potentially less coherent/high-probability sequences",
            explanation:
              "Allowing more tokens increases variety but can reduce the overall coherence of generated text.",
          },
          {
            id: 1233,
            question:
              "Why might you use different model settings for different tools called by the agent?",
            options: [
              "To confuse the agent",
              "Different tasks (summarization vs brainstorming) have different needs for creativity and determinism",
              "It is not possible",
              "To increase token leakage",
            ],
            answer:
              "Different tasks (summarization vs brainstorming) have different needs for creativity and determinism",
            explanation:
              "Tailoring settings to task type yields better, task-appropriate outputs (e.g., low temp for summaries).",
          },
          {
            id: 1234,
            question:
              "Which setting helps avoid generating personally identifiable information by accident?",
            options: [
              "Output filtering, logit_bias to downweight PII tokens, and sanitization hooks",
              "Increase temperature only",
              "Top_k only",
              "Disable tracing",
            ],
            answer:
              "Output filtering, logit_bias to downweight PII tokens, and sanitization hooks",
            explanation:
              "Combining biasing and post-generation filters reduces accidental PII disclosure.",
          },
          {
            id: 1235,
            question:
              "What is the effect of setting top_p very low (e.g., 0.1)?",
            options: [
              "Allows only very high-probability tokens, producing safe but potentially dull outputs",
              "Always results in longest outputs",
              "Increases randomness",
              "Enables all tools automatically",
            ],
            answer:
              "Allows only very high-probability tokens, producing safe but potentially dull outputs",
            explanation:
              "Small top_p creates conservative generation by sampling from a narrow high-probability mass.",
          },
          {
            id: 1236,
            question:
              "Which parameter is most useful to prevent repetition of phrases across a long generated passage?",
            options: [
              "frequency_penalty",
              "max_turns",
              "name_override",
              "is_enabled",
            ],
            answer: "frequency_penalty",
            explanation:
              "frequency_penalty reduces probabilities of tokens already used, discouraging repetitive phrasing.",
          },
          {
            id: 1237,
            question:
              "Why might you tune model settings per user preference (e.g., creativity level)?",
            options: [
              "To introduce unpredictability in production",
              "To personalize outputs to user needs (concise vs creative) improving user experience",
              "To always increase cost",
              "To disable tools",
            ],
            answer:
              "To personalize outputs to user needs (concise vs creative) improving user experience",
            explanation:
              "User-configurable settings let the system adapt style and randomness to preferences or task requirements.",
          },
          {
            id: 1238,
            question:
              "What is the recommended first step when unexpected model behavior appears after changing sampling settings?",
            options: [
              "Ignore it",
              "Revert changes and run A/B tests to isolate the effect of each parameter",
              "Delete logs",
              "Increase temperature further",
            ],
            answer:
              "Revert changes and run A/B tests to isolate the effect of each parameter",
            explanation:
              "Isolating changes and testing helps identify which setting introduced the behavior.",
          },
          {
            id: 1239,
            question:
              "Which of these is NOT controlled by model sampling settings?",
            options: [
              "Token selection randomness and diversity",
              "Which external tool the agent will call (tool_choice decisions are separate)",
              "Length control via max_tokens",
              "Biasing individual token probabilities (logit_bias)",
            ],
            answer:
              "Which external tool the agent will call (tool_choice decisions are separate)",
            explanation:
              "Tool selection is an agent-level decision; sampling settings affect text generation behavior.",
          },
          {
            id: 1240,
            question: "How should model settings be documented for team use?",
            options: [
              "Not documented at all",
              "With default profiles, rationale for choices, and examples of expected behavior under each profile",
              "Only in private notes",
              "Only in code comments without examples",
            ],
            answer:
              "With default profiles, rationale for choices, and examples of expected behavior under each profile",
            explanation:
              "Documentation helps reproducibility and consistent usage across teams.",
          },
          {
            id: 1241,
            question: "What is 'sampling temperature annealing' used for?",
            options: [
              "To keep temperature constant",
              "Gradually lowering temperature during multi-step generation to become more deterministic over time",
              "To increase top_k automatically",
              "To shut down tools",
            ],
            answer:
              "Gradually lowering temperature during multi-step generation to become more deterministic over time",
            explanation:
              "Annealing reduces randomness later in a sequence, useful when initial creativity then precise finishing is desired.",
          },
          {
            id: 1242,
            question:
              "Which metric helps assess the impact of sampling settings on output quality?",
            options: [
              "User satisfaction scores, BLEU/ROUGE for tasks, or human evaluation",
              "Number of tools available",
              "Model file size only",
              "Stop sequence count",
            ],
            answer:
              "User satisfaction scores, BLEU/ROUGE for tasks, or human evaluation",
            explanation:
              "Human-centered metrics and task-specific automatic scores indicate whether sampling settings meet objectives.",
          },
          {
            id: 1243,
            question:
              "Which setting can be used to reduce rare token generation without changing temperature?",
            options: [
              "top_k or top_p to limit candidate tokens",
              "increase max_tokens",
              "is_enabled",
              "description_override",
            ],
            answer: "top_k or top_p to limit candidate tokens",
            explanation:
              "Truncating candidate sets reduces the chance of sampling low-probability rare tokens.",
          },
          {
            id: 1244,
            question:
              "Why might you use a different model size for different tools/operations?",
            options: [
              "To confuse the system",
              "Smaller models for cheap deterministic tasks; larger models for complex reasoning where accuracy matters",
              "To avoid version control",
              "To increase latency intentionally",
            ],
            answer:
              "Smaller models for cheap deterministic tasks; larger models for complex reasoning where accuracy matters",
            explanation:
              "Right-sizing models balances cost, latency, and capability per task.",
          },
          {
            id: 1245,
            question: "What does 'output_truncation' refer to?",
            options: [
              "Truncating the prompt before sending",
              "Cutting generated output to a maximum token length or until a stop sequence",
              "Removing tools from registry",
              "Increasing model temperature",
            ],
            answer:
              "Cutting generated output to a maximum token length or until a stop sequence",
            explanation:
              "Output truncation enforces length constraints for downstream processing or costs.",
          },
          {
            id: 1246,
            question:
              "Which of these techniques helps keep model outputs aligned with policy constraints?",
            options: [
              "Logit_bias to demote disallowed tokens, output filters, and guardrails",
              "Increase temperature only",
              "top_k large only",
              "disable tracing",
            ],
            answer:
              "Logit_bias to demote disallowed tokens, output filters, and guardrails",
            explanation:
              "Combining inference-time biasing and post-generation filters enforces policy constraints.",
          },
          {
            id: 1247,
            question: "What is a 'safety profile' in model settings?",
            options: [
              "A set of sampling and biasing settings plus filters tailored to reduce harmful outputs",
              "A UI theme",
              "A network port",
              "A tool name",
            ],
            answer:
              "A set of sampling and biasing settings plus filters tailored to reduce harmful outputs",
            explanation:
              "Safety profiles standardize protective settings across production use cases.",
          },
          {
            id: 1248,
            question:
              "Which approach gives fine-grained control over token generation without retraining?",
            options: [
              "Using logit_bias and output validation",
              "Rewriting the model weights manually",
              "Change hardware",
              "Disable all tools",
            ],
            answer: "Using logit_bias and output validation",
            explanation:
              "Logit bias and validators adjust generation behavior at inference time for precise control.",
          },
          {
            id: 1249,
            question:
              "What is the common effect of increasing both top_k and top_p simultaneously?",
            options: [
              "Make sampling extremely narrow",
              "Allow broader candidate tokens and increase diversity, possibly at coherence cost",
              "Always decrease performance",
              "Disable sampling",
            ],
            answer:
              "Allow broader candidate tokens and increase diversity, possibly at coherence cost",
            explanation:
              "Larger candidate sets from both parameters broaden sampling choices and can increase novelty.",
          },
          {
            id: 1250,
            question:
              "Which strategy balances creativity and control for generative tasks?",
            options: [
              "Use extreme temperature only",
              "Use moderate temperature, sensible top_p/top_k, and output validation with fallback checks",
              "Disable all settings",
              "Increase max_tokens only",
            ],
            answer:
              "Use moderate temperature, sensible top_p/top_k, and output validation with fallback checks",
            explanation:
              "Combining moderated randomness with candidate constraints and validation yields controlled creativity.",
          },
        ],
      },
      {
        id: 106,
        name: "Handoff",
        description:
          "Handoff process and `handoff()` function details (input_type, input_filter, is_enabled, on_handoff)",
        mcqs: [
          {
            id: 1251,
            question: "What is a 'handoff' between agents?",
            options: [
              "A way to change model hyperparameters",
              "Transferring a task, context, or responsibility from one agent to another",
              "A method to restart the agent",
              "A logging mechanism only",
            ],
            answer:
              "Transferring a task, context, or responsibility from one agent to another",
            explanation:
              "Handoff delegates work and context between agents to leverage specialized capabilities or escalate tasks.",
          },
          {
            id: 1252,
            question:
              "What is the primary purpose of an `input_type` in handoff configuration?",
            options: [
              "To change the UI",
              "To declare the expected shape/type of data when handing off to another agent",
              "To decide model temperature",
              "To throttle tools",
            ],
            answer:
              "To declare the expected shape/type of data when handing off to another agent",
            explanation:
              "input_type documents and validates the data structure expected by the receiving agent.",
          },
          {
            id: 1253,
            question: "Why use an `input_filter` during handoff?",
            options: [
              "To block network traffic",
              "To sanitize, redact, or restrict fields before passing data to the receiving agent",
              "To increase model randomness",
              "To change the tool name",
            ],
            answer:
              "To sanitize, redact, or restrict fields before passing data to the receiving agent",
            explanation:
              "Filters prevent leaking sensitive information and ensure only relevant data is handed over.",
          },
          {
            id: 1254,
            question: "What does `is_enabled` control in a handoff config?",
            options: [
              "Whether the handoff route is active or can be used at runtime",
              "The model's token limit",
              "Tool concurrency",
              "The agent's persona",
            ],
            answer:
              "Whether the handoff route is active or can be used at runtime",
            explanation:
              "is_enabled toggles the availability of a handoff path without removing configuration.",
          },
          {
            id: 1255,
            question: "What is `on_handoff` typically used for?",
            options: [
              "To compress logs",
              "A callback to run custom logic (audit, notifications, transforms) when a handoff occurs",
              "To change top_k",
              "To delete tools",
            ],
            answer:
              "A callback to run custom logic (audit, notifications, transforms) when a handoff occurs",
            explanation:
              "on_handoff hooks allow insertion of side-effects or validations during the transition.",
          },
          {
            id: 1256,
            question:
              "Which of the following is an important check before performing a handoff?",
            options: [
              "Verify the receiving agent's capabilities and permissions for the task",
              "Increase model temperature",
              "Disable tracing",
              "Clear all context",
            ],
            answer:
              "Verify the receiving agent's capabilities and permissions for the task",
            explanation:
              "Confirming capabilities and permissions avoids handing off tasks to incompatible or unauthorized agents.",
          },
          {
            id: 1257,
            question:
              "What is a benefit of structured handoff data (e.g., JSON schema)?",
            options: [
              "It obfuscates intent",
              "Predictable parsing and validation by the receiving agent, reducing errors",
              "It increases randomness",
              "It disables tools",
            ],
            answer:
              "Predictable parsing and validation by the receiving agent, reducing errors",
            explanation:
              "Structured data makes it easier to validate and consume handed-off payloads reliably.",
          },
          {
            id: 1258,
            question:
              "Why might a handoff be conditional rather than automatic?",
            options: [
              "To always slow down the flow",
              "To only handoff when criteria (confidence, task type, or escalation thresholds) are met",
              "To bypass security",
              "To ignore context",
            ],
            answer:
              "To only handoff when criteria (confidence, task type, or escalation thresholds) are met",
            explanation:
              "Conditional handoffs avoid unnecessary delegation and ensure appropriate escalation.",
          },
          {
            id: 1259,
            question: "What does 'graceful handoff' imply?",
            options: [
              "Dropping all context abruptly",
              "Transferring context, state, and intent in a way that preserves continuity for the receiving agent",
              "Stopping the agent immediately",
              "Logging nothing",
            ],
            answer:
              "Transferring context, state, and intent in a way that preserves continuity for the receiving agent",
            explanation:
              "Graceful handoffs ensure the receiving agent has enough info to continue the task smoothly.",
          },
          {
            id: 1260,
            question: "Which is a common security concern with handoffs?",
            options: [
              "Exposing sensitive fields during the data transfer",
              "Model temperature drift",
              "Top_k changes",
              "Increased token limits",
            ],
            answer: "Exposing sensitive fields during the data transfer",
            explanation:
              "Handoffs must avoid leaking PII or secrets; input_filter and permission checks mitigate this risk.",
          },
          {
            id: 1261,
            question: "How can a system verify handoff success?",
            options: [
              "Assume success always",
              "Use acknowledgement messages, checksums, or status callbacks from the receiving agent",
              "Disable logs",
              "Increase temperature",
            ],
            answer:
              "Use acknowledgement messages, checksums, or status callbacks from the receiving agent",
            explanation:
              "Acknowledgements confirm the recipient received and accepted the handed-off data.",
          },
          {
            id: 1262,
            question: "What is a 'handoff policy'?",
            options: [
              "A UI color scheme",
              "Rules that govern when, how, and to whom tasks should be handed off",
              "Model hyperparameters",
              "Tool descriptions",
            ],
            answer:
              "Rules that govern when, how, and to whom tasks should be handed off",
            explanation:
              "Policies codify criteria and procedures for secure, appropriate delegation.",
          },
          {
            id: 1263,
            question: "Why include provenance information during a handoff?",
            options: [
              "To obfuscate data",
              "To help receiving agents and auditors understand origin, context, and trustworthiness",
              "To increase token usage",
              "To delete history",
            ],
            answer:
              "To help receiving agents and auditors understand origin, context, and trustworthiness",
            explanation:
              "Provenance supports validation, troubleshooting, and accountability for handed-off data.",
          },
          {
            id: 1264,
            question:
              "Which of these is an appropriate use of on_handoff hook?",
            options: [
              "Send alerts to a monitoring channel and redact sensitive fields before transfer",
              "Increase model temperature",
              "Rename tools arbitrarily",
              "Disable all guards",
            ],
            answer:
              "Send alerts to a monitoring channel and redact sensitive fields before transfer",
            explanation:
              "on_handoff can trigger auditing, notifications, or sanitization to support safe transfers.",
          },
          {
            id: 1265,
            question: "What is 'handoff chaining'?",
            options: [
              "Handing off directly to a human only",
              "Sequentially passing a task through multiple agents until completion",
              "Disabling all tools during handoff",
              "Changing model size mid-run",
            ],
            answer:
              "Sequentially passing a task through multiple agents until completion",
            explanation:
              "Chaining composes specialized agents for multi-step workflows via successive handoffs.",
          },
          {
            id: 1266,
            question: "How can you minimize the payload size during handoff?",
            options: [
              "Include entire conversation history always",
              "Send only essential fields, summarize context, and avoid redundant data",
              "Increase temperature",
              "Disable handoff",
            ],
            answer:
              "Send only essential fields, summarize context, and avoid redundant data",
            explanation:
              "Smaller payloads reduce latency and risk while giving recipients needed info.",
          },
          {
            id: 1267,
            question:
              "What should a receiving agent do if input doesn't match expected input_type?",
            options: [
              "Proceed anyway and guess",
              "Return a validation error or request clarification from the sender",
              "Delete the input",
              "Increase token limit",
            ],
            answer:
              "Return a validation error or request clarification from the sender",
            explanation:
              "Validating inputs prevents misinterpretation and avoids downstream errors.",
          },
          {
            id: 1268,
            question:
              "Which handoff mode is useful when human oversight is required?",
            options: [
              "Silent automatic handoff",
              "Human-in-the-loop mode where a human approves or augments the transfer",
              "Disable handoff entirely",
              "Random handoff",
            ],
            answer:
              "Human-in-the-loop mode where a human approves or augments the transfer",
            explanation:
              "Human oversight adds judgement for high-risk or ambiguous transfers.",
          },
          {
            id: 1269,
            question:
              "Which property should be recorded for audit when a handoff occurs?",
            options: [
              "Only the time of day",
              "Who initiated it, what data was transferred, recipient agent, and outcome/status",
              "Only the model temperature",
              "Only the number of tools available",
            ],
            answer:
              "Who initiated it, what data was transferred, recipient agent, and outcome/status",
            explanation:
              "Detailed audit records support accountability and postmortem analysis.",
          },
          {
            id: 1270,
            question:
              "What is the role of 'consent' in handoffs involving user data?",
            options: [
              "Not relevant",
              "Ensure user consent and legal basis before transferring sensitive personal data",
              "Increase token usage",
              "Disable tracing",
            ],
            answer:
              "Ensure user consent and legal basis before transferring sensitive personal data",
            explanation:
              "Legal and ethical requirements often mandate user consent before data transfers.",
          },
          {
            id: 1271,
            question:
              "How can you implement a fallback if the receiving agent is unavailable during handoff?",
            options: [
              "Drop the task silently",
              "Queue the handoff, retry, or route to an alternate agent or human operator",
              "Always escalate immediately",
              "Increase temperature",
            ],
            answer:
              "Queue the handoff, retry, or route to an alternate agent or human operator",
            explanation:
              "Retries, queuing, and alternative routing maintain reliability when recipients are down.",
          },
          {
            id: 1272,
            question: "Which handoff pattern reduces cross-agent coupling?",
            options: [
              "Tightly embed recipient code in sender",
              "Use well-defined interfaces/schema and a shared registry to decouple sender and receiver",
              "Hardcode recipient internals",
              "Share private keys in payload",
            ],
            answer:
              "Use well-defined interfaces/schema and a shared registry to decouple sender and receiver",
            explanation:
              "Loose coupling via contracts reduces breakage and simplifies maintenance.",
          },
          {
            id: 1273,
            question: "What is a good test for validating handoff logic?",
            options: [
              "Only manual inspection",
              "Automated tests that simulate valid/invalid inputs, recipient down scenarios, and verify audit logs",
              "No tests needed",
              "Only unit tests for unrelated components",
            ],
            answer:
              "Automated tests that simulate valid/invalid inputs, recipient down scenarios, and verify audit logs",
            explanation:
              "Comprehensive automated tests ensure handoff robustness across common failure modes.",
          },
          {
            id: 1274,
            question:
              "Which of the following should NOT be transferred during a handoff by default?",
            options: [
              "Non-essential sensitive fields like raw credentials or full PII without need",
              "Task ID and minimal context",
              "Provenance metadata",
              "Outcome expectations",
            ],
            answer:
              "Non-essential sensitive fields like raw credentials or full PII without need",
            explanation:
              "Minimize exposure by excluding unnecessary sensitive data during transfers.",
          },
          {
            id: 1275,
            question: "What is 'handoff orchestration'?",
            options: [
              "A UI animation for transitions",
              "Coordinating multiple handoffs, retries, and routing policies across agents",
              "Changing model temperature",
              "Renaming tools automatically",
            ],
            answer:
              "Coordinating multiple handoffs, retries, and routing policies across agents",
            explanation:
              "Orchestration manages the flow of complex multi-agent handoffs and fallback behavior.",
          },
          {
            id: 1276,
            question:
              "When is it appropriate to include a summary of previous steps in a handoff payload?",
            options: [
              "Always include raw history",
              "Include concise summaries of prior actions and rationale to help the receiver understand context",
              "Never include any context",
              "Only include model weights",
            ],
            answer:
              "Include concise summaries of prior actions and rationale to help the receiver understand context",
            explanation:
              "Summaries provide necessary background without large payloads or sensitive details.",
          },
          {
            id: 1277,
            question:
              "Which of these is a valid validation step before handoff?",
            options: [
              "Check that required fields are present and conform to the input_type schema",
              "Ignore schema",
              "Randomize payload",
              "Delete provenance",
            ],
            answer:
              "Check that required fields are present and conform to the input_type schema",
            explanation:
              "Schema validation prevents malformed or incomplete payloads from being transferred.",
          },
          {
            id: 1278,
            question: "What is a 'synchronous handoff'?",
            options: [
              "Sender continues without waiting",
              "Sender waits for immediate response or acknowledgement from the receiver before proceeding",
              "Handing off only to humans",
              "Only used in debugging",
            ],
            answer:
              "Sender waits for immediate response or acknowledgement from the receiver before proceeding",
            explanation:
              "Synchronous handoffs require immediate acceptance or processing confirmation from the receiving agent.",
          },
          {
            id: 1279,
            question: "How can handoff flows be made observable?",
            options: [
              "Never log anything",
              "Emit structured events, traces, and audit logs for each handoff attempt and outcome",
              "Only monitor system uptime",
              "Only log errors without context",
            ],
            answer:
              "Emit structured events, traces, and audit logs for each handoff attempt and outcome",
            explanation:
              "Structured observability enables debugging, auditing, and performance monitoring of handoffs.",
          },
          {
            id: 1280,
            question:
              "Which of the following best describes a 'dry-run' handoff?",
            options: [
              "A real transfer without validation",
              "Simulating a handoff to test the flow without executing side-effects",
              "Always failing the handoff deliberately",
              "Skipping input filtering",
            ],
            answer:
              "Simulating a handoff to test the flow without executing side-effects",
            explanation:
              "Dry-runs validate the mechanics and compatibility of handoffs safely before production use.",
          },
          {
            id: 1281,
            question:
              "What should be done if a handoff reveals the receiving agent lacks permission for required data?",
            options: [
              "Proceed anyway",
              "Abort handoff and either request elevated permissions, redact sensitive fields, or route to an authorized agent",
              "Delete all logs",
              "Increase temperature",
            ],
            answer:
              "Abort handoff and either request elevated permissions, redact sensitive fields, or route to an authorized agent",
            explanation:
              "Permission checks prevent unauthorized data access and ensure compliance with policies.",
          },
          {
            id: 1282,
            question:
              "Which of these is a benefit of centralizing handoff definitions in a registry?",
            options: [
              "Harder to maintain",
              "Easier discovery, consistent schemas, and centralized permissioning for all handoff routes",
              "More coupling between agents",
              "Less observability",
            ],
            answer:
              "Easier discovery, consistent schemas, and centralized permissioning for all handoff routes",
            explanation:
              "Registries standardize handoffs, making them discoverable and manageable across the system.",
          },
          {
            id: 1283,
            question:
              "Which property improves resilience of handoff operations?",
            options: [
              "No retries configured",
              "Retries with exponential backoff, queueing, and alternate routing",
              "Only synchronous handoffs",
              "Always large payloads",
            ],
            answer:
              "Retries with exponential backoff, queueing, and alternate routing",
            explanation:
              "Retry strategies and routing increase the chance of successful handoff despite transient failures.",
          },
          {
            id: 1284,
            question: "Why instrument handoff latency metrics?",
            options: [
              "To hide performance issues",
              "To measure performance, detect slow transfers, and improve user experience",
              "To increase temperature",
              "To disable tools",
            ],
            answer:
              "To measure performance, detect slow transfers, and improve user experience",
            explanation:
              "Latency metrics reveal bottlenecks and guide optimizations for smoother handoffs.",
          },
          {
            id: 1285,
            question:
              "What is the best action if a handoff returns an unexpected error code?",
            options: [
              "Discard the error",
              "Record the error, apply fallback logic, and surface for operator investigation if needed",
              "Always escalate to human immediately",
              "Always retry infinite times",
            ],
            answer:
              "Record the error, apply fallback logic, and surface for operator investigation if needed",
            explanation:
              "Capturing and handling errors with fallbacks maintains robustness and allows debugging.",
          },
          {
            id: 1286,
            question:
              "When chaining handoffs across multiple agents, what is crucial to preserve?",
            options: [
              "Only timestamps",
              "Task identifiers, state checkpoints, and concise rationale for each step",
              "Everything including secrets",
              "Nothing at all",
            ],
            answer:
              "Task identifiers, state checkpoints, and concise rationale for each step",
            explanation:
              "These elements ensure traceability and continuity across a multi-agent workflow.",
          },
          {
            id: 1287,
            question:
              "Which approach helps validate that handoff payloads do not contain secrets?",
            options: [
              "No checks",
              "Automated scanners/redactors and schema-based allowed fields",
              "Send everything to a third party",
              "Only manual reviews",
            ],
            answer:
              "Automated scanners/redactors and schema-based allowed fields",
            explanation:
              "Automated redaction and strict schemas reduce the risk of accidentally transmitting secrets.",
          },
          {
            id: 1288,
            question:
              "What testing strategy ensures handoff compatibility across agent versions?",
            options: [
              "Only production testing",
              "Contract tests and integration tests that validate different agent versions against schemas",
              "No testing",
              "Only unit tests in isolation",
            ],
            answer:
              "Contract tests and integration tests that validate different agent versions against schemas",
            explanation:
              "Contract tests catch breaking changes and ensure backward compatibility across versions.",
          },
          {
            id: 1289,
            question:
              "Which indicator would suggest a handoff policy needs revision?",
            options: [
              "Frequent failures, security incidents, or high latency on certain routes",
              "Perfect success rates",
              "Low monitoring",
              "High model temperature",
            ],
            answer:
              "Frequent failures, security incidents, or high latency on certain routes",
            explanation:
              "Operational issues indicate policies or implementations may be inadequate and require updates.",
          },
          {
            id: 1290,
            question:
              "What is an appropriate way to roll out a new handoff route safely?",
            options: [
              "Enable it for all traffic immediately",
              "Deploy to staging, run contract/dry-run tests, then enable gradually with monitoring",
              "Never test it",
              "Disable observability",
            ],
            answer:
              "Deploy to staging, run contract/dry-run tests, then enable gradually with monitoring",
            explanation:
              "Gradual rollouts with validation reduce risk and allow rollback if issues arise.",
          },
        ],
      },
      {
        id: 107,
        name: "Runner",
        description:
          "Runner concepts: custom runner, max turns, execution control, concurrency, and error handling",
        mcqs: [
          {
            id: 1291,
            question: "What is a 'Runner' in agent frameworks?",
            options: [
              "A UI component",
              "A component that executes and manages the lifecycle of agent runs",
              "A logging library",
              "A hardware device",
            ],
            answer:
              "A component that executes and manages the lifecycle of agent runs",
            explanation:
              "Runners coordinate execution, enforce limits, and manage interactions between agent components.",
          },
          {
            id: 1292,
            question: "What does 'max_turns' control in a runner?",
            options: [
              "Number of parallel tools",
              "Maximum number of conversational/decision turns allowed per run",
              "Model temperature",
              "Tool name length",
            ],
            answer:
              "Maximum number of conversational/decision turns allowed per run",
            explanation:
              "max_turns prevents infinite loops by capping how many steps the runner will perform.",
          },
          {
            id: 1293,
            question:
              "Why build a custom runner instead of using a default one?",
            options: [
              "To complicate design without reason",
              "To implement custom scheduling, resource limits, orchestration logic, or integrations",
              "To avoid testing",
              "To increase tokens",
            ],
            answer:
              "To implement custom scheduling, resource limits, orchestration logic, or integrations",
            explanation:
              "Custom runners tailor execution to system constraints, policies, or special workflows.",
          },
          {
            id: 1294,
            question: "Which responsibility typically belongs to a runner?",
            options: [
              "Training model weights",
              "Managing timeouts, retries, turn limits, and tool invocation order",
              "Designing UI components",
              "Changing model architecture",
            ],
            answer:
              "Managing timeouts, retries, turn limits, and tool invocation order",
            explanation:
              "Runners handle runtime control aspects to ensure robust agent execution.",
          },
          {
            id: 1295,
            question: "What is 'concurrency_limit' in a runner context?",
            options: [
              "Maximum number of simultaneous runs or tool calls to prevent resource exhaustion",
              "Model temperature limit",
              "Maximum tokens per turn",
              "Tool description length",
            ],
            answer:
              "Maximum number of simultaneous runs or tool calls to prevent resource exhaustion",
            explanation:
              "Concurrency limits protect shared resources and maintain service stability under load.",
          },
          {
            id: 1296,
            question: "Why is 'run context' useful in runners?",
            options: [
              "It changes the model weights",
              "It stores per-run state, metadata, and transient context needed during execution",
              "To disable logging",
              "To present UI themes",
            ],
            answer:
              "It stores per-run state, metadata, and transient context needed during execution",
            explanation:
              "Run-specific context isolates state and facilitates tracing and reproducibility of runs.",
          },
          {
            id: 1297,
            question:
              "Which is a reason to enforce timeouts at the runner level?",
            options: [
              "To encourage infinite loops",
              "To prevent long-running or stuck runs from consuming resources indefinitely",
              "To change model topology",
              "To hide logs",
            ],
            answer:
              "To prevent long-running or stuck runs from consuming resources indefinitely",
            explanation:
              "Timeouts ensure runs terminate and free resources when operations hang or take too long.",
          },
          {
            id: 1298,
            question: "What does 'checkpointing' a run facilitate?",
            options: [
              "Instant deletion of state",
              "Saving intermediate run state so runs can be resumed or audited later",
              "Increasing temperature",
              "Changing tool names",
            ],
            answer:
              "Saving intermediate run state so runs can be resumed or audited later",
            explanation:
              "Checkpoints enable resuming progress, debugging, and reproducibility for long-running runs.",
          },
          {
            id: 1299,
            question:
              "Which is a typical runner-level error handling strategy?",
            options: [
              "Crash the whole system without logs",
              "Catch exceptions, apply retries/backoff, fallback to safe states, and surface errors for monitoring",
              "Ignore all errors silently",
              "Always escalate to human with no context",
            ],
            answer:
              "Catch exceptions, apply retries/backoff, fallback to safe states, and surface errors for monitoring",
            explanation:
              "Robust error handling maintains service reliability and provides information for remediation.",
          },
          {
            id: 1300,
            question:
              "How can runners support reproducibility of a previous run?",
            options: [
              "By never recording anything",
              "By snapshotting run context, parameters, model settings, and input data for replay",
              "Only storing logs in random locations",
              "By changing model weights afterward",
            ],
            answer:
              "By snapshotting run context, parameters, model settings, and input data for replay",
            explanation:
              "Snapshots capture the full state needed to rerun or audit a prior execution accurately.",
          },
          {
            id: 1301,
            question: "Why might a runner limit parallel_tool_calls?",
            options: [
              "To reduce concurrency stress on downstream services and ensure predictable resource usage",
              "To increase randomness",
              "To change model temperature",
              "To rename tools",
            ],
            answer:
              "To reduce concurrency stress on downstream services and ensure predictable resource usage",
            explanation:
              "Limiting parallel tool calls prevents overload of external APIs and keeps latency stable.",
          },
          {
            id: 1302,
            question: "What is the effect of setting a very low 'max_turns'?",
            options: [
              "Longer conversations always",
              "Runs may terminate prematurely and fail to complete complex multi-step tasks",
              "Enable all tools automatically",
              "Increase model size",
            ],
            answer:
              "Runs may terminate prematurely and fail to complete complex multi-step tasks",
            explanation:
              "Very low turn limits can prevent agents from completing tasks that require multiple steps.",
          },
          {
            id: 1303,
            question:
              "How should a runner behave when a tool call blocks longer than its timeout?",
            options: [
              "Wait indefinitely",
              "Abort the tool call, record the timeout, and follow configured fallback/retry logic",
              "Delete the entire run without record",
              "Increase temperature automatically",
            ],
            answer:
              "Abort the tool call, record the timeout, and follow configured fallback/retry logic",
            explanation:
              "Timeout handling prevents blocking and ensures the run can proceed with fallback strategies.",
          },
          {
            id: 1304,
            question: "Which runner feature supports multi-tenant safety?",
            options: [
              "Shared global state for all tenants",
              "Per-tenant quotas, resource limits, and isolation of run contexts",
              "Allow any tenant to access others' runs",
              "Disable auditing",
            ],
            answer:
              "Per-tenant quotas, resource limits, and isolation of run contexts",
            explanation:
              "Isolation and quotas prevent one tenant from affecting others and enforce fair resource usage.",
          },
          {
            id: 1305,
            question: "What is 'backpressure' in the runner context?",
            options: [
              "A physical pressure sensor",
              "A mechanism to slow incoming requests when system capacity is reached",
              "An increase in temperature",
              "Tool renaming strategy",
            ],
            answer:
              "A mechanism to slow incoming requests when system capacity is reached",
            explanation:
              "Backpressure protects system stability by rejecting or delaying requests under load.",
          },
          {
            id: 1306,
            question: "Why instrument per-run metrics in the runner?",
            options: [
              "For no reason",
              "To monitor performance, error rates, latency and resource consumption for observability and optimization",
              "To hide performance issues",
              "To increase token usage",
            ],
            answer:
              "To monitor performance, error rates, latency and resource consumption for observability and optimization",
            explanation:
              "Per-run metrics enable detection of issues and inform capacity planning and tuning.",
          },
          {
            id: 1307,
            question:
              "Which runner capability helps coordinate multiple agents for a single task?",
            options: [
              "A scheduler or orchestrator that sequences agent runs and manages dependencies",
              "Randomized tool selection",
              "Increasing model temperature",
              "Deleting context",
            ],
            answer:
              "A scheduler or orchestrator that sequences agent runs and manages dependencies",
            explanation:
              "Orchestration arranges multi-agent workflows and enforces order and dependency management.",
          },
          {
            id: 1308,
            question: "What is the relationship between runners and tracing?",
            options: [
              "Runners should disable tracing",
              "Runners generate traces of execution (decisions, tool calls) to support debugging and auditing",
              "Tracing breaks runners always",
              "Tracing is unrelated to runners",
            ],
            answer:
              "Runners generate traces of execution (decisions, tool calls) to support debugging and auditing",
            explanation:
              "Traces produced by runners document the sequence and context of actions for analysis.",
          },
          {
            id: 1309,
            question:
              "Which approach helps reduce cold-start latency in runners?",
            options: [
              "Always full cold starts",
              "Warm pools of runner instances or pre-initialized model contexts",
              "Increase temperature",
              "Disable caching",
            ],
            answer:
              "Warm pools of runner instances or pre-initialized model contexts",
            explanation:
              "Pre-warmed resources avoid expensive initialization on first request, reducing latency.",
          },
          {
            id: 1310,
            question:
              "How can runners enforce policy checks before executing actions?",
            options: [
              "By ignoring policies",
              "Integrate policy evaluation hooks that validate actions and block disallowed operations",
              "Only after actions complete",
              "By modifying model weights",
            ],
            answer:
              "Integrate policy evaluation hooks that validate actions and block disallowed operations",
            explanation:
              "Pre-action policy checks ensure compliance and safety during execution.",
          },
          {
            id: 1311,
            question:
              "What is the benefit of decoupling runner logic from agent decision logic?",
            options: [
              "No benefit",
              "Cleaner separation of concerns: runners manage execution while agents focus on decisions",
              "Increases coupling",
              "Makes testing impossible",
            ],
            answer:
              "Cleaner separation of concerns: runners manage execution while agents focus on decisions",
            explanation:
              "Separation simplifies development, testing, and reuse of components.",
          },
          {
            id: 1312,
            question:
              "Which runner-level strategy helps when an external tool returns intermittent errors?",
            options: [
              "Never retry",
              "Retry with exponential backoff and circuit breaker to avoid repeated rapid failures",
              "Always escalate to a human immediately",
              "Disable tracing",
            ],
            answer:
              "Retry with exponential backoff and circuit breaker to avoid repeated rapid failures",
            explanation:
              "Retries plus circuit breakers balance resilience and protection against flapping failures.",
          },
          {
            id: 1313,
            question: "What is a 'circuit breaker' in runner orchestration?",
            options: [
              "A tool that increases temperature",
              "A mechanism that trips to stop making calls to an unhealthy dependency for a period",
              "A way to enable all tools",
              "A logging statement",
            ],
            answer:
              "A mechanism that trips to stop making calls to an unhealthy dependency for a period",
            explanation:
              "Circuit breakers prevent repeated calls to failing services, allowing recovery time.",
          },
          {
            id: 1314,
            question:
              "Which of these helps manage bursts of traffic to the runner?",
            options: [
              "No rate limiting",
              "Rate limiting, queueing, autoscaling, and backpressure mechanisms",
              "Immediate shutdown",
              "Only increasing temperature",
            ],
            answer:
              "Rate limiting, queueing, autoscaling, and backpressure mechanisms",
            explanation:
              "Combining these patterns smooths load and keeps the system responsive.",
          },
          {
            id: 1315,
            question: "What does 'run cancellation' allow operators to do?",
            options: [
              "Resume runs only",
              "Terminate an in-flight run (e.g., abusive or stuck) to free resources",
              "Change model weights silently",
              "Rename tools",
            ],
            answer:
              "Terminate an in-flight run (e.g., abusive or stuck) to free resources",
            explanation:
              "Cancellation enables operators to stop problematic runs and mitigate impact.",
          },
          {
            id: 1316,
            question: "How can runners aid in cost control?",
            options: [
              "By ignoring budgets",
              "Enforcing model selection policies, max_tokens limits, and run quotas",
              "Always using the largest model",
              "Disable auditing",
            ],
            answer:
              "Enforcing model selection policies, max_tokens limits, and run quotas",
            explanation:
              "Runner-level constraints help keep compute cost predictable and within budgets.",
          },
          {
            id: 1317,
            question: "Which runner feature helps analyze slow executions?",
            options: [
              "Disable metrics",
              "Detailed timing metrics, span traces, and per-step latency breakdowns",
              "Only log errors",
              "Increase temperature",
            ],
            answer:
              "Detailed timing metrics, span traces, and per-step latency breakdowns",
            explanation:
              "Granular timing information pinpoints bottlenecks in runs and tool calls.",
          },
          {
            id: 1318,
            question: "What is 'fair scheduling' in runners?",
            options: [
              "Always favor certain tenants",
              "Allocating runner capacity so users or tenants get equitable access under contention",
              "First-come-first-served only",
              "Random scheduling",
            ],
            answer:
              "Allocating runner capacity so users or tenants get equitable access under contention",
            explanation:
              "Fair scheduling prevents resource starvation for low-priority tasks or tenants.",
          },
          {
            id: 1319,
            question: "Why might a runner implement 'dry-run' capability?",
            options: [
              "To execute destructive actions",
              "To simulate a run's flow for testing without applying side-effects",
              "To disable all checks",
              "To increase token usage",
            ],
            answer:
              "To simulate a run's flow for testing without applying side-effects",
            explanation:
              "Dry-runs validate orchestration and logic safely before real execution.",
          },
          {
            id: 1320,
            question:
              "Which runner behavior improves debugging of intermittent failures?",
            options: [
              "No logging retention",
              "Capture full run traces, inputs, and tool outputs with configurable retention",
              "Always delete traces",
              "Only monitor CPU",
            ],
            answer:
              "Capture full run traces, inputs, and tool outputs with configurable retention",
            explanation:
              "Detailed traces provide evidence to reproduce and analyze intermittent issues.",
          },
          {
            id: 1321,
            question: "How should runners handle sensitive data in traces?",
            options: [
              "Log everything plaintext",
              "Mask/redact sensitive fields and enforce strict access controls",
              "Expose traces publicly",
              "Store traces without encryption",
            ],
            answer:
              "Mask/redact sensitive fields and enforce strict access controls",
            explanation:
              "Protecting sensitive data in logs is essential for privacy and compliance.",
          },
          {
            id: 1322,
            question: "What is 'horizontal scaling' for runners?",
            options: [
              "Adding more CPUs to a single instance",
              "Increasing the number of runner instances to handle more concurrent runs",
              "Reducing model size only",
              "Deleting instances",
            ],
            answer:
              "Increasing the number of runner instances to handle more concurrent runs",
            explanation:
              "Horizontal scaling distributes load across more instances for higher throughput.",
          },
          {
            id: 1323,
            question:
              "Which is an advantage of implementing runner-level rate limiting?",
            options: [
              "More unpredictable behavior",
              "Protect downstream services and ensure fair usage across clients",
              "Disable retry logic",
              "Increase token leakage",
            ],
            answer:
              "Protect downstream services and ensure fair usage across clients",
            explanation:
              "Rate limits maintain stability by preventing excessive traffic from overwhelming services.",
          },
          {
            id: 1324,
            question:
              "Which runner capability assists with obligation to retain audit records?",
            options: [
              "Not storing anything",
              "Configurable audit logging that records essential run metadata and outcomes",
              "Only ephemeral logs",
              "Disable auditing",
            ],
            answer:
              "Configurable audit logging that records essential run metadata and outcomes",
            explanation:
              "Audit logs satisfy compliance and provide an incident investigation trail.",
          },
          {
            id: 1325,
            question: "Why use feature flags with runner deployments?",
            options: [
              "To remove testing",
              "To safely enable/disable features and roll them out incrementally",
              "To increase token usage always",
              "To rename tools randomly",
            ],
            answer:
              "To safely enable/disable features and roll them out incrementally",
            explanation:
              "Feature flags allow controlled rollouts and quick rollback of runner behavior changes.",
          },
          {
            id: 1326,
            question: "What is 'idempotent run design'?",
            options: [
              "Designing runs so that repeated execution has the same effect, avoiding duplicate side-effects",
              "Runs that always fail",
              "Runs that change state unpredictably",
              "Only for testing",
            ],
            answer:
              "Designing runs so that repeated execution has the same effect, avoiding duplicate side-effects",
            explanation:
              "Idempotency enables safe retries and recovery without causing duplicate actions.",
          },
          {
            id: 1327,
            question: "Which of these is a sign you need a custom runner?",
            options: [
              "Simple single-step tasks only",
              "Complex orchestration, custom resource policies, or specialized integrations not supported by defaults",
              "No special requirements",
              "No desire for observability",
            ],
            answer:
              "Complex orchestration, custom resource policies, or specialized integrations not supported by defaults",
            explanation:
              "Custom runners address unique operational needs beyond generic behavior.",
          },
          {
            id: 1328,
            question:
              "How can runners help prevent infinite loops in agent behavior?",
            options: [
              "By doing nothing",
              "Enforce max_turns, timeouts, and cycle detection heuristics",
              "Increase temperature",
              "Disable tracing",
            ],
            answer:
              "Enforce max_turns, timeouts, and cycle detection heuristics",
            explanation:
              "Limits and heuristics stop runaway loops and protect system resources.",
          },
          {
            id: 1329,
            question:
              "Which runner-level capability aids in graceful degradation?",
            options: [
              "Refusing all requests under load",
              "Fallback strategies, reduced-fidelity modes, and degraded functionality to maintain availability",
              "Always fail hard",
              "Never apply backpressure",
            ],
            answer:
              "Fallback strategies, reduced-fidelity modes, and degraded functionality to maintain availability",
            explanation:
              "Graceful degradation maintains service continuity at reduced capacity rather than total failure.",
          },
          {
            id: 1330,
            question:
              "What is the importance of separating control-plane and data-plane in runners?",
            options: [
              "No importance",
              "Improves security and scalability by separating orchestration/control logic from execution data flows",
              "Makes system slower intentionally",
              "Reduces observability",
            ],
            answer:
              "Improves security and scalability by separating orchestration/control logic from execution data flows",
            explanation:
              "Separation clarifies responsibilities and allows independent scaling and security policies.",
          },
          {
            id: 1331,
            question:
              "Which tool helps runners manage scheduled or recurring runs?",
            options: [
              "A scheduler or cron-like component integrated with the runner",
              "Top_k tuning",
              "Increasing temperature",
              "Renaming tools",
            ],
            answer:
              "A scheduler or cron-like component integrated with the runner",
            explanation:
              "Schedulers trigger runs at defined intervals for periodic jobs or maintenance tasks.",
          },
          {
            id: 1332,
            question:
              "Why is it useful for runners to support multiple execution backends?",
            options: [
              "It complicates deployment only",
              "To run on different infrastructures (serverless, VMs, GPUs) and choose best-fit resources per job",
              "It reduces compatibility",
              "It disables tracing",
            ],
            answer:
              "To run on different infrastructures (serverless, VMs, GPUs) and choose best-fit resources per job",
            explanation:
              "Multiple backends increase flexibility and optimize cost/performance trade-offs.",
          },
          {
            id: 1333,
            question:
              "What should be included in a runner's run metadata for traceability?",
            options: [
              "Only the run ID",
              "Run ID, initiator, timestamps, config used, and relevant input references",
              "Only model temperature",
              "Only tool names",
            ],
            answer:
              "Run ID, initiator, timestamps, config used, and relevant input references",
            explanation:
              "Comprehensive metadata enables auditing and reproducing the run when needed.",
          },
          {
            id: 1334,
            question:
              "Which pattern reduces blast radius when a run misbehaves?",
            options: [
              "Give runs full admin privileges",
              "Use least-privilege execution contexts, sandboxing, and scoped credentials",
              "Share tenant credentials broadly",
              "Disable policies",
            ],
            answer:
              "Use least-privilege execution contexts, sandboxing, and scoped credentials",
            explanation:
              "Limiting privileges and isolating execution reduces potential harm from faulty runs.",
          },
          {
            id: 1335,
            question:
              "How can runners support observability while respecting privacy?",
            options: [
              "Log everything verbatim",
              "Collect structured telemetry but redact sensitive fields and control retention/access",
              "Expose logs publicly",
              "Never collect metrics",
            ],
            answer:
              "Collect structured telemetry but redact sensitive fields and control retention/access",
            explanation:
              "Balancing observability and privacy requires careful redaction and access control practices.",
          },
          {
            id: 1336,
            question: "What is 'execution policy enforcement' at runner level?",
            options: [
              "Ignoring policies during runs",
              "Applying organizational rules (resource limits, model choices, allowed tools) before runs execute",
              "Changing model weights randomly",
              "Only for tests",
            ],
            answer:
              "Applying organizational rules (resource limits, model choices, allowed tools) before runs execute",
            explanation:
              "Enforcement ensures runs comply with operational constraints and governance.",
          },
          {
            id: 1337,
            question:
              "Which is a reason to add circuit-breaker dashboards for runners?",
            options: [
              "To reduce monitoring",
              "To visualize dependency health and when circuit breakers trip for troubleshooting",
              "To obfuscate errors",
              "To increase token usage",
            ],
            answer:
              "To visualize dependency health and when circuit breakers trip for troubleshooting",
            explanation:
              "Dashboards help operators detect recurring failures and take corrective action.",
          },
          {
            id: 1338,
            question: "How should runner-level secrets be managed?",
            options: [
              "Embed secrets in code",
              "Use secret managers and scoped credentials with least privilege, never plain text in configs",
              "Store secrets in repo",
              "Log secrets frequently",
            ],
            answer:
              "Use secret managers and scoped credentials with least privilege, never plain text in configs",
            explanation:
              "Secret managers protect sensitive credentials and minimize exposure risks.",
          },
          {
            id: 1339,
            question:
              "What is the benefit of providing a developer-friendly SDK for runners?",
            options: [
              "Discourages adoption",
              "Simplifies building, testing, and integrating custom runners and orchestration logic",
              "Removes observability",
              "Increases complexity only",
            ],
            answer:
              "Simplifies building, testing, and integrating custom runners and orchestration logic",
            explanation:
              "SDKs accelerate development and standardize interactions with runner infrastructure.",
          },
          {
            id: 1340,
            question:
              "Which of the following best captures the runner's role in cost-aware execution?",
            options: [
              "Always pick the largest model",
              "Enforce model selection policies, token limits, and resource quotas per job to control cost",
              "Never measure cost",
              "Disable auditing",
            ],
            answer:
              "Enforce model selection policies, token limits, and resource quotas per job to control cost",
            explanation:
              "Runners can enforce constraints that keep costs predictable and within budget.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Medium",
    url: "/medium",
    description:
      "Conceptual and practical topics for Python / Agentic AI exams",
    topics: [
      {
        id: 201,
        name: "Streaming",
        description:
          "Real-time token streaming, partial outputs, incremental parsing, backpressure and client/server handling",
        mcqs: [
          {
            id: 2001,
            question:
              "What is 'token streaming' in the context of LLM responses?",
            options: [
              "Sending entire model weights gradually",
              "Delivering model-generated tokens incrementally to the client as they are produced",
              "Batch processing logs offline",
              "Streaming video of the model",
            ],
            answer:
              "Delivering model-generated tokens incrementally to the client as they are produced",
            explanation:
              "Token streaming sends tokens as they are generated for lower-latency incremental display.",
          },
          {
            id: 2002,
            question:
              "Which transport is commonly used for bidirectional real-time streaming?",
            options: ["SMTP", "WebSocket", "FTP", "SFTP"],
            answer: "WebSocket",
            explanation:
              "WebSockets support low-latency, bidirectional real-time messaging between client and server.",
          },
          {
            id: 2003,
            question:
              "What is a major benefit of streaming responses to users?",
            options: [
              "Higher bandwidth usage only",
              "Lower perceived latency and earlier partial results for users",
              "Guaranteed deterministic outputs",
              "Reduced need for caching",
            ],
            answer:
              "Lower perceived latency and earlier partial results for users",
            explanation:
              "Streaming shows partial answers quickly, improving user experience.",
          },
          {
            id: 2004,
            question:
              "Which pattern helps the client render partial output safely while streaming?",
            options: [
              "Render raw tokens without buffering",
              "Buffer and apply incremental parsing or progressive rendering with validation",
              "Ignore partial updates",
              "Always wait for full response",
            ],
            answer:
              "Buffer and apply incremental parsing or progressive rendering with validation",
            explanation:
              "Progressive rendering with validation avoids showing malformed or misleading partial text.",
          },
          {
            id: 2005,
            question: "What is 'backpressure' in streaming systems?",
            options: [
              "Increasing temperature on the model",
              "Mechanism to slow or stop the producer when the consumer cannot keep up",
              "Switching to a different tool",
              "A logging setting",
            ],
            answer:
              "Mechanism to slow or stop the producer when the consumer cannot keep up",
            explanation:
              "Backpressure prevents buffer exhaustion and maintains system stability.",
          },
          {
            id: 2006,
            question:
              "Which server-sent event (SSE) property is true compared to web sockets?",
            options: [
              "SSE is bidirectional",
              "SSE is unidirectional (server -> client) and uses HTTP",
              "SSE requires FTP",
              "SSE is only for binary streams",
            ],
            answer: "SSE is unidirectional (server -> client) and uses HTTP",
            explanation:
              "SSE sends server events over HTTP; it is simpler but not bidirectional like WebSockets.",
          },
          {
            id: 2007,
            question:
              "Why is incremental validation important when streaming structured output (e.g., JSON)?",
            options: [
              "To make streaming slower",
              "To ensure partial streams won't break parsers and to avoid exposing invalid data",
              "To increase token usage",
              "To disable tools",
            ],
            answer:
              "To ensure partial streams won't break parsers and to avoid exposing invalid data",
            explanation:
              "Validation prevents clients from trying to parse incomplete JSON and breaking UX.",
          },
          {
            id: 2008,
            question: "What is a streaming keepalive and why use it?",
            options: [
              "A logging option",
              "A periodic heartbeat to prevent idle connection closure by proxies",
              "Used to increase temperature",
              "A method to cache tokens",
            ],
            answer:
              "A periodic heartbeat to prevent idle connection closure by proxies",
            explanation:
              "Heartbeats keep connections healthy across intermediaries that may timeout idle streams.",
          },
          {
            id: 2009,
            question:
              "Which client strategy mitigates flicker when updating UI from a token stream?",
            options: [
              "Replace the whole DOM on every token",
              "Batch tokens into small chunks and update at moderate intervals",
              "Update only after full response",
              "Do nothing",
            ],
            answer:
              "Batch tokens into small chunks and update at moderate intervals",
            explanation:
              "Batching balances responsiveness and visual stability in the UI.",
          },
          {
            id: 2010,
            question:
              "What is the main risk of exposing raw streaming outputs without filters?",
            options: [
              "Faster responses",
              "Potential leak of unsafe or disallowed content before post-filtering",
              "Guaranteed accuracy",
              "Improved caching",
            ],
            answer:
              "Potential leak of unsafe or disallowed content before post-filtering",
            explanation:
              "Unfiltered streams may reveal unsafe content before moderation or guardrails run.",
          },
          {
            id: 2011,
            question:
              "Which technique reduces latency when streaming large generated documents?",
            options: [
              "Use smaller chunk sizes and send them as produced",
              "Send entire doc only",
              "Increase temperature",
              "Disable streaming",
            ],
            answer: "Use smaller chunk sizes and send them as produced",
            explanation:
              "Smaller chunks allow earlier display and incremental understanding by the user.",
          },
          {
            id: 2012,
            question:
              "What does 'early stopping' mean in a streaming generation context?",
            options: [
              "Stopping model training early",
              "Terminating generation before full completion based on a trigger (e.g., user cancel)",
              "Deleting logs",
              "Changing token bias",
            ],
            answer:
              "Terminating generation before full completion based on a trigger (e.g., user cancel)",
            explanation:
              "Early stopping supports user cancellation or other runtime controls to save compute and time.",
          },
          {
            id: 2013,
            question:
              "When streaming, why might you include token provenance metadata with chunks?",
            options: [
              "To increase token count",
              "To show source, confidence or tool that produced the chunk for transparency and verification",
              "To obfuscate content",
              "To change model architecture",
            ],
            answer:
              "To show source, confidence or tool that produced the chunk for transparency and verification",
            explanation:
              "Provenance helps users and downstream systems trust or verify streamed content.",
          },
          {
            id: 2014,
            question: "What is 'incremental parsing' of streamed text?",
            options: [
              "Parsing only after the complete stream ends",
              "Parsing partial chunks progressively as they arrive to update state or UI",
              "Delaying parsing indefinitely",
              "Converting tokens to binary only",
            ],
            answer:
              "Parsing partial chunks progressively as they arrive to update state or UI",
            explanation:
              "Incremental parsing processes partial data safely to produce intermediate results.",
          },
          {
            id: 2015,
            question:
              "Which design aids recoverability if a stream connection breaks?",
            options: [
              "No retry",
              "Resume tokens via offsets or sequence numbers and idempotent operations",
              "Always start a new session with no context",
              "Delete all progress",
            ],
            answer:
              "Resume tokens via offsets or sequence numbers and idempotent operations",
            explanation:
              "Resumable streams with offsets avoid redoing completed work or duplicating effects.",
          },
          {
            id: 2016,
            question:
              "How does streaming affect cost calculations for LLM usage?",
            options: [
              "Streaming always reduces cost dramatically",
              "Cost is still based on tokens generated/consumed; streaming changes UX not billing model typically",
              "Streaming changes CPU architecture",
              "Streaming removes storage charges",
            ],
            answer:
              "Cost is still based on tokens generated/consumed; streaming changes UX not billing model typically",
            explanation:
              "Billing usually counts tokens; streaming just alters delivery timing.",
          },
          {
            id: 2017,
            question:
              "Which security measure should be applied to streaming endpoints?",
            options: [
              "No auth for speed",
              "Authentication, authorization, TLS, and rate limiting",
              "Expose with public CORS *",
              "Only use HTTP",
            ],
            answer: "Authentication, authorization, TLS, and rate limiting",
            explanation:
              "Secure streaming endpoints with strong auth and encryption to protect data in transit.",
          },
          {
            id: 2018,
            question:
              "How should a server handle slow clients during streaming?",
            options: [
              "Ignore client speed and overflow buffers",
              "Apply backpressure, pause producing, or close connection if needed",
              "Send duplicate tokens",
              "Double temperature",
            ],
            answer:
              "Apply backpressure, pause producing, or close connection if needed",
            explanation:
              "Backpressure prevents resource exhaustion when clients can't keep up.",
          },
          {
            id: 2019,
            question:
              "In streaming audio or speech, which additional step is often necessary compared to text tokens?",
            options: [
              "No difference",
              "Encoding/decoding audio frames and possibly real-time synthesis or ASR integration",
              "Only change temperature",
              "Reduce token limits",
            ],
            answer:
              "Encoding/decoding audio frames and possibly real-time synthesis or ASR integration",
            explanation:
              "Streaming audio requires audio codecs and real-time audio processing beyond text streaming.",
          },
          {
            id: 2020,
            question:
              "What is 'progressive enhancement' for streamed content consumer UX?",
            options: [
              "Render minimal viable content first and enhance as more tokens arrive",
              "Wait for full content only",
              "Disable streaming",
              "Always show raw debugging info",
            ],
            answer:
              "Render minimal viable content first and enhance as more tokens arrive",
            explanation:
              "Progressive enhancement improves perceived speed by showing useful partial info early.",
          },
          {
            id: 2021,
            question: "Which logging practice helps debug streaming flows?",
            options: [
              "No logs to save space",
              "Record chunk sequence numbers, latencies, and connection events",
              "Only log final output",
              "Only log errors without context",
            ],
            answer:
              "Record chunk sequence numbers, latencies, and connection events",
            explanation:
              "Chunk-level logs allow diagnosing ordering, loss, and latency issues in streaming.",
          },
          {
            id: 2022,
            question:
              "What is the typical approach to stream structured data like JSON safely?",
            options: [
              "Stream raw JSON tokens and let client parse partial JSON",
              "Stream newline-delimited JSON (NDJSON) or small complete JSON records per chunk",
              "Always use HTML",
              "Send XML only",
            ],
            answer:
              "Stream newline-delimited JSON (NDJSON) or small complete JSON records per chunk",
            explanation:
              "NDJSON or chunked complete objects avoids parsing incomplete JSON.",
          },
          {
            id: 2023,
            question:
              "Which mechanism helps ensure ordered delivery of streamed tokens over unreliable networks?",
            options: [
              "No ordering guarantee",
              "Sequence numbers and reordering buffers on the client side",
              "Increasing temperature",
              "Chunk compression only",
            ],
            answer:
              "Sequence numbers and reordering buffers on the client side",
            explanation:
              "Sequence numbers allow reassembly and correct ordering when packets arrive out-of-order.",
          },
          {
            id: 2024,
            question: "Why might you throttle stream output server-side?",
            options: [
              "To always increase latency",
              "To manage CPU/network load and pacing for clients and downstream services",
              "To increase token leaks",
              "To disable auth",
            ],
            answer:
              "To manage CPU/network load and pacing for clients and downstream services",
            explanation:
              "Throttling prevents bursts that overload clients or systems.",
          },
          {
            id: 2025,
            question:
              "How can a client validate the integrity of a completed streamed payload?",
            options: [
              "Never validate",
              "Use checksums, content-length validation, or cryptographic signatures",
              "Only check timestamps",
              "Only rely on sequence numbers without checksums",
            ],
            answer:
              "Use checksums, content-length validation, or cryptographic signatures",
            explanation:
              "Integrity checks ensure the payload was transmitted intact and unmodified.",
          },
          {
            id: 2026,
            question:
              "Which server-side pattern reduces latency for initial streaming tokens?",
            options: [
              "Eagerly flush initial partial results to the response stream before heavy post-processing",
              "Buffer everything until complete",
              "Compress only at the end",
              "Send metadata only",
            ],
            answer:
              "Eagerly flush initial partial results to the response stream before heavy post-processing",
            explanation:
              "Flushing early tokens gives users immediate feedback while background work continues.",
          },
          {
            id: 2027,
            question:
              "What is the effect of using very large chunk sizes for streaming?",
            options: [
              "Better perceived immediacy",
              "Higher latency until each chunk is ready and larger memory/bandwidth spikes",
              "Guaranteed lower cost",
              "No change in UX",
            ],
            answer:
              "Higher latency until each chunk is ready and larger memory/bandwidth spikes",
            explanation:
              "Large chunks delay first visible output and cause bursty resource usage.",
          },
          {
            id: 2028,
            question:
              "How should errors in the middle of a stream be communicated to the client?",
            options: [
              "Silently drop the connection",
              "Send an error chunk with structured error info and a finalization marker",
              "Continue streaming random data",
              "Only log server-side",
            ],
            answer:
              "Send an error chunk with structured error info and a finalization marker",
            explanation:
              "Structured error messages let the client handle or show appropriate error states.",
          },
          {
            id: 2029,
            question:
              "Which client-side strategy reduces false impressions of completion when partial content looks coherent?",
            options: [
              "Render partial content as final",
              "Show an explicit loading indicator until a final end-of-stream marker is received",
              "Never show partial content",
              "Automatically refresh the page",
            ],
            answer:
              "Show an explicit loading indicator until a final end-of-stream marker is received",
            explanation:
              "An explicit indicator avoids users mistaking partial output for final answers.",
          },
          {
            id: 2030,
            question: "What is 'stream multiplexing'?",
            options: [
              "Streaming only one client at a time",
              "Carrying multiple logical streams over a single physical connection (e.g., channels)",
              "Compressing tokens only",
              "Switching models mid-stream",
            ],
            answer:
              "Carrying multiple logical streams over a single physical connection (e.g., channels)",
            explanation:
              "Multiplexing allows efficient concurrent flows on one connection.",
          },
          {
            id: 2031,
            question:
              "Which trade-off exists when enabling streaming for all API calls?",
            options: [
              "No trade-offs at all",
              "Improved responsiveness vs increased complexity in clients and server resource management",
              "Guaranteed lower cost and complexity",
              "Makes testing unnecessary",
            ],
            answer:
              "Improved responsiveness vs increased complexity in clients and server resource management",
            explanation:
              "Streaming improves UX but adds engineering complexity for reliability and security.",
          },
          {
            id: 2032,
            question: "Why might you encrypt streamed chunks end-to-end?",
            options: [
              "To speed up transmission",
              "To protect sensitive streamed data across intermediaries",
              "To increase token count",
              "To disable backpressure",
            ],
            answer: "To protect sensitive streamed data across intermediaries",
            explanation:
              "End-to-end encryption preserves confidentiality across the whole path.",
          },
          {
            id: 2033,
            question:
              "What does 'chunk boundary alignment' refer to in streaming structured content?",
            options: [
              "Random chunk splitting",
              "Splitting chunks at safe boundaries to avoid breaking tokens or JSON objects",
              "Aligning chunks to the nearest byte",
              "Only splitting after full document",
            ],
            answer:
              "Splitting chunks at safe boundaries to avoid breaking tokens or JSON objects",
            explanation:
              "Boundary alignment avoids producing partial tokens or invalid structured fragments.",
          },
          {
            id: 2034,
            question:
              "Which monitoring metric is important specifically for streaming endpoints?",
            options: [
              "Average model temperature",
              "Connection duration, chunk latency, and chunk error rate",
              "Number of files on disk",
              "Model file size",
            ],
            answer: "Connection duration, chunk latency, and chunk error rate",
            explanation:
              "Streaming observability focuses on connection and per-chunk metrics for health.",
          },
          {
            id: 2035,
            question:
              "How can streaming interact with RAG (retrieval-augmented generation)?",
            options: [
              "They are incompatible",
              "Stream incremental retrieved passages and generate tokens progressively based on retrieved context",
              "Only use RAG after full generation",
              "Always disable retrieval while streaming",
            ],
            answer:
              "Stream incremental retrieved passages and generate tokens progressively based on retrieved context",
            explanation:
              "RAG can feed retrieved snippets progressively into the generator for streaming output grounded in sources.",
          },
          {
            id: 2036,
            question:
              "Which is an anti-pattern for streaming sensitive outputs?",
            options: [
              "Redacting sensitive fields before streaming",
              "Broadcasting raw user PII in early chunks without filtering",
              "Using TLS",
              "Applying rate limits",
            ],
            answer:
              "Broadcasting raw user PII in early chunks without filtering",
            explanation:
              "Streaming sensitive info before redaction risks privacy and compliance violations.",
          },
          {
            id: 2037,
            question:
              "What is a good approach to support mobile clients with streaming?",
            options: [
              "Assume unlimited bandwidth",
              "Provide adaptive chunk sizes, resume support, and efficient encoding for low-bandwidth conditions",
              "Only support desktop clients",
              "Send full payloads only",
            ],
            answer:
              "Provide adaptive chunk sizes, resume support, and efficient encoding for low-bandwidth conditions",
            explanation:
              "Mobile-aware streaming improves reliability under variable network conditions.",
          },
          {
            id: 2038,
            question:
              "How can you reduce subscription/connection churn for streaming APIs?",
            options: [
              "Forbid reconnection",
              "Support reconnection semantics, exponential backoff, and sticky sessions where appropriate",
              "Close connections after each chunk",
              "Disable heartbeats",
            ],
            answer:
              "Support reconnection semantics, exponential backoff, and sticky sessions where appropriate",
            explanation:
              "Graceful reconnection reduces churn and maintains session continuity.",
          },
          {
            id: 2039,
            question:
              "Which format is often preferred for streaming logs or events?",
            options: [
              "Binary blobs with no schema",
              "Newline-delimited JSON (NDJSON) for easy incremental parsing",
              "Large single JSON array only",
              "Plain text with no structure",
            ],
            answer:
              "Newline-delimited JSON (NDJSON) for easy incremental parsing",
            explanation:
              "NDJSON allows streaming individual structured events line-by-line safely.",
          },
          {
            id: 2040,
            question:
              "What is a best practice for versioning streaming protocols?",
            options: [
              "Never version",
              "Add explicit version identifiers and backward-compatible changes, with migration paths",
              "Change wire format silently",
              "Replace endpoints without notice",
            ],
            answer:
              "Add explicit version identifiers and backward-compatible changes, with migration paths",
            explanation:
              "Versioning avoids breaking existing clients when the protocol evolves.",
          },
          {
            id: 2041,
            question:
              "How do you handle authentication renewal for long-lived streaming connections?",
            options: [
              "Never renew",
              "Support token refresh or re-auth handshake without dropping user-visible state",
              "Close connection immediately on expiry without notice",
              "Store credentials in logs",
            ],
            answer:
              "Support token refresh or re-auth handshake without dropping user-visible state",
            explanation:
              "Graceful re-auth avoids user interruption while maintaining security.",
          },
          {
            id: 2042,
            question:
              "Which technique helps when streamed data must be consumed by multiple downstream processors?",
            options: [
              "Point the stream to only one consumer",
              "Use a pub/sub or fan-out architecture to distribute chunks reliably",
              "Send data directly to disk only",
              "Disable retries",
            ],
            answer:
              "Use a pub/sub or fan-out architecture to distribute chunks reliably",
            explanation:
              "Pub/sub supports scalable and decoupled consumption of streamed events.",
          },
          {
            id: 2043,
            question:
              "What testing approach is critical for streaming endpoints?",
            options: [
              "Only unit tests",
              "Integration tests that simulate connection drops, backpressure, and partial deliveries",
              "No tests required",
              "Only UI snapshot tests",
            ],
            answer:
              "Integration tests that simulate connection drops, backpressure, and partial deliveries",
            explanation:
              "Simulating real-world streaming conditions verifies robustness under faults.",
          },
          {
            id: 2044,
            question:
              "Which behavioral contract should you document for streamed APIs?",
            options: [
              "No documentation",
              "Chunk format, ordering guarantees, resume semantics, and error behaviors",
              "Only client UI guidelines",
              "Only server internals",
            ],
            answer:
              "Chunk format, ordering guarantees, resume semantics, and error behaviors",
            explanation:
              "Clear contracts allow clients to implement reliable parsing and recovery.",
          },
          {
            id: 2045,
            question: "How does streaming interact with tracing/observability?",
            options: [
              "They are unrelated",
              "Traces should include per-chunk spans, sequence IDs, and connection metadata for debugging",
              "Tracing should be disabled with streaming",
              "Only log start and end without chunk-level detail",
            ],
            answer:
              "Traces should include per-chunk spans, sequence IDs, and connection metadata for debugging",
            explanation:
              "Chunk-level tracing helps diagnose streaming-specific issues and performance.",
          },
          {
            id: 2046,
            question:
              "What is a reasonable default chunk size to balance latency and throughput (conceptually)?",
            options: [
              "1 token always",
              "Small groups of tokens or complete logical units (words/phrases) rather than very large blocks",
              "Entire document always",
              "Large binary blobs only",
            ],
            answer:
              "Small groups of tokens or complete logical units (words/phrases) rather than very large blocks",
            explanation:
              "Logical small chunks maximize responsiveness while keeping overhead manageable.",
          },
          {
            id: 2047,
            question:
              "Which approach helps ensure streaming doesn't leak future-planned outputs when partial generation is used for reasoning traces?",
            options: [
              "Stream full internal chain-of-thought",
              "Separate internal reasoning traces from user-visible output and avoid exposing internal future tokens",
              "Expose everything to client",
              "Disable logs",
            ],
            answer:
              "Separate internal reasoning traces from user-visible output and avoid exposing internal future tokens",
            explanation:
              "Keep internal deliberation private to prevent revealing intermediate or speculative steps.",
          },
          {
            id: 2048,
            question:
              "When combining streaming with offline persistence, what is important?",
            options: [
              "Never persist streamed chunks",
              "Persist in idempotent, append-only fashion with sequence numbers for replayability",
              "Overwrite previous chunks always",
              "Persist unsanitized raw tokens without access controls",
            ],
            answer:
              "Persist in idempotent, append-only fashion with sequence numbers for replayability",
            explanation:
              "Append-only sequences allow safe replay and recovery without duplication.",
          },
          {
            id: 2049,
            question:
              "Which UX affordance improves trust when content is streamed from multiple tools?",
            options: [
              "No attribution",
              "Show provenance/attribution labels indicating which tool or source produced each chunk",
              "Mix content without labels",
              "Always hide the source",
            ],
            answer:
              "Show provenance/attribution labels indicating which tool or source produced each chunk",
            explanation:
              "Attribution helps users evaluate reliability and follow up with sources if needed.",
          },
          {
            id: 2050,
            question:
              "Which combination of features most strongly supports robust streaming at scale?",
            options: [
              "No monitoring, no retries, no backpressure",
              "Backpressure, resumable streams, chunk-level tracing, authentication, and rate limiting",
              "Only large chunk sizes",
              "Only synchronous endpoints",
            ],
            answer:
              "Backpressure, resumable streams, chunk-level tracing, authentication, and rate limiting",
            explanation:
              "These features collectively ensure streaming reliability, security, and observability at scale.",
          },
        ],
      },
      {
        id: 202,
        name: "Guardrails",
        description:
          "Safety, validation, policy enforcement, redaction, and runtime constraints to keep agents safe and compliant",
        mcqs: [
          {
            id: 2051,
            question:
              "What is the core purpose of guardrails in agent systems?",
            options: [
              "To increase model temperature",
              "To enforce safety, correctness, and policy constraints on agent behavior",
              "To store more context",
              "To speed up training",
            ],
            answer:
              "To enforce safety, correctness, and policy constraints on agent behavior",
            explanation:
              "Guardrails place checks and rules to prevent unsafe, noncompliant, or incorrect agent actions.",
          },
          {
            id: 2052,
            question:
              "Which is a common implementation technique for guardrails?",
            options: [
              "Only changing model weights",
              "Input validation, output filters, policy checks, and permissioning",
              "Removing all logging",
              "Increasing token limits",
            ],
            answer:
              "Input validation, output filters, policy checks, and permissioning",
            explanation:
              "Guardrails combine multiple layers (validate, restrict, filter, authorize) to enforce constraints.",
          },
          {
            id: 2053,
            question:
              "What is the difference between pre-generation and post-generation guardrails?",
            options: [
              "Pre-generation changes hardware; post-generation deletes files",
              "Pre-generation validates or sanitizes inputs; post-generation filters or validates outputs before release",
              "They are identical",
              "Only post-generation runs in prod",
            ],
            answer:
              "Pre-generation validates or sanitizes inputs; post-generation filters or validates outputs before release",
            explanation:
              "Pre- and post- checks act at different points: before model call and after output generation.",
          },
          {
            id: 2054,
            question:
              "Which guardrail helps prevent leaking of secrets in logs or outputs?",
            options: [
              "Increasing top_k",
              "PII detection and redaction before logging or returning outputs",
              "Adding more context",
              "Turning off authentication",
            ],
            answer:
              "PII detection and redaction before logging or returning outputs",
            explanation:
              "Redacting sensitive fields reduces risk of exposing secrets in logs or user responses.",
          },
          {
            id: 2055,
            question: "What does 'fail-closed' behavior mean for a guardrail?",
            options: [
              "Allow everything on error",
              "If a guardrail fails, block the action and do not proceed",
              "Always proceed regardless of checks",
              "Log and continue silently",
            ],
            answer: "If a guardrail fails, block the action and do not proceed",
            explanation:
              "Fail-closed prioritizes safety by preventing operations when checks fail.",
          },
          {
            id: 2056,
            question: "What is 'fail-open' and why can it be risky?",
            options: [
              "Always safe",
              "Allow action if guardrail check cannot be evaluated; risky because unsafe actions may proceed",
              "Automatically retry checks",
              "Never used in production",
            ],
            answer:
              "Allow action if guardrail check cannot be evaluated; risky because unsafe actions may proceed",
            explanation:
              "Fail-open increases availability but may bypass safety checks under failures.",
          },
          {
            id: 2057,
            question:
              "Which mechanism enforces who can call dangerous tools or actions?",
            options: [
              "Top_k tuning",
              "Role-based access control (RBAC) and permissioning",
              "Model pruning",
              "Increasing temperature",
            ],
            answer: "Role-based access control (RBAC) and permissioning",
            explanation:
              "RBAC restricts capabilities to authorized agents or users, enforcing least privilege.",
          },
          {
            id: 2058,
            question:
              "What is the role of policy engines in guardrail systems?",
            options: [
              "To compress tokens",
              "To evaluate complex rules and decisions (allow/deny/transform) at runtime",
              "To change model architecture",
              "To cache outputs",
            ],
            answer:
              "To evaluate complex rules and decisions (allow/deny/transform) at runtime",
            explanation:
              "Policy engines centralize rule evaluation for consistent enforcement across calls.",
          },
          {
            id: 2059,
            question: "Which is an example of an output guardrail?",
            options: [
              "Input schema validation only",
              "Applying content filters or classifiers to generated text before sending to users",
              "Increasing model size",
              "Decreasing concurrency limits",
            ],
            answer:
              "Applying content filters or classifiers to generated text before sending to users",
            explanation:
              "Output filters detect disallowed content and prevent it from being returned.",
          },
          {
            id: 2060,
            question: "What is 'dynamic guardrails'?",
            options: [
              "Guardrails that never change",
              "Rules that can be updated at runtime without redeploying models, e.g., policy changes or new blocklists",
              "Guardrails embedded in model weights only",
              "Static logging settings",
            ],
            answer:
              "Rules that can be updated at runtime without redeploying models, e.g., policy changes or new blocklists",
            explanation:
              "Dynamic guardrails allow operators to respond fast to new threats or policy updates.",
          },
          {
            id: 2061,
            question: "How do guardrails help with regulatory compliance?",
            options: [
              "They replace legal advice",
              "By enforcing data residency, consent checks, and retention policies automatically",
              "They increase hallucinations",
              "They change model temperatures",
            ],
            answer:
              "By enforcing data residency, consent checks, and retention policies automatically",
            explanation:
              "Guardrails operationalize compliance requirements at runtime to reduce manual errors.",
          },
          {
            id: 2062,
            question:
              "Which approach reduces false positives in content moderation guardrails?",
            options: [
              "Always block anything vaguely risky",
              "Use ensemble of classifiers, threshold tuning, and human review for edge cases",
              "Only rely on a single brittle regex",
              "Never update rules",
            ],
            answer:
              "Use ensemble of classifiers, threshold tuning, and human review for edge cases",
            explanation:
              "Combining methods and human-in-the-loop reduces overly aggressive blocking while keeping safety.",
          },
          {
            id: 2063,
            question:
              "Why include provenance metadata as a guardrail ingredient?",
            options: [
              "To increase token length",
              "To track data sources and context for auditing and dispute resolution",
              "To obfuscate outputs",
              "To reduce latency",
            ],
            answer:
              "To track data sources and context for auditing and dispute resolution",
            explanation:
              "Provenance supports accountability and helps verify claims or trace issues.",
          },
          {
            id: 2064,
            question:
              "Which guardrail helps ensure outputs adhere to a machine-readable contract?",
            options: [
              "Temperature tuning",
              "Schema enforcement / structured output validation",
              "Increasing top_k",
              "Reducing context window",
            ],
            answer: "Schema enforcement / structured output validation",
            explanation:
              "Schemas validate that outputs match expected structures before being consumed downstream.",
          },
          {
            id: 2065,
            question:
              "What is a common strategy when a guardrail detects a high-risk output?",
            options: [
              "Return it immediately",
              "Block the output, redact sensitive parts, or escalate to human review",
              "Increase max_tokens",
              "Disable tracing",
            ],
            answer:
              "Block the output, redact sensitive parts, or escalate to human review",
            explanation:
              "High-risk detections trigger safe responses such as blocking or human escalation.",
          },
          {
            id: 2066,
            question:
              "How can guardrails help prevent 'prompt injection' attacks?",
            options: [
              "By trusting all user input",
              "Sanitizing inputs, validating instruction sources, and isolating system prompts from user data",
              "Allowing arbitrary tool calls",
              "Increasing temperature",
            ],
            answer:
              "Sanitizing inputs, validating instruction sources, and isolating system prompts from user data",
            explanation:
              "Prompt injection is mitigated by sanitization and keeping critical prompts separate from user data.",
          },
          {
            id: 2067,
            question:
              "Which guardrail is essential to protect privacy when calling third-party tools?",
            options: [
              "Sending full user context always",
              "Context filtering and redaction to remove PII before external calls",
              "Increasing top_k",
              "Using larger models",
            ],
            answer:
              "Context filtering and redaction to remove PII before external calls",
            explanation:
              "Redaction prevents leaking sensitive user data to third-party services.",
          },
          {
            id: 2068,
            question: "What is 'graceful degradation' as a guardrail practice?",
            options: [
              "Dropping all services abruptly",
              "Providing reduced or read-only functionality instead of failing completely when a risk or failure occurs",
              "Always allowing all operations",
              "Turning off logging",
            ],
            answer:
              "Providing reduced or read-only functionality instead of failing completely when a risk or failure occurs",
            explanation:
              "Graceful degradation maintains useful behavior while minimizing risk during failures.",
          },
          {
            id: 2069,
            question: "Why should guardrail decisions be auditable?",
            options: [
              "To hide decisions",
              "To provide traceability for incidents, compliance evidence, and debugging",
              "To slow the system only",
              "To increase token usage",
            ],
            answer:
              "To provide traceability for incidents, compliance evidence, and debugging",
            explanation:
              "Auditable guardrail logs show what checks ran and why actions were allowed or blocked.",
          },
          {
            id: 2070,
            question:
              "Which of the following is part of a robust guardrail testing strategy?",
            options: [
              "No tests at all",
              "Unit tests, adversarial tests, and integration tests including edge-case malicious inputs",
              "Only manual production checks",
              "Only UI tests",
            ],
            answer:
              "Unit tests, adversarial tests, and integration tests including edge-case malicious inputs",
            explanation:
              "Comprehensive testing including adversarial scenarios ensures guardrails perform under attack.",
          },
          {
            id: 2071,
            question:
              "What is the role of human-in-the-loop (HITL) within guardrails?",
            options: [
              "To remove all automation",
              "To review and approve edge cases and high-risk actions detected by automated guardrails",
              "To log more data only",
              "To increase randomness",
            ],
            answer:
              "To review and approve edge cases and high-risk actions detected by automated guardrails",
            explanation:
              "HITL provides human judgment for ambiguous or high-stakes decisions the system cannot auto-resolve safely.",
          },
          {
            id: 2072,
            question:
              "Which is a benefit of multi-layered guardrails (defense in depth)?",
            options: [
              "One layer is enough always",
              "If one layer fails, others can still catch policy violations, increasing overall safety",
              "Increases randomness",
              "Reduces observability",
            ],
            answer:
              "If one layer fails, others can still catch policy violations, increasing overall safety",
            explanation:
              "Multiple independent checks reduce single points of failure for safety enforcement.",
          },
          {
            id: 2073,
            question:
              "What is an example of an automated transformation guardrail?",
            options: [
              "Increasing model size",
              "Automatic redaction of account numbers in outputs before returning to users",
              "Deleting context randomly",
              "Disabling tools",
            ],
            answer:
              "Automatic redaction of account numbers in outputs before returning to users",
            explanation:
              "Transformations alter outputs to remove or mask disallowed content automatically.",
          },
          {
            id: 2074,
            question: "Why is rate limiting considered a guardrail?",
            options: [
              "It changes model training",
              "It prevents abuse and reduces risk of resource exhaustion or amplification attacks",
              "It only improves UX",
              "It increases token leakage",
            ],
            answer:
              "It prevents abuse and reduces risk of resource exhaustion or amplification attacks",
            explanation:
              "Rate limits curb excessive requests that could be malicious or destabilizing.",
          },
          {
            id: 2075,
            question:
              "Which approach helps maintain transparency when guardrails modify outputs?",
            options: [
              "Never notify users",
              "Annotate or inform users when content was redacted, blocked, or transformed and why",
              "Hide provenance always",
              "Log silently only",
            ],
            answer:
              "Annotate or inform users when content was redacted, blocked, or transformed and why",
            explanation:
              "User-facing transparency builds trust and helps users understand restrictions or omissions.",
          },
          {
            id: 2076,
            question: "What is policy scoping for guardrails?",
            options: [
              "Applying the same rules to all contexts always",
              "Defining which policies apply to which agents, tools, or data domains",
              "Changing model temperature",
              "Only used in testing",
            ],
            answer:
              "Defining which policies apply to which agents, tools, or data domains",
            explanation:
              "Scoping ensures relevant rules are applied appropriately without overblocking unrelated flows.",
          },
          {
            id: 2077,
            question:
              "Which tool can be used to detect toxic or hateful content as a guardrail?",
            options: [
              "A content moderation classifier or specialized toxicity model",
              "A random number generator",
              "A simple timer",
              "A color picker",
            ],
            answer:
              "A content moderation classifier or specialized toxicity model",
            explanation:
              "Moderation models detect harmful content and trigger blocking or escalation policies.",
          },
          {
            id: 2078,
            question: "How do 'soft' guardrails differ from 'hard' guardrails?",
            options: [
              "Soft guardrails block everything, hard guardrails log",
              "Soft guardrails warn or apply mitigations; hard guardrails strictly block or deny actions",
              "They are the same",
              "Only hard guardrails can be updated",
            ],
            answer:
              "Soft guardrails warn or apply mitigations; hard guardrails strictly block or deny actions",
            explanation:
              "Soft measures provide guidance or fallbacks; hard rules enforce strict prohibitions.",
          },
          {
            id: 2079,
            question:
              "What is the advantage of using both rule-based and ML-based guardrails?",
            options: [
              "No advantage",
              "Rules cover explicit known cases; ML generalizes to novel or fuzzy patterns, together improving coverage",
              "Only ML-based is needed always",
              "Only rules are ever useful",
            ],
            answer:
              "Rules cover explicit known cases; ML generalizes to novel or fuzzy patterns, together improving coverage",
            explanation:
              "Combining deterministic rules and probabilistic ML yields robust and flexible protection.",
          },
          {
            id: 2080,
            question:
              "Which metric is useful to monitor guardrail effectiveness?",
            options: [
              "Model temperature only",
              "False positive/negative rates, blocked action counts, and escalations to human review",
              "Number of tokens generated",
              "UI color usage",
            ],
            answer:
              "False positive/negative rates, blocked action counts, and escalations to human review",
            explanation:
              "These metrics show whether guardrails are blocking correctly or overblocking legitimate actions.",
          },
          {
            id: 2081,
            question:
              "Why implement a 'consent check' as a guardrail before data use?",
            options: [
              "Consent is not necessary",
              "To ensure legal/ethical permission exists before processing or sharing user data",
              "To increase token usage",
              "To disable tracing",
            ],
            answer:
              "To ensure legal/ethical permission exists before processing or sharing user data",
            explanation:
              "Consent checks prevent unauthorized handling of personal or protected data.",
          },
          {
            id: 2082,
            question:
              "Which is a good practice when a new guardrail rule is added?",
            options: [
              "Enable it globally immediately without testing",
              "Deploy to staging, run tests (including adversarial), and roll out gradually with monitoring",
              "Disable observability",
              "Only document internally",
            ],
            answer:
              "Deploy to staging, run tests (including adversarial), and roll out gradually with monitoring",
            explanation:
              "Careful rollout avoids unintended blocking and ensures rule effectiveness in production.",
          },
          {
            id: 2083,
            question: "What is 'policy drift' in guardrails?",
            options: [
              "A permanent configuration",
              "When guardrail behavior becomes outdated relative to evolving threats or business rules",
              "Increasing model randomness",
              "A UI bug",
            ],
            answer:
              "When guardrail behavior becomes outdated relative to evolving threats or business rules",
            explanation:
              "Drift requires policy updates to stay effective as risks and requirements change.",
          },
          {
            id: 2084,
            question:
              "Which of these is essential for guardrail observability?",
            options: [
              "Only final outputs",
              "Structured logs of decisions, reasons, and actions taken by guardrails",
              "Only system uptime",
              "Only error codes",
            ],
            answer:
              "Structured logs of decisions, reasons, and actions taken by guardrails",
            explanation:
              "Detailed structured logs enable auditing, debugging, and measuring guardrail performance.",
          },
          {
            id: 2085,
            question: "How do you handle conflicting guardrail rules?",
            options: [
              "Ignore conflicts",
              "Define rule priority and conflict resolution policies to determine which rule wins",
              "Always apply both blindly",
              "Remove observability",
            ],
            answer:
              "Define rule priority and conflict resolution policies to determine which rule wins",
            explanation:
              "Explicit priorities prevent ambiguous outcomes when rules overlap or contradict.",
          },
          {
            id: 2086,
            question: "Why include simulation/dry-run mode for guardrails?",
            options: [
              "To deploy untested rules",
              "To simulate impact of rules on traffic without enforcing them, enabling safe evaluation",
              "To disable logging",
              "To increase temperature",
            ],
            answer:
              "To simulate impact of rules on traffic without enforcing them, enabling safe evaluation",
            explanation:
              "Dry-run helps estimate false positives and system impacts prior to enforcement.",
          },
          {
            id: 2087,
            question:
              "Which guardrail practice helps reduce accidental exposure when sharing logs?",
            options: [
              "Share all logs publicly",
              "Mask/redact sensitive fields and apply least-privilege access to logs",
              "Store logs without retention policy",
              "Disable log rotation",
            ],
            answer:
              "Mask/redact sensitive fields and apply least-privilege access to logs",
            explanation:
              "Redaction and controlled access protect privacy and limit exposure of secrets.",
          },
          {
            id: 2088,
            question: "What is 'policy-as-code' used for in guardrails?",
            options: [
              "To hide rules",
              "To define guardrail policies in version-controlled, testable code for reproducibility and review",
              "To increase UI complexity",
              "To disable guardrails",
            ],
            answer:
              "To define guardrail policies in version-controlled, testable code for reproducibility and review",
            explanation:
              "Policy-as-code enables automated testing, auditing, and safe rollouts of rules.",
          },
          {
            id: 2089,
            question:
              "Which approach helps tune guardrails to reduce user friction?",
            options: [
              "Always block anything remotely risky",
              "Monitor user impact, A/B test rule thresholds, and add human review for ambiguous blocks",
              "Never measure user impact",
              "Only use strict static rules",
            ],
            answer:
              "Monitor user impact, A/B test rule thresholds, and add human review for ambiguous blocks",
            explanation:
              "Data-driven tuning and human oversight find the right balance between safety and usability.",
          },
          {
            id: 2090,
            question:
              "What is the relationship between guardrails and model monitoring?",
            options: [
              "They are unrelated",
              "Monitoring feeds alerts and metrics to detect guardrail bypasses, drift, or failures",
              "Monitoring replaces guardrails",
              "Guardrails disable monitoring",
            ],
            answer:
              "Monitoring feeds alerts and metrics to detect guardrail bypasses, drift, or failures",
            explanation:
              "Observability informs whether guardrails are working and when to update them.",
          },
          {
            id: 2091,
            question:
              "Which guardrail helps prevent an agent from taking unauthorized destructive actions?",
            options: [
              "Allow all actions",
              "Action permission checks, dry-run modes, and require explicit human approval for destructive ops",
              "Increase top_k",
              "Disable logging",
            ],
            answer:
              "Action permission checks, dry-run modes, and require explicit human approval for destructive ops",
            explanation:
              "Protecting destructive capabilities requires strict approvals and safeguards.",
          },
          {
            id: 2092,
            question:
              "How do you measure whether guardrails are causing unacceptable false negatives?",
            options: [
              "Never measure",
              "Track incidents where harmful outputs reached users and perform root-cause analysis",
              "Only check logs for uptime",
              "Only monitor model temperature",
            ],
            answer:
              "Track incidents where harmful outputs reached users and perform root-cause analysis",
            explanation:
              "Incidents show guardrail misses and inform improvements to detection and enforcement.",
          },
          {
            id: 2093,
            question:
              "What is the significance of RBAC with dynamic guardrail policies?",
            options: [
              "RBAC is only for UI",
              "Combining RBAC with dynamic policies allows targeted rule updates and scoped enforcement by role",
              "RBAC disables guardrails",
              "No significance",
            ],
            answer:
              "Combining RBAC with dynamic policies allows targeted rule updates and scoped enforcement by role",
            explanation:
              "Scoped policy updates let admins enable different protections for different user groups safely.",
          },
          {
            id: 2094,
            question:
              "Which is a safe response when a guardrail classifier is uncertain?",
            options: [
              "Proceed without checks",
              "Escalate to human review or apply conservative fallback (e.g., redact or refuse)",
              "Always allow",
              "Always block without logging",
            ],
            answer:
              "Escalate to human review or apply conservative fallback (e.g., redact or refuse)",
            explanation:
              "Uncertainty should trigger conservative handling or human judgement to avoid harm.",
          },
          {
            id: 2095,
            question: "Why is versioning guardrail rules important?",
            options: [
              "To make them immutable forever",
              "To track changes, enable rollbacks, and audit policy evolution",
              "To break production frequently",
              "To increase complexity unnecessarily",
            ],
            answer:
              "To track changes, enable rollbacks, and audit policy evolution",
            explanation:
              "Versioning provides traceability and safe management of evolving guardrails.",
          },
          {
            id: 2096,
            question:
              "Which of these improves robustness of guardrails against adversarial inputs?",
            options: [
              "Never updating rules",
              "Adversarial testing, fuzzing inputs, and continuous retraining/tuning of detectors",
              "Only using static regexes",
              "Disabling monitoring",
            ],
            answer:
              "Adversarial testing, fuzzing inputs, and continuous retraining/tuning of detectors",
            explanation:
              "Proactive adversarial testing reveals weaknesses and helps harden guardrails.",
          },
          {
            id: 2097,
            question:
              "What role do human reviewers play in guardrail feedback loops?",
            options: [
              "They are unnecessary",
              "They label edge cases, correct false positives/negatives, and provide training data to improve detectors",
              "Only write documentation",
              "Only change model size",
            ],
            answer:
              "They label edge cases, correct false positives/negatives, and provide training data to improve detectors",
            explanation:
              "Human feedback refines automated systems and helps maintain accuracy in changing conditions.",
          },
          {
            id: 2098,
            question:
              "Which practice helps avoid overblocking legitimate content while guarding against abuse?",
            options: [
              "High thresholds with no review",
              "Progressive enforcement: warn, log, soft-block, then hard-block with HITL for ambiguous cases",
              "Always hard-block everything",
              "Never block",
            ],
            answer:
              "Progressive enforcement: warn, log, soft-block, then hard-block with HITL for ambiguous cases",
            explanation:
              "Gradual responses minimize user friction and provide opportunities to correct errors before hard blocking.",
          },
          {
            id: 2099,
            question:
              "What is the primary benefit of centralized guardrail management?",
            options: [
              "Reduced control",
              "Consistent policy application, single point for updates, and unified auditing",
              "Only increases latency",
              "Removes need for testing",
            ],
            answer:
              "Consistent policy application, single point for updates, and unified auditing",
            explanation:
              "Centralization ensures uniform enforcement and simpler governance of rules.",
          },
          {
            id: 2100,
            question:
              "Which combination best summarizes a robust guardrail system?",
            options: [
              "Single static rule with no monitoring",
              "Multi-layer checks (pre/post), dynamic policies, RBAC, auditing, HITL, and adversarial testing",
              "Only model-based detection without rules",
              "No guardrails at all",
            ],
            answer:
              "Multi-layer checks (pre/post), dynamic policies, RBAC, auditing, HITL, and adversarial testing",
            explanation:
              "A comprehensive guardrail system combines multiple techniques and processes to ensure safety, compliance, and adaptability.",
          },
        ],
      },
      {
        id: 203,
        name: "Hooks",
        description:
          "Agent-level and Run-level hooks: lifecycle callbacks, instrumentation, side-effects, and best practices",
        mcqs: [
          {
            id: 2101,
            question: "What is a 'hook' in the context of agent frameworks?",
            options: [
              "A UI widget",
              "A callback executed at specific lifecycle events to extend behavior",
              "A model hyperparameter",
              "A logging format only",
            ],
            answer:
              "A callback executed at specific lifecycle events to extend behavior",
            explanation:
              "Hooks let developers run custom code at defined points like before/after runs or tool calls.",
          },
          {
            id: 2102,
            question: "Which is an example of a run-level hook?",
            options: [
              "on_tool_call",
              "before_run",
              "name_override",
              "max_tokens",
            ],
            answer: "before_run",
            explanation:
              "Run-level hooks operate at the start/end of a run, e.g., before_run, after_run.",
          },
          {
            id: 2103,
            question: "Which is an example of an agent-level hook?",
            options: [
              "before_tool_call",
              "after_run",
              "on_agent_init",
              "max_turns",
            ],
            answer: "on_agent_init",
            explanation:
              "Agent-level hooks relate to agent lifecycle events such as initialization or shutdown.",
          },
          {
            id: 2104,
            question: "What is a common use of on_tool_call hooks?",
            options: [
              "Change model temperature globally",
              "Log inputs/outputs, validate parameters, or modify inputs before invocation",
              "Increase token limits",
              "Rename tools permanently",
            ],
            answer:
              "Log inputs/outputs, validate parameters, or modify inputs before invocation",
            explanation:
              "on_tool_call hooks allow instrumentation, validation, and transformations around tool usage.",
          },
          {
            id: 2105,
            question:
              "Why should hooks avoid long blocking operations in production?",
            options: [
              "To increase cost",
              "Because they can delay or block the main run, harming latency and throughput",
              "To change tool names",
              "To disable tracing",
            ],
            answer:
              "Because they can delay or block the main run, harming latency and throughput",
            explanation:
              "Long-running hook code can degrade performance; prefer async background processing or queues.",
          },
          {
            id: 2106,
            question:
              "Which hook type is best for cleanup tasks after a run completes?",
            options: [
              "before_run",
              "after_run",
              "on_tool_call",
              "on_agent_init",
            ],
            answer: "after_run",
            explanation:
              "after_run is ideal to release resources, flush logs, or persist results after execution.",
          },
          {
            id: 2107,
            question: "How can hooks contribute to observability?",
            options: [
              "By disabling logs",
              "Emitting structured events, traces, and metrics at lifecycle points",
              "Only by changing configurations",
              "By corrupting traces",
            ],
            answer:
              "Emitting structured events, traces, and metrics at lifecycle points",
            explanation:
              "Hooks are a natural place to emit telemetry for debugging and monitoring.",
          },
          {
            id: 2108,
            question:
              "What is a safety consideration when hooks access secrets?",
            options: [
              "Always log them fully",
              "Avoid logging secrets, use secret managers, and minimize exposure in hooks",
              "Embed them in code comments",
              "Send them to clients",
            ],
            answer:
              "Avoid logging secrets, use secret managers, and minimize exposure in hooks",
            explanation:
              "Hooks handling credentials must follow secret management best practices and avoid leaks.",
          },
          {
            id: 2109,
            question: "Which hook pattern helps in testing hook behavior?",
            options: [
              "No testing",
              "Mock external dependencies and run hooks in isolation with unit tests",
              "Only manual testing in production",
              "Always run hooks asynchronously without tests",
            ],
            answer:
              "Mock external dependencies and run hooks in isolation with unit tests",
            explanation:
              "Isolated unit tests with mocks ensure hooks behave correctly without external side-effects.",
          },
          {
            id: 2110,
            question: "What advantage do asynchronous hooks offer?",
            options: [
              "They block the run always",
              "They allow background work without blocking the main execution flow",
              "They reduce security",
              "They always increase cost",
            ],
            answer:
              "They allow background work without blocking the main execution flow",
            explanation:
              "Async hooks can perform logging, telemetry, or notifications without holding up the run.",
          },
          {
            id: 2111,
            question:
              "Which hook should validate inputs before the agent processes them?",
            options: [
              "after_run",
              "before_run or before_tool_call",
              "on_agent_shutdown",
              "tracing only",
            ],
            answer: "before_run or before_tool_call",
            explanation:
              "Validation before processing prevents downstream errors and security issues.",
          },
          {
            id: 2112,
            question:
              "What is a risk of allowing hooks to modify run state arbitrarily?",
            options: [
              "Improved determinism",
              "Unpredictable behavior, harder to reason about, and more difficult to test",
              "Guaranteed speedup",
              "Reduction in logs",
            ],
            answer:
              "Unpredictable behavior, harder to reason about, and more difficult to test",
            explanation:
              "Mutating shared state in hooks increases coupling and can introduce subtle bugs.",
          },
          {
            id: 2113,
            question:
              "Why is idempotency important for hooks that may be retried?",
            options: [
              "Not important",
              "To ensure repeated execution does not cause duplicate side-effects",
              "To increase randomness",
              "To change model settings",
            ],
            answer:
              "To ensure repeated execution does not cause duplicate side-effects",
            explanation:
              "Idempotent hooks make retries safe by avoiding repeated actions like double notifications or charges.",
          },
          {
            id: 2114,
            question:
              "Which hook is appropriate to implement access checks before calling a tool?",
            options: [
              "on_agent_shutdown",
              "before_tool_call",
              "after_run",
              "on_agent_init only",
            ],
            answer: "before_tool_call",
            explanation:
              "before_tool_call can verify permissions and abort tool invocation if unauthorized.",
          },
          {
            id: 2115,
            question: "How can hooks be versioned safely in production?",
            options: [
              "Replace them without tests",
              "Use feature flags, semantic versioning, and staged rollouts with monitoring",
              "Never update hooks",
              "Hardcode changes to all nodes simultaneously",
            ],
            answer:
              "Use feature flags, semantic versioning, and staged rollouts with monitoring",
            explanation:
              "Controlled rollouts reduce risk and allow rollback if new hooks cause issues.",
          },
          {
            id: 2116,
            question: "What is a practical use of an on_error hook?",
            options: [
              "Ignore errors",
              "Record error context, perform cleanup, send alerts, or trigger fallback logic",
              "Always escalate to user without context",
              "Change model temperature",
            ],
            answer:
              "Record error context, perform cleanup, send alerts, or trigger fallback logic",
            explanation:
              "on_error hooks centralize error handling and ensure consistent responses to failures.",
          },
          {
            id: 2117,
            question:
              "Which testing technique validates hook order dependencies?",
            options: [
              "UI snapshot tests only",
              "Integration tests that assert hooks run in expected sequence and produce correct combined effects",
              "No tests",
              "Only manual debugging",
            ],
            answer:
              "Integration tests that assert hooks run in expected sequence and produce correct combined effects",
            explanation:
              "Integration tests reveal ordering issues and interactions between multiple hooks.",
          },
          {
            id: 2118,
            question:
              "Why is it recommended to limit privileges of hook execution contexts?",
            options: [
              "To reduce development speed",
              "To minimize blast radius if a hook is compromised or buggy",
              "To always fail hooks",
              "To disable auditing",
            ],
            answer:
              "To minimize blast radius if a hook is compromised or buggy",
            explanation:
              "Restricting privileges increases security and reduces potential damage from hook failures.",
          },
          {
            id: 2119,
            question:
              "Which hook is best for loading caches or warm resources at startup?",
            options: [
              "after_run",
              "on_agent_init or init_hook",
              "before_tool_call",
              "on_error only",
            ],
            answer: "on_agent_init or init_hook",
            explanation:
              "Initialization hooks prepare resources like caches or models before handling runs.",
          },
          {
            id: 2120,
            question:
              "What is a good practice for instrumenting hooks to avoid noisy logs?",
            options: [
              "Log everything at debug verbosity by default",
              "Log structured events with configurable verbosity and sampling for high-frequency hooks",
              "Never log",
              "Always log secrets",
            ],
            answer:
              "Log structured events with configurable verbosity and sampling for high-frequency hooks",
            explanation:
              "Sampling and structured logs prevent overwhelming downstream logging systems while preserving signal.",
          },
          {
            id: 2121,
            question:
              "How can hooks be used to implement A/B testing behavior at runtime?",
            options: [
              "They cannot",
              "Use hooks to select variants, record metrics, and branch logic for experiments",
              "Only change model weights",
              "Only via static configs",
            ],
            answer:
              "Use hooks to select variants, record metrics, and branch logic for experiments",
            explanation:
              "Hooks can choose experiment branches and emit metrics for analysis during runs.",
          },
          {
            id: 2122,
            question:
              "Which security control prevents unauthorized modification of hooks?",
            options: [
              "No control",
              "Store hook code/config in version control with CI checks and restrict deploy permissions",
              "Allow write access to everyone",
              "Only local editing",
            ],
            answer:
              "Store hook code/config in version control with CI checks and restrict deploy permissions",
            explanation:
              "Version control plus restricted deployment ensures integrity and auditability of hook changes.",
          },
          {
            id: 2123,
            question:
              "What is a recommended pattern for hooks that call external services?",
            options: [
              "Call them synchronously without timeouts",
              "Use timeouts, retries with backoff, and circuit-breakers to avoid blocking runs",
              "Always block the run indefinitely",
              "Log secrets from services",
            ],
            answer:
              "Use timeouts, retries with backoff, and circuit-breakers to avoid blocking runs",
            explanation:
              "Resilience patterns make hook calls robust and prevent cascading failures.",
          },
          {
            id: 2124,
            question:
              "Why should hooks avoid heavy CPU-bound work in the main thread?",
            options: [
              "Because CPU is unlimited",
              "To prevent slowing or blocking the agent; offload heavy work to worker pools or background jobs",
              "To increase temperature",
              "To reduce logs",
            ],
            answer:
              "To prevent slowing or blocking the agent; offload heavy work to worker pools or background jobs",
            explanation:
              "Background processing keeps the main run responsive and scalable.",
          },
          {
            id: 2125,
            question:
              "Which hook lifecycle event is best to emit final audit records?",
            options: [
              "before_run",
              "after_run",
              "on_tool_call only",
              "on_agent_init",
            ],
            answer: "after_run",
            explanation:
              "after_run is when the run outcome is known and auditing data can be finalized.",
          },
          {
            id: 2126,
            question:
              "How do hooks interact with transactionality when runs require atomic changes?",
            options: [
              "Hooks always break transactions",
              "Hooks should integrate with transaction contexts or use compensating actions if not atomic",
              "Never use transactions",
              "Always commit before hooks",
            ],
            answer:
              "Hooks should integrate with transaction contexts or use compensating actions if not atomic",
            explanation:
              "Ensure hooks either run inside transactions or implement rollbacks/compensation for consistency.",
          },
          {
            id: 2127,
            question:
              "Which hook would be useful to enforce request quotas per user?",
            options: [
              "on_agent_shutdown",
              "before_run or before_tool_call to check and decrement quota counters",
              "after_run only",
              "on_agent_init only",
            ],
            answer:
              "before_run or before_tool_call to check and decrement quota counters",
            explanation:
              "Quota checks should run before performing actions to prevent overuse of resources.",
          },
          {
            id: 2128,
            question:
              "What is a benefit of exposing hook metrics to dashboards?",
            options: [
              "No benefit",
              "Visibility into hook failures, latency, and side effects for operators",
              "Hide issues from teams",
              "Only useful for developers offline",
            ],
            answer:
              "Visibility into hook failures, latency, and side effects for operators",
            explanation:
              "Dashboards help detect operational problems and guide remediation.",
          },
          {
            id: 2129,
            question:
              "Which hook should implement input schema validation for a tool?",
            options: [
              "after_run",
              "before_tool_call",
              "on_agent_init",
              "on_agent_shutdown",
            ],
            answer: "before_tool_call",
            explanation:
              "Validating inputs just before tool invocation prevents invalid or malicious requests from reaching tools.",
          },
          {
            id: 2130,
            question:
              "Why might you sandbox or restrict runtime environment for hook execution?",
            options: [
              "To make development harder",
              "To limit privileges and prevent hooks from performing unsafe operations",
              "To guarantee hooks can access all secrets",
              "To reduce observability",
            ],
            answer:
              "To limit privileges and prevent hooks from performing unsafe operations",
            explanation:
              "Sandboxing reduces attack surface and confines potential hook-induced harm.",
          },
          {
            id: 2131,
            question:
              "Which hook is useful to attach to for implementing metrics around tool usage counts?",
            options: [
              "on_agent_shutdown",
              "on_tool_call",
              "on_agent_init only",
              "after_run only",
            ],
            answer: "on_tool_call",
            explanation:
              "on_tool_call is invoked each time a tool is used, making it ideal to count invocations.",
          },
          {
            id: 2132,
            question:
              "What is the risk of having too many hooks that mutate inputs downstream?",
            options: [
              "Simpler code",
              "Increased complexity, unexpected transformations, and harder debugging",
              "Improved determinism",
              "Reduced latency always",
            ],
            answer:
              "Increased complexity, unexpected transformations, and harder debugging",
            explanation:
              "Numerous mutating hooks make data flow hard to follow and can introduce subtle bugs.",
          },
          {
            id: 2133,
            question:
              "How should hooks handle exceptions to avoid failing the whole run unexpectedly?",
            options: [
              "Let exceptions bubble up uncontrolled",
              "Catch and handle exceptions, log context, and decide on fallback or rethrow based on policy",
              "Always suppress without logging",
              "Restart the system",
            ],
            answer:
              "Catch and handle exceptions, log context, and decide on fallback or rethrow based on policy",
            explanation:
              "Controlled error handling enables safe recovery or escalation without silent failures.",
          },
          {
            id: 2134,
            question:
              "Which approach helps maintain backward compatibility for hook interfaces?",
            options: [
              "Change signatures frequently",
              "Use optional parameters, versioned hook endpoints, and deprecation warnings",
              "Remove old hooks immediately",
              "Never document hooks",
            ],
            answer:
              "Use optional parameters, versioned hook endpoints, and deprecation warnings",
            explanation:
              "Gradual change and clear deprecation policies reduce breaking changes for integrators.",
          },
          {
            id: 2135,
            question:
              "What is a good pattern for debugging hook-related performance issues?",
            options: [
              "Disable all hooks",
              "Add timing instrumentation to hooks and analyze latency contributions",
              "Only inspect final outputs",
              "Change model weights",
            ],
            answer:
              "Add timing instrumentation to hooks and analyze latency contributions",
            explanation:
              "Profiling identifies slow hooks so you can optimize or move work to background jobs.",
          },
          {
            id: 2136,
            question:
              "Which hook behavior supports secure multi-tenant environments?",
            options: [
              "Hooks accessing global state without checks",
              "Hooks operating within tenant-scoped contexts and respecting tenant permissions",
              "Hooks sharing credentials across tenants",
              "Hooks disabling logging",
            ],
            answer:
              "Hooks operating within tenant-scoped contexts and respecting tenant permissions",
            explanation:
              "Tenant-scoped hooks prevent data leakage and enforce isolation between customers.",
          },
          {
            id: 2137,
            question: "Why instrument hook idempotency in logs?",
            options: [
              "To confuse operators",
              "To detect duplicate executions and support safe retries and audits",
              "To increase token usage",
              "To disable backpressure",
            ],
            answer:
              "To detect duplicate executions and support safe retries and audits",
            explanation:
              "Logging idempotency markers helps verify whether retries occurred and whether effects were duplicated.",
          },
          {
            id: 2138,
            question:
              "Which hook type is used to transform outputs (e.g., redact or format) before returning to users?",
            options: [
              "before_run",
              "after_tool_call or after_run",
              "on_agent_init only",
              "on_error only",
            ],
            answer: "after_tool_call or after_run",
            explanation:
              "Transformation hooks run after generation/tool outputs but before returning results to the client.",
          },
          {
            id: 2139,
            question:
              "How can hooks be leveraged to implement retry counters for tools?",
            options: [
              "Restrictions: cannot",
              "Track and increment retry counts in a before_tool_call hook and abort when limits exceeded",
              "Only runners can do this",
              "Always allow infinite retries",
            ],
            answer:
              "Track and increment retry counts in a before_tool_call hook and abort when limits exceeded",
            explanation:
              "Hooks can maintain per-run metadata including retry counters to enforce retry policies.",
          },
          {
            id: 2140,
            question:
              "What is a recommended practice for storing hook configuration?",
            options: [
              "Hardcode inline in many places",
              "Centralize in version-controlled config with environment overlays and feature flags",
              "Only in production memory",
              "Only on developer machines",
            ],
            answer:
              "Centralize in version-controlled config with environment overlays and feature flags",
            explanation:
              "Centralized configs allow safe updates and consistent behavior across environments.",
          },
          {
            id: 2141,
            question:
              "Which hook pattern helps implement audit trails for sensitive actions?",
            options: [
              "No hook invocation",
              "Use before/after hooks to record who requested the action, payload summary, and outcome",
              "Only store raw payloads without context",
              "Only store on errors",
            ],
            answer:
              "Use before/after hooks to record who requested the action, payload summary, and outcome",
            explanation:
              "Paired before/after records provide a complete picture of sensitive operations.",
          },
          {
            id: 2142,
            question:
              "How should hooks be documented for third-party integrators?",
            options: [
              "Not documented",
              "Provide clear event names, signatures, expected side-effects, performance expectations, and examples",
              "Only provide binary blobs",
              "Only show internal comments",
            ],
            answer:
              "Provide clear event names, signatures, expected side-effects, performance expectations, and examples",
            explanation:
              "Good docs enable safe integration and reduce misuse of hook extension points.",
          },
          {
            id: 2143,
            question:
              "Which pattern reduces risk when enabling a new hook in production?",
            options: [
              "Enable everywhere immediately",
              "Enable via feature flag for small percentage of traffic, monitor, then scale up",
              "Never enable",
              "Remove observability",
            ],
            answer:
              "Enable via feature flag for small percentage of traffic, monitor, then scale up",
            explanation:
              "Gradual rollouts detect problems early and limit impact to a small user subset.",
          },
          {
            id: 2144,
            question:
              "Why avoid heavy synchronous I/O in hooks that run on the critical path?",
            options: [
              "To increase I/O",
              "Because it increases latency and harms throughput; prefer async or offload",
              "To guarantee correctness",
              "To reduce observability",
            ],
            answer:
              "Because it increases latency and harms throughput; prefer async or offload",
            explanation:
              "Synchronous I/O stalls the main execution and degrades user experience and scalability.",
          },
          {
            id: 2145,
            question:
              "What should a hook do if it detects suspicious input indicating an attack?",
            options: [
              "Proceed normally",
              "Block or sanitize input, record evidence, alert security, and escalate per policy",
              "Return success silently",
              "Increase temperature",
            ],
            answer:
              "Block or sanitize input, record evidence, alert security, and escalate per policy",
            explanation:
              "Suspicious activity should trigger protective actions and logging for investigation.",
          },
          {
            id: 2146,
            question:
              "Which capability allows hooks to operate differently across environments (dev/staging/prod)?",
            options: [
              "Hardcoded behavior",
              "Environment-specific config overlays and feature flags",
              "Changing code manually in each env",
              "No capability required",
            ],
            answer: "Environment-specific config overlays and feature flags",
            explanation:
              "Config overlays let hooks behave safely in different environments without code changes.",
          },
          {
            id: 2147,
            question:
              "How can hooks be used to support governance and approvals?",
            options: [
              "By making all decisions automatic",
              "Initiate approval workflows, pause runs waiting for sign-off, and resume when approved",
              "Never involve humans",
              "Only log approvals locally",
            ],
            answer:
              "Initiate approval workflows, pause runs waiting for sign-off, and resume when approved",
            explanation:
              "Hooks can kick off governance processes for high-risk actions requiring human authorization.",
          },
          {
            id: 2148,
            question:
              "Why prefer small, focused hooks over one large monolithic hook?",
            options: [
              "No preference",
              "Smaller hooks are easier to test, reason about, and compose without unintended side-effects",
              "Monolithic hooks are always better",
              "Small hooks increase coupling",
            ],
            answer:
              "Smaller hooks are easier to test, reason about, and compose without unintended side-effects",
            explanation:
              "Composability and simplicity reduce bugs and lower maintenance burden.",
          },
          {
            id: 2149,
            question:
              "Which hook-related mechanism helps with rollback if a new hook causes issues?",
            options: [
              "No rollback",
              "Feature flags, versioned deployments, and easy rollback paths in CI/CD",
              "Manual code edits in prod",
              "Disable logging",
            ],
            answer:
              "Feature flags, versioned deployments, and easy rollback paths in CI/CD",
            explanation:
              "These practices enable quick mitigation and revert of problematic hook changes.",
          },
          {
            id: 2150,
            question:
              "What is the primary benefit of exposing safe extension points via hooks for third-party developers?",
            options: [
              "Increased attack surface without any benefit",
              "Allow customization and integrations while keeping core behavior stable and controlled",
              "Remove the need for security",
              "Prevent any observability",
            ],
            answer:
              "Allow customization and integrations while keeping core behavior stable and controlled",
            explanation:
              "Well-designed hooks enable extensibility and ecosystem growth without modifying core system internals.",
          },
        ],
      },
      {
        id: 204,
        name: "Structured Output",
        description:
          "Designing, enforcing, and parsing machine-readable outputs (JSON/Schema, validators, custom extractors, streaming-safe formats)",
        mcqs: [
          {
            id: 2151,
            question:
              "What is the primary goal of structured output from an LLM?",
            options: [
              "Make the text more poetic",
              "Produce machine-parseable, predictable data that downstream systems can reliably consume",
              "Increase token usage",
              "Hide internal reasoning",
            ],
            answer:
              "Produce machine-parseable, predictable data that downstream systems can reliably consume",
            explanation:
              "Structured output ensures consistent formats (like JSON) so other systems can programmatically interpret results.",
          },
          {
            id: 2152,
            question:
              "Which format is typically safer for streaming structured records?",
            options: [
              "One giant JSON array streamed token-by-token",
              "Newline-delimited JSON (NDJSON) or NDJSON-like chunked JSON objects",
              "Plain text paragraphs only",
              "XML without delimiters",
            ],
            answer:
              "Newline-delimited JSON (NDJSON) or NDJSON-like chunked JSON objects",
            explanation:
              "NDJSON provides integer chunk boundaries (one complete JSON object per line) avoiding partial-object parsing issues.",
          },
          {
            id: 2153,
            question: "Why enforce an output schema for agent responses?",
            options: [
              "To increase model temperature",
              "To validate correctness, prevent hallucinated fields, and make outputs machine-consumable",
              "To slow down generation",
              "To hide provenance",
            ],
            answer:
              "To validate correctness, prevent hallucinated fields, and make outputs machine-consumable",
            explanation:
              "Schemas define allowed fields and types, aiding validation and reducing unexpected outputs.",
          },
          {
            id: 2154,
            question:
              "Which library is commonly used in Python for runtime data validation against schemas?",
            options: ["Pandas", "Pydantic", "Matplotlib", "Seaborn"],
            answer: "Pydantic",
            explanation:
              "Pydantic validates and parses structured data into typed Python objects using schema definitions.",
          },
          {
            id: 2155,
            question:
              "What is a 'custom_output_extractor' when using an agent as a tool?",
            options: [
              "A way to change model weights",
              "A parser that extracts and transforms the called agent's raw output into a structured format for the caller",
              "A UI theme",
              "A network protocol",
            ],
            answer:
              "A parser that extracts and transforms the called agent's raw output into a structured format for the caller",
            explanation:
              "Custom extractors convert potentially freeform outputs into canonical data the calling agent can use.",
          },
          {
            id: 2156,
            question:
              "Which approach reduces the chance of malformed JSON from an LLM?",
            options: [
              "Ask LLM to produce arbitrary text",
              "Provide explicit schema + few-shot examples and use validation with retries on failure",
              "Increase top_k only",
              "Never validate outputs",
            ],
            answer:
              "Provide explicit schema + few-shot examples and use validation with retries on failure",
            explanation:
              "Explicit instructions and examples plus post-generation validation improve structured correctness.",
          },
          {
            id: 2157,
            question:
              "How should you handle minor schema mismatches at runtime safely?",
            options: [
              "Crash the service",
              "Attempt coercion (type conversions), apply defaults, log mismatch and proceed cautiously or request regeneration",
              "Ignore and proceed silently",
              "Always discard the response",
            ],
            answer:
              "Attempt coercion (type conversions), apply defaults, log mismatch and proceed cautiously or request regeneration",
            explanation:
              "Coercion and defaults help recover from small deviations while preserving safety and traceability.",
          },
          {
            id: 2158,
            question: "What is 'output contract testing'?",
            options: [
              "Testing the UI only",
              "Automated tests that verify generated outputs conform to expected schema/contract across scenarios",
              "Performance testing of models",
              "Only manual inspection",
            ],
            answer:
              "Automated tests that verify generated outputs conform to expected schema/contract across scenarios",
            explanation:
              "Contract tests assert that responses meet the defined structure and content expectations.",
          },
          {
            id: 2159,
            question:
              "Which is a robust strategy when streaming structured JSON objects incrementally?",
            options: [
              "Stream partial fragments of an object without boundaries",
              "Emit complete small JSON objects per chunk or use NDJSON/JSONL so each chunk is parseable independently",
              "Stream entire final JSON only",
              "Use random separators",
            ],
            answer:
              "Emit complete small JSON objects per chunk or use NDJSON/JSONL so each chunk is parseable independently",
            explanation:
              "Independent JSON objects per chunk avoid parsing incomplete structures and enable incremental processing.",
          },
          {
            id: 2160,
            question:
              "Why include explicit types (string, integer, boolean) in a schema?",
            options: [
              "To increase token usage",
              "To allow downstream systems to validate and coerce values correctly",
              "To confuse the agent",
              "Types are irrelevant",
            ],
            answer:
              "To allow downstream systems to validate and coerce values correctly",
            explanation:
              "Explicit typing helps prevent misinterpretation and supports safe conversions and validation.",
          },
          {
            id: 2161,
            question:
              "What is a good fallback when structured parsing fails repeatedly?",
            options: [
              "Return raw model text as final without annotation",
              "Return an error, request regeneration, or escalate to a human reviewer depending on criticality",
              "Ignore and continue silently",
              "Delete the request",
            ],
            answer:
              "Return an error, request regeneration, or escalate to a human reviewer depending on criticality",
            explanation:
              "Explicit failure handling prevents corrupted data from flowing downstream and allows corrective action.",
          },
          {
            id: 2162,
            question:
              "Which specification helps define JSON schemas in a language-agnostic way?",
            options: ["CSS", "JSON Schema", "HTML", "YAML only"],
            answer: "JSON Schema",
            explanation:
              "JSON Schema standardizes validation rules for JSON documents across languages and platforms.",
          },
          {
            id: 2163,
            question: "How can structured output reduce hallucinations?",
            options: [
              "By increasing temperature only",
              "By forcing the model to produce constrained fields and types, making unsupported claims harder to include",
              "By removing context",
              "By disabling tools",
            ],
            answer:
              "By forcing the model to produce constrained fields and types, making unsupported claims harder to include",
            explanation:
              "Constraints limit freeform generation and make it less likely the model invents unsupported facts in structured fields.",
          },
          {
            id: 2164,
            question: "What is 'schema evolution' and why plan for it?",
            options: [
              "Never changing schema",
              "Handling changes to the schema over time with backward/forward compatibility strategies",
              "Changing model temperature",
              "Only for UI changes",
            ],
            answer:
              "Handling changes to the schema over time with backward/forward compatibility strategies",
            explanation:
              "Planning for evolution prevents breaking consumers when fields are added, removed, or changed.",
          },
          {
            id: 2165,
            question: "Which is a safe design for optional fields in schemas?",
            options: [
              "Omit defaults and crash if missing",
              "Mark as optional and provide sensible defaults or nullability handling downstream",
              "Treat optional fields as required",
              "Remove optional flags",
            ],
            answer:
              "Mark as optional and provide sensible defaults or nullability handling downstream",
            explanation:
              "Optional fields with defaults reduce parsing errors and allow graceful degradation.",
          },
          {
            id: 2166,
            question: "Why use enumerations (enum) in structured outputs?",
            options: [
              "To allow any text",
              "To restrict values to a known finite set, improving validation and reducing ambiguity",
              "To increase token size",
              "To skip validation",
            ],
            answer:
              "To restrict values to a known finite set, improving validation and reducing ambiguity",
            explanation:
              "Enums make downstream decision logic simpler and safer by limiting possible values.",
          },
          {
            id: 2167,
            question: "What does 'tight schema' imply?",
            options: [
              "Allow any field or type",
              "Strict validation with limited fields and types; less tolerant to deviations",
              "No validation",
              "Only for internal tests",
            ],
            answer:
              "Strict validation with limited fields and types; less tolerant to deviations",
            explanation:
              "Tight schemas enforce stricter conformance which benefits safety but may require retries if model misformats output.",
          },
          {
            id: 2168,
            question:
              "Which technique helps convert freeform natural language into structured fields reliably?",
            options: [
              "Pure regex-only approaches",
              "Use a combination of prompts, few-shot examples, and semantic parsing with post-validators",
              "Never parse freeform text",
              "Only use top_k tuning",
            ],
            answer:
              "Use a combination of prompts, few-shot examples, and semantic parsing with post-validators",
            explanation:
              "Combining prompt engineering and parsing plus validation yields more robust extraction from natural text.",
          },
          {
            id: 2169,
            question: "What is the role of a 'schema-aware prompt'?",
            options: [
              "Ignore schema entirely",
              "Provide the model with explicit structure and examples outlining required fields and types",
              "Only change temperature",
              "Produce random output",
            ],
            answer:
              "Provide the model with explicit structure and examples outlining required fields and types",
            explanation:
              "Schema-aware prompts guide the model to output the expected structured format by example and instruction.",
          },
          {
            id: 2170,
            question:
              "Which behavior should a structured-output validator exhibit on noncritical mismatches?",
            options: [
              "Always block everything",
              "Log the mismatch, attempt correction if possible, and optionally proceed with warning or soft-fail",
              "Always ignore without logging",
              "Permanently disable schema checks",
            ],
            answer:
              "Log the mismatch, attempt correction if possible, and optionally proceed with warning or soft-fail",
            explanation:
              "Soft-fail strategies maintain availability while surfacing issues for improvement.",
          },
          {
            id: 2171,
            question:
              "Why prefer typed structures (dataclasses/pydantic models) over plain dicts in downstream code?",
            options: [
              "They slow down code",
              "They provide validation, clearer contracts, and autocompletion/typing benefits during development",
              "They increase token costs",
              "They remove observability",
            ],
            answer:
              "They provide validation, clearer contracts, and autocompletion/typing benefits during development",
            explanation:
              "Typed structures catch mismatches early and improve developer productivity and reliability.",
          },
          {
            id: 2172,
            question:
              "What is the purpose of an 'output sanitizer' in structured pipelines?",
            options: [
              "To add random data",
              "To redact or normalize sensitive fields and ensure values meet safety constraints before consumption",
              "To increase temperature",
              "To encrypt everything always",
            ],
            answer:
              "To redact or normalize sensitive fields and ensure values meet safety constraints before consumption",
            explanation:
              "Sanitizers protect privacy and enforce policy constraints on produced structured data.",
          },
          {
            id: 2173,
            question:
              "Which of the following helps when LLM repeatedly places values in wrong fields?",
            options: [
              "Increase max_tokens only",
              "Better schema-aware prompting, additional examples, and stronger post-parse validation with clear error feedback",
              "Remove schema checks",
              "Change model size randomly",
            ],
            answer:
              "Better schema-aware prompting, additional examples, and stronger post-parse validation with clear error feedback",
            explanation:
              "Improved prompts and validation guide the model and detect misplacements early for correction.",
          },
          {
            id: 2174,
            question: "What is 'round-trip validation' for structured outputs?",
            options: [
              "Sending output to other users without checks",
              "Validate output against schema, possibly re-encode and re-validate to ensure stability of serialization/deserialization",
              "Only validate at schema creation time",
              "Never validate",
            ],
            answer:
              "Validate output against schema, possibly re-encode and re-validate to ensure stability of serialization/deserialization",
            explanation:
              "Round-trip checks confirm that structured data survives serialization and remains valid after parsing.",
          },
          {
            id: 2175,
            question:
              "Which pattern helps make structured prompts robust across model upgrades?",
            options: [
              "Hardcode model-specific quirks",
              "Keep prompts explicit, include schema examples, and add post-validators rather than relying solely on fragile prompt behavior",
              "Never document prompts",
              "Only test on a single model version",
            ],
            answer:
              "Keep prompts explicit, include schema examples, and add post-validators rather than relying solely on fragile prompt behavior",
            explanation:
              "Explicitness plus validation reduces brittleness when models change behavior across versions.",
          },
          {
            id: 2176,
            question:
              "Which is a benefit of using a canonical ID field in structured outputs?",
            options: [
              "Increase ambiguity",
              "Enable idempotency, traceability, and easier deduplication of responses",
              "Reduce parsing speed",
              "Disable validation",
            ],
            answer:
              "Enable idempotency, traceability, and easier deduplication of responses",
            explanation:
              "Canonical identifiers help match responses to requests and avoid duplicate processing.",
          },
          {
            id: 2177,
            question:
              "How should you treat freeform narrative fields in otherwise structured outputs?",
            options: [
              "Disallow them entirely",
              "Designate them explicitly as strings, possibly require length limits and content filters",
              "Store unlimited raw text with no checks",
              "Always convert them to numbers",
            ],
            answer:
              "Designate them explicitly as strings, possibly require length limits and content filters",
            explanation:
              "Explicitly typed narrative fields with constraints reduce injection and excessive verbosity risks.",
          },
          {
            id: 2178,
            question:
              "When using agents as tools, why is a well-documented output contract important?",
            options: [
              "Only for UI teams",
              "So callers can parse expected fields, handle errors, and rely on stable interfaces across updates",
              "It is optional only",
              "To increase token usage",
            ],
            answer:
              "So callers can parse expected fields, handle errors, and rely on stable interfaces across updates",
            explanation:
              "Contracts enable integration, testing, and decoupling between agents acting as tools and their callers.",
          },
          {
            id: 2179,
            question:
              "Which is a reason to include a 'confidence' field in structured outputs?",
            options: [
              "To confuse downstream systems",
              "Allow consumers to decide whether to accept, verify, or escalate the result based on confidence",
              "Increase output size unnecessarily",
              "To replace provenance",
            ],
            answer:
              "Allow consumers to decide whether to accept, verify, or escalate the result based on confidence",
            explanation:
              "Confidence helps downstream systems implement appropriate verification or human review policies.",
          },
          {
            id: 2180,
            question:
              "What is an advantage of generating both a machine-readable structure and a human-readable explanation together?",
            options: [
              "No advantage",
              "Machines get deterministic data while humans get context and rationale for transparency and debugging",
              "It always doubles the token cost unnecessarily",
              "It removes need for validation",
            ],
            answer:
              "Machines get deterministic data while humans get context and rationale for transparency and debugging",
            explanation:
              "Dual outputs support automation and human interpretability for trust and diagnostics.",
          },
          {
            id: 2181,
            question:
              "Which technique helps automate remediation when structured validation fails in low-risk flows?",
            options: [
              "Always escalate to human with no attempt to fix",
              "Attempt automated normalization, coercion, or regenerating the specific fields before escalating",
              "Silently drop the response",
              "Disable validation",
            ],
            answer:
              "Attempt automated normalization, coercion, or regenerating the specific fields before escalating",
            explanation:
              "Automated fixes reduce human workload while preserving correctness in non-critical cases.",
          },
          {
            id: 2182,
            question:
              'Why prefer explicit field names (e.g., "start_date") over vague keys (e.g., "date")?',
            options: [
              "To increase token usage",
              "To reduce ambiguity, enabling correct parsing and internationalization handling",
              "It doesn't matter",
              "To make schemas shorter",
            ],
            answer:
              "To reduce ambiguity, enabling correct parsing and internationalization handling",
            explanation:
              "Specific keys clarify meaning (e.g., start vs end) and prevent misinterpretation.",
          },
          {
            id: 2183,
            question:
              "What is the recommended action when a downstream consumer depends on a deprecated field?",
            options: [
              "Remove the field abruptly",
              "Maintain deprecated field temporarily, emit deprecation warnings, and provide a migration path",
              "Do nothing and hope it works",
              "Change field meaning silently",
            ],
            answer:
              "Maintain deprecated field temporarily, emit deprecation warnings, and provide a migration path",
            explanation:
              "Graceful deprecation avoids breaking integrations and gives time to migrate.",
          },
          {
            id: 2184,
            question:
              "Which practice helps ensure schema changes are safe to roll out?",
            options: [
              "Change schema in production without testing",
              "Use versioned schemas, backward-compatible changes, and run compatibility tests",
              "Only update docs post-release",
              "Disable validation temporarily",
            ],
            answer:
              "Use versioned schemas, backward-compatible changes, and run compatibility tests",
            explanation:
              "Versioning and compatibility testing prevent breaking consumers when schemas evolve.",
          },
          {
            id: 2185,
            question: "What is 'defensive parsing' of model outputs?",
            options: [
              "Trusting outputs blindly",
              "Parsing with strict checks, handling exceptions, and avoiding unsafe assumptions about data quality",
              "Only parse once and crash on error",
              "Parsing only after 24 hours",
            ],
            answer:
              "Parsing with strict checks, handling exceptions, and avoiding unsafe assumptions about data quality",
            explanation:
              "Defensive parsing increases resilience to malformed or malicious outputs.",
          },
          {
            id: 2186,
            question:
              "Which approach makes it easier for multiple agents to interoperate with structured outputs?",
            options: [
              "Each agent invents its own ad-hoc format",
              "Use shared schemas, registries, and clear versioning policies",
              "No coordination needed",
              "Only use freeform text",
            ],
            answer:
              "Use shared schemas, registries, and clear versioning policies",
            explanation:
              "Shared contracts and registries enable reliable cross-agent integration and discovery.",
          },
          {
            id: 2187,
            question:
              "How can you validate structured output for semantic correctness (not just type correctness)?",
            options: [
              "Only check types",
              "Apply domain-specific rules, cross-field validation, and external verification (e.g., lookup) where applicable",
              "Ignore semantics entirely",
              "Only rely on model temperature",
            ],
            answer:
              "Apply domain-specific rules, cross-field validation, and external verification (e.g., lookup) where applicable",
            explanation:
              "Semantic checks ensure values make sense in context (dates ordering, ID existence, etc.).",
          },
          {
            id: 2188,
            question:
              "When expecting numeric values, why include units explicitly in schema?",
            options: [
              "Units are optional always",
              "To avoid ambiguity (e.g., meters vs feet) and enable correct conversions or validations",
              "Units slow down parsing",
              "Units increase hallucinations",
            ],
            answer:
              "To avoid ambiguity (e.g., meters vs feet) and enable correct conversions or validations",
            explanation:
              "Explicit units prevent misinterpretation and errors in downstream calculations.",
          },
          {
            id: 2189,
            question:
              "Which response is appropriate if a model returns extra unknown fields?",
            options: [
              "Crash immediately",
              "Ignore unknown fields by default, log them for analysis, and consider schema updates if useful",
              "Delete entire response",
              "Return success without logging",
            ],
            answer:
              "Ignore unknown fields by default, log them for analysis, and consider schema updates if useful",
            explanation:
              "Ignoring unknown fields preserves robustness while allowing observation of potential new useful data.",
          },
          {
            id: 2190,
            question:
              "Why include examples in the schema documentation presented to the model?",
            options: [
              "Examples reduce clarity",
              "They give the model concrete patterns to follow, improving structured output adherence",
              "They increase token usage only",
              "They replace validation",
            ],
            answer:
              "They give the model concrete patterns to follow, improving structured output adherence",
            explanation:
              "Examples are an effective few-shot technique to show the expected shape and content.",
          },
          {
            id: 2191,
            question:
              "What is the value of including 'nullability' rules in schemas?",
            options: [
              "They serve no purpose",
              "They explicitly allow or disallow nulls and clarify how missing values should be handled",
              "They always block parsing",
              "They increase temperature",
            ],
            answer:
              "They explicitly allow or disallow nulls and clarify how missing values should be handled",
            explanation:
              "Nullability rules prevent ambiguity and guide downstream handling of absent data.",
          },
          {
            id: 2192,
            question:
              "Which practice helps ensure structured outputs are not vulnerable to injection attacks?",
            options: [
              "Trusting freeform fields blindly",
              "Sanitize inputs and outputs, validate types strictly, and avoid executing content from fields",
              "Increase top_k",
              "Disable validation",
            ],
            answer:
              "Sanitize inputs and outputs, validate types strictly, and avoid executing content from fields",
            explanation:
              "Sanitization and strict validation prevent executing or misinterpreting malicious content embedded in fields.",
          },
          {
            id: 2193,
            question:
              "What is the benefit of publishing a machine-readable schema registry for your agents?",
            options: [
              "No benefit",
              "Enables discovery, automated validation, and consistent integration across teams and agents",
              "Only useful for UI designers",
              "Decreases interoperability",
            ],
            answer:
              "Enables discovery, automated validation, and consistent integration across teams and agents",
            explanation:
              "A registry centralizes schemas and helps clients programmatically validate and adapt to formats.",
          },
          {
            id: 2194,
            question:
              "Which is an appropriate test for structured output performance?",
            options: [
              "Only measure token counts",
              "Measure parsing latency, validation throughput, and error rates under load",
              "Only manual sampling",
              "Ignore performance",
            ],
            answer:
              "Measure parsing latency, validation throughput, and error rates under load",
            explanation:
              "Performance testing ensures structured parsing and validation scale with system load.",
          },
          {
            id: 2195,
            question:
              "Why design structured outputs with machine-actionable fields rather than only human-readable prose?",
            options: [
              "Prose is always sufficient",
              "Machine-actionable fields enable automation, deterministic processing, and reliable downstream workflows",
              "Prose is cheaper",
              "It increases hallucinations",
            ],
            answer:
              "Machine-actionable fields enable automation, deterministic processing, and reliable downstream workflows",
            explanation:
              "Structured fields let systems automatically take actions without brittle natural language parsing.",
          },
          {
            id: 2196,
            question:
              "Which technique helps reconcile different date formats in structured outputs?",
            options: [
              "Accept any format without validation",
              "Normalize to an ISO standard (e.g., ISO 8601) during parsing and validate units",
              "Only accept numeric timestamps",
              "Always store as text",
            ],
            answer:
              "Normalize to an ISO standard (e.g., ISO 8601) during parsing and validate units",
            explanation:
              "ISO normalization avoids ambiguity across locales and simplifies downstream date handling.",
          },
          {
            id: 2197,
            question:
              "What is the role of 'negative examples' when designing schema-aware prompts?",
            options: [
              "They confuse the model",
              "Showing incorrect examples helps the model learn what *not* to produce, improving adherence",
              "They are never useful",
              "They replace positive examples",
            ],
            answer:
              "Showing incorrect examples helps the model learn what *not* to produce, improving adherence",
            explanation:
              "Negative examples clarify boundary cases and common mistakes to avoid.",
          },
          {
            id: 2198,
            question:
              "Which monitoring signal indicates structured output quality degradation over time?",
            options: [
              "Stable error rates",
              "Rising schema validation failures, increasing coercions or re-generation rates",
              "Constant success rates",
              "Only CPU usage",
            ],
            answer:
              "Rising schema validation failures, increasing coercions or re-generation rates",
            explanation:
              "These signals show the model is deviating from expected output formats or that prompt efficacy is declining.",
          },
          {
            id: 2199,
            question:
              "How should you handle structured outputs that reference external entities (e.g., product IDs)?",
            options: [
              "Trust references without validation",
              "Validate references against canonical registries or services and include provenance metadata",
              "Only accept textual descriptions",
              "Ignore references completely",
            ],
            answer:
              "Validate references against canonical registries or services and include provenance metadata",
            explanation:
              "Verifying IDs prevents acting on non-existent or malicious references and improves trust.",
          },
          {
            id: 2200,
            question:
              "Which summary best captures best practices for structured output?",
            options: [
              "No validation, freeform text only",
              "Schema-first design, schema-aware prompts, post-validators, clear error/fallback handling, versioning, and observability",
              "Only rely on the model without tests",
              "Never change schemas",
            ],
            answer:
              "Schema-first design, schema-aware prompts, post-validators, clear error/fallback handling, versioning, and observability",
            explanation:
              "Combining design-time and runtime practices ensures structured outputs are reliable, safe, and maintainable.",
          },
        ],
      },
      {
        id: 205,
        name: "Tracing",
        description:
          "Tracing helps in debugging, monitoring, and analyzing agent workflows.",
        mcqs: [
          {
            id: 1120101,
            question: "What is the primary purpose of tracing in AI agents?",
            options: [
              "To increase model accuracy",
              "To track and debug execution flow",
              "To reduce latency",
              "To generate structured output",
            ],
            answer: "To track and debug execution flow",
            explanation:
              "Tracing allows developers to follow how an agent processes requests and where issues may occur.",
          },
          {
            id: 1120102,
            question: "Which of the following best describes tracing?",
            options: [
              "Monitoring execution steps",
              "Randomizing outputs",
              "Caching responses",
              "Increasing tokens",
            ],
            answer: "Monitoring execution steps",
            explanation:
              "Tracing is used to monitor the internal steps of agents for debugging and observability.",
          },
          {
            id: 1120103,
            question: "Why is tracing important for debugging agent systems?",
            options: [
              "It prevents overfitting",
              "It shows step-by-step flow",
              "It reduces training data",
              "It avoids GPU usage",
            ],
            answer: "It shows step-by-step flow",
            explanation:
              "Tracing reveals the agent’s decisions and tool usage in detail, helping to locate issues.",
          },
          {
            id: 1120104,
            question:
              "Which logging level is commonly associated with detailed tracing?",
            options: ["DEBUG", "INFO", "WARNING", "ERROR"],
            answer: "DEBUG",
            explanation:
              "Detailed tracing information is usually captured at the DEBUG logging level.",
          },
          {
            id: 1120105,
            question: "How can tracing help optimize agent workflows?",
            options: [
              "By showing unnecessary steps",
              "By reducing schema complexity",
              "By auto-tuning hyperparameters",
              "By skipping validations",
            ],
            answer: "By showing unnecessary steps",
            explanation:
              "Tracing reveals redundant or inefficient steps, which can then be optimized.",
          },
          {
            id: 1120106,
            question: "Which of the following is often captured in tracing?",
            options: [
              "Temperature settings",
              "Agent decisions and tool calls",
              "User passwords",
              "GPU allocation",
            ],
            answer: "Agent decisions and tool calls",
            explanation:
              "Tracing captures execution details such as tool calls, responses, and decisions.",
          },
          {
            id: 1120107,
            question:
              "Which tracing tool is commonly used in Python applications?",
            options: ["PyTorch", "TensorBoard", "OpenTelemetry", "Docker"],
            answer: "OpenTelemetry",
            explanation:
              "OpenTelemetry is widely used for tracing and observability in distributed systems.",
          },
          {
            id: 1120108,
            question: "What can developers use tracing logs for?",
            options: [
              "Generating random outputs",
              "Replaying execution paths",
              "Encrypting agent responses",
              "Increasing token count",
            ],
            answer: "Replaying execution paths",
            explanation:
              "Tracing logs can be replayed to analyze and debug agent execution.",
          },
          {
            id: 1120109,
            question: "Which of these is NOT a benefit of tracing?",
            options: [
              "Debugging workflow",
              "Identifying bottlenecks",
              "Enforcing schema validation",
              "Performance monitoring",
            ],
            answer: "Enforcing schema validation",
            explanation:
              "Schema validation is separate; tracing mainly helps debugging and monitoring.",
          },
          {
            id: 1120110,
            question:
              "Which term refers to combining tracing with metrics for better observability?",
            options: [
              "Instrumentation",
              "Parallelization",
              "Overfitting",
              "Tokenization",
            ],
            answer: "Instrumentation",
            explanation:
              "Instrumentation integrates tracing and metrics to improve observability.",
          },
          {
            id: 1120111,
            question: "What is a span in tracing terminology?",
            options: [
              "A set of tokens",
              "A single unit of work in a trace",
              "An agent configuration",
              "A JSON schema",
            ],
            answer: "A single unit of work in a trace",
            explanation:
              "A span represents one operation or step in a traced workflow.",
          },
          {
            id: 1120112,
            question: "What does a trace represent?",
            options: [
              "Complete workflow of execution",
              "Only model settings",
              "Schema validation logs",
              "Security tokens",
            ],
            answer: "Complete workflow of execution",
            explanation:
              "A trace is a collection of spans that represent the full execution path.",
          },
          {
            id: 1120113,
            question: "Which of the following improves trace readability?",
            options: [
              "Adding span names",
              "Randomizing steps",
              "Removing logs",
              "Disabling context",
            ],
            answer: "Adding span names",
            explanation:
              "Clear span names make tracing logs easier to read and interpret.",
          },
          {
            id: 1120114,
            question: "How does tracing assist in performance monitoring?",
            options: [
              "By showing execution duration of spans",
              "By increasing accuracy",
              "By reducing memory",
              "By modifying schema",
            ],
            answer: "By showing execution duration of spans",
            explanation:
              "Tracing measures the time taken for each span, useful for performance analysis.",
          },
          {
            id: 1120115,
            question: "What happens if tracing is disabled?",
            options: [
              "Agent workflows become invisible for debugging",
              "Model accuracy increases",
              "Temperature is reset",
              "Schema output improves",
            ],
            answer: "Agent workflows become invisible for debugging",
            explanation:
              "Without tracing, it becomes harder to debug and analyze workflows.",
          },
          {
            id: 1120116,
            question: "Which best practice improves tracing in agents?",
            options: [
              "Using consistent span naming",
              "Disabling spans",
              "Randomizing IDs",
              "Avoiding timestamps",
            ],
            answer: "Using consistent span naming",
            explanation:
              "Consistent span naming improves log clarity and debugging efficiency.",
          },
          {
            id: 1120117,
            question: "What is distributed tracing?",
            options: [
              "Tracing across multiple systems",
              "Tracing random outputs",
              "Tracing JSON schemas",
              "Tracing model weights",
            ],
            answer: "Tracing across multiple systems",
            explanation:
              "Distributed tracing helps debug workflows that span across services or agents.",
          },
          {
            id: 1120118,
            question:
              "Which open-source project provides APIs for distributed tracing?",
            options: [
              "OpenTelemetry",
              "TensorFlow",
              "LangChain",
              "Docker Compose",
            ],
            answer: "OpenTelemetry",
            explanation:
              "OpenTelemetry provides APIs for distributed tracing and metrics.",
          },
          {
            id: 1120119,
            question: "Which data is most important to capture in a trace?",
            options: [
              "Span duration and errors",
              "Random tokens",
              "Temperature values",
              "User credentials",
            ],
            answer: "Span duration and errors",
            explanation:
              "Duration and error logs are essential for analyzing workflows.",
          },
          {
            id: 1120120,
            question: "Which visualization tool can display tracing data?",
            options: ["Jaeger", "NumPy", "Pandas", "Flask"],
            answer: "Jaeger",
            explanation:
              "Jaeger is a popular visualization tool for tracing data.",
          },
          {
            id: 1120121,
            question: "What is the parent-child relationship in tracing?",
            options: [
              "Tokens vs embeddings",
              "Parent spans and child spans",
              "Schema vs data",
              "Tool vs agent",
            ],
            answer: "Parent spans and child spans",
            explanation:
              "Spans can have parent-child relationships, forming a tree structure of execution.",
          },
          {
            id: 1120122,
            question: "Which identifier uniquely identifies a trace?",
            options: ["Trace ID", "Span ID", "Agent ID", "Context ID"],
            answer: "Trace ID",
            explanation:
              "A trace ID uniquely represents a full execution trace.",
          },
          {
            id: 1120123,
            question: "Which identifier is unique per operation in tracing?",
            options: ["Trace ID", "Span ID", "Agent ID", "Token ID"],
            answer: "Span ID",
            explanation: "Each span has a unique span ID within a trace.",
          },
          {
            id: 1120124,
            question: "What happens if a span is missing in a trace?",
            options: [
              "The trace becomes incomplete",
              "The agent crashes",
              "The tokens are reduced",
              "The schema fails",
            ],
            answer: "The trace becomes incomplete",
            explanation: "Missing spans result in incomplete trace logs.",
          },
          {
            id: 1120125,
            question: "Which metadata is often recorded in tracing spans?",
            options: [
              "Timestamps and errors",
              "Passwords",
              "GPU IDs",
              "Schema overrides",
            ],
            answer: "Timestamps and errors",
            explanation:
              "Spans usually record metadata like start time, end time, and error details.",
          },
          {
            id: 1120126,
            question: "How does distributed tracing differ from local tracing?",
            options: [
              "Spans cover multiple services",
              "It ignores timestamps",
              "It avoids logs",
              "It reduces accuracy",
            ],
            answer: "Spans cover multiple services",
            explanation:
              "Distributed tracing connects spans from different services to form one trace.",
          },
          {
            id: 1120127,
            question: "Which format is commonly used to export trace data?",
            options: ["JSON", "PNG", "CSV", "MP4"],
            answer: "JSON",
            explanation:
              "Trace data is often exported in JSON for interoperability.",
          },
          {
            id: 1120128,
            question: "What is sampling in tracing?",
            options: [
              "Capturing only some traces",
              "Encrypting traces",
              "Deleting spans",
              "Randomizing data",
            ],
            answer: "Capturing only some traces",
            explanation:
              "Sampling reduces overhead by capturing only a subset of traces.",
          },
          {
            id: 1120129,
            question: "Which error type is useful in tracing?",
            options: [
              "Tool failure errors",
              "Grammar errors",
              "Image errors",
              "Font errors",
            ],
            answer: "Tool failure errors",
            explanation:
              "Tracing logs tool failure errors to help diagnose problems.",
          },
          {
            id: 1120130,
            question: "What role does tracing play in observability?",
            options: [
              "It provides visibility into workflows",
              "It reduces tokens",
              "It manages GPU allocation",
              "It changes schema",
            ],
            answer: "It provides visibility into workflows",
            explanation:
              "Tracing is a core pillar of observability along with metrics and logs.",
          },
          {
            id: 1120131,
            question:
              "Which of the following complements tracing for observability?",
            options: [
              "Metrics and logs",
              "Passwords",
              "Random tokens",
              "GPU drivers",
            ],
            answer: "Metrics and logs",
            explanation:
              "Observability is achieved through metrics, logs, and traces.",
          },
          {
            id: 1120132,
            question: "What does trace visualization commonly show?",
            options: [
              "Timeline of spans",
              "Schema validation",
              "Token embeddings",
              "Training losses",
            ],
            answer: "Timeline of spans",
            explanation:
              "Trace visualization tools show span timelines with durations.",
          },
          {
            id: 1120133,
            question: "Which tool provides trace sampling strategies?",
            options: ["OpenTelemetry", "NumPy", "Figma", "React"],
            answer: "OpenTelemetry",
            explanation:
              "OpenTelemetry allows custom trace sampling strategies.",
          },
          {
            id: 1120134,
            question: "Which of these is a disadvantage of excessive tracing?",
            options: [
              "Performance overhead",
              "Better debugging",
              "Improved visibility",
              "Detailed logs",
            ],
            answer: "Performance overhead",
            explanation: "Tracing too much data can slow down systems.",
          },
          {
            id: 1120135,
            question:
              "Which is a recommended best practice for tracing in production?",
            options: [
              "Use sampling",
              "Log every span always",
              "Disable tracing",
              "Randomize IDs",
            ],
            answer: "Use sampling",
            explanation:
              "Sampling reduces overhead while still capturing useful traces.",
          },
          {
            id: 1120136,
            question:
              "What is the relationship between tracing and latency debugging?",
            options: [
              "Tracing identifies slow spans",
              "Tracing reduces tokens",
              "Tracing hides schema",
              "Tracing prevents errors",
            ],
            answer: "Tracing identifies slow spans",
            explanation:
              "Tracing shows span timings, revealing performance bottlenecks.",
          },
          {
            id: 1120137,
            question: "Which span attribute indicates total execution time?",
            options: ["Duration", "Token count", "Schema size", "Trace ID"],
            answer: "Duration",
            explanation: "Span duration indicates how long an operation took.",
          },
          {
            id: 1120138,
            question:
              "Which of the following helps correlate traces across services?",
            options: [
              "Trace ID propagation",
              "GPU IDs",
              "Schema links",
              "Random tokens",
            ],
            answer: "Trace ID propagation",
            explanation:
              "Trace IDs must propagate across services for distributed tracing.",
          },
          {
            id: 1120139,
            question: "Which storage system is often used for trace data?",
            options: [
              "Elasticsearch",
              "NumPy arrays",
              "Excel sheets",
              "PNG images",
            ],
            answer: "Elasticsearch",
            explanation:
              "Trace logs are often stored in Elasticsearch for fast querying.",
          },
          {
            id: 1120140,
            question: "What is span context in tracing?",
            options: [
              "Metadata shared between spans",
              "GPU allocation",
              "Schema template",
              "Tool configuration",
            ],
            answer: "Metadata shared between spans",
            explanation: "Span context carries metadata for connecting spans.",
          },
          {
            id: 1120141,
            question: "Which common cause of errors can tracing identify?",
            options: [
              "Tool misconfigurations",
              "Password leaks",
              "Font mismatches",
              "Image sizes",
            ],
            answer: "Tool misconfigurations",
            explanation:
              "Tracing reveals where misconfigured tools fail during execution.",
          },
          {
            id: 1120142,
            question:
              "Which standard format does OpenTelemetry use for tracing?",
            options: ["W3C Trace Context", "PNG", "DOCX", "JPEG"],
            answer: "W3C Trace Context",
            explanation:
              "OpenTelemetry adopts the W3C Trace Context standard for interoperability.",
          },
          {
            id: 1120143,
            question:
              "Which visualization shows trace spans as horizontal bars?",
            options: [
              "Gantt chart style view",
              "Pie chart",
              "Line graph",
              "Scatter plot",
            ],
            answer: "Gantt chart style view",
            explanation:
              "Tracing tools often display spans as bars on a Gantt-like timeline.",
          },
          {
            id: 1120144,
            question: "Which of these helps reduce storage cost in tracing?",
            options: [
              "Trace sampling",
              "Storing all traces",
              "Expanding span logs",
              "Using CSV",
            ],
            answer: "Trace sampling",
            explanation:
              "Sampling reduces the number of traces stored, saving storage.",
          },
          {
            id: 1120145,
            question: "What is trace correlation?",
            options: [
              "Linking related traces across systems",
              "Reducing tokens",
              "Schema mapping",
              "Model validation",
            ],
            answer: "Linking related traces across systems",
            explanation:
              "Trace correlation links traces from different systems for a full view.",
          },
          {
            id: 1120146,
            question: "Which type of span usually marks the start of a trace?",
            options: [
              "Root span",
              "Child span",
              "Intermediate span",
              "Leaf span",
            ],
            answer: "Root span",
            explanation:
              "A trace starts with a root span, which may have child spans.",
          },
          {
            id: 1120147,
            question: "Which problem does distributed tracing mainly solve?",
            options: [
              "Debugging across microservices",
              "Schema mismatches",
              "GPU allocation",
              "Token limits",
            ],
            answer: "Debugging across microservices",
            explanation:
              "Distributed tracing is essential for debugging microservice architectures.",
          },
          {
            id: 1120148,
            question:
              "Which tool is commonly used with OpenTelemetry for tracing visualization?",
            options: ["Jaeger", "Excel", "NumPy", "React"],
            answer: "Jaeger",
            explanation:
              "Jaeger integrates with OpenTelemetry for trace visualization.",
          },
          {
            id: 1120149,
            question: "Which issue arises if spans are not properly linked?",
            options: [
              "Broken trace chains",
              "Extra tokens",
              "Schema validation errors",
              "Overfitting",
            ],
            answer: "Broken trace chains",
            explanation:
              "Unlinked spans result in incomplete or broken traces.",
          },
          {
            id: 1120150,
            question: "Which is the ultimate goal of tracing?",
            options: [
              "Better observability and debugging",
              "Token reduction",
              "Schema mapping",
              "GPU allocation",
            ],
            answer: "Better observability and debugging",
            explanation:
              "Tracing’s main goal is improving visibility, debugging, and performance monitoring.",
          },
        ],
      },
      {
        id: 206,
        name: "Orchestrating Multiple Agents",
        description:
          "Patterns, failures, coordination, and best practices for composing and running multiple agents together.",
        mcqs: [
          {
            id: 2201,
            question:
              "What is the primary goal of orchestrating multiple agents?",
            options: [
              "To make each agent independent with no communication",
              "To coordinate agents so they collaborate to solve larger tasks reliably",
              "To reduce the number of tools available",
              "To increase the randomness of outputs",
            ],
            answer:
              "To coordinate agents so they collaborate to solve larger tasks reliably",
            explanation:
              "Orchestration arranges agents' roles and communications so they jointly accomplish complex workflows.",
          },
          {
            id: 2202,
            question:
              "Which pattern describes agents calling each other in a directed sequence where one agent's output is the next agent's input?",
            options: [
              "Choreography",
              "Synchronous chaining / pipeline",
              "Event sourcing",
              "Distributed locking",
            ],
            answer: "Synchronous chaining / pipeline",
            explanation:
              "A pipeline chains agents where outputs flow in order from one agent to the next.",
          },
          {
            id: 2203,
            question: "What is 'choreography' in multi-agent systems?",
            options: [
              "A central controller dictating all actions",
              "Each agent reacts to events and coordinates without a central conductor",
              "A debugging tool for traces",
              "A data serialization format",
            ],
            answer:
              "Each agent reacts to events and coordinates without a central conductor",
            explanation:
              "Choreography is decentralized coordination via events rather than central control.",
          },
          {
            id: 2204,
            question: "Which is a benefit of using a central orchestrator?",
            options: [
              "Less single-point-of-control risk",
              "Simpler global view, centralized scheduling, and easier coordinated rollback",
              "Mandatory synchronous behavior",
              "Always lower latency",
            ],
            answer:
              "Simpler global view, centralized scheduling, and easier coordinated rollback",
            explanation:
              "A central orchestrator gives a single control point for scheduling and consistency management.",
          },
          {
            id: 2205,
            question:
              "What is a major drawback of a strictly centralized orchestration approach?",
            options: [
              "Easier debugging",
              "Single point of failure and potential scalability bottleneck",
              "Guaranteed eventual consistency",
              "Automatic lower cost",
            ],
            answer:
              "Single point of failure and potential scalability bottleneck",
            explanation:
              "Central controllers can become failure points and limit throughput if not designed for scale.",
          },
          {
            id: 2206,
            question:
              "Which data contract is crucial between agents so they can interoperate safely?",
            options: [
              "Shared schema/contract and versioning",
              "Random text flows",
              "Undocumented conventions only",
              "Ad-hoc freeform replies",
            ],
            answer: "Shared schema/contract and versioning",
            explanation:
              "Explicit schemas and versioning prevent misinterpretation and make upgrades safe.",
          },
          {
            id: 2207,
            question:
              "What role do message queues (e.g., Kafka, RabbitMQ) commonly play in orchestration?",
            options: [
              "They replace model weights",
              "They decouple agents and buffer/load-balance requests to improve reliability",
              "They increase coupling",
              "They make agents synchronous by default",
            ],
            answer:
              "They decouple agents and buffer/load-balance requests to improve reliability",
            explanation:
              "Queues provide asynchronous handoff, buffering, and scaling benefits between agents.",
          },
          {
            id: 2208,
            question:
              "Which technique reduces duplicate processing when agents may retry messages?",
            options: [
              "Idempotency and unique request ids",
              "Random retries without ids",
              "Always processing everything twice",
              "No logging",
            ],
            answer: "Idempotency and unique request ids",
            explanation:
              "Idempotent operations and unique IDs prevent duplicate side-effects on retries.",
          },
          {
            id: 2209,
            question:
              "What is a common orchestration failure mode when agents share mutable state incorrectly?",
            options: [
              "Improved determinism",
              "Race conditions and inconsistent state across agents",
              "Guaranteed data durability",
              "Lower latency",
            ],
            answer: "Race conditions and inconsistent state across agents",
            explanation:
              "Improper shared mutable state leads to race conditions and hard-to-debug inconsistencies.",
          },
          {
            id: 2210,
            question:
              "Which approach helps avoid shared mutable state problems between agents?",
            options: [
              "Use immutable messages and event-driven updates with a single source of truth",
              "Directly write to a shared in-memory object without locks",
              "Have all agents update the same file concurrently",
              "Disable tracing",
            ],
            answer:
              "Use immutable messages and event-driven updates with a single source of truth",
            explanation:
              "Immutable messages and authoritative stores reduce concurrency bugs and ensure consistency.",
          },
          {
            id: 2211,
            question:
              "What is eventual consistency in the context of orchestrated agents?",
            options: [
              "All agents are always strongly consistent",
              "System converges to a consistent state eventually, rather than immediately",
              "No guarantees about data",
              "Immediate rollback on failures",
            ],
            answer:
              "System converges to a consistent state eventually, rather than immediately",
            explanation:
              "Eventual consistency means updates may take time to propagate but will converge.",
          },
          {
            id: 2212,
            question:
              "Which mechanism ensures causal ordering of events across agents?",
            options: [
              "Vector clocks or causal metadata propagation",
              "Random timestamps",
              "Stateless agents only",
              "No metadata",
            ],
            answer: "Vector clocks or causal metadata propagation",
            explanation:
              "Causal metadata helps agents reason about event ordering and dependencies.",
          },
          {
            id: 2213,
            question:
              "Why use a circuit breaker pattern in multi-agent orchestration?",
            options: [
              "To increase calls to a failing service",
              "To prevent overload by failing fast and providing fallbacks when a dependent tool is unhealthy",
              "To disable tracing",
              "To improve randomness",
            ],
            answer:
              "To prevent overload by failing fast and providing fallbacks when a dependent tool is unhealthy",
            explanation:
              "Circuit breakers avoid cascading failures and allow recovery strategies.",
          },
          {
            id: 2214,
            question:
              "What is the benefit of having a leader election (e.g., raft) in multi-agent orchestration?",
            options: [
              "Ensures a single authoritative coordinator for certain tasks with failover",
              "Removes the need for communication",
              "Slows down all agents permanently",
              "Eliminates the need for tracing",
            ],
            answer:
              "Ensures a single authoritative coordinator for certain tasks with failover",
            explanation:
              "Leader election gives coordinated responsibility while tolerating failures.",
          },
          {
            id: 2215,
            question:
              "Which orchestration concern is addressed by 'max turns' or similar limits?",
            options: [
              "Preventing infinite loops and runaway resource consumption",
              "Increasing randomness",
              "Disabling guardrails",
              "Reducing schema size",
            ],
            answer:
              "Preventing infinite loops and runaway resource consumption",
            explanation:
              "Turn limits bound the interaction length to protect resources and safety.",
          },
          {
            id: 2216,
            question:
              "Which is an example of orchestration 'backpressure' control?",
            options: [
              "Dropping all messages silently",
              "Slowing producers or buffering when consumers are overloaded so systems remain stable",
              "Increasing temperature",
              "Always spinning up new agents instantly without limits",
            ],
            answer:
              "Slowing producers or buffering when consumers are overloaded so systems remain stable",
            explanation:
              "Backpressure prevents system overload by controlling input rates.",
          },
          {
            id: 2217,
            question:
              "What is the role of observability in orchestrating multiple agents?",
            options: [
              "Only for logging user data",
              "Providing metrics, traces, and logs to understand flows, latency, failures, and bottlenecks",
              "Replacing schema validation",
              "Increasing agent randomness",
            ],
            answer:
              "Providing metrics, traces, and logs to understand flows, latency, failures, and bottlenecks",
            explanation:
              "Observability is essential for diagnosing and tuning multi-agent workflows.",
          },
          {
            id: 2218,
            question:
              "Which metric is most useful to detect orchestration bottlenecks?",
            options: [
              "Span duration / latency per agent step",
              "Number of tokens generated overall",
              "Model architecture name",
              "Random seed value",
            ],
            answer: "Span duration / latency per agent step",
            explanation:
              "Latency per step reveals slow components that limit end-to-end performance.",
          },
          {
            id: 2219,
            question: "Why is tracing across agents important?",
            options: [
              "It’s not important",
              "To correlate requests and debug end-to-end execution across services",
              "To reduce costs only",
              "To hide errors",
            ],
            answer:
              "To correlate requests and debug end-to-end execution across services",
            explanation:
              "Distributed traces let you follow a request through multiple agents and systems.",
          },
          {
            id: 2220,
            question:
              "Which strategy improves resilience when a dependent agent is slow or failing?",
            options: [
              "Retry aggressively with no limits",
              "Fallbacks, timeouts, circuit breakers, and degraded-mode responses",
              "Ignore dependency and keep waiting forever",
              "Remove observability",
            ],
            answer:
              "Fallbacks, timeouts, circuit breakers, and degraded-mode responses",
            explanation:
              "Combining these patterns helps systems degrade gracefully and remain responsive.",
          },
          {
            id: 2221,
            question:
              "What is the difference between orchestration and choreography?",
            options: [
              "They are identical",
              "Orchestration uses a central controller, choreography relies on decentralized event-driven interactions",
              "Choreography requires more central control",
              "Orchestration eliminates the need for contracts",
            ],
            answer:
              "Orchestration uses a central controller, choreography relies on decentralized event-driven interactions",
            explanation:
              "These are two distinct coordination styles with different trade-offs.",
          },
          {
            id: 2222,
            question:
              "Which testing approach is especially important for multi-agent systems?",
            options: [
              "Unit tests only",
              "Integration and end-to-end testing, including failure injection and chaos testing",
              "Only manual tests",
              "No tests required",
            ],
            answer:
              "Integration and end-to-end testing, including failure injection and chaos testing",
            explanation:
              "End-to-end and fault-injection tests reveal orchestration issues not visible in isolation.",
          },
          {
            id: 2223,
            question: "How does versioning help when orchestrating agents?",
            options: [
              "It has no effect",
              "Allows rolling upgrades, compatibility checks, and safe rollbacks between agent versions",
              "Always forces immediate upgrades",
              "Removes need for schemas",
            ],
            answer:
              "Allows rolling upgrades, compatibility checks, and safe rollbacks between agent versions",
            explanation:
              "Versioning prevents breaking changes and supports staged rollouts.",
          },
          {
            id: 2224,
            question:
              "Which scheduling model is suitable for time-critical orchestrated tasks?",
            options: [
              "Batch-only scheduling",
              "Priority-based or real-time scheduling with preemption capabilities",
              "No scheduling",
              "Random scheduling",
            ],
            answer:
              "Priority-based or real-time scheduling with preemption capabilities",
            explanation:
              "Time-critical tasks benefit from prioritized scheduling to meet SLAs.",
          },
          {
            id: 2225,
            question:
              "Why implement admission control in orchestrated systems?",
            options: [
              "To accept all requests unconditionally",
              "To limit new work admitted when resources are constrained and preserve system stability",
              "To remove security controls",
              "To randomize agents",
            ],
            answer:
              "To limit new work admitted when resources are constrained and preserve system stability",
            explanation:
              "Admission control protects the system from overload by rejecting or deferring new work.",
          },
          {
            id: 2226,
            question:
              "Which policy helps allocate limited compute across tenants in multi-tenant orchestration?",
            options: [
              "No quotas",
              "Resource quotas and fair-sharing policies per tenant",
              "First-come-first-serve always",
              "Random assignment",
            ],
            answer: "Resource quotas and fair-sharing policies per tenant",
            explanation:
              "Quotas and fairness prevent noisy neighbors from starving others of resources.",
          },
          {
            id: 2227,
            question:
              "What is the purpose of provenance metadata in orchestrated workflows?",
            options: [
              "To store random numbers",
              "To record who did what, when, and why for auditability and reproducibility",
              "To reduce tokens",
              "To hide activity",
            ],
            answer:
              "To record who did what, when, and why for auditability and reproducibility",
            explanation:
              "Provenance supports auditing, debugging, and compliance requirements.",
          },
          {
            id: 2228,
            question:
              "Which policy should you apply to inter-agent communication to improve security?",
            options: [
              "Open communication with no auth",
              "Mutual authentication, encrypted channels, and least-privilege ACLs",
              "Disable encryption to save CPU",
              "Share all credentials freely",
            ],
            answer:
              "Mutual authentication, encrypted channels, and least-privilege ACLs",
            explanation:
              "Secure communication prevents unauthorized access and data leaks between agents.",
          },
          {
            id: 2229,
            question:
              "What does 'human-in-the-loop' add to orchestrated multi-agent workflows?",
            options: [
              "Always reduces quality",
              "A control point for approvals, oversight, and handling ambiguous or high-risk decisions",
              "Eliminates need for testing",
              "Guarantees no failures",
            ],
            answer:
              "A control point for approvals, oversight, and handling ambiguous or high-risk decisions",
            explanation:
              "Humans can review, correct, or approve agent outputs where automation is unsafe or uncertain.",
          },
          {
            id: 2230,
            question:
              "Which orchestration design helps handle long-running tasks without blocking resources?",
            options: [
              "Synchronous blocking calls everywhere",
              "Asynchronous workflows with durable state persisted externally (workflows / durable tasks)",
              "Spin waiting loops",
              "No persistence",
            ],
            answer:
              "Asynchronous workflows with durable state persisted externally (workflows / durable tasks)",
            explanation:
              "Durable workflows let agents resume long tasks without holding ephemeral resources.",
          },
          {
            id: 2231,
            question: "Why is contract testing important between agents?",
            options: [
              "It is not important",
              "To ensure that changes in one agent do not break consumers by validating input/output contracts",
              "To randomize behaviors",
              "To reduce tracing",
            ],
            answer:
              "To ensure that changes in one agent do not break consumers by validating input/output contracts",
            explanation:
              "Contract tests verify that producers meet the expectations of consumers.",
          },
          {
            id: 2232,
            question:
              "Which technique helps orchestrators route requests to the most appropriate agent?",
            options: [
              "Static assignment only",
              "Dynamic routing based on intent classification, capabilities, load, and latency SLAs",
              "Always random routing",
              "Round-robin without capability checks",
            ],
            answer:
              "Dynamic routing based on intent classification, capabilities, load, and latency SLAs",
            explanation:
              "Smart routing improves correctness and performance by considering multiple signals.",
          },
          {
            id: 2233,
            question:
              "How can orchestration minimize cost while meeting performance targets?",
            options: [
              "Always use the largest models",
              "Use tiered model selection, caching, batching, and autoscaling to balance cost and latency",
              "Never cache results",
              "Disable monitoring",
            ],
            answer:
              "Use tiered model selection, caching, batching, and autoscaling to balance cost and latency",
            explanation:
              "Combining these strategies optimizes resource usage against SLAs and cost constraints.",
          },
          {
            id: 2234,
            question:
              "Which approach reduces latency when many small requests arrive?",
            options: [
              "Process each request individually without batching",
              "Batch small requests together where possible and use warm instances to reduce cold starts",
              "Always start new containers per request",
              "Disable queues",
            ],
            answer:
              "Batch small requests together where possible and use warm instances to reduce cold starts",
            explanation:
              "Batching and warm pools can improve throughput and latency for small requests.",
          },
          {
            id: 2235,
            question:
              "What is schema evolution and why is it relevant to agent orchestration?",
            options: [
              "Changing model weights frequently",
              "Managing backward/forward-compatible changes to message contracts so agents remain interoperable",
              "Compressing tokens",
              "Eliminating all schemas",
            ],
            answer:
              "Managing backward/forward-compatible changes to message contracts so agents remain interoperable",
            explanation:
              "Schema evolution planning avoids breaking integrations when contracts change.",
          },
          {
            id: 2236,
            question:
              "Which operational control helps detect regressive behavior when deploying new agent versions?",
            options: [
              "No monitoring",
              "Canary deployments and A/B testing with metrics and alerting",
              "Full rollouts without checks",
              "Random user sampling only",
            ],
            answer:
              "Canary deployments and A/B testing with metrics and alerting",
            explanation:
              "Canaries expose regressions early on a small subset of traffic.",
          },
          {
            id: 2237,
            question:
              "Why is explicit error taxonomy helpful in orchestration?",
            options: [
              "It isn’t helpful",
              "It standardizes how failures are classified so orchestrators can react appropriately (retry, fallback, escalate)",
              "It increases token usage",
              "It prevents all errors",
            ],
            answer:
              "It standardizes how failures are classified so orchestrators can react appropriately (retry, fallback, escalate)",
            explanation:
              "Consistent error categories enable systematic failure handling across agents.",
          },
          {
            id: 2238,
            question:
              "Which mechanism is useful to guarantee at-least-once or exactly-once semantics between agents?",
            options: [
              "No guarantees",
              "Idempotent handlers, deduplication, transactional outbox patterns, or distributed transactions",
              "Only synchronous calls",
              "Always dropping messages on failure",
            ],
            answer:
              "Idempotent handlers, deduplication, transactional outbox patterns, or distributed transactions",
            explanation:
              "These techniques provide stronger delivery and processing semantics in distributed systems.",
          },
          {
            id: 2239,
            question:
              "What is the value of providing human-readable explanations alongside machine outputs in multi-agent orchestration?",
            options: [
              "No value",
              "Increases trust, aids debugging, and assists human-in-the-loop decision-making",
              "Only increases token costs",
              "Confuses operators",
            ],
            answer:
              "Increases trust, aids debugging, and assists human-in-the-loop decision-making",
            explanation:
              "Explanations give context and rationale for automated actions and support audits.",
          },
          {
            id: 2240,
            question:
              "Which backoff strategy is recommended for retries across agents?",
            options: [
              "Tight immediate retries forever",
              "Exponential backoff with jitter and a retry budget",
              "Always wait a fixed long time",
              "No retries at all",
            ],
            answer: "Exponential backoff with jitter and a retry budget",
            explanation:
              "Backoff with jitter reduces contention and prevents cascades; budgets avoid infinite retries.",
          },
          {
            id: 2241,
            question:
              "How should sensitive data be treated when passed between agents?",
            options: [
              "Pass in plain text to simplify debugging",
              "Use encryption in transit, tokenization, minimize exposure, and enforce least privilege",
              "Store secrets in logs",
              "Always include full PII",
            ],
            answer:
              "Use encryption in transit, tokenization, minimize exposure, and enforce least privilege",
            explanation:
              "Protecting PII and secrets is critical for security and compliance.",
          },
          {
            id: 2242,
            question:
              "Which orchestration component helps coordinate long-running human approvals?",
            options: [
              "Short-lived synchronous calls",
              "Durable workflow engines that can pause, wait for human input, and resume",
              "Random retries",
              "No-op services",
            ],
            answer:
              "Durable workflow engines that can pause, wait for human input, and resume",
            explanation:
              "Durable workflows support multi-step processes requiring human approvals without losing state.",
          },
          {
            id: 2243,
            question:
              "Why include SLA and latency targets in orchestrator routing decisions?",
            options: [
              "They are irrelevant",
              "Routing can prefer lower-latency or higher-capability agents to meet SLAs for certain requests",
              "Only for batch jobs",
              "To decrease observability",
            ],
            answer:
              "Routing can prefer lower-latency or higher-capability agents to meet SLAs for certain requests",
            explanation:
              "Incorporating SLAs ensures user-critical requests meet performance expectations.",
          },
          {
            id: 2244,
            question:
              "What is a practical way to debug complex multi-agent failures in production?",
            options: [
              "Turn off tracing and hope for the best",
              "Collect correlated traces, structured logs, request ids, and replay or simulate failing flows in test environments",
              "Only read individual agent logs without correlation",
              "Disable monitoring",
            ],
            answer:
              "Collect correlated traces, structured logs, request ids, and replay or simulate failing flows in test environments",
            explanation:
              "Correlated telemetry and replay testing make root-cause analysis effective.",
          },
          {
            id: 2245,
            question:
              "Which orchestration decision should consider cost-awareness?",
            options: [
              "Never consider cost",
              "Choose cheaper models/tools for low-risk requests and richer models when value justifies cost",
              "Always use the most expensive option",
              "Disable cost metrics",
            ],
            answer:
              "Choose cheaper models/tools for low-risk requests and richer models when value justifies cost",
            explanation:
              "Cost-aware routing balances expense and customer value to optimize spend.",
          },
          {
            id: 2246,
            question:
              "How does feature-flagging benefit orchestrated agent rollouts?",
            options: [
              "It has no benefit",
              "Enable controlled rollouts, quick rollback, and safe experimentation across agents",
              "Automatically disables observability",
              "Prevents testing",
            ],
            answer:
              "Enable controlled rollouts, quick rollback, and safe experimentation across agents",
            explanation:
              "Feature flags let teams toggle new behaviors without full deployments.",
          },
          {
            id: 2247,
            question:
              "Why is test harness/simulation important for orchestration logic?",
            options: [
              "Simulations are unnecessary",
              "They let you validate routing, failure handling, and performance without risking production",
              "Only unit tests are enough",
              "They replace contract tests",
            ],
            answer:
              "They let you validate routing, failure handling, and performance without risking production",
            explanation:
              "Simulations uncover systemic issues before production rollouts.",
          },
          {
            id: 2248,
            question:
              "What should orchestration logs include to aid post-incident analysis?",
            options: [
              "Only timestamps",
              "Request IDs, agent decisions, input/output snapshots (sanitized), and error classifications",
              "Full unredacted PII",
              "No contextual data",
            ],
            answer:
              "Request IDs, agent decisions, input/output snapshots (sanitized), and error classifications",
            explanation:
              "Structured contextual logs support efficient incident reviews while protecting privacy.",
          },
          {
            id: 2249,
            question:
              "Which practice helps keep orchestration logic maintainable as systems grow?",
            options: [
              "Hard-coding routing rules everywhere",
              "Modular orchestration, clear contracts, documentation, and centralized policy/feature stores",
              "Avoiding documentation",
              "Disabling tests",
            ],
            answer:
              "Modular orchestration, clear contracts, documentation, and centralized policy/feature stores",
            explanation:
              "Maintainability comes from modularity, well-documented contracts, and centralized management.",
          },
          {
            id: 2250,
            question:
              "Which short summary best captures safe orchestration best-practices?",
            options: [
              "Centralize everything and never decentralize",
              "Define clear contracts, use async durable workflows, handle failures with timeouts/backoff/fallbacks, enforce security and quotas, instrument thoroughly, and test via simulations and canaries",
              "Avoid monitoring and roll out globally fast",
              "Always use the most complex models",
            ],
            answer:
              "Define clear contracts, use async durable workflows, handle failures with timeouts/backoff/fallbacks, enforce security and quotas, instrument thoroughly, and test via simulations and canaries",
            explanation:
              "This encapsulates the practical principles for reliable, secure, and maintainable multi-agent orchestration.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Advanced",
    url: "/advanced",
    description: "Advanced topics in tracing and debugging",
    topics: [
      {
        id: 20101,
        name: "Dynamic Instructions in Agents",
        description:
          "MCQs about defining, modifying, and applying dynamic instructions in agent workflows.",
        mcqs: [
          {
            id: 2010101,
            question: "What are dynamic instructions in AI agents?",
            options: [
              "Static predefined rules",
              "Instructions that adapt during runtime",
              "Schema validation settings",
              "Fixed hyperparameters",
            ],
            answer: "Instructions that adapt during runtime",
            explanation:
              "Dynamic instructions adjust agent behavior depending on input, context, or runtime events.",
          },
          {
            id: 2010102,
            question:
              "How do dynamic instructions differ from static instructions?",
            options: [
              "Static are predefined, dynamic adjust at runtime",
              "Dynamic are less flexible",
              "Static are always faster",
              "Dynamic are used only in debugging",
            ],
            answer: "Static are predefined, dynamic adjust at runtime",
            explanation:
              "Dynamic instructions adapt, while static remain fixed throughout execution.",
          },
          {
            id: 2010103,
            question: "Which is a key benefit of dynamic instructions?",
            options: [
              "Better adaptability to context",
              "Reduced latency always",
              "Automatic schema generation",
              "Prevents errors completely",
            ],
            answer: "Better adaptability to context",
            explanation:
              "Dynamic instructions let agents respond better to changing conditions.",
          },
          {
            id: 2010104,
            question: "Dynamic instructions are MOST useful in:",
            options: [
              "Static knowledge bases",
              "Context-aware workflows",
              "Data encryption",
              "GPU allocation",
            ],
            answer: "Context-aware workflows",
            explanation:
              "They help in workflows that require adapting based on user or system state.",
          },
          {
            id: 2010105,
            question: "Which function typically enables dynamic instructions?",
            options: [
              "handoff()",
              "set_instructions()",
              "trace()",
              "reset_tool_choice()",
            ],
            answer: "set_instructions()",
            explanation:
              "Dynamic instructions are often set via functions like set_instructions().",
          },
          {
            id: 2010106,
            question:
              "What happens if dynamic instructions conflict with base instructions?",
            options: [
              "Agent crashes",
              "Dynamic overrides static",
              "Static overrides dynamic",
              "System ignores both",
            ],
            answer: "Dynamic overrides static",
            explanation:
              "Dynamic instructions generally take precedence to adapt behavior.",
          },
          {
            id: 2010107,
            question:
              "Which of the following is an example of dynamic instruction?",
            options: [
              "Always use tool A",
              "Switch to tool B if user asks for images",
              "Temperature = 0.7",
              "Always produce JSON",
            ],
            answer: "Switch to tool B if user asks for images",
            explanation:
              "Dynamic instructions can change based on specific conditions.",
          },
          {
            id: 2010108,
            question: "Dynamic instructions allow customization of:",
            options: [
              "Execution flow only",
              "Context, tools, and responses",
              "GPU allocation only",
              "Token length only",
            ],
            answer: "Context, tools, and responses",
            explanation:
              "They influence multiple aspects of agent behavior dynamically.",
          },
          {
            id: 2010109,
            question:
              "Which OpenAI concept supports dynamic instruction injection?",
            options: [
              "Context variables",
              "Embeddings",
              "Tokens",
              "Frequency penalty",
            ],
            answer: "Context variables",
            explanation:
              "Dynamic instructions are often tied to runtime context injection.",
          },
          {
            id: 2010110,
            question:
              "Why are dynamic instructions critical for multi-agent systems?",
            options: [
              "They reduce training data size",
              "They allow agents to coordinate based on context",
              "They remove tool usage",
              "They fix hyperparameters",
            ],
            answer: "They allow agents to coordinate based on context",
            explanation:
              "Agents adapt instructions dynamically to collaborate effectively.",
          },

          {
            id: 2010111,
            question: "Which statement is true about dynamic instructions?",
            options: [
              "They cannot be updated once set",
              "They can be updated anytime at runtime",
              "They only work with static tools",
              "They are optional but slow",
            ],
            answer: "They can be updated anytime at runtime",
            explanation:
              "Dynamic instructions are flexible and can change during execution.",
          },
          {
            id: 2010112,
            question: "Dynamic instructions help reduce:",
            options: [
              "Agent rigidity",
              "Token limits",
              "GPU costs",
              "Schema errors",
            ],
            answer: "Agent rigidity",
            explanation:
              "They make agents more flexible by adapting instructions.",
          },
          {
            id: 2010113,
            question: "Which parameter can dynamic instructions modify?",
            options: [
              "Temperature",
              "Top-k",
              "Context window",
              "All of the above",
            ],
            answer: "All of the above",
            explanation:
              "Dynamic instructions can influence multiple runtime parameters.",
          },
          {
            id: 2010114,
            question: "Dynamic instructions are especially useful in:",
            options: [
              "Adaptive tutoring systems",
              "Static dashboards",
              "Hard-coded programs",
              "Tokenizers",
            ],
            answer: "Adaptive tutoring systems",
            explanation:
              "They allow personalized adaptation in learning systems.",
          },
          {
            id: 2010115,
            question:
              "Which OpenAI SDK component supports dynamic instructions?",
            options: [
              "Agent configuration",
              "Handoff function",
              "Guardrails",
              "Runner only",
            ],
            answer: "Agent configuration",
            explanation:
              "Dynamic instructions are part of flexible agent configuration.",
          },
          {
            id: 2010116,
            question: "What is an example of dynamic role assignment?",
            options: [
              "Always assistant",
              "Agent becomes expert if user asks for medical advice",
              "Always system role",
              "Never changes role",
            ],
            answer: "Agent becomes expert if user asks for medical advice",
            explanation:
              "Dynamic role assignment adapts roles based on context.",
          },
          {
            id: 2010117,
            question:
              "Which coding construct often enables dynamic instructions?",
            options: [
              "Conditionals (if/else)",
              "Loops only",
              "Static imports",
              "Hard-coded values",
            ],
            answer: "Conditionals (if/else)",
            explanation: "Conditional logic drives dynamic behavior.",
          },
          {
            id: 2010118,
            question:
              "Which of the following is NOT a use of dynamic instructions?",
            options: [
              "Context adaptation",
              "User-specific responses",
              "Schema enforcement",
              "Changing tokens randomly",
            ],
            answer: "Changing tokens randomly",
            explanation: "Dynamic instructions are purposeful, not random.",
          },
          {
            id: 2010119,
            question:
              "What can be combined with dynamic instructions for better flexibility?",
            options: [
              "Guardrails",
              "Static memory only",
              "GPU drivers",
              "Schema compilers",
            ],
            answer: "Guardrails",
            explanation:
              "Guardrails ensure dynamic instructions still follow safety rules.",
          },
          {
            id: 2010120,
            question: "Which advanced feature uses dynamic instructions?",
            options: [
              "Context-driven routing",
              "Token compression",
              "Batch normalization",
              "Gradient descent",
            ],
            answer: "Context-driven routing",
            explanation:
              "Dynamic instructions allow routing decisions based on runtime context.",
          },

          {
            id: 2010121,
            question: "In a chatbot, dynamic instructions allow:",
            options: [
              "Static greetings only",
              "Adjusting answers per user profile",
              "Disabling context use",
              "Forcing only JSON output",
            ],
            answer: "Adjusting answers per user profile",
            explanation: "Chatbots adapt to user preferences dynamically.",
          },
          {
            id: 2010122,
            question: "Dynamic instructions improve agent collaboration by:",
            options: [
              "Making them independent always",
              "Allowing task-based adaptation",
              "Preventing tool use",
              "Locking configurations",
            ],
            answer: "Allowing task-based adaptation",
            explanation:
              "Agents adapt roles or instructions depending on tasks.",
          },
          {
            id: 2010123,
            question: "Which error may occur without dynamic instructions?",
            options: [
              "Rigid, irrelevant responses",
              "GPU crash",
              "Token overflow always",
              "Schema mismatch",
            ],
            answer: "Rigid, irrelevant responses",
            explanation:
              "Without dynamic instructions, agents cannot adapt effectively.",
          },
          {
            id: 2010124,
            question: "Dynamic instructions can be passed via:",
            options: [
              "Context injection",
              "Command line only",
              "GPU pipelines",
              "File system only",
            ],
            answer: "Context injection",
            explanation: "They are often injected dynamically at runtime.",
          },
          {
            id: 2010125,
            question: "Which real-world app uses dynamic instructions?",
            options: [
              "Adaptive customer support bots",
              "Fixed FAQ pages",
              "Static web pages",
              "Manual ticket systems",
            ],
            answer: "Adaptive customer support bots",
            explanation: "They adapt dynamically to user questions.",
          },

          {
            id: 2010126,
            question: "How do dynamic instructions improve personalization?",
            options: [
              "By adapting tone, style, and detail",
              "By reducing tokens",
              "By avoiding schemas",
              "By caching outputs",
            ],
            answer: "By adapting tone, style, and detail",
            explanation:
              "They allow responses to match user needs more closely.",
          },
          {
            id: 2010127,
            question:
              "Which runtime variable often drives dynamic instructions?",
            options: [
              "User intent",
              "Model size",
              "GPU drivers",
              "Schema type",
            ],
            answer: "User intent",
            explanation:
              "Dynamic instructions respond primarily to user intent.",
          },
          {
            id: 2010128,
            question: "Which setting can be adjusted dynamically?",
            options: [
              "Top-p",
              "Temperature",
              "Tool choice",
              "All of the above",
            ],
            answer: "All of the above",
            explanation:
              "Dynamic instructions can change multiple model settings.",
          },
          {
            id: 2010129,
            question: "Dynamic instructions improve:",
            options: [
              "Agent flexibility and adaptability",
              "Model training only",
              "Static rule enforcement",
              "Hardware speed",
            ],
            answer: "Agent flexibility and adaptability",
            explanation:
              "They allow agents to work better in real-world scenarios.",
          },
          {
            id: 2010130,
            question: "What is a challenge of using dynamic instructions?",
            options: [
              "Complexity in debugging",
              "Increased static rules",
              "Token reduction",
              "GPU crash",
            ],
            answer: "Complexity in debugging",
            explanation: "Since instructions change, debugging can be harder.",
          },

          {
            id: 2010131,
            question: "Dynamic instructions are related to:",
            options: [
              "Prompt engineering",
              "Batch normalization",
              "Tokenization",
              "Gradient clipping",
            ],
            answer: "Prompt engineering",
            explanation:
              "They are part of prompt design and runtime adaptation.",
          },
          {
            id: 2010132,
            question: "What happens if dynamic instructions are misused?",
            options: [
              "Unintended agent behavior",
              "Token reduction",
              "Schema validation errors only",
              "Always faster execution",
            ],
            answer: "Unintended agent behavior",
            explanation:
              "Poorly written dynamic rules can cause wrong responses.",
          },
          {
            id: 2010133,
            question: "Dynamic instructions can be stored in:",
            options: [
              "Context memory",
              "GPU memory only",
              "Static files only",
              "Compiler cache",
            ],
            answer: "Context memory",
            explanation:
              "They are often injected and tracked via context memory.",
          },
          {
            id: 2010134,
            question: "Which layer of agents uses dynamic instructions most?",
            options: [
              "Decision-making layer",
              "Transport layer",
              "Hardware layer",
              "Compiler layer",
            ],
            answer: "Decision-making layer",
            explanation: "They affect decision flow at runtime.",
          },
          {
            id: 2010135,
            question: "Dynamic instructions help multi-step reasoning by:",
            options: [
              "Adapting steps as needed",
              "Fixing all outputs",
              "Skipping context",
              "Reducing schema",
            ],
            answer: "Adapting steps as needed",
            explanation:
              "They allow reasoning to change depending on new info.",
          },

          {
            id: 2010136,
            question: "Which is an implementation challenge?",
            options: [
              "Maintaining consistency",
              "Random GPU usage",
              "Token overflow",
              "Always low latency",
            ],
            answer: "Maintaining consistency",
            explanation:
              "Keeping outputs consistent with changing instructions is tricky.",
          },
          {
            id: 2010137,
            question: "What ensures safe dynamic instructions?",
            options: [
              "Guardrails",
              "GPU monitoring",
              "Schema compilers",
              "Static caching",
            ],
            answer: "Guardrails",
            explanation: "They prevent unsafe dynamic adaptations.",
          },
          {
            id: 2010138,
            question:
              "Which type of applications rely heavily on dynamic instructions?",
            options: [
              "Adaptive assistants",
              "Static dashboards",
              "Offline scripts",
              "Non-interactive apps",
            ],
            answer: "Adaptive assistants",
            explanation: "Assistants adapt dynamically to user context.",
          },
          {
            id: 2010139,
            question: "Dynamic instructions improve tool orchestration by:",
            options: [
              "Choosing tools contextually",
              "Disabling tools always",
              "Fixing one tool only",
              "Avoiding tool calls",
            ],
            answer: "Choosing tools contextually",
            explanation: "They allow tool choice to depend on context.",
          },
          {
            id: 2010140,
            question: "Dynamic instructions often act as:",
            options: [
              "Overrides for base instructions",
              "Permanent hard rules",
              "Tokenizers",
              "GPU schedulers",
            ],
            answer: "Overrides for base instructions",
            explanation:
              "They can override base static instructions at runtime.",
          },

          {
            id: 2010141,
            question:
              "Which developer role benefits most from dynamic instructions?",
            options: [
              "AI engineers building adaptive agents",
              "GPU hardware engineers",
              "Data entry operators",
              "OS developers",
            ],
            answer: "AI engineers building adaptive agents",
            explanation:
              "Dynamic instructions are mainly used by AI developers.",
          },
          {
            id: 2010142,
            question:
              "What ensures dynamic instructions don’t drift from goals?",
            options: [
              "Clear objectives + guardrails",
              "GPU limits",
              "Token restriction only",
              "Compiler flags",
            ],
            answer: "Clear objectives + guardrails",
            explanation: "Well-designed objectives keep instructions aligned.",
          },
          {
            id: 2010143,
            question:
              "Which environment supports dynamic instructions strongly?",
            options: [
              "Agent SDK",
              "Static Python scripts",
              "HTML forms",
              "GPU BIOS",
            ],
            answer: "Agent SDK",
            explanation:
              "The Agent SDK supports runtime modifications via dynamic instructions.",
          },
          {
            id: 2010144,
            question: "Dynamic instructions can adapt agent tone to:",
            options: [
              "Formal vs casual responses",
              "GPU clock speed",
              "Schema version",
              "Tokenization type",
            ],
            answer: "Formal vs casual responses",
            explanation: "Tone is one personalization example.",
          },
          {
            id: 2010145,
            question:
              "Which advanced feature is unlocked by dynamic instructions?",
            options: [
              "Adaptive tool use",
              "Fixed execution",
              "Token reduction",
              "Schema freezing",
            ],
            answer: "Adaptive tool use",
            explanation: "They enable context-sensitive tool usage.",
          },

          {
            id: 2010146,
            question: "What is the risk of too many dynamic instructions?",
            options: [
              "Unstable behavior",
              "Low GPU usage",
              "Fewer tokens",
              "Schema inflation",
            ],
            answer: "Unstable behavior",
            explanation:
              "Too many dynamic changes can make behavior unpredictable.",
          },
          {
            id: 2010147,
            question: "Dynamic instructions must be:",
            options: [
              "Context-aware and validated",
              "Randomized always",
              "GPU dependent",
              "Static after training",
            ],
            answer: "Context-aware and validated",
            explanation:
              "They must align with context and be validated for safety.",
          },
          {
            id: 2010148,
            question: "Which deployment scenario benefits most?",
            options: [
              "Adaptive customer service bots",
              "Fixed website FAQs",
              "Static dashboards",
              "Batch jobs",
            ],
            answer: "Adaptive customer service bots",
            explanation: "These require runtime adaptation per user.",
          },
          {
            id: 2010149,
            question: "Dynamic instructions integrate best with:",
            options: [
              "Streaming + Context",
              "GPU drivers only",
              "OS schedulers",
              "Static pages",
            ],
            answer: "Streaming + Context",
            explanation:
              "Dynamic instructions rely on runtime context and can adapt in streaming workflows.",
          },
          {
            id: 2010150,
            question: "Main advantage of dynamic instructions?",
            options: [
              "Real-time adaptability",
              "Fixed performance",
              "GPU acceleration",
              "Schema-free execution",
            ],
            answer: "Real-time adaptability",
            explanation: "Their core benefit is adaptability during runtime.",
          },
        ],
      },
      {
        id: 203,
        name: "Output Types",
        description:
          "Understanding various output formats and structures used by agents",
        mcqs: [
          {
            id: 2030101,
            question:
              "What is the most common default output type of AI agents?",
            options: ["Text", "JSON", "Audio", "Video"],
            answer: "Text",
            explanation: "Most AI models return plain text outputs by default.",
          },
          {
            id: 2030102,
            question:
              "Which output type is preferred when the agent must return structured data?",
            options: ["Text", "JSON", "CSV", "Image"],
            answer: "JSON",
            explanation: "JSON allows structured and machine-readable outputs.",
          },
          {
            id: 2030103,
            question: "Why are structured output types important?",
            options: [
              "They reduce latency",
              "They enforce predictable formats",
              "They increase randomness",
              "They disable validation",
            ],
            answer: "They enforce predictable formats",
            explanation:
              "Structured outputs ensure consistency for downstream systems.",
          },
          {
            id: 2030104,
            question:
              "Which agent output type is best suited for API integrations?",
            options: ["Plain text", "JSON", "HTML", "CSV"],
            answer: "JSON",
            explanation: "APIs typically consume JSON as input/output format.",
          },
          {
            id: 2030105,
            question:
              "What type of output is required when building conversational agents?",
            options: ["JSON only", "Audio", "Text", "HTML"],
            answer: "Text",
            explanation:
              "Conversational agents primarily return text for communication.",
          },
          {
            id: 2030106,
            question: "What is the advantage of specifying schema for output?",
            options: [
              "Improves randomness",
              "Ensures structured response",
              "Removes guardrails",
              "Increases tokens",
            ],
            answer: "Ensures structured response",
            explanation:
              "Schema validation ensures responses match the expected format.",
          },
          {
            id: 2030107,
            question: "Which tool can validate JSON output from agents?",
            options: ["Pydantic", "NumPy", "Matplotlib", "TensorFlow"],
            answer: "Pydantic",
            explanation:
              "Pydantic is often used to validate JSON outputs against schemas.",
          },
          {
            id: 2030108,
            question:
              "Which output type is useful for extracting specific fields from agent responses?",
            options: ["Structured JSON", "Plain text", "Image", "Markdown"],
            answer: "Structured JSON",
            explanation:
              "Structured JSON allows extracting specific values reliably.",
          },
          {
            id: 2030109,
            question:
              "What happens if an agent output does not match the schema?",
            options: [
              "It is auto-corrected",
              "It is rejected or retried",
              "It becomes plain text",
              "It is ignored",
            ],
            answer: "It is rejected or retried",
            explanation:
              "Schema mismatch often triggers retries or error handling.",
          },
          {
            id: 2030110,
            question:
              "Which advanced output type is used when agents call tools?",
            options: ["Tool response objects", "Plain text", "CSV", "Markdown"],
            answer: "Tool response objects",
            explanation:
              "Agents calling tools typically return tool response objects.",
          },
          {
            id: 2030111,
            question:
              "Which of the following is NOT an output type for agents?",
            options: ["Structured JSON", "Images", "Spans", "Videos"],
            answer: "Spans",
            explanation: "Spans belong to tracing, not output formats.",
          },
          {
            id: 2030112,
            question: "Why might JSON output be preferable to text?",
            options: [
              "It is easier for humans to read",
              "It supports schema validation",
              "It reduces token usage",
              "It increases randomness",
            ],
            answer: "It supports schema validation",
            explanation:
              "JSON allows programmatic validation and structured parsing.",
          },
          {
            id: 2030113,
            question:
              "What type of output ensures maximum flexibility but less reliability?",
            options: [
              "Plain text",
              "Structured JSON",
              "Schema-enforced",
              "Tool-specific",
            ],
            answer: "Plain text",
            explanation:
              "Plain text is flexible but less predictable than structured outputs.",
          },
          {
            id: 2030114,
            question: "Which output type is most common in LLM-based chatbots?",
            options: ["Images", "Text", "Audio", "JSON"],
            answer: "Text",
            explanation:
              "Chatbots usually generate conversational text outputs.",
          },
          {
            id: 2030115,
            question: "How can developers enforce specific output formats?",
            options: [
              "By defining output schemas",
              "By disabling tracing",
              "By enabling streaming",
              "By reducing tokens",
            ],
            answer: "By defining output schemas",
            explanation: "Schemas enforce specific output structures.",
          },
          {
            id: 2030116,
            question:
              "Which type of output can be directly fed into visualization libraries?",
            options: ["JSON", "Plain text", "Markdown", "Image"],
            answer: "JSON",
            explanation:
              "Visualization tools often accept structured JSON data.",
          },
          {
            id: 2030117,
            question: "What is the role of 'structured output' in agents?",
            options: [
              "To randomize responses",
              "To enforce consistency",
              "To reduce latency",
              "To disable guardrails",
            ],
            answer: "To enforce consistency",
            explanation:
              "Structured output ensures predictable responses for integration.",
          },
          {
            id: 2030118,
            question:
              "Which serialization format is widely used for agent output besides JSON?",
            options: ["YAML", "TXT", "HTML", "PDF"],
            answer: "YAML",
            explanation:
              "YAML is another structured data format, though JSON is more common.",
          },
          {
            id: 2030119,
            question:
              "What output type is best when integrating agents with data pipelines?",
            options: ["JSON", "Plain text", "Markdown", "HTML"],
            answer: "JSON",
            explanation:
              "Pipelines need structured outputs, making JSON ideal.",
          },
          {
            id: 2030120,
            question:
              "Which of these formats is most human-friendly but less machine-friendly?",
            options: ["Text", "JSON", "YAML", "Schema-validated"],
            answer: "Text",
            explanation:
              "Text is human-readable but harder for machines to validate.",
          },
          {
            id: 2030121,
            question: "Which output type supports key-value data storage?",
            options: ["JSON", "Plain text", "CSV", "Markdown"],
            answer: "JSON",
            explanation: "JSON provides structured key-value pairs.",
          },
          {
            id: 2030122,
            question: "What is the drawback of plain text outputs?",
            options: [
              "Difficult to parse reliably",
              "Consumes more tokens",
              "Too structured",
              "Requires JSON schema",
            ],
            answer: "Difficult to parse reliably",
            explanation:
              "Plain text lacks structure, making parsing unreliable.",
          },
          {
            id: 2030123,
            question: "Which is most suitable for numerical data exchange?",
            options: ["JSON", "Plain text", "Markdown", "PDF"],
            answer: "JSON",
            explanation: "JSON ensures numbers retain structure and meaning.",
          },
          {
            id: 2030124,
            question: "When is Markdown output useful?",
            options: [
              "For formatting text responses",
              "For schema validation",
              "For JSON exchange",
              "For structured pipelines",
            ],
            answer: "For formatting text responses",
            explanation:
              "Markdown allows rich text formatting like headings and lists.",
          },
          {
            id: 2030125,
            question:
              "Which advanced output type allows agents to return function call responses?",
            options: ["Tool output", "Markdown", "CSV", "HTML"],
            answer: "Tool output",
            explanation:
              "When agents call tools, outputs are wrapped as tool responses.",
          },
          {
            id: 2030126,
            question: "Which is NOT a structured output type?",
            options: ["JSON", "CSV", "Text", "YAML"],
            answer: "Text",
            explanation: "Text is unstructured, unlike JSON, CSV, or YAML.",
          },
          {
            id: 2030127,
            question:
              "Which validation method ensures JSON output correctness?",
            options: [
              "Schema validation",
              "Random sampling",
              "Tokenization",
              "Tracing",
            ],
            answer: "Schema validation",
            explanation:
              "Schemas verify whether JSON output matches required structure.",
          },
          {
            id: 2030128,
            question: "Which output type is better for tabular data?",
            options: ["CSV", "JSON", "Text", "Markdown"],
            answer: "CSV",
            explanation: "CSV is structured for tabular data representation.",
          },
          {
            id: 2030129,
            question: "What is the role of 'tool_choice' in structured output?",
            options: [
              "Defines output schema",
              "Specifies which tool to use",
              "Increases randomness",
              "Validates text",
            ],
            answer: "Specifies which tool to use",
            explanation:
              "tool_choice defines which tool an agent should call for structured results.",
          },
          {
            id: 2030130,
            question:
              "Which type of output is easiest for humans but hardest for APIs?",
            options: ["Plain text", "JSON", "CSV", "YAML"],
            answer: "Plain text",
            explanation:
              "Humans can read text easily, but APIs struggle with unstructured text.",
          },
          {
            id: 2030131,
            question:
              "Which feature allows automatic retry when output mismatches schema?",
            options: ["Guardrails", "Tracing", "Streaming", "Hooks"],
            answer: "Guardrails",
            explanation:
              "Guardrails enforce schema compliance by retrying invalid outputs.",
          },
          {
            id: 2030132,
            question:
              "Which schema language is often used for defining structured output?",
            options: [
              "JSON Schema",
              "YAML Flow",
              "Markdown Rules",
              "CSV Tokens",
            ],
            answer: "JSON Schema",
            explanation:
              "JSON Schema is commonly used to define expected structured outputs.",
          },
          {
            id: 2030133,
            question:
              "Why is structured output critical in multi-agent orchestration?",
            options: [
              "Ensures agents exchange consistent data",
              "Increases randomness",
              "Enables tracing only",
              "Improves latency",
            ],
            answer: "Ensures agents exchange consistent data",
            explanation:
              "Agents must share structured data to collaborate effectively.",
          },
          {
            id: 2030134,
            question:
              "Which advanced output can combine schema validation and tool responses?",
            options: [
              "Structured tool output",
              "Plain text",
              "Markdown",
              "CSV",
            ],
            answer: "Structured tool output",
            explanation:
              "Tool outputs can be validated against schemas for consistency.",
          },
          {
            id: 2030135,
            question:
              "Which file extension is common for structured agent outputs?",
            options: [".json", ".txt", ".csv", ".md"],
            answer: ".json",
            explanation:
              "JSON (.json) is the most common file format for structured outputs.",
          },
          {
            id: 2030136,
            question:
              "Which property of structured output reduces parsing errors?",
            options: ["Consistency", "Randomness", "Temperature", "Streaming"],
            answer: "Consistency",
            explanation:
              "Structured outputs enforce consistent format, avoiding parsing errors.",
          },
          {
            id: 2030137,
            question: "What output type is best for rendering web dashboards?",
            options: ["JSON", "CSV", "Text", "Markdown"],
            answer: "JSON",
            explanation:
              "Dashboards rely on JSON to fetch and render structured data.",
          },
          {
            id: 2030138,
            question: "What is a major challenge with plain text outputs?",
            options: [
              "Ambiguity in interpretation",
              "High token cost",
              "Schema enforcement",
              "Readability",
            ],
            answer: "Ambiguity in interpretation",
            explanation:
              "Plain text lacks structure, making interpretation ambiguous.",
          },
          {
            id: 2030139,
            question:
              "Which output type is human-readable and supports formatting?",
            options: ["Markdown", "CSV", "JSON", "Binary"],
            answer: "Markdown",
            explanation: "Markdown supports formatted, human-friendly text.",
          },
          {
            id: 2030140,
            question: "Which structured output is most widely used in APIs?",
            options: ["JSON", "YAML", "CSV", "Markdown"],
            answer: "JSON",
            explanation: "APIs almost universally use JSON for data exchange.",
          },
          {
            id: 2030141,
            question: "Which feature helps ensure consistent agent responses?",
            options: [
              "Schema enforcement",
              "Random sampling",
              "Streaming",
              "Tracing",
            ],
            answer: "Schema enforcement",
            explanation:
              "Schemas enforce consistent structure and predictable outputs.",
          },
          {
            id: 2030142,
            question:
              "Which output type allows agents to return multiple objects at once?",
            options: [
              "JSON arrays",
              "Plain text",
              "CSV rows",
              "Markdown lists",
            ],
            answer: "JSON arrays",
            explanation:
              "JSON arrays support multiple objects in a single output.",
          },
          {
            id: 2030143,
            question: "Which problem arises when using plain text outputs?",
            options: [
              "Parsing errors",
              "Schema rigidity",
              "Tool failure",
              "High accuracy",
            ],
            answer: "Parsing errors",
            explanation:
              "Plain text parsing is error-prone due to lack of structure.",
          },
          {
            id: 2030144,
            question:
              "Which structured output is most flexible across languages?",
            options: ["JSON", "CSV", "Markdown", "HTML"],
            answer: "JSON",
            explanation:
              "JSON is universally supported across programming languages.",
          },
          {
            id: 2030145,
            question: "Which output type is more verbose but machine-friendly?",
            options: ["JSON", "Text", "Markdown", "CSV"],
            answer: "JSON",
            explanation: "JSON is verbose but highly machine-readable.",
          },
          {
            id: 2030146,
            question:
              "Which schema-based validation library is commonly used with agents?",
            options: ["Pydantic", "PyTorch", "NumPy", "Matplotlib"],
            answer: "Pydantic",
            explanation:
              "Pydantic validates structured JSON outputs using schemas.",
          },
          {
            id: 2030147,
            question:
              "Which scenario benefits most from schema-enforced outputs?",
            options: [
              "Financial reporting",
              "Casual conversation",
              "Random story writing",
              "Chat completion",
            ],
            answer: "Financial reporting",
            explanation:
              "Schema-enforced outputs are critical in finance for reliability.",
          },
          {
            id: 2030148,
            question: "Which format is lightweight for tabular data exchange?",
            options: ["CSV", "JSON", "Markdown", "PDF"],
            answer: "CSV",
            explanation: "CSV is lightweight and ideal for tabular datasets.",
          },
          {
            id: 2030149,
            question: "Which property makes JSON ideal for API output?",
            options: [
              "Human-readability",
              "Language independence",
              "Randomness",
              "Streaming",
            ],
            answer: "Language independence",
            explanation: "JSON works across almost all languages and systems.",
          },
          {
            id: 2030150,
            question:
              "Which output type should be avoided when precision is critical?",
            options: ["Plain text", "JSON", "CSV", "Schema-validated"],
            answer: "Plain text",
            explanation:
              "Plain text may introduce ambiguity and errors in precision tasks.",
          },
        ],
      },
      {
        id: 204,
        name: "Cloning",
        description:
          "Cloning allows duplicating agents with similar configurations and behavior.",
        mcqs: [
          {
            id: 2030101,
            question: "What does agent cloning primarily refer to?",
            options: [
              "Copying the execution logs",
              "Duplicating an agent's configuration and behavior",
              "Generating synthetic data",
              "Resetting tool choices",
            ],
            answer: "Duplicating an agent's configuration and behavior",
            explanation:
              "Cloning means making a copy of an existing agent with the same setup.",
          },
          {
            id: 2030102,
            question: "Why might you clone an agent?",
            options: [
              "To create similar workflows quickly",
              "To reduce tracing complexity",
              "To avoid guardrails",
              "To decrease model accuracy",
            ],
            answer: "To create similar workflows quickly",
            explanation:
              "Cloning allows rapid deployment of agents with shared configurations.",
          },
          {
            id: 2030103,
            question: "Which parameter is usually preserved during cloning?",
            options: [
              "Agent tools and instructions",
              "Temporary logs",
              "User session IDs",
              "Execution tokens",
            ],
            answer: "Agent tools and instructions",
            explanation:
              "The cloned agent keeps its tool integrations and core instructions.",
          },
          {
            id: 2030104,
            question: "What is a potential risk of cloning?",
            options: [
              "Configuration drift",
              "Random output",
              "Improved reliability",
              "Less flexibility",
            ],
            answer: "Configuration drift",
            explanation:
              "Over time, cloned agents may diverge from their source setup.",
          },
          {
            id: 2030105,
            question: "What is the best use case for cloning agents?",
            options: [
              "Testing variations of an existing setup",
              "Reducing temperature",
              "Replacing tracing",
              "Debugging schema validation",
            ],
            answer: "Testing variations of an existing setup",
            explanation:
              "Cloning is often used to test new behaviors without changing the original agent.",
          },
          {
            id: 2030106,
            question: "Which of these is typically NOT cloned?",
            options: [
              "Core logic",
              "Runtime logs",
              "Model settings",
              "Tools list",
            ],
            answer: "Runtime logs",
            explanation:
              "Runtime logs are specific to executions and are not cloned.",
          },
          {
            id: 2030107,
            question: "How does cloning affect scalability?",
            options: [
              "It improves scalability by reusing agent templates",
              "It decreases scalability",
              "It eliminates parallelization",
              "It reduces context usage",
            ],
            answer: "It improves scalability by reusing agent templates",
            explanation:
              "Cloning speeds up deployment of multiple agents for large systems.",
          },
          {
            id: 2030108,
            question: "What should be updated after cloning an agent?",
            options: [
              "Unique identifiers and context",
              "Token size",
              "Trace schema",
              "Error logs",
            ],
            answer: "Unique identifiers and context",
            explanation:
              "To avoid conflicts, cloned agents need unique IDs and fresh context.",
          },
          {
            id: 2030109,
            question: "What is an agent template in cloning?",
            options: [
              "Base configuration reused for clones",
              "A runtime span",
              "A trace schema",
              "A debugging hook",
            ],
            answer: "Base configuration reused for clones",
            explanation: "Agent templates act as a source for cloned agents.",
          },
          {
            id: 2030110,
            question: "What can cloning simplify in multi-agent systems?",
            options: [
              "Replication of specialized roles",
              "Decreasing token usage",
              "Improving GPU utilization",
              "Eliminating guardrails",
            ],
            answer: "Replication of specialized roles",
            explanation:
              "Cloning allows quick replication of agents with specific tasks.",
          },
          {
            id: 2030111,
            question: "Which is a good practice after cloning?",
            options: [
              "Validate tool configurations",
              "Disable tracing",
              "Delete hooks",
              "Increase randomness",
            ],
            answer: "Validate tool configurations",
            explanation:
              "Validation ensures the cloned agent functions correctly.",
          },
          {
            id: 2030112,
            question: "What is deep cloning?",
            options: [
              "Cloning including nested configs",
              "Cloning only the name",
              "Resetting context",
              "Copying execution results",
            ],
            answer: "Cloning including nested configs",
            explanation:
              "Deep cloning ensures even nested structures are duplicated.",
          },
          {
            id: 2030113,
            question: "Which cloning type may lead to shared states?",
            options: [
              "Shallow cloning",
              "Deep cloning",
              "Random cloning",
              "Trace cloning",
            ],
            answer: "Shallow cloning",
            explanation:
              "Shallow clones may still share references, leading to conflicts.",
          },
          {
            id: 2030114,
            question: "When cloning, what happens to runtime context?",
            options: [
              "It must be reset",
              "It is copied",
              "It is encrypted",
              "It is ignored",
            ],
            answer: "It must be reset",
            explanation:
              "Runtime context is unique per session and should be reset.",
          },
          {
            id: 2030115,
            question: "How does cloning relate to modularity?",
            options: [
              "It encourages reusability of agent modules",
              "It reduces modularity",
              "It prevents orchestration",
              "It disables hooks",
            ],
            answer: "It encourages reusability of agent modules",
            explanation:
              "Cloning supports modular design by reusing components.",
          },
          {
            id: 2030116,
            question: "Which role does cloning play in experimentation?",
            options: [
              "Allows safe variations",
              "Prevents debugging",
              "Reduces visibility",
              "Increases error rates",
            ],
            answer: "Allows safe variations",
            explanation:
              "Cloning lets developers try variations without breaking the main agent.",
          },
          {
            id: 2030117,
            question: "Which cloning issue occurs if IDs are not reset?",
            options: [
              "Conflict errors",
              "Improved accuracy",
              "Increased flexibility",
              "Reduced latency",
            ],
            answer: "Conflict errors",
            explanation:
              "Without new IDs, cloned agents may conflict with existing ones.",
          },
          {
            id: 2030118,
            question:
              "What happens if a cloned agent inherits outdated configs?",
            options: [
              "It may malfunction",
              "It improves tracing",
              "It randomizes output",
              "It disables hooks",
            ],
            answer: "It may malfunction",
            explanation: "Outdated configurations can break cloned agents.",
          },
          {
            id: 2030119,
            question: "Which concept is closest to agent cloning?",
            options: [
              "Object-oriented inheritance",
              "Gradient descent",
              "Context passing",
              "Guardrails",
            ],
            answer: "Object-oriented inheritance",
            explanation:
              "Cloning is conceptually similar to inheritance, reusing setups.",
          },
          {
            id: 2030120,
            question: "Which strategy helps manage many clones?",
            options: [
              "Versioning and naming conventions",
              "Random ID reuse",
              "Disabling tracing",
              "Avoiding templates",
            ],
            answer: "Versioning and naming conventions",
            explanation:
              "Clear naming/versioning prevents confusion among clones.",
          },

          {
            id: 2030121,
            question: "What is incremental cloning?",
            options: [
              "Cloning with small changes applied",
              "Cloning without IDs",
              "Cloning logs only",
              "Cloning tokens",
            ],
            answer: "Cloning with small changes applied",
            explanation:
              "Incremental cloning makes slight modifications for experimentation.",
          },
          {
            id: 2030122,
            question:
              "Which agent property should always be unique after cloning?",
            options: [
              "Agent ID",
              "Instruction set",
              "Model type",
              "Guardrails",
            ],
            answer: "Agent ID",
            explanation: "Each clone requires a unique ID for identification.",
          },
          {
            id: 2030123,
            question: "Which problem arises with excessive cloning?",
            options: [
              "Configuration sprawl",
              "Improved efficiency",
              "Lowered debugging effort",
              "Simpler orchestration",
            ],
            answer: "Configuration sprawl",
            explanation: "Too many clones can make systems hard to manage.",
          },
          {
            id: 2030124,
            question: "How does cloning support parallel experiments?",
            options: [
              "By enabling multiple independent variations",
              "By disabling streaming",
              "By limiting hooks",
              "By reducing tool calls",
            ],
            answer: "By enabling multiple independent variations",
            explanation: "Cloning allows safe concurrent testing of ideas.",
          },
          {
            id: 2030125,
            question:
              "Which part of an agent is usually customized after cloning?",
            options: [
              "Instructions or tools",
              "Runtime logs",
              "Trace IDs",
              "Hooks",
            ],
            answer: "Instructions or tools",
            explanation:
              "Customizing instructions/tools tailors cloned agents to new tasks.",
          },
          {
            id: 2030126,
            question: "What is a danger of shallow cloning?",
            options: [
              "Shared references cause conflicts",
              "Agents lose memory",
              "Models reset automatically",
              "Tracing stops",
            ],
            answer: "Shared references cause conflicts",
            explanation:
              "Shallow clones may cause issues if references are not independent.",
          },
          {
            id: 2030127,
            question:
              "What is one benefit of cloning in production environments?",
            options: [
              "Quick scaling of tested setups",
              "Reducing observability",
              "Increasing drift",
              "Removing context",
            ],
            answer: "Quick scaling of tested setups",
            explanation:
              "Cloning proven agents helps scale production systems.",
          },
          {
            id: 2030128,
            question: "Which cloning practice prevents errors?",
            options: [
              "Resetting state and identifiers",
              "Copying runtime context",
              "Ignoring IDs",
              "Skipping validation",
            ],
            answer: "Resetting state and identifiers",
            explanation: "Resetting ensures clones work without conflicts.",
          },
          {
            id: 2030129,
            question: "What is a cloning pitfall?",
            options: [
              "Forgotten dependency updates",
              "Better scalability",
              "Higher observability",
              "Improved guardrails",
            ],
            answer: "Forgotten dependency updates",
            explanation:
              "Dependencies must also be updated to avoid malfunctions.",
          },
          {
            id: 2030130,
            question:
              "What can be cloned for testing different model settings?",
            options: [
              "Base agent configuration",
              "Execution logs",
              "Runtime spans",
              "Guardrails",
            ],
            answer: "Base agent configuration",
            explanation:
              "Cloning configs allows quick testing of model parameters.",
          },
          {
            id: 2030131,
            question: "Which cloning strategy saves time?",
            options: [
              "Using templates",
              "Manual reconfiguration",
              "Rewriting instructions",
              "Disabling hooks",
            ],
            answer: "Using templates",
            explanation: "Templates streamline cloning and reduce manual work.",
          },
          {
            id: 2030132,
            question: "What should be avoided when managing clones?",
            options: [
              "Untracked changes",
              "Version control",
              "Testing variations",
              "Naming conventions",
            ],
            answer: "Untracked changes",
            explanation: "Untracked modifications make debugging harder.",
          },
          {
            id: 2030133,
            question: "Which system is prone to errors if many clones exist?",
            options: [
              "Poorly documented systems",
              "Well-instrumented systems",
              "Version-controlled repos",
              "Monitored workflows",
            ],
            answer: "Poorly documented systems",
            explanation:
              "Lack of documentation causes confusion in clone-heavy environments.",
          },
          {
            id: 2030134,
            question: "Which helps keep cloned agents aligned?",
            options: [
              "Periodic sync and validation",
              "Ignoring versions",
              "Avoiding hooks",
              "Disabling updates",
            ],
            answer: "Periodic sync and validation",
            explanation: "Validation ensures cloned agents remain consistent.",
          },
          {
            id: 2030135,
            question: "What is one way cloning reduces costs?",
            options: [
              "Reusing existing tested setups",
              "Increasing errors",
              "Duplicating logs",
              "Expanding tokens",
            ],
            answer: "Reusing existing tested setups",
            explanation:
              "Reusing configurations avoids building agents from scratch.",
          },
          {
            id: 2030136,
            question: "Which best describes a clone lifecycle?",
            options: [
              "Clone, customize, validate, deploy",
              "Trace, delete, randomize, run",
              "Debug, encrypt, discard, reuse",
              "Copy, merge, randomize, execute",
            ],
            answer: "Clone, customize, validate, deploy",
            explanation:
              "This sequence ensures cloned agents are production-ready.",
          },
          {
            id: 2030137,
            question: "How does cloning impact orchestration?",
            options: [
              "It increases agent diversity for workflows",
              "It blocks orchestration",
              "It removes hooks",
              "It lowers modularity",
            ],
            answer: "It increases agent diversity for workflows",
            explanation:
              "Cloning provides more specialized agents for orchestration.",
          },
          {
            id: 2030138,
            question: "Which cloning issue may cause errors at runtime?",
            options: [
              "Unreset context",
              "Clear instructions",
              "Unique IDs",
              "Defined tools",
            ],
            answer: "Unreset context",
            explanation:
              "If runtime context is copied, unexpected behavior may result.",
          },
          {
            id: 2030139,
            question: "How can cloning affect experimentation speed?",
            options: [
              "It accelerates experimentation",
              "It slows progress",
              "It reduces observability",
              "It blocks tracing",
            ],
            answer: "It accelerates experimentation",
            explanation: "Cloning quickly generates testable variations.",
          },
          {
            id: 2030140,
            question: "What is a cloning anti-pattern?",
            options: [
              "Mass cloning without validation",
              "Using templates",
              "Versioning",
              "Customization",
            ],
            answer: "Mass cloning without validation",
            explanation:
              "Too many clones without testing creates unstable systems.",
          },
          {
            id: 2030141,
            question: "Which role benefits most from cloning?",
            options: [
              "Experimenters and testers",
              "Unrelated users",
              "Data entry clerks",
              "End consumers",
            ],
            answer: "Experimenters and testers",
            explanation: "Cloning is most helpful for experimentation teams.",
          },
          {
            id: 2030142,
            question: "What is a recommended cloning strategy?",
            options: [
              "Documenting changes to clones",
              "Ignoring changes",
              "Skipping validation",
              "Reusing IDs",
            ],
            answer: "Documenting changes to clones",
            explanation: "Documentation ensures clarity and reproducibility.",
          },
          {
            id: 2030143,
            question: "What should NOT be cloned?",
            options: ["User sessions", "Tools", "Instructions", "Settings"],
            answer: "User sessions",
            explanation: "User-specific sessions must remain unique.",
          },
          {
            id: 2030144,
            question:
              "Which problem arises if cloned agents are not monitored?",
            options: [
              "Unexpected drift and errors",
              "Better accuracy",
              "Improved logging",
              "Faster execution",
            ],
            answer: "Unexpected drift and errors",
            explanation: "Cloned agents may diverge and fail if not monitored.",
          },
          {
            id: 2030145,
            question: "Which cloning practice improves maintainability?",
            options: [
              "Centralized templates",
              "Untracked edits",
              "Ad-hoc cloning",
              "Disabled guardrails",
            ],
            answer: "Centralized templates",
            explanation:
              "Templates keep cloned agents consistent and easy to manage.",
          },
          {
            id: 2030146,
            question: "Which factor helps distinguish clones?",
            options: [
              "Unique metadata",
              "Shared runtime",
              "Copied IDs",
              "Random tokens",
            ],
            answer: "Unique metadata",
            explanation:
              "Metadata ensures clones can be identified separately.",
          },
          {
            id: 2030147,
            question: "What is version drift in cloning?",
            options: [
              "Clones evolve separately from source",
              "Clones stay aligned",
              "Tracing is disabled",
              "Tokens are randomized",
            ],
            answer: "Clones evolve separately from source",
            explanation:
              "Version drift happens when clones are not updated consistently.",
          },
          {
            id: 2030148,
            question: "Which cloning step is critical before deployment?",
            options: [
              "Validation of behavior",
              "Copying logs",
              "Resetting tracing",
              "Deleting context",
            ],
            answer: "Validation of behavior",
            explanation: "Cloned agents must be validated before going live.",
          },
          {
            id: 2030149,
            question: "What is one drawback of excessive cloning?",
            options: [
              "Maintenance overhead",
              "Better scaling",
              "Improved testing",
              "Simpler workflows",
            ],
            answer: "Maintenance overhead",
            explanation:
              "Too many clones increase system complexity and maintenance needs.",
          },
          {
            id: 2030150,
            question: "Which describes cloning in one line?",
            options: [
              "Copy agent configs for reuse",
              "Generate new models",
              "Encrypt execution logs",
              "Debug runtime spans",
            ],
            answer: "Copy agent configs for reuse",
            explanation:
              "Cloning means copying an agent’s setup for fast reuse.",
          },
        ],
      },
      {
        id: 304,
        name: "tool_use_behaviour",
        description:
          "Defines how agents select, invoke, and prioritize tools during execution.",
        mcqs: [
          {
            id: 3040101,
            question: "What does tool_use_behaviour define in an agent?",
            options: [
              "How agents structure output",
              "How agents decide and execute tools",
              "How agents validate JSON schema",
              "How agents increase accuracy",
            ],
            answer: "How agents decide and execute tools",
            explanation:
              "tool_use_behaviour determines whether and how the agent will call tools during execution.",
          },
          {
            id: 3040102,
            question:
              "Which option best represents a controlled tool use strategy?",
            options: [
              "Always call tools randomly",
              "Call tools only when relevant",
              "Never call tools",
              "Call tools simultaneously without logic",
            ],
            answer: "Call tools only when relevant",
            explanation:
              "Controlled tool use behaviour ensures that tools are only used when needed.",
          },
          {
            id: 3040103,
            question: "What happens if tool_use_behaviour is disabled?",
            options: [
              "Agent skips tool calls",
              "Agent executes all tools",
              "Agent executes parallel tools only",
              "Agent optimizes accuracy",
            ],
            answer: "Agent skips tool calls",
            explanation:
              "Disabling tool use prevents the agent from calling any external tools.",
          },
          {
            id: 3040104,
            question: "Which parameter can affect tool_use_behaviour?",
            options: ["tool_choice", "max_tokens", "presence_penalty", "top_p"],
            answer: "tool_choice",
            explanation:
              "tool_choice works with tool_use_behaviour to define whether tools are required, optional, or disabled.",
          },
          {
            id: 3040105,
            question:
              "What does parallel_tool_calls in tool_use_behaviour allow?",
            options: [
              "Calling multiple tools at once",
              "Blocking unused tools",
              "Restricting agents to one tool",
              "Resetting context",
            ],
            answer: "Calling multiple tools at once",
            explanation:
              "parallel_tool_calls allows agents to invoke more than one tool in a single decision step.",
          },
          {
            id: 3040106,
            question:
              "What is a potential risk of unrestricted tool_use_behaviour?",
            options: [
              "Unnecessary tool calls",
              "Reduced context size",
              "Improved latency",
              "Automatic schema validation",
            ],
            answer: "Unnecessary tool calls",
            explanation:
              "Without constraints, the agent may waste resources by calling tools excessively.",
          },
          {
            id: 3040107,
            question: "Which behaviour ensures a tool must always be called?",
            options: [
              "tool_choice='required'",
              "tool_choice='auto'",
              "tool_choice='none'",
              "tool_choice='parallel'",
            ],
            answer: "tool_choice='required'",
            explanation:
              "This enforces the use of the specified tool regardless of context.",
          },
          {
            id: 3040108,
            question: "What happens when tool_choice is set to 'auto'?",
            options: [
              "Agent randomly calls tools",
              "Agent decides if a tool should be used",
              "Agent never calls tools",
              "Agent calls all tools at once",
            ],
            answer: "Agent decides if a tool should be used",
            explanation:
              "The 'auto' setting gives the agent flexibility to determine tool relevance.",
          },
          {
            id: 3040109,
            question:
              "What is the purpose of fallback behaviour in tool_use_behaviour?",
            options: [
              "To retry or skip when a tool fails",
              "To prevent JSON errors",
              "To optimize temperature settings",
              "To bypass schema validation",
            ],
            answer: "To retry or skip when a tool fails",
            explanation:
              "Fallback strategies define how the agent reacts when a tool does not respond correctly.",
          },
          {
            id: 3040110,
            question: "Which behaviour prevents tool calls completely?",
            options: [
              "tool_choice='none'",
              "tool_choice='auto'",
              "parallel_tool_calls",
              "presence_penalty",
            ],
            answer: "tool_choice='none'",
            explanation: "This disables tool calls entirely.",
          },
          {
            id: 3040111,
            question:
              "Why is it important to configure tool_use_behaviour carefully?",
            options: [
              "To optimize tool calls and avoid waste",
              "To generate more random outputs",
              "To reduce GPU memory",
              "To prevent schema mismatch",
            ],
            answer: "To optimize tool calls and avoid waste",
            explanation:
              "Proper configuration prevents unnecessary calls and ensures efficient execution.",
          },
          {
            id: 3040112,
            question:
              "Which execution style improves response speed when multiple tools are needed?",
            options: [
              "Sequential tool calls",
              "Parallel tool calls",
              "Disabled tools",
              "Tool randomization",
            ],
            answer: "Parallel tool calls",
            explanation:
              "Running tools in parallel reduces latency when multiple calls are necessary.",
          },
          {
            id: 3040113,
            question:
              "What is the relationship between tool_use_behaviour and guardrails?",
            options: [
              "Guardrails restrict unsafe tool usage",
              "Guardrails improve JSON validation only",
              "Guardrails disable tracing",
              "Guardrails randomize tool calls",
            ],
            answer: "Guardrails restrict unsafe tool usage",
            explanation:
              "Guardrails can be used with tool_use_behaviour to ensure tools are called safely.",
          },
          {
            id: 3040114,
            question:
              "If a tool is optional, how should tool_use_behaviour be set?",
            options: [
              "tool_choice='required'",
              "tool_choice='none'",
              "tool_choice='auto'",
              "parallel_tool_calls",
            ],
            answer: "tool_choice='auto'",
            explanation:
              "This allows the agent to decide if the tool is necessary or not.",
          },
          {
            id: 3040115,
            question: "What is the advantage of logging tool_use_behaviour?",
            options: [
              "Debugging and optimization",
              "Increasing randomness",
              "Disabling agent context",
              "Improving tokenization",
            ],
            answer: "Debugging and optimization",
            explanation:
              "Logs provide insights into why and how tools are being invoked.",
          },
          {
            id: 3040116,
            question: "Which tool_use_behaviour helps reduce API costs?",
            options: [
              "Disable unused tools",
              "Force parallel execution",
              "Enable all tools",
              "Always require tools",
            ],
            answer: "Disable unused tools",
            explanation:
              "Preventing unnecessary tool calls saves compute and cost.",
          },
          {
            id: 3040117,
            question:
              "When should fallback logic be added to tool_use_behaviour?",
            options: [
              "When tools may fail",
              "When tools are always required",
              "When agents don’t use context",
              "When tracing is disabled",
            ],
            answer: "When tools may fail",
            explanation:
              "Fallback ensures smooth execution even if a tool errors.",
          },
          {
            id: 3040118,
            question: "Which configuration avoids random tool calls?",
            options: [
              "Explicit tool_choice",
              "High temperature",
              "Presence penalty",
              "Context reset",
            ],
            answer: "Explicit tool_choice",
            explanation:
              "By explicitly defining tool_choice, agents cannot randomly call tools.",
          },
          {
            id: 3040119,
            question:
              "What does 'required' vs 'auto' mean in tool_use_behaviour?",
            options: [
              "Mandatory vs optional tool usage",
              "Tracing vs logging",
              "Guardrails vs hooks",
              "Schema vs context",
            ],
            answer: "Mandatory vs optional tool usage",
            explanation:
              "Required enforces tool use, auto leaves it to agent decision.",
          },
          {
            id: 3040120,
            question: "What is the primary benefit of tool_use_behaviour?",
            options: [
              "Efficient and controlled tool usage",
              "Improved token embeddings",
              "Better schema validation",
              "Increased randomness",
            ],
            answer: "Efficient and controlled tool usage",
            explanation: "It optimizes when and how tools are used by agents.",
          },

          {
            id: 3040121,
            question:
              "What happens if parallel_tool_calls is not supported by tools?",
            options: [
              "Agent executes sequentially",
              "Agent skips execution",
              "Agent errors out",
              "Agent randomizes execution",
            ],
            answer: "Agent executes sequentially",
            explanation:
              "If parallel is unsupported, tools default to sequential execution.",
          },
          {
            id: 3040122,
            question: "Why might developers restrict tool_use_behaviour?",
            options: [
              "Security and cost control",
              "Increase randomness",
              "Boost schema length",
              "Reduce token embeddings",
            ],
            answer: "Security and cost control",
            explanation:
              "Unrestricted tool use can expose vulnerabilities or waste resources.",
          },
          {
            id: 3040123,
            question: "What does tool_use_behaviour impact most directly?",
            options: [
              "Agent execution flow",
              "Training data size",
              "Schema validation rules",
              "Tracing logs",
            ],
            answer: "Agent execution flow",
            explanation:
              "It directly affects how agents use tools during processing.",
          },
          {
            id: 3040124,
            question: "Which choice disables tool calls entirely?",
            options: [
              "tool_choice='none'",
              "tool_choice='auto'",
              "tool_choice='required'",
              "tool_choice='parallel'",
            ],
            answer: "tool_choice='none'",
            explanation: "This prevents any tool calls from being made.",
          },
          {
            id: 3040125,
            question:
              "Which practice improves reliability of tool_use_behaviour?",
            options: [
              "Adding error handling",
              "Randomizing calls",
              "Ignoring tracing",
              "Increasing temperature",
            ],
            answer: "Adding error handling",
            explanation:
              "Error handling ensures smooth execution when tools fail.",
          },
          {
            id: 3040126,
            question: "How does tool_use_behaviour affect latency?",
            options: [
              "Too many tools increase latency",
              "It decreases training data size",
              "It increases randomness",
              "It reduces schema errors",
            ],
            answer: "Too many tools increase latency",
            explanation:
              "Overusing tools can slow response due to extra API calls.",
          },
          {
            id: 3040127,
            question:
              "Which is the best strategy for performance-sensitive tasks?",
            options: [
              "Minimal tool calls",
              "Always call tools",
              "Randomized usage",
              "Max penalty",
            ],
            answer: "Minimal tool calls",
            explanation: "Fewer tool calls keep execution fast and efficient.",
          },
          {
            id: 3040128,
            question: "What happens if an agent ignores tool_use_behaviour?",
            options: [
              "Unpredictable tool execution",
              "Better accuracy",
              "Lower cost",
              "Improved validation",
            ],
            answer: "Unpredictable tool execution",
            explanation:
              "Agents may call tools unnecessarily or miss required ones.",
          },
          {
            id: 3040129,
            question: "Which is a safe tool_use_behaviour practice?",
            options: [
              "Use guardrails",
              "Disable tracing",
              "Randomize outputs",
              "Increase temperature",
            ],
            answer: "Use guardrails",
            explanation: "Guardrails prevent unsafe or irrelevant tool usage.",
          },
          {
            id: 3040130,
            question: "What is the default tool_use_behaviour in many SDKs?",
            options: ["auto", "required", "none", "parallel"],
            answer: "auto",
            explanation: "By default, agents decide if tool use is necessary.",
          },

          {
            id: 3040131,
            question: "How does tracing complement tool_use_behaviour?",
            options: [
              "It logs tool decisions",
              "It prevents tool failures",
              "It disables parallel calls",
              "It enforces schemas",
            ],
            answer: "It logs tool decisions",
            explanation:
              "Tracing provides insights into why tools were or weren’t called.",
          },
          {
            id: 3040132,
            question:
              "Which agent feature works closely with tool_use_behaviour?",
            options: [
              "tool_choice",
              "temperature",
              "presence_penalty",
              "frequency_penalty",
            ],
            answer: "tool_choice",
            explanation:
              "tool_choice directly controls how tools are selected.",
          },
          {
            id: 3040133,
            question: "Why is overuse of tool_use_behaviour costly?",
            options: [
              "Extra API/tool calls",
              "More training epochs",
              "Higher presence penalty",
              "Longer schema validation",
            ],
            answer: "Extra API/tool calls",
            explanation:
              "Excessive calls directly increase resource usage and cost.",
          },
          {
            id: 3040134,
            question: "How can developers test tool_use_behaviour?",
            options: [
              "By simulating workflows",
              "By disabling context",
              "By increasing temperature",
              "By removing tracing",
            ],
            answer: "By simulating workflows",
            explanation:
              "Simulations reveal how the agent uses tools in different scenarios.",
          },
          {
            id: 3040135,
            question: "Which is a valid way to reset tool behaviour?",
            options: [
              "reset_tool_choice()",
              "disable_schema()",
              "clear_context()",
              "increase_top_p()",
            ],
            answer: "reset_tool_choice()",
            explanation:
              "reset_tool_choice resets the agent’s current tool selection.",
          },
          {
            id: 3040136,
            question: "What happens when fallback logic is missing?",
            options: [
              "Agent may fail on tool errors",
              "Agent improves accuracy",
              "Agent skips tokens",
              "Agent reduces cost",
            ],
            answer: "Agent may fail on tool errors",
            explanation: "Without fallback, failed tools can break execution.",
          },
          {
            id: 3040137,
            question: "Which configuration allows maximum flexibility?",
            options: [
              "tool_choice='auto'",
              "tool_choice='none'",
              "tool_choice='required'",
              "tool_choice='parallel'",
            ],
            answer: "tool_choice='auto'",
            explanation: "This lets the agent decide when to call tools.",
          },
          {
            id: 3040138,
            question: "Which option enforces strict tool execution?",
            options: [
              "tool_choice='required'",
              "tool_choice='auto'",
              "tool_choice='parallel'",
              "tool_choice='none'",
            ],
            answer: "tool_choice='required'",
            explanation: "This forces agents to always use the specified tool.",
          },
          {
            id: 3040139,
            question: "What improves observability of tool_use_behaviour?",
            options: [
              "Enable detailed logs",
              "Disable tracing",
              "Randomize penalties",
              "Increase schema depth",
            ],
            answer: "Enable detailed logs",
            explanation:
              "Detailed logging shows when, why, and how tools are called.",
          },
          {
            id: 3040140,
            question: "Which helps prevent infinite tool loops?",
            options: [
              "Guardrails + max turns",
              "High frequency penalty",
              "Random temperature",
              "Parallel execution",
            ],
            answer: "Guardrails + max turns",
            explanation: "These limit how often tools can be called in a loop.",
          },

          {
            id: 3040141,
            question:
              "How can developers enforce security in tool_use_behaviour?",
            options: [
              "Guardrails and validation",
              "Random schema",
              "Presence penalty",
              "Top_p tuning",
            ],
            answer: "Guardrails and validation",
            explanation: "These prevent unsafe inputs from triggering tools.",
          },
          {
            id: 3040142,
            question: "Which configuration saves cost in API-heavy workflows?",
            options: [
              "Minimize tool calls",
              "Increase parallelism",
              "Increase temperature",
              "Disable guardrails",
            ],
            answer: "Minimize tool calls",
            explanation: "Reducing tool invocations directly reduces costs.",
          },
          {
            id: 3040143,
            question: "What happens if multiple tools conflict?",
            options: [
              "Fallback or priority rules handle it",
              "Agent errors out",
              "Agent skips all",
              "Randomized execution",
            ],
            answer: "Fallback or priority rules handle it",
            explanation: "Priority handling ensures smooth resolution.",
          },
          {
            id: 3040144,
            question:
              "What should be combined with tool_use_behaviour for robust design?",
            options: [
              "Tracing and guardrails",
              "Random outputs",
              "Schema skipping",
              "Token reduction",
            ],
            answer: "Tracing and guardrails",
            explanation:
              "Together they ensure visibility and safety of tool usage.",
          },
          {
            id: 3040145,
            question: "Which tool_use_behaviour reduces decision complexity?",
            options: [
              "Explicit tool_choice",
              "Random selection",
              "Always parallel",
              "Temperature tuning",
            ],
            answer: "Explicit tool_choice",
            explanation: "Explicit choice removes uncertainty in tool calls.",
          },
          {
            id: 3040146,
            question: "What is the default fallback behaviour if unspecified?",
            options: [
              "Agent may retry or fail silently",
              "Agent always retries",
              "Agent disables tool",
              "Agent replaces schema",
            ],
            answer: "Agent may retry or fail silently",
            explanation:
              "Default behaviour varies, but retries or silent failure are common.",
          },
          {
            id: 3040147,
            question: "Which behaviour enforces minimal tool calls?",
            options: [
              "Guardrails + auto mode",
              "Required + parallel",
              "None + randomization",
              "Presence penalty",
            ],
            answer: "Guardrails + auto mode",
            explanation:
              "This combination ensures only necessary tools are called.",
          },
          {
            id: 3040148,
            question: "What happens if too many parallel tool calls are made?",
            options: [
              "Increased latency and errors",
              "Reduced memory",
              "Improved accuracy",
              "Random schema errors",
            ],
            answer: "Increased latency and errors",
            explanation: "Too many simultaneous calls can overload execution.",
          },
          {
            id: 3040149,
            question:
              "What is a best practice for tool_use_behaviour in production?",
            options: [
              "Monitor logs and enforce guardrails",
              "Disable guardrails",
              "Randomize tool_choice",
              "Ignore fallback",
            ],
            answer: "Monitor logs and enforce guardrails",
            explanation:
              "This ensures secure, efficient, and observable tool use.",
          },
          {
            id: 3040150,
            question: "Which option summarizes tool_use_behaviour correctly?",
            options: [
              "Defines agent tool decision rules",
              "Controls JSON validation",
              "Manages token embeddings",
              "Optimizes training epochs",
            ],
            answer: "Defines agent tool decision rules",
            explanation: "It governs how and when agents decide to use tools.",
          },
        ],
      },
      {
        id: 204,
        name: "Reset_tool_choice",
        description:
          "Reset_tool_choice allows agents to reset or override previously set tool usage behavior.",
        mcqs: [
          {
            id: 2040101,
            question: "What is the purpose of reset_tool_choice in agents?",
            options: [
              "To reset model weights",
              "To clear or override the tool selection",
              "To delete logs",
              "To change hyperparameters",
            ],
            answer: "To clear or override the tool selection",
            explanation:
              "reset_tool_choice ensures agents can reselect or override their current tool choice.",
          },
          {
            id: 2040102,
            question: "When would reset_tool_choice typically be used?",
            options: [
              "When an incorrect tool was chosen",
              "When schema fails",
              "When tokens exceed limit",
              "When training fails",
            ],
            answer: "When an incorrect tool was chosen",
            explanation:
              "Agents reset tool choice when the current tool is not appropriate for the query.",
          },
          {
            id: 2040103,
            question:
              "Which of the following best describes reset_tool_choice?",
            options: [
              "Dynamic re-selection of tools",
              "Randomization of outputs",
              "Parallel inference",
              "Caching mechanism",
            ],
            answer: "Dynamic re-selection of tools",
            explanation:
              "It dynamically allows agents to reconsider and choose a better tool.",
          },
          {
            id: 2040104,
            question:
              "What happens if reset_tool_choice is not used when needed?",
            options: [
              "The agent may stick to an unsuitable tool",
              "The agent improves performance",
              "The model resets",
              "The run stops immediately",
            ],
            answer: "The agent may stick to an unsuitable tool",
            explanation:
              "Without reset, the agent may continue using a tool that produces errors.",
          },
          {
            id: 2040105,
            question: "Which scenario best fits reset_tool_choice?",
            options: [
              "Switching from search tool to calculator",
              "Reducing temperature",
              "Adding hooks",
              "Debugging schema",
            ],
            answer: "Switching from search tool to calculator",
            explanation:
              "If the agent realizes a calculator is better than search, it resets the tool choice.",
          },
          {
            id: 2040106,
            question: "Is reset_tool_choice permanent?",
            options: [
              "No, it is temporary per query",
              "Yes, it resets all agents",
              "Yes, it deletes tools",
              "No, it only clears context",
            ],
            answer: "No, it is temporary per query",
            explanation: "reset_tool_choice is scoped to the query or run.",
          },
          {
            id: 2040107,
            question: "Which agent capability does reset_tool_choice improve?",
            options: [
              "Adaptability",
              "Training speed",
              "GPU usage",
              "Dataset size",
            ],
            answer: "Adaptability",
            explanation:
              "By resetting, agents adapt to new or corrected tool decisions.",
          },
          {
            id: 2040108,
            question: "How does reset_tool_choice affect tool_use_behaviour?",
            options: [
              "It overrides current behaviour",
              "It disables hooks",
              "It reduces context",
              "It removes tracing",
            ],
            answer: "It overrides current behaviour",
            explanation:
              "reset_tool_choice lets agents override predefined tool use behaviour.",
          },
          {
            id: 2040109,
            question:
              "Which parameter is most likely combined with reset_tool_choice?",
            options: [
              "tool_choice",
              "temperature",
              "top_p",
              "frequency_penalty",
            ],
            answer: "tool_choice",
            explanation:
              "reset_tool_choice directly relates to re-selecting tool_choice.",
          },
          {
            id: 2040110,
            question:
              "What is the default behaviour without reset_tool_choice?",
            options: [
              "Agents stick to last chosen tool",
              "Agents always switch",
              "Agents disable tools",
              "Agents ignore queries",
            ],
            answer: "Agents stick to last chosen tool",
            explanation:
              "Without reset, agents persist with their last decision.",
          },

          {
            id: 2040111,
            question: "Can reset_tool_choice be invoked programmatically?",
            options: [
              "Yes, via SDK APIs",
              "No, only manual",
              "Yes, but only in console",
              "No, it’s automatic",
            ],
            answer: "Yes, via SDK APIs",
            explanation:
              "reset_tool_choice can be controlled programmatically through APIs.",
          },
          {
            id: 2040112,
            question: "Which error can reset_tool_choice help resolve?",
            options: [
              "Tool mismatch error",
              "Compilation error",
              "Token overflow",
              "Schema serialization",
            ],
            answer: "Tool mismatch error",
            explanation:
              "When the wrong tool is used, reset helps fix mismatch.",
          },
          {
            id: 2040113,
            question: "How does reset_tool_choice improve user experience?",
            options: [
              "By ensuring correct tool execution",
              "By reducing latency",
              "By increasing training speed",
              "By adding guardrails",
            ],
            answer: "By ensuring correct tool execution",
            explanation:
              "Users receive correct results since agents adjust tools dynamically.",
          },
          {
            id: 2040114,
            question: "Which of these is NOT reset by reset_tool_choice?",
            options: [
              "Agent tool decision",
              "Execution flow",
              "Model architecture",
              "Query context",
            ],
            answer: "Model architecture",
            explanation:
              "reset_tool_choice only resets tool-related state, not model structure.",
          },
          {
            id: 2040115,
            question: "Does reset_tool_choice affect parallel_tool_calls?",
            options: [
              "Yes, it can override them",
              "No, never",
              "Only if temperature=0",
              "Only in training",
            ],
            answer: "Yes, it can override them",
            explanation:
              "reset_tool_choice can affect how parallel tool calls are managed.",
          },
          {
            id: 2040116,
            question: "Which logging info should accompany reset_tool_choice?",
            options: [
              "Tool switch reason",
              "Random seed",
              "Token IDs",
              "Schema hash",
            ],
            answer: "Tool switch reason",
            explanation: "Logs should explain why a reset happened.",
          },
          {
            id: 2040117,
            question:
              "In multi-agent systems, reset_tool_choice is useful for?",
            options: [
              "Coordination across agents",
              "Training loops",
              "Model pruning",
              "GPU scheduling",
            ],
            answer: "Coordination across agents",
            explanation: "Agents can reset tools to cooperate better.",
          },
          {
            id: 2040118,
            question: "What does reset_tool_choice NOT directly affect?",
            options: [
              "Tool usage",
              "Agent decisions",
              "Temperature setting",
              "Execution adaptation",
            ],
            answer: "Temperature setting",
            explanation:
              "reset_tool_choice impacts tool usage, not sampling parameters.",
          },
          {
            id: 2040119,
            question: "Which advanced concept builds on reset_tool_choice?",
            options: [
              "Dynamic Instructions",
              "Overfitting",
              "Gradient Descent",
              "Loss Functions",
            ],
            answer: "Dynamic Instructions",
            explanation:
              "Dynamic Instructions may leverage reset_tool_choice for adaptability.",
          },
          {
            id: 2040120,
            question:
              "What is the outcome of invoking reset_tool_choice repeatedly?",
            options: [
              "Frequent switching between tools",
              "Permanent lock-in",
              "Training failure",
              "Schema invalidation",
            ],
            answer: "Frequent switching between tools",
            explanation:
              "Multiple resets can cause agents to switch tools many times.",
          },

          {
            id: 2040121,
            question: "Does reset_tool_choice reset agent memory?",
            options: [
              "No",
              "Yes, always",
              "Only in training mode",
              "Depends on context",
            ],
            answer: "No",
            explanation: "It resets tool choice, not full memory.",
          },
          {
            id: 2040122,
            question: "Which of these is an example of reset_tool_choice?",
            options: [
              "Agent moving from API tool to DB tool",
              "Agent lowering top_p",
              "Agent adjusting temperature",
              "Agent cloning",
            ],
            answer: "Agent moving from API tool to DB tool",
            explanation: "Resetting tool choice allows switching tools.",
          },
          {
            id: 2040123,
            question: "In structured output, reset_tool_choice helps by?",
            options: [
              "Ensuring correct tool provides schema",
              "Forcing random values",
              "Clearing JSON output",
              "Reducing validation",
            ],
            answer: "Ensuring correct tool provides schema",
            explanation: "Correct tools guarantee valid structured output.",
          },
          {
            id: 2040124,
            question:
              "What should developers log when reset_tool_choice occurs?",
            options: [
              "Tool ID and reason",
              "GPU count",
              "User password",
              "Token embeddings",
            ],
            answer: "Tool ID and reason",
            explanation: "Helps debugging why tool reset happened.",
          },
          {
            id: 2040125,
            question: "reset_tool_choice ensures agents are?",
            options: [
              "Flexible",
              "Rigid",
              "Token-limited",
              "Always supervised",
            ],
            answer: "Flexible",
            explanation: "It adds flexibility in tool usage.",
          },

          {
            id: 2040126,
            question:
              "Which agent property is closely tied to reset_tool_choice?",
            options: [
              "tool_choice",
              "max_turns",
              "context_window",
              "frequency_penalty",
            ],
            answer: "tool_choice",
            explanation: "reset_tool_choice directly impacts tool_choice.",
          },
          {
            id: 2040127,
            question:
              "In long-running sessions, why is reset_tool_choice valuable?",
            options: [
              "To avoid persistent incorrect tools",
              "To reduce temperature",
              "To reset memory size",
              "To add guardrails",
            ],
            answer: "To avoid persistent incorrect tools",
            explanation:
              "Without reset, agents may stick to wrong tools across queries.",
          },
          {
            id: 2040128,
            question:
              "Which outcome is possible if reset_tool_choice is ignored?",
            options: [
              "Repeated tool errors",
              "Higher accuracy",
              "Reduced logs",
              "Improved context",
            ],
            answer: "Repeated tool errors",
            explanation: "Agents may repeat errors without resetting.",
          },
          {
            id: 2040129,
            question: "reset_tool_choice can be combined with?",
            options: ["Hooks", "Loss Functions", "Gradients", "Epochs"],
            answer: "Hooks",
            explanation: "Hooks can trigger reset_tool_choice dynamically.",
          },
          {
            id: 2040130,
            question: "In agent orchestration, reset_tool_choice ensures?",
            options: [
              "Agents re-coordinate on correct tools",
              "Schema is deleted",
              "Memory is reset",
              "Tracing disabled",
            ],
            answer: "Agents re-coordinate on correct tools",
            explanation: "Resetting allows smoother orchestration.",
          },

          {
            id: 2040131,
            question: "What is the default value for reset_tool_choice?",
            options: ["False", "True", "None", "Undefined"],
            answer: "False",
            explanation: "By default, reset_tool_choice is off until enabled.",
          },
          {
            id: 2040132,
            question: "reset_tool_choice impacts which phase?",
            options: [
              "Execution phase",
              "Training phase",
              "Compilation phase",
              "Deployment phase",
            ],
            answer: "Execution phase",
            explanation: "It applies during runtime tool execution.",
          },
          {
            id: 2040133,
            question: "Which part of logs signals a reset_tool_choice event?",
            options: [
              "Tool re-selection message",
              "Temperature change",
              "Schema validation log",
              "Random ID",
            ],
            answer: "Tool re-selection message",
            explanation: "Logs should record that tool selection was reset.",
          },
          {
            id: 2040134,
            question: "reset_tool_choice prevents?",
            options: [
              "Incorrect tool lock-in",
              "High GPU usage",
              "Schema overload",
              "Model overfitting",
            ],
            answer: "Incorrect tool lock-in",
            explanation: "It ensures agents don’t get stuck with wrong tools.",
          },
          {
            id: 2040135,
            question: "Which advanced use case leverages reset_tool_choice?",
            options: [
              "Error recovery",
              "Gradient descent",
              "Model pruning",
              "Loss minimization",
            ],
            answer: "Error recovery",
            explanation:
              "It allows agents to recover gracefully from tool errors.",
          },
          {
            id: 2040136,
            question: "reset_tool_choice contributes most to?",
            options: [
              "Resilience",
              "Training speed",
              "Tokenization",
              "Embeddings",
            ],
            answer: "Resilience",
            explanation:
              "Resilience improves since errors can be corrected quickly.",
          },
          {
            id: 2040137,
            question: "Does reset_tool_choice affect hooks?",
            options: [
              "Yes, it can trigger them",
              "No",
              "Only in training",
              "Only in cloning",
            ],
            answer: "Yes, it can trigger them",
            explanation: "Hooks can be designed to respond to resets.",
          },
          {
            id: 2040138,
            question: "Which type of testing benefits from reset_tool_choice?",
            options: [
              "Failure recovery tests",
              "Unit tests only",
              "Integration tests only",
              "Random fuzzing",
            ],
            answer: "Failure recovery tests",
            explanation: "It is key for validating failure handling.",
          },
          {
            id: 2040139,
            question: "reset_tool_choice makes agents?",
            options: [
              "More adaptive",
              "Less flexible",
              "Token hungry",
              "Deterministic",
            ],
            answer: "More adaptive",
            explanation: "It boosts adaptability in complex workflows.",
          },
          {
            id: 2040140,
            question: "Which example demonstrates reset_tool_choice?",
            options: [
              "Resetting from translation API to summarizer",
              "Changing top_k value",
              "Pruning dataset",
              "Cloning agent",
            ],
            answer: "Resetting from translation API to summarizer",
            explanation: "It involves switching tools mid-run.",
          },

          {
            id: 2040141,
            question: "reset_tool_choice is particularly important in?",
            options: [
              "Dynamic workflows",
              "Static datasets",
              "Pre-training",
              "Tokenization",
            ],
            answer: "Dynamic workflows",
            explanation: "Dynamic agent tasks often need resets.",
          },
          {
            id: 2040142,
            question: "Does reset_tool_choice clear prior tool results?",
            options: [
              "No, only resets choice",
              "Yes, deletes results",
              "Sometimes",
              "Always",
            ],
            answer: "No, only resets choice",
            explanation: "It does not delete past results.",
          },
          {
            id: 2040143,
            question: "Which condition might force reset_tool_choice?",
            options: [
              "Tool failure or error",
              "Schema match",
              "Low temperature",
              "High top_p",
            ],
            answer: "Tool failure or error",
            explanation: "Errors are a common reason to reset.",
          },
          {
            id: 2040144,
            question: "reset_tool_choice supports which principle?",
            options: [
              "Error recovery and flexibility",
              "Strict determinism",
              "Static control",
              "Model compression",
            ],
            answer: "Error recovery and flexibility",
            explanation: "It ensures agents are flexible and resilient.",
          },
          {
            id: 2040145,
            question: "reset_tool_choice integrates best with?",
            options: [
              "Orchestration",
              "Tokenization",
              "Training loops",
              "Overfitting prevention",
            ],
            answer: "Orchestration",
            explanation: "It is critical in orchestrating multiple agents.",
          },
          {
            id: 2040146,
            question: "What if reset_tool_choice is overused?",
            options: [
              "Frequent tool switching",
              "Improved determinism",
              "Fewer errors",
              "Faster execution",
            ],
            answer: "Frequent tool switching",
            explanation: "Overuse may lead to unnecessary switching.",
          },
          {
            id: 2040147,
            question: "reset_tool_choice can be applied conditionally using?",
            options: [
              "Hooks or guardrails",
              "Loss functions",
              "Embeddings",
              "Temperature decay",
            ],
            answer: "Hooks or guardrails",
            explanation: "Hooks/guardrails can enforce reset logic.",
          },
          {
            id: 2040148,
            question:
              "What does reset_tool_choice ensure in failure scenarios?",
            options: [
              "Fallback to alternate tool",
              "Model retraining",
              "Schema reset",
              "GPU recovery",
            ],
            answer: "Fallback to alternate tool",
            explanation: "It allows fallback strategies.",
          },
          {
            id: 2040149,
            question: "reset_tool_choice primarily improves?",
            options: [
              "Error handling",
              "Token efficiency",
              "Model training",
              "Context length",
            ],
            answer: "Error handling",
            explanation: "It ensures better handling of wrong tool calls.",
          },
          {
            id: 2040150,
            question:
              "reset_tool_choice is a feature under which broader concept?",
            options: [
              "Tool management in agents",
              "Training hyperparameters",
              "Schema design",
              "Context window",
            ],
            answer: "Tool management in agents",
            explanation: "It belongs to tool management within agents.",
          },
        ],
      },
      {
        id: 205,
        name: "Handoff",
        description:
          "Understanding handoff in agent workflows: input_type, input_filter, is_enabled, on_handoff",
        mcqs: [
          {
            id: 2010101,
            question:
              "What is the main purpose of the handoff function in agents?",
            options: [
              "To transfer control between agents",
              "To increase model accuracy",
              "To store structured output",
              "To filter logs",
            ],
            answer: "To transfer control between agents",
            explanation:
              "Handoff allows one agent to delegate work to another agent or process.",
          },
          {
            id: 2010102,
            question:
              "Which parameter defines the kind of input expected during a handoff?",
            options: ["input_filter", "is_enabled", "input_type", "on_handoff"],
            answer: "input_type",
            explanation:
              "The `input_type` specifies what type of input is accepted by the handoff target.",
          },
          {
            id: 2010103,
            question: "What does `input_filter` do in a handoff function?",
            options: [
              "Restricts or validates incoming inputs",
              "Changes temperature settings",
              "Optimizes tool calls",
              "Monitors agent latency",
            ],
            answer: "Restricts or validates incoming inputs",
            explanation:
              "`input_filter` is used to limit or validate which inputs are passed through a handoff.",
          },
          {
            id: 2010104,
            question:
              "Which parameter decides whether a handoff function is active?",
            options: ["on_handoff", "is_enabled", "input_type", "context"],
            answer: "is_enabled",
            explanation:
              "`is_enabled` determines if the handoff function should be applied during execution.",
          },
          {
            id: 2010105,
            question: "What is the role of `on_handoff`?",
            options: [
              "Executes custom logic when handoff occurs",
              "Filters tool responses",
              "Caches outputs",
              "Sets model temperature",
            ],
            answer: "Executes custom logic when handoff occurs",
            explanation:
              "`on_handoff` defines the callback or logic executed at the time of handoff.",
          },
          {
            id: 2010106,
            question: "If `is_enabled` is set to False, what happens?",
            options: [
              "Handoff will not be triggered",
              "Handoff executes partially",
              "Agent switches to debug mode",
              "Tool calls stop",
            ],
            answer: "Handoff will not be triggered",
            explanation:
              "When disabled, no handoff action is taken even if other conditions are met.",
          },
          {
            id: 2010107,
            question:
              "Which parameter ensures only specific data types can be handed off?",
            options: [
              "input_type",
              "context",
              "schema_validator",
              "output_format",
            ],
            answer: "input_type",
            explanation:
              "`input_type` ensures compatibility by defining expected data type.",
          },
          {
            id: 2010108,
            question: "What is a typical use case of `input_filter`?",
            options: [
              "Rejecting invalid inputs",
              "Optimizing token usage",
              "Merging traces",
              "Improving embeddings",
            ],
            answer: "Rejecting invalid inputs",
            explanation:
              "`input_filter` is often used to block invalid or irrelevant input data.",
          },
          {
            id: 2010109,
            question: "Which of the following best describes handoff?",
            options: [
              "Agent delegation mechanism",
              "Streaming output system",
              "Guardrail function",
              "Tracing span generator",
            ],
            answer: "Agent delegation mechanism",
            explanation:
              "Handoff allows one agent to delegate tasks to another.",
          },
          {
            id: 2010110,
            question: "When using `on_handoff`, what is typically passed?",
            options: [
              "Context and input",
              "Model weights",
              "System prompts",
              "User credentials",
            ],
            answer: "Context and input",
            explanation:
              "`on_handoff` generally receives the context and input for the next step.",
          },
          {
            id: 2010111,
            question: "What happens if no `input_filter` is defined?",
            options: [
              "All inputs are accepted",
              "All inputs are rejected",
              "Agent fails",
              "Tool calls are disabled",
            ],
            answer: "All inputs are accepted",
            explanation:
              "Without an input filter, every input will be passed through the handoff.",
          },
          {
            id: 2010112,
            question:
              "Which parameter is most useful for dynamic enabling/disabling of handoff?",
            options: [
              "is_enabled",
              "input_filter",
              "on_handoff",
              "reset_tool_choice",
            ],
            answer: "is_enabled",
            explanation:
              "`is_enabled` can dynamically activate or deactivate a handoff rule.",
          },
          {
            id: 2010113,
            question: "How does `on_handoff` improve flexibility?",
            options: [
              "By running custom functions",
              "By filtering spam inputs",
              "By increasing tokens",
              "By reducing context size",
            ],
            answer: "By running custom functions",
            explanation:
              "`on_handoff` enables custom handling logic when control is handed off.",
          },
          {
            id: 2010114,
            question:
              "Which element ensures compatibility of data across agents?",
            options: ["input_type", "guardrails", "context", "hooks"],
            answer: "input_type",
            explanation:
              "`input_type` validates that the receiving agent can handle the data format.",
          },
          {
            id: 2010115,
            question: "Which is a common pitfall in using `input_filter`?",
            options: [
              "Over-restricting valid inputs",
              "Disabling schema validation",
              "Reducing temperature too much",
              "Breaking context chain",
            ],
            answer: "Over-restricting valid inputs",
            explanation:
              "Too strict filtering may reject valid inputs and cause workflow failures.",
          },
          {
            id: 2010116,
            question:
              "What should `on_handoff` return for smooth continuation?",
            options: [
              "Next agent’s response",
              "Debug logs",
              "Model embeddings",
              "Random output",
            ],
            answer: "Next agent’s response",
            explanation:
              "`on_handoff` often processes and returns the response of the delegated agent.",
          },
          {
            id: 2010117,
            question: "Which parameter is best for enabling feature flags?",
            options: ["is_enabled", "context", "tool_choice", "temperature"],
            answer: "is_enabled",
            explanation:
              "`is_enabled` is commonly used for toggling features on/off.",
          },
          {
            id: 2010118,
            question:
              "What is the relationship between `input_filter` and security?",
            options: [
              "Filters unsafe inputs",
              "Reduces latency",
              "Monitors spans",
              "Improves embeddings",
            ],
            answer: "Filters unsafe inputs",
            explanation:
              "Filters can block harmful or unwanted input data before handoff.",
          },
          {
            id: 2010119,
            question: "What happens if `on_handoff` is not defined?",
            options: [
              "Default handoff behavior is applied",
              "Agent crashes",
              "Tracing stops",
              "Tool selection resets",
            ],
            answer: "Default handoff behavior is applied",
            explanation:
              "Without custom logic, a default handoff path is executed.",
          },
          {
            id: 2010120,
            question: "Which best describes input validation during handoff?",
            options: [
              "Controlled by input_filter",
              "Managed by tracing spans",
              "Done by guardrails only",
              "Enabled via tool_choice",
            ],
            answer: "Controlled by input_filter",
            explanation:
              "`input_filter` directly manages which inputs are validated or rejected.",
          },
          {
            id: 2010121,
            question: "Why is `input_type` critical in multi-agent systems?",
            options: [
              "Ensures consistent data format",
              "Reduces response latency",
              "Adds randomness",
              "Removes context history",
            ],
            answer: "Ensures consistent data format",
            explanation:
              "Multi-agent handoff requires compatible input types for smooth transitions.",
          },
          {
            id: 2010122,
            question: "What is the default state of `is_enabled`?",
            options: ["True", "False", "None", "Context-dependent"],
            answer: "True",
            explanation:
              "By default, most handoff configurations are enabled unless specified otherwise.",
          },
          {
            id: 2010123,
            question: "What does `on_handoff` typically interact with?",
            options: [
              "Target agent",
              "Schema validator",
              "Output parser",
              "Random generator",
            ],
            answer: "Target agent",
            explanation:
              "`on_handoff` usually interacts with the next agent in the chain.",
          },
          {
            id: 2010124,
            question: "Which of the following is NOT related to handoff?",
            options: ["input_type", "on_handoff", "is_enabled", "temperature"],
            answer: "temperature",
            explanation:
              "Temperature relates to model randomness, not handoff control.",
          },
          {
            id: 2010125,
            question: "What is the key benefit of modular handoff design?",
            options: [
              "Reusable delegation logic",
              "Automatic schema validation",
              "Lower API costs",
              "Automatic caching",
            ],
            answer: "Reusable delegation logic",
            explanation:
              "Modular handoff allows logic to be reused across workflows.",
          },
          {
            id: 2010126,
            question: "Which improves error handling in handoff?",
            options: [
              "Custom on_handoff functions",
              "Random temperature",
              "Parallel span tracing",
              "Context reset",
            ],
            answer: "Custom on_handoff functions",
            explanation:
              "Errors can be caught and handled by writing custom logic in on_handoff.",
          },
          {
            id: 2010127,
            question: "What does setting `is_enabled=False` mimic?",
            options: [
              "Disabling delegation",
              "Resetting context",
              "Changing tool_choice",
              "Forcing schema output",
            ],
            answer: "Disabling delegation",
            explanation:
              "Handoff is skipped if disabled, so agents do not delegate tasks.",
          },
          {
            id: 2010128,
            question: "What is the effect of an overly broad `input_filter`?",
            options: [
              "Passes irrelevant data",
              "Reduces errors",
              "Improves latency",
              "Simplifies schema",
            ],
            answer: "Passes irrelevant data",
            explanation:
              "Too broad filters may allow irrelevant or harmful data through.",
          },
          {
            id: 2010129,
            question: "What type of logic fits best in `on_handoff`?",
            options: [
              "Custom routing or transformation",
              "Random number generation",
              "Trace replay",
              "Tool overrides",
            ],
            answer: "Custom routing or transformation",
            explanation:
              "`on_handoff` is ideal for custom routing and transformation logic.",
          },
          {
            id: 2010130,
            question: "Which is a risk if no input filter is applied?",
            options: [
              "Invalid data being processed",
              "Loss of embeddings",
              "Reduced schema enforcement",
              "High token penalties",
            ],
            answer: "Invalid data being processed",
            explanation:
              "Without filters, invalid data may be processed by agents.",
          },
          {
            id: 2010131,
            question: "How can `input_type` support polymorphic handoffs?",
            options: [
              "By defining multiple acceptable types",
              "By disabling schema validation",
              "By ignoring context",
              "By randomizing delegation",
            ],
            answer: "By defining multiple acceptable types",
            explanation:
              "`input_type` can be set to accept multiple formats, enabling polymorphic handoffs.",
          },
          {
            id: 2010132,
            question: "What is the consequence of mismatched `input_type`?",
            options: [
              "Handoff fails",
              "Agent runs twice",
              "Tracing stops",
              "Filters override",
            ],
            answer: "Handoff fails",
            explanation:
              "If input types are incompatible, handoff cannot proceed.",
          },
          {
            id: 2010133,
            question: "Which of these can dynamically toggle handoff logic?",
            options: [
              "is_enabled with conditions",
              "input_filter strict mode",
              "context freezing",
              "reset_tool_choice",
            ],
            answer: "is_enabled with conditions",
            explanation:
              "Dynamic conditions can turn handoff logic on or off at runtime.",
          },
          {
            id: 2010134,
            question:
              "What is the benefit of having `on_handoff` return custom outputs?",
            options: [
              "Tailored responses for the workflow",
              "Reduced API costs",
              "Schema simplification",
              "Token compression",
            ],
            answer: "Tailored responses for the workflow",
            explanation:
              "Custom outputs align handoff behavior with workflow goals.",
          },
          {
            id: 2010135,
            question:
              "Which ensures handoff only occurs with specific data values?",
            options: [
              "input_filter",
              "on_handoff",
              "context switching",
              "tool constraints",
            ],
            answer: "input_filter",
            explanation:
              "`input_filter` can block or allow based on value-specific rules.",
          },
          {
            id: 2010136,
            question:
              "What does combining `input_filter` and `on_handoff` enable?",
            options: [
              "Selective and custom handoff logic",
              "Forced schema validation",
              "Parallel context switching",
              "Token compression",
            ],
            answer: "Selective and custom handoff logic",
            explanation:
              "Filters control inputs while on_handoff applies logic, combining precision and flexibility.",
          },
          {
            id: 2010137,
            question: "What does `is_enabled` behave like in feature toggling?",
            options: [
              "A switch",
              "A schema validator",
              "A tool chooser",
              "A randomizer",
            ],
            answer: "A switch",
            explanation:
              "It enables or disables handoff logic, similar to a feature switch.",
          },
          {
            id: 2010138,
            question: "What kind of workflow benefits most from `on_handoff`?",
            options: [
              "Complex multi-agent routing",
              "Static single-agent runs",
              "Temperature tuning",
              "Short traces",
            ],
            answer: "Complex multi-agent routing",
            explanation:
              "Custom delegation logic is vital in multi-agent systems.",
          },
          {
            id: 2010139,
            question:
              "Which parameter would be best to use for debugging skipped handoffs?",
            options: [
              "is_enabled",
              "on_handoff",
              "input_filter",
              "context logs",
            ],
            answer: "is_enabled",
            explanation:
              "If disabled, handoffs won’t occur, making it the first thing to debug.",
          },
          {
            id: 2010140,
            question: "What happens if `on_handoff` throws an error?",
            options: [
              "Workflow fails unless error handling is added",
              "Handoff continues normally",
              "Input filter overrides",
              "Schema ignores it",
            ],
            answer: "Workflow fails unless error handling is added",
            explanation:
              "Errors in custom logic must be handled or they will break the chain.",
          },
          {
            id: 2010141,
            question: "Which parameter is closest to schema validation?",
            options: ["input_type", "is_enabled", "on_handoff", "temperature"],
            answer: "input_type",
            explanation: "It ensures data matches expected schema types.",
          },
          {
            id: 2010142,
            question: "What can `on_handoff` do that `input_filter` cannot?",
            options: [
              "Transform input or output",
              "Block invalid values",
              "Validate types",
              "Disable delegation",
            ],
            answer: "Transform input or output",
            explanation:
              "`on_handoff` allows transformations, while filters only validate.",
          },
          {
            id: 2010143,
            question: "What is a minimal configuration for handoff?",
            options: [
              "input_type only",
              "is_enabled only",
              "on_handoff only",
              "All four together",
            ],
            answer: "input_type only",
            explanation:
              "At minimum, the system must know what type of input it should accept.",
          },
          {
            id: 2010144,
            question: "Which parameter prevents unintended delegation?",
            options: ["is_enabled", "output type", "on_handoff", "tracing"],
            answer: "is_enabled",
            explanation: "If disabled, delegation cannot happen accidentally.",
          },
          {
            id: 2010145,
            question: "What is the best practice when writing `input_filter`?",
            options: [
              "Keep it precise but not overly restrictive",
              "Allow all inputs",
              "Reject all unknowns blindly",
              "Skip validation",
            ],
            answer: "Keep it precise but not overly restrictive",
            explanation:
              "Balance is needed: too strict blocks valid inputs, too broad allows junk.",
          },
          {
            id: 2010146,
            question:
              "What makes `on_handoff` essential for real-world workflows?",
            options: [
              "Ability to encode business logic",
              "Automatic speedup",
              "Lower API costs",
              "Default error handling",
            ],
            answer: "Ability to encode business logic",
            explanation:
              "Real-world workflows need custom routing and logic handling.",
          },
          {
            id: 2010147,
            question: "Which type of value is usually Boolean?",
            options: ["is_enabled", "input_type", "input_filter", "on_handoff"],
            answer: "is_enabled",
            explanation:
              "It usually accepts True/False for enabling or disabling.",
          },
          {
            id: 2010148,
            question:
              "Which parameter directly interacts with user-provided input values?",
            options: ["input_filter", "is_enabled", "on_handoff", "context"],
            answer: "input_filter",
            explanation:
              "It validates or blocks based on user-provided values.",
          },
          {
            id: 2010149,
            question:
              "Which parameter is essential for chaining agents dynamically?",
            options: ["on_handoff", "input_filter", "is_enabled", "context"],
            answer: "on_handoff",
            explanation:
              "It controls how and when control passes to the next agent.",
          },
          {
            id: 2010150,
            question:
              "What combination provides the strongest control over handoff?",
            options: [
              "input_type + input_filter + is_enabled + on_handoff",
              "input_type + temperature",
              "is_enabled + embeddings",
              "on_handoff + tracing",
            ],
            answer: "input_type + input_filter + is_enabled + on_handoff",
            explanation:
              "Together, these four parameters provide type validation, filtering, enabling, and custom logic.",
          },
        ],
      },
      {
        id: 206,
        name: "Tools Advanced",
        description:
          "Advanced behaviors and customization for Tools: name_override, description_override, is_enabled, failure_error_function, and using Agents as Tools with custom_output_extractor.",
        mcqs: [
          {
            id: 2050101,
            question: "What is the primary purpose of a tool's name_override?",
            options: [
              "To change internal tool implementation",
              "To present a different tool name to the agent or UI without changing the underlying tool",
              "To alter model weights",
              "To disable the tool",
            ],
            answer:
              "To present a different tool name to the agent or UI without changing the underlying tool",
            explanation:
              "name_override lets you rename how a tool appears to callers while keeping the same implementation.",
          },
          {
            id: 2050102,
            question: "Why would you use description_override for a tool?",
            options: [
              "To permanently change the source code",
              "To provide a more context-specific or safer description shown to agents or users",
              "To increase tool execution speed",
              "To encrypt tool outputs",
            ],
            answer:
              "To provide a more context-specific or safer description shown to agents or users",
            explanation:
              "description_override customizes the tool's explanation to better match the current workflow or guardrails.",
          },
          {
            id: 2050103,
            question: "What does setting is_enabled=false on a tool do?",
            options: [
              "Permanently deletes the tool",
              "Prevents the agent from calling the tool while keeping it configured",
              "Changes the tool's description",
              "Makes the tool run in debug mode",
            ],
            answer:
              "Prevents the agent from calling the tool while keeping it configured",
            explanation:
              "is_enabled toggles availability without removing the configuration.",
          },
          {
            id: 2050104,
            question:
              "Which is the role of a failure_error_function for a tool?",
            options: [
              "To format successful outputs",
              "To define how failures are transformed into errors or fallback values",
              "To increase model temperature",
              "To speed up tool calls",
            ],
            answer:
              "To define how failures are transformed into errors or fallback values",
            explanation:
              "failure_error_function maps a tool's failure into a controlled error, fallback, or retry decision.",
          },
          {
            id: 2050105,
            question:
              "When using an Agent as a Tool, what is a custom_output_extractor used for?",
            options: [
              "To change the agent's model weights",
              "To parse and convert the agent-tool's raw output into the format expected by the caller",
              "To disable tracing",
              "To increase token limits",
            ],
            answer:
              "To parse and convert the agent-tool's raw output into the format expected by the caller",
            explanation:
              "custom_output_extractor transforms the called agent's freeform output into structured data the calling agent or system can use.",
          },
          {
            id: 2050106,
            question:
              "Which best practice applies to name_override in production?",
            options: [
              "Use ambiguous names to hide behaviour",
              "Use clear, intent-reflective names and document overrides to avoid confusion",
              "Never override names",
              "Change names every request",
            ],
            answer:
              "Use clear, intent-reflective names and document overrides to avoid confusion",
            explanation:
              "Clear naming helps operators and agents understand tool roles and reduces mistakes.",
          },
          {
            id: 2050107,
            question:
              "What is a risk of setting description_override carelessly?",
            options: [
              "It will delete the tool configuration",
              "Misleading descriptions can cause agents to call tools inappropriately",
              "It increases latency",
              "It bypasses authentication",
            ],
            answer:
              "Misleading descriptions can cause agents to call tools inappropriately",
            explanation:
              "Descriptions guide agent behavior; inaccurate ones can lead to wrong tool invocation.",
          },
          {
            id: 2050108,
            question:
              "Which scenario justifies disabling a tool at runtime with is_enabled?",
            options: [
              "When a tool provider reports downtime or a security issue",
              "To reduce logging verbosity",
              "To speed up model training",
              "To change model temperature",
            ],
            answer: "When a tool provider reports downtime or a security issue",
            explanation:
              "is_enabled allows immediate deactivation of risky or unavailable tools without code changes.",
          },
          {
            id: 2050109,
            question: "What should failure_error_function typically include?",
            options: [
              "Only the original raw stack trace",
              "Mapping of failure types to safe fallback responses, logging, and retry policy",
              "A method to increase randomness",
              "A tool to rename other tools",
            ],
            answer:
              "Mapping of failure types to safe fallback responses, logging, and retry policy",
            explanation:
              "Good failure handlers classify errors, emit logs, choose retries or fallbacks, and preserve safety.",
          },
          {
            id: 2050110,
            question:
              "When an Agent is used as a Tool, why is a custom_output_extractor important?",
            options: [
              "It allows converting natural language outputs into structured responses reliably",
              "It trains the agent",
              "It disables guardrails",
              "It merges agents",
            ],
            answer:
              "It allows converting natural language outputs into structured responses reliably",
            explanation:
              "Agents often return freeform text; extractors turn that into machine-usable data.",
          },
          {
            id: 2050111,
            question:
              "Which of the following is a valid use of name_override for a multi-tenant system?",
            options: [
              "Expose internal database names directly to tenants",
              "Prefix tool names with tenant identifiers for isolation and clarity",
              "Hide all tool functionality",
              "Remove tool descriptions",
            ],
            answer:
              "Prefix tool names with tenant identifiers for isolation and clarity",
            explanation:
              "Tenant-specific naming helps debugging and access control in multi-tenant deployments.",
          },
          {
            id: 2050112,
            question: "What is an anti-pattern for description_override?",
            options: [
              "Adding accurate usage examples",
              "Making descriptions intentionally vague to manipulate agent choices",
              "Keeping descriptions up-to-date",
              "Documenting constraints",
            ],
            answer:
              "Making descriptions intentionally vague to manipulate agent choices",
            explanation:
              "Misleading descriptions can lead to unsafe or incorrect tool calls.",
          },
          {
            id: 2050113,
            question: "How can is_enabled be managed safely in production?",
            options: [
              "Toggle directly in production code without audit",
              "Use feature flags, audit logs, and staged rollouts when enabling/disabling tools",
              "Hardcode false permanently",
              "Allow any user to change it",
            ],
            answer:
              "Use feature flags, audit logs, and staged rollouts when enabling/disabling tools",
            explanation:
              "Controlled toggles with audit trails reduce risk when changing tool availability.",
          },
          {
            id: 2050114,
            question:
              "Which reaction is appropriate when a tool returns a transient network error and a failure_error_function is present?",
            options: [
              "Immediately propagate raw error to user",
              "Apply retry with backoff, log the event, and use fallback if retries fail",
              "Disable all tools permanently",
              "Ignore the error silently",
            ],
            answer:
              "Apply retry with backoff, log the event, and use fallback if retries fail",
            explanation:
              "Retries with backoff and fallbacks are standard for transient failures while preserving observability.",
          },
          {
            id: 2050115,
            question:
              "Which property should a custom_output_extractor ideally be?",
            options: [
              "Opaque and undocumented",
              "Deterministic, well-tested, and tolerant to small output variations",
              "Unreliable and heuristic-only",
              "Always blocking tracing",
            ],
            answer:
              "Deterministic, well-tested, and tolerant to small output variations",
            explanation:
              "Extractors must be robust and predictable to reliably convert agent outputs to usable values.",
          },
          {
            id: 2050116,
            question: "What is a recommended test for name_override changes?",
            options: [
              "No testing required",
              "Update integrations and run end-to-end tests to ensure callers interpret the new name correctly",
              "Only change live systems",
              "Randomized manual checks",
            ],
            answer:
              "Update integrations and run end-to-end tests to ensure callers interpret the new name correctly",
            explanation:
              "Renaming affects discoverability and tooling; E2E tests avoid regressions.",
          },
          {
            id: 2050117,
            question: "Why document description_override changes?",
            options: [
              "Documentation is unnecessary",
              "So agents, integrators, and operators understand the tool's intended behavior in that context",
              "To increase token usage",
              "To hide behavior",
            ],
            answer:
              "So agents, integrators, and operators understand the tool's intended behavior in that context",
            explanation:
              "Good docs ensure correct usage and reduce mis-invocation.",
          },
          {
            id: 2050118,
            question:
              "Which monitoring signal indicates a problem that might require disabling a tool (is_enabled=false)?",
            options: [
              "Stable success rates",
              "Sudden spike in error rates or security alerts from the tool provider",
              "Decreasing latency",
              "Improved throughput",
            ],
            answer:
              "Sudden spike in error rates or security alerts from the tool provider",
            explanation:
              "Operational or security issues justify immediate disabling to protect users.",
          },
          {
            id: 2050119,
            question:
              "Which is a safe fallback when a tool fails and no failure_error_function is provided?",
            options: [
              "Crash the process",
              "Return a generic safe error and escalate to human-in-the-loop if high-risk",
              "Return raw stack traces to users",
              "Silently continue",
            ],
            answer:
              "Return a generic safe error and escalate to human-in-the-loop if high-risk",
            explanation:
              "Graceful failures with escalation preserve safety and user experience when no custom handler exists.",
          },
          {
            id: 2050120,
            question:
              "When converting an Agent to act as a Tool, what must the calling agent expect?",
            options: [
              "The called agent will always return perfectly structured JSON",
              "Potentially freeform text outputs that may require custom parsing via custom_output_extractor",
              "No outputs at all",
              "Immediate synchronous hardware responses",
            ],
            answer:
              "Potentially freeform text outputs that may require custom parsing via custom_output_extractor",
            explanation:
              "Agents-as-tools often return natural language; extractors convert these to machine-readable data.",
          },
          {
            id: 2050121,
            question: "Which scenario benefits from name_override at runtime?",
            options: [
              "Hiding tool behavior from operators",
              "Temporarily presenting a simplified name for agents operating in a constrained context (e.g., 'math_tool' vs 'scientific_calculator')",
              "Increasing token usage",
              "Disabling tracing",
            ],
            answer:
              "Temporarily presenting a simplified name for agents operating in a constrained context (e.g., 'math_tool' vs 'scientific_calculator')",
            explanation:
              "Contextual renaming makes tools easier to reason about for the current workflow.",
          },
          {
            id: 2050122,
            question:
              "What is a recommended approach when writing a failure_error_function for non-deterministic external tools?",
            options: [
              "Always throw the raw error to the user",
              "Classify error types (transient vs permanent), apply retries for transient, and fallback or escalate for permanent",
              "Ignore error classification",
              "Retry indefinitely",
            ],
            answer:
              "Classify error types (transient vs permanent), apply retries for transient, and fallback or escalate for permanent",
            explanation:
              "This strategy balances robustness and safety when external services fail.",
          },
          {
            id: 2050123,
            question:
              "Which quality improves when custom_output_extractor is deterministic?",
            options: [
              "Intermittent parsing behavior",
              "Predictability and easier testing of downstream consumers",
              "Higher latency always",
              "Increased randomness",
            ],
            answer: "Predictability and easier testing of downstream consumers",
            explanation:
              "Determinism helps write reliable tests and reduces surprise behavior for callers.",
          },
          {
            id: 2050124,
            question: "What should description_override avoid doing?",
            options: [
              "Including examples",
              "Omitting critical constraints or security caveats that the original description covered",
              "Clarifying usage",
              "Mentioning rate limits",
            ],
            answer:
              "Omitting critical constraints or security caveats that the original description covered",
            explanation:
              "Overriding descriptions must not remove important safety or usage information.",
          },
          {
            id: 2050125,
            question:
              "Which governance practice is important for changing is_enabled state?",
            options: [
              "No governance needed",
              "Require change requests, audits, and notification to stakeholders when toggling critical tools",
              "Allow any developer to toggle silently",
              "Only change it in production without logs",
            ],
            answer:
              "Require change requests, audits, and notification to stakeholders when toggling critical tools",
            explanation:
              "Governance prevents accidental or malicious toggling of critical capabilities.",
          },
          {
            id: 2050126,
            question:
              "Which of the following is an appropriate content of a failure_error_function log entry?",
            options: [
              "Detailed user PII without redaction",
              "Error classification, timestamp, tool name (or name_override), and relevant context for debugging",
              "Only the word 'error'",
              "Encrypted internal key",
            ],
            answer:
              "Error classification, timestamp, tool name (or name_override), and relevant context for debugging",
            explanation:
              "Structured, sanitized logs help operators diagnose issues while protecting privacy.",
          },
          {
            id: 2050127,
            question:
              "When building a custom_output_extractor, which step is vital?",
            options: [
              "Assume model output will never change",
              "Create thorough examples and unit tests for common and edge-case outputs",
              "Ignore edge cases",
              "Don't version the extractor",
            ],
            answer:
              "Create thorough examples and unit tests for common and edge-case outputs",
            explanation:
              "Testing guards against model output drift and ensures extractor reliability.",
          },
          {
            id: 2050128,
            question:
              "Which effect can name_override have on observability if not handled carefully?",
            options: [
              "Improved trace linking by default",
              "Confusion in logs if both original and overridden names are not recorded",
              "Guaranteed security improvements",
              "No effect",
            ],
            answer:
              "Confusion in logs if both original and overridden names are not recorded",
            explanation:
              "Renaming without mapping causes difficulties correlating events to the underlying tool.",
          },
          {
            id: 2050129,
            question:
              "If a tool is temporarily unhealthy, which pattern is preferable?",
            options: [
              "Set is_enabled=false and notify stakeholders, optionally route to fallback tool",
              "Keep it enabled and ignore errors",
              "Permanently delete tool",
              "Remove tool description",
            ],
            answer:
              "Set is_enabled=false and notify stakeholders, optionally route to fallback tool",
            explanation:
              "Disabling prevents further failures and fallback routing keeps functionality available.",
          },
          {
            id: 2050130,
            question:
              "What is an important consideration when the failure_error_function triggers a retry?",
            options: [
              "Use exponential backoff and limit retries to avoid amplification and rate-limiting issues",
              "Retry continuously without limits",
              "Always escalate immediately",
              "Hide retries from logs",
            ],
            answer:
              "Use exponential backoff and limit retries to avoid amplification and rate-limiting issues",
            explanation:
              "Controlled retries reduce load on downstream services and improve stability.",
          },
          {
            id: 2050131,
            question:
              "Which behavior makes a custom_output_extractor robust to minor format changes?",
            options: [
              "Strictly matching a single exact pattern",
              "Using tolerant parsing with schema validation and fallback heuristics",
              "Failing on first mismatch",
              "Not validating at all",
            ],
            answer:
              "Using tolerant parsing with schema validation and fallback heuristics",
            explanation:
              "Tolerant parsing handles small variations while still enforcing correctness via validation.",
          },
          {
            id: 2050132,
            question:
              "Which documentation should accompany a description_override?",
            options: [
              "No documentation",
              "Rationale for the override, examples of expected use, and any additional constraints",
              "Only an author name",
              "Only a changelog entry with no context",
            ],
            answer:
              "Rationale for the override, examples of expected use, and any additional constraints",
            explanation:
              "Context and examples reduce misuse and help maintainers understand the intent.",
          },
          {
            id: 2050133,
            question:
              "Which security step should you take before enabling a previously disabled tool (is_enabled=true)?",
            options: [
              "Enable silently without checks",
              "Run safety and integration tests, check for recent security advisories, and notify stakeholders",
              "Change its name only",
              "Delete logs first",
            ],
            answer:
              "Run safety and integration tests, check for recent security advisories, and notify stakeholders",
            explanation:
              "Validation prevents reintroducing known issues when re-enabling tools.",
          },
          {
            id: 2050134,
            question:
              "What is useful to include in failure_error_function responses to callers?",
            options: [
              "Internal debug tokens and stack traces",
              "A clear user-facing error message, a safe fallback if available, and an incident reference for support",
              "PII of developers",
              "The original raw exception only",
            ],
            answer:
              "A clear user-facing error message, a safe fallback if available, and an incident reference for support",
            explanation:
              "User-friendly messages plus incident IDs help support and avoid exposing internals.",
          },
          {
            id: 2050135,
            question:
              "When wrapping an Agent as a Tool, what contract should custom_output_extractor expose?",
            options: [
              "Arbitrary formats without documentation",
              "A stable, documented schema and failure modes the caller can handle",
              "No contract at all",
              "Only human-readable text",
            ],
            answer:
              "A stable, documented schema and failure modes the caller can handle",
            explanation:
              "Contracts let callers parse outputs reliably and implement robust error handling.",
          },
          {
            id: 2050136,
            question:
              "Which operational practice reduces confusion caused by name_override changes over time?",
            options: [
              "Keep no history",
              "Maintain a mapping table of original names to overrides and include both in logs for traceability",
              "Change names daily",
              "Only change names in production without notes",
            ],
            answer:
              "Maintain a mapping table of original names to overrides and include both in logs for traceability",
            explanation:
              "Mapping preserves traceability and aids debugging when names change.",
          },
          {
            id: 2050137,
            question:
              "What is a good heuristic for designing failure_error_function logic for rate-limited tools?",
            options: [
              "Retry immediately in a tight loop",
              "Respect rate-limit headers, apply exponential backoff, and surface informative errors when limits are reached",
              "Ignore rate limits",
              "Disable logging",
            ],
            answer:
              "Respect rate-limit headers, apply exponential backoff, and surface informative errors when limits are reached",
            explanation:
              "Proper handling of rate limits avoids service disruption and informs callers appropriately.",
          },
          {
            id: 2050138,
            question:
              "Which testing approach is essential for custom_output_extractor reliability?",
            options: [
              "Unit tests covering diverse and malformed model outputs, plus integration tests with callers",
              "No tests are needed",
              "Only manual eyeballing",
              "Only performance tests",
            ],
            answer:
              "Unit tests covering diverse and malformed model outputs, plus integration tests with callers",
            explanation:
              "Comprehensive tests ensure extractors handle real-world variations and integrate well.",
          },
          {
            id: 2050139,
            question:
              "If a description_override deliberately hides sensitive constraints, what is the likely consequence?",
            options: [
              "Improved safety",
              "Agents or users may misuse the tool and cause security or compliance violations",
              "Faster execution",
              "Lower latency",
            ],
            answer:
              "Agents or users may misuse the tool and cause security or compliance violations",
            explanation:
              "Hiding constraints removes important guardrails and increases risk.",
          },
          {
            id: 2050140,
            question:
              "Which pattern is best for rolling out an is_enabled change for a critical tool?",
            options: [
              "Flip the flag globally at peak traffic",
              "Use staged rollout with monitoring, canary users, and rollback plan",
              "Never monitor",
              "Change it without notification",
            ],
            answer:
              "Use staged rollout with monitoring, canary users, and rollback plan",
            explanation:
              "Staged rollouts detect problems early and limit blast radius.",
          },
          {
            id: 2050141,
            question:
              "Which data should a failure_error_function avoid returning to end-users?",
            options: [
              "High-level error codes and recovery steps",
              "Sensitive internal debug information or PII",
              "An incident reference to support team",
              "A short user-friendly message",
            ],
            answer: "Sensitive internal debug information or PII",
            explanation:
              "Protecting internal details prevents information leakage and security risks.",
          },
          {
            id: 2050142,
            question:
              "When should you prefer building a custom_output_extractor instead of relying on ad-hoc regex parsing?",
            options: [
              "When outputs are complex and require schema validation, normalization, and strong error handling",
              "When output is always identical",
              "When you want fragile parsing",
              "When integration tests are impossible",
            ],
            answer:
              "When outputs are complex and require schema validation, normalization, and strong error handling",
            explanation:
              "Structured, well-tested extractors are necessary for complex or variable outputs.",
          },
          {
            id: 2050143,
            question:
              "Which metric is useful to monitor after applying a description_override?",
            options: [
              "No metric needed",
              "Rate of tool invocation changes and unexpected calls indicating potential misuse",
              "GPU temperature",
              "Token counts only",
            ],
            answer:
              "Rate of tool invocation changes and unexpected calls indicating potential misuse",
            explanation:
              "Monitoring invocation patterns reveals whether a new description altered agent behavior.",
          },
          {
            id: 2050144,
            question:
              "Which action is advisable when a tool's failure_error_function identifies a security breach?",
            options: [
              "Log the event, disable the tool (is_enabled=false), notify security teams, and start incident response",
              "Ignore and continue",
              "Only retry",
              "Show raw logs to users",
            ],
            answer:
              "Log the event, disable the tool (is_enabled=false), notify security teams, and start incident response",
            explanation:
              "Rapid containment and proper notification are required for security incidents.",
          },
          {
            id: 2050145,
            question:
              "What is an advantage of exposing both original tool name and name_override in telemetry?",
            options: [
              "No advantage",
              "Improved traceability and easier root-cause analysis across layers",
              "Confusing logs",
              "Slower querying",
            ],
            answer:
              "Improved traceability and easier root-cause analysis across layers",
            explanation:
              "Dual naming preserves context and reduces ambiguity for operators.",
          },
          {
            id: 2050146,
            question:
              "Which fallback strategy might failure_error_function implement when a tool's core function is unavailable but degraded alternatives exist?",
            options: [
              "Silently return success",
              "Call a degraded-capability tool, mark the result as degraded, and notify the caller",
              "Always escalate to humans immediately",
              "Throw raw exception",
            ],
            answer:
              "Call a degraded-capability tool, mark the result as degraded, and notify the caller",
            explanation:
              "Degraded fallbacks preserve functionality while communicating reduced guarantees.",
          },
          {
            id: 2050147,
            question:
              "Which consideration is important when writing a custom_output_extractor for an agent tool that streams output?",
            options: [
              "Assume full output arrives instantly",
              "Handle incremental chunks, partial states, and finalization checks to produce consistent outputs",
              "Ignore streaming and parse only beginning",
              "Block streaming entirely",
            ],
            answer:
              "Handle incremental chunks, partial states, and finalization checks to produce consistent outputs",
            explanation:
              "Streaming requires extractors to assemble and validate partial data safely.",
          },
          {
            id: 2050148,
            question:
              "Which lifecycle practice should accompany changes to description_override and name_override?",
            options: [
              "No lifecycle management",
              "Version changes, include changelogs, and notify dependent teams of the intent and impact",
              "Change without notice",
              "Remove tests",
            ],
            answer:
              "Version changes, include changelogs, and notify dependent teams of the intent and impact",
            explanation:
              "Change management avoids surprises for downstream consumers and maintainers.",
          },
          {
            id: 2050149,
            question:
              "What is the primary outcome when you combine a robust failure_error_function with is_enabled toggles?",
            options: [
              "Uncontrolled retries",
              "Resilient behavior where failures are mitigated, logged, and tools can be disabled when needed",
              "Increased randomness",
              "Automatic model retraining",
            ],
            answer:
              "Resilient behavior where failures are mitigated, logged, and tools can be disabled when needed",
            explanation:
              "Together they create a controllable and observable failure-management strategy.",
          },
          {
            id: 2050150,
            question:
              "Which short checklist best summarizes safe advanced tool practices?",
            options: [
              "Obscure names, no docs, always enabled, no failure handling",
              "Clear naming (and name_override mapping), accurate description_override with constraints, controlled is_enabled via feature flags, robust failure_error_function, and tested custom_output_extractor for agents-as-tools",
              "Randomize descriptions, disable all telemetry, and avoid testing",
              "Only use default settings and never override anything",
            ],
            answer:
              "Clear naming (and name_override mapping), accurate description_override with constraints, controlled is_enabled via feature flags, robust failure_error_function, and tested custom_output_extractor for agents-as-tools",
            explanation:
              "This checklist captures the recommended practices for safe, maintainable advanced tool configurations.",
          },
        ],
      },
    ],
  },
];

export const getCategoryByName = (name: string): Category | undefined => {
  return categories.find(
    (category) => category.name.toLowerCase() === name.toLowerCase()
  );
};

export const getTopicById = (id: number): Topic | undefined => {
  for (const category of categories) {
    const topic = category.topics.find((topic) => topic.id === id);
    if (topic) return topic;
  }
  return undefined;
};
