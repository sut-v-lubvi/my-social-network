import { Suspense } from "react";

export const suspense = (Component, props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};
