import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(new URL('..', import.meta.url).pathname);

let failed = false;

const forbiddenPaths = [
  '.pages-deploy',
  'assets',
  'blog',
  'diagnosis.html',
  'resources.html',
  'services.html',
  'sample-report.html',
  'company.html',
  'privacy.html',
  'legal.html',
  'safety.html',
  'styles.css',
  'content-pipeline',
  'drafts',
  'logs',
  'screenshots',
  'analysis',
];

for (const relativePath of forbiddenPaths) {
  if (fs.existsSync(path.join(root, relativePath))) {
    console.error(
      'Miraigent site/private operation content does not belong in this catalog repo: ' +
        relativePath
    );
    failed = true;
  }
}

const publicFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    publicFiles.push(full);
  }
}
walk(root);

const sensitivePatterns = [
  { name: 'Discord channel/message URL', pattern: /discord\.com\/channels\/\d+\/\d+\/\d+/i },
  { name: 'OpenClaw secret path', pattern: /\.openclaw\/secrets/i },
  { name: 'OpenClaw workspace path', pattern: /\.openclaw\/workspace-[a-z0-9_-]+/i },
  { name: 'local absolute path', pattern: /\/home\/[a-z0-9_-]+\//i },
  { name: 'private Re-BIRTH repository reference', pattern: /(?:github\.com[:/])?rebirth-ai\/miraigent-site/i },
  { name: 'private key block', pattern: /-----BEGIN [A-Z ]*PRIVATE KEY-----/ },
  { name: 'environment assignment secret', pattern: /(?:API_KEY|TOKEN|COOKIE|PASSWORD|SECRET)\s*=\s*['"]?[^\s'"]{12,}/i },
];

const allowlistFiles = new Set([
  'README.md',
  'REPO_ROUTING.md',
  'SOURCE_OF_TRUTH.md',
  'public-lab/README.md',
  'public-lab/agent-memories/MCP_ARCHITECTURE.md',
  'public-lab/agent-memories/PUBLISHING_POLICY.md',
]);
const proseOnlyPatterns = new Set(['environment assignment secret']);

for (const file of publicFiles) {
  const relativePath = path.relative(root, file).replaceAll(path.sep, '/');
  if (!/\.(?:md|json|yml|yaml|txt|gitignore)$/.test(relativePath)) continue;
  const text = fs.readFileSync(file, 'utf8');
  for (const { name, pattern } of sensitivePatterns) {
    if (!pattern.test(text)) continue;
    if (allowlistFiles.has(relativePath) && proseOnlyPatterns.has(name)) {
      continue;
    }
    console.error('public boundary violation in ' + relativePath + ': ' + name);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('agent-memories catalog public boundary check passed');
