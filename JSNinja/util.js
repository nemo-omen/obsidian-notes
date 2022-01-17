export function assert(value, description) {
  const pre = value ? 'pass: ' : 'fail: ';
  console.log('\n' + pre + description + '\n');
}

export function report(val) {
  assert(true, val);
}