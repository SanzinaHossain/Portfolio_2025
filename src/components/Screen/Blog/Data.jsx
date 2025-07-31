import javascript1 from "../../../assets/Interview Question/Javascript 1.pdf";
import javascript2 from "../../../assets/Interview Question/Javascript 2.pdf";
import javascript3 from "../../../assets/Interview Question/Javascript 3.pdf";
import advancedJs from "../../../assets/Interview Question/Advanced Javascript Interview.pdf";
import typescript from "../../../assets/Interview Question/typescript.pdf";
import NodeJs from "../../../assets/Interview Question/Node js.pdf";
import fullStack from "../../../assets/Interview Question/FullStack Developer Interview Question.pdf";
import ReactJs from "../../../assets/Interview Question/React Interview Question.pdf";
import advancedReactJs from "../../../assets/Interview Question/React Advanced.pdf";
import ReduxBook from "../../../assets/Resources/Redux Book.pdf";
import CareerGuide from "../../../assets/Resources/Book.pdf";
import NodeJsLearning from "../../../assets/Resources/Node Js.pdf";
import TypescriptLearning from "../../../assets/Resources/TypeScript.pdf";
import ReactStateManagement from "../../../assets/Resources/React State Management.pdf";

export const InterviewData = [
  {
    name: "JS Interview Question 1",
    file: javascript1,
  },
  {
    name: "JS Interview Question 2",
    file: javascript2,
  },
  {
    name: "JS Interview Question 3",
    file: javascript3,
  },
  {
    name: "Advanced JS Interview Question",
    file: advancedJs,
  },
  {
    name: "TS Interview Question",
    file: typescript,
  },
  {
    name: "Node JS Interview Question",
    file: NodeJs,
  },
  {
    name: "React JS Interview Question",
    file: ReactJs,
  },
  {
    name: "Advanced React JS Interview Question",
    file: advancedReactJs,
  },
  {
    name: "FullStack Interview Question",
    file: fullStack,
  },
];

export const ResourceData = [
  {
    name: "Redux Learning",
    file: ReduxBook,
  },
  {
    name: "Career GuideLines",
    file: CareerGuide,
  },
  {
    name: "Node JS Learning",
    file: NodeJsLearning,
  },
  {
    name: "TypeScript Zero to Hero",
    file: TypescriptLearning,
  },
  {
    name: "React useContext Vs Redux",
    file: ReactStateManagement,
  },
];

export const BlogData = [
  {
    image:
      "https://a.storyblok.com/f/42126/c16b886816/js-xhr-fetch-axios.png/m/1600x900/filters:quality(70)/",
    name: "Fetch vs Axios vs TanStack Query",
    description:
      "A simple comparison of three ways to get data in JavaScript: Fetch is basic, Axios adds handy features, and TanStack Query helps manage data in React apps.",
    date: "20th July, 2025",
    data: {
      title:
        "Fetch vs Axios vs TanStack Query: Choosing the Right Tool for API Requests in React",
      description:
        "When building modern web applications, handling API requests efficiently is crucial for delivering a smooth user experience. React developers often face the decision of which tool or library to use when making HTTP requests. Among the most popular choices are Fetch, Axios, and the increasingly popular TanStack Query (formerly React Query). This blog post dives into these three options, comparing their features, use cases, and advantages to help you decide which one fits best for your project.",
      part: [
        {
          title: "What is fetch?",
          description:
            "Fetch is a native JavaScript API that allows you to make HTTP requests. It is built into modern browsers, so no additional library installation is required. Fetch returns promises, enabling asynchronous request handling.",
          pros: {
            title: "Advantages of Fetch",
            pros_value: [
              {
                text: "Built-in: No installation needed, reducing bundle size.",
              },
              {
                text: "Simple: Straightforward syntax for basic GET requests.",
              },
              {
                text: "Flexible: Supports various HTTP methods, headers, and configurations.",
              },
            ],
            cons_value: [
              "Verbose error handling: You have to manually check response.ok and parse JSON.",
              "No request cancellation: Limited control over ongoing requests.",
              "No automatic transformation: Response data must be processed manually.",
              "No caching or state management: Fetch just makes requests and returns responses.",
            ],
            code_image: "https://i.postimg.cc/XvSpZLWx/code1.png",
          },
        },
        {
          title: "What is Axios?",
          description:
            "Axios is a popular third-party HTTP client library that works in both the browser and Node.js. It provides an easy-to-use API with additional features over Fetch.",
          pros: {
            title: "Advantages of Axios",
            pros_value: [
              {
                text: "Simplified syntax: Automatically parses JSON responses.",
              },
              {
                text: "Better error handling: Rejects the promise for non-2xx status codes.",
              },
              {
                text: "Supports request cancellation: With built-in support for cancel tokens.",
              },
              {
                text: "Automatic transforms: Request and response data can be transformed easily.",
              },
              {
                text: "Interceptors: Middleware for request and response handling.",
              },
              {
                text: "Wide browser support: Works well across many environments.",
              },
            ],
            cons_value: [
              "Library size: Adds to your bundle size.",
              "Requires installation: Need to add it as a dependency.",
              "No automatic transformation: Response data must be processed manually.",
              "No built-in caching: Like Fetch, Axios alone doesn’t manage caching or background updates.",
            ],
            code_image: "https://i.postimg.cc/4dbqQLVP/code2.png",
          },
        },
        {
          title: "What is TanStack Query?",
          description:
            "TanStack Query (previously React Query) is a powerful data-fetching and state management library designed specifically for React applications. It provides a higher-level abstraction over data fetching, caching, synchronization, and updating server state.",
          pros: {
            title: "Advantages of TanStack Query",
            pros_value: [
              {
                text: "Declarative API: Define what data you need and how to fetch it.",
              },
              {
                text: "Automatic caching and background updates: Keeps data fresh and reduces network requests.",
              },
              { text: "Out-of-the-box support for retries and pagination." },
              { text: "Built-in loading and error state management." },
              { text: "Supports query invalidation and refetching." },
              {
                text: "Works well with any HTTP client: You can use Fetch, Axios, or anything else underneath.",
              },
              {
                text: "Improves developer productivity: Reduces boilerplate code for data fetching logic.",
              },
            ],
            cons_value: [
              "Learning curve: More complex than using Fetch or Axios directly.",
              "Additional dependency: Increases project size.",
              "React-specific: Only for React projects.",
            ],
            code_image: "https://i.postimg.cc/3xsd4TpP/code3.png",
          },
        },
      ],
      end_title: "Conclusion",
      end_description:
        "Choosing the right tool depends on your project’s complexity and needs. Fetch is great for quick and simple requests without extra dependencies. Axios improves on Fetch with useful features like interceptors and automatic JSON parsing. For modern React applications where server state and caching matter, TanStack Query provides a robust, declarative approach that dramatically simplifies data-fetching logic.",
    },
  },

  // {
  //   image:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRViG43ScyiU9hLv8U0QVNFawIv677Ubz78Iw&s",
  //   name: "React Hooks: useMemo & useReducer Explained",
  //   description:
  //     "Discover how useMemo improves speed by saving calculations, and useReducer makes managing more complex state easier in React.",
  //   date: "1st May, 2025",
  //   data: [],
  // },
];
