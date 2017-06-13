export default function times(count, iteratee) {
  const results = [];

  for (let i = 0; i < count; i++) {
    results.push(iteratee(i));
  }

  return results;
}
