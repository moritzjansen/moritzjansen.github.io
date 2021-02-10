main();

function main() {
  const canvas = document.querySelector("#glCanvas");
  // Initialisierung des GL Kontexts
  const gl = canvas.getContext("webgl");

  // Nur fortfahren, wenn WebGL verfügbar ist und funktioniert
  if (!gl) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }

  // Setze clear color auf schwarz, vollständig sichtbar
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Lösche den color buffer mit definierter clear color
  gl.clear(gl.COLOR_BUFFER_BIT);
}