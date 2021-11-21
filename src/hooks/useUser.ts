import { useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { IUser } from "../../pages/api/login";
import { swrConfiguration } from "./fetcher";

interface IUseUser {
  redirectTo?: string;
  redirectIfFound?: boolean;
}

interface FetchUser extends IUser {
  isLoggedIn: boolean;
}

export default function useUser({
  redirectTo,
  redirectIfFound = false,
}: IUseUser) {
  const { data: user, mutate: mutateUser } = useSWR<FetchUser>(
    "/api/user",
    swrConfiguration
  );
  const router = useRouter();

  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo || !user) return;

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && user?.isLoggedIn)
    ) {
      router.push(redirectTo);
      console.log("LOGGED USER =>", user);
      localStorage.setItem(`@game-info/userToken`, JSON.stringify(user.token));
    }
  }, [user, redirectIfFound, redirectTo, router]);

  return { user, mutateUser };
}
