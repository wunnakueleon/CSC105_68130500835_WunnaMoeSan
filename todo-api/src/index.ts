import http from 'http';
import { v4 as uuidv4 } from 'uuid';

// ─── Data Structure ──────────────────────────────────────────────────────────

interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

let todos: TodoItem[] = [
  {
    id: uuidv4(),
    title: 'Learn Node.js',
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    title: 'Build a REST API',
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    title: 'Master TypeScript',
    completed: true,
    createdAt: new Date().toISOString(),
  },
];

// ─── Server ──────────────────────────────────────────────────────────────────

const PORT = 3000;

const server = http.createServer((req, res) => {
  const method = req.method ?? '';
  const url = req.url ?? '';

  // Helper: send a JSON response
  const sendJSON = (statusCode: number, data: unknown) => {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  };

  // GET /todos
  if (method === 'GET' && url === '/todos') {
    return sendJSON(200, todos);
  }

  // GET /todos/:id
  // Pure Node.js has no built-in route parameter support.
  // We must manually match the URL with a regex to extract the ID.
  const todoByIdMatch = url.match(/^\/todos\/([^\/]+)$/);

  if (method === 'GET' && todoByIdMatch) {
    const id = todoByIdMatch[1];
    const todo = todos.find((t) => t.id === id);

    if (!todo) {
      return sendJSON(404, { error: `Todo with id "${id}" not found` });
    }

    return sendJSON(200, todo);
  }

  // Fallback: 404
  sendJSON(404, { error: 'Route not found' });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});