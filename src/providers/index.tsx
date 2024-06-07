import { PropsWithChildren, Suspense } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "@/lib/redux/Store";
import { Toaster } from "@/common/components/ui/toaster";

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <Suspense fallback={<p>Laoding...</p>}>
      <Provider store={store}>
        <PersistGate loading={<p>Laoding...</p>} persistor={persistor}>
          {children}
          <Toaster />
        </PersistGate>
      </Provider>
    </Suspense>
  );
}
