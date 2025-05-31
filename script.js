const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
//Toggle Mobile menu visibility
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
//Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      const mobileMenu = document.getElementById("mobile-menu");
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
    }
  });
});

function toggleDetails(id, button) {
  const details = document.getElementById(id);
  const isHidden = details.classList.contains("hidden");
  document.querySelectorAll('[id$="-details"]').forEach((el) => {
    if (el.id !== id) {
      el.classList.add("hidden");
      const btn = el.parentElement.querySelector("button");
      if (btn) btn.textContent = "Read More";
    }
  });
  if (isHidden) {
    details.classList.remove("hidden");
    button.textContent = "Read Less";
  } else {
    details.classList.add("hidden");
    button.textContent = "Read More";
  }
}
AOS.init();


const quizzes = {
  dsa: [
    {
      question: "Which of the following is a linear data structure?",
      options: ["Tree", "Graph", "Array", "Hash Table"],
      correct: 2,
    },
    {
      question:
        "What is the maximum number of children a binary tree node can have?",
      options: ["1", "2", "3", "unlimited"],
      correct: 1,
    },
    {
      question: "Which data structure uses LIFO(Last In, First Out)?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      correct: 1,
    },
    {
      question: "Which of the following is used to implement recursion?",
      options: ["Queue", "Heap", "Stack", "Tree"],
      correct: 2,
    },
    {
      question: "Which data structure uses FIFO(First in, First out?",
      options: ["Stack", "Queue", "Tree", "Graph"],
      correct: 1,
    },
    {
      question: "What is the index of first element in an array?",
      options: ["1", "-1", "0", "Depends on the language"],
      correct: 2,
    },
    {
      question: "Which of the following sorting algorithms is the simplest?",
      options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Heap Sort"],
      correct: 2,
    },
    {
      question: "A linked list is made up of:",
      options: ["Arrays", "Nodes", "Graphs", "Stacks"],
      correct: 1,
    },
    {
      question:
        "Which data structure is best suited for implementing undo operations?",
      options: ["Queue", "Stack", "Heap", "Linked List"],
      correct: 1,
    },
    {
      question: "Which algorithm is used to search in a sorted array?",
      options: [
        "Linear Search",
        "Binary Search",
        "Bubble Sort",
        "Depth First Search",
      ],
      correct: 1,
    },
  ],
  web: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "None",
      ],
      correct: 0,
    },
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "jQuery", "CSS", "Js"],
      correct: 2,
    },
    {
      question: "Which tag is used to create a hyperlink in HTML?",
      options: ["<a>", "<link>", "<href>", "<script>"],
      correct: 0,
    },
    {
      question: "Which CSS property is used to change the text color?",
      options: ["font-color", "text-color", "color", "background-color"],
      correct: 2,
    },
    {
      question: "What is the correct syntax to include JavaScript in HTML?",
      options: ["<js>", "<script>", "<javascript>", "<code>"],
      correct: 1,
    },
    {
      question: "Javascript runs on the:",
      options: [
        "Server side only",
        "Browser side only",
        "Both server and browser side",
        "Only in mobile apps",
      ],
      correct: 2,
    },
    {
      question: "Which HTML tag is used for the largest heading?",
      options: ["<h6>", "<heading>", "<head>", "<h1>"],
      correct: 3,
    },
    {
      question: "Which of the following is **not a valid HTTP method**?",
      options: ["GET", "POST", "FETCH", "DELETE"],
      correct: 2, // "FETCH" is not an HTTP method
    },
    {
      question: "What does the `async` attribute in a `<script>` tag do?",
      options: [
        "It makes the script execute after the page loads",
        "It loads the script asynchronously and executes it as soon as it's available",
        "It delays script execution until the DOM is ready",
        "It runs the script only if the user interacts",
      ],
      correct: 1,
    },
    {
      question:
        "In CSS Flexbox, what does `justify-content: space-between;` do?",
      options: [
        "Aligns items in a column format",
        "Pushes items to the start of the flex container",
        "Distributes items with equal spacing between them",
        "Overlaps items with no gap",
      ],
      correct: 2,
    },
  ],
  cloudcomputing: [
    {
      question: "What is Cloud Computing?",
      options: [
        "Computing using traditional data centers",
        "Computing over the internet",
        "Computing using desktop software",
        "Computing only on mobile devices",
      ],
      correct: 1,
    },
    {
      question: "Which of the following is a cloud service model?",
      options: ["SaaS", "BIOS", "HTTP", "XML"],
      correct: 0,
    },
    {
      question: "What does IaaS stand for?",
      options: [
        "Infrastructure as a Service",
        "Internet as a System",
        "Information as a Storage",
        "Interface as a Service",
      ],
      correct: 0,
    },
    {
      question: "Which of the following is not a cloud deployment model?",
      options: [
        "Public Cloud",
        "Private Cloud",
        "Personal Cloud",
        "Hybrid Cloud",
      ],
      correct: 2,
    },
    {
      question: "Which company provides AWS cloud services?",
      options: ["Google", "Apple", "Amazon", "Microsoft"],
      correct: 2,
    },
    {
      question:
        "Which cloud model provides the most control over infrastructure to the user?",
      options: ["SaaS", "PaaS", "IaaS", "FaaS"],
      correct: 2, // IaaS
    },
    {
      question: "What does auto-scaling in cloud computing refer to?",
      options: [
        "Automatically reducing cloud bills",
        "Automatically adjusting the number of resources based on load",
        "Automatically designing cloud architecture",
        "Automatically changing programming languages",
      ],
      correct: 1,
    },
    {
      question:
        "Which of the following is a key benefit of multi-tenancy in cloud environments?",
      options: [
        "Increased hardware cost",
        "Dedicated servers per customer",
        "Resource sharing among multiple users",
        "More frequent downtime",
      ],
      correct: 2,
    },
    {
      question:
        "Which cloud deployment model is used for a single organization only?",
      options: [
        "Public Cloud",
        "Hybrid Cloud",
        "Private Cloud",
        "Community Cloud",
      ],
      correct: 2, // Private Cloud
    },
    {
      question:
        "What is the main purpose of a Content Delivery Network (CDN) in cloud services?",
      options: [
        "Store backups",
        "Deliver content closer to users for faster access",
        "Manage user authentication",
        "Secure database communication",
      ],
      correct: 1,
    },
  ],
  cybersecurity: [
    {
      question: "What is the main goal of cybersecurity?",
      options: [
        "Designing websites",
        "Speeding up computers",
        "Protecting data and systems from attacks",
        "Installing games",
      ],
      correct: 2,
    },
    {
      question: "A strong password should include:",
      options: [
        "Only letters",
        "Only numbers",
        "Your name and birthdate",
        "Letters, numbers, and special characters",
      ],
      correct: 3,
    },
    {
      question: "What does a firewall do?",
      options: [
        "Burns computer viruses",
        "Increases internet speed",
        "Blocks unauthorized access to or from a network",
        "Cools down the computer",
      ],
      correct: 2,
    },
    {
      question: " Which of the following is a type of malware?",
      options: ["Antivirus", "Firewall", "Trojan", "VPN"],
      correct: 2,
    },
    {
      question: "What should you never do with suspicious emails?",
      options: [
        "Delete them",
        "Open attachments",
        "Mark them as spam",
        "Report them",
      ],
      correct: 1,
    },
    {
      question: "What is the primary purpose of a firewall?",
      options: [
        "To speed up the internet",
        "To protect networks by blocking unauthorized access",
        "To store passwords",
        "To design websites",
      ],
      correct: 1,
    },
    {
      question: "Which of the following is a strong password?",
      options: ["123456", "password", "P@ssw0rd2025!", "qwerty"],
      correct: 2,
    },
    {
      question: "What is phishing?",
      options: [
        "A way to catch fish",
        "Sending fake emails to steal personal information",
        "A type of firewall",
        "A programming language",
      ],
      correct: 1,
    },
    {
      question: "Which of the following is an example of malware?",
      options: ["Antivirus", "Trojan", "Firewall", "VPN"],
      correct: 1,
    },
    {
      question: "What should you do if you receive a suspicious email?",
      options: [
        "Open all attachments",
        "Click all links",
        "Delete it or mark it as spam",
        "Forward it to friends",
      ],
      correct: 2,
    },
  ],
  mobile: [
    {
      question:
        "Which JavaScript framework is commonly used for mobile app development?",
      options: ["React", "Vue", "Angular", "React Native"],
      correct: 3,
    },
    {
      question: "What is the core language used in React Native?",
      options: ["Python", "Java", "JavaScript", "C#"],
      correct: 2,
    },
    {
      question:
        "Which of the following is used to style components in React Native?",
      options: ["CSS files", "SCSS", "StyleSheet.create()", "Tailwind only"],
      correct: 2,
    },
    {
      question: "What command is used to start a React Native app on Android?",
      options: [
        "npm start",
        "npx react-native run-android",
        "yarn install",
        "expo upload",
      ],
      correct: 1,
    },
    {
      question:
        "Which platform allows easy development and testing of React Native apps without Android Studio or Xcode?",
      options: ["Node.js", "Expo", "MongoDB", "Firebase"],
      correct: 1,
    },
    {
      question: "Which language is primarily used to develop Android apps?",
      options: ["Swift", "Kotlin", "Ruby", "PHP"],
      correct: 1,
    },
    {
      question: "What does 'React Native' allow you to do?",
      options: [
        "Develop only web apps",
        "Develop native mobile apps using JavaScript",
        "Create desktop applications",
        "Design graphics",
      ],
      correct: 1,
    },
    {
      question:
        "Which file typically contains the app's configuration in an Android project?",
      options: ["package.json", "AndroidManifest.xml", "index.html", "App.js"],
      correct: 1,
    },
    {
      question:
        "What tool is commonly used to test mobile apps on virtual devices?",
      options: ["Emulator", "Compiler", "Debugger", "Profiler"],
      correct: 0,
    },
    {
      question:
        "Which platform uses Swift as its primary programming language for app development?",
      options: ["Android", "iOS", "Windows", "Linux"],
      correct: 1,
    },
  ],
  ai: [
    {
      question: "What does AI stand for?",
      options: [
        "Automated Interface",
        "Artificial Intelligence",
        "Automatic Integration",
        "Advanced Internet",
      ],
      correct: 1,
    },
    {
      question:
        "Which of the following is a common language used for AI programming?",
      options: ["HTML", "Python", "CSS", "SQL"],
      correct: 1,
    },
    {
      question: "Which of the following is an example of AI in daily life?",
      options: [
        "Electric fan",
        "Smartphone voice assistant",
        "Calculator",
        "Television remote",
      ],
      correct: 1,
    },
    {
      question:
        "Which subfield of AI is focused on enabling computers to learn from data?",
      options: [
        "Computer Graphics",
        "Machine Learning",
        "Web Development",
        "Cybersecurity",
      ],
      correct: 1,
    },
    {
      question: "Which company developed ChatGPT?",
      options: ["Google", "Amazon", "Microsoft", "OpenAI"],
      correct: 3,
    },
    {
      question: "What is Artificial Intelligence primarily concerned with?",
      options: [
        "Designing hardware",
        "Simulating human intelligence in machines",
        "Building websites",
        "Writing novels",
      ],
      correct: 1,
    },
    {
      question:
        "Which of the following is a popular programming language used in AI?",
      options: ["Python", "HTML", "CSS", "SQL"],
      correct: 0,
    },
    {
      question: "What does 'machine learning' allow computers to do?",
      options: [
        "Learn from data without being explicitly programmed",
        "Play video games",
        "Create graphics",
        "Send emails automatically",
      ],
      correct: 0,
    },
    {
      question: "Which AI assistant is developed by Apple?",
      options: ["Siri", "Alexa", "Cortana", "Google Assistant"],
      correct: 0,
    },
    {
      question: "What type of AI tries to mimic human decision-making?",
      options: ["Narrow AI", "General AI", "Supervised AI", "Unsupervised AI"],
      correct: 1,
    },
  ],
  data: [
    {
      question: "What is the main goal of data science?",
      options: [
        "Designing websites",
        "Creating mobile apps",
        "Extracting insights from data",
        "Writing novels",
      ],
      correct: 2,
    },
    {
      question: "Which of the following is commonly used for data analysis?",
      options: ["Photoshop", "Excel", "PowerPoint", "Notepad"],
      correct: 1,
    },
    {
      question: "Which programming language is widely used in data science?",
      options: ["Java", "Python", "C#", "HTML"],
      correct: 1,
    },
    {
      question: "What is a dataset?",
      options: [
        "A software tool",
        "A collection of web pages",
        "A group of related data",
        "A coding language",
      ],
      correct: 2,
    },
    {
      question: "Which library is used in Python for data manipulation?",
      options: ["NumPy", "Django", "Flask", "Pygame"],
      correct: 0,
    },
    {
      question:
        "Which of the following is NOT a step in the data science process?",
      options: [
        "Data Collection",
        "Data Cleaning",
        "Data Playing",
        "Data Visualization",
      ],
      correct: 2, // Data Playing
    },
    {
      question: "What does 'EDA' stand for in data science?",
      options: [
        "Exploratory Data Analysis",
        "Electronic Data Access",
        "Efficient Data Automation",
        "Encoded Data Algorithm",
      ],
      correct: 0,
    },
    {
      question:
        "Which type of chart is best for showing the relationship between two variables?",
      options: ["Pie Chart", "Line Chart", "Scatter Plot", "Bar Graph"],
      correct: 2,
    },
    {
      question: "What is 'overfitting' in machine learning?",
      options: [
        "When a model performs well on training data but poorly on new data",
        "When a model performs equally well on all data",
        "When a model is too simple",
        "When a model runs too fast",
      ],
      correct: 0,
    },
    {
      question: "Which file format is commonly used for storing tabular data?",
      options: ["JPEG", "CSV", "MP3", "HTML"],
      correct: 1,
    },
  ],
  devops: [
    {
      question: "What does DevOps stand for?",
      options: [
        "Development and Options",
        "Device Operations",
        "Development and Operations",
        "Design and Optimization",
      ],
      correct: 2,
    },
    {
      question:
        "Which of the following is a popular DevOps tool for automation?",
      options: ["Photoshop", "Jenkins", "WordPress", "Figma"],
      correct: 1,
    },
    {
      question: "Which tool is commonly used for containerization in DevOps?",
      options: ["Docker", "Git", "Jira", "Excel"],
      correct: 0,
    },
    {
      question: "What is the main goal of DevOps?",
      options: [
        "To slow down development",
        "To separate development and operations teams",
        "To automate and integrate software development and IT operations",
        "To only test software",
      ],
      correct: 2,
    },
    {
      question: "Which system is widely used for version control in DevOps?",
      options: ["Git", "Jenkins", "Docker", "Slack"],
      correct: 0,
    },
    {
      question:
        "What is the main purpose of Continuous Integration (CI) in DevOps?",
      options: [
        "Integrate code changes frequently to detect errors early",
        "Deploy applications manually",
        "Create graphics for apps",
        "Write documentation",
      ],
      correct: 0,
    },
    {
      question: "Which tool is used for version control in DevOps?",
      options: ["Docker", "Git", "Jenkins", "Kubernetes"],
      correct: 1,
    },
    {
      question: "What does 'Infrastructure as Code' (IaC) mean?",
      options: [
        "Writing code to build hardware",
        "Managing infrastructure through machine-readable configuration files",
        "Building software interfaces",
        "Writing code without testing",
      ],
      correct: 1,
    },
    {
      question: "Which tool is commonly used for container orchestration?",
      options: ["GitLab", "Kubernetes", "Jira", "Ansible"],
      correct: 1,
    },
    {
      question: "What does Continuous Deployment (CD) do?",
      options: [
        "Deploys code automatically after passing tests",
        "Writes code for developers",
        "Monitors user behavior",
        "Manages network security",
      ],
      correct: 0,
    },
  ],
  uiux: [
    {
      question: "What does UI stand for in UI/UX?",
      options: [
        "User Interface",
        "Universal Interaction",
        "User Intelligence",
        "User Integration",
      ],
      correct: 0,
    },
    {
      question: "What does UX stand for in UI/UX?",
      options: [
        "User Expression",
        "User Exploration",
        "User Experience",
        "Universal Experience",
      ],
      correct: 2,
    },
    {
      question: "Which of the following tools is commonly used for UI design?",
      options: ["Figma", "Excel", "Notepad", "VS Code"],
      correct: 0,
    },
    {
      question: "What is the main goal of UX design?",
      options: [
        "To decorate web pages",
        "To create beautiful color schemes",
        "To improve the user’s overall experience",
        "To increase code efficiency",
      ],
      correct: 2,
    },
    {
      question: "Which principle is important in both UI and UX design?",
      options: [
        "Data Encryption",
        "Responsiveness",
        "Debugging",
        "Version Control",
      ],
      correct: 1,
    },
    {
      question: "Which of the following best describes a 'prototype'?",
      options: [
        "A detailed code of the final app",
        "An early sample or model of a design",
        "A user manual",
        "A bug report",
      ],
      correct: 1,
    },
    {
      question: "Which principle ensures a design is easy to navigate?",
      options: ["Accessibility", "Complexity", "Inconsistency", "Ambiguity"],
      correct: 0,
    },
    {
      question: "What is 'responsive design'?",
      options: [
        "Design that adapts to different screen sizes",
        "Design that responds to user emails",
        "Design only for desktop screens",
        "Design for printing",
      ],
      correct: 0,
    },
    {
      question: "What is the primary focus of UX design?",
      options: [
        "Making a product visually appealing",
        "Enhancing the user’s overall experience with a product",
        "Coding the backend",
        "Managing servers",
      ],
      correct: 1,
    },
    {
    question: "Why is user feedback important in UX design?",
    options: [
      "To confuse designers",
      "To improve the usability and satisfaction of the product",
      "To increase bugs",
      "To delay the project"
    ],
    correct: 1,
    }
  ],
};
let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;
function startQuiz(domain) {
  currentQuiz = quizzes[domain];
  currentQuestionIndex = 0;
  score = 0;
  answered = false;
  document.getElementById("quizBox").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");
  document.querySelector("#quizBox h3").textContent = {
    dsa: "DSA",
    web: "Web Development",
    cloudcomputing: "Cloud Computing",
    cybersecurity: "Cybersecurity",
    mobile: "Mobile App Development",
    ai: "Artificial Intelligence",
    data: "Data Science",
    devops: "DevOps",
    uiux: "UI/UX Design",
  }[domain];

  showQuestion();
}

function showQuestion() {
  answered = false;
  const questionObj = currentQuiz[currentQuestionIndex];
  document.getElementById("question").textContent = questionObj.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  questionObj.options.forEach((opt, idx) => {
    const optionBtn = document.createElement("button");
    optionBtn.className =
      "block w-full text-left px-4 py-2 border rounded hover:bg-blue-100";
    optionBtn.textContent = opt;
    optionBtn.disabled = false;
    optionBtn.onclick = () => checkAnswer(idx);
    optionsDiv.appendChild(optionBtn);
  });
  document.getElementById("nextBtn").style.display = "none";
}

function checkAnswer(selectedIdx) {
  if (answered) return;
  answered = true;
  const questionObj = currentQuiz[currentQuestionIndex];
  if (selectedIdx === questionObj.correct) score++;
  disableOptions(questionObj.correct, selectedIdx);
  document.getElementById("nextBtn").style.display = "inline-block";
}

function disableOptions(correctIdx, selectedIdx) {
  const buttons = document.getElementById("options").children;
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    if (i === correctIdx) {
      buttons[i].classList.add("bg-green-100");
    } else if (i === selectedIdx) {
      buttons[i].classList.add("bg-red-100");
    }
  }
}

function nextQuestion() {
  //console.log("Next Question clicked");
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuiz.length) {
    showQuestion();
  } else {
    document.getElementById("quizBox").classList.add("hidden");
    const resultDiv = document.getElementById("result");
    const suggestion = getSuggestion(score, currentQuiz.length);
    resultDiv.innerHTML = `You scored ${score} out of ${currentQuiz.length}<br><span class="text-blue-700">${suggestion}</span>`;
    resultDiv.classList.remove("hidden");
  }
}
function getSuggestion(score, total) {
  const percent = (score / total) * 100;
  if (percent >= 80)
    return "Excellent! You have a strong grasp of this domain.";
  if (percent >= 50)
    return "Good effort! Consider reviewing some topics to improve.";
  return "Keep practicing! Try reviewing the materials and attempt the quiz again.";
}
