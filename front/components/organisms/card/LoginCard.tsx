import { LoginForm } from '../../molecules/form/LoginForm'

export const LoginCard = () => {
    return (
        <>
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Login</h2>
            <LoginForm></LoginForm>
        </>
    );
}
