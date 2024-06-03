import React from 'react'
import {SignedIn, SignInButton, SignUpButton, SignedOut, UserButton} from "@clerk/clerk-react"

const Auth = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal" />
        <SignUpButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default Auth;
