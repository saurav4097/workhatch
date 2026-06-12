"use client";

import { useEffect, useState } from "react";
import { FaBell, FaBriefcase, FaAward, FaTools, FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFilePdf, FaCheckCircle } from "react-icons/fa";

export default function Role1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    passingYear: "",
    age: "",
    gender: "",
    driveLink: "",
    eligibilityCriteria: "", // Holds 'yes' or 'no'
    agreed: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const tasks = [
  { 
    id: 1, 
    title: "Candidate Shortlisting Work", 
    desc: "Review the pool of 20 applicant profiles in the PDF file right here in front of you. Select the best 5 candidates who have the right empathy and reliability to run senior citizen events, and write a clear explanation for each choice.", 
    guide: "/task1_candidate_pool.pdf" 
  },
  { 
    id: 2, 
    title: "Spreadsheet Cleanup Challenge & Work", 
    desc: "Open the messy 50-row volunteer log, create a brand new spreadsheet, and transfer the data into it. Clean up and arrange all formatting, spelling, and date errors in a highly professional way, using conditional formatting to highlight low senior feedback scores in red.", 
    guide: "/task2 spreadsheet containing.xlsx" 
  },
  { 
    id: 3, 
    title: "Volunteer Recruitment Video Pitch", 
    desc: "Record a 1 to 2-minute webcam or phone video pitching our Dosti Program to college students. Show your communication skills, warmth, and passion to convince them to join our mission.", 
    guide: "/task3_video_guideline-v2.pdf" 
  }
];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Validate inputs
    if (
      !formData.name || !formData.email || !formData.college || 
      !formData.passingYear || !formData.age || !formData.gender || 
      !formData.driveLink || !formData.eligibilityCriteria || !formData.agreed
    ) {
      setErrorMessage("Please fill out all input fields and acknowledge the completion terms.");
      return;
    }

    if (formData.agreed === "no") {
      setErrorMessage("You must agree to the performance criteria terms to complete submission.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || "Something went wrong.");
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setErrorMessage("Network error: Could not submit data securely.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-stone-100 p-8 text-center">
    <div className="bg-white p-12 rounded-[2rem] shadow-2xl border border-gray-100 max-w-2xl w-full flex flex-col items-center transform transition-all">
      
      {/* Cool Startup Milestone Header */}
      <div className="bg-emerald-50 text-emerald-700 font-mono text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4 uppercase animate-pulse">
        🚀 Complete
      </div>
      <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">Challenge Cleared!</h1>
      <p className="text-sm text-gray-500 max-w-sm">
        Your production ecosystem assets have been securely synced to our development archives.
      </p>
      
      {/* Upgraded Luxury Certificate View */}
      <div className="mt-8 border-[6px] border-double border-emerald-800 p-10 w-full bg-gradient-to-b from-stone-50 to-stone-100/50 rounded-2xl relative font-serif shadow-inner overflow-hidden">
        {/* Subtle background luxury stamp */}
        <div className="absolute right-[-15px] top-[-15px] text-stone-200/40 text-9xl select-none font-sans font-black pointer-events-none">
          HFC
        </div>

        <h3 className="text-xs font-bold tracking-[0.3em] text-emerald-800 uppercase font-sans">
          Certificate of Task Execution
        </h3>
        <p className="text-xs text-stone-400 italic mt-2">This credential is proudly unlocked by</p>
        
        {/* Massive, bold name for emphasis */}
        <h2 className="text-4xl font-extrabold text-gray-900 my-6 tracking-wide font-sans border-b-2 border-dashed border-stone-200 pb-2 max-w-md mx-auto">
          {formData.name}
        </h2>
        
        <p className="text-sm max-w-md mx-auto text-stone-600 leading-relaxed font-sans px-4">
  Recognized by <span className="font-bold text-gray-950 font-mono text-xs bg-stone-200/60 px-1.5 py-0.5 rounded">WorkHatch Assessments</span> for completing all operational challenges and demonstrating exceptional problem-solving skills for the 
  <span className="block mt-2 font-bold text-emerald-900 font-mono text-xs bg-emerald-50 border border-emerald-200 inline-block px-2 py-0.5 rounded shadow-sm">
     Happy Folks Club • Core Operations Track
  </span>
</p>
        
        <div className="mt-8 pt-4 border-t border-stone-200/60 flex justify-between items-center text-[10px] text-stone-400 font-sans tracking-wider uppercase">
          <div className="text-left">
            <span className="block text-[8px] font-bold text-stone-300">Timestamp</span>
            <strong>{new Date().toLocaleDateString()}</strong>
          </div>
          <div className="text-right">
            <span className="block text-[8px] font-bold text-stone-300">Authority</span>
            <span className="font-extrabold text-emerald-800 font-mono tracking-normal">HFC-VERIFIED-NODE</span>
          </div>
        </div>
      </div>

      {/* High-Action Call to Action Button */}
      <button 
        onClick={() => window.print()} 
        className="mt-8 w-full sm:w-auto bg-gray-900 text-white px-10 py-4 rounded-2xl font-semibold hover:bg-emerald-800 transition-all duration-300 shadow-xl hover:shadow-emerald-900/20 hover:-translate-y-0.5 tracking-wide text-sm"
      >
        Claim & Print Verification PDF
      </button>
    </div>
  </div>
);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* NAVBAR */}
      <nav className="w-full flex items-center justify-between px-6 md:px-12 py-4 border-b bg-white sticky top-0 z-50">
        <div className="flex items-center gap-2 text-xl font-bold">
          <img src="/workhatchS.png" alt="Logo" className="w-8 h-8 rounded-full object-cover" />
          <span>Work<span className="text-green-600">Hatch</span></span>
        </div>
        <button onClick={() => window.location.href = "/"} className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
          Back Home
        </button>
      </nav>

      <div className="max-w-4xl mx-auto py-12 px-4">
        
       {/* BRANDING & ROLE PROFILE HERO HEADER */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm mb-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-gray-100">
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden border shrink-0">
              <img 
                src="/role1_logo.jpeg" 
                alt="Happy Folks Club Logo" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="grow">
              <div className="flex items-center gap-2 flex-wrap justify-between sm:justify-start">
                <span className="text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-md border border-green-100">
                  Happy Folks Club
                </span>
                <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
                  <FaMapMarkerAlt className="text-gray-400" /> Bangalore (On-site)
                </span>
              </div>
              <h1 className="text-3xl font-extrabold text-gray-900 mt-1 tracking-tight">
                HR Manager / People Operations
              </h1>
            </div>
            
            {/* Corrected Salary Tag */}
            <div className="text-left sm:text-right shrink-0 mt-2 sm:mt-0">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Compensation</span>
              <span className="text-xl font-black text-green-600 tracking-tight block">₹2,00,000 - ₹4,00,000 LPA</span>
              <span className="text-[10px] text-gray-400 block mt-0.5">Based on capability & fit</span>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Company Overview</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              A student-run social organization bridging the gap between youth and senior citizens. Through initiatives like the Swatantra school and community programs, they empower seniors to explore new skills, rediscover joy, and build meaningful relationships.
            </p>
          </div>

          {/* Role, Simple Skills & Benefits Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-6 border-t border-gray-100">
            <div>
              <h5 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-2.5">
                <FaBriefcase className="text-green-600 shrink-0" /> Your Core Responsibilities
              </h5>
              <p className="text-xs text-gray-600 leading-relaxed space-y-1">
                Manage hiring pipelines, create company rules, process monthly payroll, track team deadlines, and plan fun team activities.
              </p>
            </div>

            <div>
              <h5 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-2.5">
                <FaTools className="text-green-600 shrink-0" /> Skills Needed
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {["Hiring", "Excel & Tech Tools", "Communication", "Teamwork", "Problem Solving", "Empathy"].map((skill, idx) => (
                  <span key={idx} className="text-[10px] font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
              
            </div>

            <div>
              <h5 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-2.5">
                <FaAward className="text-green-600 shrink-0" /> Benefits & Incentives
              </h5>
              <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4">
                <li>Direct full-time job opportunity</li>
                <li>Competitive salary based on performance</li>
                <li className="font-medium text-green-700 list-none -ml-4 flex items-center gap-1.5 bg-green-50/50 p-1.5 rounded-lg border border-dashed border-green-200">
                  <FaCheckCircle className="shrink-0 text-green-600" /> <span><b>Bonus:</b> Get an official project completion certificate once your submitted tasks are reviewed.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* WORK TRACK INSTRUCTIONS BAR */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Required Assignment Sequence</h2>
          <p className="text-sm text-gray-600 mt-1">
            Complete the production task components below, accumulate your results into a shared drive folder, and lodge your details inside the submission module workspace.
          </p>
        </div>

        {/* TASKS ITERATION MODULE */}
        <div className="space-y-6 mb-16">
          {tasks.map((task) => (
            <div key={task.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs bg-green-100 text-green-800 px-2.5 py-1 rounded-full font-bold">Task 0{task.id}</span>
                <h3 className="text-xl font-bold mt-2 text-gray-900">{task.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{task.desc}</p>
              </div>
              <a href={task.guide} download className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline font-medium shrink-0">
                <FaFilePdf /> Download Task Asset
              </a>
            </div>
          ))}
        </div>

        {/* SUBMISSION FORM INTERFACE */}
        <div className="bg-white rounded-3xl shadow-xl border p-8 md:p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Final Review Workspace</h2>
         <div className="text-sm text-gray-500 leading-relaxed mb-6">
  <strong className="block text-gray-700 mb-2">Submission Instructions:</strong>
  <ul className="list-disc pl-5 space-y-1">
    <li>Create a single <strong>Google Drive folder</strong> named after yourself.</li>
    <li>Add your <strong>Task 1 PDF/Doc</strong> (shortlist explanations), <strong>Task 2 new spreadsheet</strong> (cleaned data), and <strong>Task 3 video file</strong> (recruitment pitch) into this folder.</li>
    <li>Ensure its sharing permissions are adjusted to Anyone with link can view prior to dropping it below.</li>
    <li>Copy your shared folder link and drop it into the submission box below.</li>
  </ul>
</div>

          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl font-medium text-sm border border-red-200">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">College Name</label>
                <input type="text" name="college" value={formData.college} onChange={handleInputChange} placeholder="University Institute" className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Year of Passing</label>
                <input type="number" name="passingYear" value={formData.passingYear} onChange={handleInputChange} placeholder="2026" className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Age</label>
                <input type="number" name="age" value={formData.age} onChange={handleInputChange} placeholder="21" className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
                <select name="gender" value={formData.gender} onChange={handleInputChange} className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none bg-white transition">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Google Drive Folder Link (All files included)</label>
              <input type="url" name="driveLink" value={formData.driveLink} onChange={handleInputChange} placeholder="https://drive.google.com/drive/folders/..." className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition" />
            </div>

            {/* LOCATION SCREENING COMPONENT */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <label className="block text-sm font-medium text-gray-800 mb-3">
                Are you from Bangalore or can you relocate to Bangalore?
              </label>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="eligibilityCriteria" value="yes" checked={formData.eligibilityCriteria === "yes"} onChange={handleInputChange} className="accent-green-600 w-4 h-4" />
                  <span className="text-sm font-medium">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="eligibilityCriteria" value="no" checked={formData.eligibilityCriteria === "no"} onChange={handleInputChange} className="accent-green-600 w-4 h-4" />
                  <span className="text-sm font-medium">No</span>
                </label>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <label className="block text-sm font-medium text-gray-800 mb-3">
                Do you agree that all provided information is accurate and that you designed these project folder items independently?
              </label>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="agreed" value="yes" checked={formData.agreed === "yes"} onChange={handleInputChange} className="accent-green-600 w-4 h-4" />
                  <span className="text-sm font-medium">Yes, I agree</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="agreed" value="no" checked={formData.agreed === "no"} onChange={handleInputChange} className="accent-green-600 w-4 h-4" />
                  <span className="text-sm font-medium">No</span>
                </label>
              </div>
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-green-600 text-white rounded-xl font-bold tracking-wide hover:bg-green-500 transition disabled:bg-gray-400">
              {isSubmitting ? "Verifying Record Data..." : "Submit Project Folder"}
            </button>
          </form>
        </div>
      </div>
   
      {/* FOOTER */}
      <footer className="w-full bg-gray-900 text-white mt-10">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">

          {/* LOGO / NAME */}
          <h3 className="text-xl font-semibold mb-3">
            Work<span className="text-green-500">Hatch</span>
          </h3>

          <p className="text-gray-400 text-sm mb-6">
            Building real skills through real work.
          </p>

          {/* ICONS */}
          <div className="flex justify-center gap-6 text-xl mb-6">
            <a href="https://www.linkedin.com/company/workhatch/" className="hover:text-green-400"><FaLinkedin /></a>
            <a href="https://www.instagram.com/theworkhatch/" className="hover:text-green-400"><FaInstagram /></a>
            <a href="#" className="hover:text-green-400 transition"><FaXTwitter /></a>
            <a href="#" className="hover:text-green-400 transition"><FaYoutube /></a>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-gray-700 pt-6 text-xs text-gray-500">
            © {new Date().getFullYear()} WorkHatch. All rights reserved.
          </div>

        </div>
      </footer>
    </div>
  );
}