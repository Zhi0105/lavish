import { Controller, useForm } from "react-hook-form";
import { BiSend } from 'react-icons/bi'
import { Logo } from "../Lazy/LazyImage";
// import { toast } from "react-toastify";

export const Inquire = () => {

  const {
    handleSubmit,
    control,
    formState : { errors }
  } = useForm({
    defaultValues: {
      name: '',
      address: '',
      mobile: '',
      email: '',
      service: ''

    },
  });

  const onSubmit = (data) => {
    console.log(data)
  }
    

  return (
    <div className="inquire_main flex min-h-screen flex-col items-center justify-center mx-4">
      <section className="bg-gray-50 w-1/2 rounded-lg shadow-lg flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 my-12">
        <Logo height={200} width={200} />        
        <h1 className="mt-5 font-bold text-2xl">Submit Inquiries</h1>
        <div className="form_container w-full p-6 space-y-4 md:space-y-6 sm:p-8">
          <div className="form space-y-4 md:space-y-6">
            <div className="name_textfield">
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    pattern : /[\S\s]+[\S]+/
                  }}
                  render={({ field: { onChange, value } }) => (
                    <input 
                      value={value}
                      onChange={onChange}
                      type="name" 
                      name="name" id="name" 
                      placeholder="name" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                    />
                    
                  )}
                  name="name"
                />
                { errors.name && <p className="text-red-400 indent-2 text-sm">name invalid*</p> }

            </div>

            <div className="address_textfield">
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    pattern : /[\S\s]+[\S]+/
                  }}
                  render={({ field: { onChange, value } }) => (
                    <input 
                      value={value}
                      onChange={onChange}
                      type="address" 
                      name="address" id="address" 
                      placeholder="address" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                    />
                    
                  )}
                  name="address"
                />
                { errors.address && <p className="text-red-400 indent-2 text-sm">address invalid*</p> }

            </div>

            <div className="mobile_textfield">
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    pattern : /[\S\s]+[\S]+/
                  }}
                  render={({ field: { onChange, value } }) => (
                    <input 
                      value={value}
                      onChange={onChange}
                      type="mobile" 
                      name="mobile" id="mobile" 
                      placeholder="mobile" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                    />
                    
                  )}
                  name="mobile"
                />
                { errors.mobile && <p className="text-red-400 indent-2 text-sm">mobile invalid*</p> }

            </div>

            <div className="email_textfield">
              <Controller 
                control={control}
                rules={{
                  required: true,
                  pattern: /^\S+@\S+\.\S+$/
                }}
                render={( { field: { onChange, value } }) => (
                  <input 
                  value={value}
                  onChange={onChange}
                  type="email" 
                  name="email" id="email" 
                  placeholder="email" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                />
                )}
                name="email"
              />
                  { errors.email && <p className="text-red-400 indent-2 text-sm">email invalid*</p> }
            </div>

            <div className="service_textfield">
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    pattern : /[\S\s]+[\S]+/
                  }}
                  render={({ field: { onChange, value } }) => (
                    <input 
                      value={value}
                      onChange={onChange}
                      type="service" 
                      name="service" id="service" 
                      placeholder="service" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                    />
                    
                  )}
                  name="service"
                />
                { errors.service && <p className="text-red-400 indent-2 text-sm">service invalid*</p> }
            </div>


            <button 
              // disabled={registerLoading}
              onClick={handleSubmit((data) => onSubmit(data))}
              type="button" 
              className="w-full text-gray-900 bg-white flex justify-center items-center gap-4 cursor-pointer hover:bg-gray-300 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-4"
            >
              <BiSend width={50} height={50} />
              Submit
            </button>
          
          </div>
        </div>
      </section>
  </div>
  )
}
