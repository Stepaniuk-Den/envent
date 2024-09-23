import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleGoBack = (router: AppRouterInstance) => {
  if (typeof window !== "undefined" && window.history.length > 1) {
    router.back();
  } else {
    router.push("/");
  }
};
