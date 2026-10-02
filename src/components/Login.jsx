import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index.js'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState('')

    const login = async (data) => {
        setError('')
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin({ userData }))
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="flex w-full items-center justify-center px-4 py-12">
            <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-6 flex justify-center">
                    <Logo />
                </div>
                <h2 className="text-center text-2xl font-bold text-slate-900">
                    Sign in to your account
                </h2>
                <p className="mt-2 text-center text-sm text-slate-600">
                    Don&apos;t have an account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-indigo-600 duration-200 hover:text-indigo-700 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>

                {error && (
                    <p className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-600">
                        {error}
                    </p>
                )}

                <form onSubmit={handleSubmit(login)} className="mt-8">
                    <div className="space-y-5">
                        <Input
                            label="Email"
                            placeholder="Enter your email"
                            type="email"
                            {...register('email', {
                                required: true,
                                validate: {
                                    matchPatern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        'Email address must be a valid address',
                                },
                            })}
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            {...register('password', { required: true })}
                        />
                        <Button type="submit" className="w-full">
                            Sign in
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login