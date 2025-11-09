import { Callout } from '@/components/common/callout/callout'
import { Heading } from '@/components/common/heading/heading'
import { Text } from '@/components/common/text/text'
import { Typography } from '@/components/common/typography/typography'
import { Container } from '@/components/layout/container/container'
import { Section } from '@/components/layout/section/section'
import { Stack } from '@/components/layout/stack/stack'

export function PrivacyPolicy() {
  return (
    <Section>
      <Container size="base">
        <Stack space="large">
          <header>
            <Stack space="small">
              <Heading level={1} size="2xl">
                Privacy Policy
              </Heading>
              <Text color="tertiary" variant="caption">
                Last updated: November 2026
              </Text>
            </Stack>
          </header>

          <Typography>
            <Stack dividers space="medium">
              <section>
                <h2>1. Introduction</h2>
                <p>
                  This privacy policy explains how Crafity ("we", "us", "our")
                  collects, uses, and protects your personal data when you visit
                  our website and use our services. We are committed to
                  protecting your privacy and complying with the General Data
                  Protection Regulation (GDPR) and other applicable privacy
                  laws.
                </p>

                <Callout title="Contact details:">
                  <ul>
                    <li>Company: Crafity</li>
                    <li>Country: The Netherlands</li>
                    <li>Email: info@crafity.com</li>
                  </ul>
                </Callout>
              </section>

              <section>
                <h2>2. Data We Collect and How We Use It</h2>

                <h3>2.1 Contact Form</h3>
                <p>
                  When you submit our contact form, we collect the following
                  information:
                </p>
                <ul>
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Company name</li>
                  <li>Phone number</li>
                  <li>Message content</li>
                </ul>

                <p>
                  <strong>Purpose:</strong> To respond to your inquiry and
                  provide information about our services.
                </p>
                <p>
                  <strong>Legal basis:</strong> Legitimate interest (Article
                  6(1)(f) GDPR) - we need this information to respond to your
                  request.
                </p>
                <p>
                  <strong>Retention period:</strong> We retain emails from our
                  contact form indefinitely unless you request deletion. This
                  allows us to maintain a history of our business
                  communications. You can request deletion of your data at any
                  time.
                </p>
                <p>
                  <strong>Processing:</strong> When you submit the form, your
                  information is sent via email to our business email address
                  hosted by Google Workspace. No data is stored in a database on
                  our website.
                </p>

                <h3>2.2 Google Analytics (Optional)</h3>
                <p>
                  We use Google Analytics 4 to understand how visitors use our
                  website. This helps us improve our website and services.
                </p>

                <p>
                  <strong>
                    Data collected by Google Analytics may include:
                  </strong>
                </p>
                <ul>
                  <li>Pages visited</li>
                  <li>Time spent on pages</li>
                  <li>Browser type and version</li>
                  <li>Device type</li>
                  <li>General location (country/city level)</li>
                  <li>Referral source</li>
                </ul>

                <p>
                  <strong>Important:</strong> Google Analytics 4 automatically
                  anonymizes IP addresses and does not store full IP addresses.
                </p>
                <p>
                  <strong>Legal basis:</strong> Consent (Article 6(1)(a) GDPR) -
                  we only activate Google Analytics after you accept cookies via
                  our cookie banner.
                </p>
                <p>
                  <strong>Your choice:</strong> You can decline Google Analytics
                  tracking via our cookie banner. This will not affect your
                  ability to use our website.
                </p>
                <p>
                  <strong>Data sharing:</strong> Google Analytics data is
                  processed by Google LLC. While Google may process data outside
                  the EU, they provide appropriate safeguards through their
                  EU-US Data Privacy Framework certification and Standard
                  Contractual Clauses.
                </p>

                <h3>2.3 Server Logs</h3>
                <p>
                  Our hosting provider (Vercel) automatically collects technical
                  information when you visit our website:
                </p>
                <ul>
                  <li>IP addresses</li>
                  <li>Browser type</li>
                  <li>Access times</li>
                  <li>Pages requested</li>
                </ul>

                <p>
                  <strong>Purpose:</strong> Website security, performance
                  monitoring, and troubleshooting.
                </p>
                <p>
                  <strong>Legal basis:</strong> Legitimate interest (Article
                  6(1)(f) GDPR) - necessary for the operation and security of
                  our website.
                </p>
                <p>
                  <strong>Retention period:</strong> Server logs are retained
                  according to Vercel's standard retention policies.
                </p>
              </section>

              <section>
                <h2>3. Data Processors</h2>
                <p>
                  We work with the following third-party processors who handle
                  your data on our behalf:
                </p>

                <h3>Google Workspace (Google LLC)</h3>
                <ul>
                  <li>
                    <strong>Purpose:</strong> Email hosting and communication
                  </li>
                  <li>
                    <strong>Location:</strong> Data may be processed in multiple
                    locations, including outside the EU
                  </li>
                  <li>
                    <strong>Safeguards:</strong> Standard Contractual Clauses,
                    EU-US Data Privacy Framework
                  </li>
                </ul>

                <h3>Google Analytics (Google LLC)</h3>
                <ul>
                  <li>
                    <strong>Purpose:</strong> Website analytics (optional,
                    requires consent)
                  </li>
                  <li>
                    <strong>Location:</strong> Data may be processed in multiple
                    locations, including outside the EU
                  </li>
                  <li>
                    <strong>Safeguards:</strong> Standard Contractual Clauses,
                    EU-US Data Privacy Framework
                  </li>
                </ul>

                <h3>Vercel Inc.</h3>
                <ul>
                  <li>
                    <strong>Purpose:</strong> Website hosting
                  </li>
                  <li>
                    <strong>Location:</strong> Our website is hosted in
                    Frankfurt, Germany (EU)
                  </li>
                  <li>
                    <strong>Safeguards:</strong> Vercel complies with GDPR
                    requirements
                  </li>
                </ul>
              </section>

              <section>
                <h2>4. Cookies</h2>
                <p>
                  We use cookies only with your consent via our cookie banner.
                </p>

                <p>
                  <strong>Types of cookies we use:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Analytics cookies (Google Analytics):</strong> Only
                    placed after you consent via the cookie banner
                  </li>
                  <li>
                    <strong>Consent cookies:</strong> To remember your cookie
                    preferences
                  </li>
                </ul>

                <p>
                  You can change your cookie preferences at any time by clicking
                  the cookie settings link in our footer or clearing your
                  browser cookies.
                </p>
              </section>

              <section>
                <h2>5. Your Rights Under GDPR</h2>
                <p>As a data subject, you have the following rights:</p>
                <ul>
                  <li>
                    <strong>Right of access:</strong> You can request a copy of
                    the personal data we hold about you
                  </li>
                  <li>
                    <strong>Right to rectification:</strong> You can ask us to
                    correct inaccurate data
                  </li>
                  <li>
                    <strong>Right to erasure ("right to be forgotten"):</strong>{' '}
                    You can request deletion of your data
                  </li>
                  <li>
                    <strong>Right to restriction:</strong> You can ask us to
                    limit how we use your data
                  </li>
                  <li>
                    <strong>Right to data portability:</strong> You can request
                    your data in a structured, commonly used format
                  </li>
                  <li>
                    <strong>Right to object:</strong> You can object to
                    processing based on legitimate interests
                  </li>
                  <li>
                    <strong>Right to withdraw consent:</strong> You can withdraw
                    consent for cookies at any time
                  </li>
                </ul>

                <p>
                  To exercise any of these rights, please contact us at{' '}
                  <a href="mailto:info@crafity.com">info@crafity.com</a>.
                </p>
                <p>We will respond to your request within one month.</p>
              </section>

              <section>
                <h2>6. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal data against unauthorized access,
                  alteration, disclosure, or destruction. This includes:
                </p>
                <ul>
                  <li>Secure HTTPS connections for our website</li>
                  <li>Encrypted email communication via Google Workspace</li>
                  <li>
                    Hosting with a reputable EU-based data center (Frankfurt)
                  </li>
                  <li>Regular security updates and monitoring</li>
                </ul>
              </section>

              <section>
                <h2>7. Data Retention</h2>
                <ul>
                  <li>
                    <strong>Contact form emails:</strong> Retained indefinitely
                    unless you request deletion
                  </li>
                  <li>
                    <strong>Google Analytics data:</strong> Retained according
                    to Google Analytics settings (typically 14-26 months)
                  </li>
                  <li>
                    <strong>Server logs:</strong> Retained according to Vercel's
                    standard retention policy
                  </li>
                </ul>
              </section>

              <section>
                <h2>8. Third-Party Links</h2>
                <p>
                  Our website may contain links to external websites. We are not
                  responsible for the privacy practices of these third-party
                  sites. We encourage you to read their privacy policies.
                </p>
              </section>

              <section>
                <h2>9. Children's Privacy</h2>
                <p>
                  Our services are not directed at children under 16 years of
                  age. We do not knowingly collect personal data from children.
                  If you believe we have collected data from a child, please
                  contact us immediately.
                </p>
              </section>

              <section>
                <h2>10. Changes to This Privacy Policy</h2>
                <p>
                  We may update this privacy policy from time to time. The "Last
                  updated" date at the top of this page indicates when the
                  policy was last revised. We encourage you to review this
                  policy periodically.
                </p>
              </section>

              <section>
                <h2>11. Complaints</h2>
                <p>
                  If you believe we have not handled your personal data
                  properly, you have the right to lodge a complaint with the
                  Dutch Data Protection Authority (Autoriteit Persoonsgegevens):
                </p>

                <Callout title="Autoriteit Persoonsgegevens">
                  <ul>
                    <li>
                      Website:{' '}
                      <a
                        href="https://autoriteitpersoonsgegevens.nl"
                        rel="noopener noreferrer"
                        target="_blank">
                        https://autoriteitpersoonsgegevens.nl
                      </a>
                    </li>
                    <li>Phone: (+31) - (0)70 - 888 85 00</li>
                  </ul>
                </Callout>
              </section>

              <section>
                <h2>12. Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy or how we
                  handle your personal data, please contact us:
                </p>

                <Callout title="Crafity">
                  <ul>
                    <li>
                      Email:{' '}
                      <a href="mailto:info@crafity.com">info@crafity.com</a>
                    </li>
                    <li>Country: The Netherlands</li>
                  </ul>
                </Callout>
              </section>
            </Stack>
          </Typography>
        </Stack>
      </Container>
    </Section>
  )
}
