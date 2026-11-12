export const legalDocuments = {
  privacy: {
    id: "privacy",
    title: "Privacy Policy",
    subtitle: "Comprehensive disclosure on child data protection, COPPA & GDPR-K compliance, zero-monetization guarantees, and parental sovereignty.",
    lastUpdated: "November 2026",
    sections: [
      {
        heading: "1. Institutional Commitment & Governance Scope",
        content: `EduEden ("we," "our," or "the Academy"), accessible via https://edueden.online, operates as an interactive virtual learning ecosystem providing computer science education, block-based logic, and supervised artificial intelligence coursework for young learners in Kindergarten through Grade 8 (Ages 5–14).

We operate with an unambiguous organizational philosophy: Digital literacy must be anchored in uncompromising privacy. We believe that childhood is a protected space of exploration, not a data asset to be profiled, tracked, or commercialized.

This Privacy Policy constitutes our binding operational standard regarding the collection, handling, safeguarding, and disposal of information acquired from parents, legal guardians, and participating students across our public website, complimentary demo reservations, live virtual workshops, and ongoing academy cohorts worldwide (including the United States, Canada, the United Kingdom, the European Union, the United Arab Emirates, Singapore, India, and Australia).`,
      },
      {
        heading: "2. Child Privacy Safeguards: COPPA, GDPR-K & FERPA Compliance",
        content: `EduEden is built from the ground up to comply with global children's data protection statutes, including the U.S. Children's Online Privacy Protection Act (COPPA, 15 U.S.C. §§ 6501–6506), the General Data Protection Regulation applied to Children (GDPR-K, Article 8), the UK Age Appropriate Design Code, and the Family Educational Rights and Privacy Act (FERPA) standards:

A. Verifiable Parental Consent (VPC):
• EduEden does not knowingly solicit or collect personal information directly from children under 13 (or under 16 in applicable European jurisdictions) without verified parental consent.
• All website submissions, trial bookings, course enrollments, student profile creations, and tuition transactions must be completed exclusively by an adult parent or legal guardian.

B. Communication Exclusivity:
• All official scheduling communications, meeting links, milestone evaluations, and curriculum updates are routed exclusively to parent-verified contact channels (email or WhatsApp).
• Mentors are strictly prohibited from initiating private, unmonitored communication with minor students outside of official classroom infrastructure.

C. Child Anonymity in Student Projects:
• Mentors instruct and enforce that students never embed real personal identifiers—such as full names, physical home addresses, school names, phone numbers, or photographs—into their Scratch, ScratchJr, or Python software projects.`,
      },
      {
        heading: "3. Complete Inventory of Collected Information",
        content: `We adhere strictly to the principle of Educational Data Minimization. We only collect information strictly required to match learners to appropriate cohorts, deliver live instruction, and report cognitive growth to parents:

A. Parent & Guardian Identifiers (Provided Voluntarily):
• Full Legal Name of Parent or Guardian.
• Verified Email Address (used for lesson summaries, curriculum links, and legal notices).
• Mobile / WhatsApp Telephone Number with Country Code (used for direct class scheduling and coordinator updates).
• Country and Time Zone (essential for cohort matching across global regions).
• Billing & Payment Records: Payments are tokenized and processed through PCI-DSS Level 1 compliant financial gateways. EduEden never receives, logs, or stores raw credit card numbers or banking credentials.

B. Student Educational Profile:
• Student First Name or Preferred Nickname (last names are optional and discouraged in cohort classrooms).
• Grade Level, Academic Year, and Chronological Age (to calibrate developmental tracks).
• Prior Coding Background (visual blocks, robotic toys, text syntax, or zero prior exposure).
• Optional Parent Notes (learning styles, neurodivergent accommodations, or personal interests).

C. Classroom Work Products & Learning Telemetry:
• Student code files, project snapshots, Scratch (.sb3) source files, and Python (.py) scripts stored securely in student cloud portfolios.
• Attendance logs, milestone completion checkpoints, and mentor formative assessment rubrics.

D. Technical & Website Telemetry:
• Privacy-Preserving Web Analytics: When browsing edueden.online, we collect anonymized, non-identifying telemetry via Vercel Analytics (browser type, device viewport, country of origin, and page latency). We do NOT deploy third-party advertising cookies, cross-site trackers, or behavioral fingerprinting scripts.`,
      },
      {
        heading: "4. Permitted Educational Uses of Information",
        content: `Data collected by EduEden is utilized strictly for educational fulfillment and parent coordination:

• Cohort Placement: Matching your child with peers of identical age, cognitive milestones, and timezone for collaborative 1:4 learning cohorts.
• Mentor Preparation: Allowing assigned educators to review a child's previous project files and debugging notes prior to each session to ensure individualized pacing.
• Milestone Reporting: Compiling and delivering personalized Cognitive Readiness & Milestone Evaluation rubrics following trial sessions and cohort graduations.
• Permanent Portfolio Hosting: Providing authenticated cloud storage so your child can showcase, play, and iterate upon their games from any household tablet or computer.
• Academic Safety: Monitoring classroom attendance and technical connectivity to verify student wellbeing during scheduled class hours.`,
      },
      {
        heading: "5. Absolute Zero-Monetization & Ad-Free Guarantee",
        content: `EduEden maintains an inviolable commercial boundary regarding family data:

• WE DO NOT SELL, RENT, LEASE, OR MONETIZE PARENT OR STUDENT DATA UNDER ANY CIRCUMSTANCES.
• We do not partner with data brokers, advertising exchanges, or commercial profiling networks.
• We never display third-party advertisements or sponsored commercial banners inside our classrooms or student materials.
• We never utilize student code, voice recordings, or feedback logs to train open-web commercial generative artificial intelligence models.`,
      },
      {
        heading: "6. Classroom Video Recording & Archival Standards",
        content: `To ensure absolute child safeguarding, mentor instructional quality, and parent peace of mind, live virtual classes may be recorded under rigorous security controls:

A. Exclusive Purpose:
• Recordings exist strictly for child protection compliance audits, pedagogical quality checks by senior faculty, and parent review upon verified request.

B. Access Restrictions:
• Recordings are stored within encrypted, access-restricted institutional repositories.
• Access is restricted solely to the Academic Dean, the Designated Safeguarding Officer, and the verified parent of an enrolled student. Mentors cannot download, clone, or export video files to personal hard drives.

C. 30-Day Automated Purge:
• Classroom recordings are retained for exactly 30 calendar days from the date of capture, after which they are permanently and irreversibly purged from our storage infrastructure via automated lifecycle policies.

D. Zero Public Use Without Separate Talent Release:
• No student voice, likeness, webcam footage, or capstone presentation is EVER published on social media, YouTube, our website, or promotional collateral without a separate, written, unambiguous Media Release signed by the parent.`,
      },
      {
        heading: "7. Third-Party Infrastructure & Sub-Processors",
        content: `EduEden partners only with enterprise-grade infrastructure providers that comply with SOC 2 Type II, ISO 27001, FERPA, and COPPA data protection standards:

• Google Cloud & Google Workspace: Encrypted database records, form ingestion, and institutional calendar synchronization.
• Video Infrastructure (Zoom Enterprise / Google Meet): Live video streaming with encrypted transport, end-to-end meeting passwords, locked rooms, and host-managed breakout controls.
• Vercel Inc.: Privacy-first, serverless edge hosting and aggregate web performance diagnostics.
• Messaging Platforms (WhatsApp Business API / Meta): Transactional parent communication regarding class links and schedule coordination.

All sub-processors are legally bound by Data Processing Addendums (DPAs) requiring equal or greater data security standards than EduEden's own privacy obligations.`,
      },
      {
        heading: "8. Data Security Architecture & Incident Protocol",
        content: `We protect student and family records using defense-in-depth security engineering:

• Encryption Standards: All data in transit is encrypted using Transport Layer Security (TLS 1.3). All stored databases and archival snapshots are protected with AES-256 bit encryption at rest.
• Principle of Least Privilege (PoLP): Faculty mentors only have access to the first name, grade track, and code repository of students currently enrolled in their specific 4-person micro-cohort.
• Multi-Factor Authentication: Mandatory multi-factor authentication (MFA) on all internal faculty accounts and administrative portals.
• Data Breach Notification: In the unlikely event of an unauthorized security incident impacting family data, EduEden guarantees direct written notification to affected parents and regulatory authorities within 72 hours, detailing the scope of the incident and concrete remediation steps taken.`,
      },
      {
        heading: "9. Parental Sovereignty: Inspection, Correction, and Right to be Forgotten",
        content: `Parents and legal guardians retain complete, permanent ownership over their family's data under global privacy frameworks (including GDPR Articles 15-21 and California CCPA/CPRA):

• Right of Access & Portability: Request an exportable digital copy of all records, project files, and notes stored in association with your household.
• Right of Rectification: Update or correct telephone numbers, email addresses, or child grade profiles at any time.
• Right to Erasure (Complete Deletion): Request the permanent and irreversible deletion of your family profile, contact numbers, email addresses, and student project archives.
• Processing Window: All formal data requests are executed by our compliance team within 48 business hours with written confirmation.`,
      },
      {
        heading: "10. Contacting the Data Protection Officer",
        content: `EduEden maintains a dedicated data protection and legal compliance desk to assist families:

• Official Email: support@edueden.online (Attn: Data Protection Officer)
• WhatsApp / Telephone Hotline: +91-9153573335
• Registered Academy Portal: https://edueden.online
• Operating Hours: Monday through Sunday, 8:00 AM – 8:00 PM (IST / UTC +5:30) with 24/7 emergency response protocols.`,
      },
    ],
  },

  safety: {
    id: "safety",
    title: "Student Safety Charter",
    subtitle: "Our institutional safeguarding code governing live educator vetting, 1:4 supervision ratios, kid-safe AI sandboxes, and healthy digital wellness.",
    lastUpdated: "November 2026",
    sections: [
      {
        heading: "1. The EduEden Safety Pledge",
        content: `Every child possesses an inherent right to an educational environment that is physically safe, emotionally nurturing, intellectually respectful, and technologically secure. The EduEden Student Safety Charter is our binding institutional covenant with parents and educational partners worldwide.

Virtual classrooms require distinct and heightened safeguarding protocols compared to traditional brick-and-mortar schools. This Charter outlines the rigorous standards, proactive safeguards, and zero-tolerance policies we enforce across every trial lesson, micro-cohort workshop, and private mentorship session.`,
      },
      {
        heading: "2. Mentor Screening & Multi-Stage Vetting Lifecycle",
        content: `Educators are the heart of the EduEden experience. We reject automated hiring algorithms in favor of an exhaustive 4-stage vetting pipeline that admits fewer than 4% of educator applicants:

A. Stage 1: Identity & Legal Background Clearance:
• Mandatory government identity verification and academic credential audits in Computer Science, STEM, or Elementary Education.
• Comprehensive nationwide criminal history background checks, sex offender registry screenings, and child welfare registry clearances prior to student contact.

B. Stage 2: Pedagogical & Empathy Auditing:
• Live teaching simulation evaluated by our Senior Academic Faculty.
• Applicants are assessed on patience, constructive reinforcement, communication clarity, anti-bias sensitivity, and neurodivergent-friendly pacing.

C. Stage 3: Child Safeguarding Certification:
• Mandatory certification in Youth Online Protection Standards, grooming detection, emotional distress indicators, and mandatory reporting protocols.
• Annual recertification required for all continuing faculty.

D. Stage 4: Unannounced Senior Spot-Checks:
• The Academic Dean and Compliance Supervisors conduct unannounced quality and safety spot-checks on at least 15% of all live class sessions each week.`,
      },
      {
        heading: "3. Classroom Supervision Architecture & Cohort Ratios",
        content: `Isolation and lack of oversight are the primary causes of safety failures in online education. We eliminate these risks structurally:

A. Strict Micro-Cohort Ratio (Maximum 1:4):
• Group classes are legally capped at four students per mentor.
• Small cohorts ensure the teacher maintains continuous visual and audio engagement with every learner, preventing quiet withdrawal or unmonitored distress.

B. Monitored 1:1 Private Mentoring:
• Private instruction is hosted strictly on institutional, corporate-audited infrastructure. Mentors are prohibited from conducting sessions on personal, unrecorded meeting accounts.

C. Locked Meeting Rooms & Waiting Room Control:
• Every session utilizes unique, dynamically generated meeting keys and encrypted credentials.
• Mentors verify each participant in a secure virtual waiting room. Unrecognized accounts or unverified adults are immediately barred from entry.

D. Prevention of Unsupervised Peer Chat:
• Student-to-student private direct messaging (backchanneling) is permanently disabled.
• All text communication occurs in the public classroom chat visible to the mentor at all times, preventing secret cyberbullying or unauthorized link sharing.`,
      },
      {
        heading: "4. Supervised, Kid-Safe Artificial Intelligence Framework",
        content: `EduEden is a pioneer in teaching young minds how machine intelligence operates, but we enforce strict technological boundaries to shield children from adult algorithms:

A. Absolute Ban on Unfiltered Generative AI:
• Students under 14 are NEVER given direct, unsupervised access to unfiltered open-web large language models, generative chatbot endpoints (such as unrestricted ChatGPT), or unrestricted image generation scrapers (such as Midjourney or Stable Diffusion).

B. Walled-Garden Machine Learning Sandboxes:
• AI concepts are explored through closed, mentor-supervised educational sandboxes (e.g., Google Teachable Machine, MIT App Inventor AI, Scratch 3.0 ML blocks).
• Students train algorithms on safe, local datasets—such as recognizing hand-drawn geometric shapes, toy figures, or musical instruments.

C. Prohibition on Personal Training Data:
• Students are strictly forbidden from training AI models using family photographs, personal biometric facial scans, personal voice recordings, or household identifiers.

D. Digital Citizenship & Algorithmic Ethics:
• Every AI lesson includes mandatory discussions on algorithmic bias, data hygiene, intellectual property, environmental energy costs of server clusters, and the irreplaceable value of human empathy and creative agency.`,
      },
      {
        heading: "5. Anti-Bullying, Neurodiversity & Emotional Wellbeing",
        content: `Learning to code involves encountering syntax errors and logical failures. We cultivate an emotionally safe culture where vulnerability is protected:

A. The "Bug Celebration" Culture:
• We explicitly teach that software bugs are not personal deficiencies; they are collaborative intellectual puzzles.
• Teasing, mocking, or impatient remarks regarding another student's coding speed, vocal tone, or errors trigger immediate mentor intervention.

B. Inclusion for Neurodivergent Learners:
• Our mentors are trained to accommodate diverse learners—including students with ADHD, dyslexia, sensory sensitivities, and high-functioning autism spectrum profiles.
• Instructors modulate audio stimulation, break complex instructions into bite-sized visual cards, and provide sensory-friendly pacing adjustments.

C. Progressive De-escalation Protocol:
• Step 1: Gentle verbal redirection and private reminder.
• Step 2: Temporary audio muting or private room isolation to prevent disruption.
• Step 3: Immediate session dismissal followed by a mandatory parent debrief. Continued abusive behavior results in permanent expulsion without peer exposure.`,
      },
      {
        heading: "6. Screen Ergonomics & Physical Health Standards",
        content: `EduEden rejects marathon screen sessions that induce digital eye strain, postural collapse, or mental fatigue:

• Hard Session Limits: Instructional sessions are strictly capped at 45 minutes for Sprouts (K–2) and 50–55 minutes for Explorers (Grades 3–5) and Innovators (Grades 6–8).
• The 20-20-20 Visual Rule: At the 25-minute mark of every class, mentors lead the cohort in a 20-second visual rest, instructing students to gaze at an object 20 feet away to relax ocular ciliary muscles.
• Postural Alignment & Physical Check-ins: Guided neck stretches, shoulder rolls, and ergonomic reminders are built directly into our lesson slide transitions.
• Active Construction vs. Passive Consumption: Screen time during EduEden classes is 80% active software architecture, logic problem solving, and verbal reasoning—never passive, hypnotic video streaming.`,
      },
      {
        heading: "7. Immediate Safeguarding Escalation & Hotline",
        content: `We maintain a zero-bureaucracy reporting pathway for parents, learners, or staff who observe any deviation from our Safety Charter:

• 24/7 Emergency Safety Hotline (WhatsApp & Voice): +91-9153573335
• Confidential Safeguarding Email: support@edueden.online (Subject: URGENT - SAFEGUARDING)
• Rapid Response Guarantee: The Academic Dean personally initiates an investigation within 2 hours of any reported safety or behavioral concern.
• Transparent Findings: Parents receive written diagnostic summaries and verified remediation actions within 24 hours of investigation completion.`,
      },
    ],
  },

  pedagogy: {
    id: "pedagogy",
    title: "Pedagogy Standards",
    subtitle: "Our constructionist learning model, Socratic code debugging, developmental continuum, and capstone assessment standards for K-8 creators.",
    lastUpdated: "November 2026",
    sections: [
      {
        heading: "1. Theoretical Foundations: Papertian Constructionism",
        content: `EduEden's educational framework is grounded in Seymour Papert's seminal Constructionist theory of learning, developed at the MIT Media Lab alongside Jean Piaget's cognitive constructivism.

Our foundational premise is simple yet revolutionary: Children do not master deep computational concepts by passively absorbing lectures, completing multiple-choice worksheets, or mindlessly copying pre-written code snippets. Children achieve profound intellectual mastery when they actively design, construct, and iterate upon personally meaningful, shareable artifacts.

At EduEden, children do not "study" computer science as an abstract theoretical subject; they architect playable games, compose interactive generative art, program animated narratives, and train machine learning models that solve challenges they care about.`,
      },
      {
        heading: "2. The Socratic Mentorship Model & Debugging Architecture",
        content: `When a student's code fails to produce the expected outcome, average programs take over the student's mouse or dictate the fix. EduEden mentors strictly adhere to the Socratic Debugging Method:

A. The Non-Intrusive Mentor Mandate:
• Mentors NEVER seize remote control of a student's mouse or write code lines into a student's project workspace. The child must physically execute every block snap, keystroke, and logic change.

B. Guided Inquiry vs. Direct Answers:
• Instead of stating "Your loop is missing an increment block," mentors ask probing diagnostic questions:
  - "Let's walk through the loop step by step. What happens to the score variable the instant the player touches the coin?"
  - "Notice the sprite moved left instead of right—what do our Cartesian coordinates tell us about positive versus negative X values?"
  - "How can we decompose this giant obstacle challenge into three smaller sub-problems?"

C. The 4-Step Systematic Debugging Loop:
1. Predict: Articulate in plain language what the algorithm was designed to accomplish.
2. Observe: Measure and document exactly what the software executed on the screen.
3. Isolate: Narrow down the root cause to a single event trigger, conditional block, or syntax line.
4. Iterate: Modify one parameter at a time and re-evaluate the execution state.

This methodology transforms software bugs from emotional frustration points into exciting detective puzzles, instilling systemic analytical resilience that elevates academic performance across mathematics, science, and reading comprehension.`,
      },
      {
        heading: "3. Age-Progressive Developmental Continuum (K–8)",
        content: `Our curriculum is scientifically aligned with developmental cognitive psychology milestones, transitioning gracefully from pre-reader visual block sequencing to professional syntax-driven programming:

================================================================================
TRACK 1: SPROUTS (Kindergarten – Grade 2 | Ages 5–7)
================================================================================
• Cognitive Stage: Pre-operational to early concrete operational thinking. Spatial reasoning, pattern recognition, and cause-and-effect association.
• Software Platform: ScratchJr & Physical Unplugged Algorithmic Games.
• Typing Prerequisite: ZERO keyboard typing or reading fluency required. The interface is 100% graphical iconography.
• Core Computational Milestones:
  - Linear execution sequencing (left-to-right algorithm flow).
  - Event triggers (Touch-to-start, collision triggers, message broadcast flags).
  - Iteration concepts (numeric repeat loops, infinite sound and animation loops).
  - Spatial coordinate navigation (directional grid steps, jump height timing).
  - Multi-character digital storytelling with original student-voiced audio dialog.

================================================================================
TRACK 2: EXPLORERS (Grades 3 – 5 | Ages 8–10)
================================================================================
• Cognitive Stage: Concrete operational thinking. Systematic logic, mathematical coordinates, variables, and game physics.
• Software Platform: Scratch 3.0, Google Teachable Machine, Physics Engines.
• Core Computational Milestones:
  - Cartesian Coordinate Geometry: Full X/Y axis navigation, velocity, acceleration, and simulated gravity physics.
  - State Machine Architecture: Multi-level game loops (Title Screen -> Gameplay -> Game Over / Victory).
  - Dynamic Variable Tracking: Numeric score accumulators, health bars, countdown timers, and high-score saves.
  - Complex Conditional Branching: Nested 'if/then/else' logic, boolean relational operators (AND, OR, NOT, <, >, =).
  - Modular Code Decomposition: Building custom reusable function blocks ('My Blocks') with numeric and boolean inputs.
  - Playful Artificial Intelligence: Training image and sound classifiers to control on-screen game characters using hand gestures and voice triggers.

================================================================================
TRACK 3: INNOVATORS (Grades 6 – 8 | Ages 11–14)
================================================================================
• Cognitive Stage: Formal operational thinking. Abstract logical systems, textual syntax rules, algorithmic efficiency, and structured software architecture.
• Software Platform: Real Python 3, Pygame Zero, IDLE & VS Code Sandboxes.
• Core Computational Milestones:
  - Syntax Precision: Mastering indentation rules, case sensitivity, comment documentation, and interpreting compiler error stack traces.
  - Variable Typing: Dynamic typing, integers, floats, string manipulation, and boolean state tracking.
  - Data Structures: Collections, lists (indexing, appending, slicing), tuples, and key-value dictionaries.
  - Algorithmic Flow Control: 'for' and 'while' loops, loop termination conditions, and mathematical modulus operators.
  - Functional Programming: Declaring custom functions, scope (local vs. global variables), parameter passing, and return value handling.
  - Automated Terminal Bots & ML Trees: Programming conversational decision-tree chatbots, text arcade games, and supervised machine learning algorithms.`,
      },
      {
        heading: "4. Authentic Capstone Projects & Permanent Portfolios",
        content: `EduEden repudiates standardized multiple-choice exams as an invalid metric of software engineering fluency. We utilize Authentic Assessment via original student Capstone Projects:

A. Capstone Project Requirements:
• Every learning unit culminates in an original Capstone Project ideated, coded, and debugged independently by the student.
• Cookie-cutter template copies are strictly prohibited; students select their own game theme, sprite artwork, physics rules, and narrative mechanics.

B. Permanent Cloud Portfolio Hosting:
• Every student project is permanently deployed to a dedicated, ad-free cloud URL.
• Students receive permanent ownership links so they can play their creations on household tablets, share links with grandparents across the world, and continue expanding code long after cohort graduation.

C. Demo Day Presentations:
• At the conclusion of each level, students present their capstone software in a live virtual Demo Day before peers and parents.
• Students explain their architectural logic, demonstrate how they overcame a major bug, and field questions, developing vital public presentation and technical defense skills.`,
      },
      {
        heading: "5. The 4-Dimensional Cognitive Readiness Rubric (CRR)",
        content: `Rather than assigning arbitrary letter grades, EduEden evaluates student growth across four multidimensional cognitive pillars:

1. Computational Decomposition (Weight: 25%):
• The child's capacity to break a daunting, complex game mechanic into orderly, manageable algorithmic sub-routines.

2. Debugging Resilience (Weight: 30%):
• The child's emotional equanimity, patience, and systematic deductive reasoning when facing compiler errors or unexpected physics glitches.

3. Algorithmic Logic & Syntax Fluency (Weight: 25%):
• Proper selection of loops, variables, conditionals, and functions that produce clean, efficient, bug-free execution.

4. Creative Innovation & Technical Articulation (Weight: 20%):
• Originality in gameplay design, user interface feedback, and the ability to clearly explain code logic to peers and mentors.

Following every cohort, parents receive an exhaustive written Milestone Evaluation Report documenting mastery levels, growth trajectories, and personalized recommendations for subsequent STEM exploration.`,
      },
      {
        heading: "6. Global Curricular Alignment & Standards",
        content: `EduEden's curriculum is benchmarked against the world's most prestigious computer science and educational technology frameworks:

• Computer Science Teachers Association (CSTA): Fully aligned with the CSTA K-12 Computer Science Standards (Level 1A, Level 1B, and Level 2).
• International Society for Technology in Education (ISTE): Conforms with ISTE Standards for Students—specifically Computational Thinker, Creative Communicator, and Innovative Designer benchmarks.
• Cross-Curricular Academic Elevation: Our coding projects deliberately reinforce grade-level mathematical competencies (Cartesian coordinates, fractions, angles, algebraic variables) and literacy skills (narrative arc, dialogue sequencing, expository speaking).`,
      },
    ],
  },
  terms: {
    title: "EduEden Terms of Service & Academy Enrollment Agreement",
    lastUpdated: "November 2026 • Version 2.4",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        content: `Welcome to EduEden Academy ("EduEden", "we", "our", or "us"). By booking a complimentary demo class, enrolling in a mentored cohort, accessing our virtual learning classrooms, or utilizing any services hosted at edueden.online, you (the parent or legal guardian) agree to be bound by these Terms of Service. If you do not agree to these terms, please do not register for or participate in EduEden programs.`,
      },
      {
        heading: "2. Free 45-Minute Demo Class Terms",
        content: `• Zero-Risk Exploration: Our complimentary 45-minute demo session requires no credit card on file, incurs zero billing commitments, and carries no obligation to enroll in paid cohorts.
• Personalized Assessment: Following the demo session, your child's assigned certified mentor provides a personalized Cognitive Readiness & Milestone Evaluation.
• Capacity & Attendance: Demo sessions are subject to mentor availability. We ask that parents notify us at least 6 hours in advance if a demo session must be rescheduled.`,
      },
      {
        heading: "3. 1:4 Cohort Scheduling, Attendance & Makeup Policy",
        content: `• Strict 1:4 Student-Mentor Ratio: All group classes are capped at a maximum of four (4) students to guarantee intimate, individualized attention.
• Scheduled Class Times: Sessions meet weekly at mutually selected time slots. Class links are transmitted securely via email and WhatsApp.
• Free Makeup Sessions: If a child must miss a session due to illness or family conflict, parents may request a free makeup class or 1-on-1 mentor catch-up block with at least 12 hours prior notification (up to 2 makeup sessions per semester).
• Equipment Requirements: Students require a desktop or laptop computer (Windows, macOS, or Chromebook), a stable internet connection, an active webcam, and a working microphone.`,
      },
      {
        heading: "4. Student Code of Conduct & Safe Learning Environment",
        content: `• Mutual Respect: EduEden classrooms are encouraging, joyful, and inclusive spaces. Any form of harassment, cyberbullying, offensive language, or disruptive behavior will result in immediate removal from the cohort.
• Kid-Safe AI & Cloud Safety: Students must adhere to mentor guidelines when experimenting with kid-safe AI and cloud tools. Students may not attempt to circumvent platform filters, access unapproved external sites, or share private credentials with classmates.`,
      },
      {
        heading: "5. Intellectual Property & Student Project Ownership",
        content: `• 100% Student Ownership: Students retain absolute, 100% intellectual property ownership of every game, story, script, and AI invention they design and build at EduEden.
• Open Portfolio Rights: Students and families are free to publish, share, and expand upon their projects indefinitely on personal Scratch, ScratchJr, or GitHub accounts.
• Academy Curriculum Rights: EduEden retains exclusive intellectual property rights over all proprietary curriculum slides, lesson outlines, pedagogical exercises, and instructional materials provided during classes.`,
      },
      {
        heading: "6. Tuition, Billing, Cancellation & 100% Money-Back Guarantee",
        content: `• Transparent Pricing: Cohort tuition is billed transparently without hidden administrative fees, surprise renewals, or long-term lock-in contracts.
• 100% Happiness Money-Back Guarantee: If within the first two (2) paid sessions you feel EduEden is not the ideal fit for your child, notify our support team for a full 100% refund of your cohort tuition, no questions asked.
• Cancellation: Parents may pause or cancel upcoming billing cycles at any time with 7 days' advance written notice prior to the start of the subsequent monthly period.`,
      },
      {
        heading: "7. Governing Law, Registered Entity & Support Contact",
        content: `• Operating Entity: EduEden Academy Private Limited, 1207, Sector 62, Noida, NCR 201309, India.
• Governing Law: These Terms are governed by the laws applicable to digital educational service agreements.
• Official Support & Queries: For billing, scheduling, or terms inquiries, reach our team at support@edueden.online or via WhatsApp at +91-9153573335.`,
      },
    ],
  },
};
