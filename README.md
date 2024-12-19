# React Native Dimensions API Error: Cannot read properties of undefined (reading 'height')

This repository demonstrates a common error in React Native when using the `Dimensions` API to access screen dimensions before the component has fully mounted.  The error, "Cannot read properties of undefined (reading 'height')", occurs because `Dimensions.get('window')` returns undefined initially. 

The `bug.js` file showcases the problematic code, and `bugSolution.js` provides a corrected implementation using the `useEffect` hook to ensure the dimensions are accessed after the component mounts.  This ensures the app works correctly and avoids runtime crashes.