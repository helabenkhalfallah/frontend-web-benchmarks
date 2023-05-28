# frontend-web-benchmarks

## Introduction
Let's continue to dig into the subject of Front-end Web performances and push techniques and studies towards new areas of improvement.

After studying in the [previous article](https://itnext.io/is-it-possible-to-improve-javascript-jit-with-an-aot-pre-step-8e25ecb3590f) the possibility of adding an AOT (Ahead Of Time) pre-step to JavaScript JIT (Just In Time) and we discovered two optimistic solutions: this study Augmenting JavaScript JIT with Ahead-of-Time Compiling and the use of WebAssembly.

We have also seen that the most time-consuming step in JavaScript execution is the optimization phase: types, hot functions, paths, etc. In addition, to trigger this phase, the JavaScript code must be executed several times. I'm looking for a solution to pre-optimize JavaScript code before execution. 

We also saw that using Typescript has no effect on optimization, hence I will try to find some naturally typed languages.

Therefore, in this article, I will explore alternatives to JavaScript for building a front-end web application, including Reason ML, ELM, Haskell Miso, Python Flask and Rust Yew.

## Benchmark Execution Plan
The screens of the application that we are going to develop are as follows:
![image](https://github.com/helabenkhalfallah/frontend-web-benchmarks/assets/1331451/6cbda295-1cfa-43c0-a2a6-1c52e40f0fe0)
![image](https://github.com/helabenkhalfallah/frontend-web-benchmarks/assets/1331451/7d366cc5-ad13-4f67-9a6c-0b48a5d3ce92)

This small application highlights the main techniques we use on a daily basis in the Web Front-end:

🔸Call of a Rest API (retrieval of the list of news and details of a news).

🔸Display of a list with pagination.

🔸Routing from one page to another.

🔸Change of "state" to note and comment on a news item.

The reference application will be developed using:

🔸 React JS

🔸 JavaScript (ES6)

🔸 Redux

🔸Eslint with the Airbnb configuration

🔸Jest and React Testing Library

🔸Webpack

This looks like the stack I'm currently using.

I want to see how performance is handled:

🔸 is there a mechanism like "Suspense" and "lazy"?

🔸 and like "useMemo" and "useCallback".

🔸 is it possible to split the bundle?

🔸 or there are other optimization mechanisms ?

I want to highlight:

🔸 the difficulty of setting up.

🔸 the learning curve of language and its techniques.

🔸 compilation/transpilation time in DEV and PROD modes.

🔸 documentation.

🔸 runtime performance.

I'm going to take a closer look at these languages and frameworks:

🔸Reason ML

🔸ELM

🔸Haskell Miso

🔸Python Flask

🔸Rust Yew

Benchmark metrics
I will exploit Core Web Vitals collected from Chrome DevTools:

🔹Largest Contentful Paint (LCP) for measuring the loading speed

🔹First Input Delay (FID) for scoring interactivity

🔹Cumulative Layout Shift (CLS) for calculating the visual stability

With that, I will also be interested in the size of the bundle in PROD.

It's going to be a great study, here we go !
