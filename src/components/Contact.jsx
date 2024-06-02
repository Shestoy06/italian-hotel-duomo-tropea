import React from 'react';
import {InstagramEmbed} from "react-social-media-embed";
import s from "./Main/Main.module.css";
import AnimationFadeIn from "./ui/AnimationFadeIn";


const Contact = () => {
    return (
        <div>
            <div className={s.section} style={{border: 'none', marginBottom: 40}}>
                <span className={s.section_title}>Media</span>
                <AnimationFadeIn>
                    <div>
                        Trovaci sui social media.
                    </div>
                </AnimationFadeIn>
                <div style={{display: 'flex', justifyContent: 'center', height: 460, borderRadius: 20}}>
                    <InstagramEmbed url="https://www.instagram.com/p/C7PGHE4IdIy/?igsh=aXg5YzkxNnFwdm00"
                                    width={'100%'}/>
                </div>


                <div style={{
                    display: 'flex',
                    height: 40,
                    flexGrow: 1,
                    gap: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <a href="https://www.instagram.com/p/C7PGHE4IdIy/?igsh=aXg5YzkxNnFwdm00"
                       style={{height: '100%'}}
                       className={`button-booking button-insta`}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/256/1384/1384063.png"
                            style={{height: 24, width: 24}} alt=""/>
                    </a>
                    <a href="https://www.booking.com/hotel/it/residenza-il-duomo.it.html?aid=318615&label=New_English_EN_FR_21457884145-eZyGpUGIc30QQgiK8gzijQS640819035024%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55454946675%3Atidsa-303472602395%3Alp9055338%3Ali%3Adec%3Adm%3Aag21457884145%3Acmp339900145&sid=797b34089b6a504fcbc05cf31750c8e8&dest_id=-131408&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1717357720&srpvid=5fe48b49a80200b8&type=total&ucfs=1&lang=it&soz=1&lang_changed=1"
                       className={`button-booking`} style={{padding: 0,  height: '100%'}}>
                        <img src="https://seekvectors.com/files/download/booking.com-logo.png"
                             style={{height: 20, width: 20, padding: 0}} alt=""/>
                    </a>
                    <a href="https://maps.app.goo.gl/qwkKkrn11mSbkzrZ8"
                       style={{height: '100%'}}
                       className={`button-booking button-maps`}>
                        <img
                            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-map-icon.png"
                            style={{height: 24, width: 24}} alt=""/>
                    </a>
                </div>

            </div>
        </div>


    );
};

export default Contact;