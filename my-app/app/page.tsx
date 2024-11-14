import Feature1 from "./componnents/home/feature1";
import Feature2 from "./componnents/home/feature2";
import Hero from "./componnents/home/Hero";
import About from "./componnents/home/about";
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Feature1
       imageSrc={"https://plus.unsplash.com/premium_photo-1702598952165-17be00b6b343?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
       title={"Meet our World Dentist team "} 
       description={"If you have any special needs for your treatment, such as dental anxiety or other concerns, you are very welcome to contact us so we can find the practitioner and dentist who will suit your needs.For us, it's essential that everyone receives the treatment that makes their visit to our dental clinic a positive experience."} 
       linkText={"Meet our team"}
       linkHref={"/our-team"}
       features={["team", "team",]} />
        <Feature2
       imageSrc={"https://plus.unsplash.com/premium_photo-1702598952165-17be00b6b343?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
       title={"Meet our World Dentist team "} 
       description={"If you have any special needs for your treatment, such as dental anxiety or other concerns, you are very welcome to contact us so we can find the practitioner and dentist who will suit your needs.For us, it's essential that everyone receives the treatment that makes their visit to our dental clinic a positive experience."} 
       linkText={"Meet our team"}
       linkHref={"/our-team"}
       features={["team", "team",]} />
    </div>
  );
}
