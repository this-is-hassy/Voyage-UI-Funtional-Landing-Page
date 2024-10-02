"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFirebase } from "../../context/Firebase";
import Link from "next/link";
import Button from "@/components/Button";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const page = () => {
  const firebase: any = useFirebase();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (firebase.isLoggedIn) {
      router.push("/");
    }
  }, [firebase, router]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("login in a user...");
    const result = await firebase.singinUserWithEmailAndPass(email, password);
    console.log("Successfull", result);
  };


  return (
    <>
      <div className="max-container padding-container h-screen flex justify-center items-center  bg-zinc-200">
        <div className="card bg-[#131314] w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
          <div className="text-center text-[#FFD015] font-bold text-2xl">Login</div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter email"
                className="input input-bordered bg-neutral-300 text-[#131314]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered bg-neutral-300 text-[#131314]"
                required
              />
               <div
                className="absolute right-12 top-[217px] cursor-pointer"
                onClick={() => setShowPassword(!showPassword)} 
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
            <Button
              title="Sign In"
              type="submit"
              className="bg-[#FFD015] text-[#111827] font-semibold text-sm rounded-[8px] mt-6 py-4 px-[52px]"
            />
            <Link href={"/register"} className="text-center cursor-pointer">
              Already have an account?
              <span className="text-[#FFD015]">Signup</span>
            </Link>
          </form>
          <h1 className="mb-2 text-center">OR</h1>
          <Button title="Login with Google" className="mx-4 bg-zinc-800 text-white font-semibold text-sm rounded-[8px] my-6 py-4 px-[52px]" onClick={firebase.signinWithGoogle}/>
        </div>
      </div>
    </>
  );
};

export default page;
