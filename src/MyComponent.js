import React, { lazy, Suspense } from "react";
const OtherComponent = lazy(() => import("./OtherComponent"));

const MyComponent = () => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </Suspense>
  </div>
);

export default MyComponent;
