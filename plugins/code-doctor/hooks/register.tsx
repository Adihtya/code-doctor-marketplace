import { Register } from 'claude-code'

interface Issue {
  file: string
  line: number
  column: number
  type: string
  severity: 'critical' | 'warning' | 'info'
  message: string
  snippet: string
}

interface ScanState {
  issues: Issue[]
  scanning: boolean
  lastScan: number
  filesScanned: number
}

export const register: Register = (on, options) => {
  // Checklist categories
  const categories = [
    {
      id: 'general',
      title: 'General Best Practices',
      icon: '✨',
      items: [
        { id: 'clean-code', label: 'Code is clean, readable, and follows style guide' },
        { id: 'error-handling', label: 'Errors are handled properly (no empty catch blocks)' },
        { id: 'logging', label: 'Appropriate logging (not too verbose, not silent failures)' },
        { id: 'comments', label: 'Complex logic has explanatory comments' },
        { id: 'naming', label: 'Variables, functions, types have clear names' },
        { id: 'tests', label: 'Tests cover new/changed functionality' },
        { id: 'docs', label: 'Documentation updated for API changes' },
        { id: 'no-console', label: 'No console.log/print statements left in code' },
      ]
    },
    {
      id: 'security',
      title: 'Security Review',
      icon: '🔒',
      items: [
        { id: 'input-validation', label: 'All inputs validated and sanitized' },
        { id: 'no-secrets', label: 'No hardcoded secrets, API keys, or passwords' },
        { id: 'sql-injection', label: 'Parameterized queries used (no string concatenation)' },
        { id: 'xss-prevention', label: 'Output properly escaped for context (HTML, JS, SQL)' },
        { id: 'auth-checks', label: 'Authentication/authorization verified on all endpoints' },
        { id: 'crypto', label: 'Crypto uses standard libraries, not custom implementations' },
        { id: 'permissions', label: 'Principle of least privilege enforced' },
        { id: 'rate-limiting', label: 'Rate limiting on public endpoints' },
      ]
    },
    {
      id: 'performance',
      title: 'Performance',
      icon: '⚡',
      items: [
        { id: 'n-plus-one', label: 'No N+1 query problems' },
        { id: 'indexes', label: 'Database indexes exist for query patterns' },
        { id: 'caching', label: 'Appropriate caching strategy implemented' },
        { id: 'memory-leaks', label: 'No memory leaks (listeners, subscriptions cleaned up)' },
        { id: 'bundle-size', label: 'Bundle size impact considered' },
        { id: 'lazy-loading', label: 'Heavy components lazy-loaded' },
        { id: 'algorithms', label: 'Efficient algorithms/data structures used' },
        { id: 'pagination', label: 'Large datasets paginated/streamed' },
      ]
    },
    {
      id: 'project-specific',
      title: 'Project-Specific Rules',
      icon: '📋',
      items: [
        { id: 'architecture', label: 'Follows project architecture (layers, boundaries)' },
        { id: 'forbidden-patterns', label: 'No forbidden patterns (e.g., direct DB access in UI)' },
        { id: 'required-files', label: 'Required files present (tests, types, configs)' },
        { id: 'naming-conventions', label: 'Follows project naming conventions' },
        { id: 'dependency-review', label: 'New dependencies justified and reviewed' },
        { id: 'breaking-changes', label: 'Breaking changes documented and versioned' },
        { id: 'migrations', label: 'DB migrations included and reversible' },
        { id: 'feature-flags', label: 'New features behind flags if needed' },
      ]
    }
  ]

  // Open the code-doctor pane
  on('command.run', { command: 'code-doctor' }, async ($, e, next) => {
    await $.ui.open({ id: 'code-doctor', title: 'Code Doctor 🩺' })
    return next(e)
  })

  // Main pane render - scanner and checklist
  on('ui.render', { component: 'Pane', requestId: 'code-doctor' }, async ($, e) => {
    const { Box, Text, Button, Select } = $.ui.resolve(e)

    // Get scan state from $.store
    const scanState = await $.store.get('code-doctor-scan') as ScanState | undefined || {
      issues: [],
      scanning: false,
      lastScan: 0,
      filesScanned: 0,
    }
    const severity = await $.store.get('code-doctor-severity') as 'all' | 'critical' | 'warning' | 'info' || 'all'

    // Filter issues by selected severity
    const filteredIssues = severity === 'all' 
      ? scanState.issues 
      : scanState.issues.filter(i => i.severity === severity)

    // Severity counts
    const counts = {
      critical: scanState.issues.filter(i => i.severity === 'critical').length,
      warning: scanState.issues.filter(i => i.severity === 'warning').length,
      info: scanState.issues.filter(i => i.severity === 'info').length,
    }

    const renderCategory = (cat: typeof categories[0]) => (
      <Box key={cat.id} gap={1} padding={2}>
        <Text weight="bold" size="body">{cat.icon} {cat.title}</Text>
        <Box gap={1} padding={2}>
          {cat.items.map(item => (
            <Box key={item.id} gap={1}>
              <Text size="body">☐ {item.label}</Text>
            </Box>
          ))}
        </Box>
      </Box>
    )

    const renderIssue = (issue: Issue) => {
      const severityColor = issue.severity === 'critical' ? 'red' : issue.severity === 'warning' ? 'yellow' : 'blue'
      return (
        <Box key={`${issue.file}:${issue.line}`} gap={1} padding={1} borderStyle="single" borderColor={severityColor}>
          <Box gap={1}>
            <Text weight="bold" color={severityColor} size="caption">
              {issue.severity.toUpperCase()}
            </Text>
            <Text size="caption" color="muted">{issue.file}:{issue.line}:{issue.column}</Text>
            <Text size="caption" color="muted">{issue.type}</Text>
          </Box>
          <Text size="body">{issue.message}</Text>
          <Text size="caption" color="muted">
            {issue.snippet}
          </Text>
        </Box>
      )
    }

    const handleScan = async () => {
      await $.command.run({ command: 'code-doctor-scan-internal' })
    }

    const handleSeverityChange = async (value: string, _e: any) => {
      const v = value as 'all' | 'critical' | 'warning' | 'info'
      await $.store.set('code-doctor-severity', v)
      await $.command.run({ command: 'code-doctor' })
    }

    return (
      <Box gap={2} padding={3}>
        {/* Header */}
        <Box gap={1}>
          <Text weight="bold" size="heading" color="primary">Code Doctor 🩺</Text>
        </Box>

        {/* Scanner Section */}
        <Box gap={1} padding={2} borderStyle="single" borderColor="primary">
          <Text weight="bold" size="body">🔍 Automated Code Scanner</Text>
          
          <Box gap={2}>
            <Button 
              variant={scanState.scanning ? 'secondary' : 'primary'} 
              onPress={handleScan}
            >
              {scanState.scanning ? '⏳ Scanning...' : '🔍 Scan Repository'}
            </Button>
            
            <Select
              key="severity-select"
              value={severity}
              onSelect={handleSeverityChange}
              options={[
                { value: 'all', label: 'All' },
                { value: 'critical', label: `🔴 Critical (${counts.critical})` },
                { value: 'warning', label: `🟡 Warning (${counts.warning})` },
                { value: 'info', label: `🔵 Info (${counts.info})` },
              ]}
            />
            
            {scanState.lastScan > 0 && (
              <Text size="caption" color="muted">
                Last scan: {formatTime(scanState.lastScan)} • {scanState.filesScanned} files • {scanState.issues.length} issues
              </Text>
            )}
          </Box>

          {/* Issues List */}
          {scanState.issues.length > 0 && (
            <Box gap={1} paddingTop={1}>
              <Text weight="bold" size="body">Found {filteredIssues.length} issue(s):</Text>
              <Box gap={1}>
                {filteredIssues.slice(0, 50).map(renderIssue)}
                {filteredIssues.length > 50 && (
                  <Text size="caption" color="muted">... and {filteredIssues.length - 50} more</Text>
                )}
              </Box>
            </Box>
          )}
          
          {scanState.issues.length === 0 && !scanState.scanning && scanState.lastScan > 0 && (
            <Text color="green" weight="bold">✅ No issues found!</Text>
          )}
        </Box>

        {/* Manual Checklist */}
        <Box gap={1} padding={2} borderStyle="single" borderColor="muted">
          <Text weight="bold" size="body">📋 Manual Review Checklist</Text>
          {categories.map(renderCategory)}
        </Box>

        <Box gap={2} padding={2}>
          <Button variant="primary" onPress={() => $.ui.toast('Review complete! 🎉')}>
            Mark Review Complete
          </Button>
        </Box>
      </Box>
    )
  })

  // Internal scan command (runs the actual scan)
  on('command.run', { command: 'code-doctor-scan-internal' }, async ($, e, next) => {
    const startTime = Date.now()
    
    try {
      // Find code files
      const extensions = [
        'js', 'jsx', 'ts', 'tsx',
        'py', 'go', 'rs', 'java', 'kt', 'swift',
        'php', 'rb', 'cs', 'cpp', 'c', 'h', 'hpp',
        'json', 'yaml', 'yml', 'toml',
        'sql', 'sh', 'bash', 'zsh',
      ]

      let allFiles: string[] = []
      for (const ext of extensions) {
        try {
          const entries = await $.fs.list(`**/*.${ext}`)
          const files = entries.map((entry: any) => entry.path)
          allFiles.push(...files)
        } catch {}
      }
      
      // Deduplicate
      allFiles = [...new Set(allFiles)]
        .filter(f => !f.includes('node_modules') && !f.includes('.git') && !f.includes('dist') && !f.includes('build'))
        .slice(0, 500)
      
      const allIssues: any[] = []
      
      // Scan each file
      for (const file of allFiles) {
        try {
          const content = await $.fs.read(file)
          const issues = scanFile(file, content)
          allIssues.push(...issues)
        } catch {}
      }
      
      const duration = Date.now() - startTime
      
      await $.store.set('code-doctor-scan', {
        issues: allIssues,
        scanning: false,
        lastScan: Date.now(),
        filesScanned: allFiles.length,
      })
      
      $.ui.toast(`Scan complete: ${allIssues.length} issues in ${allFiles.length} files (${duration}ms)`)
      
    } catch (error) {
      await $.store.set('code-doctor-scan', (s: ScanState | undefined) => ({ ...(s || { issues: [], scanning: false, lastScan: 0, filesScanned: 0 }), scanning: false }))
      $.ui.toast(`Scan failed: ${error}`)
    }
    
    return next(e)
  })

  // Context menu
  on('ui.render', { component: 'ContextMenu' }, ($, e, next) => {
    const { Button } = $.ui.resolve(e)
    return (
      <Button onPress={async () => { await $.command.run({ command: 'code-doctor' }) }}>
        🩺 Open Code Doctor
      </Button>
    )
  })

  // Status line
  on('session.start', ($, e, next) => {
    $.ui.status('🩺 Code Doctor ready - run /code-doctor')
    return next(e)
  })
}

// ========== SCANNING LOGIC ==========

function scanFile(file: string, content: string): any[] {
  const issues: any[] = []
  const lines = content.split('\n')
  
  // Define patterns to detect
  const patterns = [
    // Secrets
    { regex: /(?:password|passwd|pwd)\s*[:=]\s*["']?[^"'\s]{8,}["']?/gi, type: 'hardcoded-password', severity: 'critical', message: 'Hardcoded password detected' },
    { regex: /(?:api[_-]?key|apikey)\s*[:=]\s*["']?[^"'\s]{16,}["']?/gi, type: 'api-key', severity: 'critical', message: 'Hardcoded API key detected' },
    { regex: /(?:secret|token)\s*[:=]\s*["']?[^"'\s]{16,}["']?/gi, type: 'secret-token', severity: 'critical', message: 'Hardcoded secret/token detected' },
    { regex: /-----BEGIN (?:RSA |EC )?PRIVATE KEY-----/gi, type: 'private-key', severity: 'critical', message: 'Private key in source code' },
    { regex: /aws_access_key_id\s*[:=]\s*["']?[A-Z0-9]{16,}["']?/gi, type: 'aws-access-key', severity: 'critical', message: 'AWS access key detected' },
    { regex: /aws_secret_access_key\s*[:=]\s*["']?[^"'\s]{40,}["']?/gi, type: 'aws-secret-key', severity: 'critical', message: 'AWS secret key detected' },
    
    // Console/Print statements
    { regex: /console\.(log|warn|error|debug|info)\s*\(/gi, type: 'console-log', severity: 'info', message: 'Console statement found (remove for production)' },
    { regex: /print\s*\(/gi, type: 'print-statement', severity: 'info', message: 'Print statement found' },
    { regex: /fmt\.Print/gi, type: 'fmt-print', severity: 'info', message: 'fmt.Print statement found' },
    { regex: /System\.out\.print/gi, type: 'sysout-print', severity: 'info', message: 'System.out.print found' },
    
    // TODO/FIXME
    { regex: /TODO[:\(]/gi, type: 'todo', severity: 'info', message: 'TODO comment' },
    { regex: /FIXME[:\(]/gi, type: 'fixme', severity: 'warning', message: 'FIXME comment - needs attention' },
    { regex: /HACK[:\(]/gi, type: 'hack', severity: 'warning', message: 'HACK comment - technical debt' },
    { regex: /BUG[:\(]/gi, type: 'bug', severity: 'warning', message: 'BUG comment - known issue' },
    
    // SQL Injection risks
    { regex: /(?:query|execute|exec)\s*\(\s*["'`].*\$\{.*\}.*["'`]/gi, type: 'sql-injection-risk', severity: 'critical', message: 'Possible SQL injection - string interpolation in query' },
    { regex: /SELECT .* FROM .* WHERE .* \+ /gi, type: 'sql-concat', severity: 'warning', message: 'String concatenation in SQL query' },
    
    // Error handling
    { regex: /catch\s*\(\s*\w+\s*\)\s*\{\s*\}/gi, type: 'empty-catch', severity: 'warning', message: 'Empty catch block' },
    { regex: /catch\s*\([^)]*\)\s*\{[^}]*console\.log/gi, type: 'catch-only-log', severity: 'warning', message: 'Catch block only logs error' },
    
    // Security
    { regex: /eval\s*\(/gi, type: 'eval-usage', severity: 'critical', message: 'eval() usage - security risk' },
    { regex: /new Function\s*\(/gi, type: 'function-constructor', severity: 'critical', message: 'Function constructor - security risk' },
    { regex: /innerHTML\s*=/gi, type: 'innerhtml', severity: 'warning', message: 'innerHTML assignment - XSS risk' },
    { regex: /dangerouslySetInnerHTML/gi, type: 'dangerous-html', severity: 'warning', message: 'dangerouslySetInnerHTML - XSS risk' },
    
    // Performance
    { regex: /for\s*\(.*\.length\s*;/gi, type: 'loop-length', severity: 'info', message: 'Array.length in loop condition - cache it' },
    { regex: /document\.querySelector.*forEach/gi, type: 'queryselector-loop', severity: 'warning', message: 'querySelector in loop - cache selector' },
    
    // Debug code
    { regex: /debugger\s*;/gi, type: 'debugger', severity: 'warning', message: 'debugger statement in code' },
    { regex: /console\.trace\s*\(/gi, type: 'console-trace', severity: 'info', message: 'console.trace found' },
  ]
  
  lines.forEach((line, lineIndex) => {
    patterns.forEach(pattern => {
      let match
      pattern.regex.lastIndex = 0
      while ((match = pattern.regex.exec(line)) !== null) {
        issues.push({
          file,
          line: lineIndex + 1,
          column: match.index + 1,
          type: pattern.type,
          severity: pattern.severity,
          message: pattern.message,
          snippet: line.trim().slice(0, 120),
        })
        if (match.index === pattern.regex.lastIndex) pattern.regex.lastIndex++
      }
    })
  })
  
  return issues
}

function formatTime(timestamp: number): string {
  const date = new Date(timestamp)
  return date.toLocaleTimeString()
}
