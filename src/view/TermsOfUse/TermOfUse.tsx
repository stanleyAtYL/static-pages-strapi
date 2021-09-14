
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

const TermOfUse = ():JSX.Element => {

    const classes = useStyles();

    return (
        <Grid container>
            <img src='/home/logos.png' style={{position:'absolute', zIndex:-1, width:'100%'}}/>
            <Grid container item xs={12} justify='center' className={classes.title}>
                <Grid container justify='center'>
                    <Grid item xs={12}>
                    <Typography variant='h2' align='center'>Terms of Use</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography variant='subtitle1' align='center' className={classes.subtitle}>Last updated: Jun 6, 2021</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify='center'>
                <Grid item xs={9}>
                    <Typography variant='subtitle1'className={classes.contentSubtitle}>
                    <p>These Terms of Use govern your use of this website. Please read these terms and conditions carefully before using this website. By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree to all of the terms, please immediately discontinue accessing this website.</p></Typography>
                </Grid>

                <Grid item xs={9}>
                    <Typography variant='subtitle1'className={classes.contentTitle}>
                    <p>Content</p>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.content}>
                    <p>This website is owned and operated by YouLand Inc. and may provide general information about our and/or our subsidiaries' products and services. Your eligibility for particular products and services is subject to our and/or our subsidiaries’ final determination, restrictions, and acceptance. We and/or our subsidiaries may discontinue or make changes to the information, products, licenses, or services described on this website at any time. Any dated information is published as of its publication date only. We and/or our subsidiaries do not undertake any obligation or responsibility to update or amend any such information. We and/or our subsidiaries reserve the right to terminate any or all offerings without prior notice. Furthermore, by offering information, products, or services via this website, no solicitation is made by us and/or our subsidiaries to any person to use such information, products, or services in jurisdictions where the provision of information, products, or services is prohibited by law.</p>
                    <p>This website may contain links to third-party websites, such as social media websites, which we and/or our subsidiaries do not own or control, but which are being providing for your convenience. If you visit a link to another website, you do so at your own risk subject to the terms and conditions established by the operator of that website. The fact that we and/or our subsidiaries provide a link to a website does not necessarily mean we and/or our subsidiaries endorse, authorize, or sponsor that third-party website, or that we are affiliated with the third-party website's owners or sponsors. We and our subsidiaries reserve the right to terminate a link to a third-party website at any time.</p>
                    <p>Although we and our subsidiaries try to provide accurate and timely information on this website, there may be inadvertent, technical, or factual inaccuracies and typographical errors. For these reasons we and our subsidiaries cannot warrant the accuracy, completeness, or timeliness of the information, text, graphics, links, or other items on this website.</p>
                    <p>This website's content, including but not limited to all music, images, icons, text, software, logos, expressions, and ideas, is copyrighted and protected by U.S. and worldwide copyright laws and treaty provisions. In addition, this website's content is protected by patent and trademark laws, the laws of privacy and publicity, and the various communication regulations and statutes. You are not authorized to post on or transmit to or from this website any unlawful, threatening, libelous, defamatory, obscene, scandalous, inflammatory, pornographic, immoral, or profane material, or any other content that could give rise to any civil or criminal liability under the law.
Any commercial use of this website or its content is prohibited. You may print a copy of the information contained on this website only for your personal use. This right may be revoked at any time.</p>
                    </Typography>
                </Grid>

                <Grid item xs={9}>
                    <Typography variant='subtitle1'className={classes.contentTitle}>
                    <p>Accessing the Website</p>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.content}>
                    <p>You agree and acknowledge that you have the sole responsibility and liability for your use of this website and for providing or obtaining, and for maintaining, all of the hardware, software, electrical power, telecommunications, Internet services, and other products or services necessary or desirable for you to access and use this website.</p>
                    <p>From time to time, due to the performance of maintenance, malfunctions or failures of software, equipment, or telecommunications devices, unusual transaction volume, or similar reasons, the website may not be available for your use. We minimize the periods of time during which website is unavailable. You agree that we and our subsidiaries shall not be responsible for any loss, damages, costs, or expenses which you may suffer or incur, directly or indirectly, as a result of the unavailability of the website, regardless of whether it could be shown that we could have prevented or reduced the duration of such unavailability by taking any action within our reasonable control. We and our subsidiaries shall also not be responsible for any loss, damages, costs, or expenses which you may suffer or incur, directly or indirectly, as a result of your inability to access the website caused directly or indirectly, in whole or in part, by your computer or mobile device, your inability to establish a connection to the Internet, your Internet Service Provider (“ISP”), or capacity or other limitations or constraints of the Internet.</p>
                    <p>We may at any time, with or without cause, and without prior notice to you deny you access to the website. We may terminate these Terms of Use and your access to the website in whole or in part at any time without prior notice to you. In the event we terminate this Terms of Use, any applications you have submitted will continue to be evaluated, and any existing transactions you have entered into with us shall remain in effect.</p>
                    <p>The website is not intended for use by persons in any jurisdiction or country where such use would be contrary to applicable laws or regulations. We may restrict your access to the website during times you are in a country for which use of the website would be prohibited. You are responsible for compliance with all local laws.</p>
                    <p>To protect the security of your information, we and/or our subsidiaries may require you to authenticate your identity (i.e., prove that you are who you say you are) to conduct certain transactions on this website. It is a good idea to protect your security by always closing your web browser after leaving the website. If you believe that information that you have submitted through the website has been used without your permission, you must tell us immediately. Telephoning us is the best way of keeping your possible losses to a minimum. Call us at 1-833-YOULAND to report unauthorized access. If you fail to notify us, you may be liable for all unauthorized activity on your account.</p>
                    <p>You can also contact us at 1-833-YOULAND regarding technical issues with this website.</p>
                    </Typography>
                </Grid>

                <Grid item xs={9}>
                    <Typography variant='subtitle1'className={classes.contentTitle}>
                    <p>SMS Consent</p>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.content}>
                    <p>Providing your telephone contact information to us means you have consented in writing to receive SMS communications (text messages) from us and our subsidiaries. When consenting to messaging notifications, you authorize YouLand Inc., our subsidiaries our assigns, successors or servicing agents to send SMS Notifications (as defined below) to any phone number provided to us, our assigns, successors or service agents in connection with your account, application, loan, and closing. As used in this text messaging disclosure, “SMS Account Notifications” means any SMS (text message) communications from us to you pertaining to your account or loan transaction sent to the phone number provided in connection with this transaction, including but not limited to application processing status, account information, loan information, information requests, document requests, due dates, delinquent accounts, closings and program updates.</p>
                    <p>How to Unsubscribe: You may withdraw your consent to receive SMS Account Notifications by replying with "STOP, END, CANCEL. UNSUBSCRIBE, or QUIT” or by calling us at 1-833-YOULAND at any time. We may treat your provision of an invalid mobile phone number, or the subsequent malfunction of a previously valid mobile phone number, as a withdrawal of your consent to receive SMS Account Notifications. Any withdrawal of your consent to use SMS Account Notifications will be effective only after we have a reasonable period of time to process your withdrawal.</p>
                    <p>To request additional information, contact us by telephone at 1-833-YOULAND. In order to access, view, and retain SMS Account Notifications that we make available to you, you must have: (i) a SMS-capable mobile phone, (ii) an active mobile phone account with a communication service provider; and (iii) sufficient storage capacity on your mobile phone.</p>
                    <p>All SMS Account Notifications in electronic format from us to you will be considered "in writing."</p>
                    <p>There is no service fee for SMS Account Notifications but you are responsible for any and all charges, including but not limited to fees associated with text messaging, imposed by your communications service provider. Please consult your mobile service carrier’s pricing plan to determine the charges for sending and receiving text messages. These charges will appear on your phone bill. Message frequency depends on account status or settings. We may modify or terminate our text messaging services from time to time, for any reason, and without notice, including the right to terminate text messaging with or without notice, without liability to you.</p>
                    </Typography>
                </Grid>

                <Grid item xs={9}>
                    <Typography variant='subtitle1'className={classes.contentTitle}>
                    <p>Your Information</p>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.content}>
                    <p>During the process of your mortgage application you may submit certain information to us. We do not claim ownership of the materials you provide (including feedback and suggestions), post, upload, input, or submit toYouLand  or any of its affiliated businesses (collectively “Your Information”). However, by posting, uploading, inputting, providing, or submitting Your Information, you are granting us, our affiliated companies, and any vendors necessary to the course of your transaction permission to use Your Information to fulfill your request for services. That permission includes allowing us to copy, distribute, transmit, publicly display (we will never publicly display your non-public personal information), reproduce, edit, translate, and reformat Your Information. Please note that specific terms and conditions provided on the web page describing a particular feature or offer, may supersede this provision.</p>
                    </Typography>
                </Grid>

                <Grid item xs={9}>
                    <Typography variant='subtitle1'className={classes.contentTitle}>
                    <p>Consent to Employment Verification</p>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.content}>
                    <p>By providing us with your employment information you are providing written consent permitting us and/or our subsidiaries to contact third parties as necessary to verify your income and employment.</p>
                    </Typography>
                </Grid>

                <Grid item xs={9}>
                    <Typography variant='subtitle1'className={classes.contentTitle}>
                    <p>Limitations of Liability</p>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.content}>
                    <p>UNDER NO CIRCUMSTANCES SHALL WE OR OUR SUBSIDIARIES BE LIABLE FOR ANY DIRECT OR INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES THAT MAY ARISE IN CONNECTION WITH THIS WEBSITE, OR FROM YOUR USE OF, OR INABILITY TO USE, THIS WEBSITE OR ANY INFORMATION PROVIDED ON THIS WEBSITE; OR IN CONNECTION WITH ANY FAILURE OF PERFORMANCE, ERROR, OMISSION, INTERRUPTION, DEFECT, DELAY IN OPERATION OR TRANSMISSION, COMPUTER VIRUS OR LINE OR SYSTEM FAILURE; OR DISCLOSURE OF INFORMATION WHEN REPLYING TO YOU BY E-MAIL OR OTHER ELECTRONIC MEANS OR RECEIVING E-MAILS FROM YOU; EVEN IF WE AND/OR OUR SUBSIDIARIES ARE ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, LOSSES, OR EXPENSES. Some jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages. In such jurisdictions, our liability is limited to the greatest extent permitted by law.</p>
                    <p>THIS WEBSITE CONTENT IS PROVIDED "AS IS" AND WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.</p>
                    <p>WE AND OUR SUBSIDIARIES ASSUME NO RESPONSIBILITY, AND SHALL NOT BE LIABLE FOR, ANY VIRUSES THAT MAY INFECT OR DAMAGE YOUR COMPUTER EQUIPMENT OR OTHER PROPERTY AS A RESULT OF YOUR ACCESS TO, USE OF, OR BROWSING OF THIS WEBSITE, THE WEB, OR YOUR DOWNLOADING OF ANY MATERIALS, DATA, TEXT, IMAGES, VIDEO, OR AUDIO FROM THIS WEBSITE OR THE WEB.</p>
                    <p>WE AND OUR SUBSIDIARIES DO NOT WARRANT NOR REPRESENT THAT YOUR USE OF MATERIALS DISPLAYED ON THIS WEBSITE WILL NOT INFRINGE RIGHTS OF THIRD PARTIES NOT OWNED OR AFFILIATED WITH US.</p>
                    <p>You agree to indemnify and hold us and/or our subsidiaries harmless from and against any and all claims, losses, expenses, demands, or liabilities, including attorneys' fees and costs, incurred by us in connection with any claim by a third party (including any intellectual property claim) arising out of your use of the website in violation of these Terms of Use or in violation of any applicable law. You further agree that you will cooperate fully in the defense of any such claims. We and our subsidiaries reserve the right, at our own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, and you shall not in any event settle any such claim or matter without our written consent.</p>
                    </Typography>
                </Grid>

                <Grid item xs={9}>
                    <Typography variant='subtitle1'className={classes.contentTitle}>
                    <p>Other Terms & Conditions</p>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.content}>
                    <p>These Terms of Use will be governed by the laws of the United States and the State of New York without giving effect to any conflict of laws to the contrary.</p>
                    <p>No failure, omission, or delay on our part to exercise any right under these Terms of Use will preclude any other further exercise of that right or other right under these Terms of Use.</p>
                    <p>If any terms in these Terms of Use change due to applicable law or are declared invalid by order of a court, the remaining terms of these Terms of Use will not be affected, and these Terms of Use will be interpreted as if the invalid terms had not been placed in these Terms of Use. The headings in these Terms of Use are intended only to help organize these Terms of Use.</p>
                    </Typography>
                </Grid>

                <Grid item xs={9}>
                    <Typography variant='subtitle1'className={classes.contentTitle}>
                    <p>Changes to these Terms of Use</p>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.content}>
                    <p>You agree that we may from time to time amend all or any part of these Terms of Use, including, without limitation, establishing, increasing, or decreasing the fees and charges for products and services made available through this website and changing the features and functionality to this website. We will notify you electronically of any change to these Terms of Use as required by applicable law. Your use of the website after the effective date of the change shall constitute your agreement to be bound by the terms of the change. You should also review these Terms of Use periodically for any changes.</p>
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

export default TermOfUse;