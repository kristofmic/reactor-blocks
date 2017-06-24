export default function times(count, iteratee) {
  const results = [];

  for (let i = 0; i < count; i += 1) {
    results.push(iteratee(i));
  }

  return results;
}
