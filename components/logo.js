import Image from 'next/image'
import Link from 'next/link'

export default function Logo(props){
        if (props.home){
            return(
                <Image
                priority
                src="/images/logo.png"
                height={50}
                width={50}
                alt="logo"
                />
            )
        }
        else {
            return(
                <Link href="/">
                <Image
                priority
                src="/images/logo.png"
                height={50}
                width={50}
                alt="logo"
                />
                </Link>
            )
        }
}