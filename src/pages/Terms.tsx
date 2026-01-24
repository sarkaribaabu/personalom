import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main id="main-content" className="container-blog py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Terms of Use
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this portfolio website (ommahajan.com), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Intellectual Property</h2>
              <p>
                All content on this website, including but not limited to text, graphics, images, project descriptions, and design elements, is the intellectual property of Dr. Om Mahajan unless otherwise stated. This includes:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Project case studies and documentation</li>
                <li>Written articles and blog content</li>
                <li>Book excerpts and promotional materials</li>
                <li>Original photographs and graphics</li>
              </ul>
              <p className="mt-4">
                You may not reproduce, distribute, or use any content without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Use of Content</h2>
              <p>
                You are granted a limited, non-exclusive license to view the content on this website for personal, non-commercial purposes. Under this license, you may not:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Copy, modify, or distribute the content</li>
                <li>Use the content for any commercial purpose</li>
                <li>Remove any copyright or proprietary notices</li>
                <li>Create derivative works based on the content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Project Information</h2>
              <p>
                The project case studies presented on this website represent professional work completed in various capacities. Some details may be generalized or anonymized to respect client confidentiality. The information is provided for portfolio and demonstration purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Book Content</h2>
              <p>
                Information about books displayed on this website, including covers, descriptions, and excerpts, is provided for promotional purposes. Purchase and delivery of books are subject to the terms of the respective retailers or publishers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Disclaimer</h2>
              <p>
                The content on this website is provided "as is" without warranties of any kind, either express or implied. I do not warrant that the information is accurate, complete, or current. Any reliance on the content is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
              <p>
                I shall not be liable for any damages arising from the use or inability to use this website, including but not limited to direct, indirect, incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. External Links</h2>
              <p>
                This website may contain links to external websites, including social media profiles, book retailers, and professional networks. I am not responsible for the content or practices of these external sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to Terms</h2>
              <p>
                I reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting. Your continued use of the website after changes constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact</h2>
              <p>
                If you have any questions about these Terms of Use, please contact me at{' '}
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

export default Terms;
