import React from "react"
import { LogInButton } from "../Buttons/Log-in-enter"
import { button, form, h1, input } from "./form-styles"

// Make log in form work
export const Form = () => {
    return (
        <form style={form}>
            <h1 style={h1}>Log in</h1>
            <input style={input} type='email' placeholder='Enter your Whole Foods email adress' />
            <input style={input} type='password' placeholder='Enter your password' />
            <LogInButton />
            <a style={{gridColumn: '2'}} href=''>forgot password?</a>
        </form>
    )
}