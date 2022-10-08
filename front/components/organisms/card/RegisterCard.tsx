import { RegisterForm } from '../../molecules/form/RegisterForm'

export const RegisterCard = () => {
    return (
        <>
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">Register</h2>
            <RegisterForm></RegisterForm>
        </>
    );
}
