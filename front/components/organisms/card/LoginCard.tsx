import { LoginForm } from '../../molecules/form/LoginForm'

export const LoginCard = () => {
    return (
        <>
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">Login</h2>
            <LoginForm></LoginForm>
        </>
    );
}
