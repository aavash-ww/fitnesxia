// import React from "react";

// class Errorboundary extends React.Component {
//   state = { hasError: false };

//   static getDerviedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, info) {
//     console.log(error, info);
//   }
//   render() {
//     if (this.state.hasError) {
//       return this.props.fallback;
//     }
//     return this.props.children;
//   }
// }

// export default Errorboundary;
