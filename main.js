const num = document.getElementById("number");
const system = document.getElementById("system");

const tableB = document.getElementById("b");
const tableO = document.getElementById("o");
const tableD = document.getElementById("d");
const tableH = document.getElementById("h");

const submit = document.getElementById("submit");
submit.onclick = () => {
  let numVal = num.value;
  let sys = system.value.toUpperCase();
  if (sys == "B") {
    let conversions = convertBinary(numVal);
    setVales(
      numVal,
      conversions.octal,
      conversions.decimal,
      conversions.hexadecimal
    );
  } else if (sys == "O") {
    const conversions = convertOctal(numVal);
    setVales(
      conversions.binary,
      numVal,
      conversions.decimal,
      conversions.hexadecimal
    );
  } else if (sys == "D") {
    const conversions = convertDecimal(parseInt(numVal, 10));
    setVales(
      conversions.binary,
      conversions.octal,
      numVal,
      conversions.hexadecimal
    );
  } else if (sys == "H") {
    const conversions = convertHexadecimal(numVal);
    setVales(
      conversions.binary,
      conversions.octal,
      conversions.decimal,
      numVal
    );
  }
};

function convertBinary(binary) {
  const decimal = parseInt(binary, 2);
  const octal = decimal.toString(8);
  const hexadecimal = decimal.toString(16).toUpperCase();

  return {
    octal: octal,
    decimal: decimal,
    hexadecimal: hexadecimal,
  };
}

function convertOctal(octal) {
  const decimal = parseInt(octal, 8);
  const binary = decimal.toString(2);
  const hexadecimal = decimal.toString(16).toUpperCase();

  return {
    binary: binary,
    decimal: decimal,
    hexadecimal: hexadecimal,
  };
}

function convertDecimal(decimal) {
  const binary = decimal.toString(2);
  const octal = decimal.toString(8);
  const hexadecimal = decimal.toString(16).toUpperCase();

  return {
    binary: binary,
    octal: octal,
    hexadecimal: hexadecimal,
  };
}

function convertHexadecimal(hexadecimal) {
  const decimal = parseInt(hexadecimal, 16);
  const binary = decimal.toString(2);
  const octal = decimal.toString(8);

  return {
    binary: binary,
    octal: octal,
    decimal: decimal,
  };
}

function setVales(a, b, c, d) {
  tableB.innerText = a;
  tableO.innerText = b;
  tableD.innerText = c;
  tableH.innerText = d;
}
