import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main id="main-content" className="container-blog py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              <p>
                On this portfolio website, I collect information you provide directly when you use the contact form or reach out to me. This may include:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Your name and contact information when you reach out</li>
                <li>Email address for correspondence</li>
                <li>Any other information you choose to provide in your message</li>
              </ul>
              <p className="mt-4">
                I also automatically collect certain technical information such as browser type, device information, and pages visited for analytics purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How I Use Your Information</h2>
              <p>
                I use the information collected to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Respond to your inquiries and messages</li>
                <li>Improve the website experience</li>
                <li>Analyze how the website is used</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
              <p>
                I do not sell, trade, or otherwise transfer your personal information to third parties. Your information may only be shared:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements or valid legal processes</li>
                <li>With service providers who assist in operating this website (under strict confidentiality)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Cookies and Tracking</h2>
              <p>
                This website may use cookies and similar technologies to enhance your browsing experience and analyze site traffic. You can control cookies through your browser settings, but disabling them may affect some website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
              <p>
                I implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet-based service can guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>The right to access and receive a copy of your personal information</li>
                <li>The right to correct or update your information</li>
                <li>The right to delete your information</li>
                <li>The right to restrict or object to processing</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact me using the details below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Third-Party Links</h2>
              <p>
                This website may contain links to external sites such as LinkedIn, GitHub, or book retailers. I am not responsible for the privacy practices of these third-party websites. I encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to This Policy</h2>
              <p>
                I may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Continued use of the website after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact</h2>
              <p>
                If you have any questions about this Privacy Policy or how your data is handled, please contact me at{' '}
                <a href="mailto:hello@ommahajan.com" className="text-primary hover:underline">
                  hello@ommahajan.com
                </a>{' '}
                or through the{' '}
                <a href="/contact" className="text-primary hover:underline">
                  contact form
                </a>.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
