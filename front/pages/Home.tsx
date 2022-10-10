import { LoginCard } from '../components/organisms/card/LoginCard'
import { SecondaryLayout } from '../components/template/SecondaryLayout'

export default function Home() {
    return (
        <SecondaryLayout
            menu='Log out'
            link='/Login'
        >
            <LoginCard></LoginCard>
        </SecondaryLayout>
    )
}
