import { useContext } from "react";
import { MailContext } from "src/contexts/MailContext";
import { Controller, useForm } from "react-hook-form";
import { BiSend } from 'react-icons/bi'
import { Logo } from "../Lazy/LazyImage";
import { ProductList } from "src/utils/ProductList";
import { DropDown } from "../Select";
import PhoneInput from "react-phone-input-2";
import { isValidPhoneNumber } from 'libphonenumber-js';
import { DateTimePicker } from "@mui/x-date-pickers";
import { toast } from "react-toastify"
import 'react-phone-input-2/lib/style.css'

export const Inquire = () => {
  const { send, sendLoading } = useContext(MailContext)
  const {
    handleSubmit,
    control,
    setValue,
    formState : { errors }
  } = useForm({
    defaultValues: {
      name: '',
      address: '',
      mobile: '',
      email: '',
      service: '',
      tor: null
    },
  });

  const onSubmit = (data) => {
    if(isValidPhoneNumber(`+${data.mobile}`)) {
      send({
        name: data.name,
        address: data.address,
        mobile: `+${data.mobile}`,
        email: data.email,
        service: data.service,
        tor: String(data.tor.$d)
      })
      setValue("name", "")
      setValue("address", "")
      setValue("mobile", "")
      setValue("email", "")
      setValue("service", "")
      setValue("tor", null)
      
    } else {
      toast("Invalid phone number", { type: "warning" })
    }
  }


  return (
    <div className="inquire_main flex min-h-screen bg-gray-100 flex-col items-center justify-center mx-4">
      <section className="bg-gray-50 xs:w-full sm:w-full md:w-4/5 lg:w-1/2 xl:w-1/2 rounded-lg shadow-lg flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 my-12">
        <Logo height={200} width={200} />        
        <h1 className="mt-5 font-bold text-2xl">Personal Information</h1>
        <div className="form_container w-full p-6 space-y-4 md:space-y-6 sm:p-8">
          <div className="form space-y-4 md:space-y-6">


            <div className="service_textfield">
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                      pattern : /[\S\s]+[\S]+/
                    }}
                    render={({ field: { onChange, value } }) => (
                      // <input 
                      //   value={value}
                      //   onChange={onChange}
                      //   type="service" 
                      //   name="service" id="service" 
                      //   placeholder="Service" 
                      //   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                      // />
                      <DropDown 
                        value={value}
                        onChange={onChange}
                        ariaPlaceHolder={"Choose services"}
                        label={"Product w/ Package"}
                        required={true}
                        data={ProductList}
                      />
                      
                    )}
                    name="service"
                  />
                  { errors.service && <p className="text-red-400 indent-2 text-sm">service invalid*</p> }
            </div>

            <div className="mobile_textfield">
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    pattern : /[\S\s]+[\S]+/
                  }}
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      containerClass="w-full"
                      onlyCountries={['ph']}
                      placeholder="Mobile number"
                      country={'ph'}
                      value={value}
                      onChange={onChange}
                      inputStyle={{ width: '100%' }}
                      inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: true
                      }}     
                    />
                    
                  )}
                  name="mobile"
                />
                { errors.mobile && <p className="text-red-400 indent-2 text-sm">mobile invalid*</p> }

            </div>

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
                      placeholder="Full name" 
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
                      placeholder="Address" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                    />
                    
                  )}
                  name="address"
                />
                { errors.address && <p className="text-red-400 indent-2 text-sm">address invalid*</p> }

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
                  placeholder="Email" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                />
                )}
                name="email"
              />
                  { errors.email && <p className="text-red-400 indent-2 text-sm">email invalid*</p> }
            </div>

            <div className="tor_field">
              <Controller 
                control={control}
                rules={{
                  required: true,
                }}
                render={( { field: { onChange, value } }) => (
                  <DateTimePicker
                    className="w-full"
                    label="Time of Reservation"
                    value={value}
                    onChange={onChange}
                  />
                )}
                name="tor"
              />
                  { errors.tor && <p className="text-red-400 indent-2 text-sm">Time of reservation invalid*</p> }
            </div>


            <button 
              disabled={sendLoading}
              onClick={handleSubmit((data) => onSubmit(data))}
              type="button" 
              className="w-full text-gray-900 bg-white flex justify-center items-center gap-4 cursor-pointer hover:bg-gray-300 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-4"
            >
              <BiSend width={50} height={50} />
              {sendLoading ? 'processing...' : 'submit'}
            </button>
          
          </div>
        </div>
      </section>
  </div>
  )
}
