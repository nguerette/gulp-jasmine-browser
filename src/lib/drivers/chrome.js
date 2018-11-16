export default function chrome() {
  return {
    command: 'node',
    runner: 'chrome_runner',
    output: 'stderr'
  };
}