
import {Grid, makeStyles, Typography} from '@material-ui/core';
const useStyles = makeStyles(() => ({
    title:{
        paddingTop:'100px',
        paddingBottom:'100px'
    },
    subtitle:{
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '170%',
        color: 'rgba(0, 0, 0, 0.4)',
    },
    contentSubtitle:{
        fontStyle: 'normal',
        fontSize: '24px',
        lineHeight: '150%',
        color: 'rgba(0, 0, 0, 0.7)'
    },
    contentTitle:{
        fontStyle: 'bold',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '150%',
        color: '#156EFA'
    },
    content:{
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '170%',
        color: 'rgba(0, 0, 0, 0.5)'
    }
}));

const PrivacyPolicy = ():JSX.Element => {

    const classes = useStyles();

    return (
        <Grid container>
            <img src='/home/logos.png' style={{position:'absolute', zIndex:-1, width:'100%'}}/>
            <Grid container item xs={12} justify='center' className={classes.title}>
                <Grid container justify='center'>
                    <Grid item xs={12}>
                    <Typography variant='h2' align='center'>Privacy Policy</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography variant='subtitle1' align='center' className={classes.subtitle}>Last updated: Jun 6, 2021</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify='center'>
                <Grid item xs={9}>
                    <Typography variant='subtitle1'className={classes.contentSubtitle}>
                    <p>Welcome to the website (the “Site”) of YouLand Corporation (the “Company”, “we”, “us” and/or “our”). This Site is operated by the Company and has been created to provide information about our company and our real estate lending and investing services, mobile applications, and related services (together with the Site, the “Services”) to our visitors (“you”, “your”, or "user"). This Privacy Policy sets forth the Company’s policy with respect to information including personally identifiable data (“Personal Data”) and other information that is collected from visitors to the Site and users of the Services. By using the Site or Services, you consent to the data practices set forth in this Privacy Policy.
                    </p></Typography>
                </Grid>

                <Grid item xs={9}>
                    <Typography variant='subtitle1'className={classes.contentTitle}>
                    <p>1. Information We Collect:</p>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.content}>
                    <p>When you interact with us through the Services, we may collect Personal Data and other information from you, as further described below:</p>
                    <p>Personal Data That You Provide Through the Services: We collect Personal Data from you when you voluntarily provide such information, such as when you contact us with inquiries, respond to one of our surveys, register for access to the Services, or use certain Services. Wherever the Company collects Personal Data, we make an effort to provide a link to this Privacy Policy.</p>
                    <p>YouLand uses Plaid Technologies, Inc. (“Plaid”) to gather End User’s data from financial institutions. By using our service, you grant Client and Plaid the right, power, and authority to act on your behalf to access and transmit your personal and financial information from the relevant financial institution. You agree to your personal and financial information being transferred, stored, and processed by Plaid in accordance with the Plaid Privacy Policy.</p>
                    <p>By voluntarily providing us with Personal Data, you are consenting to our use of it in accordance with this Privacy Policy. If you provide Personal Data to the Services, you acknowledge and agree that such Personal Data may be transferred from your current location to the offices and servers of the Company and the authorized third parties referred to herein located in the United States.</p>
                    </Typography>
                </Grid>


                <Grid item xs={9}>
                    <Typography variant='subtitle1'className={classes.contentTitle}>
                    <p>2. Other Information:</p>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.content}>
                    <p>Non-Identifiable Data: When you visit the Site or interact with the Company through the Services, we receive and store certain personally non-identifiable information. Such information, which is collected passively using various technologies, cannot presently be used to specifically identify you. The Company may store such information itself or such information may be included in databases owned and maintained by the Company’s affiliates, agents, or service providers. We may use such information and pool it with other information to track, for example, the total number of visitors to our Site, the number of visitors to each page of our Site, and the domain names of our visitors' internet service providers.</p>
                    <p>In operating the Services, we may use a technology called "cookies”. A cookie is a piece of information that the computer that hosts our Services gives to your browser when you access the Services. Our cookies help provide additional functionality to the Services and help us analyze Services usage more accurately. For instance, our Site may set a cookie on your browser that allows you to access the Services without needing to remember and then enter a password more than once during a visit to the Site. In all cases in which we use cookies, we will not collect Personal Data except with your permission. On most web browsers, you will find a “help” section on the toolbar. Please refer to this section for information on how to receive notification when you are receiving a new cookie and how to turn cookies off. We recommend that you leave cookies turned on because they allow you to take advantage of some of the Service features.</p></Typography>
                </Grid>

                <Grid item xs={9}>
                    <Typography variant='subtitle1'className={classes.contentTitle}>
                    <p>3. Aggregated Personal Data:</p>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.content}>
                    <p>In an ongoing effort to better understand and serve the users of the Services, the Company often conducts research on its customer demographics, interests, and behavior based on the Personal Data and other information provided to us. This research may be compiled and analyzed on an aggregate basis, and the Company may share this aggregate data with its affiliates, agents, and business partners. This aggregate information does not identify you personally. The Company may also disclose aggregated user statistics in order to describe our services to current and prospective business partners, and to other third parties for lawful purposes.</p></Typography>
                </Grid>

                <Grid item xs={9}>
                    <Typography variant='subtitle1'className={classes.contentTitle}>
                    <p>4. Our Use of Your Personal Data and Other Information:</p>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.content}>
                    <p>The Company uses the Personal Data you provide in a manner that is consistent with this Privacy Policy. If you provide Personal Data for a certain reason, we may use the Personal Data in connection with the reason for which it was provided. For instance, if you contact us by email, we will use the Personal Data you provide to answer your question or resolve your problem. Also, if you provide Personal Data in order to obtain access to the Services, we will use your Personal Data to provide you with access to such services and to monitor your use of such services. The Company and its subsidiaries and affiliates (the “Related Companies”) may also use your Personal Data and other personally non-identifiable information collected through the Services to help us improve the content and functionality of the Services, to better understand our users and to improve the Services. The Company and its affiliates may use this information to contact you in the future to tell you about services we believe will be of interest to you. If we do so, each marketing communication we send you will contain instructions permitting you to "opt-out" of receiving future marketing communications. In addition, if at any time you wish not to receive any future marketing communications or you wish to have your name deleted from our mailing lists, please contact us as indicated below.</p>
                    <p>If the Company intends on using any Personal Data in any manner that is not consistent with this Privacy Policy, you will be informed of such anticipated use prior to or at the time at which the Personal Data is collected.</p>
                    </Typography>
                </Grid>

                <Grid item xs={9}>
                    <Typography variant='subtitle1'className={classes.contentTitle}>
                    <p>5. Our Disclosure of Your Personal Data and Other Information:</p>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.content}>
                    <p>The Company is not in the business of selling your information. We consider this information to be a vital part of our relationship with you. There are, however, certain circumstances in which we may share your Personal Data with certain third parties without further notice to you, as set forth below:</p>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.content} style={{paddingLeft:'20px'}}>
                        <b>Business Transfers<br></br></b>
                        As we develop our business, we might sell or buy businesses or assets. In the event of a corporate sale, merger, reorganization, dissolution or similar event, your Personal Data may be part of the transferred assets.
                        <br></br>
                        <br></br>
                        <b>Related Companies<br></br></b>
                        We may also share your Personal Data with our Related Companies for purposes consistent with this Privacy Policy.
                        <br></br>
                        <br></br>
                        <b>Agents, Consultants and Related Third Parties<br></br></b>
                        The Company, like many businesses, sometimes hires other companies to perform certain business-related functions. Examples of such functions include mailing information, maintaining databases and processing payments. When we employ another entity to perform a function of this nature, we only provide them with the information that they need to perform their specific function.
                        <br></br>
                        <br></br>
                    </Typography>
                </Grid>

                <Grid item xs={9}>
                    <Typography variant='subtitle1'className={classes.contentTitle}>
                    <p>6. Legal Requirements:</p>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.content}>
                    <p>The Company may disclose your Personal Data if required to do so by law or in the good faith belief that such action is necessary to (i) comply with a legal obligation, (ii) protect and defend the rights or property of Company, (iii) act in urgent circumstances to protect the personal safety of users of the Services or the public, or (iv) protect against legal liability.</p>
                    </Typography>
                </Grid>

                <Grid item xs={9}>
                    <Typography variant='subtitle1'className={classes.contentTitle}>
                    <p>7. Your Choices:</p>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.content}>
                    <p>You can visit the Site without providing any Personal Data. If you choose not to provide any Personal Data, you may not be able to use certain Services.</p>
                    </Typography>
                </Grid>

                <Grid item xs={9}>
                    <Typography variant='subtitle1'className={classes.contentTitle}>
                    <p>8. Exclusions:</p>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.content}>
                    <p>This Privacy Policy does not apply to any Personal Data collected by the Company other than the Personal Data collected through the Services. This Privacy Policy shall not apply to any unsolicited information you provide to the Company through the Services or through any other means. This includes, but is not limited to, information posted to any public areas of the Services, such as forums, any ideas for new products or modifications to existing products, and other unsolicited submissions (collectively, “Unsolicited Information”). All Unsolicited Information shall be deemed to be non-confidential and Company shall be free to reproduce, use, disclose, and distribute such Unsolicited Information to others without limitation or attribution.</p>
                    </Typography>
                </Grid>

                <Grid item xs={9}>
                    <Typography variant='subtitle1'className={classes.contentTitle}>
                    <p>9. Children and Minors:</p>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.content}>
                    <p>The Company does not knowingly collect Personal Data from minors under the age of 18. If you are under the age of 18, please do not submit any Personal Data through the Services. We encourage parents and legal guardians to monitor their children’s Internet usage and to help enforce our Privacy Policy by instructing their children never to provide Personal Data on the Services without their permission. If you have reason to believe that a minor under the age of 18 has provided Personal Data to Company through the Services, please contact us, and we will endeavor to delete that information from our databases.</p>
                    </Typography>
                </Grid>

                <Grid item xs={9}>
                    <Typography variant='subtitle1'className={classes.contentTitle}>
                    <p>10. Links to Other Web Sites:</p>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.content}>
                    <p>This Privacy Policy applies only to the Services. The Services may contain links to other web sites not operated or controlled by the Company (the “Third Party Sites”). The policies and procedures we described here do not apply to the Third Party Sites. The links from the Services do not imply that the Company endorses or has reviewed the Third Party Sites. We suggest contacting those sites directly for information on their privacy policies.</p>
                    </Typography>
                </Grid>

                <Grid item xs={9}>
                    <Typography variant='subtitle1'className={classes.contentTitle}>
                    <p>11. Tracking Policies</p>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.content}>
                    <p>We collect Personal Data about your online activities over time and across different Web sites when you use our Site or Services or affiliated websites. We also allow third parties to collect Personal Data about your online activities over time and across different Web sites when you use our Site or Services.</p>
                    </Typography>
                </Grid>

                <Grid item xs={9}>
                    <Typography variant='subtitle1'className={classes.contentTitle}>
                    <p>12. Security:</p>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.content}>
                    <p>The Company takes reasonable steps to protect the Personal Data provided via the Services from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. However, no Internet or email transmission is ever fully secure or error free. In particular, email sent to or from the Services may not be secure. Therefore, you should take special care in deciding what information you send to us via email. Please keep this in mind when disclosing any Personal Data to the Company via the Internet.</p>
                    </Typography>
                </Grid>

                <Grid item xs={9}>
                    <Typography variant='subtitle1'className={classes.contentTitle}>
                    <p>13. Other Terms and Conditions:</p>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.content}>
                    <p>Your access to and use of the Services is subject to the Terms of Service at www.youland.com</p>
                    </Typography>
                </Grid>

                <Grid item xs={9}>
                    <Typography variant='subtitle1'className={classes.contentTitle}>
                    <p>14. Changes to the Company’s Privacy Policy:</p>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.content}>
                    <p>The Services and our business may change from time to time. As a result, at times it may be necessary for the Company to make changes to this Privacy Policy. The Company reserves the right to update or modify this Privacy Policy at any time and from time to time without prior notice. Please review this policy periodically, and especially before you provide any Personal Data. This Privacy Policy was last updated on the date indicated below. Your continued use of the Services after any changes or revisions to this Privacy Policy shall indicate your agreement with the terms of such revised Privacy Policy.</p>
                    </Typography>
                </Grid>


                <Grid item xs={9}>
                    <Typography variant='subtitle1'className={classes.contentTitle}>
                    <p>15. Access to Information; Contacting the Company:</p>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.content}>
                    <p>To keep your Personal Data accurate, current, and complete, please contact us as specified below. We will take reasonable steps to update or correct Personal Data in our possession that you have previously submitted via the Services. Please also feel free to contact us if you have any questions about the Company’s Privacy Policy or the information practices of the Services. You may contact us as follows: contact@youland.com</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    </Typography>
                </Grid>

                

                

            </Grid>
            
        </Grid>
    )
}

export default PrivacyPolicy;