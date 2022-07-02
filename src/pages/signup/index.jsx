import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";

const SignUp = () => {

    const { register, handleSubmit, watch, control, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log('data', data);
    }
    const genderOptions = [
        { value: 0, label: 'Male' },
        { value: 1, label: 'Female' },
    ]
    const hobbiesOptions = [
        { value: 0, label: 'Reading' },
        { value: 1, label: 'Swimming' },
        { value: 2, label: 'Coding' },
        { value: 3, label: 'Gaming' }

    ]

    console.log(errors);

    return (
        <div className="container  px-3 py-1">

            {/* FORM START */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* USER NAME INPUT START */}
                <div className="username-wrapper my-3">
                    <input name="username" placeholder="username" className="form-control" type="text" {...register("username", { required: true, maxLength: 20 })} />
                    {
                        (errors.username && errors.username.type === 'required')
                        &&
                        <p className="text-danger">Please enter your username</p>
                    }
                    {
                        (errors.username && errors.username.type === 'maxLength')
                        &&
                        <p className="text-danger">Username must be less than 20 chars</p>
                    }
                </div>
                {/* USER NAME INPUT END */}




                {/* EMAIL INPUT START */}
                <div className="email-wrapper my-3">
                    <input name="email" placeholder="email" className="form-control" type="text" {...register("email", {
                        required: true,
                        pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                    })}
                    />

                    {
                        (errors.email && errors.email.type === 'required')
                        &&
                        <p className="text-danger">Please enter your email</p>
                    }
                    {
                        (errors.email && errors.email.type === 'pattern')
                        &&
                        <p className="text-danger">Please enter a valid email: example@gmail.com </p>
                    }
                </div>
                {/* EMAIL INPUT END */}

                {/* PASSWORD INPUT START */}
                <div className="password-wrapper my-3">
                    <input name="password" placeholder="password" className="form-control" type="password" {...register("password", { required: true })} />
                    {
                        (errors.password && errors.password.type === 'required')
                        &&
                        <p className="text-danger">Please enter your password</p>
                    }
                </div>
                {/* PASSWORD INPUT END */}



                {/* CONFIRM_PASSWORD INPUT START */}
                <div className="confirmpassword-wrapper my-3">
                    <input name="confirmpassword" placeholder="confirm password" className="form-control" type="password" {...register("confirmpassword", {
                        required: true,
                        validate: (val) => {
                            if (watch('password') !== val) {
                                return "Your passwords do no match";
                            }
                        }
                    })} />

                    {
                        (errors.confirmpassword && errors.confirmpassword.type === 'required')
                        &&
                        <p className="text-danger">Please confirm your password</p>
                    }
                    {
                        (errors.confirmpassword && errors.confirmpassword.type === 'validate')
                        &&
                        <p className="text-danger">Password doesnt match</p>
                    }
                </div>
                {/* CONFIRM_PASSWORD INPUT END */}


                {/* GENDER INPUT START */}
                <div className="gender-wrapper my-3">

                    <Controller
                        name="gender"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <ReactSelect
                            {...field}
                            options={genderOptions}
                            placeholder='gender'
                        />}
                    />

                    {
                        (errors.gender && errors.gender.type === 'required')
                        &&
                        <p className="text-danger">required</p>
                    }
                </div>
                {/* GENDER INPUT END */}

                {/* HOBBIES INPUT START */}
                <div className="hobbies-wrapper my-3">

                    <Controller
                        name="hobbies"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <ReactSelect
                            {...field}
                            options={hobbiesOptions}
                            placeholder='hobbies'
                            isMulti
                            isSearchable
                        />}
                    />

                    {
                        (errors.hobbies && errors.hobbies.type === 'required')
                        &&
                        <p className="text-danger">required</p>
                    }
                </div>
                {/* HOBBIES INPUT END */}

                <button className="btn btn-primary btn-lg" type="submit">Submit</button>
            </form>


        </div>
    );
}

export default SignUp