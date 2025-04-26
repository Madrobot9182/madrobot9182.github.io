import HorizontalLine from "@/components/horizontal-line";
import ProfilePfp from "@/images/ProfilePfp.jpg";
import Image from "next/image";

import { DiRust } from "react-icons/di";

export default function AboutMe() {
  return (
    <div className="mx-auto flex flex-col justify-between items-center">
      <div className="mx-auto flex flex-col gap-x-7 mt-10 mb-10 justify-between items-center">
        <div className="flex flex-row gap-6 mb-5">
          <Image
            src={ProfilePfp}
            alt="Profile Picture"
            width={200}
            height={200}
          />
          <div>
            <h1 className="text-left wrap text-7xl font-semibold mt-5 mb-5">
              Ryan
            </h1>
            <h1 className="text-left wrap text-7xl font-semibold">Yan</h1>
          </div>
        </div>
        <div className="flex flex-col max-w-md">
          <h3 className="text-center wrap text-md font-medium">
            | Computer Science, Specialization in AI | University of Alberta |
            obligatory &quot;I use arch btw&quot; |
          </h3>
        </div>
      </div>

      <div className="mx-10 md:max-w-4xl">
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          accumsan turpis, sit amet rutrum eros gravida eget. Cras accumsan
          neque a purus dapibus fermentum. Nulla vitae purus tincidunt,
          pellentesque dui nec, lacinia eros. Integer ac ante quis sapien
          maximus fringilla non id sapien. In dui lectus, laoreet sit amet lorem
          vel, consequat cursus diam. Sed semper tortor eget dictum eleifend.
          Quisque placerat laoreet lectus ac malesuada. Sed mattis at ipsum
          vitae congue. Nam maximus lectus non diam faucibus porta. Proin
          scelerisque justo vel accumsan lobortis. Donec consequat egestas
          dignissim. Suspendisse dapibus sem velit, non porttitor metus interdum
          quis. Suspendisse ligula metus, ullamcorper a sem eu, posuere pulvinar
          lacus. Pellentesque at consequat purus, id consequat leo. Ut lobortis
          massa id tempor sagittis. Nam vitae sollicitudin libero.
        </p>
        <HorizontalLine />
        <h2 className="text-left wrap text-3xl font-semibold mt-5 mb-5">Technologies</h2>
        <p className="mb-4">
        Lorem ipsum dolor sit amet, consecte
        </p>
        <ul className="list-disc ps-4">
          <li>
            wooo <DiRust/>
          </li>
          <li>
            booo
          </li>
        </ul>
      </div>

    </div>
  );
}
