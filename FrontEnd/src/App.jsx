import { useState } from "react";

export default function AuthPage() {
  const [page, setPage] = useState("signup");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "380px",
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          {page === "signup"
            ? "Create Account"
            : page === "login"
              ? "Login"
              : "Forgot Password"}
        </h2>

        {/* Signup */}
        {page === "signup" && (
          <>
            <input
              type="text"
              placeholder="Full Name"
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Email"
              style={inputStyle}
            />

            <input
              type="password"
              placeholder="Password"
              style={inputStyle}
            />

            <input
              type="password"
              placeholder="Confirm Password"
              style={inputStyle}
            />

            <button style={buttonStyle}>Create Account</button>

            <p style={textStyle}>
              Already have an account?{" "}
              <span
                style={linkStyle}
                onClick={() => setPage("login")}
              >
                Login
              </span>
            </p>
          </>
        )}

        {/* Login */}
        {page === "login" && (
          <>
            <input
              type="email"
              placeholder="Email"
              style={inputStyle}
            />

            <input
              type="password"
              placeholder="Password"
              style={inputStyle}
            />

            <button style={buttonStyle}>Login</button>

            <p style={textStyle}>
              <span
                style={linkStyle}
                onClick={() => setPage("forgot")}
              >
                Forgot Password?
              </span>
            </p>

            <p style={textStyle}>
              Don't have an account?{" "}
              <span
                style={linkStyle}
                onClick={() => setPage("signup")}
              >
                Sign Up
              </span>
            </p>
          </>
        )}

        {/* Forgot Password */}
        {page === "forgot" && (
          <>
            <input
              type="email"
              placeholder="Enter your Email"
              style={inputStyle}
            />

            <button style={buttonStyle}>
              Send Reset Link
            </button>

            <p style={textStyle}>
              <span
                style={linkStyle}
                onClick={() => setPage("login")}
              >
                Back to Login
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "15px",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#0d6efd",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  cursor: "pointer",
};

const textStyle = {
  textAlign: "center",
  marginTop: "15px",
};

const linkStyle = {
  color: "#0d6efd",
  cursor: "pointer",
  fontWeight: "bold",
};