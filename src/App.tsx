import { createRoot } from "react-dom/client";

const rootEl = document.getElementById('root');

if (rootEl instanceof HTMLElement) {
  const root = createRoot(rootEl);
  root.render(<div>Hello World</div>);
}