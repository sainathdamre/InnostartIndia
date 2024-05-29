import { useState } from "react";
import { Link } from "react-router-dom";
import {  TERipple } from "tw-elements-react";
function SignUp() {

    const [formData, setFormData] = useState({});
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        console.log(formData)

    }

    const handleSubmit = async(e) => {
       e.preventDefault();
     

        try {
           
          
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();

            if (response.ok) {
               
                alert("User successfully created");
              
            }
            else {
              
                console.log(data.message)
              
            }

            setFormData({});
            document.getElementById("fName").value = "";
            document.getElementById("lName").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("number").value = "";



        } catch (error) {
         
            console.log(error.message);
          

        }
    }




  return (
      <section className=" bg-neutral-200 dark:bg-neutral-700 ">
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
                                              <span className="text-orange-500 font-bold text-4xl">INNO</span><span className="font-bold text-4xl">START</span> <span className="text-green-600 text-4xl font-bold">INDIA</span>
                                          </h4>
                                      </div>

                                      <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-white">
                                          <p className="mb-6 text-center text-2xl">Free Register Here</p>
                                         
                                              <input
                                                  type="text"
                                                  className="text-black rounded-md border-none p-2"
                                                  placeholder="First Name"
                                                  onChange={handleChange}
                                              id="fName"
                                              />
                                              <input
                                                  type="text"
                                                  className="text-black rounded-md border-none p-2"
                                                  placeholder="Last Name"
                                                  onChange={handleChange}
                                              id="lName"
                                              />

                                       
                                          
                                          <input
                                              type="email"
                                              className="text-black rounded-md border-none p-2"
                                              placeholder="Email address"
                                              onChange={handleChange}
                                              id="email"
                                          />
                                          <input
                                              type="number"
                                              className="text-black rounded-md border-none p-2"
                                              placeholder=" phone number"
                                              onChange={handleChange}
                                              id="number"
                                          />

                                  
                                          <input
                                              type="password"
                                              className="text-black rounded-md border-none p-2"
                                              placeholder="password"
                                              onChange={handleChange}
                                              id="password"
                                          />

                                          {/* <!--Submit button--> */}
                                          <div className="mb-12 pb-1 pt-1 text-center">
                                              
                                                  <button
                                                      className="mb-3 hover:text-red-500 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                  type="submit"
                                                      style={{
                                                          background:
                                                              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                                                      }}
                                                  >
                                                     Register
                                                  </button>
                                            

                                          
                                            
                                          </div>

                                          
                                          <div className="flex items-center justify-between pb-6">
                                              <p className="mb-0 mr-2">Do not have an account</p>
                                                  <Link to='/signin'>
                                              <TERipple rippleColor="light">
                                                      <button
                                                          type="button"
                                                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger  hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                                      >
                                                          Login
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

export default SignUp