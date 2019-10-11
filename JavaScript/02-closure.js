// portée de module ( Node ou Browser type="module")
// porete globale  (browser sans type ='module')
const porteeModule = 'module';
function externe(msg) {
// Portée de closure
// accès au portée au dessus
  function interne() {
    //portée locale
    const porteeLocal = 'locale';
    console.log(msg);
  }
  interne();
}

externe("me");

// Pile d'appel de fcts
// ^
// |
// | log
// | interne
// | externe
// + -------------------------------> temps
