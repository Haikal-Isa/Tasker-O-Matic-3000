import "https://unpkg.com/react@18.2.0/umd/react.production.min.js";
import "https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js";
import htm from 'https://unpkg.com/htm?module';
import Form from "./form.js";
const html = htm.bind(React.createElement);

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(html`<${Form} />`);
