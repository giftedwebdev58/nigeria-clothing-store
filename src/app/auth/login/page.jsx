"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
    const [error, setError] = useState("");
    const [googleLoading, setGoogleLoading] = useState(false);
    const router = useRouter();

    const handleGoogleSignIn = async () => {
        setGoogleLoading(true);
        setError("");
        
        try {
            await signIn("google", { callbackUrl: "/dashboard" });
        } catch (error) {
            setError("Failed to sign in with Google");
            setGoogleLoading(false);
        }
    };

    return (
        <div className="min-h-[calc(100vh-140px)] flex items-center justify-center py-12">
            <div className="mx-auto w-full max-w-md">
                <div className="bg-white p-8 rounded-lg border border-slate-200">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-slate-900">Welcome back</h1>
                        <p className="text-slate-600 mt-2">Sign in to access your account</p>
                    </div>

                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4 text-sm">
                            {error}
                        </div>
                    )}

                    <div className="flex flex-col space-y-4">
                        <Button 
                            variant="outline" 
                            type="button" 
                            className="w-full" 
                            disabled={googleLoading}
                            onClick={handleGoogleSignIn}
                        >
                            {googleLoading ? (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                                <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                </svg>
                            )}
                            Continue with Google
                        </Button>
                    </div>

                    <div className="mt-4 text-center text-sm">
                        Don't have an account? We'll create one for you
                    </div>
                </div>
            </div>
        </div>
    );
}