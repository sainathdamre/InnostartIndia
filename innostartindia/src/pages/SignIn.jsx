import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { TERipple } from "tw-elements-react";
import { signInFailure, signInStart, signInSuccess } from "../redux/user/userSlice";
function SignIn() {
    const [formData, setformData] = useState({});
    const { loading, error: errorMessage } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const hanndleChange = (e) => {
        setformData({ ...formData, [e.target.id]: e.target.value });


    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            return dispatch(signInFailure('Please fill all the fields'));
        }



        try {
            dispatch(signInStart());
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();

            if (data.success === false) {
                dispatch(signInFailure(data.message))
            }

            if (response.ok) {
                dispatch(signInSuccess(data));

                console.log("suuccess", data.message)
                navigate('/')
            }



        } catch (error) {

            dispatch(signInFailure(error));


        }
    }



    return (
        <section className=" bg-neutral-200 dark:bg-neutral-700 h-screen ">
            <div className="container h-full p-10">
                <div className="g-6 flex h-full flex-wrap items-center justify-center text-black dark:text-neutral-200">
                    <div className="w-full">
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                            <div className="g-0 lg:flex lg:flex-wrap">
                                {/* <!-- Left column container--> */}
                                <div className="px-4 md:px-0 lg:w-6/12">
                                    <div className="md:mx-6 md:p-12">
                                        {/* <!--Logo--> */}
                                        <div className="text-center">

                                            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                <span className="text-orange-500 text-4xl">INNO</span><span className=" text-4xl">START</span> <span className="text-green-600 text-4xl">INDIA</span>
                                            </h4>
                                        </div>

                                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-white">
                                            <p className="mb-6 text-center text-2xl">Free Login Here</p>

                                        



                                            <input
                                                type="email"
                                                className="text-black rounded-md border-none p-2"
                                                placeholder="Email address"
                                                onChange={hanndleChange}
                                                id="email"
                                            />
                                          

                                            <input
                                                type="password"
                                                className="text-black rounded-md border-none p-2"
                                                placeholder="password"
                                                onChange={hanndleChange}
                                                id="password"
                                            />

                                            {/* <!--Submit button--> */}
                                            <div className="mb-12 pb-1 pt-1 text-center">
                                                    <button
                                                        className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                        type="submit"
                                                        style={{
                                                            background:
                                                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                                                        }}
                                                    >
                                                        Log in
                                                    </button>
                                               



                                            </div>


                                            <div className="flex items-center justify-between pb-6">
                                                <p className="mb-0 mr-2">Do not have an account?</p>
                                                    <Link to='/signup'>
                                                <TERipple className="hover:text-yellow-500">
                                                        <button
                                                            type="button"
                                                        >
                                                            Register
                                                        </button>

                                                </TERipple>
                                                    </Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                {/* <!-- Right column container with background and description--> */}
                                <div
                                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                                    style={{
                                        background:
                                            "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                                    }}
                                >
                                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                        <h4 className="mb-6 text-xl font-semibold">
                                            We are more than just a Start Up
                                        </h4>
                                        <p className="text-sm">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SignIn