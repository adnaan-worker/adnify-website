export default function CodeEditor() {
  const code = `// Adnify - AI Code Editor
import { createAgent } from '@adnify/core';

const agent = createAgent({
  model: 'claude-sonnet-4',
  tools: ['file_edit', 'terminal', 'git'],
});

export async function analyzeCode(file: string) {
  const result = await agent.run({
    task: 'Analyze this code and suggest improvements',
    context: { file },
  });
  return result.suggestions;
}
`;

  return (
    <div className="font-mono text-sm bg-[#0d1117] rounded-xl overflow-hidden border border-white/10">
      {/* Window header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#161b22] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="ml-3 text-xs text-gray-500">main.ts</span>
      </div>
      
      {/* Code content */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-gray-300">
          <code dangerouslySetInnerHTML={{
            __html: code
              .replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/(\/\/.*$)/gm, '<span class="text-gray-500">$1</span>')
              .replace(/('.*?')/g, '<span class="text-[#a5d6ff]">$1</span>')
              .replace(/\b(import|export|const|function|return|async|await|new|class|extends)\b/g, '<span class="text-[#c792ea]">$1</span>')
              .replace(/\b(\d+)\b/g, '<span class="text-[#f78c6c]">$1</span>')
              .replace(/\b(true|false|null)\b/g, '<span class="text-[#c792ea]">$1</span>')
          }} />
        </pre>
      </div>
    </div>
  );
}
