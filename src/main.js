import './style.css';

document.querySelector('#app').innerHTML = `
  <main class="hello">
    <h1>Layerbase</h1>
    <p>Memory library</p>
    <button id="hello-button">Hello!</button>
  </main>
`;

document.querySelector('#hello-button').addEventListener('click', () => {
  alert('Hello, Layerbase!');
});