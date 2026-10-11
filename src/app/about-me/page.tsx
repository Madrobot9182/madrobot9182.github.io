import HorizontalLine from "@/components/horizontal-line";
import ProfilePfp from "../../../public/placeholders/ProfilePfp.avif";
import Image from "next/image";

export default function AboutMe() {
  const ulClassName = "text-gray-800 dark:text-zinc-300 list-disc pl-5 space-y-1 pb-4";

  return (
    <div className="mx-auto flex flex-col justify-between items-center px-6 mb-2 md:max-w-7xl">
      <div className="mx-auto flex flex-col gap-x-7 mt-10 mb-10 justify-between items-center">
        <div className="flex flex-row gap-6 mb-5">
          <Image src={ProfilePfp} alt="Profile Picture" className="rounded-lg w-3xs h-auto" />
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
          Sup! I am a 5th year Computer Science, Specialization in AI student at the University of Alberta. I am
          currently researching how to apply reinforcement learning to extract game audio, and to correlate game audio
          with player tension. Also a TA for the Computer Game Development Certificate.
        </p>
        <p className="mb-6">
          Outside of my career, I have a wide variety of hobbies. Indie game development, travel enthusiast, digital
          music composer, and billingual in English & Mandarin.
        </p>
        <HorizontalLine />
        <h1 className="font-medium text-4xl pt-4 mb-4"> Contact </h1>
        <p className="mb-6">
          If you are interested in working together, I am currently looking for work in the field of AI research and
          development, data scientist, or game development. You can also find these links in the bottom bar.
        </p>
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
          <li>Languages: Python, C, C++, C#, Java, JavaScript, SQL, Julia, RISC-V Assembly</li>

          <li>Libraries: PyTorch, NumPy, Matplotlib, scikit-learn, panda</li>

          <li>Frameworks: Node.js, React.js, Next.js, Tailwind CSS, ChakraUI, Flutter</li>

          <li>Game Engines: Unity, Godot, Unreal</li>

          <li>Databases: SQLite, MongoDB, Firebase, Neon</li>

          <li>Tools: Git, GitHub, Docker Compose, Linux, Unix, Jupyter Notebook</li>

          <li>Collaboration: Slack, Trello, Figma, Google Workspace, Microsoft Office, LibreOffice</li>
        </ul>
      </div>
    </div>
  );
}
