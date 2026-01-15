import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | JaipurWeddingPlanner.in</title>
      </Head>

      <main className="section">
        <div className="container">
          <h1>Privacy Policy</h1>

          <p>
            At JaipurWeddingPlanner.in, we respect your privacy and are committed
            to protecting your personal information.
          </p>

          <h2>Information We Collect</h2>
          <ul className="list">
            <li>Name, phone number, and wedding details submitted via forms</li>
            <li>Business information provided by wedding planners</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul className="list">
            <li>To connect couples with suitable wedding planners</li>
            <li>To share inquiries with listed planners</li>
            <li>To improve our platform and services</li>
          </ul>

          <h2>Data Protection</h2>
          <p>
            We do not sell or misuse your data. Information is shared only with
            relevant wedding planners for inquiry purposes.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy-related questions, contact us at:
            <br />
            <strong>info@jaipurweddingplanner.in</strong>
          </p>
        </div>
      </main>
    </>
  );
}
