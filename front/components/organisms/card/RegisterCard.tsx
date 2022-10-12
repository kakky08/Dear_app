import { RegisterForm } from '../../molecules/form/RegisterForm'

export const RegisterCard = () => {
    return (
        <>
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Register</h2>
            <RegisterForm></RegisterForm>
        </>
    );
}
