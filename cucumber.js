module.exports = {
  default: [
    '--require features/steps/*.js',       // Step definitions
    '--require features/support/*.js',     // Hooks and World
    '--format progress',                      // Optional: cleaner output
    '--parallel 1'                            // Optional: run in single thread for shared context
  ].join(' ')
};