# Front-End Web without JavaScript
Comparative Analysis of JavaScript Alternatives

## Introduction
Let's continue to dig into the subject of Front-end Web performances and push techniques and studies towards new areas of improvement.

After studying in the [previous article](https://itnext.io/is-it-possible-to-improve-javascript-jit-with-an-aot-pre-step-8e25ecb3590f) the possibility of adding an AOT (Ahead Of Time) pre-step to JavaScript JIT (Just In Time) and we discovered two optimistic solutions: this study Augmenting JavaScript JIT with Ahead-of-Time Compiling and the use of WebAssembly.

We have also seen that the most time-consuming step in JavaScript execution is the optimization phase: types, hot functions, paths, etc. In addition, to trigger this phase, the JavaScript code must be executed several times. I'm looking for a solution to pre-optimize JavaScript code before execution. 

We also saw that using Typescript has no effect on optimization, hence I will try to find some naturally typed languages.

Therefore, in this article, I will explore alternatives to JavaScript for building a front-end web application, including Reason ML, ELM and Rust Yew.

## Benchmark Execution Plan

[LINK TO ARTICLE]()
