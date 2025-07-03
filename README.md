# Bloq Quantum Full Stack Screening Task - Quantum Circuit Builder – Task Submission by Harshit Dhundale

## 🔗 Live Demo  
[Visit the App at https://bloq-quantum-circuit.vercel.app ](https://bloq-quantum-circuit.vercel.app)

## 🎥 Demo Video  
[![Watch the Bloq Quantum Circuit Builder Demo](https://img.youtube.com/vi/psCZBLrHhZ8/0.jpg)](https://youtu.be/psCZBLrHhZ8)

*Click the thumbnail above to watch the Quantum Circuit Builder demo video.*

## 🧠 About the Task

This project is my solution to the Bloq Quantum Full Stack Screening Task.

### ✅ Task 1: X-Ray View
- Added an expandable view for the Custom Gate (CG) that shows 4 Hadamard gates inside it.
- Toggle using an eye icon on hover.
- The expanded view is visually distinct (dark blue dotted border) and doesn’t overlap with existing gates.

### ✅ Task 2: Variable Width Gates
- Custom gates can now span multiple columns when expanded.
- Implemented a system to avoid overlap and reposition gates dynamically when needed.

## 🧰 Stack Used
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **State Management**: React State
- **Deployment**: Vercel

## ⚙️ How to Run Locally

```bash
git clone https://github.com/Harshit-Dhundale/Bloq-Quantum-Full-Stack-Screening-Task.git
cd Bloq-Quantum-Full-Stack-Screening-Task
npm install
npm run dev
````

Then open [http://localhost:3000](http://localhost:3000)

## 🗂 File Structure Highlights

```
/app
  /components
    Circuit.jsx       → Main grid logic
    Operator.jsx      → Gate component
    Operators.jsx     → Gate selector panel
    Task.jsx          → Shows task description
/data
  operators.jsx       → Gate definitions
/public
  (Screenshots & video for demo provided in the task for reference)
```

## 📌 Notes

* Implemented grid collision logic to prevent invalid circuit states.
* Handled edge cases like partial gate expansion, bottom row constraints, and automatic shifting.
* Design focuses on being intuitive and functional on all screen sizes.

## 👋 Author

**Harshit Dhundale**
🔗 [LinkedIn](https://www.linkedin.com/in/harshitdhundale)
💻 [GitHub](https://github.com/Harshit-Dhundale)

