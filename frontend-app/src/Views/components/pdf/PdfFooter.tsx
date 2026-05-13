import "./pdf.css";

export function PdfFooter() {
  return (
    <footer className="pdf-footer">
      <div className="pdf-footer-inner">
        <div className="pdf-footer-leaf">
          <span className="material-symbols-outlined pdf-footer-leaf-icon">
            spa
          </span>
        </div>

        <div className="pdf-footer-center">
          <h3 className="pdf-footer-title">
            Thank you for choosing 961 Lebanon Travel Planner.
          </h3>

          <p className="pdf-footer-subtitle">
            We wish you an unforgettable journey!
          </p>

          <div className="pdf-footer-contact">
            <div className="pdf-footer-contact-item">
              <span className="material-symbols-outlined pdf-footer-contact-icon">
                public
              </span>
              <span>www.961.com</span>
            </div>

            <div className="pdf-footer-contact-item">
              <span className="material-symbols-outlined pdf-footer-contact-icon">
                mail
              </span>
              <span>hello@961.com</span>
            </div>

            <div className="pdf-footer-contact-item">
              <span className="material-symbols-outlined pdf-footer-contact-icon">
                call
              </span>
              <span>+961 70 123 456</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}