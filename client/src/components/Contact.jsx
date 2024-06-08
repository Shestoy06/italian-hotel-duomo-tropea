import React, {useEffect, useRef, useState} from 'react';
import {InstagramEmbed} from "react-social-media-embed";
import s from "./Main/Main.module.css";
import AnimationFadeIn from "./ui/AnimationFadeIn";
import {useMediaQuery} from "@mui/material";
import instPhoto1 from '../images/inst/photo1716729820 (2).jpeg'
import instPhoto2 from '../images/inst/photo1716729820 (3).jpeg'
import instPhoto3 from '../images/inst/photo1716729820 (4).jpeg'
import instPhoto4 from '../images/inst/photo1716729825 (3).jpeg'
import instPhoto5 from '../images/inst/photo1716729820 (6).jpeg'
import instPhoto6 from '../images/inst/photo1716729820 (7).jpeg'
import toast, {Toaster} from "react-hot-toast";

import Email from '../emails/email';
import {Resend} from "resend";
import UseViewportHeight from "../hooks/useViewportHeight";





const Contact = () => {

    const isDesktop = useMediaQuery('(min-width:780px)');
    const containerRef = useRef(null);
    const [imageSize, setImageSize] = useState(0);

    const vh = UseViewportHeight()

    useEffect(() => {
        if (containerRef.current) {
            // Calculate the size of the images as 30% of the container's width
            const width = containerRef.current.offsetWidth;
            if (isDesktop) {
                setImageSize((width - 30) * 0.3333);
            } else {
                setImageSize(width * 0.48);
            }
            console.log(width)

        }
    }, );

    if(isDesktop) {
        return (
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className={s.section}
                     style={{border: 'none', marginBottom: 40, flexDirection: 'column', paddingTop: 20, width: '100%'}}>
                    <span className={s.section_title}>Media</span>
                    <AnimationFadeIn>
                        <div className={s.section_content}>
                            Trovaci sui social media.
                        </div>
                    </AnimationFadeIn>
                    <div style={{display: 'flex', gap: 40}}>

                        <div ref={containerRef} style={{display: 'flex', width: '100%', }}>
                            <div>
                                <div style={{display: 'flex', flexWrap: 'wrap', gap: 10, position: 'relative'}}>
                                    <a href="https://www.instagram.com/p/C7PGHE4IdIy/?igsh=aXg5YzkxNnFwdm00">
                                        <img src={instPhoto1} className={s.gallery_photo} style={{
                                            width: imageSize,
                                            height: imageSize,
                                            objectFit: 'cover',
                                            aspectRatio: '1/1'
                                        }} alt=""/>
                                    </a>

                                    <a href="https://www.instagram.com/p/C7PGHE4IdIy/?igsh=aXg5YzkxNnFwdm00">
                                        <img src={instPhoto2} className={s.gallery_photo} style={{
                                            width: imageSize,
                                            height: imageSize,
                                            objectFit: 'cover',
                                            aspectRatio: '1/1'
                                        }} alt=""/>
                                    </a>
                                    <a href="https://www.instagram.com/p/C7PGHE4IdIy/?igsh=aXg5YzkxNnFwdm00">
                                        <img src={instPhoto3} className={s.gallery_photo} style={{
                                            width: imageSize,
                                            height: imageSize,
                                            objectFit: 'cover',
                                            aspectRatio: '1/1'
                                        }} alt=""/>
                                    </a>
                                    <a href="https://www.instagram.com/p/C7PGHE4IdIy/?igsh=aXg5YzkxNnFwdm00">
                                        <img src={instPhoto4} className={s.gallery_photo} style={{
                                            width: imageSize,
                                            height: imageSize,
                                            objectFit: 'cover',
                                            aspectRatio: '1/1'
                                        }} alt=""/>
                                    </a>
                                    <a href="https://www.instagram.com/p/C7PGHE4IdIy/?igsh=aXg5YzkxNnFwdm00">
                                        <img src={instPhoto5} className={s.gallery_photo} style={{
                                            width: imageSize,
                                            height: imageSize,
                                            objectFit: 'cover',
                                            aspectRatio: '1/1'
                                        }} alt=""/>
                                    </a>
                                    <a href="https://www.instagram.com/p/C7PGHE4IdIy/?igsh=aXg5YzkxNnFwdm00">
                                        <img src={instPhoto6} className={s.gallery_photo} style={{
                                            width: imageSize,
                                            height: imageSize,
                                            objectFit: 'cover',
                                            aspectRatio: '1/1'
                                        }} alt=""/>
                                    </a>
                                    <a href="https://www.instagram.com/p/C7PGHE4IdIy/?igsh=aXg5YzkxNnFwdm00"
                                       style={{
                                           position: 'absolute',
                                           left: '50%',
                                           bottom: 20,
                                           width: '200px',
                                           padding: '10px 20px',
                                           color: 'black',
                                           borderRadius: 40,
                                           border: '1px solid black'
                                       }}
                                       className={`button-insta button-gallery`}>

                                        Mostra di più
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/256/1384/1384063.png"
                                            style={{height: 24, width: 24, marginLeft: 5}} alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            flexDirection: 'column',
                            justifyContent: 'unset',
                            width: '40%',
                            alignItems: 'center'
                        }}>
                            <div style={{
                                border: '1px solid black',
                                padding: '40px 40px 80px',
                                borderRadius: 20,
                                backgroundColor: 'rgba(253,237,205,0.5)'
                            }}>
                                <span style={{alignSelf: 'flex-start', marginBottom: 20}}
                                      className={s.section_title}>Contact</span>
                                <AnimationFadeIn>
                                    <div style={{marginBottom: 20}}>
                                        Lascia la tua email per restare aggiornato su tutte le ultime novità.
                                    </div>
                                </AnimationFadeIn>
                                <ContactUs/>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }

    return (
        <div>
            <div className={s.section} style={{border: 'none', marginBottom: 40, flexDirection: 'column'}}>
                <span className={s.section_title}>Media</span>
                <AnimationFadeIn>
                    <div style={{marginBottom: 20}} >
                        Trovaci sui social media.
                    </div>
                </AnimationFadeIn>
                <div style={isDesktop ? {display: 'flex', width: '100%'} : {}}>
                    <div style={{marginBottom: 40}}>
                        <div  style={{display: 'flex', width: '100%'}}>
                            <div>
                                <div ref={containerRef} style={{display: 'flex', flexWrap: 'wrap', gap: 10, position: 'relative'}}>
                                    <img src={instPhoto1} style={{
                                        width: imageSize,
                                        height: imageSize,
                                        objectFit: 'cover',
                                        aspectRatio: '1/1'
                                    }} alt=""/>
                                    <img src={instPhoto2} style={{
                                        width: imageSize,
                                        height: imageSize,
                                        objectFit: 'cover',
                                        aspectRatio: '1/1'
                                    }} alt=""/>
                                    <img src={instPhoto3} style={{
                                        width: imageSize,
                                        height: imageSize,
                                        objectFit: 'cover',
                                        aspectRatio: '1/1'
                                    }} alt=""/>
                                    <img src={instPhoto4} style={{
                                        width: imageSize,
                                        height: imageSize,
                                        objectFit: 'cover',
                                        aspectRatio: '1/1'
                                    }} alt=""/>
                                    <img src={instPhoto5} style={{
                                        width: imageSize,
                                        height: imageSize,
                                        objectFit: 'cover',
                                        aspectRatio: '1/1'
                                    }} alt=""/>
                                    <img src={instPhoto6} style={{
                                        width: imageSize,
                                        height: imageSize,
                                        objectFit: 'cover',
                                        aspectRatio: '1/1'
                                    }} alt=""/>
                                    <a href="https://www.instagram.com/p/C7PGHE4IdIy/?igsh=aXg5YzkxNnFwdm00"
                                       style={{
                                           position: 'absolute',
                                           left: '50%',
                                           bottom: 20,
                                           transform: 'translate(-50%)',
                                           width: '200px',
                                           padding: '10px 20px',
                                           color: 'black',
                                           borderRadius: 40,
                                           border: '1px solid black'
                                       }}
                                       className={`button-insta `}>

                                        Mostra di più
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/256/1384/1384063.png"
                                            style={{height: 24, width: 24, marginLeft: 5}} alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        flexDirection: 'column',
                        justifyContent: 'unset',
                        width: '100%',
                        alignItems: 'center'
                    }}>
                        <div style={{
                            border: '1px solid black',
                            padding: '20px 20px 80px',
                            borderRadius: 20,
                            backgroundColor: 'rgba(253,237,205,0.5)'
                        }}>
                            <span style={{alignSelf: 'flex-start', marginBottom: 20}}
                                  className={s.section_title}>Contact</span>
                            <AnimationFadeIn>
                                <div style={{marginBottom: 20}}>
                                    Lascia la tua email per restare aggiornato su tutte le ultime novità.
                                </div>
                            </AnimationFadeIn>
                            <ContactUs/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export const ContactUs = () => {
    const form = useRef();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [surname, setSurname] = useState("")

    const min1000 = useMediaQuery('(min-width:1000px)');

    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/emails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, email, surname})
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setName('')
            setSurname('')
            setEmail('')
            toast.success('Lettera inviata!')
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    return (
        <form ref={form} onSubmit={(e) => sendEmail(e)} style={{width: '100%'}}>
            <div style={{marginBottom: 15, fontSize: min1000 ? 18 : 14}}>
                <label>Nome:</label>
            </div>
            <div style={{marginBottom: 20}}>
                <input type="text" value={name} style={{width: '100%'}} required={true} onChange={(e) => setName(e.target.value)}
                       className={s.input} name="from_name"/>
            </div>
            <div style={{marginBottom: 15, fontSize: min1000 ? 18 : 14}}>
                <label>Cognome:</label>
            </div>
            <div style={{marginBottom: 20}}>
                <input type="text" required={true} style={{width: '100%'}} value={surname} onChange={(e) => setSurname(e.target.value)}
                       className={s.input} name="email_to_answer"/>
            </div>
            <div style={{marginBottom: 15, fontSize: min1000 ? 18 : 14}}>
                <label>Email:</label>
            </div>
            <div style={{marginBottom: 40}}>
                <input type="email" required={true} style={{width: '100%'}} value={email} onChange={(e) => setEmail(e.target.value)}
                       className={s.input} name="email_to_answer"/>
            </div>
            <input value="Inviare" type={"submit"} className={'button-insta'} style={{width: '100%'}}/>
        </form>
    );
};



export default Contact;