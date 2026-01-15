import Head from "next/head";

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>How It Works | JaipurWeddingPlanner.in</title>
        <meta
          name="description"
          content="Understand how JaipurWeddingPlanner.in works for couples and wedding planners."
        />
      </Head>

      <main className="section">
        <div className="container">
          <h1>How It Works</h1>

          <h2>For Couples</h2>
          <ol className="steps">
            <li>Browse top wedding planners in Jaipur</li>
            <li>Compare services, styles, and expertise</li>
            <li>Submit your wedding requirements</li>
            <li>Get contacted by suitable planners</li>
            <li>Choose the planner that fits your vision & budget</li>
          </ol>

          <h2>For Wedding Planners</h2>
          <ol className="steps">
            <li>List your wedding planning business</li>
            <li>Showcase your services, photos, and expertise</li>
            <li>Get genuine wedding inquiries from couples</li>
            <li>Convert inquiries into confirmed bookings</li>
            <li>Grow your brand visibility in Jaipur</li>
          </ol>

          <p className="highlight">
            We focus on quality leads, transparency, and long-term growth for
            both couples and wedding planners.
          </p>
        </div>
      </main>
    </>
  );
}
