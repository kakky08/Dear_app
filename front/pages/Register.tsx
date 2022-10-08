import { RegisterCard } from '../components/organisms/card/RegisterCard'
import { Layout } from '../components/template/Layout'

export default function Login() {
    return (
        <Layout
            menu='Login'
            link='/Login'
        >
            <RegisterCard></RegisterCard>
        </Layout>
    )
}
