import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const { register, setUser, updateUser, signInGoogle } = use(AuthContext)

    const navigate = useNavigate()


    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const newUser = Object.fromEntries(formData.entries())
        const { email, password, name, photo } = newUser;

        const validPassword = new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]).{6,}$"
        );


        if (!validPassword.test(password)) {
            toast.error(
                "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
            );
            return;
        }


        register(email, password)
            .then(result => {
                const user = result.user
                navigate("/")
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })

                    })
                    .catch(error => {
                        toast(error.message);
                        setUser(user)
                    })
            })
            .catch(error => {
                toast(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                setUser(result.user)
                navigate("/");
            })
            .catch(error => {
                toast(error.message)
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
            <div className="w-full max-w-md bg-white/20 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl text-white border border-white/30 my-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Create Your Account </h2>

                <form onSubmit={handleRegister} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block mb-1 text-sm font-medium">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            className="w-full p-3 rounded-lg bg-white/30 placeholder-white/70 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="block mb-1 text-sm font-medium">Photo URL</label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="https://example.com/photo.jpg"
                            className="w-full p-3 rounded-lg bg-white/30 placeholder-white/70 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1 text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full p-3 rounded-lg bg-white/30 placeholder-white/70 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-1 text-sm font-medium">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                name="password"
                                className="w-full p-3 pr-10 rounded-lg bg-white/30 placeholder-white/70 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 text-lg"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-white/30 hover:bg-white/40 text-white py-2 rounded-lg font-semibold transition duration-200"
                    >
                        Register
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-4 my-6">
                    <hr className="flex-grow border-white/30" />
                    <span className="text-sm text-white/70">or</span>
                    <hr className="flex-grow border-white/30" />
                </div>

                {/* Google signup */}
                <button
                    onClick={handleGoogleSignIn}
                    type="button"
                    className="w-full flex items-center justify-center gap-3 bg-white text-black py-2 rounded-lg font-medium shadow hover:bg-gray-100 transition"
                >
                    <FcGoogle className="text-xl" />
                    Sign up with Google
                </button>

                {/* Login link */}
                <p className="text-sm mt-4 text-center">
                    Already have an account?{" "}
                    <a href="/auth/signIn" className="text-white font-bold underline">
                        Login
                    </a>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
