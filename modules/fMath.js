function sqEquation(a, b, c) {
  let x1, x2, x0, delta;

    if (isNaN(a) || isNaN(b) || isNaN(c))
      console.log('Podaj poprawne dane!');
    else {
      delta = (b * b) - (4 * a * c);

      if (delta > 0) {
        delta = Math.sqrt(delta);
        x1 = (-b - delta) / (2 * a);
        x2 = (-b + delta) / (2 * a);
        console.log(`Dwa miejsca zerowe: ${x1} , ${x2}`);
      }
      else if (delta == 0) {
        x0 = -b / (2 * a);
        console.log(`Jedno miejsce zerowe: ${x0}`);
      }
      else
        console.log('Brak miejsc zerowych');
    }
}

module.exports = { sqEquation };