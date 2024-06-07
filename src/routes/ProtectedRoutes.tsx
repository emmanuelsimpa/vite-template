import { PropsWithChildren, Suspense, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { BaseApp } from "./BaseApp";
import { useAppSelector } from "@/common/hooks/selector";

export function ProtectedRoutes({ children }: PropsWithChildren) {
  const { accessToken } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isLoggedIn = Boolean(accessToken);

  useEffect(() => {
    if (isLoggedIn) {
      return navigate("/auth/login");
    }
  }, [isLoggedIn, navigate, pathname]);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BaseApp>
        <div>{children ? children : <Outlet />}</div>
      </BaseApp>
    </Suspense>
  );
}
