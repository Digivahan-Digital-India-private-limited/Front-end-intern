import React, { useEffect, useRef, useState } from "react";
import ringimg from "../../assets/Right.png";
import conimg from "../../assets/Container.png";
import OfficeImg from "../../assets/Digivahan Building.png";
import About1Img from "../../assets/About us 3.webp";
import VisionImg from "../../assets/Vision.png";
import ProfileCard from "./ProfileCard";
import SandeepRathore from "../../assets/Sandeep_ji_profile_pic.webp";
import ParvezAnsari from "../../assets/Parvez Ansari.webp";

/* â”€â”€ animation styles â”€â”€ */
const animStyles = `
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(40px); }
    to   { opacity:1; transform:translateY(0);    }
  }
  @keyframes fadeLeft {
    from { opacity:0; transform:translateX(-40px); }
    to   { opacity:1; transform:translateX(0);     }
  }
  @keyframes fadeRight {
    from { opacity:0; transform:translateX(40px); }
    to   { opacity:1; transform:translateX(0);    }
  }
  @keyframes popIn {
    from { opacity:0; transform:scale(0.88); }
    to   { opacity:1; transform:scale(1);    }
  }
  @keyframes gradBG {
    0%   { background-position:0% 50%;   }
    50%  { background-position:100% 50%; }
    100% { background-position:0% 50%;   }
  }
  @keyframes floatY {
    0%,100% { transform:translateY(0);    }
    50%      { transform:translateY(-10px);}
  }
  @keyframes shimmerBar {
    from { transform:translateX(-100%); }
    to   { transform:translateX(100%);  }
  }
  @keyframes rotateSlow {
    from { transform:rotate(0deg);   }
    to   { transform:rotate(360deg); }
  }
  @keyframes pulseDot {
    0%,100% { transform:scale(1);   opacity:1;   }
    50%      { transform:scale(1.5); opacity:.5;  }
  }
  @keyframes slideUp {
    from { opacity:0; transform:translateY(20px); }
    to   { opacity:1; transform:translateY(0);    }
  }

  .ab-fade-up    { opacity:0; }
  .ab-fade-left  { opacity:0; }
  .ab-fade-right { opacity:0; }
  .ab-pop        { opacity:0; }
  .ab-fade-up.vis    { animation:fadeUp   0.65s cubic-bezier(.22,1,.36,1) forwards; }
  .ab-fade-left.vis  { animation:fadeLeft 0.65s cubic-bezier(.22,1,.36,1) forwards; }
  .ab-fade-right.vis { animation:fadeRight 0.65s cubic-bezier(.22,1,.36,1) forwards; }
  .ab-pop.vis        { animation:popIn    0.55s cubic-bezier(.22,1,.36,1) forwards; }

  .float-img { animation:floatY 5s ease-in-out infinite; }
  .float-img2{ animation:floatY 6s ease-in-out infinite .8s; }
  .grad-hero {
    background:linear-gradient(135deg,#fef9ee,#fff,#f0fdf4);
    background-size:300% 300%;
    animation:gradBG 10s ease infinite;
  }
  .card-hover {
    transition: transform .3s ease, box-shadow .3s ease;
  }
  .card-hover:hover {
    transform:translateY(-5px);
    box-shadow:0 16px 40px rgba(234,179,8,.18);
  }
  .shimmer-line {
    position:relative;
    overflow:hidden;
  }
  .shimmer-line::after {
    content:'';
    position:absolute;
    inset:0;
    background:linear-gradient(90deg,transparent,rgba(255,255,255,.5),transparent);
    animation:shimmerBar 2.2s linear infinite;
  }
  .icon-spin { animation:rotateSlow 8s linear infinite; }
  .dot-pulse { animation:pulseDot 1.5s ease-in-out infinite; }
`;

/* â”€â”€ hook: trigger class "vis" when element enters viewport â”€â”€ */
const useScrollAnim = () => {
  const refs  = useRef({});
  const [vis, setVis] = useState({});

  useEffect(() => {
    const obs = {};
    Object.entries(refs.current).forEach(([k, el]) => {
      if (!el) return;
      obs[k] = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          setVis(p => ({ ...p, [k]: true }));
          obs[k].disconnect();
        }
      }, { threshold: 0.1 });
      obs[k].observe(el);
    });
    return () => Object.values(obs).forEach(o => o.disconnect());
  }, []);

  const ref = k => el => { refs.current[k] = el; };
  const v   = k => vis[k] ? "vis" : "";
  return { ref, v };
};

const Aboutpage = () => {
  const { ref, v } = useScrollAnim();

  return (
    <>
      <style>{animStyles}</style>
      <main className="w-full overflow-hidden">

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            SECTION 1 â€” HERO / ABOUT US
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="grad-hero w-full py-14 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">

            {/* Left */}
            <div ref={ref("s1l")} className={`ab-fade-left ${v("s1l")} lg:w-1/2 flex flex-col gap-4`}>

              {/* Badge */}
              <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest w-fit">
                <span className="dot-pulse w-2 h-2 rounded-full bg-yellow-500 inline-block" />
                Since 2023
              </span>

              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                About <span className="text-yellow-500">Us</span>
              </h2>
              <h3 className="text-xl font-semibold text-gray-700">Digivahan Digital India Pvt. Ltd.</h3>

              {/* Animated yellow underline */}
              <div className="shimmer-line h-1 w-20 rounded-full bg-yellow-400" />

              <h4 className="text-base font-semibold text-yellow-600">Empowering India with Smart Vehicle Solutions</h4>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Digivahan is India's trusted digital platform for all your vehicle-related services. From RC, insurance, and PUC status to challan checks and safety QR stickers â€” we bring everything to your fingertips. With a mission to make transportation smarter, safer, and more accessible, we are revolutionizing the way India moves.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Established in 2023, Digivahan Digital India Pvt. Ltd. is a technology-driven company focused on transforming vehicle management and public safety through digital innovation. Our mission is to create a smart, mobile-first ecosystem where vehicle-related services are seamless, secure, and easily accessible for every Indian citizen.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                We specialize in offering QR-based vehicle identification and real-time verification services that not only assist vehicle owners but also empower the public to report lost or misplaced vehicles using our unique QR code system.
              </p>
            </div>

            {/* Right */}
            <div ref={ref("s1r")} className={`ab-fade-right ${v("s1r")} lg:w-1/2 w-full flex justify-center`}>
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-300/20 rounded-3xl blur-3xl scale-110" />
                <img
                  src={About1Img}
                  alt="About Digivahan"
                  className="float-img relative rounded-3xl shadow-xl w-full object-cover"
                  style={{ maxHeight: 420 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            SECTION 2 â€” TEAM
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="max-w-6xl mx-auto py-14 px-4">

          {/* Section heading */}
          <div ref={ref("teamH")} className={`ab-fade-up ${v("teamH")} text-center mb-10`}>
            <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Our People</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">Meet the <span className="text-yellow-500">Team</span></h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
              A group of dedicated professionals driven by a shared passion for innovation, transparency, and excellence.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Profile cards */}
            <div
              ref={ref("cards")}
              className={`ab-fade-left ${v("cards")} lg:w-1/2 space-y-6`}
              style={{ animationDelay: "0.1s" }}
            >
              <ProfileCard
                align="right"
                name="Sandeep Rathor"
                role="CEO (Founder)"
                quote="Building vision, leading with purpose"
                image={SandeepRathore}
                points={["Visionary Entrepreneur","Business & Growth Strategist","Founder-led Leadership"]}
              />
              <ProfileCard
                align="left"
                name="Rehan Ansari"
                role="Director"
                quote="Committed to vision, driven by excellence."
                image={ParvezAnsari}
                points={["10+ Years Experience","Startup & Product Specialist","Business Leadership"]}
              />
            </div>

            {/* Team text */}
            <div
              ref={ref("teamTxt")}
              className={`ab-fade-right ${v("teamTxt")} lg:w-1/2 flex flex-col justify-center gap-4`}
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">About Our Team</h2>
              <div className="h-1 w-16 rounded-full bg-yellow-400 shimmer-line" />
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Our team is a group of dedicated and skilled professionals driven by a shared passion for innovation and excellence. Each member brings unique expertise and experience, working collaboratively to deliver reliable, high-quality solutions. We believe in transparency, teamwork, and continuous improvement, ensuring that every project is handled with precision, responsibility, and a commitment to long-term value.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                We work in a collaborative and transparent environment where ideas are encouraged, accountability is valued, and continuous learning is a priority. By combining strong technical knowledge with a deep understanding of client needs, we ensure that every solution we deliver is reliable, scalable, and aligned with long-term business goals.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mt-2">
                {[["2023","Founded"],["50K+","Users"],["99%","Uptime"]].map(([val, label]) => (
                  <div key={label} className="card-hover bg-yellow-50 border border-yellow-100 rounded-2xl p-4 text-center">
                    <p className="text-2xl font-extrabold text-yellow-500">{val}</p>
                    <p className="text-xs text-gray-500 font-medium mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            SECTION 3 â€” FOUNDER'S MESSAGE (UNCHANGED)
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="max-w-6xl mx-auto my-8 px-3">
          <div className="relative bg-gradient-to-br from-yellow-50 via-white to-green-50 border border-yellow-200 rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row animate-fade-in" style={{ minHeight: 480 }}>

            <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-400 opacity-10 rounded-full translate-x-24 translate-y-24 pointer-events-none" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-400 opacity-10 rounded-full translate-x-16 -translate-y-16 pointer-events-none" />

            <div className="relative flex-shrink-0 md:w-2/5 w-full bg-yellow-50 flex items-center justify-center" style={{ clipPath:"ellipse(92% 50% at 0% 50%)" }}>
              <img
                src="/Sandeep Sir.jpeg"
                alt="Sandeep Rathor â€“ Founder & CEO"
                className="w-full h-full object-contain object-bottom"
                style={{ minHeight:420, maxHeight:600 }}
                loading="lazy"
              />
              <div className="absolute bottom-6 left-4 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 shadow">
                <p className="font-bold text-gray-900 text-sm leading-tight">Sandeep Rathor</p>
                <p className="text-xs text-yellow-600 font-medium">Founder &amp; CEO</p>
              </div>
            </div>

            <div className="flex-1 min-w-0 flex flex-col justify-center gap-4 px-7 py-10 md:px-10 md:py-12 pr-6 md:pr-10 z-10 overflow-hidden">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-yellow-600 mb-1">ðŸŒŸ Founder's Message</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">Leading Innovation with Purpose</h2>
              </div>
              <span className="block text-6xl leading-none text-yellow-300 font-serif select-none">&ldquo;</span>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed -mt-4">
                At Digivahan Digital India Pvt. Ltd., our journey began with a simple yet powerful vision â€” to make vehicle-related services smarter, more transparent, and easily accessible for every Indian citizen.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                As the Founder, I strongly believe that technology should simplify lives, not complicate them. With the rapid growth of digital transformation in India, there was a clear need for a reliable and secure platform dedicated to vehicle management and verification services. Digivahan was created to bridge that gap.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Our mission is to build a seamless ecosystem where vehicle owners, authorities, and citizens can connect through trust-driven digital solutions. From QR-based vehicle identification to real-time verification services, we are committed to delivering innovation with integrity.
              </p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
                We are not just building a platform â€” we are building a movement toward safer roads, smarter documentation, and a digitally empowered India.
              </p>
              <p className="text-gray-500 text-sm italic">Thank you for being part of our journey.</p>
              <div className="flex items-center gap-3 pt-1">
                <div className="h-px flex-1 bg-yellow-200" />
                <span className="text-yellow-600 font-semibold text-sm">â€” Sandeep Rathor</span>
              </div>
            </div>
          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            SECTION 4 â€” VISION / MISSION / SERVICES / AUDIENCE
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="bg-gray-50 py-14 px-4">
          <div className="max-w-6xl mx-auto">

            {/* heading */}
            <div ref={ref("vmH")} className={`ab-fade-up ${v("vmH")} text-center mb-10`}>
              <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">What We Stand For</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Our <span className="text-yellow-500">Purpose</span></h2>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-2/3 flex flex-col gap-6">

                {/* Vision + Mission */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { emoji:"ðŸŒ", title:"Our Vision", delay:"0s",   text:"To make every Indian vehicle digitally verifiable and connected â€” enabling a safer and more transparent transport ecosystem." },
                    { emoji:"ðŸš€", title:"Our Mission", delay:"0.15s", text:"We simplify vehicle documentation, safety, and verification through an all-in-one digital platform offering trusted, secure, and real-time services to every citizen." },
                  ].map(({ emoji, title, delay, text }) => (
                    <div
                      key={title}
                      ref={ref("vm"+title)}
                      style={{ animationDelay: delay }}
                      className={`ab-pop ${v("vm"+title)} card-hover bg-white border-2 border-yellow-100 p-6 rounded-2xl shadow-sm`}
                    >
                      <h2 className="text-lg font-bold text-gray-900 mb-2">{emoji} {title}</h2>
                      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>

                {/* Core Services + Target */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div ref={ref("cs")} className={`ab-pop ${v("cs")} card-hover bg-white border-2 border-gray-100 p-6 rounded-2xl shadow-sm`} style={{ animationDelay:"0.25s" }}>
                    <h2 className="text-lg font-bold text-gray-900 mb-4">ðŸ› ï¸ Core Services</h2>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      {["RC, Insurance, Challan & PUC Verification","QR-Based Digital Identity for Vehicles","Public Alert & Lost Vehicle Reporting","Secure Document Upload & Instant Validation"].map(s => (
                        <li key={s} className="flex items-start gap-2">
                          <span className="text-yellow-500 font-bold mt-0.5">âœ”</span>{s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div ref={ref("ta")} className={`ab-pop ${v("ta")} card-hover bg-white border-2 border-gray-100 p-6 rounded-2xl shadow-sm`} style={{ animationDelay:"0.35s" }}>
                    <h2 className="text-lg font-bold text-gray-900 mb-4">ðŸŽ¯ Target Audience</h2>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>ðŸ‘¤ Private & Commercial Vehicle Owners</li>
                      <li>ðŸš¨ Citizens reporting found or lost vehicles</li>
                      <li>ðŸ›ï¸ Transport professionals & RTO partners</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Illustration */}
              <div ref={ref("visionImg")} className={`ab-fade-right ${v("visionImg")} md:w-1/3 flex justify-center`}>
                <img src={VisionImg} alt="Vision Illustration" className="float-img2 sm:h-80 w-auto object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            SECTION 5 â€” USP
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="max-w-6xl mx-auto py-14 px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">

            <div ref={ref("uspL")} className={`ab-fade-left ${v("uspL")} md:w-1/2 space-y-5`}>
              <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">Why Digivahan</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What Makes Us <span className="text-yellow-500">Unique</span> (USP)</h1>
              <div className="h-1 w-16 rounded-full bg-yellow-400 shimmer-line" />
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                We offer a wide range of services designed to make your vehicle ownership experience smarter, safer, and more convenient. Among our many features, some stand out as true gems:
              </p>
              <ul className="space-y-3">
                {[
                  "First-of-its-kind QR-based public alert system for vehicles.",
                  "Mobile-first, secure and lightweight application.",
                  "Real-time updates on vehicle document validity and compliance.",
                ].map((item, i) => (
                  <li
                    key={i}
                    ref={ref("usp"+i)}
                    className={`ab-fade-up ${v("usp"+i)} flex items-start gap-3 bg-yellow-50 border border-yellow-100 rounded-xl px-4 py-3 text-sm text-gray-700`}
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    <span className="text-yellow-500 font-bold text-base mt-0.5">â†’</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div ref={ref("uspR")} className={`ab-fade-right ${v("uspR")} md:w-1/2 flex justify-center`}>
              <img src={ringimg} alt="USP Illustration" className="float-img h-64 sm:h-80 w-auto object-contain" />
            </div>
          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            CONTAINER IMAGE
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <div ref={ref("conImg")} className={`ab-fade-up ${v("conImg")} max-w-6xl mx-auto px-4 py-2`}>
          <img src={conimg} alt="Core Value" className="w-full rounded-2xl shadow object-cover md:h-full h-40" />
        </div>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            SECTION 6 â€” LEGAL & CONTACT
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="max-w-6xl mx-auto py-14 px-4">

          <div ref={ref("legalH")} className={`ab-fade-up ${v("legalH")} text-center mb-10`}>
            <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Company Info</span>
            <h2 className="text-3xl font-extrabold text-gray-900">Legal Entity &amp; <span className="text-yellow-500">Contact Info</span></h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            {/* Info card */}
            <div ref={ref("legalL")} className={`ab-fade-left ${v("legalL")} md:w-1/2`}>
              <div className="card-hover bg-white border-2 border-yellow-100 rounded-3xl p-8 shadow-sm h-full space-y-4">
                {[
                  ["ðŸ¢","Company Name","Digivahan Digital India Pvt Ltd"],
                  ["ðŸ“…","Established","2023"],
                  ["ðŸ”–","CIN","U62099DL2023PTC420571"],
                  ["ðŸ“","Registered Address","Plot No, 2-A, Third Floor, Block-R, Uttam Nagar, New Delhi - 110059, India"],
                  ["âœ‰ï¸","Email","info@digivahan.in"],
                ].map(([icon, label, val]) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">{icon}</span>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">{label}</p>
                      <p className="text-gray-700 text-sm">{val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office image */}
            <div ref={ref("legalR")} className={`ab-fade-right ${v("legalR")} md:w-1/2 rounded-3xl overflow-hidden shadow-lg`}>
              <img src={OfficeImg} alt="Digivahan Office" className="w-full h-full object-cover" style={{ minHeight: 260 }} />
            </div>
          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            MAP
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <div ref={ref("map")} className={`ab-fade-up ${v("map")} max-w-6xl mx-auto px-4 pb-10`}>
          <div className="w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89879.39895896293!2d76.9286923357915!3d28.57726296237831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d050021878051%3A0xd9da7e82a08b4777!2sDIGIVAHAN!5e0!3m2!1sen!2sin!4v1768393071255!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border:0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </main>
    </>
  );
};

export default Aboutpage;
