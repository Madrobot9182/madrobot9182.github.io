import HorizontalLine from "@/components/horizontal-line";
import ProfilePfp from "../../../public/placeholders/ProfilePfp.avif";
import Image from "next/image";

type ResumeEntryProps = {
  title: string;
  date?: string;
  subtext?: string;
  bullets?: string[];
};

// One resume entry: bold title + right-aligned date, italic subtext, then bullets
function ResumeEntry({ title, date, subtext, bullets }: ResumeEntryProps) {
  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
        <h3 className="font-bold">{title}</h3>
        {date && <span className="text-gray-800 dark:text-zinc-300 sm:text-right whitespace-nowrap">{date}</span>}
      </div>
      {subtext && <p className="italic text-gray-800 dark:text-zinc-300">{subtext}</p>}
      {bullets && (
        <ul className="text-gray-800 dark:text-zinc-300 list-disc pl-5 space-y-1 mt-2 md:ml-3">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function AboutMe() {
  const ulClassName = "text-gray-800 dark:text-zinc-300 list-disc pl-5 space-y-1 pb-4";

  return (
    <div className="mx-auto flex flex-col justify-between items-center px-6 mb-2 md:max-w-7xl">
      <div className="mx-auto flex flex-col gap-x-7 mt-10 mb-10 justify-between items-center">
        <div className="flex flex-row items-center gap-6 mb-5">
          <Image src={ProfilePfp} alt="Profile Picture" className="rounded-lg w-3xs h-auto" />
          <div>
            <h1 className="text-left wrap text-7xl font-semibold ">Ryan</h1>
            <h1 className="text-left wrap text-7xl font-semibold">Yan</h1>
          </div>
        </div>
        <div className="flex flex-col max-w-md">
          <h3 className="text-center wrap text-md font-medium">
            | Software and Game Developer | Computer Science, Specialization in AI | University of Alberta | obligatory
            &quot;I use arch btw&quot; |
          </h3>
        </div>
      </div>

      <div>
        <p className="mb-6">
          Hi, I am Ryan, a fifth-year Computer Science student at the University of Alberta, specializing in AI with a minor in Mathematics. I am currently researching how to turn gameplay videos into human-readable programs, and I am a TA for CMPUT 250, where I lead a student team as executive producer building their first video game.
        </p>
        <p className="mb-6">
          Outside of work, I am the Vice President of the East Asian Studies Undergraduate Association, a regional-level swimmer, an avid backpacker, and a bilingual (English and Mandarin) indie game developer and music composer.
        </p>
        <HorizontalLine />
        <h1 className="font-medium text-4xl pt-4 mb-4"> Contact </h1>
        <ul className={ulClassName}>
          <li>Email: ryany9182@protonmail.com</li>
          <li>
            Github:{" "}
            <a href="https://github.com/Madrobot9182/" target="_blank">
              https://github.com/Madrobot9182/
            </a>
          </li>
          <li>
            Linkedin:{" "}
            <a href="https://www.linkedin.com/in/ryan-yan-b296a4205/" target="_blank">
              https://www.linkedin.com/in/ryan-yan-b296a4205/
            </a>
          </li>
        </ul>
        <HorizontalLine />
        <h1 className="font-medium text-4xl pt-4 mb-4"> Technical Skills </h1>
        <ul className={ulClassName}>
          <li>Languages: Python, C, C++, C#, SQL, Java, JavaScript, TypeScript, Julia, RISC-V Assembly</li>

          <li>Libraries: PyTorch, NumPy, scikit-learn, Matplotlib, pandas, NLTK, SFML</li>

          <li>Frameworks: React.js, Next.js, Tailwind CSS, Chakra UI, Flutter</li>

          <li>Game Engines: Unity, Godot, Unreal</li>

          <li>Databases: SQLite, MongoDB, Firebase, Neon</li>

          <li>Tools: Git, GitHub, Docker Compose, Nginx, Linux, Unix, Jupyter Notebook</li>

          <li>Collaboration: Slack, Trello, Figma, Google Workspace, Microsoft Office, LibreOffice</li>
        </ul>

        <HorizontalLine />
        <h1 className="font-medium text-4xl pt-4 mb-4"> Education </h1>
        <ResumeEntry
          title="University of Alberta (UofA)"
          date="Edmonton, AB, Canada | Aug 2022 - May 2027"
          subtext="Bachelor of Computer Science, Specialization in AI | Minor in Mathematics | 3.6 GPA"
        />

        <HorizontalLine />
        <h1 className="font-medium text-4xl pt-4 mb-4"> Research Experience </h1>
        <ResumeEntry
          title="Undergraduate Researcher"
          date="Aug 2026 - Present"
          subtext="University of Alberta | Dave Goel, Matthew Guzdial"
          bullets={[
            "Developing an information extraction and program synthesis approach that converts gameplay videos into human-readable programs. Enabling clearer analysis of in-game ground-truth entity behaviors.",
            "Designing an unsupervised ML pipeline that selects important entities from videos, integrating Meta SAM 2 for video segmentation with search-based synthesis and LLMs. Recursive discovery of entity behaviors.",
            "Evaluating generated program quality in terms of behavioral accuracy and program size. Measuring quality of synthesized behaviors against ground-truth implementations.",
          ]}
        />

        <HorizontalLine />
        <h1 className="font-medium text-4xl pt-4 mb-4"> Experience </h1>
        <ResumeEntry
          title="Teaching Assistant"
          date="Jan 2026 - Present"
          subtext="CMPUT 250, University of Alberta"
          bullets={[
            "Served as Executive Producer, overseeing a 6-student team developing their first video game; guided project scope, technical direction, milestone delivery, and weekly team meetings.",
            "Coordinated with 8 TAs to plan schedules, communicate deadlines, resolve team conflicts, answer questions, and evaluate project deliverables with consistent grading standards.",
            "Provided technical and development feedback through GitHub and project discussions, supporting team collaboration and professional conduct while helping students improve their project work.",
          ]}
        />
        <ResumeEntry
          title="Software Engineer"
          date="Sep 2024 - May 2025"
          subtext="Student Team for Alberta Rocketry Research (UASTARR)"
          bullets={[
            "Collaborated in sub-teams of 30+ students to launch supersonic rockets in IREC and Launch Canada.",
            "Co-developed StarrGazer, an NVIDIA Jetson Nano-based monitoring and tracking system processing camera and GPS data for rocket launches, supporting live PC and mobile telemetry during launches.",
            "Co-developed a YOLO-based visual recognition pipeline for redundant autonomous tracking via a moving DSLR camera; 85%+ precision with sub-1s latency in testing and reliable in-field performance.",
          ]}
        />

        <HorizontalLine />
        <h1 className="font-medium text-4xl pt-4 mb-4"> Projects </h1>
        <ResumeEntry
          title="Computer Vision | CrackScannerAI at NatHack"
          date="Nov 2026"
          subtext="CityScan Technologies, Mustafa Gui | PyTorch, Python, AWS, Jupyter Notebook, Git"
          bullets={[
            "Improved a startup's unsupervised machine learning pipeline, achieving 4x more correct detection and 80% accuracy of road pavement damages on real city images.",
            "Implemented image preprocessing and open source object detection + pixel-level segmentation models fine-tuned on company data. Detailed measurements and cost estimates for road triage and repair.",
            "Optimized to run only on CPU, optional GPU. Sped up CityScan batch processing by 12x; 10,000 images processed from 4 days to 8 hours. AWS costs reduced by 25%.",
          ]}
        />
        <ResumeEntry
          title="Dynamic EEG Focus Application | AttentionSpanAI at NatHack"
          date="Nov 2025"
          subtext="PyTorch, Python, React, Git"
          bullets={[
            "Rapidly prototyped, developed, and marketed an interactive focus application over a 4-day hackathon.",
            "Programmed a PyTorch neural network to quantify and predict a user's level of focus and fatigue via a Muse 2 headband EEG and gyroscope data. Led data collection, post-processing, and model training.",
            "Above 80% accuracy during extrinsic evaluation against real users. Web UI graphs live model feedback.",
          ]}
        />
        <ResumeEntry
          title="Video Game | Doubt's Horizon by SCNS"
          date="Jan 2025 - May 2025"
          subtext="Unity, C#, Git"
          bullets={[
            "Programmer and audio engineer developing a full-fledged action RPG within an indie studio of 5. Designed custom audio, combat, dialog, and entity systems in Unity for expandability across levels.",
            "Coordinated work, adapted to circumstances, and maximized productivity to hit all 6 deadlines.",
            "Nominated for the University of Alberta game award for best technical complexity and writing.",
          ]}
        />
        <ResumeEntry
          title="Self-hosted NAS & Server"
          date="Sep 2024 - Present"
          subtext="Linux, Docker, Nginx, OpenClaw, LLM"
          bullets={[
            "Self-hosted media vault and backup solution. Docker Compose, Nginx, Bitwarden, and Tailscale VPN.",
            "Router for a network of AI agents, distributing workload across multiple PCs for automatic programming.",
            "Debian Linux, with a custom kernel and the ZFS filesystem across 4 RAID hard drives. 24/7 uptime for multiple users' remote storage and services, consuming only 20W of power at idle.",
          ]}
        />
        <ResumeEntry
          title="Portfolio and Blog Website"
          date="Jun 2024 - Present"
          subtext="Next.js, Tailwind CSS, TypeScript, Node.js"
          bullets={[
            "Actively maintaining a modern blogging website with minimal dependencies and streamlined code.",
            "Implemented Next.js image/page optimizations to cut website load times by 60%.",
            "Improved website SEO by 30% by implementing Google-recommended best practices.",
          ]}
        />

        <h2 className="font-medium text-2xl pt-2 mb-4"> School Projects </h2>
        <ResumeEntry
          title="Natural Language Processing"
          date="Jan 2026 - Apr 2026"
          subtext="Python, Git, NLTK"
          bullets={[
            "Developed CFG-based parsers and generators for syntactic analysis, grammar checking, and natural language generation.",
            "Implemented unigram, bigram, and higher-order N-gram language models, evaluating models using perplexity. Analyzed the effects of model order, probability distributions, and corpus characteristics.",
            "Generated sentences probabilistically from trained language models. Worked with core NLP techniques including tokenization, parsing, probability estimation, smoothing, interpolation, and statistical modeling.",
          ]}
        />
        <ResumeEntry
          title="Custom Game Engine"
          date="Sep 2025 - Dec 2025"
          subtext="C++, Git, SFML"
          bullets={[
            "Developed two 2D game engines in C++, using Object-Oriented Programming and Entity Component System architecture. Rigorous focus on optimizations and memory management.",
            "Implemented sprite rendering, ray-tracing, rasterization, camera movement, physics simulations, transformations, shaders, scene factories, map creator. All fully documented and production ready.",
            "Sped up SFML texture loading over 5x by managing memory directly, eliminating 80% of loading times.",
            "Under 1/10 the file size and over 5x the performance compared to identical implementations in Unity.",
          ]}
        />
        <ResumeEntry
          title="Operating Systems"
          date="Jan 2024 - Apr 2024"
          subtext="C, Linux, Unix, POSIX"
          bullets={[
            "Implemented a custom multithreading library and MapReduce framework in C, parallelizing workloads with minimal overhead and synchronizing a thread pool to safely manage shared data; achieved 10x performance improvement with minimal memory.",
            "Developed a custom Unix shell in C using low-level system calls, implementing command execution, process management, I/O operations, pipes, and common shell functionality.",
            "Built a simulated filesystem supporting file and directory creation, reading, deletion, navigation, mounting, and defragmentation, with automated filesystem integrity verification.",
          ]}
        />
        <ResumeEntry
          title="Event Booking Android Application"
          date="Jan 2024 - Apr 2024"
          subtext="Java, Android, Git"
          bullets={[
            "Programmed a mobile event hosting application, allowing users to join events and organizers to host events in real time. Firebase storage synchronizes user data and notifications across apps.",
            "Abstracted complicated Firebase queries into simple helper functions, speeding up development and reducing boilerplate code for my team of 6. Wrote unit tests alongside development.",
          ]}
        />
        <ResumeEntry
          title="Mock Library Database and Management Software"
          date="Sep 2023 - Dec 2023"
          subtext="SQL, MongoDB"
          bullets={[
            "An intuitive CLI interface to store, modify, and query a SQLite database of users and their data.",
            "Careful schema and query designs for SQL and MongoDB to find thousands of records efficiently.",
          ]}
        />
        <ResumeEntry
          title="Snake in Assembly"
          date="Sep 2023 - Dec 2023"
          subtext="Assembly"
          bullets={[
            "The entire game of Snake in RISC-V assembly, running under RARS.",
            "Careful management of the processor clock, interrupts, kernel space, rendering, and registers.",
            "Just under 1000 lines of code, requiring precise bookkeeping, documentation, and maintenance.",
          ]}
        />

        <HorizontalLine />
        <h1 className="font-medium text-4xl pt-4 mb-4"> Achievements </h1>
        <ul className={ulClassName}>
          <li>
            Vice President of the KGK Department of East Asian Studies Undergraduate Association. Outreached to other
            clubs and led weekly meetings. Lead organizer of our annual Lunar New Year festival and Chericon convention
            with 2,500+ combined attendees.
          </li>
          <li>
            Frequent solo and group traveler with multi-month backpacking trips around multiple countries. Strong
            intuition for adaptable planning, time management, and an open mind to new worlds.
          </li>
          <li>
            Regional-level Swim Athlete with the Olympic Swim Club. Crushed 30 hours/week of practices to win medals.
          </li>
        </ul>
      </div>
    </div>
  );
}
