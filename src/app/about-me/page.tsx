import HorizontalLine from "@/components/horizontal-line";
import ProfilePfp from "../../../public/placeholders/ProfilePfp.jpg";
import Image from "next/image";

export default function AboutMe() {
  const ulClassName = "text-gray-800 dark:text-zinc-300 list-disc pl-5 space-y-1 pb-4";

  return (
    <div className="mx-auto flex flex-col justify-between items-center px-6 mb-2 md:max-w-7xl">
      <div className="mx-auto flex flex-col gap-x-7 mt-10 mb-10 justify-between items-center">
        <div className="flex flex-row gap-6 mb-5">
          <Image src={ProfilePfp} alt="Profile Picture" width={200} height={200} className="rounded-lg" />
          <div>
            <h1 className="text-left wrap text-7xl font-semibold mt-5">Ryan</h1>
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
          Sup! I am a computer science and mathematics student at the University of Alberta, specializing in artificial
          intelligence. I have a passion for creating interesting projects that intersect functionality and creativity.
          As a software developer, game developer, musician, language learner, and hardware enthusiast, I&apos;m always
          trying to develop new skills and build upon current and emerging industries.
        </p>
        <p className="mb-6">
          I have a wide variety of hobbies and endeavors, from 3D printing to composing music, playing and making video
          games, and programming various software projects across the tech stack. Billingual in English and Mandarin,
          and also learning Japanese and French. See my blog and project pages for more details!
          <br />
        </p>
        <HorizontalLine />
        <h1 className="font-medium text-4xl pt-4 mb-0"> Technologies </h1>
        <h2 className="font-medium mt-8 mb-3">
          A list of technologies, languages, and tools that I am familiar with:
        </h2>

        <ul className={ulClassName}>
          <li>Functional Languages</li>
          <ul className={ulClassName}>
            <li>C, C#, C++, Python, Java, Javascript, SQL, Julia, Risc-V Assembly</li>
            <li>PyTorch, NumPy, Matplotlib, scikit-learn, pandas</li>
          </ul>
          <li>Framework</li>
          <ul className={ulClassName}>
            <li>Node.js, React.js, Next.js, Tailwind CSS, ChakraUI, Flutter</li>
          </ul>
          <li>Databases</li>
          <ul className={ulClassName}>
            <li>SqLite, MongoDB, Firebase</li>
          </ul>
          <li>Tools</li>
          <ul className={ulClassName}>
            <li>Git, GitHub, Docker, Kubernetes, Linux, Unix, Jupyter Notebook</li>
          </ul>
          <li>Collaborative Software</li>
          <ul className={ulClassName}>Slack, Trello, Figma, Norton, Google Workspace, Microsoft Office, LibreOffice</ul>
        </ul>
      </div>
    </div>
  );
}
