import styles from './Login.module.css'
import Image from 'next/image'
import Logo from '../../public/store.png'
import Head from 'next/head'
import Google from '../../components/Icons/Google'
import GitHub from '../../components/Icons/GitHub'
import { loginWithGitHub, loginWithGoogle } from "../../firebase/client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useUser, { USER_STATES } from "../../hooks/useUser";

export default function Login() {
    const user = useUser();
    const router = useRouter();

    useEffect(() => {
        user && router.replace("/");
    }, [user, router]);

    const handleClickGoogle = () => {
        loginWithGoogle()
    }

    const handleClickGitHub = () => {
        loginWithGitHub()
    }

    return (
        <>
            <Head>
                <title>Chukwudi | Login</title>
                <link rel="icon" href="/store.ico" />
            </Head>

            <div className={styles.container}>
                <div className={styles.content}>
                    <Image src={Logo} alt="" width={200} height={200} />
                    <h1 className={styles.title}>Chukwudi</h1>
                    <p className={styles.description}>Tecnic test to IMAGINAMOS S.A.S</p>
                    {
                        user === USER_STATES.NOT_LOGGED &&
                        <>
                            <button className={styles.Google} onClick={handleClickGoogle}>Login with Google<Google /></button>
                            <button className={styles.GitHub} onClick={handleClickGitHub}>Login with GitHub<GitHub /></button>
                        </>
                    }
                    {user === USER_STATES.NOT_KNOWN && <span>Loading...</span>}
                </div>
            </div>
        </>
    )
}