import { useRouter } from "@tanstack/react-router";
import { isAuthenticated, signOut, signIn } from "../utils/auth";

export function Login() {
  const router = useRouter();

  return (
    <>
      {isAuthenticated() ? (
        <>
          <p>Hello user!</p>
          <button
            className="text-sm bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded"
            onClick={async () => {
              signOut();
              router.invalidate();
            }}
          >
            Sign out
          </button>
        </>
      ) : (
        <button
          className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded"
          onClick={async () => {
            signIn();
            router.invalidate();
          }}
        >
          Sign in
        </button>
      )}
    </>
  );
}
