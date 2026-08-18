import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";


const LoginForm = () => {
    const auth = useAuth();

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({
        defaultValues: { email: '', password: '' },
    });

    const onSubmit = (data) => {
        const { email, password } = data;

        auth.login({ email, password }, () => {
            toast.error(t('Email or password error!'));
        });
    };


    const verifySubmit = (data) => {
        const submitData = {
            email: emailData,
            ...data
        }

        auth.handleVerifyOtp(submitData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} action="">
                <input type="text" {...register("email")} />
                <input type="password" {...register("password")} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm