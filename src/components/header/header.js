'use client'
import Link from 'next/link';
import Image from 'next/image';
import icon from '../../../public/images/icon.svg'
import icon2 from '../../../public/images/icon2.svg'
import icon3 from '../../../public/images/icon3.svg'
import icon4 from '../../../public/images/icon4.svg'
import icon5 from '../../../public/images/icon5.svg'
import logo from '../../../public/images/logo.svg'
import ModalWindow from '../modalWindow/page'
import minilogo from '../../../public/images/minilogo.svg'
import { useState } from 'react';

export default function Header() {
    const [modal, setModal] = useState(false)

    const openWindow = () => {
        setModal(true)
        console.log('work');

    }
    const closeWindow = () => {
        setModal(false)
        console.log('no');

    }
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="logo">
                        <Link href="/" className='logolink'>
                            <Image src={logo} />
                        </Link>
                    </div>
                    <div className="header-search">
                        <input type="search" placeholder='Search' />
                    </div>
                    <div className="icons">
                        <a><Image src={icon} /></a>
                        <a><Image src={icon2} /></a>
                        <a> <Image src={icon3} onClick={openWindow} /></a>
                        <a><Image src={icon4} /></a>
                        <a><Image src={icon5} /></a>
                        <a><Image src={minilogo} /></a>
                    </div>
                </div>
            </div>
            {modal && <ModalWindow close={closeWindow} />}

        </header >
    )
}