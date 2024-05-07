import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log(user)
  return (
    <div className=" flex justify-center">
      {isAuthenticated && (
        <div className="p-5 font-semibold border rounded text-center text-white max-w-sm">
          <img
            className="w-32 h-32 rounded-full mx-auto"
            src={user.picture}
            alt={user.name}
          />
          <div className="text-sm mt-5">
            <a
              href="#"
              className="font-medium text-2xl leading-none  hover:text-indigo-600 transition duration-500 ease-in-out"
            >
              {user.name}
            </a>
            <p className="text-lg">{user.email}</p>
          </div>

          <p className="mt-2 text-sm ">
          Welcome, {user.given_name} Dive into your personalized world – explore, connect, and manage your profile effortlessly.
          </p>
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 m-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            LogOut
          </button>
        </div>
      )}
    </div>
  );
}
