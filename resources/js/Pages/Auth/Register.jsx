import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import HeaderBar from '@/Components/HeaderBar';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: 'student',
        school_id: '',
        course: 'BSCA',
        year: '1',
        position: 'Instructor',
        department: 'BSCS',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <><HeaderBar /><GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="role" value="Role" />
                    <select
                        id="role"
                        name="role"
                        value={data.role}
                        onChange={(e) => setData('role', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                    >
                        <option value="student">Student</option>
                        <option value="faculty">Faculty/Staff</option>
                        <option value="admin">Admin</option>
                    </select>
                    <InputError message={errors.role} className="mt-2" />
                </div>

                {data.role === 'student' && (
                    <>
                        <div className="mt-4">
                            <InputLabel htmlFor="school_id" value="School ID" />
                            <TextInput
                                id="school_id"
                                name="school_id"
                                placeholder="e.g., 2025-0001"
                                value={data.school_id || ''}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('school_id', e.target.value)}
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="course" value="Course" />
                            <select
                                id="course"
                                value={data.course || ''}
                                onChange={(e) => setData('course', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300"
                                required
                            >
                                <option value="BSCA">BS Computer Applications</option>
                                <option value="BSCS">BS Computer Studies</option>
                                <option value="BSIT">BS Information Technology</option>
                                <option value="BSIS">BS Information Systems</option>
                            </select>
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="year" value="Year Level" />
                            <select
                                id="year"
                                value={data.year || ''}
                                onChange={(e) => setData('year', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300"
                                required
                            >
                                <option value="1">1st Year</option>
                                <option value="2">2nd Year</option>
                                <option value="3">3rd Year</option>
                                <option value="4">4th Year</option>
                            </select>
                        </div>
                    </>
                )}

                {data.role === 'faculty' && (
                    <>
                        <div className="mt-4">
                            <InputLabel htmlFor="school_id" value="School ID" />
                            <TextInput
                                id="school_id"
                                name="school_id"
                                value={data.school_id || ''}
                                placeholder="e.g., 2025-0001"
                                className="mt-1 block w-full"
                                onChange={(e) => setData('school_id', e.target.value)}
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="position" value="Position" />
                            <select
                                id="position"
                                value={data.position || ''}
                                onChange={(e) => setData('position', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300"
                            >
                                <option value="Instructor">Instructor</option>
                                <option value="Professor">Professor</option>
                                <option value="Dean">Dean</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="department" value="Department" />
                            <select
                                id="department"
                                value={data.department || ''}
                                onChange={(e) => setData('department', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300"
                                required
                            >
                                <option value="BSCA">BS Computer Applications</option>
                                <option value="BSCS">BS Computer Studies</option>
                                <option value="BSIT">BS Information Technology</option>
                                <option value="BSIS">BS Information Systems</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </>
                )}

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2" />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route('login')}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout></>
    );
}
