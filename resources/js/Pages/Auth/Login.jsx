import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import HeaderBar from '@/Components/HeaderBar';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <><HeaderBar /><GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)} />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)} />

                    <InputError message={errors.password} className="mt-2" />
                </div>

               <div className="mt-4 flex items-center justify-between">
    <label className="flex items-center">
        <Checkbox
            name="remember"
            checked={data.remember}
            onChange={(e) => setData('remember', e.target.checked)} />
        <span className="ms-2 text-sm text-gray-600">
            Remember me
        </span>
    </label>
    
</div>

<div className="mt-4 flex flex-col items-center space-y-4">
    <PrimaryButton disabled={processing}>
        Log in
    </PrimaryButton>
    
    {canResetPassword && (
        <Link
            href={route('password.request')}
            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
            Forgot your password?
        </Link>
    )}
    <div className="text-center">
        <span className="text-sm text-gray-600">Not yet Registered? </span>
        <Link
            href={route('register')}
          className="rounded-md px-3 py-2 font-bold text-[#40d3c8] ring-1 ring-transparent transition hover:text-[#40d3c8] focus:outline-none focus-visible:ring-[#FF2D20] dark:hover:text-[#40d3c8]/80 dark:focus-visible:ring-white"
        >
            Register
        </Link>
    </div>

          </div>
            </form>
        </GuestLayout></>
       
    );
}
