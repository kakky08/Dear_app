import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { LoginCard } from '../components/organisms/card/LoginCard'
import { Layout } from '../components/template/Layout'
// import styles from '../styles/Home.module.css'

export default function Login() {
    return (
        <Layout>
            <LoginCard></LoginCard>
        </Layout>
    )
}
