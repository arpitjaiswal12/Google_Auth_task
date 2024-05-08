import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  if (isAuthenticated) {
    navigate("/profile");
  }

  const handleButtonClick = () => {
    // Detect if the page is opened in Chrome browser
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    // Check if the URL was opened externally (e.g., from another app)
    const isExternal = !document.referrer.startsWith(window.location.origin);

    if (isChrome && isExternal) {
      // Prompt the user to open the URL in Chrome
      const openInChrome = confirm("For best experience, open this URL in Chrome browser. Do you want to continue?");
      if (openInChrome) {
        // Replace current URL with the desired URL
        window.location.replace('https://google-auth-task.vercel.app/');
      }
    }
  };

  return (
    <section>
      <div className="flex items-center justify-center  px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 w-28">
            <img src="https://cdn-icons-png.flaticon.com/256/7856/7856126.png" />
          </div>
          <h2 className="text-2xl font-bold leading-tight text-blue-500">
            Sign in to your account
          </h2>
          <p className="mt-2 font-semibold text-base text-yellow-100">
            Unlock endless possibilities with just a click – Sign in seamlessly
            with Google and experience a world of convenience in our React app!
          </p>
          <div className="mt-3 space-y-3">
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-blue-800 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              onClick={() => { 
                redirect("https://google-auth-task.vercel.app/");
                loginWithRedirect();
                handleButtonClick(); }}
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-rose-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </span>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
