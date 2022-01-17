const text = "Domo arigato!";

report("Before defining functions");

function useless(ninjaCallback) {
  report("I'm a useless function");
  return ninjaCallback();
}

function getText() {
  const text = "12345";
  report("In getText fn");
  return text
}

report('Before making all the calls');

function report(val) {
  assert(true, val);
}

function assert(value, description) {
  const pre = value ? 'pass: ' : 'fail: ';
  console.log('\n' + pre + description + '\n');
}