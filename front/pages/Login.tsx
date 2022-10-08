import { LoginCard } from '../components/organisms/card/LoginCard'
import { Layout } from '../components/template/Layout'

export default function Login() {
    return (
        <Layout
            menu='Register'
            link='/Register'
        >
            <LoginCard></LoginCard>
        </Layout>
    )
}
