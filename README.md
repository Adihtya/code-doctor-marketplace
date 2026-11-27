<!-- ==================== HEADER ==================== -->

<div align="center">

  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:D97757,50:8B4513,100:0D1117&height=220&section=header&text=Code%20Doctor%20Marketplace&fontSize=65&fontColor=FFFFFF&animation=fadeIn&fontAlignY=38&desc=Code+Review+Plugins+for+Claude+Code&descAlignY=60&descSize=20" width="100%" />

  <br />

  <img src="https://img.shields.io/badge/STATUS-ACTIVE-2EA043?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Claude_Code-2.1.275+-D97757?style=flat-square&logo=anthropic&logoColor=white" />
  <img src="https://img.shields.io/badge/Plugins-1-D97757?style=flat-square" />
  <img src="https://img.shields.io/badge/License-Apache_2.0-2EA043?style=flat-square&logo=apache" />

  <br /><br />

  <strong>A curated marketplace of code quality and security plugins for Claude Code</strong>

  <br /><br />

  <a href="#-available-plugins">Available Plugins</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-usage">Usage</a> •
  <a href="#-for-developers">For Developers</a>

</div>

<hr />

<!-- ==================== OVERVIEW ==================== -->

<h2 id="-overview">🎯 Overview</h2>

<p>
  This marketplace hosts plugins that enhance your code review workflow in <strong>Claude Code</strong>.
  All plugins are designed to work seamlessly with the Claude Code CLI, providing automated analysis,
  interactive interfaces, and structured review processes directly in your development environment.
</p>

<blockquote>
  <strong>Philosophy:</strong> Code review should be consistent, fast, and accessible to every developer.
  Our plugins combine automated scanning with human judgment to catch issues before they reach production.
</blockquote>

<hr />

<!-- ==================== AVAILABLE PLUGINS ==================== -->

<h2 id="-available-plugins">📦 Available Plugins</h2>

<table>
  <thead>
    <tr>
      <th>Plugin</th>
      <th>Description</th>
      <th>Version</th>
      <th>Install Command</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>code-doctor</strong> 🩺</td>
      <td>
        <strong>Code review checklist panel with automated security, performance, and best practices scanning.</strong>
        Combines a 27-pattern automated scanner (secrets, injection, XSS, debug code) with a 32-item manual
        review checklist covering General Quality, Security, Performance, and Project-Specific rules.
      </td>
      <td>0.1.0</td>
      <td><code>claude plugin install code-doctor@code-doctor-marketplace</code></td>
    </tr>
  </tbody>
</table>

<details>
  <summary><strong>🔍 Code Doctor — Feature Details</strong></summary>

  <h4>Automated Scanner (27 Patterns)</h4>
  <ul>
    <li><strong>🔴 Critical:</strong> Hardcoded passwords, API keys, AWS credentials, private keys, SQL injection, <code>eval()</code>, <code>new Function()</code></li>
    <li><strong>🟡 Warning:</strong> Unsafe <code>innerHTML</code>, empty catch blocks, debugger statements, SQL concatenation, FIXME/HACK comments</li>
    <li><strong>🔵 Info:</strong> Console logs, print statements, TODO comments, potential performance concerns</li>
  </ul>

  <h4>Manual Review Checklist (32 Items)</h4>
  <table>
    <thead>
      <tr><th>Category</th><th>Checks</th><th>Focus Areas</th></tr>
    </thead>
    <tbody>
      <tr><td>✨ General</td><td align="center">8</td><td>Clean code, error handling, logging, comments, naming, testing, documentation, debug output</td></tr>
      <tr><td>🔒 Security</td><td align="center">8</td><td>Input validation, credentials, SQL injection, XSS, authentication, cryptography, permissions, rate limiting</td></tr>
      <tr><td>⚡ Performance</td><td align="center">8</td><td>N+1 queries, indexes, caching, memory leaks, bundle size, lazy loading, algorithms, pagination</td></tr>
      <tr><td>🏗️ Project-Specific</td><td align="center">8</td><td>Architecture, forbidden patterns, required files, naming conventions, dependencies, breaking changes, migrations, feature flags</td></tr>
    </tbody>
  </table>

  <h4>Languages Supported</h4>
  <p>JavaScript, TypeScript, Python, Go, Rust, Java, Kotlin, Swift, PHP, Ruby, C#, C++, SQL, Shell, YAML, JSON, TOML (15+ languages)</p>
</details>

<hr />

<!-- ==================== INSTALLATION ==================== -->

<h2 id="-installation">🚀 Installation</h2>

<h3>Prerequisites</h3>
<ul>
  <li>Claude Code version <strong>2.1.275</strong> or later</li>
  <li>Git installed on your system</li>
</ul>

<h3>Step 1: Add the Marketplace</h3>
<pre><code class="language-bash">claude plugin marketplace add Adihtya/code-doctor-marketplace</code></pre>

<h3>Step 2: Install a Plugin</h3>
<pre><code class="language-bash">claude plugin install code-doctor@code-doctor-marketplace</code></pre>

<h3>Step 3: Verify Installation</h3>
<pre><code class="language-bash">claude plugin list</code></pre>
<p>You should see <code>code-doctor@code-doctor-marketplace</code> with <strong>Status: ✔ enabled</strong>.</p>

<hr />

<!-- ==================== USAGE ==================== -->

<h2 id="-usage">🎮 Usage</h2>

<h3>Using Code Doctor</h3>

<ol>
  <li>Open Claude Code in your project directory</li>
  <li>Run the command:
    <pre><code>/code-doctor</code></pre>
  </li>
  <li>The Code Doctor pane opens with two sections:
    <ul>
      <li><strong>🔍 Automated Code Scanner</strong> — Click "Scan Repository" to analyze up to 500 files</li>
      <li><strong>📋 Manual Review Checklist</strong> — Work through 32 structured review items</li>
    </ul>
  </li>
  <li>Filter scan results by severity (Critical / Warning / Info)</li>
  <li>Click any issue to see file, line number, and code snippet</li>
  <li>Mark review complete when done</li>
</ol>

<h3>Available Commands</h3>
<table>
  <thead>
    <tr><th>Command</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>/code-doctor</code></td><td>Open the main Code Doctor interface</td></tr>
    <tr><td>Right-click → Open Code Doctor</td><td>Open via editor context menu</td></tr>
  </tbody>
</table>

<hr />

<!-- ==================== FOR DEVELOPERS ==================== -->

<h2 id="-for-developers">👨‍💻 For Developers</h2>

<h3>Marketplace Structure</h3>
<pre>
code-doctor-marketplace/
│
├── .claude-plugin/
│   └── marketplace.json     # Marketplace manifest
│
└── plugins/
    └── code-doctor/         # Code Doctor plugin
        ├── .claude-plugin/
        │   └── plugin.json  # Plugin manifest
        ├── hooks/
        │   ├── hooks.json
        │   └── register.tsx # Scanner, UI, commands
        ├── icon.png
        └── README.md
</pre>

<h3>Adding New Plugins</h3>
<ol>
  <li>Place your plugin in <code>plugins/<plugin-name>/</code></li>
  <li>Add an entry to <code>.claude-plugin/marketplace.json</code>:
    <pre><code class="language-json">{
  "name": "my-new-plugin",
  "source": "./plugins/my-new-plugin",
  "description": "Description of what it does"
}</code></pre>
  </li>
  <li>Validate: <code>claude plugin validate .</code></li>
  <li>Commit and push — users get updates automatically</li>
</ol>

<h3>Plugin Development Resources</h3>
<ul>
  <li><a href="https://github.com/anthropics/claude-code/tree/main/packages/plugin-authoring">Claude Code Plugin Authoring Guide</a></li>
  <li><a href="https://github.com/anthropics/claude-code">Claude Code Repository</a></li>
</ul>

<hr />

<!-- ==================== UPDATES ==================== -->

<h2>🔄 Updates</h2>

<p>
  When you push changes to this repository, users who have added the marketplace
  will receive plugin updates automatically on their next session start or by running:
</p>

<pre><code class="language-bash">/reload-plugins</code></pre>

<hr />

<!-- ==================== SUPPORT ==================== -->

<h2>💬 Support & Feedback</h2>

<table>
  <tr>
    <td align="center" width="33%">
      <a href="https://github.com/Adihtya/code-doctor-marketplace/issues/new?template=bug_report.md">
        <img src="https://img.shields.io/badge/Report_Bug-FF4444?style=for-the-badge&logo=github&logoColor=white" />
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://github.com/Adihtya/code-doctor-marketplace/issues/new?template=feature_request.md">
        <img src="https://img.shields.io/badge/Request_Feature-3178C6?style=for-the-badge&logo=github&logoColor=white" />
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://github.com/Adihtya/code-doctor-marketplace/discussions">
        <img src="https://img.shields.io/badge/Start_Discussion-8B5CF6?style=for-the-badge&logo=github&logoColor=white" />
      </a>
    </td>
  </tr>
</table>

<hr />

<!-- ==================== AUTHOR ==================== -->

<h2>👨‍💻 Author</h2>

<div align="center">

  <img src="https://github.com/Adihtya.png" width="110" alt="Aditya Chaudhari" />

  <h2>Aditya Santosh Chaudhari</h2>

  <p>
    <strong>Computer Science & AI Student | Open Source Contributor | Developer</strong>
  </p>

  <p>Building technology that makes software development smarter, safer and more accessible.</p>

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

<!-- ==================== LICENSE ==================== -->

<h2>📜 License</h2>

<div align="center">

  <img src="https://img.shields.io/badge/Apache_License-2.0-D22128?style=for-the-badge&logo=apache&logoColor=white" />

</div>

<p>
  This marketplace and its plugins are licensed under the
  <strong>Apache License, Version 2.0</strong>.
  See individual plugin directories for their specific licenses.
</p>

<hr />

<!-- ==================== ACKNOWLEDGMENTS ==================== -->

<h2>🙏 Acknowledgments</h2>

<ul>
  <li><strong>Anthropic & Claude Code</strong> — for the developer tooling ecosystem and plugin architecture</li>
  <li><strong>Security Researchers</strong> — for advancing secure software development practices</li>
  <li><strong>Open Source Community</strong> — for continuous innovation and collaboration</li>
</ul>

<hr />

<!-- ==================== FOOTER ==================== -->

<div align="center">

  <h3>Better Code Reviews. Better Software. Better Tomorrow.</h3>

  <p>
    <sub>Designed and developed by Aditya Chaudhari.</sub>
  </p>

  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:D97757,50:8B4513,100:0D1117&height=120&section=footer" width="100%" />

</div>