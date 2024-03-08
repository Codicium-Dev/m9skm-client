import Image from "next/image";
import heroApp from "@/public/assets/hero_app.png";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <div className="flex flex-row gap-10">
      <div>
        <h1 className="text-5xl font-bold">Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          neque at, tenetur minima exercitationem molestias et quis ipsam quas
          sapiente eum fuga illum libero ab doloremque delectus nulla vitae
          veniam.
        </p>
        <Button
          variant="outline"
          className="bg-transparent border-black hover:bg-black hover:text-white"
        >
          Download Now
        </Button>
      </div>
      <div>
        <Image width={400} src={heroApp} alt="hero_app" />
      </div>
    </div>
  );
}

export default Hero;
