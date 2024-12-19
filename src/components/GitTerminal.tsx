import { useEffect, useRef } from 'react';
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';

const GitTerminal = () => {
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const term = new Terminal({
      cursorBlink: true,
      theme: {
        background: '#1e1e1e', // Dark background
        foreground: '#ffffff', // White text
        cursor: '#33AAff', // Green cursor
      },
      fontSize: 14,
      fontFamily: 'monospace',
    });

    if (terminalRef.current) {
      term.open(terminalRef.current);
      term.write('Welcome to the Git Visualizer Terminal!\r\n');
    }
  }, []);

  return <div ref={terminalRef} style={{ height: '100vh', width: '100%' }} />;
};

export default GitTerminal;
