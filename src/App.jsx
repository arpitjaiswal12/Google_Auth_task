import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";

function isChrome() {
  const userAgent = navigator.userAgent.toLowerCase();
  return userAgent.indexOf("chrome") > -1 && userAgent.indexOf("safari") > -1;
}

function promptOpenInChrome() {
  if (
    confirm(
      "For the best experience, we recommend opening this link in Chrome. Would you like to open it now?"
    )
  ) {
    window.location.href = "https://google-auth-task.vercel.app/";
  } else {
    // Handle if the user declines to open in Chrome
  }
}

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

function handleLinkClick(event) {
  event.preventDefault(); // Prevent default behavior of link click

  // Check if the user is on a mobile device and not using Chrome
  if (isMobileDevice() && !isChrome()) {
    promptOpenInChrome();
  } else {
    // Open the link in the default browser
    window.location.href = event.target.href;
  }
}

const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", handleLinkClick);
});

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
