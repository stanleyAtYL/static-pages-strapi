import { Grid, makeStyles, Typography } from '@material-ui/core';
const useStyles = makeStyles(() => ({
  title: {
    paddingTop: '100px',
    paddingBottom: '100px',
  },
  subtitle: {
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '170%',
    color: 'rgba(0, 0, 0, 0.4)',
  },
  contentSubtitle: {
    fontStyle: 'normal',
    fontSize: '24px',
    lineHeight: '150%',
    color: 'rgba(0, 0, 0, 0.7)',
  },
  contentTitle: {
    fontStyle: 'bold',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '150%',
    color: '#156EFA',
  },
  content: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '170%',
    color: 'rgba(0, 0, 0, 0.5)',
  },
}));

export const ElectronicCommunicationsPolicy = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container>
      <img
        src="/home/logos.png"
        style={{ position: 'absolute', zIndex: -1, width: '100%' }}
      />
      <Grid container item xs={12} justify="center" className={classes.title}>
        <Grid container justify="center">
          <Grid item xs={9}>
            <Typography variant="h2" align="center">
              Consent to Electronic Communications and Electronic Signatures
            </Typography>
          </Grid>
          {/* <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.subtitle}
            >
              Last updated: Jun 6, 2021
            </Typography>
          </Grid> */}
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={9}>
          <Typography variant="subtitle1" className={classes.contentSubtitle}>
            <p>
              As part of your relationship with Youland, we want to ensure you
              have all the information you need to support your interactions
              with us and effectively manage your account. Our goal is to
              communicate with you and process your application in the timeliest
              manner possible. We are required by law to give you certain
              information “in writing”, which means you are entitled to receive
              it on paper. To increase the efficiency and convenience of our
              interactions with you and our vendors, we use email and provide
              electronic documentation and disclosures on our website, with your
              prior consent. In order to continue with the Youland application,
              you must consent to electronic communications with us and
              receiving electronic disclosures from us. Your consent applies to
              this Youland product application and any future Youland
              applications by you. In addition, we need your general consent to
              use electronic records and signatures during our relationship with
              you.
            </p>
          </Typography>
        </Grid>

        <Grid item xs={9}>
          <Typography variant="subtitle1" className={classes.contentTitle}>
            <p>1. Definitions</p>
          </Typography>
          <Typography variant="subtitle1" className={classes.content}>
            <p>
              <ul>
                <li>
                  “Youland”, “we”, “us”, and “our” mean Youland Inc., a
                  California corporation and all its related, affiliated or
                  subsidiary companies
                </li>
                <li>
                  “You” and “your” means the person giving this consent who
                  submits an online application for a Youland product
                  (“Application”)
                </li>
                <li>
                  “Communication” means any information that we are required by
                  law to provide to you in writing in connection with your
                  Application, any information we may otherwise provide to you
                  relating to any Youland product that you obtain from us, or
                  any information that you sign or submit or agree to at our
                  request.
                </li>
                <li>“Website” means Youland.com and any subdomains thereof.</li>
              </ul>
            </p>
          </Typography>
        </Grid>

        <Grid item xs={9}>
          <Typography variant="subtitle1" className={classes.contentTitle}>
            <p>2. Method of Electronic Communication</p>
          </Typography>
          <Typography variant="subtitle1" className={classes.content}>
            <p>
              All Communications that we provide to you electronically will be
              provided either (i) on our Website or (ii) directly to any email
              address provided on your Application (or any email address you
              provide to us later). Youland may notify you through email when a
              Communication or updated agreement pertaining to our Website is
              available. Youland may also use our Website for electronic
              Communications. It is your responsibility to check our Website for
              Communications and updates to this policy.
            </p>
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="subtitle1" className={classes.contentTitle}>
            <p>3. Consent to Electronic Delivery</p>
          </Typography>
          <Typography variant="subtitle1" className={classes.content}>
            <p>
              By (i) checking the box next to “I have read and agree to
              Youland’s Credit Report Policy, Consent to Electronic
              Communications and Electronic Signatures, Terms of Use and Privacy
              Policy”, or (ii) clicking “I confirm”, “I agree”, or a similar
              button, you specifically agree to provide, receive and/or obtain
              any and all Youland-related Communications via our Website. This
              includes electronic communications related to your account from
              Youland’s third party servicers. You specifically consent to
              receive electronic mail (email) and online communications and
              disclosures regarding your account instead of by regular mail.
              Except as provided below, Communications will not be provided on
              paper. Your consent applies to all information we send to you or
              disclose or communicate to you online relating to your account or
              any Youland product. Your consent remains in effect until you give
              us notice you are withdrawing it.
            </p>
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="subtitle1" className={classes.contentTitle}>
            <p>4. Electronic Signatures</p>
          </Typography>
          <Typography variant="subtitle1" className={classes.content}>
            <p>
              <p>
                By (i) checking the box next to “I have read and agree to
                Youland’s Consent to Electronic Communications and Electronic
                Signatures, Terms of Use and Privacy Policy”, or (ii) clicking
                “I confirm”, “I agree”, or a similar button, you acknowledge
                that you have read, understand and agree to the following:
              </p>
              <p>
                <ul>
                  <li>
                    You are voluntarily choosing to sign your Youland documents
                    electronically;
                  </li>
                  <li>
                    You understand that the documents we present on this Website
                    will replace the use of paper documents;
                  </li>
                  <li>
                    You understand and agree that your electronic signature will
                    bind you to the terms and conditions to the same extent as
                    if you signed your Youland documents on paper with an ink
                    signature;
                  </li>
                  <li>
                    You understand and agree that no certification authority or
                    other third party verification is necessary to validate your
                    E-Signature and that the lack of such certification or third
                    party verification will not in any way affect the
                    enforceability of your E-Signature or any resulting contract
                    between you and Youland; and
                  </li>
                  <li>
                    You understand that you have the right to withhold your
                    consent to the use of electronic documents and signatures,
                    and that you have the right to withdraw your consent at any
                    time prior to completing the e-sign process. Please be
                    aware, however, that withdrawal of consent may result in the
                    termination of your access to use Youland products.
                  </li>
                </ul>
              </p>
              <p>
                Notwithstanding the foregoing, you acknowledge that there are
                some specific documents related to real estate transactions that
                must be signed on paper with an ink signature in front of a
                notary public. Youland will identify these documents to you in
                the event your Application is approved for a Youland product,
                and Youland will work with you to help arrange for notarization
                of such documents.
              </p>
            </p>
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="subtitle1" className={classes.contentTitle}>
            <p>5. Paper Copies</p>
          </Typography>
          <Typography variant="subtitle1" className={classes.content}>
            <p>
              You may request a paper copy of any Communication by contacting us
              via the “Contact Us” link. You acknowledge Youland reserves the
              right to charge you a reasonable fee for the production and
              mailing of paper versions of Communications, unless charging a fee
              is prohibited by applicable law.
            </p>
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="subtitle1" className={classes.contentTitle}>
            <p>6. Hardware and Software Requirements</p>
          </Typography>
          <Typography variant="subtitle1" className={classes.content}>
            <p>
              <p>
                By (i) checking the box next to “I have read and agree to
                Youland’s Credit Report Policy, Consent to Electronic
                Communications and Electronic Signatures, Terms of Use and
                Privacy Policy”, or (ii) clicking “I confirm”, “I agree”, or a
                similar button, you confirm that you have the following required
                hardware and software capabilities to access, view and retain
                electronic Communications:
              </p>
              <p>
                <ul>
                  <li>A valid working email account.</li>
                  <li>
                    Access to a computer, operating system and
                    telecommunications connections to the Internet capable of
                    receiving, uploading, accessing, displaying and either
                    printing or electronically storing Communications.
                  </li>
                  <li>
                    Your Internet browser must meet the following minimum
                    requirements: the current and previous major releases of
                    Chrome, Firefox, Internet Explorer, and Safari on a rolling
                    basis and support at least 256-bit encryption.
                  </li>
                  <li>
                    A PDF file reader, like the free Adobe® Acrobat Reader
                    (http://get.adobe.com/reader/).
                  </li>
                  <li>
                    Sufficient electronic storage capacity on your computer’s
                    hard drive or other data storage unit.
                  </li>
                </ul>
              </p>
              <p>
                We will notify you of any changes to these requirements that
                create a material risk that you may not be able to access or
                retain Communications electronically. Continuing to use the
                Website after receiving notice of the change is reaffirmation of
                your consent.
              </p>
            </p>
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="subtitle1" className={classes.contentTitle}>
            <p>7. Withdrawing Consent</p>
          </Typography>
          <Typography variant="subtitle1" className={classes.content}>
            <p>
              You are free to withdraw your consent to receive Communications
              electronically at any time by contacting us via the “Contact Us”
              link. If you withdraw your consent, the legal effectiveness,
              validity and/or enforceability of prior Communications will not be
              affected. Any withdrawal of your consent to receive Communications
              electronically will be effective only after we have a reasonable
              period of time to process your withdrawal. You acknowledge that
              Youland reserves the right to restrict or terminate your access to
              our Website if you withdraw your consent to receive electronic
              Communications.
            </p>
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="subtitle1" className={classes.contentTitle}>
            <p>8. Updating Your Contact Information</p>
          </Typography>
          <Typography variant="subtitle1" className={classes.content}>
            <p>
              You must promptly inform us of any change in your email address by
              signing into your online account and updating your email address
              or contacting us via the “Contact Us” link.
            </p>
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="subtitle1" className={classes.contentTitle}>
            <p>
              9. Acknowledging Your Ability to Access and Consenting to
              Electronic Communications and Electronic Signatures
            </p>
          </Typography>
          <Typography variant="subtitle1" className={classes.content}>
            <p>
              <p>
                By (i) checking the box next to “I have read and agree to
                Youland’s Credit Report Policy, Consent to Electronic
                Communications and Electronic Signatures, Terms of Use and
                Privacy Policy”, or (ii) clicking “I confirm”, “I agree”, or a
                similar button, you acknowledge that you can access
                Communications that are provided to you by the methods described
                above and agree to receive Communications electronically. You
                further confirm:
              </p>
              <p>
                <ul>
                  <li>You have the hardware and software described above;</li>
                  <li>
                    You can access and read this Consent to Electronic
                    Communications and Electronic Signatures;
                  </li>
                  <li>You have an active email;</li>
                  <li>
                    You can print this disclosure on paper, or save the
                    disclosure to a place where you can print it, for future
                    reference and access;
                  </li>
                  <li>
                    You consent to use and sign electronically an electronic
                    version of any Youland documents; and
                  </li>
                  <li>
                    You consent to the terms and conditions of this Electronic
                    Communications and Electronic Signatures Policy.
                  </li>
                </ul>
              </p>
              <p>
                We recommend that you print a copy of this Electronic
                Communications and Electronic Signatures Policy for your future
                records.
              </p>
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
