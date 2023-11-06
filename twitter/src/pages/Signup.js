import React from 'react'
import twittersignup from "../assets/twittersignup.png"
import twitterLogo from "../assets/twitter-logo.png"

const Signup = () => {
    return (
        <div>
            <div className='flex'>
                <img src={twittersignup} />
                <div>
                    <img src={twitterLogo} />
                    <h1 className='text-[5rem] font-bold'>Happening Now</h1>
                    <h1 className="text-[5rem] font-bold">Join Now</h1>
                    <div>
                        <div id="NewRootRoot" className="flex flex-col w-full">
                            <div className="border-solid border-[#e4eaed] bg-[rgba(196,_196,_196,_0)] flex flex-row justify-center pt-3 gap-1 h-16 shrink-0 items-start border rounded-[42px]">
                                <img
                                    src="https://file.rendit.io/n/GUCICZv7rFgCB8jsyAgk.png"
                                    alt="Googleicon"
                                    id="Googleicon"
                                    className="w-8 shrink-0"
                                />
                                <div className="text-xl font-sans font-medium mt-2">
                                    Sign up with Google
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-full">
                            <div className="border-solid border-[#e4eaed] bg-[rgba(196,_196,_196,_0)] flex flex-row justify-center pt-3 gap-1 h-16 shrink-0 items-start border rounded-[42px]">
                                <img
                                    src="https://file.rendit.io/n/vpiZwASPEUUYdM0DhF7R.png"
                                    alt="Logoapple"
                                    id="Logoapple"
                                    className="mt-1 w-8 shrink-0"
                                />
                                <div className="text-xl font-sans font-medium mt-2">Sign up with Apple</div>
                            </div>
                        </div>

                        <div className="flex flex-col w-full">
                            <div className="border-solid border-[#e4eaed] bg-[rgba(196,_196,_196,_0)] flex flex-col justify-center h-16 shrink-0 items-center border rounded-[42px]">
                                <div className="text-xl font-sans font-medium">
                                    Sign up with phone or email
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <p>By singing up you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
                            <p>Already have an account? Log in</p>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-row gap-6 w-full items-start">
                    <div className="text-xs font-sans mt-px">About</div>
                    <div className="flex flex-row gap-6 w-3/5 items-center mb-px mr-px">
                        <div className="text-xs font-sans">Help Center</div>
                        <div className="text-xs font-sans mr-px">Terms of Service</div>
                        <div className="text-xs font-sans self-start">Privacy Policy</div>
                        <div className="text-xs font-sans mr-px">Cookie Policy</div>
                        <div className="self-start flex flex-row gap-5 w-24 shrink-0 items-start">
                            <div className="text-xs font-sans mb-px">Ads info</div>
                            <div className="text-xs font-sans mt-px">Blog</div>
                        </div>
                        <div className="text-xs font-sans self-start mt-px mr-px">Status</div>
                        <div className="self-start flex flex-row gap-5 items-start mt-px mr-px">
                            <div className="text-xs font-sans mb-px">Carrres</div>
                            <div className="text-xs font-sans mt-px">Brand Resources</div>
                        </div>
                        <div className="text-xs font-sans mr-px">Advertsing</div>
                        <div className="text-xs font-sans">Marketing</div>
                    </div>
                    <div className="flex flex-row gap-6 items-start mt-px mr-px">
                        <div className="flex flex-row justify-between w-[270px] shrink-0 items-start">
                            <div className="text-xs font-sans">Twitter for Business</div>
                            <div className="text-xs font-sans">Developers</div>
                            <div className="text-xs font-sans">Directory</div>
                        </div>
                        <div className="text-xs font-sans">Settings</div>
                    </div>
                    <div className="text-xs font-sans mt-px">© 2021 Twitter, Inc.</div>
                </div>
            </div>
        </div>
    )
}

export default Signup