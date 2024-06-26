# rtk-prompt-example
 Redux Toolkit and Prompt example

**RTK Prompt Example**
======================

A simple example of using Redux Toolkit (RTK) with `prompt` to build a terminal CLI app that persists its state to a JSON file.

**Features**

* Uses RTK to manage the app's state
* Uses `prompt` to create a simple command-line interface
* Persists the app's state to a JSON file named `store-state.json`
* Automatically saves the state to the file on every change

**Getting Started**

1. Clone the repository: `git clone https://github.com/your-username/rtk-prompt-example.git`
2. Install dependencies: `npm install`
3. Run the app: `node main.js`

**Usage**

1. Run the app using `node main.js`
2. Enter either "increment" or "decrement" to update the counter value
3. The app will automatically save the state to `store-state.json` on every change
4. You can view the current state by running `cat store-state.json`

**Files**

* `main.js`: The main app file that sets up the RTK store and `prompt` interface
* `store.js`: The file that defines the RTK store and its reducer
* `store-state.json`: The file that stores the app's state

**License**

This project is licensed under the MIT License. See `LICENSE` for details.

**Contributing**

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

I hope this helps! Let me know if you need any further assistance.