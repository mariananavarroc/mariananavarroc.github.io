let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #AD7FAB;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #AD7FAB;">Enseño programación web y hago contenido de tecnología.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
