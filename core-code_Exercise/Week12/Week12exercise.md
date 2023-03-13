# Week 12 JavaScript
## (Tuesday)
## Node.JS Core Understanding - Learning Exercise 🧠
1.  What is Node.JS?
Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices. [🔎](https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm)
    - What is NPM?
    NPM (Node Package Manager) is a package manager for Node.js projects made available for public use. Projects available on the npm registry are called “packages.” [🔎](https://kinsta.com/knowledgebase/what-is-npm/)
2.  What problem does Node.JS solve (Is there any problem that can be solved with Node.JS 🤔)?
Node.js is an excellent solution for developing microservices and creating easy-to-use APIs to connect them. [🔎](https://www.netguru.com/glossary/node-js#:~:text=suite%20of%20microservices.-,Node.,design%20routing%20addresses%20for%20them.)
3.  What is the V8 Javascript Engine?
V8 JavaScript engine is an open source JavaScript and WebAssembly engine that compiles JavaScript to optimized machine code before execution. [🔎](https://www.stackpath.com/edge-academy/what-is-v8-javascript-engine/)
4.  Is Node.JS really necessary in the Development ecosystem?
Node.js shines in real-time web apps that employ push technology over WebSocket. Node’s real-time, two-way connections—where the client and server can each initiate communication—enable the freer exchange of data. [🔎](https://www.toptal.com/javascript/why-the-hell-would-i-use-node-js#:~:text=with%20high%20throughput.-,Node.,understanding%20this%20is%20absolutely%20essential.)
5.  What is the difference between Node.JS and any other browser?
What changes is the ecosystem.

In the browser, most of the time what you are doing is interacting with the DOM, or other Web Platform APIs like Cookies. Those do not exist in Node.js, of course. You don't have the document, window and all the other objects that are provided by the browser.
    - Are Node.JS and a browser the same?
    What changes is the ecosystem.
    From the perspective of a frontend developer who extensively uses JavaScript, Node.js apps bring with them a huge advantage: the comfort of programming everything - the frontend and the backend - in a single language. [🔎](https://nodejs.dev/en/learn/differences-between-nodejs-and-the-browser/#:~:text=Another%20difference%20is%20that%20Node,to%20import%20in%20the%20browser.)
6.  What is NVM and Why is it useful for Node.JS developers?
Node Version Manager (NVM), as the name implies, is a tool for managing Node versions on your device.

Different projects on your device may be using different versions of Node. Using only one version (the one installed by npm) for these different projects may not give you accurate execution results. [🔎](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/#:~:text=What%20is%20NVM%3F,give%20you%20accurate%20execution%20results.)

## Node.JS Module System - Learning Exercise 🧠
1. What is a Javascript Module?
A module is a function or group of similar functions. They are grouped together within a file and contain the code to execute a specific task when called into a larger application. [🔎](https://www.freecodecamp.org/news/javascript-modules-explained-with-examples/#:~:text=A%20module%20in%20JavaScript%20is,object%20accessible%20to%20other%20modules.)
2. Why are Javascript Modules necessary?
JavaScript modules allow you to break up your code into separate files, this makes it easier to maintain a code-base. [🔎](https://www.w3schools.com/js/js_modules.asp#:~:text=JavaScript%20modules%20allow%20you%20to,in%20the%20tag.)
3. What module standards are available in Node.JS?
[Answer 🔎](https://nodejs.org/api/modules.html#modules-commonjs-modules)
4. What are the differences between ESModules and CommonJS modules?
CommonJS modules are a popular way to modularize JavaScript code. They allow you to export and import modules using the export and import keywords, respectively.

ES Modules are a newer way to modularize JavaScript code. Unlike CommonJS modules, which rely on exports and imports, ES Modules use the module keyword. [🔎](https://www.knowledgehut.com/blog/web-development/commonjs-vs-es-modules)
5. Which types of modules exist in Node.JS?
[Answer 🔎](https://nodejs.org/api/modules.html#:~:text=Node.js%20has%20two%20module,CommonJS%20modules%20and%20ECMAScript%20modules.)

# APIs Core Understanding - Learning Exercise 🧠
1. What is an API?
[Answer 🔎](https://www.redhat.com/es/topics/api/what-are-application-programming-interfaces)
2. What is a Protocol?
In networks, a protocol is a set of rules for formatting and processing data. Network protocols are like a lingua franca for computers. Computers on a network can use very different software and hardware; however, the use of protocols allows them to communicate with each other. [🔎](https://www.cloudflare.com/es-es/learning/network-layer/what-is-a-protocol/)
3. Is the term API only applicable to the communication of programs over the Internet?
The term API is often used to refer to web APIs,[2] which allow communication between computers that are joined by the internet. There are also APIs for programming languages, software libraries, computer operating systems, and computer hardware. [🔎](https://en.wikipedia.org/wiki/API#:~:text=The%20term%20API%20is%20often,operating%20systems%2C%20and%20computer%20hardware.)
4. Why is structured communication between two programs important?
 API endpoints are critical to enterprises for two main reasons: 

Security
API endpoints make the system vulnerable to attack. API monitoring is crucial for preventing misuse.

Performance
API endpoints, especially high traffic ones, can cause bottlenecks and affect system performance.
[🔎](https://aws.amazon.com/what-is/api/?nc1=h_ls)
5. Is an API just another program or a standard?
Las API son estándares para el intercambio de datos de aplicaciones, al igual que los protocolos son estándares para el intercambio de datos de red. [🔎](https://www.talend.com/resources/what-is-an-api/#:~:text=In%20simple%20terms%2C%20an%20API,standards%20for%20network%20data%20interchange.)
6. Do you know any API? Can you list at least 5 examples of APIs?
[Answer 🔎](https://platzi.com/blog/12-api-gratis-para-desarrolladores-frontend/)

## From JSON to REST What is JSON? - Learning Exercise 🧠
1. What is JSON?
JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. [🔎](https://www.json.org/json-en.html)
- Is JSON the same as a plain Javascript object?
Though the syntax of JSON is similar to the JavaScript object, JSON is different from JavaScript objects.
JSON
The key in key/value pair should be in double quotes.
JSON cannot contain functions.
JavaScript Object
The key in key/value pair can be without double quotes.	
JavaScript objects can contain functions.
[🔎](https://www.programiz.com/javascript/json#:~:text=Though%20the%20syntax%20of%20JSON,is%20different%20from%20JavaScript%20objects.&text=The%20key%20in%20key%2Fvalue,JSON%20cannot%20contain%20functions.)
2. What is REST?
REST (REpresentational State Transfer) is an architectural style for developing web services. 
- Is REST a programming language, framework, technology, or architecture pattern?
is an architectural style for developing web services.
3. What is a Resource in REST?
The fundamental concept in any RESTful API is the resource. A resource is an object with a type, associated data, relationships to other resources, and a set of methods that operate on it. [🔎](https://restful-api-design.readthedocs.io/en/latest/resources.html)
- What is a resource identifier?
A Uniform Resource Identifier (URI) is a character sequence that identifies a logical (abstract) or physical resource -- usually, but not always, connected to the internet. A URI distinguishes one resource from another.
URIs enable internet protocols to facilitate interactions between and among these resources. The strings of characters incorporated in a URI serve as identifiers, such as a scheme name and a file path. [🔎](https://www.techtarget.com/whatis/definition/URI-Uniform-Resource-Identifier)
4. How are HTTP and REST related?
While many people continue to use the terms REST and HTTP interchangeably, the truth is that they are different things. REST refers to a set of attributes of a particular architectural style, while HTTP is a well-defined protocol that happens to exhibit many features of a RESTful system. [🔎](https://www.baeldung.com/cs/rest-vs-http#:~:text=While%20many%20people%20continue%20to,features%20of%20a%20RESTful%20system.)
- What HTTP methods does REST use within its architecture rules?
[Answer 🔎](https://www.techtarget.com/searchapparchitecture/tip/The-5-essential-HTTP-methods-in-RESTful-API-development)
- Why do we use HTTP methods in REST and how do they relate to resources?
[HTTP resources vs. resource collections 🔎](https://www.techtarget.com/searchapparchitecture/tip/The-5-essential-HTTP-methods-in-RESTful-API-development)
5. Is REST the same as HTTP?
[Answer 🔎](https://www.baeldung.com/cs/rest-vs-http#:~:text=While%20many%20people%20continue%20to,features%20of%20a%20RESTful%20system.)

## REST API Clients
3. Answer the questions:
- Postman only works with REST APIs?
execute any REST, SOAP, and GraphQL queries from within Postman.
- Is there an alternative to Postman?
[Postman alternatives 🔎](https://www.baeldung.com/cs/rest-vs-http#:~:text=While%20many%20people%20continue%20to,features%20of%20a%20RESTful%20system.)



