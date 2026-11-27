<!-- ==================== HEADER ==================== -->

<div align="center">

  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:D97757,50:8B4513,100:0D1117&height=220&section=header&text=Code%20Doctor&fontSize=65&fontColor=FFFFFF&animation=fadeIn&fontAlignY=38&desc=Diagnose.%20Review.%20Improve.&descAlignY=60&descSize=20" width="100%" />

 <img src="./assets/Stethoscope%20Code%20Logo.png" width="150" alt="Code Doctor Logo" />

  <h1>🩺 Code Doctor</h1>

  <p>
    <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=19&pause=1000&color=D97757&center=true&vCenter=true&width=650&lines=Your+Code.+Under+Examination.;Detect+Issues+Before+Production.;Automated+Analysis.+Human+Intelligence.;Built+for+Claude+Code." alt="Typing SVG" />
  </p>

  <p>
    <strong>A hybrid code review assistant for Claude Code.</strong>
    <br />
    Combining automated static analysis with structured manual review
    <br />
    to help developers write cleaner, safer and more maintainable software.
  </p>

  <br />

  <img src="https://img.shields.io/badge/VERSION-1.0.0-D97757?style=for-the-badge" />
  <img src="https://img.shields.io/badge/LICENSE-Apache_2.0-2EA043?style=for-the-badge&logo=apache" />
  <img src="https://img.shields.io/badge/STATUS-ACTIVE-2EA043?style=for-the-badge" />

  <br />

  <img src="https://img.shields.io/badge/Claude_Code-2.1.275+-D97757?style=flat-square&logo=anthropic&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Open_Source-3DA639?style=flat-square&logo=opensourceinitiative&logoColor=white" />

<br /><br />

<a href="#-overview">Overview</a> •
<a href="#-features">Features</a> •
<a href="#-installation">Installation</a> •
<a href="#-usage">Usage</a> •
<a href="#-architecture">Architecture</a> •
<a href="#-contributing">Contributing</a>

</div>

<hr />

<!-- ==================== STATISTICS ==================== -->

<div align="center">

  <h2>Code Quality. By the Numbers.</h2>

  <table>
    <tr>
      <td align="center" width="25%">
        <h1>27</h1>
        <strong>Detection Patterns</strong>
      </td>
      <td align="center" width="25%">
        <h1>32</h1>
        <strong>Review Checks</strong>
      </td>
      <td align="center" width="25%">
        <h1>500</h1>
        <strong>Files Per Scan</strong>
      </td>
      <td align="center" width="25%">
        <h1>15+</h1>
        <strong>Languages</strong>
      </td>
    </tr>
  </table>

</div>

<hr />

<!-- ==================== OVERVIEW ==================== -->

<h2 id="-overview">🎯 Overview</h2>

<p>
  Code review is one of the most important stages of software
  development, yet it remains inconsistent, time-consuming
  and vulnerable to human oversight.
</p>

<p>
  <strong>Code Doctor</strong> is a developer-focused plugin
  designed to improve the code review process directly
  inside Claude Code.
</p>

<p>
  Instead of relying entirely on automated scanners or manual
  inspection, Code Doctor combines both approaches into a
  unified review workflow.
</p>

<table>
  <tr>
    <th>Automated Analysis</th>
    <th>Structured Human Review</th>
  </tr>
  <tr>
    <td>
      Detects suspicious code patterns, exposed credentials,
      injection risks, debugging statements and common
      programming anti-patterns.
    </td>
    <td>
      Evaluates architecture, business logic, documentation,
      performance and project-specific conventions.
    </td>
  </tr>
  <tr>
    <td>Fast, consistent and repeatable.</td>
    <td>Context-aware and judgment-driven.</td>
  </tr>
</table>

<blockquote>
  <strong>Our philosophy:</strong>
  Automation should handle repetitive checks, allowing
  developers to focus on decisions that require human judgment.
</blockquote>

<hr />

<!-- ==================== FEATURES ==================== -->

<h2 id="-features">✨ Features</h2>

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>🔍 Automated Code Scanner</h3>
      <p>
        Detect potentially unsafe and problematic code
        using 27 pattern-based detection rules.
      </p>
    </td>
    <td width="50%" valign="top">
      <h3>📋 Structured Review Checklist</h3>
      <p>
        Follow 32 review checks covering general quality,
        security, performance and project conventions.
      </p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <h3>🛡️ Security Detection</h3>
      <p>
        Identify potential credential leaks, injection
        vulnerabilities and unsafe code execution patterns.
      </p>
    </td>
    <td valign="top">
      <h3>⚡ Performance Review</h3>
      <p>
        Identify common performance concerns and review
        caching, database queries and resource usage.
      </p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <h3>🎨 Interactive Interface</h3>
      <p>
        Access scan results through a dedicated pane
        with severity filters and code snippets.
      </p>
    </td>
    <td valign="top">
      <h3>💾 Persistent State</h3>
      <p>
        Preserve scan results across sessions using
        the plugin's state management system.
      </p>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <h3>📂 Repository Scanning</h3>
      <p>
        Scan up to 500 files while excluding common
        dependency and build directories.
      </p>
    </td>
    <td valign="top">
      <h3>🧩 Extensible Rules</h3>
      <p>
        Customize detection patterns, review checklists
        and repository scanning limits.
      </p>
    </td>
  </tr>
</table>

<hr />

<!-- ==================== SCANNER ==================== -->

<h2>🔬 Detection Engine</h2>

<p>
  The scanner classifies findings into three severity levels
  to help developers prioritize their review.
</p>

<table>
  <tr>
    <th>Severity</th>
    <th>Category</th>
    <th>Detection Examples</th>
  </tr>
  <tr>
    <td>
      <img src="https://img.shields.io/badge/CRITICAL-FF4444?style=flat-square" />
    </td>
    <td>Security & Code Execution</td>
    <td>
      Hardcoded passwords, API keys, AWS credentials,
      private keys, SQL injection patterns,
      <code>eval()</code> and <code>new Function()</code>.
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://img.shields.io/badge/WARNING-F5A623?style=flat-square" />
    </td>
    <td>Security & Reliability</td>
    <td>
      Unsafe innerHTML, empty catch blocks,
      debugger statements, SQL concatenation,
      FIXME and HACK comments.
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://img.shields.io/badge/INFO-3B82F6?style=flat-square" />
    </td>
    <td>Code Quality & Maintenance</td>
    <td>
      Console logs, print statements, TODO comments
      and potential performance concerns.
    </td>
  </tr>
</table>

<hr />

<!-- ==================== CHECKLIST ==================== -->

<h2>📋 Manual Review Checklist</h2>

<p>
  A comprehensive 32-item checklist organized into four
  essential software quality categories.
</p>

<table>
  <tr>
    <th>Category</th>
    <th>Checks</th>
    <th>Review Areas</th>
  </tr>
  <tr>
    <td>✨ General</td>
    <td align="center">8</td>
    <td>
      Clean code, error handling, logging, comments,
      naming, testing, documentation and debug output.
    </td>
  </tr>
  <tr>
    <td>🔒 Security</td>
    <td align="center">8</td>
    <td>
      Input validation, credentials, SQL injection,
      XSS, authentication, cryptography,
      permissions and rate limiting.
    </td>
  </tr>
  <tr>
    <td>⚡ Performance</td>
    <td align="center">8</td>
    <td>
      N+1 queries, indexes, caching, memory leaks,
      bundle size, lazy loading, algorithms and pagination.
    </td>
  </tr>
  <tr>
    <td>🏗️ Project-Specific</td>
    <td align="center">8</td>
    <td>
      Architecture, forbidden patterns, required files,
      naming conventions, dependencies, breaking changes,
      migrations and feature flags.
    </td>
  </tr>
</table>

<hr />

<!-- ==================== TECH STACK ==================== -->

<h2>🛠️ Technology Stack</h2>

<div align="center">

  <img src="https://skillicons.dev/icons?i=ts,react,git,github&theme=dark" alt="Technology Stack" />

<br /><br />

  <img src="https://img.shields.io/badge/Claude_Code-Plugin_Architecture-D97757?style=for-the-badge&logo=anthropic&logoColor=white" />

</div>

<table>
  <tr>
    <th>Technology</th>
    <th>Purpose</th>
  </tr>
  <tr>
    <td>TypeScript</td>
    <td>Core plugin logic and scanner implementation.</td>
  </tr>
  <tr>
    <td>TSX / React</td>
    <td>Interactive plugin interface.</td>
  </tr>
  <tr>
    <td>Regular Expressions</td>
    <td>Pattern-based static code analysis.</td>
  </tr>
  <tr>
    <td>Claude Code Plugin APIs</td>
    <td>Commands, interface rendering, storage and file access.</td>
  </tr>
  <tr>
    <td>Git & GitHub</td>
    <td>Version control and open-source collaboration.</td>
  </tr>
</table>

<hr />

<!-- ==================== INSTALLATION ==================== -->

<h2 id="-installation">🚀 Installation</h2>

<h3>Prerequisites</h3>

<ul>
  <li>Claude Code version 2.1.275 or later.</li>
  <li>Git installed on your system.</li>
  <li>Access to a local development repository.</li>
</ul>

<h3>Option 1 — Marketplace (Recommended)</h3>

<p>Install directly from the Code Doctor Marketplace in one command:</p>

<pre><code># First, add the marketplace (one-time setup)
claude plugin marketplace add Adihtya/code-doctor-marketplace

# Then install the plugin
claude plugin install code-doctor@code-doctor-marketplace</code></pre>

<p>This automatically downloads, validates, and enables the plugin.</p>

<p><strong>Note:</strong> The marketplace is hosted at <a href="https://github.com/Adihtya/code-doctor-marketplace">github.com/Adihtya/code-doctor-marketplace</a>.</p>

<h3>Option 2 — Manual Clone & Load</h3>

<h4>01 — Clone the Repository</h4>

<pre><code>git clone https://github.com/adihtya/claude-doctor.git ~/.claude/dev-mods/code-doctor</code></pre>

<h4>02 — Load the Plugin</h4>

<pre><code>claude --plugin-dir ~/.claude/dev-mods/code-doctor</code></pre>

<h4>03 — Validate Installation</h4>

<pre><code>claude plugin validate ~/.claude/dev-mods/code-doctor</code></pre>

<h4>04 — Launch Code Doctor</h4>

<pre><code>/code-doctor</code></pre>

<h3>Installation Verification</h3>

<ul>
  <li>Code Doctor pane opens successfully.</li>
  <li>Status line displays Code Doctor ready.</li>
  <li>Context menu includes Open Code Doctor.</li>
  <li>Scan Repository button initiates a scan.</li>
</ul>

<hr />

<!-- ==================== USAGE ==================== -->

<h2 id="-usage">🎮 Usage</h2>

<h3>Automated Repository Scan</h3>

<ol>
  <li>Open Claude Code in your project directory.</li>
  <li>Execute <code>/code-doctor</code>.</li>
  <li>Select <strong>Scan Repository</strong>.</li>
  <li>Wait for the scanning process to complete.</li>
  <li>Filter results by severity.</li>
  <li>Inspect the file path, line number and code snippet.</li>
  <li>Resolve confirmed issues and scan again.</li>
</ol>

<h3>Manual Code Review</h3>

<ol>
  <li>Navigate to the manual review checklist.</li>
  <li>Review all four categories.</li>
  <li>Verify each applicable item against your codebase.</li>
  <li>Resolve identified concerns.</li>
  <li>Select <strong>Mark Review Complete</strong>.</li>
</ol>

<h3>Available Commands</h3>

<table>
  <tr>
    <th>Command / Action</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>/code-doctor</code></td>
    <td>Open the main Code Doctor interface.</td>
  </tr>
  <tr>
    <td><code>/code-doctor-scan-internal</code></td>
    <td>Internal repository scanning command.</td>
  </tr>
  <tr>
    <td>Right-click → Open Code Doctor</td>
    <td>Open the plugin through the context menu.</td>
  </tr>
</table>

<hr />

<!-- ==================== ARCHITECTURE ==================== -->

<h2 id="-architecture">🏗️ Architecture</h2>

<p>
  Code Doctor follows a modular architecture that separates
  user interaction, state management, scanning logic
  and filesystem operations.
</p>

<pre>
┌─────────────────────────────────────────────┐
│              CLAUDE CODE                    │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────┐
│             CODE DOCTOR PLUGIN              │
│                                             │
│   Commands • Pane • Context Menu            │
│   Status Line • Severity Filters            │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────┐
│              STATE MANAGEMENT               │
│                                             │
│   Scan Results • Scan Status • Filters      │
│                 $.store                     │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────┐
│               SCANNER ENGINE                │
│                                             │
│   27 Detection Patterns                     │
│   Security • Reliability • Code Quality     │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────┐
│              FILESYSTEM LAYER               │
│                                             │
│   $.fs.glob() • $.fs.read()                  │
│   File Filtering • 500 File Limit            │
└─────────────────────────────────────────────┘
</pre>

<h3>Core Components</h3>

<table>
  <tr>
    <th>Component</th>
    <th>Responsibility</th>
  </tr>
  <tr>
    <td><code>$.ui</code></td>
    <td>Plugin interface and visual components.</td>
  </tr>
  <tr>
    <td><code>$.command</code></td>
    <td>Command registration and execution.</td>
  </tr>
  <tr>
    <td><code>$.store</code></td>
    <td>Persistent scan results and application state.</td>
  </tr>
  <tr>
    <td><code>$.fs</code></td>
    <td>Repository discovery and file reading.</td>
  </tr>
  <tr>
    <td><code>scanFile()</code></td>
    <td>Pattern matching and issue classification.</td>
  </tr>
</table>

<hr />

<!-- ==================== PROJECT STRUCTURE ==================== -->

<h2>📁 Project Structure</h2>

<pre>
Claude-Doctor/
│
├── .claude-plugin/
│   └── plugin.json          # Plugin manifest
│
├── hooks/
│   ├── hooks.json           # Module registration
│   └── register.tsx         # Scanner, commands and UI
│
├── icon.png                 # Plugin icon
├── LICENSE                  # Apache License 2.0
└── README.md                # Documentation
</pre>

<hr />

<!-- ==================== CONFIGURATION ==================== -->

<h2>⚙️ Configuration</h2>

<h3>Custom Detection Rules</h3>

<p>
  Modify the <code>patterns</code> array inside the
  <code>scanFile()</code> function in
  <code>hooks/register.tsx</code>.
</p>

<pre><code>const patterns = [
  {
    regex: /your-custom-pattern/gi,
    type: 'custom-issue',
    severity: 'warning',
    message: 'Your custom detection message'
  },

  // Existing detection patterns
];</code></pre>

<h3>Adjust Repository Scan Limits</h3>

<pre><code>// Default maximum number of files
.slice(0, 500)</code></pre>

<h3>Excluded Directories</h3>

<pre><code>.filter(f =>
  !f.includes('node_modules') &amp;&amp;
  !f.includes('.git') &amp;&amp;
  !f.includes('dist') &amp;&amp;
  !f.includes('build')
)</code></pre>

<p>
  Additional directories can be excluded by extending
  the existing file filtering conditions.
</p>

<hr />

<!-- ==================== LIMITATIONS ==================== -->

<h2>⚠️ Limitations</h2>

<ul>
  <li>
    Pattern-based detection may produce false positives
    or miss context-dependent vulnerabilities.
  </li>
  <li>
    The scanner does not fully understand business logic
    or application execution flow.
  </li>
  <li>
    Repository scans are limited to 500 files by default.
  </li>
  <li>
    Manual review remains necessary for comprehensive
    security and architectural assessment.
  </li>
</ul>

<blockquote>
  Code Doctor is a code review assistance tool,
  not a replacement for professional security audits,
  comprehensive testing or human judgment.
</blockquote>

<hr />

<!-- ==================== CONTRIBUTING ==================== -->

<h2 id="-contributing">🤝 Contributing</h2>

<p>
  Open-source contributions are welcome. Whether you are
  fixing a bug, improving documentation or implementing
  a new detection rule, your contribution matters.
</p>

<h3>Contribution Workflow</h3>

<ol>
  <li>Fork this repository.</li>
  <li>Create a feature branch.</li>
  <li>Implement and test your changes.</li>
  <li>Commit with a descriptive message.</li>
  <li>Push your branch.</li>
  <li>Open a pull request.</li>
</ol>

<pre><code>git checkout -b feature/improve-scanner

git add .

git commit -m "feat: improve scanner detection"

git push origin feature/improve-scanner</code></pre>

<h3>Areas for Contribution</h3>

<table>
  <tr>
    <th>Area</th>
    <th>Contribution</th>
  </tr>
  <tr>
    <td>🔍 Detection Engine</td>
    <td>Add or improve code analysis patterns.</td>
  </tr>
  <tr>
    <td>🛡️ Security</td>
    <td>Improve vulnerability detection accuracy.</td>
  </tr>
  <tr>
    <td>🎨 UI/UX</td>
    <td>Improve accessibility and developer experience.</td>
  </tr>
  <tr>
    <td>🧪 Testing</td>
    <td>Add test cases and reduce false positives.</td>
  </tr>
  <tr>
    <td>📚 Documentation</td>
    <td>Improve guides, examples and documentation.</td>
  </tr>
</table>

<div align="center">

  <a href="https://github.com/adityachaudhari/Claude-Doctor/issues">
    <img src="https://img.shields.io/badge/REPORT_A_BUG-FF4444?style=for-the-badge&logo=github&logoColor=white" />
  </a>

  <a href="https://github.com/adityachaudhari/Claude-Doctor/issues/new">
    <img src="https://img.shields.io/badge/REQUEST_A_FEATURE-3178C6?style=for-the-badge&logo=github&logoColor=white" />
  </a>

</div>

<hr />

<!-- ==================== LICENSE ==================== -->

<h2>📜 License</h2>

<div align="center">

  <img src="https://img.shields.io/badge/Apache_License-2.0-D22128?style=for-the-badge&logo=apache&logoColor=white" />

</div>

<p>
  This project is licensed under the
  <strong>Apache License, Version 2.0</strong>.
</p>

<p>
  You may use, reproduce, modify and distribute this software
  subject to the terms and conditions of the license.
</p>

<p>
  See the <a href="./LICENSE">LICENSE</a> file for the
  complete license text.
</p>

<hr />

<!-- ==================== AUTHOR ==================== -->

<h2>👨‍💻 Author</h2>

<div align="center">

  <img src="https://github.com/Adihtya.png" width="110" alt="Aditya Chaudhari" />

  <h2>Aditya Santosh Chaudhari</h2>

  <p>
    <strong>
      Computer Science & AI Student |
      Open Source Contributor |
      Developer
    </strong>
  </p>

  <p>
    Building technology that makes software development
    smarter, safer and more accessible.
  </p>

  <a href="https://github.com/Adihtya">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
  </a>

  <a href="https://www.linkedin.com/in/adihtya/">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>

  <a href="https://adihtya.github.io/Portfolio_Adihtya/">
    <img src="https://img.shields.io/badge/Portfolio-D97757?style=for-the-badge&logo=googlechrome&logoColor=white" />
  </a>

</div>

<hr />

<!-- ==================== ACKNOWLEDGMENTS ==================== -->

<h2>🙏 Acknowledgments</h2>

<ul>
  <li>
    <strong>Anthropic & Claude Code</strong> —
    for the developer tooling ecosystem.
  </li>
  <li>
    <strong>Security Researchers</strong> —
    for advancing secure software development practices.
  </li>
  <li>
    <strong>Open Source Community</strong> —
    for continuous innovation and collaboration.
  </li>
</ul>

<hr />

<!-- ==================== SUPPORT ==================== -->

<div align="center">

  <h2>⭐ Support the Project</h2>

  <p>
    If Code Doctor helps improve your development workflow,
    consider giving the repository a star.
  </p>

  <a href="https://github.com/adityachaudhari/Claude-Doctor">
    <img src="https://img.shields.io/badge/STAR_THIS_REPOSITORY-FFD700?style=for-the-badge&logo=github&logoColor=black" />
  </a>

<br /><br />

  <img src="https://komarev.com/ghpvc/?username=Adihtya-Claude-Doctor&label=README%20VIEWS&color=D97757&style=flat-square" />

<br /><br />

  <h3>Better Code. Better Software. Better Tomorrow.</h3>

  <p>
    <sub>
      Designed and developed by Aditya Chaudhari.
      <br />
      Built for developers who take code quality seriously.
    </sub>
  </p>

  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:D97757,50:8B4513,100:0D1117&height=120&section=footer" width="100%" />

</div>
