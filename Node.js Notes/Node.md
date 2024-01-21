# Node.JS
* Node.js is not a  programming Language, neither a library or nor a framework ; it is  `Javascript Runtime Environment` build on chrome's V8 Javascript Engine.

* It is use for serverside programming.

### How to use Node.js in your Editor
* 1. Install Node.js
* 2. create JS file (Ex: index.js);
* 3. open your terminal & cd your directory
* 4. write `node filename.js`
    * example `node index.js`


## Node REPL => Read, Evaluate Print Loop

### * `global` in Node.js
* `global` is a Global Object in Node.js.
 "global" refers to an object that provides variables and functions that are available across your entire application. 

    * Like in Browser we have `window` object  (Similar).
* In your terminal
```
node
global
```
## `Process` Object 
This object provides information about the currently running Node.js process. It allows you to interact with and control the running process. 

#### 1 .`Accessing the Process Object:`
In any Node.js script, you can directly access the process object without requiring any modules.

#### 2 .` Properties of the Process Object:`

`process.env:`
An object containing the user environment. It provides information about the environment variables.

`process.argv:`
An array containing the command-line arguments passed to the Node.js process. The first element is the path to Node.js, and the second element is the path to the script being run.

`process.cwd():`
A method that returns the current working directory of the Node.js process.

`process.pid:`
A property containing the process ID of the Node.js process.

`process.platform:`
A property indicating the platform on which the Node.js process is running (e.g., 'win32', 'linux', 'darwin').

`process.version:`
A property containing the Node.js version.

etc.

#### `Process Termination:`
You can exit the Node.js process explicitly using `process.exit()`.

```
process.exit(0);
```