import { Link } from "react-router-dom";
import FourierConvolutionPost from "./blogs/fourierConvolution";
import Jumbotron from "./components/jumbotron";

interface MusingInterface {
  title: string;
  description: string;
  created: Date;
  slug: string;
  tags: string[];
  image: string;
  component?: JSX.Element;
}

const DneYet = () => {
  const content = <>
    Come back another time{" "}
    <Link to="/">Go Home</Link>
  </>;
  return <Jumbotron title="Not Written Yet" content={content} />
};


const musings: MusingInterface[] = ([
  {
    title: "Deep Learning Benchmarks for the RTX 3090",
    slug: "/blog/rtx-3090-nn-performance",
    tags: ["Deep Learning", "Speed Test", "RTX 3090"],
    description: "Analysis of the RTX 3090 Inference Speeds of commonly used neural networks.",
    image: "https://images.unsplash.com/photo-1625481917721-a1a02bc5dc2f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    created: new Date(Date.now() - 1),
    // component: <DneYet />
  },
  {
    title: "Developing Vhell: An advanced Docker/VM Tool",
    slug: "/blob/developing-vhell-an-advanced-docker-vm-tool",
    tags: ["DevOps", "Python"],
    description: "The process of developing Vhell, a python tool I use converts docker images to VMs.",
    image: "https://images.unsplash.com/photo-1625851425826-9082c9bf3958?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80",
    created: new Date(Date.now() - 2),
    // component: <DneYet />
  },
  {
    title: "Expanding Python with C++ Datastructures",
    slug: "/blog/expanding-python-with-c-datastructures",
    image: "https://images.unsplash.com/photo-1625851740514-6ce39269bc40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    tags: ["Python", "C++"],
    description: "Leveraging more efficient data structures in Python for speed gains.",
    created: new Date(Date.now() - 3),
    // component: <DneYet />
  },
  {
    title: "Powering a Popular Instagram Account using ML & Python",
    slug: "/blog/powering-a-popular-instagram-account-using-ml-python",
    image: "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1428&q=80",
    tags: ["Deep Learning", "Python"],
    description: "Using ML to maximize the popularity of a Instagram account",
    created: new Date(Date.now() - 4),
    // component: <DneYet />
  },
  {
    title: "My Experiences Working in Tech Post-Bootcamp and Post-University",
    slug: "/blog/my-experiences-working-in-tech-post-bootcamp-and-post-university",
    image: "https://images.unsplash.com/photo-1625821398457-1a58dd39577b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    tags: ["Education"],
    description: "A reflection on how Codefellows and UW impacted my job hunting & job performance",
    created: new Date(Date.now() - 5),
    // component: <DneYet />
  },
  {
    title: "Fourier Convolution Networks & Intel's New AVX512 ISA",
    slug: "/blog/fourier-convolution-networks-intels-new-avx512-isa",
    tags: ["Deep Learning", "Intel"],
    description: "Notes about the new AVX512 FP16 instruction set released by intel, and its impact on future fourier convolution nets.",
    image: "https://images.unsplash.com/photo-1625763751455-a2bf939e1d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    created: new Date(1625887362398),
    component: <FourierConvolutionPost />
  },
  {
    title: "Bypassing Malware Scanners with Custom Assemblers",
    slug: "/blog/developing-vhell-an-advanced-docker-vm-tool",
    tags: ["Malware", "C", "Python"],
    description: "A novice's notes about how he bypassed virus detection software by writing a custom assembler.",
    image: "https://images.unsplash.com/photo-1625773157891-a5202199feaa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    created: new Date(Date.now() - 7),
    // component: <DneYet />
  },
  {
    title: "Correlation Dredging In Stocks",
    slug: "/blog/correlation-dredging-in-stocks",
    description: "Committing logical falicies in stock analysis in the name of education.",
    image: "https://images.unsplash.com/photo-1625825563423-608ffa27f377?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["Economics", "Social Science", "Data Science"],
    created: new Date(Date.now() - 8),
    // component: <DneYet />
  },
  {
    title: "Gerrymandering Analysis",
    slug: "/blob/gerrymandering-analysis",
    description: "Taking a closer look at Duke's analysis of Gerrymandering.",
    image: "https://images.unsplash.com/flagged/photo-1625836014110-880aae477f2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    tags: ["Politics", "Social Science", "Data Science"],
    created: new Date(Date.now() - 9),
    // component: <DneYet />
  },
  {
    title: "Rapid AI-as-a-Service Development Toolkit",
    slug: "/blob/rapid-ai-as-a-service-development-toolkit",
    description: "Developing a toolkit that quickly builds AI as a service for hackathons.",
    image: "https://images.unsplash.com/photo-1620588274861-a4bbf3378f65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    tags: ["Python"],
    created: new Date(Date.now() - 10),
    // component: <DneYet />
  },
  {
    title: "Using Policing Tools on the Police",
    slug: "/blob/using-policing-tools-on-the-police",
    description: "Using crime prediction tools to predict police brutality.",
    image: "https://images.unsplash.com/photo-1625775021321-01a40460b775?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    tags: ["Social Science", "Data Science"],
    created: new Date(Date.now() - 11),
    // component: <DneYet />
  }
] as MusingInterface[]).filter(e => e.component !== undefined).sort(e => e.created.getTime());

export default musings;